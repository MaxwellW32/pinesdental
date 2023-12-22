import GridStack from '@/resuables/gridStack/GridStack'
import ImageSection from '@/components/imageSection/ImageSection'
import Image from 'next/image'
import PrettyList from '@/resuables/prettyList/PrettyList'
import FlexTwoStack from '@/resuables/flexTwoStack/FlexTwoStack'
import DisplayClientFeedback from '@/components/home/displayClientFeedback/DisplayClientFeedback'
import AskQuestions from '@/components/askQuestions/AskQuestions'
import { getAddress, getEmail, getOpeningHours, getPhone } from '@/useful functions/retrievePinesInfo'
import BackToTopBttn from '@/components/home/BackToTopBttn'
import AddressMap from '@/components/addressMap/AddressMap'
import PatientOpinions from '@/components/patientOpinions/PatientOpinions'
import CarouselSwipe from '@/resuables/carouselSwipe/CarouselSwipe'

function FakeEl({ height, width, amount }: { height: string, width: string, amount: number }) {

  return (
    <>
      {new Array(amount).fill("").map((eachArr, eachArrIndex) => {
        return (
          <div key={eachArrIndex} style={{ height: height, width: width, backgroundColor: "orange" }}>{eachArrIndex + 1} el</div>
        )
      })}
    </>
  )
}

export default function Home() {

  return (
    <main>
      <ImageSection imageSrc={`url(${require(`${"@/public/dentistbg.jpg"}`).default.src})`} sectionStyles={{ gap: "3rem" }} height='30rem'>
        <h1 className='giantText' style={{}}>WELCOME TO PINES DENTAL!</h1>

        <h2 className='makeBold'>We offer multitude of primary health care solution to our patients</h2>

        <button style={{ justifySelf: "center", width: "min(200px, 100%" }}>More about us</button>
      </ImageSection>

      <section>
        <h1 className='giantText' style={{}}>ABOUT THE CLINIC</h1>

        <Image style={{ margin: "3rem auto 0rem auto" }} alt='hall' src={require(`@/public/hall.jpg`).default.src} height={400} width={1300} />

        <GridStack gridStyles={{ padding: "1rem", alignItems: "center" }}>
          <div>
            <h3 style={{ marginBlock: "1rem" }}>Pines Dental</h3>

            <CarouselSwipe elementArr={[
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
            ]} />
          </div>

          <div>
            <Image alt='quotepng' src={require(`@/public/quotes.png`).default.src} height={30} width={30} style={{ translate: "-1rem 0" }} />

            <p>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.</p>

            <p>Dr. Francis Christensen</p>
          </div>
        </GridStack>

        <FlexTwoStack items={[
          <Image key={1} style={{ margin: "0 auto", objectFit: "cover", width: "100%", height: "100%", position: "relative" }} alt='hall' src={require(`@/public/health.webp`).default.src} height={400} width={1400} />,

          <div key={2} style={{ backgroundColor: "rgb(var(--primaryColor))", height: "100%", padding: "1rem" }}>
            <h1 className='giantText' style={{ color: "rgb(var(--whiteBlackSwitch))" }}>SERVICES</h1>

            <PrettyList items={[
              { name: "GP Consultation", link: "/services/#GP Consultation" },
              { name: "Vaccinations", link: "/services/#Vaccinations" },
              { name: "Travel Medication", link: "/services/#Travel Medication" },
              { name: "Family Doctor services", link: "/services/#Family Doctor services" },
              { name: "Occupational", link: "/services/#Occupational" },
              { name: "Extra Services", link: "/services/#Extra Services" },
              { name: "Physiotherapy & Podiatry", link: "/services/#Physiotherapy & Podiatry" },
            ]} />

            <button className='bttn1' style={{ marginBlock: "2rem" }}>See All Services</button>
          </div>
        ]} />
      </section>

      <section>
        <h1 className='giantText'>WHAT OUR PATIENTS SAY</h1>

        <PatientOpinions />

        <button className='bttn1' style={{ margin: "0 auto", display: "block", marginBlock: "2rem" }}>All Testimonials</button>
      </section>

      <section>
        <GridStack>
          <AskQuestions />

          <div>
            <h1 className='giantText'>Contact Us</h1>

            <h2>Pines Dental</h2>

            {[{
              svgItem: <svg style={{ fill: "rgb(var(--primaryColor))" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>,
              textEl: <p>{getAddress()}</p>
            }, {
              svgItem: <svg style={{ fill: "rgb(var(--primaryColor))" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>,
              textEl: <p>{getPhone()}</p>
            }, {
              svgItem: <svg style={{ fill: "rgb(var(--primaryColor))" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>,
              textEl: <p className='makeBold' style={{ color: "rgb(var(--primaryColor))" }}>{getEmail()}</p>
            },].map((eachItem, eachItemIndex) => {
              return (
                <div key={eachItemIndex} style={{ display: "grid", gridTemplateColumns: 'auto 1fr', alignItems: "center", gap: ".5rem" }}>
                  {eachItem.svgItem}
                  {eachItem.textEl}
                </div>
              )
            })}

            <h2 style={{ marginTop: "1rem" }}>Opening Hours</h2>

            {[{
              divItem: <div style={{ aspectRatio: "1/1", width: ".5rem", backgroundColor: "rgb(var(--primaryColor))" }}></div>,
              textEl: <p style={{ opacity: .7 }}>{getOpeningHours(0)}</p>
            }, {
              divItem: <div style={{ aspectRatio: "1/1", width: ".5rem", backgroundColor: "rgb(var(--primaryColor))" }}></div>,
              textEl: <p style={{ opacity: .7 }}>{getOpeningHours(1)}</p>
            }, {
              divItem: <div style={{ aspectRatio: "1/1", width: ".5rem", backgroundColor: "rgb(var(--primaryColor))" }}></div>,
              textEl: <p style={{ opacity: .7 }}>{getOpeningHours(2)}</p>
            },].map((eachItem, eachItemIndex) => {
              return (
                <div key={eachItemIndex} style={{ display: "grid", gridTemplateColumns: 'auto 1fr', alignItems: "center", gap: ".5rem" }}>
                  {eachItem.divItem}
                  {eachItem.textEl}
                </div>
              )
            })}
          </div>
        </GridStack>
      </section>

      <section>
        <AddressMap />
      </section>

      <BackToTopBttn />
    </main>
  )
}
