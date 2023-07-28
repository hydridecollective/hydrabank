import Link from "next/link";
import { BiHeart, BiLogoGithub, BiLogoTwitter, BiSolidEnvelope } from 'react-icons/bi';
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="w-full p-8 pt-12 flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:items-center md:justify-between bg-black">
            <div className="flex flex-col gap-y-4 items-start">
                <div className="text-gray-300 text-base font-bold text-left">
                    <div className="flex flex-row items-center gap-x-2 text-gray-300">
                        <Image src="/assets/img/hb.short.transparent.png" className="w-12" width={64} height={64} alt="hydride logo" />
                        <div className="flex flex-col text-sm font-bold">
                            <span className="">hydrabank</span>
                            <span className="">a <Link href="https://hydride.dev" className="text-white hover:text-gray-300" target="_blank" rel="noreferrer noopener">hydride collective</Link> project</span>
                        </div>
                    </div>
                    <span className="flex flex-row items-center gap-x-1">
                        made with <BiHeart className="inline-block text-red-500" /> by
                        <Link href="https://bunni.me" className="text-white hover:text-gray-300" target="_blank" rel="noreferrer noopener">emily</Link>
                        and
                        <Link href="https://github.com/oestradiol" className="text-white hover:text-gray-300" target="_blank" rel="noreferrer noopener">elynn</Link>   
                    </span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-x-4 text-center text-2xl md:text-3xl">
                <Link href="https://github.com/hydridecollective" target="_blank" rel="noreferrer noopener" className="hover:text-gray-300 text-white">
                    <BiLogoGithub />
                </Link>
                <Link href="mailto:admin@hydride.space" target="_blank" rel="noreferrer noopener" className="hover:text-gray-300 text-white">
                    <BiSolidEnvelope />
                </Link>
                <Link href="/#" target="_blank" rel="noreferrer noopener" className="hover:text-gray-300 text-white">
                    <BiLogoTwitter />
                </Link>
            </div>
        </footer>
    );
};