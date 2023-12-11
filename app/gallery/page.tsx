import React from 'react'
import styles from "./page.module.css"
import CardBackgroundUpColorChange from '@/components/backgroundUpColorChange/CardBackgroundUpColorChange'
import GridBoxes from '@/components/gridBoxes/GridBoxes'

export default function page() {
    return (
        <main>
            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ marginBottom: "1rem" }}>Photo Gallery</h1>
                <p >Our office goes above and beyond our main duties in order to give an exceptional level of health care to all our clients.</p>
                <p>This gallery reviews the best moments of our medical practice, captured on film.</p>
            </section>

            <section>
                <GridBoxes
                    breakPoint='250px'
                    style={{
                        gap: "2rem",
                        maxWidth: "1000px",
                        margin: "0 auto"
                    }}
                >
                    {[
                        {
                            title: "Cabinet",
                            alt: "Cabinet",
                            src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                        {
                            title: "Going The Extra Mile",
                            alt: "Going The Extra Mile",
                            src: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                        {
                            title: "Out Team At Work",
                            alt: "Out Team At Work",
                            src: "https://images.pexels.com/photos/3845759/pexels-photo-3845759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                        {
                            title: "Certification",
                            alt: "Certification",
                            src: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                        {
                            title: "Internship",
                            alt: "Internship",
                            src: "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                        {
                            title: "Service",
                            alt: "Service",
                            src: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },

                    ].map((eachItm, eachItmIndex) => {

                        return (
                            <CardBackgroundUpColorChange
                                key={eachItmIndex}

                                titleEl={<h1 style={{ textAlign: "center" }}>{eachItm.title}</h1>}

                                imageOptions={{ alt: eachItm.alt, src: eachItm.src }}
                                primaryColorSecondaryColor={["", ""]}
                                backdropProps={{
                                    style: {
                                        backgroundColor: "rgb(var(--whiteBlackSwitch))",
                                        opacity: 0.6
                                    },
                                }}

                                style={{
                                    aspectRatio: "1/1"
                                }}
                            />
                        )
                    })}
                </GridBoxes>
            </section>

        </main>
    )
}
