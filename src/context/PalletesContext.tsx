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

    const supabaseUrl = process.env.VITE_REACT_SUPABASE_URL as string;
    const supabaseKey = process.env.VITE_REACT_SUPABASE_KEY as string;
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