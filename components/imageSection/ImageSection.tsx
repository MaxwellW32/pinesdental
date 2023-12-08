import { CSSProperties, ReactNode } from "react"
import styles from "./imagesection.module.css"

export default function ImageSection({ imageSrc, children, sectionStyles, blurAmt = "1px", height, filterColor = "rgba(255, 255, 255, .2)" }: { imageSrc: string, children: ReactNode, sectionStyles: CSSProperties, height: string, blurAmt?: string, filterColor?: string }) {


  return (
    <section className={styles.sectionPart} style={{ position: "relative", height: height, ...sectionStyles }}>
      {children}

      <div className={styles.imagePart} style={{ "--filterColor": filterColor, backgroundImage: imageSrc, height: height, filter: `blur(${blurAmt})` } as CSSProperties}></div>
    </section>
  )
}
