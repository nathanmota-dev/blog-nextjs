import { Button } from "@/components/ui/button"


export default function HeroSection() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-center">
            <div>
                <h1 className="text-[4.5rem] font-bold pb-2">Olá, eu sou o Nathan</h1>
                <h3 className="text-xl text-muted-foreground text-balance pb-6 max-w-[42rem] mx-auto">Bem vindo ao meu blog. Esse site foi feito utilizando tailwind, shadcn, velite, Nextjs 14 e MDX.</h3>
                <div className="flex justify-center space-x-4 pb-2">
                    <Button variant="outline" className="text-black px-8 font-medium text-sm h-11">Veja meu blog</Button>
                    <Button variant="default" className="bg-transparent px-8 font-medium text-sm h-11 border border-gray-700">GitHub</Button>
                </div>
            </div>
        </div>
    )
}
