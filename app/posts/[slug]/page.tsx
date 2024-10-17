import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from "../../components/navbar";
import { notFound } from 'next/navigation';

// Diretório onde os arquivos MDX estão armazenados
const contentDirectory = path.join(process.cwd(), 'content/posts');

// Função para carregar o conteúdo do MDX baseado no slug
async function getPostBySlug(slug: string) {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { slug, data, content };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <div>
            <div><Navbar /></div>
            <div className="container max-w-4xl py-6 lg:py-10">
                <article>
                    <h1 className="text-4xl lg:text-5xl font-black text-black dark:text-white">{post.data.title}</h1>
                    <p className="text-muted-foreground">{post.data.date}</p>
                    <hr className="mt-8 dark:border-slate-700 border-gray-400" />                   
                    <MDXRemote source={post.content} />
                </article>
            </div>
        </div>
    );
}
