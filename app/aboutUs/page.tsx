import React from 'react'
import styles from "./page.module.css"
import ImageTwoColumn from '@/components/imageTwoColumn/ImageTwoColumn'
import ImageBackgroundTwoColumn from '@/components/imageBackgroundTwoColumn/ImageBackgroundTwoColumn'
import Image from 'next/image'
import GridBoxes from '@/components/gridBoxes/GridBoxes'
import ShowTeamMember from '@/components/showTeamMember/ShowTeamMember'
import ThreePartDisplay from '@/components/threePartDisplay/ThreePartDisplay'
import EmailForm from '@/components/EmailForm/EmailForm'
import Link from 'next/link'

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
                        <Link href={`/gallery`}>
                            <button className='bttn1'>Photo Gallery</button>
                        </Link>
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

            <section style={{ backgroundColor: `rgba(var(--primaryColor)/ 10%)` }}>
                <GridBoxes breakPoint='390px' style={{ gap: "1rem", justifyContent: "center", maxWidth: "1200px", margin: "0 auto" }} >
                    {[
                        {
                            svgPath: <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />,
                            header: 'APPOINTMENT',
                            text: 'Call our office today, or make an appointment online. We look forward to welcoming you to our beautiful  office!',
                        },
                        {
                            svgPath: <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />,
                            header: 'EXPERTISE',
                            text: 'We have selected leading professionals for their up-to-date knowledge, reassuring and caring manner and premium clinical expertise.',
                        },
                        {
                            svgPath: <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />,
                            header: 'ACCESS',
                            text: 'We offer same-day appointments - 6 days a week We are open:Monday to Wednesday 8:00am–8:00pm, Thursday to Friday 8.00am–6.00pm and Saturday10:00am–4:00pm',
                        },
                        {
                            svgPath: <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />,
                            header: 'PREVENTATIVE HEALTHCARE',
                            text: 'Prevention is our focus. Your own personal doctor  will proactively help you maintain your health. We start by establishing your health baseline with a comprehensive medical. We then monitor your health to help you stay fit and healthy.',
                        },
                    ].map((eachItem, eachItemKey) => {
                        return (
                            <ThreePartDisplay
                                key={eachItemKey}
                                firstElement={
                                    <svg style={{ width: "50%", justifySelf: "center", marginTop: "1rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        {eachItem.svgPath}
                                    </svg>
                                }
                                secondElement={<h2>{eachItem.header}</h2>}
                                thirdElement={<p>{eachItem.text}</p>}
                            />
                        )
                    })}
                </GridBoxes>
            </section>

            <section>
                <EmailForm />
            </section>
        </main>
    )
}
