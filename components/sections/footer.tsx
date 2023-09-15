"use client";
import dayjs from 'dayjs';
export default function Footer() {
  let now = dayjs();
  return (
    <>
      <footer className="container relative flex flex-col items-center justify-center pt-10 pb-6 overflow-hidden text-white">
        <div className="flex gap-6 mb-8" style={{ maxWidth: 600 }}>
          <a
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sudhagarmsd5"
            className="hover:text-primary"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3C9.713 3 3 9.713 3 18a14.99 14.99 0 0010.257 14.232c.75.13 1.03-.32 1.03-.714 0-.355-.019-1.536-.019-2.793-3.768.694-4.743-.918-5.043-1.763-.17-.431-.9-1.762-1.537-2.119-.526-.28-1.276-.975-.02-.993 1.182-.02 2.025 1.087 2.307 1.537 1.35 2.268 3.507 1.631 4.368 1.238.132-.975.525-1.63.957-2.006-3.338-.375-6.825-1.669-6.825-7.407 0-1.631.58-2.98 1.537-4.031-.15-.375-.675-1.913.15-3.975 0 0 1.256-.393 4.125 1.539a13.92 13.92 0 013.75-.507c1.276 0 2.55.168 3.75.505 2.869-1.95 4.126-1.536 4.126-1.536.825 2.063.3 3.6.15 3.975.955 1.05 1.537 2.38 1.537 4.03 0 5.758-3.506 7.032-6.843 7.407.543.468 1.012 1.369 1.012 2.776 0 2.005-.019 3.617-.019 4.125 0 .393.282.86 1.032.71A15.024 15.024 0 0033 18c0-8.287-6.712-15-15-15z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            href="https://twitter.com/sudhagarmsd"
            className="hover:text-primary"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.243 8.484c-1.145.506-2.36.84-3.603.987A6.294 6.294 0 0032.4 6a12.537 12.537 0 01-3.984 1.522 6.273 6.273 0 00-10.689 5.721 17.81 17.81 0 01-12.93-6.555 6.252 6.252 0 00-.849 3.155 6.272 6.272 0 002.79 5.221 6.252 6.252 0 01-2.841-.784v.078a6.278 6.278 0 005.032 6.151 6.316 6.316 0 01-2.835.108 6.278 6.278 0 005.861 4.358 12.59 12.59 0 01-9.287 2.598 17.745 17.745 0 009.616 2.82c11.539 0 17.85-9.56 17.85-17.85 0-.27-.008-.543-.02-.81a12.745 12.745 0 003.13-3.248l-.001-.001z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/sudhagar-murugesan/"
            className="hover:text-primary"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.503 27.509h-3.998v-6.266c0-1.494-.03-3.417-2.085-3.417-2.084 0-2.402 1.626-2.402 3.308v6.375H15.02V14.625h3.84v1.755h.052c.537-1.011 1.842-2.08 3.792-2.08 4.05 0 4.8 2.666 4.8 6.136v7.073h-.002zM10.505 12.863a2.318 2.318 0 01-2.323-2.324 2.322 2.322 0 112.321 2.324h.002zm2.003 14.646H8.5V14.625h4.011v12.884h-.002zM29.505 4.5H6.494C5.39 4.5 4.5 5.37 4.5 6.446v23.109c0 1.075.891 1.945 1.992 1.945h23.007c1.101 0 2.001-.87 2.001-1.945V6.445c0-1.075-.9-1.945-2.001-1.945h.006z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode"
            href="https://hashnode.com/@sudhagar"
            className="hover:text-primary"
          >
            <svg
              width="30"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.061 10.023a7.038 7.038 0 000 9.953l7.962 7.962a7.037 7.037 0 009.953 0l7.963-7.962a7.038 7.038 0 000-9.953l-7.963-7.962a7.038 7.038 0 00-9.953 0l-7.962 7.962zm16.422 8.46a4.926 4.926 0 10-6.966-6.967 4.926 4.926 0 006.966 6.967z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="currentColor" d="M0 0h30v30H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <p className="text-sm">Copyright © {now.year()} - Sudhagar Murugesan</p>
      </footer>
      <div className="w-full h-2 bg-primary-gradient"></div>
    </>
  );
}