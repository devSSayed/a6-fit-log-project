"use client";
import { IworkOut } from '@/Components/Types/iWorkout';
import { workContext } from '@/WorkoutContext/workContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { FiStar } from 'react-icons/fi';
import { MdOutlineDone } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';


const MyPlanPage = () => {



    const SumOfActiveTab = (activeData: number[]) => {
        return activeData.reduce((acc: number, sum: number) => {
            return acc + sum;
        }, 0)
    }

    const [activeTab, setActiveTab] = useState<'Today' | 'Saved'>('Today')


    const { addToPlan, setAddToPlan, savedForLater, setSavedForLater } = useContext(workContext)

    const activeWorkouts = activeTab === 'Today' ? addToPlan : savedForLater;

    const totalMin = activeWorkouts.map((workout: IworkOut) => workout.duration);
    const totalCal = activeWorkouts.map((workout: IworkOut) => workout.caloriesBurned);


    const handleRemoveWorkout = (workoutCard: IworkOut) => {
        const restWorkouts = activeWorkouts.filter((eveyWorkout) => eveyWorkout.id !==  workoutCard.id)
        
        if (activeTab === 'Today') {
            setAddToPlan(restWorkouts)
        }else{
            setSavedForLater(restWorkouts)
        }
        

    }




    return (
        <section className='container mx-auto mt-14 flex flex-col gap-8'>
            {/* header/names */}
            <div className='flex flex-col gap-1'>
                <h2 className='font-oswald font-bold text-4xl text-[#FFFFFF]'>MY PLAN</h2>
                <p className='font-inter text-[15px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/* number boxes */}
            <div className='bg-[#13161D] border border-[#232732] rounded-2xl p-12'>
                <div className='grid grid-cols-3 grid-rows-1'>

                    <div className='space-y-1'>
                        <h6 className='font-inter text-[15px] text-[#8A92A0]'>Exercises</h6>
                        <p className='font-oswald font-bold text-5xl text-[#CCFF00]'>{activeWorkouts.length}</p>
                    </div>


                    <div className='flex items-center'>
                        <div className="divider lg:divider-horizontal h-18"></div>
                        <div className='space-y-1'>
                            <h6 className='font-inter text-[15px] text-[#8A92A0]'>Minutes</h6>
                            <p className='font-oswald font-bold text-5xl text-[#FFFFFF]'>{SumOfActiveTab(totalMin)}</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className="divider lg:divider-horizontal h-18"></div>
                        <div className='space-y-1'>
                            <h6 className='font-inter text-[15px] text-[#8A92A0]'>Calories</h6>
                            <p className='font-oswald font-bold text-5xl text-[#FFFFFF]'>{SumOfActiveTab(totalCal)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* number boxes end */}


            {/* Tab start */}

            <div className='flex justify-between items-center'>

                <div className='grid'>
                    <div className="tabs tabs-box w-fit rounded-2xl border border-[#232732] bg-[#151921] p-1.5">
                        {/* tab 1 header */}
                        <input onClick={() => setActiveTab('Today')} type="radio"
                            name="my_tabs_1"
                            className="tab font-inter rounded-xl hover:text-[#FFFFFF] px-5 text-[#8A92A0] transition-colors checked:bg-[#1F242D] checked:font-bold checked:text-white checked:shadow-sm checked:border checked:border-[#232732]"
                            aria-label="Today&apos;s Plan"
                            defaultChecked />

                        {/* tab e header */}
                        <input onClick={() => setActiveTab('Saved')} type="radio"
                            name="my_tabs_1"
                            className="tab font-inter rounded-xl px-5 hover:text-[#FFFFFF] text-[#8A92A transition-colors checked:bg-[#1F242D] checked:font-bold checked:text-white checked:shadow-sm checked:border checked:border-[#232732]"
                            aria-label="Saved" />
                    </div>
                </div>



                {/* Tab end */}

                {/* Select start */}

                <div className='flex items-center gap-2.5'>
                    <p className='font-inter text-[15px] text-[#8A92A0]'>Sort By</p>
                    <div>
                        <fieldset className="fieldset">
                            <select defaultValue="Sort By" className="select font-inter bg-[#151921] text-[#FFFFFF] rounded-xl mr-2.5">
                                <option>Duration</option>
                                <option>Calories</option>
                                <option>Rating</option>
                            </select>
                        </fieldset>
                    </div>
                </div>

            </div>

            {/* Select end */}

            {/* Workout Content */}


            {activeWorkouts.length === 0 ?
                <div className='flex flex-col justify-center items-center gap-2 border-2 border-dashed bg-[#111317] rounded-2xl border-[#FFFFFF]/20 p-20'>
                    <h2 className='font-oswald font-bold text-3xl text-[#FFFFFF]'>NOTHING HERE YET</h2>
                    <p className='font-inter text-[17px] text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>
                    <Link href={'/'}>
                        <button className='btn bg-[#C2F800] text-[#0C0D10] hover:bg-[#14171E] hover:text-[#C2F800]  hover:border-[#C2F800] rounded-4xl text-[15px] font-inter font-bold py-6 px-8'>Go to workouts</button>
                    </Link>

                </div> :

                activeWorkouts.map((workout: IworkOut) => {
                    return <div key={workout.id} className=' flex justify-between items-center p-5 bg-[#14171E] border border-[#232732] rounded-2xl'>

                        <div className='flex gap-6'>
                            <div className='relative w-48 h-28 shrink-0 overflow-hidden rounded-2xl'>
                                <Image src={workout.image} alt='WorkOut Image' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover'></Image>
                            </div>

                            <div className='space-y-4'>
                                <div>
                                    <h5 className='text-[#FFFFFF] text-2xl font-oswald font-bold'>{workout.name}</h5>
                                    <p className='text-[#9CA3AF]  font-inter'>{workout.equipment}</p>
                                </div>


                                <div className='flex items-center gap-5'>
                                    <p className='flex items-center gap-1.5 font-inter text-[#9CA3AF] text-[15px]'><FaRegClock className='text-[#C2F800]' /> {workout.duration} min</p>
                                    <p className='flex items-center gap-1.5 text-[#9CA3AF] text-[15px]'><PiFireSimpleFill className='text-[#C2F800]' /> {workout.caloriesBurned} kcal</p>
                                    <p className='flex items-center gap-1.5 text-[#9CA3AF] text-[15px]'><FiStar className='text-[#C2F800]' /> {workout.rating}</p>
                                </div>
                            </div>
                        </div>


                        <div className='flex items-center gap-3.5'>
                            <div className='flex items-center gap-3.5'>
                                <Link href={`/WorkOuts/${workout.id}`}><button className='btn rounded-4xl bg-[#14171E] border border-[#374151] hover:border-[#FFFFFF] py-5 px-5 font-inter font-normal text-[15px] text-[#FFFFFF]'>View Details</button></Link>
                                {activeTab === 'Today' ?
                                    <button className='btn bg-[#C2F800] hover:bg-[#14171E] hover:text-[#C2F800] text-[#0C0D10] rounded-4xl text-[15px] hover:border-[#C2F800] font-inter font-bold py-5 px-7'><MdOutlineDone className='text-[20px]' /> Mark as Done</button> : ''}
                            </div>

                            <RxCross2 onClick={() => handleRemoveWorkout(workout)} className='text-[22px] text-[#6B7280] cursor-pointer hover:text-[#FFFFFF]' />
                        </div>

                    </div>
                })

            }



        </section>
    );
};

export default MyPlanPage;