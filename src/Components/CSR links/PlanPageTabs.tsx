"use client";
import React from 'react';


const PlanPageTabs = () => {
    return (
        <div className="tabs tabs-box w-fit rounded-2xl border border-[#232732] bg-[#151921] p-1.5">
            <input type="radio"
                name="my_tabs_1"
                className="tab font-inter rounded-xl hover:text-[#FFFFFF] px-5 text-[#8A92A0] transition-colors checked:bg-[#1F242D] checked:font-bold checked:text-white checked:shadow-sm checked:border checked:border-[#232732]"
                aria-label="Today&apos;s Plan"
                defaultChecked />
            <input type="radio"
                name="my_tabs_1"
                className="tab font-inter rounded-xl px-5 hover:text-[#FFFFFF] text-[#8A92A transition-colors checked:bg-[#1F242D] checked:font-bold checked:text-white checked:shadow-sm checked:border checked:border-[#232732]"
                aria-label="Saved" />
        </div>
    );

};

export default PlanPageTabs;