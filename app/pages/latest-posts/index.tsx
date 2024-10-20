import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostItem from "@/app/components/post-item";

const postsDirectory = path.join(process.cwd(), 'content/posts');

interface Post {
    slug: string;
    date: string;
    title: string;
    topics: string[];
    description: string;
}

async function getAllPosts(): Promise<Post[]> {
    // Lê todos os arquivos MDX do diretório de posts
    const filenames = fs.readdirSync(postsDirectory);

    // Mapeia todos os arquivos e extrai os metadados (frontmatter) de cada post
    const posts: Post[] = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents); // Extrai os dados do frontmatter (como título e data)
        const slug = filename.replace('.mdx', '');

        return {
            slug,
            date: data.date, // Mantém a data no formato original (ISO ou UTC)
            title: data.title,
            topics: data.topics,
            description: data.description,
        };
    });

    // Ordena os posts pela data (mais recente primeiro)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function LatestPosts() {
    const posts = await getAllPosts();

    // Limita a 5 posts
    const latestPosts = posts.slice(0, 5);

    return (
        <div className="w-full bg-white dark:bg-slate-950 pt-6 justify-center">
            <h1 className="text-[4rem] font-bold text-black dark:text-white text-center">Posts Recentes</h1>
            <div className="container max-w-4xl py-6 lg:py-10">
                {latestPosts.length > 0 ? (
                    <ul className="flex flex-col">
                        {latestPosts.map((post) => (
                            <li key={post.slug} className='text-black dark:text-white'>
                                <PostItem
                                    slug={post.slug}
                                    title={post.title}
                                    topics={post.topics}
                                    description={post.description}
                                    // Aqui você pode formatar a data na renderização
                                    date={new Date(post.date).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Não há posts disponíveis</p>
                )}
            </div>
        </div>
    );
}
