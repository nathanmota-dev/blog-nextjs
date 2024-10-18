import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center mb-6">
            <ul className="flex items-center justify-center gap-3">
                <li>
                    <a href="mailto:nathansmota@gmail.com">
                        <MdOutlineEmail size={28} />
                    </a>
                </li>
                <li>
                    <a href="mailto:nathansmota@gmail.com">
                        <FaLinkedinIn size={28} />
                    </a>
                </li>
                <li>
                    <a href="mailto:nathansmota@gmail.com">
                        <FaGithub size={28} />
                    </a>
                </li>
            </ul>
            <h2 className="text-sm text-slate-700 dark:text-muted-foreground text-justify mt-2">Nathan Mota</h2>
        </footer>
    )
}