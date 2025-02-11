import MainFont from "@/app/components/MainFont";
import Image from "next/image";
import AboutDog from '../../../../public/pic/about.png';
import DescriptionContent from "@/app/components/DescriptionContent";

export default function About() {
    return (
        <div className=" w-full flex justify-center bg-[#D5A64E]" id="aboutus">
            <div className="w-[1490px] mx-auto flex justify-between">
                <div className="w-full 3xl2:px-[25px] mt-[50px]">
                    <MainFont Maintitle="About Us" fontcolor="#1C0A05" />
                    <div className="3xl2:flex justify-between items-center p-[25px]">
                        <div className="3xl2:w-[600px] w-full">
                            <DescriptionContent description="Welcome to our corner of the internet, where cryptocurrency meets community spirit! We're passionate about Dogecoin, not just because it's a fun meme coin, but because it represents something bigger: kindness, generosity, and the power of people coming together." />
                        </div>
                        <div className="flex justify-center">
                            <Image alt="dog" src={AboutDog} width={600} className="rounded-xl 3xl2:mt-0 mt-[20px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}