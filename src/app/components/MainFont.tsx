export default function MainFont({ Maintitle, fontcolor }: { Maintitle: string, fontcolor?: string }) {
    return (
        <h1 className="text-[50px] 3xl2:text-left text-center" style={{ color: fontcolor }}>
            {Maintitle}
        </h1>
    )
}