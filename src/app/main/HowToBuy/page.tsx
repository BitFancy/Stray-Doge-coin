import MainFont from "@/app/components/MainFont";
import { StaticImageData } from "next/image";
import BuyCard from "@/app/components/BuyCard";
import Wallet from '../../../../public/pic/logo.png';

interface BuyCardProps {
    cardlogo: StaticImageData;
    cardtitle: string;
    description: string;
}

const BuyCardData: BuyCardProps[] = [
    {
        cardlogo: Wallet,
        cardtitle: "Create a Phantom Wallet",
        description: "Download the Phantom extension for your browser, follow the setup instructions, generate a new wallet, securely store your recovery phrase, and you're ready to manage solana assets. "
    },
    {
        cardlogo: Wallet,
        cardtitle: "Purchase some solana",
        description: "To buy Sol, first create an account an a cryptocurrency exchange supporting Solana, deposit funds, trade for sol tokens, withdraw to your Solana wallet address, and confirm the transfer."
    },
    {
        cardlogo: Wallet,
        cardtitle: "Go to Raydium",
        description: "Use Raydium or Phantom wallet to swap $SOL to $STRAY DOGE instantly."
    },
    {
        cardlogo: Wallet,
        cardtitle: "Swap $SOL to $STRAY DOGE",
        description: "To purchase $STRAY DOGE coin using Raydium, connect your Solana wallet, navigate to the $STRAY DOGE trading pair, enter the desired amount, confirm the transaction, and recieve $STRAY DOGE tokens in your wallet."
    },
]


export default function HowToBuy() {

    return (
        <div className="flex w-full bg-[#FFFDC2]" id="howtobuy">
            <div className="lg:w-[1490px] w-full lg:px-[25px] mx-auto">
                <div className="w-full mt-[50px] flex flex-col items-center">
                    <MainFont Maintitle="How to buy" fontcolor="#1C0A05" />
                    <div className="flex lg:justify-between justify-center my-[50px] w-full xs:w-[450px] lg:w-[750px] 3xl:w-full flex-wrap gap-y-5">
                        {
                            BuyCardData.map((data, index) => {
                                return (
                                    <BuyCard key={index} cardlogo={data.cardlogo} cardtitle={data.cardtitle} description={data.description} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}