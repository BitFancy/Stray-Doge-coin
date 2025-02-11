import Image, { StaticImageData } from "next/image"

export default function SocialButtonResponsive({ buttonname, buttonIcon }: { buttonname: string, buttonIcon: StaticImageData }) {

    return (
        <button className="w-[50px] h-[50px] bg-[#1a1a1a] rounded-[10px] flex justify-center items-center">
            <Image alt={buttonname} src={buttonIcon} className="" />
        </button>
    )
}