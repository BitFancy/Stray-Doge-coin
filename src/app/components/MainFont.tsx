export default function MainFont({ Maintitle, fontcolor }: { Maintitle: string, fontcolor?: string }) {
    return (
        <h1 className="text-[60px] " style={{ color: fontcolor }}>
            {Maintitle}
        </h1>
    )
}