import { getAllPostsForHome } from "@/components/wordpress/lib/api"


export default async function page({ preview = false }: { preview: boolean }) {
    const allPosts = await getAllPostsForHome(preview)

    return (
        <div>{JSON.stringify(allPosts)}</div>
    )
}
