'use client';
import { IworkOut } from '@/Components/Types/iWorkout';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface iWorkProviderProps {
    children: ReactNode;
}

interface iSharedDatas {
    addToPlan: IworkOut[],
    setAddToPlan: Dispatch<SetStateAction<IworkOut[]>>,
    savedForLater: IworkOut[],
    setSavedForLater: Dispatch<SetStateAction<IworkOut[]>>

}

export const workContext = createContext({} as iSharedDatas);

const WorkProvider = ({ children }: iWorkProviderProps) => {

    const [addToPlan, setAddToPlan] = useState<IworkOut[]>([])
    const [savedForLater, setSavedForLater] = useState<IworkOut[]>([])

    const sharedDatas:iSharedDatas = {
        addToPlan,
        setAddToPlan,
        savedForLater,
        setSavedForLater
    }

    return <workContext.Provider value={sharedDatas}>{children}</workContext.Provider>
};

export default WorkProvider;