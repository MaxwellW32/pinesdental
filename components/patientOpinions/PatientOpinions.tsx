import CarouselSwipe from '@/resuables/carouselSwipe/CarouselSwipe'
import React from 'react'
import DisplayClientFeedback from '../home/displayClientFeedback/DisplayClientFeedback'

export default function PatientOpinions() {
    return (
        <CarouselSwipe elementArr={[
            <DisplayClientFeedback key={1} info={{
                name: "Albert Payne",
                opinion: "Just a quick note to say thank you so much for the care youtook over my appointment today. I am very grateful for your high standard of care and professionalism."
            }} />,
            <DisplayClientFeedback key={2} info={{
                name: "Sarah Connor",
                opinion: "Thank you so much for fitting us in today, don't know what we'd have done without you. My daughter is quite timid, but your doctor was brilliant with her."
            }} />,
            <DisplayClientFeedback key={3} info={{
                name: "Melecia Willis",
                opinion: "Great Services"
            }} />
        ]} />
    )
}
