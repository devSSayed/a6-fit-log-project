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
    activeTab: 'Today' | 'Saved',
    setActiveTab: Dispatch<SetStateAction<'Today' | 'Saved'>>,
    sortBy: 'Duration' | 'Calories' | 'Rating',
    setSortBy: Dispatch<SetStateAction<'Duration' | 'Calories' | 'Rating'>>
}

export const workContext = createContext({} as iSharedDatas);

const WorkProvider = ({ children }: iWorkProviderProps) => {

    const [addToPlan, setAddToPlan] = useState<IworkOut[]>([])
    const [savedForLater, setSavedForLater] = useState<IworkOut[]>([])
    const [activeTab, setActiveTab] = useState<'Today' | 'Saved'>('Today')
    const [sortBy, setSortBy] = useState<'Duration' | 'Calories' | 'Rating'>('Duration')

    const sharedDatas:iSharedDatas = {
        addToPlan,
        setAddToPlan,
        savedForLater,
        setSavedForLater,
        activeTab,
        setActiveTab,
        sortBy,
        setSortBy
    }

    return <workContext.Provider value={sharedDatas}>{children}</workContext.Provider>
};

export default WorkProvider;