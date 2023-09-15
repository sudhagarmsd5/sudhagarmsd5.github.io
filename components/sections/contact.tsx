"use client";


import SectionHeading from "@components/section-heading";

export default function Contact() {
  return (
    <section className="container site-section" id="contact">
      <SectionHeading heading="Chat?" subheading="contact" />
      <div className="mt-10" style={{ maxWidth: 600 }}>
        <p>
          I would love to connect! If it is for an upcoming project or just want
          to talk #tech, Feel free to reach out me on my email&nbsp;
          <a
            href="mailto:sudhagarmsd@gmail.com"
            rel="noopener noreferrer"
            className="font-semibold underline text-primary"
          >
            sudhagarmsd@gmail.com
          </a>
          &nbsp;or via&nbsp;
          <a
            href="https://twitter.com/sudhagarmsd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline text-primary"
          >
            Twitter
          </a>
        </p>
      </div>
    </section>
  );
};


