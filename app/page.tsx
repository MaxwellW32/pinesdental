import ImageSection from '@/components/imageSection/ImageSection'
import Image from 'next/image'

export default function Home() {

  return (
    <main style={{ height: "5000vh" }}>
      <ImageSection imageSrc={`url(${require(`${"@/public/dentistbg.jpg"}`).default.src})`} sectionStyles={{ gap: "3rem" }} height='30rem'>
        <h1 className='giantText' style={{}}>WELCOME TO PINES DENTAL!</h1>

        <h2 className='makeBold'>We offer multitude of primary health care solution to our patients</h2>

        <button style={{ justifySelf: "center", width: "min(200px, 100%" }}>More about us</button>
      </ImageSection>

      <section>
        <h1 className='giantText' style={{ marginBottom: "2rem" }}>ABOUT THE CLINIC</h1>

        <Image style={{ margin: "0 auto" }} alt='hall' src={require(`@/public/hall.jpg`).default.src} height={400} width={1300} />

      </section>
      <section></section>
      <section></section>
    </main>
  )
}
