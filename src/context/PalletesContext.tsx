import React, { createContext, useState } from 'react';

export type PalleteType = {
    id: number,
    color1:string,
    color2:string,
    color3:string,
    color4: string
    likes: number,
    date: Date
}

const palletes = [
    {
        id:1,
        color1: '#223344',
        color2: '#11AA00',
        color3: '#FF00FF',
        color4: '#FFF000',
        likes: 10,
        date: new Date("2022-01-11"),
    },
    {
        id:2,
        color1: '#222831',
        color2: '#393E46',
        color3: '#00ADB5',
        color4: '#EEEEEE',
        likes: 12,
        date: new Date("2022-05-10"),
    },
    {
        id:3,
        color1: '#E3FDFD',
        color2: '#CBF1F5',
        color3: '#A6E3E9',
        color4: '#71C9CE',
        likes: 14,
        date: new Date("2023-01-09"),
    },
    {
        id:4,
        color1: '#F9ED69',
        color2: '#F08A5D',
        color3: '#B83B5E',
        color4: '#6A2C70',
        likes: 20,
        date: new Date("2023-01-08"),
    },
    {
        id:5,
        color1: '#08D9D6',
        color2: '#252A34',
        color3: '#FF2E63',
        color4: '#EAEAEA',
        likes: 5,
        date: new Date("2023-01-07"),
    },
    {
        id:6,
        color1: '#F9F7F7',
        color2: '#DBE2EF',
        color3: '#3F72AF',
        color4: '#112D4E',
        likes: 3,
        date: new Date("2022-12-06"),
    },
    {
        id:7,
        color1: '#F67280',
        color2: '#C06C84',
        color3: '#6C5B7B',
        color4: '#355C7D',
        likes: 40,
        date: new Date("2022-10-05"),
    },
    {
        id:8,
        color1: '#F0F5F9',
        color2: '#C9D6DF',
        color3: '#52616B',
        color4: '#1E2022',
        likes: 100,
        date: new Date("2021-01-04"),
    },

    
];

type contextType = {
    palletes: PalleteType[];
    palletesSortedByDate(): PalleteType[];
    palletesSortedByLikes(): PalleteType[];
    palletesOfTheMonth(): PalleteType[];
    palletesOfTheYear(): PalleteType[];
    collection: PalleteType[];
    isInCollection(palleteId:number):boolean;
    addToCollection(newPallete:PalleteType):void;
    removeFromCollection(palleteId:number):void;
}

type PalleteContextProps = {
    children: React.ReactNode
}

export const PalleteContext = createContext<contextType>({} as contextType);

export const PalleteContextProvider = ({children} : PalleteContextProps) => {

    const [collection, setCollection] = useState<PalleteType[]>([]);

    let contextValue : contextType = {
        palletes: palletes,
        palletesSortedByDate: () => palletes.sort((p1, p2) => p1.date.getTime() < p2.date.getTime() ? 1 : -1),
        palletesSortedByLikes: () => palletes.sort((p1, p2) => p2.likes - p1.likes),
        palletesOfTheMonth: () => contextValue.palletesSortedByLikes().filter(p => p.date.getTime() > (new Date().getTime() - 2629746000)),
        palletesOfTheYear: () => contextValue.palletesSortedByLikes().filter(p => p.date.getTime() > (new Date().getTime() - 31556952000)),
        collection: collection,
        isInCollection: (palleteId:number) => collection.some(c => c.id === palleteId),
        addToCollection: (newPallete:PalleteType) => setCollection([newPallete, ...collection]),
        removeFromCollection: (palleteId:number) => setCollection(collection.filter(p => p.id !== palleteId))
    }

    return (
        <PalleteContext.Provider value={contextValue}>
            {children}
        </PalleteContext.Provider>
    )
}