import NavLogo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavMiddelLinks from '../CSR links/NavMiddelLinks';
import NavEndLinks from '../CSR links/NavEndLinks';

const Navbar = () => {


    return (
        <nav className='sticky top-0 z-50 bg-[#0F1115]/70 backdrop-blur-md border-b border-[#1B1F28] w-full'>    
            <div className="container mx-auto navbar w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#0F1115] border border-[#1B1F28] rounded-box w-max z-1 mt-7 p-2 shadow">
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
                <div className="navbar-end">
                    <NavEndLinks />                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;