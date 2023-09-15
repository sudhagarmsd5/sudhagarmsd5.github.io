import React from 'react';
import DevSetupCard from "@components/dev-setup-card";
import SectionHeading from "@components/section-heading";

const DevSetup = ({ extensions }:any) => {
  return (
    <section className="container site-section">
      <SectionHeading heading="Dev Environment" subheading="setup" />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
        {extensions.map((extension: { name: any; }) => (
          <DevSetupCard key={extension.name} extension={extension} />
        ))}
      </div>
    </section>
  );
};
export default DevSetup;
