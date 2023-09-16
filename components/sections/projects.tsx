"use client";
import React from "react";
import ProjectCard from "@components/project-card";
import SectionHeading from "@components/section-heading";
import SmallProjectCard from "@components/small-project-card";

interface ProjectsProps {
  projects: any[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="container site-section" id="projects">
      <SectionHeading heading="Projects" subheading="works" />
      <div className="relative flex flex-col gap-20 mt-5">
        {projects.slice(0, 1).map((project: { title: any }) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-3 2xl:grid-cols-4">
        {projects.slice(1).map((project: { title: any }) => (
          <SmallProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/sudhagarmsd5?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
          className="button primary"
        >
          View More
        </a>
      </div>
    </section>
  );
}
