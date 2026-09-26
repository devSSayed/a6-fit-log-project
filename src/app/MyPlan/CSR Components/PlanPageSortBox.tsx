"use client";
import { workContext } from '@/WorkoutContext/workContext';
import React, { useContext } from 'react';

const PlanPageSortBox = () => {

    const {sortBy, setSortBy} = useContext(workContext)
    

    return (
        <div className='flex items-center gap-2.5'>
            <p className='font-inter text-[15px] text-[#8A92A0]'>Sort By</p>
            <div>
                <fieldset className="fieldset">
                    <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'Duration' | 'Calories' | 'Rating')}
                    className="select font-inter bg-[#151921] text-[#FFFFFF] rounded-xl mr-2.5">
                        <option>Duration</option>
                        <option>Calories</option>
                        <option>Rating</option>
                    </select>
                </fieldset>
            </div>
        </div>

    );
};

export default PlanPageSortBox;