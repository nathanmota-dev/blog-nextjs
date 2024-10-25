import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface PostItemProps {
    slug: string;
    title: string;
    topics?: string[];
    description?: string;
    date: string;
}

export default function PostItem({ slug, title, topics, description, date }: PostItemProps) {
    return (
        <nav className="flex flex-col border-border border-b py-3 gap-2 dark:border-slate-700 border-gray-400">
            <div>
                <h2 className="text-2xl font-bold">
                    <Link href={`/posts/${slug}`}>{title}</Link >
                </h2>
            </div>
            <div className="flex space-x-2">
                {topics?.map((topic) => (
                    <span key={topic} className="inline-block px-2 py-0.5 text-xs font-semibold text-black dark:text-white bg-slate-200 dark:bg-slate-800 rounded-md">
                        {topic}
                    </span>
                ))}
            </div>
            <div className="max-w-none text-muted-foreground">
                {description}
            </div>
            <div className="flex justify-between items-center">
                <dl>
                    <dt className="sr-only">Publicado em</dt>
                    <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={date}>{date}</time>
                    </dd>
                </dl>
                <Link href={`/posts/${slug}`}>
                    <Button variant="link">Saiba mais <FaArrowRight className="w-2 h-2" /> </Button>
                </Link>
            </div>
        </nav>
    )
}
