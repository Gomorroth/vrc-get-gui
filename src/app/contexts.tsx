import { Dispatch, SetStateAction, createContext } from 'react'

export const PageIDContext = createContext<[number, Dispatch<SetStateAction<number>>] | undefined>(undefined);