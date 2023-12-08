import CarouselSwipe from '@/resuables/carouselSwipe/CarouselSwipe'
import GridStack from '@/resuables/gridStack/GridStack'
import ImageSection from '@/components/imageSection/ImageSection'
import Image from 'next/image'
import PrettyList from '@/resuables/prettyList/PrettyList'

export default function Home() {
  //make a grid stack component
  //make a carousel component

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

        <GridStack gridStyles={{ padding: "1rem", alignItems: "center" }}>
          <div>
            <h3 style={{ marginBlock: "1rem" }}>Alpha Health GP</h3>

            <CarouselSwipe items={[
              <div key={1}>
                <p>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.</p>

                <br />
                <p>We offer diverse and qualitative services to private and corporate customers across the board. Out professional team of primary health care personnel is well seasoned and experienced in providing top level medical support.</p>
              </div>,

              <div key={2}>
                <p>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.</p>

                <br />
                <p>We offer diverse and qualitative services to private and corporate customers across the board. Out professional team of primary health care personnel is well seasoned and experienced in providing top level medical support.</p>
              </div>,

              <div key={3}>
                <p>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.</p>

                <br />
                <p>We offer diverse and qualitative services to private and corporate customers across the board. Out professional team of primary health care personnel is well seasoned and experienced in providing top level medical support.</p>
              </div>
            ]} height='17rem' />
          </div>

          <div>
            <Image alt='quotepng' src={require(`@/public/quotes.png`).default.src} height={30} width={30} style={{ translate: "-1rem 0" }} />

            <p>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.</p>

            <p>Dr. Francis Christensen</p>
          </div>
        </GridStack>

        <GridStack gridStyles={{ padding: "1rem", alignItems: "center", gap: 0 }} >
          <Image style={{ margin: "0 auto" }} alt='hall' src={require(`@/public/health.webp`).default.src} height={400} width={1300} />

          <div style={{ backgroundColor: "rgb(var(--primaryColor))", height: "100%", padding: "1rem" }}>
            <h1 className='giantText' style={{ marginBottom: "2rem", color: "rgb(var(--whiteBlackSwitch))" }}>SERVICES</h1>

            <PrettyList items={[
              { name: "GP Consultation", link: "/services/#GP Consultation" },
              { name: "Vaccinations", link: "" },
              { name: "Travel Medication", link: "/services/#Travel Medication" },
              { name: "Family Doctor services" },
              { name: "Occupational" },
              { name: "Extra Services" },
              { name: "Physiotherapy & Podiatry" },
            ]} />

            <button style={{ backgroundColor: "#fff", color: "rgb(var(--primaryColor))", marginBlock: "1rem" }}>See All Services</button>
          </div>
        </GridStack>
      </section>
      <section></section>
      <section></section>
    </main>
  )
}
