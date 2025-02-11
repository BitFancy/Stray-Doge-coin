export default function Roadmapcar(
    {
        mainstep,
        mainstep1,
        mainstep2,
        mainstep3,
        cardnumber
    }:
        {
            mainstep: string,
            mainstep1: string,
            mainstep2: string,
            mainstep3: string,
            cardnumber: string
        }) {
    return (
        <div className="w-[350px] h-[500px] rounded-[10px] p-[40px] bg-[#FFFDC2]" style={{ boxShadow: "inset 0 0 10px rgba(10,10,10,0.8)" }}>
            <h1 className="text-[50px] mb-[20px]">{cardnumber}</h1>
            <ul className="list-disc ml-[20px] text-[16px]">
                <li>{mainstep}</li>
                <li>{mainstep1}</li>
                <li>{mainstep2}</li>
                <li>{mainstep3}</li>
            </ul>
        </div>
    )
}