"use client"
import GridBoxes from "@/components/gridBoxes/GridBoxes"
import { wordpressLink } from "@/utility/globalState"
import { useState, useEffect } from "react"

export default function Page() {
    const [all, allSet] = useState([])

    useEffect(() => {
        const startit = async () => {
            const response = await fetch(`${wordpressLink}/wp-json/wp/v2/posts`)
            const ye = await response.json()
            allSet(ye)
        }
        startit()


    }, [])


    return (
        <main>
            <GridBoxes style={{ padding: "1rem" }}>
                {all.map((eachPost: any) => {
                    return (
                        <div key={eachPost.id}>
                            <h3 dangerouslySetInnerHTML={{ __html: eachPost.title.rendered }}></h3>

                            <div dangerouslySetInnerHTML={{ __html: eachPost.content.rendered }}></div>
                        </div>
                    )
                })}
            </GridBoxes>
        </main>
    )
}
