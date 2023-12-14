import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '@/components/wordpress/container'
import MoreStories from '@/components/wordpress/more-stories'
import HeroPost from '@/components/wordpress/hero-post'
import Intro from '@/components/wordpress/intro'
import Layout from '@/components/wordpress/layout'
import { getAllPostsForHome } from '@/components/wordpress/lib/api'
import { CMS_NAME } from '@/components/wordpress/lib/constants'

export default function Index({ allPosts: { edges }, preview }: { allPosts: any, preview: any }) {
    const heroPost = edges[0]?.node
    const morePosts = edges.slice(1)

    return (
        <Layout preview={preview}>
            <Head>
                <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
            </Head>

            <Container>
                {/* <Intro /> */}
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.featuredImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getAllPostsForHome(preview)

    return {
        props: { allPosts, preview },
        revalidate: 10,
    }
}
