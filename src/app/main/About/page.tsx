import MainFont from "@/app/components/MainFont";
import Image from "next/image";
import AboutDog from '../../../../public/pic/about.png';
import DescriptionContent from "@/app/components/DescriptionContent";
import DescriptionTitle from "@/app/components/DescriptionTitle";

export default function About() {
    return (
        <div className=" w-full h-[100vh] flex justify-center bg-[#D5A64E]" id="aboutus">
            <div className="w-[1490px] mx-auto flex justify-between">
                <div className="w-full px-[25px] mt-[100px]">
                    <MainFont Maintitle="About Us" fontcolor="#1C0A05" />
                    <div className="flex justify-between mt-[70px] bg-[#D5A64E] p-[25px] pt-[0] h-[580px] rounded-[20px] gap-x-[50px]">
                        <div className="w-[65%]">
                            <DescriptionTitle title="Community First" />
                            <DescriptionContent description="Built by the community, for the community. Every decision is made with our holders in mind." />
                            <DescriptionTitle title="Transparency" />
                            <DescriptionContent description="Full transparency in our operations, with regular updates and open communication channels." />
                            <DescriptionTitle title="Security" />
                            <DescriptionContent description="Contract audited and verified, with locked liquidity and anti-whale mechanisms. " />
                        </div>
                        <div className="h-full flex items-end">
                            <Image alt="dog" src={AboutDog} className=" h-[450px] w-auto rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}