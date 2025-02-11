import Image from "next/image"
import logo from '../../../public/pic/logo.png';



export default function Footer() {
    return (
        <>
            <div className="w-full flex justify-center bg-[#FFFDC2]">
                <div className="w-[1490px] px-[25px] py-[50px] flex flex-col justify-center items-center">

                    <div className="flex items-center mb-[30px]">
                        <Image width={80} height={80} alt='logo' src={logo} />
                        <h1 className='text-[50px] ml-[10px] text-[#774723]'>STRAY</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[25px] text-center">INVESTING IN CRYPTOCURRENCIES INVOLVES SIGNIFICANT RISK AND MAY RESULT</p>
                        <p className="text-[25px] text-center">IN SUBSTANTIAL FINANCIAL LOSS. ALWAYS CONDUCT YOUR OWN RESEARCH</p>
                        <p className="text-[25px] text-center">BEFORE MAKING ANY INVESTMENT DECISIONS.</p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#232323] h-[70px] flex justify-center items-center">
                <h1 className="text-[#FFFDC2] text-[18px] text-center">2025 by doge, all rights reserved!</h1>
            </div>
        </>
    )
}