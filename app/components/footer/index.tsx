import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center mb-6">
            <ul className="flex items-center justify-center gap-3">
                <li>
                    <a href="mailto:nathansmota@gmail.com">
                        <MdOutlineEmail className="text-black dark:text-white hover:text-black/50
                        dark:hover:text-zinc-200 transition-colors" size={28} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nathansmota/">
                        <FaLinkedinIn className="text-black dark:text-white hover:text-black/50
                        dark:hover:text-zinc-200 transition-colors" size={28} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nathanmota-dev">
                        <FaGithub className="text-black dark:text-white hover:text-black/50
                        dark:hover:text-zinc-200 transition-colors" size={28} />
                    </a>
                </li>
            </ul>
            <h2 className="text-sm text-black dark:text-muted-foreground text-justify mt-2">Nathan Mota</h2>
        </footer>
    )
}