"use client";
import { workContext } from '@/WorkoutContext/workContext';
import { useSearchParams } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const PlanPageTabs = () => {

    const { activeTab, setActiveTab } = useContext(workContext)

    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');

    useEffect(() => {
        if (tabParam === 'Saved') {
            setActiveTab('Saved');
        } else if (tabParam === 'Today') {
            setActiveTab('Today');
        }
    }, [tabParam, setActiveTab]);


    return (
        <div className='flex w-fit'>
            <div className="flex flex-col md:flex-row items-center flex-nowrap tabs tabs-box rounded-2xl border border-[#232732] bg-[#151921] p-1.5">
                {/* tab 1 header */}
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab font-inter rounded-xl hover:text-[#FFFFFF] px-3 xl:px-5 text-[#8A92A0] transition-colors checked:bg-[#1F242D] checked:font-bold checked:text-white checked:shadow-sm checked:border checked:border-[#232732]"
                    aria-label="Today&apos;s Plan"
                    checked={activeTab === 'Today'}
                    onChange={() => setActiveTab('Today')} />

                {/* tab e header */}
                <input type="radio"
                    name="my_tabs_1"
                    className="tab font-inter rounded-xl px-5 hover:text-[#FFFFFF] text-[#8A92A transition-colors checked:bg-[#1F242D] checked:font-bold checked:text-white checked:shadow-sm checked:border checked:border-[#232732]"
                    aria-label="Saved"
                    checked={activeTab === 'Saved'}
                    onChange={() => setActiveTab('Saved')} />
            </div>
        </div>
    );
};

export default PlanPageTabs;