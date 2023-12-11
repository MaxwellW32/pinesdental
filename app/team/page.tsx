import React from 'react'
import styles from "./page.module.css"
import GridBoxes from '@/components/gridBoxes/GridBoxes'
import { FillInData } from '@/useful functions/FillInData'
import Image from 'next/image'

export default function page() {
    return (
        <main>
            <section>
                <h1 style={{ marginBottom: "1rem" }}>Out Team At Work</h1>

                <GridBoxes
                    style={{ gap: "1rem" }}
                >
                    {FillInData.map((eachUser, eachUserIndex) => {
                        return (
                            <Image key={eachUserIndex} alt={eachUser.alt} src={eachUser.src} height={1200} width={1200} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", }} />
                        )
                    })}
                </GridBoxes>
            </section>
        </main>
    )
}
