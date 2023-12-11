import React from 'react'
import styles from "./page.module.css"
import GridBoxes from '@/components/gridBoxes/GridBoxes'
import { FillInData } from '@/useful functions/FillInData'

export default function page() {
    return (
        <main>
            <section>
                <h1>Out Team At Work</h1>

                <GridBoxes>
                    {FillInData.map((eachUser, eachUserIndex) => {
                        return (
                            <div key={eachUserIndex}>

                            </div>
                        )
                    })}
                </GridBoxes>
            </section>
        </main>
    )
}
