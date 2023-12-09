import Image from 'next/image'
import React from 'react'

export default function DisplayClientFeedback({ info, imageSize = 100 }: {
    info: {
        name: string,
        imageSrc?: string,
        opinion: string
    },
    imageSize?: number
}) {

    return (
        <div style={{ display: "grid", justifyItems: "center", gap: "1rem", padding: "1rem" }}>
            {info.imageSrc ? (
                <Image alt={`${info.name}'s profile pic`} src={require(info.imageSrc).default.src} height={imageSize} width={imageSize} />

            ) : (
                <Image alt={`${info.name}'s profile pic`} src={require(`@/public/defaultprofile.png`).default.src} height={imageSize} width={imageSize} />
            )}

            <p className='makeBold'>{info.opinion}</p>

            <p className='makeBold'>{info.name}</p>
        </div>
    )
}
