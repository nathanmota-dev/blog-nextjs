import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import Navbar from '../../components/navbar';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'content/posts');

interface Post {
    slug: string;
    title: string;
    topics?: string[];
    description: string;
    body: MDXRemoteSerializeResult;
}

// Carregar o conteúdo do post com base no slug
async function getPostFromSlug(slug: string): Promise<Post | null> {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        topics: data.topics,
        description: data.description,
        body: await serialize(content),
    };
}

// Gerar os metadados 
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getPostFromSlug(params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `http://localhost:3000/posts/${params.slug}`,
            images: [
                {
                    url: `http://localhost:3000/images/social-image.jpg`,
                    width: 800,
                    height: 600,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [`http://localhost:3000/images/social-image.jpg`],
        },
        metadataBase: new URL('http://localhost:3000'),
    };
}

// Gerar as rotas estáticas
export async function generateStaticParams() {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({
        slug: filename.replace('.mdx', ''),
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getPostFromSlug(params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <div>
            <Navbar />
            <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
                <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
                <div className="flex gap-2 mb-2">
                    {post.topics?.map((topic: string) => (
                        <span key={topic} className="inline-block px-2 py-0.5 text-xs font-semibold text-black dark:text-white bg-slate-200 dark:bg-slate-800 rounded-md">
                            {topic}
                        </span>
                    ))}
                </div>
                {post.description ? (
                    <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
                ) : null}
                <hr className="my-4" />
            </article>
        </div>
    );
}
