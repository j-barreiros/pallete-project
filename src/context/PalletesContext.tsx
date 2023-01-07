import React, { createContext } from 'react';

export type PalleteType = {
    id: number,
    color1:string,
    color2:string,
    color3:string,
    color4: string
    likes: number,
    date: string
}

const palletes = [
    {
        id:1,
        color1: '#223344',
        color2: '#11AA00',
        color3: '#FF00FF',
        color4: '#FFF000',
        likes: 10,
        date: '21-08-1997',
    },
]

type PalleteContextProps = {
    children: React.ReactNode
}

export const PalleteContext = createContext<PalleteType[]>([]);

export const PalleteContextProvider = ({children} : PalleteContextProps) => {
    return (
        <PalleteContext.Provider value={palletes}>
            {children}
        </PalleteContext.Provider>
    )
}