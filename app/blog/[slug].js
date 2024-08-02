import { getPostBySlug,getAllSlugs } from 'lib/api';
import Container from 'components/container';
import PostHeader from 'components/post-header';
import PostBody from 'components/post-body';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column';
import ConvertBody from 'components/convert-body';
import PostCategories from 'components/post-categories';
import Pagination from 'components/pagination'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import styles from 'path/to/your/styles.module.css'; // スタイルのパスを正確に指定してください
import {eyecatchLocal} from 'lib/constants'
import {getPlaticeholder} from 'placeholder'
import {prevNextPost} from 'lib/prev-next-post'
import Pagenation from '../../components/pagination';

export async function getStaticPaths(){
    const allsulugs = await getAllSlugs()
    return{
        paths: allsulugs.map(({slug})=>'/blog/${slug}'),
        fallback:'blocking',
    }
}
export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
}) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className="sr-only">Categories</span>
            </h3>
            <Container>
                <article>
                    <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                    <div>{prevPost.title} {prevPost.slug}</div>
                    <div>{nextPost.title} {nextPost.slug}</div>
                    <figure>
                        <Image
                            src={eyecatch.url}
                            alt=""
                            layout="responsive"
                            width={eyecatch.width}
                            height={eyecatch.height}
                            sizes="(min-width:1152px) 1152px,100vw"
                            priority
                            placeholder="blur"
                            blurDataURL={eyecatch.blurDataURL}
                        />
                    </figure>
                    <TwoColumn>
                        <TwoColumnMain>
                            <Pagenation
                            prevText={prevPost.title}
                            prevUrl={'/blog/${prevPost.slug}'}
                            nextText={nextPost.title}
                            nextUrl={'/blog/${nextPost.slug}'}
                            />
                        </TwoColumnMain>
                        <TwoColumnSidebar>
                            <PostCategories categories={categories} />
                        </TwoColumnSidebar>
                    </TwoColumn>
                </article>
            </Container>
        </div>
    );
}

export async function getStaticProps(context) {
    const slug = 'context.params.slug';
    const post = await getPostBySlug(slug);
    if(!post){
        return{notfound: true}
    }else{
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const {base64}=await getPlaticeholder(eyecatch.url)
    eyecatch.blurDataURL = base64
    const allSlugs = await getAllSlugs()
    const {prevPost,nextPost}=prevNextPost(allSlugs,slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost,
        },
    };
    }
}
