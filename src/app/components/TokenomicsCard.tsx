export default function TokenomicsCard({ name, percentage, bgcolor, height }: { name: string, percentage: string, bgcolor?: string, height?: string }) {
    return (
        <div className="w-[200px] px-[25px] flex justify-center items-center rounded-t-[20px]" style={{ backgroundColor: bgcolor, height: height, boxShadow: "inset 0 0 10px rgba(10,10,10,0.8)" }} >
            <div className="">
                <h1 className="text-center text-[25px] break-words text-wrap">{name}</h1>
                <hr className="my-[10px] border-1 border-[#232323]" />
                <h2 className="text-center text-[20px]">{percentage}</h2>
            </div>
        </div>
    )
}