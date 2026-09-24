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



        <section className='container mx-auto mt-28'>


            <div className='space-y-1'>
                <h4 className='font-oswald font-bold text-3xl text-[#FFFFFF]'>THE LIBRARY</h4>
                <p className='font-inter text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>


            <div className='container mx-auto mt-12 grid grid-cols-3 gap-7'>
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