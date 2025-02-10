import Image, { StaticImageData } from "next/image"

export default function BuyCard({ cardlogo, description, cardtitle }: { cardlogo: StaticImageData, description: string, cardtitle: string }) {
    return (
        <div className="w-[350px] h-[480px] rounded-[20px] bg-[#D5A64E] flex flex-col items-center p-[30px] shadow-xl shadow-black" style={{ boxShadow: "inset 0 0 10px rgba(10,10,10,0.8)" }}>
            <Image alt="BuyCard" src={cardlogo} width={150} height={150} />
            <div className="mt-[50px]">
                <h1 className="text-center text-[18px] mb-[20px]">{cardtitle}</h1>
                <p className="text-[14px] text-center">{description}</p>
            </div>
        </div>
    )
}