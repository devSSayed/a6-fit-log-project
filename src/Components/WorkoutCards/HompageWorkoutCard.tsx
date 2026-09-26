import React from 'react';
import { IworkOut } from '../Types/iWorkout';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { PiFireSimpleFill } from 'react-icons/pi';
import Link from 'next/link';


interface iworkOutCardProps {
    eachWorkouts: IworkOut
}

const HompageWorkoutCard = ({ eachWorkouts }: iworkOutCardProps) => {
    return (
        <Link href={`/WorkOuts/${eachWorkouts.id}`}>
            <div className='bg-[#15171D] border border-[#222630] rounded-2xl h-[500] mx-3 xl:mx-0 cursor-pointer hover:border-[#C2F800]/50 transition-all duration-500 delay-10'>
                <div className='relative w-full aspect-video overflow-hidden rounded-t-2xl'>
                    <Image src={eachWorkouts.image} alt='WorkOut Image' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover'></Image>
                </div>

                <div className='p-6'>

                    <div>
                        <div>
                            <div className='flex items-center gap-3'>{eachWorkouts.muscleGroups.map((muscles, ind) =>
                                <div key={ind}>
                                    <p className='bg-[#C2F800] font-bold font-inter text-[17px text-[#000000] py-1 px-4 rounded-2xl'>{muscles}</p>
                                </div>)}</div>
                        </div>
                        <h5 className='text-[#FFFFFF] text-3xl font-oswald font-bold my-2'>{eachWorkouts.name}</h5>
                        <p className='text-[#9CA3AF]  font-inter'>{eachWorkouts.equipment}</p>

                    </div>


                    <div className="divider"></div>

                    <div className='flex items-center gap-5'>
                        <p className='flex items-center gap-1.5 font-inter text-[#9CA3AF] text-[18px]'><FaRegClock /> {eachWorkouts.duration} min</p>
                        <p className='flex items-center gap-1.5 text-[#9CA3AF] text-[18px]'><PiFireSimpleFill /> {eachWorkouts.caloriesBurned} kcal</p>
                        <p className='flex items-center gap-1.5 text-[#9CA3AF] text-[18px]'><FiStar /> {eachWorkouts.rating}</p>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default HompageWorkoutCard;