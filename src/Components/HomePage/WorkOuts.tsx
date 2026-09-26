import React from 'react';
import { IworkOut } from '../Types/iWorkout';
import HompageWorkoutCard from '../WorkoutCards/HompageWorkoutCard';


const WorkOuts = async () => {

    let workouts: IworkOut[] = [];

    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog') 

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        workouts = await res.json()
        
    } catch {
        return <div className='flex justify-center items-center mt-16'><p className='flex items-center font-inter font-bold text-4xl'>Something Went Wrong :(</p></div>
    }



    return (



        <section id='library' className='container mx-auto mt-28'>


            <div className='space-y-1 mx-3 xl:mx-0'>
                <h4 className='font-oswald font-bold text-2xl md:text-3xl text-[#FFFFFF]'>THE LIBRARY</h4>
                <p className='font-inter text-[#9CA3AF] text-[13px] md:text-[1rem]'>Twelve lifts covering every major muscle group.</p>
            </div>


            <div className='container mx-auto mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 w-full xl:grid-cols-3 grid-row-4 gap-7'>
                {
                    workouts.map((eachWorkouts: IworkOut) =>

                        <div key={eachWorkouts.id}>
                            <HompageWorkoutCard eachWorkouts={eachWorkouts} />
                        </div>)
                }

            </div>


        </section>
    );
};

export default WorkOuts;