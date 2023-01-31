import React, { createContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'

export type colorTagType = {
    colorName: string,
    colorValue: string,
}

const colorTags = [
    {
        colorName: 'Blue',
        colorValue: '#3DA5FF',
    },
    {
        colorName: 'Teal',
        colorValue: '#00B9A8',
    },
    {
        colorName: 'Mint',
        colorValue: '#83F3B8',
    },
    {
        colorName: 'Green',
        colorValue: '#74dc2e',
    },
    {
        colorName: 'Sage',
        colorValue: '#afbf8d',
    },
    {
        colorName: 'Yellow',
        colorValue: '#ffe272',
    },
    {
        colorName: 'Beige',
        colorValue: '#f1d299',
    },
    {
        colorName: 'Brown',
        colorValue: '#986a33',
    },
    {
        colorName: 'Orange',
        colorValue: '#ff9351',
    },
    {
        colorName: 'Paach',
        colorValue: '#eba39c',
    },
    {
        colorName: 'Red',
        colorValue: '#ff3737',
    },
    {
        colorName: 'Maroon',
        colorValue: '#a72626',
    },
    {
        colorName: 'Pink',
        colorValue: '#ff74bc',
    },
    {
        colorName: 'Purple',
        colorValue: '#bf51e0',
    },
    {
        colorName: 'Navy',
        colorValue: '#414796',
    },
    {
        colorName: 'Black',
        colorValue: '#333333',
    },
    {
        colorName: 'Grey',
        colorValue: '#dcdcdc',
    },
    {
        colorName: 'White',
        colorValue: '#ffffff',
    },
]

const themeTags = [
    'Pastel', 'Vintage', 'Retro', ' Neon', 'Gold', 'Light',
    'Dark', 'Warm', 'Cold', 'Summer', 'Fall', 'Winter', 'Spring',
    'Happy', 'Nature', 'Earth', 'Space', 'Rainbow', 'Gradient', 'Sunset',
    'Sky', 'Sea', 'Kids', 'Skin', 'Food', 'Cream', 'Coffe', 'Wedding', 'Christmas',
    'Holloween'
]

export type PalleteType = {
    id: number,
    color1: string,
    color2: string,
    color3: string,
    color4: string
    likes: number,
    date: string,
}

const palleteDefault: PalleteType = {
    id: Math.floor(Math.random() * 999),
    color1: '#AAAAAA',
    color2: '#BBBBBB',
    color3: '#CCCCCC',
    color4: '#DDDDDD',
    likes: 0,
    date: `${(new Date()).toString()}`
}

const palletes = [
    {
        id: 1,
        color1: '#223344',
        color2: '#11AA00',
        color3: '#FF00FF',
        color4: '#FFF000',
        likes: 10,
        date: "2022-01-11",
    },
    {
        id: 2,
        color1: '#222831',
        color2: '#393E46',
        color3: '#00ADB5',
        color4: '#EEEEEE',
        likes: 12,
        date: "2022-05-10",
        colorTags: ['Blue', 'White'],
        themeTags: [] as string[],
    },
    {
        id: 3,
        color1: '#E3FDFD',
        color2: '#CBF1F5',
        color3: '#A6E3E9',
        color4: '#71C9CE',
        likes: 14,
        date: "2023-01-09",
        colorTags: ['White'],
        themeTags: [] as string[],
    },
    {
        id: 4,
        color1: '#F9ED69',
        color2: '#F08A5D',
        color3: '#B83B5E',
        color4: '#6A2C70',
        likes: 20,
        date: "2023-01-08",
        colorTags: ['Orange', 'Yellow'],
        themeTags: [] as string[],
    },
    {
        id: 5,
        color1: '#08D9D6',
        color2: '#252A34',
        color3: '#FF2E63',
        color4: '#EAEAEA',
        likes: 5,
        date: "2023-01-07",
        colorTags: ['Pink', 'Blue', 'White'],
        themeTags: [] as string[],
    },
    {
        id: 6,
        color1: '#F9F7F7',
        color2: '#DBE2EF',
        color3: '#3F72AF',
        color4: '#112D4E',
        likes: 3,
        date: "2022-12-06",
        colorTags: ['White', 'Blue'],
        themeTags: [] as string[],
    },
    {
        id: 7,
        color1: '#F67280',
        color2: '#C06C84',
        color3: '#6C5B7B',
        color4: '#355C7D',
        likes: 40,
        date: "2022-10-05",
        colorTags: ['Purple', 'Pink'],
        themeTags: [] as string[],
    },
    {
        id: 8,
        color1: '#F0F5F9',
        color2: '#C9D6DF',
        color3: '#52616B',
        color4: '#1E2022',
        likes: 100,
        date: "2021-01-04",
        colorTags: ['White', 'Black', 'Grey'],
        themeTags: [] as string[],
    },


];



type contextType = {
    palletes: PalleteType[];
    palleteDefault: PalleteType;
    addPallete(newPallete: PalleteType, redirect:(route:number) => void): void;
    getPalleteById(palleteId: number): PalleteType | undefined;
    palletesSortedByDate(): PalleteType[];
    palletesSortedByLikes(): PalleteType[];
    palletesOfTheMonth(): PalleteType[];
    palletesOfTheYear(): PalleteType[];
    collection: PalleteType[];
    isInCollection(palleteId: number): boolean;
    handleLike(pallete: PalleteType): void;
}

type PalleteContextProps = {
    children: React.ReactNode
}

export const PalleteContext = createContext<contextType>({} as contextType);

export const PalleteContextProvider = ({ children }: PalleteContextProps) => {

    const [collection, setCollection] = useState<PalleteType[]>(() => {
        const localData = localStorage.getItem('collection');
        return localData ? JSON.parse(localData) : [] as PalleteType[]
    });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const [fetchError, setFetchError] = useState<any>({}); 
    const [palletesSupa, setPalletesSupa] = useState<PalleteType[]>([]);

    const fetchPalletes = async () => {
        const {data, error} = await supabase
            .from('palletes')
            .select()

            if (error) {
                setFetchError('can not fetch');
                console.log(error);
                setPalletesSupa([])
            }

            if(data) {
                setPalletesSupa(data)
                setFetchError(null)
            }
    }

    useEffect(() => {
        fetchPalletes();
    }, [])

    let contextValue: contextType = {
        palletes: palletesSupa,
        palleteDefault: palleteDefault,
        addPallete: async (newPallete: PalleteType, redirect) => {
            const {color1, color2, color3, color4, likes} = newPallete; 
            const {data, error} = await supabase
                .from('palletes')
                .insert([{color1, color2, color3, color4, likes}])
                .select();

            if(error) {
                setFetchError(error);
            } 

            if(data) {
                await fetchPalletes();
                redirect(data[0].id)
            }
        },
        getPalleteById: (palletId: number) => contextValue.palletes.find(p => p.id === palletId),
        palletesSortedByDate: () => contextValue.palletes.sort((p1, p2) => (new Date(p1.date)).getTime() < (new Date(p2.date)).getTime() ? 1 : -1),
        palletesSortedByLikes: () => contextValue.palletes.sort((p1, p2) => p2.likes - p1.likes),
        palletesOfTheMonth: () => contextValue.palletesSortedByLikes().filter(p => (new Date(p.date)).getTime() >= (new Date().getTime() - 2629746000)),
        palletesOfTheYear: () => contextValue.palletesSortedByLikes().filter(p => (new Date(p.date)).getTime() >= (new Date().getTime() - 31556952000)),
        collection: collection,
        isInCollection: (palleteId: number) => collection.some(c => c.id === palleteId),
        handleLike: async (pallete: PalleteType) => {
            if (contextValue.isInCollection(pallete.id)) {
                setCollection(collection.filter(p => p.id !== pallete.id))
                const {data, error} = await supabase.rpc('decrement', {
                    row_id: pallete.id
                })
                fetchPalletes();
            } else {
                setCollection([pallete, ...collection])
                const {data, error} = await supabase.rpc('increment', {
                    row_id: pallete.id
                })
                fetchPalletes();
            }
        },
    }


    useEffect(() => {
        localStorage.setItem('collection', JSON.stringify(collection))
    }, [collection])


    return (
        <PalleteContext.Provider value={contextValue}>
            {children}
        </PalleteContext.Provider>
    )
}