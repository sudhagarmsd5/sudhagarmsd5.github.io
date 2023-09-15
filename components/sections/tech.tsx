"use client";

import SectionHeading from "@components/section-heading";

export default function Tech() {
  const tech = [
    "angular",
    "react",
    "js",
    "ts",
    "sass",
    "node",
    "nest",
    "mongo",
    "postgres",
    "git",
    "docker",
    "figma",
    "vscode",
  ];

  return (
    <section className="container site-section">
      <SectionHeading heading="Tech" subheading="stack" />
      <div className="grid grid-cols-3 gap-6 mt-8 md:grid-cols-6 lg:grid-cols-9 lg:gap-12">
        {tech.map((item) => {
          return (
            <article
              className="flex items-center justify-center glass-card"
              key={item}
            >
              <img
                src={`assets/images/tech-stack/${item}.svg`}
                alt={item}
                width="90px"
                height="90px"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}