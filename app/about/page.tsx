import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="container max-w-4xl py-6 lg:py-10">
                <h1 className="text-4xl lg:text-5xl font-black text-black dark:text-white">Sobre mim</h1>
                <hr className="mt-8 dark:border-slate-700 border-gray-400" />
                <div className="grid lg:grid-cols-[30%_70%] grid-cols-1 md:gap-4 mt-8">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/profile.png"
                            alt="Foto de perfil"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />

                        <h1 className="mt-4 text-2xl font-bold text-black dark:text-white">Nathan Mota</h1>
                        <p className="text-md text-slate-700 dark:text-muted-foreground text-justify">Software Engineer</p>

                    </div>
                    <div className="flex items-center lg:items-start mt-8 md:mt-0">
                        <p className="text-xl text-slate-700 dark:text-muted-foreground text-justify">
                            Olá! Eu sou Nathan Mota, desenvolvedor de software com experiência em desenvolvimento web, atuando tanto no Front-End quanto no Back-End. Atualmente, estou focado no estudo e trabalho com tecnologias como React, Next.js, Node.js e TypeScript.

                            Criei este blog com o objetivo de compartilhar conhecimentos e experiências na área de desenvolvimento de software, além de utilizá-lo como portfólio para meus projetos. A ideia principal do blog é permitir a criação de novos posts de forma dinâmica utilizando arquivos MDX. Com isso, ao criar um arquivo MDX, uma rota é gerada automaticamente, e após o commit, um novo deploy é realizado, colocando o conteúdo no ar de maneira simples e eficiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
