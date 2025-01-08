import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBox from '../Helper/SearchBox';
import { HeartIcon, UserIcon } from 'lucide-react';
import ShoppingCardButton from '../Helper/ShoppingCardButton';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';


const Nav = () => {
    return (
        <div className='h-[22vh] lg:h-[12vh] sticky top-0 z-[1] bg-white shadow-md flex items-center justify-between px-3 md:px-10'>
            {/* Logo*/}
            <Link href={"/"}>
                <Image src={"/images/Logo-Lite.png"} alt='logo' width={60} height={60} />
            </Link>
            {/* icons */}

            <div className='flex items-center space-x-6'>
                {/* Search Box  */}
                <SearchBox />
                <HeartIcon size={26} cursor={"pointer"} />
                {/* shopping Card Button */}
                <ShoppingCardButton />
                {/* User Button */}


                <UserButton />
                

                <SignedOut>
                    <SignInButton>
                        <UserIcon size={26} cursor={"pointer"} />
                    </SignInButton>
                </SignedOut>


            </div>

        </div>
    );
};

export default Nav;