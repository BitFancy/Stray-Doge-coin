import MainFont from "@/app/components/MainFont"
import DrawDog from "../../../../public/pic/tokenomics.png";
import Image from "next/image";
import TokenomicsCard from "@/app/components/TokenomicsCard";

interface Totype {
    name: string;
    percentage: string;
    height: string;
}
const Carddata: Totype[] = [
    {
        name: "Liquidity pool",
        percentage: "60%",
        height: "60%"
    },
    {
        name: "Community Rewards",
        percentage: "10%",
        height: "20%"
    },
    {
        name: "Development",
        percentage: "20%",
        height: "30%"
    },
    {
        name: "Marketing",
        percentage: "10%",
        height: "20%"
    },
]

const ResponsiveCarddata: Totype[] = [
    {
        name: "Liquidity pool",
        percentage: "60%",
        height: "60%"
    },
    {
        name: "Community Rewards",
        percentage: "10%",
        height: "20%"
    },
    {
        name: "Development",
        percentage: "20%",
        height: "30%"
    },
    {
        name: "Marketing",
        percentage: "10%",
        height: "20%"
    },
]



export default function Tokennomics() {
    return (
        <div className="flex w-full bg-[#232323]" id="tokenomics">
            <div className="w-[1490px] lg:px-[25px] m-auto">
                <div className="w-full flex flex-col justify-between">

                    <div className="mt-[50px] 3xl:block flex justify-center">
                        <MainFont Maintitle="Tokenomics" fontcolor="#FFFDC2" />
                    </div>

                    <div className="flex justify-center 3xl:justify-end mt-[20px]">
                        <h1 className="text-[25px] text-center text-[#D5A64E] border-2 rounded-[20px] p-[25px] mx-[5px] lg:mx-0 border-[#D5A64E]">Total Supply: $10000USD</h1>
                    </div>
                    <div className="lg:hidden mt-[50px] w-full px-[40px]">
                        {
                            ResponsiveCarddata.map((item, index) => (
                                <TokenomicsCard key={index} name={item.name} percentage={item.percentage} height={item.height} />
                            ))
                        }
                    </div>
                    <div className="lg:flex justify-between w-full">
                        <div className="flex items-end">
                            <Image alt="tokenomics" src={DrawDog} width={400} />
                        </div>
                        <div className="lg:flex flex-col mt-[50px] hidden w-[60%]">
                            {
                                Carddata.map((item, index) => (
                                    <TokenomicsCard key={index} name={item.name} percentage={item.percentage} height={item.height} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}