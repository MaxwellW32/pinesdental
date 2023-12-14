import Container from '@/components/wordpress/container'
import Header from '@/components/wordpress/header'
import Layout from '@/components/wordpress/layout'
import { getPostAndMorePosts } from '@/components/wordpress/lib/api'
import MoreStories from '@/components/wordpress/more-stories'
import PostBody from '@/components/wordpress/post-body'
import PostHeader from '@/components/wordpress/post-header'
import PostTitle from '@/components/wordpress/post-title'
import SectionSeparator from '@/components/wordpress/section-separator'
import Tags from '@/components/wordpress/tags'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'Blog Post',
    description: 'our blog post',
}


export default async function page({ params, preview, previewData }: { params: { slugs: string[] }, preview: boolean, previewData: any }) {
    const slug = params.slugs[0]

    const data = await getPostAndMorePosts(slug, preview, previewData)
    const post = data.post
    const posts = data.posts
    const morePosts = posts?.edges


    return (
        <div>{JSON.stringify(data)}</div>
    )

    // return (
    //     <Layout preview={preview}>
    //         <Container>
    //             <Header />
    //             <article>
    //                 <PostHeader
    //                     title={post.title}
    //                     coverImage={post.featuredImage}
    //                     date={post.date}
    //                     author={post.author}
    //                     categories={post.categories}
    //                 />
    //                 <PostBody content={post.content} />
    //                 <footer>
    //                     {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
    //                 </footer>
    //             </article>

    //             <SectionSeparator />
    //             {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    //         </Container>
    //     </Layout>
    // )
}
