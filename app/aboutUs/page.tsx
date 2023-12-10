import React from 'react'
import styles from "./page.module.css"
import ImageTwoColumn from '@/components/imageTwoColumn/ImageTwoColumn'
import ImageBackgroundTwoColumn from '@/components/imageBackgroundTwoColumn/ImageBackgroundTwoColumn'
import Image from 'next/image'
import GridBoxes from '@/components/gridBoxes/GridBoxes'
import ShowTeamMember from '@/components/showTeamMember/ShowTeamMember'

export default function page() {
    const team = {
        src: "",
        name: "",
        title: ""
    }


    return (
        <main>
            <ImageTwoColumn
                imageOptions={{ alt: "", src: require(`@/public/dentistteam.webp`).default.src }}
                secondEl={
                    <div style={{ backgroundColor: "rgb(var(--primaryColor))", padding: "1rem", display: "grid", justifyItems: "center", alignContent: "center", gap: "1rem" }}>
                        <h2>Our team at their workplace</h2>
                        <button className='bttn1'>Photo Gallery</button>
                    </div>}
            />

            <ImageBackgroundTwoColumn
                style={{
                    flexDirection: "row-reverse"
                }}
                backgroundImageChildren={
                    <div style={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "flex-end" }}>

                        <div style={{ padding: "1rem", }}>
                            <Image alt='quotepng' src={require(`@/public/quotes.png`).default.src} height={30} width={30} style={{ translate: "-1rem 0" }} />

                            <p className='makeBold'>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.</p>

                            <p style={{ marginTop: ".5rem" }}>Dr. Francis Christensen</p>
                        </div>
                    </div>

                }

                secondEl={
                    <div style={{ padding: "1rem" }}>
                        <h1>Welcome to Pines Dental!</h1>
                        <br />
                        <p style={{ whiteSpace: "pre-wrap" }}>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.
                            <br />
                            <br />

                            We offer diverse and qualitative services to private and corporate customers across the board. Out professional team of primary health care personnel is well seasoned and experienced in providing top level medical support.
                            <br />
                            <br />



                            We at Alpha Health do offer focused and detailed, protracted in attention to the core of the subject examinations and consultation. We are dedicated to get on every medical question or concern which our customers might have.</p>
                    </div>}

                backgroundImageProps={{
                    style: {
                        backgroundImage: `url(${require(`@/public/femaledentist.jpg`).default.src})`
                    }
                }}
                backdropProps={{
                    style: {
                        backgroundColor: "rgb(var(--whiteBlackSwitch))",
                        opacity: .5
                    }
                }}
            />

            <section>
                <GridBoxes breakPoint='200px' style={{ gap: "1rem", justifyContent: "center" }} >
                    {[{
                        src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-about-img3.jpg",
                        name: "Dr.Francis Christensen",
                        title: "Chief Medical Officer"
                    },
                    {
                        src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-about-img4.jpg",
                        name: "Leslie Gross",
                        title: "Senior Practice Nurse"
                    }, {
                        src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-about-img5.jpg",
                        name: "Dana Sims",
                        title: "Practice Nurse"
                    }, {
                        src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-about-img6.jpg",
                        name: "Kimberly Barker",
                        title: "Patient Services Manager"
                    },].map((eachPerson, eachPersonIndex) => {
                        return <ShowTeamMember key={eachPersonIndex} imageOptions={{ alt: `Team Member Image`, src: eachPerson.src }} name={eachPerson.name} title={eachPerson.title} />
                    })}
                </GridBoxes>
            </section>
        </main>
    )
}
