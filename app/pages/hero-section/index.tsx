import { Button } from "@/components/ui/button"


export default function HeroSection() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-center">
            <div>
                <h1 className="text-black dark:text-white text-[3rem] xl:text-[4.5rem] font-bold pb-2">Olá, eu sou o Nathan</h1>
                <h3 className="text-xl text-muted-foreground text-balance pb-6 max-w-[42rem] mx-auto">Bem vindo ao meu blog.
                    Esse blog foi feito utilizando Nextjs 14, TailwindCSS, Shadcn/ui, @next-mdx e MDX.</h3>
                <div className="flex justify-center space-x-4 pb-2">
                    <Button variant="default" className="px-8 font-medium text-sm h-11">
                        <a href="/blog">Veja meu blog</a>
                    </Button>
                    <Button variant="outline" className="px-8 font-medium text-sm h-11 dark:bg-transparent border border-gray-300 dark:border-gray-700 text-black dark:text-white dark:hover:opacity-80 transition-all">
                        <a href="https://github.com/nathanmota-dev">GitHub</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
