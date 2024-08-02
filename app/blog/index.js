import { getAllPosts } from 'lib/api';
import Meta from 'components/meta';
import Posts from 'components/posts'

export default function Blog({ posts }) {
    return (
        <div>
            <Meta title="Blog" description="Blog page description" />
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const posts = await getAllPosts();

    return {
        props: {
            posts: posts,
        },
    };
}
