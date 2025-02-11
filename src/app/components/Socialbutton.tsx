import Image, { StaticImageData } from "next/image"

export default function SocialButton({ buttonname, buttonIcon, size, Iconsize }: { buttonname: string, size: string, buttonIcon: StaticImageData, Iconsize: string }) {

    return (
        <button className="bg-[#1a1a1a] rounded-[10px] flex justify-center items-center" style={{ width: size, height: size }}>
            <Image alt={buttonname} src={buttonIcon} style={{ width: Iconsize }} />
        </button>
    )
}