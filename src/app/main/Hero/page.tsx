import Image, { StaticImageData } from 'next/image'
import Dog from '../../../../public/pic/hero.png';
import SocialButton from '@/app/components/Socialbutton';
import x from '../../../../public/pic/category/x.png';
import Telegram from '../../../../public/pic/category/telegram.png';
import LinkedIn from '../../../../public/pic/category/linkedin.png';

interface SocialButtonProps {
    buttonname: string;
    buttonIcon: StaticImageData;
    size: string;
    Iconsize: string;
}
const socialButtonData: SocialButtonProps[] = [
    { buttonname: 'Twitter', buttonIcon: x, size: '80px', Iconsize: '40px' },
    { buttonname: 'LinkedIn', buttonIcon: LinkedIn, size: '80px', Iconsize: '40px' },
    { buttonname: 'Telegram', buttonIcon: Telegram, size: '80px', Iconsize: '40px' },
];

const ResponsiveSocialButtonData: SocialButtonProps[] = [
    { buttonname: 'Twitter', buttonIcon: x, size: '50px', Iconsize: '30px' },
    { buttonname: 'LinkedIn', buttonIcon: LinkedIn, size: '50px', Iconsize: '30px' },
    { buttonname: 'Telegram', buttonIcon: Telegram, size: '50px', Iconsize: '30px' },
];

export default function Hero() {
    return (
        <div className=" w-full flex justify-center bg-[#FFFDC2]" id='home'>
            <div className='lg:w-[1490px] mx-auto'>
                <div className="w-full px-[25px] mt-[200px] flex items-center gap-8">
                    <h1 className='lg:text-[90px] text-fluid text-center lg:text-left text-[#91571A]'>Stray Doge Coin</h1>
                </div>

                <div className='flex gap-5 my-[50px] lg:hidden justify-center'>
                    {ResponsiveSocialButtonData.map((button, index) => (
                        <SocialButton key={index} buttonname={button.buttonname} buttonIcon={button.buttonIcon} size={button.size} Iconsize={button.Iconsize} />
                    ))}
                </div>

                <div className='w-full lg:h-[600px] px-[25px]'>
                    <div className='w-full h-full bg-stamp bg-cover flex justify-between'>
                        <div className='flex items-end'>
                            <Image alt="dog" src={Dog} className="w-[400px]" />
                        </div>

                        <div className='hidden gap-10 mt-[100px] lg:flex'>
                            {socialButtonData.map((button, index) => (
                                <SocialButton key={index} buttonname={button.buttonname} buttonIcon={button.buttonIcon} size={button.size} Iconsize={button.Iconsize} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}