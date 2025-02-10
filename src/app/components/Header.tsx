'use client'
import Image from 'next/image';
import logo from '../../../public/pic/logo.png';

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
    };

    return (
        <div className="flex w-full absolute left-0 top-0">
            <div className="w-[1440px] mx-auto mt-[10px] flex justify-between items-center">
                <button className='flex items-center'>
                    <Image width={80} height={80} alt='logo' src={logo} />
                    <h1 className='text-[50px] ml-[10px] text-[#774723]'>Doge</h1>
                </button>
                <div className="rounded-[15px] py-[15px] flex w-[800px] justify-between px-[35px] bg-[#D5A64E]" style={{ boxShadow: "inset 0 0 10px rgba(5,5,5,0.8)" }}>
                    <a onClick={() => { scrollToSection('home') }}>Home</a>
                    <a onClick={() => { scrollToSection('aboutus') }}>About Us</a>
                    <a onClick={() => { scrollToSection('howtobuy') }}>How To Buy</a>
                    <a onClick={() => { scrollToSection('tokenomics') }}>Tokenomics</a>
                    <a onClick={() => { scrollToSection('roadmap') }}>Roadmap</a>
                </div>
            </div>
        </div>
    )
}