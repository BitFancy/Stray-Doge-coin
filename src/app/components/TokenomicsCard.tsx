export default function TokenomicsCard({ name, percentage, height }: { name: string, percentage: string, height?: string }) {
    return (
        <div className="mb-[20px]">
            <h1 className="text-[18px] break-words text-wrap text-[#FFFDC2] mb-[5px]">{name} {percentage}</h1>
            <div className="h-[15px] w-full rounded-[10px]" style={{ boxShadow: "inset 0 0 10px rgba(10,10,10,0.8)" }}>
                <div className="h-full rounded-[10px] bg-[#D5A64E]" style={{ width: height, boxShadow: "inset 0 0 10px rgba(10,10,10,0.8)" }} ></div>
            </div>
        </div>
    )
}