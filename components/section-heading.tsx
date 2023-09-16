"use client"
import Image from 'next/image'
interface heading {
  heading: string;
  subheading: string;
}

export default function SectionHeading({ heading, subheading }: heading) {
  return (
    <div>
      <div className="relative">
        <h2 className="-mb-5">{heading}</h2>
        <div className="">
          <Image
            src={`/assets/images/${subheading}.svg`}
          width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '50px' }}
            className="h-12 lg:h-14"
            alt={heading}
          />
        </div>
      </div>
    </div>
  )
}