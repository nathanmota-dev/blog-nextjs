import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { DarkToggle } from "../dark-toogle";

export default function Navbar() {
    return (
        <nav className="w-full h-14 flex items-center justify-between px-4 bg-transparent text-white">
            <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 font-bold">
                    <Image src="/logo.png" alt="Logo" height={25} width={25} />
                    <span>NathanBlog</span>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center space-x-4">
                        <NavigationMenuItem>
                            <Link href="/blog">Blog</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about">About</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                    <FaGithub className="text-lg" />
                </Link>
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                    <FaXTwitter className="text-lg" />
                </Link>
                <DarkToggle />
            </div>
        </nav>
    );
}
