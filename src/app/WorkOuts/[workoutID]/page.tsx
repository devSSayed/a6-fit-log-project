import { IworkOut } from '@/Components/Types/iWorkout';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { FaRegBookmark, FaRegCalendarPlus } from 'react-icons/fa6';

export const metadata: Metadata = {
    title: "FITLOG-Workout-Details",
    description: "...",
};

interface iWorkoutDetailsPageProps {
    params: Promise<{
        workoutID: string;
    }>
}




const workoutDetailsPage = async ({ params }: iWorkoutDetailsPageProps) => {


    let workoutsData: IworkOut[] = [];

    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog')

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        workoutsData = await res.json()

    } catch {
        return <div className='flex justify-center items-center mt-16'><p className='flex items-center font-inter font-bold text-4xl'>Something Went Wrong :(</p></div>
    }

    const { workoutID } = await params;

    const work: IworkOut | undefined = workoutsData.find((workID: IworkOut) => String(workID.id) === workoutID)

    if (!work) {
        return <div className="text-[#FFFFFF] flex justify-center items-center py-10 text-7xl mt-24 mb-96">Workout Details not found!</div>;
    }

    return (
        <section className='container mx-auto mt-14'>

            <div className='grid grid-cols-2 gap-14'>
                <Image src={work.image} alt='Workout Image' width={780} height={800} className='object-cover rounded-2xl'></Image>

                <div className='flex flex-col gap-3'>
                    <h5 className='text-[#FFFFFF] text-5xl font-oswald font-bold '>{work.name}</h5>
                    <p className='text-[#9CA3AF]  font-inter'>{work.description}</p>

                    <div className='flex items-center gap-3'>{work.muscleGroups.map((muscles, ind) =>
                        <div key={ind}>
                            <p className='bg-[#C2F800] font-bold font-inter text-[17px text-[#000000] py-1 px-4 rounded-2xl'>{muscles}</p>

                        </div>)}
                    </div>

                    {/* Dificulty box */}

                    <div className='bg-[#151922] border border-[#232834] mt-3 rounded-2xl font-inter text-[17px] text-[#E5E7EB] space-y-2.5'>
                        <div className='px-6 pt-4 flex justify-between items-center'>
                            <p className='font-semibold text-[#9CA3AF]'>EQUIPMENT</p>
                            <p className='font-medium'>{work.equipment}</p>
                        </div>

                        <div className="divider"></div>

                        <div className='px-6 flex justify-between items-center'>
                            <p className='font-semibold text-[#9CA3AF]'>DIFFICULTY</p>
                            <p className='font-medium'>{work.difficulty}</p>
                        </div>

                        <div className="divider"></div>

                        <div className='px-6 flex justify-between items-center'>
                            <p className='font-semibold text-[#9CA3AF]'>SETS</p>
                            <p className='font-medium'>{work.sets}</p>
                        </div>

                        <div className="divider"></div>

                        <div className='px-6 flex justify-between items-center'>
                            <p className='font-semibold text-[#9CA3AF]'>REPS</p>
                            <p className='font-medium'>{work.reps}</p>
                        </div>

                        <div className="divider"></div>

                        <div className='px-6 flex justify-between items-center'>
                            <p className='font-semibold text-[#9CA3AF]'>DURATION</p>
                            <p className='font-medium'>{work.duration}</p>
                        </div>

                        <div className="divider"></div>

                        <div className='px-6 flex justify-between items-center'>
                            <p className='font-semibold text-[#9CA3AF]'>CALORIES</p>
                            <p className='font-medium'>{work.caloriesBurned} kcal</p>
                        </div>

                        <div className="divider"></div>

                        <div className='pb-4 px-6 flex justify-between items-center'>
                            <p className='font-semibold text-[#9CA3AF]'>RATING</p>
                            <p className='font-medium'>{work.rating}</p>
                        </div>

                    </div>

                    {/* instraction Box */}

                    <div className='mt-9 space-y-2.5'>
                        <p className='font-inter font-extrabold text-[20px]'>INSTRUCTIONS</p>

                        <div>
                            {
                                work.instructions.map((step, ind) =>
                                    <div className='' key={ind}>
                                        <p className='font-inter text-[17px] text-[#D1D5DB] py-1.5'>{ind + 1}. {step}</p>

                                    </div>)
                            }
                        </div>

                    </div>

                    <div className='space-x-4'>
                        <button className='btn bg-[#C2F800] text-[#0C0D10] font-inter font-bold rounded-2xl w-fit py-6 mt-7'><FaRegCalendarPlus className='text-[16px]' /> Add to today&apos;s plan</button>
                        <button className='btn border-2 bg-[#0F1115] border-[#374151] text-[#E5E7EB] font-inter font-medium rounded-2xl w-fit py-6 mt-7'><FaRegBookmark className='text-[16px] text-[#E5E7EB]' /> Save for later</button>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default workoutDetailsPage;