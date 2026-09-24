import NavLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavMiddelLinks from '../CSR links/NavMiddelLinks';

const Navbar = () => {


    return (
        <nav className='border-b border-[#1B1F28]'>
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-[#1A2312] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavMiddelLinks />
                        </ul>
                    </div>
                    <Link href={'/'} className='flex gap-1.5'>
                        <Image src={NavLogo} alt='FitLog' className='w-8 h-8'></Image>
                        <p className="font-oswald font-bold text-2xl text-[#FFFFFF]">FITLOG</p>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavMiddelLinks />
                    </ul>
                </div>
                <div className="navbar-end flex gap-6">
                    <Link className='text[14px] text-[#D1D5DB] font-inter hover:bg-gray-800/45 px-3 py-2 rounded-xl' href={'/MyPlan'}>Plan <span className='px-2.25 py-1 rounded-[50%] bg-[#C2F800] text-[#000000]'>0</span></Link>
                    <Link className='text[14px] text-[#9CA3AF] font-inter px-3 py-2 rounded-xl hover:bg-gray-800/45' href={'/MyPlan'}>Saved <span className='px-1.5 py-px rounded-[50%] border-2'>0</span></Link>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;