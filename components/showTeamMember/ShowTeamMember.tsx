import Image from 'next/image'
import React from 'react'

export default function ShowTeamMember({ imageOptions, name, title }: { imageOptions: { src: string, alt: string }, name: string, title: string }) {

    return (
        <div style={{ display: "grid", justifyItems: "center", gap: "1rem", gridTemplateColumns: "1fr" }}>
            <Image alt={imageOptions.alt} src={imageOptions.src} style={{ aspectRatio: "1/1", borderRadius: "50%", width: "50%" }} height={1200} width={1200} />

            <p className='makeBold'>{name}</p>

            <p>{title}</p>
        </div>
    )
}
