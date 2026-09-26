import FooterLogo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='border-t border-[#1B1F28] mt-24'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-5 py-10 md:px-5'>
                <div className='flex items-center gap-2'>
                   <Image src={FooterLogo} alt='FITLOG logo' className='w-7 h-7'></Image>
                    <p className="font-oswald font-bold text-3xl text-[#FFFFFF]">FITLOG</p>
                </div>


                <p className='text-[14px] md:text-[17px] text-[#6B7280] font-inter'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </footer>
    );
};

export default Footer;