import BannerLogo from '@/assets/banner.png';
import Image from 'next/image';
import HomePageButton from '../CSR links/HomePageButton';



const HomePageBanner = () => {
    return (
        <section className='container mx-auto mt-24 bg-[#15171D] border border-[#222630] px-11 py-20 rounded-2xl flex justify-between items-center text-white'>
            <div className='space-y-9'>
                <div className='flex flex-col gap-5'>
                    <p className='font-inter font-bold text-[#C2F800] text-[15px]'>WORKOUT LIBRARY</p>
                    <h2 className='font-oswald font-bold text-7xl text-[#FFFFFF]'>TRAIN WITH INTENT. LOG <br />
                        EVERY SET. </h2>
                    <p className='font-inter text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today &apos s plan, and watch the week&aposs work add up.</p>

                </div>
        
                <HomePageButton />

            </div>
            <Image src={BannerLogo} alt={'a person doing workouts'}></Image>
        </section>
    );
};

export default HomePageBanner;