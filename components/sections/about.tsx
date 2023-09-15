"use client";

import SectionHeading from "@components/section-heading";

export default function About() {
  return (
    <section className="container site-section" id="about">
      <SectionHeading heading="Know Me" subheading="about" />
      <div className="mt-10 xl:text-lg">
        <p className="mb-4">
          I work as a <strong>Frontend Developer</strong> at&nbsp;
          <a
            href="https://efficient-works.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline text-primary"
            aria-label="Efficient-Works"
          >
            <strong>Efficient-Works</strong>
          </a>
          &nbsp; where I help build the products like School ERP, CRM, eCommerce solutions serving the education, food industry, logistics and start up business.
        </p>
        <p className="mb-4">
          I am passionate about all things web. I have worked in multiple
          projects during these years in tech.
        </p>
        <p>
          I am based off of Tamil nadu, IN. When I’m not fiddling around with
          code, I tend to watch series, anime, a little bit
          of travelling and more.
        </p>
      </div>
    </section>
  );
};