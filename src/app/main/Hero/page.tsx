import Image, { StaticImageData } from 'next/image'
import Dog from '../../../../public/pic/hero.png';
import SocialButton from '@/app/components/Socialbutton';
import x from '../../../../public/pic/category/x.png';
import Telegram from '../../../../public/pic/category/telegram.png';
import LinkedIn from '../../../../public/pic/category/linkedin.png';

interface SocialButtonProps {
    buttonname: string;
    buttonIcon: StaticImageData;
}
const socialButtonData: SocialButtonProps[] = [
    { buttonname: 'Twitter', buttonIcon: x },
    { buttonname: 'LinkedIn', buttonIcon: LinkedIn },
    { buttonname: 'Telegram', buttonIcon: Telegram },
    // { buttonname: 'Instagram', buttonIcon: '/pic/instagram.png' },
];

export default function Hero() {
    return (
        <div className=" w-full h-[100vh] flex justify-center bg-[#FFFDC2]" id='home'>
            <div className='w-[1490px] mx-auto flex flex-col justify-between'>
                <div className="w-full px-[25px] mt-[200px] flex items-center gap-8">
                    <h1 className='text-[90px] text-[#91571A]'>Stray Doge</h1>
                    <h1 className='text-[100px] text-right'>Coin</h1>
                </div>

                <div className='w-full h-[600px] mx-[25px] flex justify-between'>
                    <div className='flex items-end'>
                        <Image alt="dog" src={Dog} className=" h-[500px] w-auto" />
                    </div>
                    <div className='w-[950px] h-full bg-stamp bg-contain'>
                        <div className='flex gap-10 mt-[100px]'>
                            {socialButtonData.map((button, index) => (
                                <SocialButton key={index} buttonname={button.buttonname} buttonIcon={button.buttonIcon} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}