import { CiDumbbell } from 'react-icons/ci';

const Footer = () => {
    return (
        <footer className='border-t border-[#1B1F28] mt-24'>
            <div className='container mx-auto flex justify-between items-center py-10'>
                <div className='flex items-center'>
                   <CiDumbbell className='text-4xl text-[#C2F800]'/>
                    <p className="font-oswald font-bold text-2xl text-[#FFFFFF]">FITLOG</p>
                </div>


                <p className='text-[17px] text-[#6B7280] font-inter'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </footer>
    );
};

export default Footer;