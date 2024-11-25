import Image from 'next/image'
import JourneyImage from './Journey.png'

export default function Page() {
    return (
        <div className="bg-[#191919] flex justify-center">
            <Image
                src={JourneyImage}
                alt="Journey"
                style={{ width: '60%', height: '100%', objectFit: 'cover' }}
                priority
            />
        </div>

    )
}