import Image from 'next/image'
import JourneyImage from './Journey.png'

export default function Page() {
    return (
        <div className="bg-[#191919] flex justify-center min-h-screen">
            <Image
                src={JourneyImage}
                alt="Journey"
                style={{ width: '60%', height: '100%', objectFit: 'cover' , minWidth: '350px'}}
                priority
            />
        </div>

    )
}