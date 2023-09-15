"use client"

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
          <img
            src={`/assets/images/${subheading}.svg`}
            height="50px"
            className="h-12 lg:h-14"
            alt={heading}
          />
        </div>
      </div>
    </div>
  )
}