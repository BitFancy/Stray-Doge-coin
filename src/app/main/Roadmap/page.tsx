import MainFont from "@/app/components/MainFont"
import Roadmapcard from "@/app/components/RoadmapCard"

interface Roadmap {
    mainstep: string,
    mainstep1: string,
    mainstep2: string,
    mainstep3: string,
    cardnumber: string
}

const data: Roadmap[] = [
    {
        mainstep: "Launch",
        mainstep1: "CoinGecko/Coinmarketcap Listings",
        mainstep2: "1,000 + holders",
        mainstep3: "Get $Stray Doge trending on twitter with our memetic power",
        cardnumber: "1"

    },
    {
        mainstep: "Stray Doge Times digital Newsletter",
        mainstep1: "Formation of token gated discord",
        mainstep2: "Group, Doge palace, for holders, more details tba",
        mainstep3: "CEX listings 10,000 + holders",
        cardnumber: "2"

    },
    {
        mainstep: "Doge merch",
        mainstep1: "Doge tools",
        mainstep2: "T1 Exchange Listings 10,000 + holders",
        mainstep3: "Meme Takeover",
        cardnumber: "3"

    },
]






export default function Roadmap() {
    return (
        <div className="flex w-full h-[100vh] bg-[#D5A64E]" id="roadmap">
            <div className="w-[1490px] h-full m-auto">
                <div className="w-full px-[25px] h-full flex flex-col">
                    <div className="mt-[100px]">
                        <MainFont Maintitle="Roadmap" fontcolor="#232323" />
                    </div>
                    <div className="flex mt-[100px] justify-between">
                        {data.map((item, index) => (
                            <Roadmapcard
                                key={index}
                                cardnumber={item.cardnumber}
                                mainstep={item.mainstep}
                                mainstep1={item.mainstep1}
                                mainstep2={item.mainstep2}
                                mainstep3={item.mainstep3}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}