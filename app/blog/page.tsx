import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from "../components/navbar";
import PostItem from "../components/post-item";

// Diretório onde os arquivos MDX estão armazenados
const postsDirectory = path.join(process.cwd(), 'content/posts');

interface Post {
    slug: string;
    date: string;
    title: string;
    topics: string[];
    description: string;
}

// Função para obter todos os posts
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
            date: data.date,
            title: data.title,
            topics: data.topics,
            description: data.description,
        };
    });

    // Ordena os posts pela data (mais recente primeiro)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogPage() {
    const posts = await getAllPosts(); // Chama a função para pegar todos os posts

    return (
        <div>
            <Navbar />
            <div className="container max-w-4xl py-6 lg:py-10">
                <h1 className="text-4xl lg:text-5xl font-black text-black dark:text-white">Blog</h1>
                <p className="text-xl text-muted-foreground mt-8">Confira os posts mais recentes:</p>
                <hr className="mt-8 dark:border-slate-700 border-gray-400" />

                {posts.length > 0 ? (
                    <ul className="flex flex-col">
                        {posts.map((post) => (
                            <li key={post.slug} className='text-black dark:text-white'>
                                <PostItem
                                    slug={post.slug}
                                    title={post.title}
                                    topics={post.topics}
                                    description={post.description}
                                    date={post.date}
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
