'use client'
import Image from 'next/image';
import logo from '../../../public/pic/logo.png';
import SidebarIcon from '../../../public/pic/category/sidebar.png';
import { useState } from 'react';

export default function Header() {
    const scrollToSection = (tagname: string) => {
        const section = document.getElementById(tagname);
        if (section) {
            const toPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: toPosition,
                behavior: 'smooth',
            });
        }
        setSideBar(false);
    };

    const [sidebar, setSideBar] = useState(false);

    const SidebarHandler = () => {
        setSideBar(!sidebar);
    }

    return (
        <div className="flex w-full absolute left-0 top-0">
            <div className="w-[1490px] mx-auto mt-[10px] px-[25px] flex justify-between items-center">
                <button className='flex items-center'>
                    <Image width={80} height={80} alt='logo' src={logo} />
                    <h1 className='text-[50px] ml-[10px] text-[#774723]'>stray</h1>
                </button>
                <div className='lg:flex hidden w-[70%]'>
                    <div className="rounded-[15px] flex w-full justify-between items-center mt-[10px] px-[35px] h-[50px] bg-[#D5A64E]" style={{ boxShadow: "inset 0 0 10px rgba(5,5,5,0.8)" }}>
                        <a onClick={() => { scrollToSection('home') }}>Home</a>
                        <a onClick={() => { scrollToSection('aboutus') }}>About Us</a>
                        <a onClick={() => { scrollToSection('howtobuy') }}>How To Buy</a>
                        <a onClick={() => { scrollToSection('tokenomics') }}>Tokenomics</a>
                        <a onClick={() => { scrollToSection('roadmap') }}>Roadmap</a>
                    </div>
                </div>
                <div className='lg:hidden flex flex-col relative mt-[10px]'>
                    <button className='w-[60px] h-[60px] flex justify-center items-center rounded-[10px] bg-[#D5A64E]' style={{ boxShadow: "inset 0 0 10px rgba(5,5,5,0.8)" }} onClick={SidebarHandler}>
                        <Image alt='sidebaricon' src={SidebarIcon} />
                    </button>
                    <div className={`flex-col text-right absolute right-0 top-[60px] p-[20px] gap-y-3 rounded-[5px] bg-[#232323] ${sidebar ? 'flex' : 'hidden'} `}>
                        <a onClick={() => { scrollToSection('home') }} className='text-[#FFFDC2] '>Home</a>
                        <a onClick={() => { scrollToSection('aboutus') }} className='text-[#FFFDC2] '>About Us</a>
                        <a onClick={() => { scrollToSection('howtobuy') }} className='text-[#FFFDC2] '>How To Buy</a>
                        <a onClick={() => { scrollToSection('tokenomics') }} className='text-[#FFFDC2] '>Tokenomics</a>
                        <a onClick={() => { scrollToSection('roadmap') }} className='text-[#FFFDC2] '>Roadmap</a>
                    </div>
                </div>
            </div>
        </div>
    )
}