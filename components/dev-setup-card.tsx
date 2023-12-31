"use client"
import React from 'react';
import Image from 'next/image'

export default function DevSetupCard({extension}:any) {
  return (
    <article className="px-4 py-6 text-left glass-card">
      <header className="mb-1">
          <Image
          className="block mx-auto"
          src={`assets/images/setup/${extension.id}.png`}
          alt={extension.name}
          width={80}
          height={80}
        />
        <a href={extension.link} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-4 font-semibold gradient-text line-clamp-1">
            {extension.name}
          </h3>
        </a>
      </header>
      <p className="text-sm line-clamp-2">{extension.description}</p>
    </article>
  );
}


