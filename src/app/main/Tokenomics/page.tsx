import MainFont from "@/app/components/MainFont"
import DrawDog from "../../../../public/pic/tokenomics.png";
import Image from "next/image";
import TokenomicsCard from "@/app/components/TokenomicsCard";

interface Totype {
    name: string;
    percentage: string;
    bgcolor: string;
    height: string;
}
const Carddata: Totype[] = [
    {
        name: "Liquidity pool",
        percentage: "60%",
        bgcolor: "#FFFDC2",
        height: "500px"
    },
    {
        name: "Community Rewards",
        percentage: "10%",
        bgcolor: "#828282",
        height: "200px"
    },
    {
        name: "Development",
        percentage: "20%",
        bgcolor: "#D5A64E",
        height: "300px"
    },
    {
        name: "Marketing",
        percentage: "10%",
        bgcolor: "#91571A",
        height: "200px"
    },
]


export default function Tokennomics() {
    return (
        <div className="flex w-full h-[100vh] bg-[#232323]">
            <div className="w-[1490px] h-full m-auto">
                <div className="w-full px-[25px] h-full flex flex-col justify-between">
                    <div className="mt-[100px]">

                        <MainFont Maintitle="Tokenomics" fontcolor="#FFFDC2" />
                    </div>
                    <div className="flex justify-end">
                        <h1 className="w-[700px] text-[30px] text-center text-[#D5A64E] border-2 rounded-[20px] p-[25px] border-[#D5A64E]">Total Supply: $10000USD</h1>
                    </div>
                    <div className="flex justify-between mt-[-30px]">
                        <div className="flex justify-end">
                            <Image alt="tokenomics" src={DrawDog} width={500} />
                        </div>
                        <div className="w-[1000px] flex items-end justify-end">
                            {
                                Carddata.map((item, index) => (
                                    <TokenomicsCard key={index} name={item.name} percentage={item.percentage} bgcolor={item.bgcolor} height={item.height} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}