import BannerLogo from '@/assets/banner.png';
import Image from 'next/image';
import HomePageButton from '../CSR links/HomePageButton';



const HomePageBanner = () => {
    return (
        <section className='mt-24 mx-5 '>
            <div className='w-full container mx-auto  bg-[#15171D] border border-[#222630] px-5 py-10 xl:px-7 xl:py-20 rounded-2xl flex flex-col justify-center gap-9 md:flex-row xl:justify-between items-center text-white'>
                <div className='space-y-9'>
                    <div className='flex flex-col gap-5 items-center text-center md:items-start md:text-left'>
                        <p className='font-inter font-bold text-[#C2F800] text-[13px] md:text-[15px] xl:text-[15px]'>WORKOUT LIBRARY</p>
                        <h2 className='font-oswald font-bold text-4xl xl:text-7xl text-[#FFFFFF]'>TRAIN WITH INTENT. LOG <br className='hidden xl:block' />
                            EVERY SET. </h2>
                        <p className='font-inter text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className='hidden xl:block' />
                            into today&apos;s plan, and watch the week&apos;s work add up.</p>

                    </div>

                    <div className='flex justify-center w-full md:justify-start'>
                        <HomePageButton />
                    </div>


                </div>
                <Image src={BannerLogo} alt={'a person doing workouts'}></Image>
            </div>

        </section>
    );
};

export default HomePageBanner;