import Image from "next/image";

const CaseStudies = () => {
  return (
    <section>
      <div className="">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4">
          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case1.avif"
              width={500}
              height={400}
              className="w-full h-60 object-center transition-transform duration-300 group-hover:scale-105"
              alt="Pink Unwrapped"
            />
            <div
              className="absolute inset-0  flex md:flex-col justify-center 
      items-center bg-black/50 transition-all duration-300 hover:scale-120 
      group-hover:bg-black/0"
            >
              <Victoria />
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case2.avif"
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              alt="Lovesac 25th"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 transition-all duration-300 hover:scale-120 group-hover:bg-black/0">
              <Victoria />
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case3.avif"
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-120"
              alt="Nations Lending"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 transition-all duration-300 hover:scale-120 group-hover:bg-black/0">
              <Victoria />
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case4.avif"
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-120"
              alt="CoinFlip"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 transition-all duration-300 hover:scale-120 group-hover:bg-black/0">
              <Victoria />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4">
          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case5.avif"
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              alt="Ollie Best in Doge"
            />
            <div
              className="absolute inset-0 flex justify-center items-center bg-black/50 
      transition-all duration-300 hover:scale-120 group-hover:bg-black/0"
            >
              <Victoria />
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case6.avif"
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 
        group-hover:scale-120"
              alt="Trustpilot"
            />
            <div
              className="absolute inset-0 flex justify-center items-center bg-black/50 
      transition-all duration-300 hover:scale-120 group-hover:bg-black/0"
            >
              <Victoria />
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case7.avif"
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 
        group-hover:scale-120"
              alt="SingleCare"
            />
            <div
              className="absolute inset-0 flex justify-center 
      items-center bg-black/50 transition-all duration-300
       hover:scale-120 group-hover:bg-black/0"
            >
              <Victoria />
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <Image
              src="/images/case studies/case8.avif"
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              alt="Apple"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 transition-all duration-300 hover:scale-105 group-hover:bg-black/0">
              <Victoria />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

export const Victoria = () => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      fill="white"
      className="w-[72px] h-[52px] lg:w-24 lg:h-16"
      data-bbox="70.67 96.107 259.696 210.223"
      viewBox="70.67 96.107 259.696 210.223"
      xmlns="http://www.w3.org/2000/svg"
      data-type="shape"
      role="presentation"
      aria-hidden="true"
      aria-label=""
    >
      <g>
        <path d="M209.08 306.32c2.44-2.77 2.52-6.11 2.47-9.55-.09-6.46-.03-12.92-.03-19.36-1.02-.77-1.86-1.4-2.74-2.06.34-.33.54-.67.73-.67 3.58 0 7.18-.17 10.74.14 8.37.71 11.21 6.96 6.49 13.98-.63.94-1.33 1.84-2.25 3.12 4.21 4.7 6.58 11.14 13.64 12.93.23.06.25.96.36 1.48h-5.19c-6.45-2.11-8.42-8.73-12.96-13.03-1.43-.08-2.94-.17-4.62-.27v9.74c1.2 1.48 2.04 2.52 2.88 3.56h-9.52Zm6.59-16.1c3.14.77 5.95 1.58 8.03-1.4 1.49-2.14 1.34-7.25-.25-9.43-1.97-2.7-4.57-3.05-7.77-1.97v12.8Z"></path>
        <path d="M70.67 226.8h11.58c-.77 1.03-1.25 1.67-1.89 2.53 1.5 4.04 3.02 8.21 4.58 12.37 1.5 3.99 3.04 7.96 5.43 11.96 3.12-8.12 6.23-16.24 9.32-24.3-.87-.91-1.43-1.49-2.3-2.41h8.27c-1.38 2.31-3.06 4.55-4.16 7.04-3.48 7.9-6.72 15.9-10.1 23.85-.6 1.41-1.37 2.74-2.06 4.11l-1.22.18c-4.45-10.93-8.89-21.86-13.39-32.94-1.4-.53-2.73-1.03-4.06-1.52v-.86Z"></path>
        <path d="M241.96 306.32c3.01-7.44 2.77-28.06-.74-31.39h16.73c-.1 1.44-.2 2.93-.25 3.72-3.01-.71-5.84-1.39-9.19-2.18v11.29h8.88c-.09 1.63-.18 3.12-.24 4.21-2.87-.58-5.55-1.11-8.68-1.74v13.06c2.61.15 5.08.29 7.45.43 1.05-1.22 1.84-2.15 2.64-3.08.33.15.65.3.98.45-.66 1.75-1.33 3.49-1.99 5.24h-15.57Z"></path>
        <path d="M188.32 306.32c-6.67-2.33-11.51-6.21-12.6-13.76-1.31-9.03 4.49-17.34 13.53-18.19 4.61-.43 9.34.31 14.55.54-.17 3.11-.3 5.41-.43 7.7-3.27-5.21-7.45-7.15-13.72-6.11-5.5.91-8.5 3.96-9.51 9.66-1.81 10.19 5.5 18.39 15.75 17.66 3.72-.27 3.93-.41 7.62-5.26.33 3.45.11 6.16-3.08 7.76h-12.11Z"></path>
        <path d="M126.9 306.32c-3.66-2.02-2.15-5.01-1.79-8.36 1.3 1.99 2.02 3.75 3.3 4.9 2.36 2.15 6.52 1.82 8.72-.34 2.19-2.14 2.46-5.53.16-8.21-1.95-2.27-4.41-4.11-6.62-6.15-2.47-2.28-4.67-4.7-4.87-8.33-.28-4.86 2.43-8.52 7.26-9.06 2.76-.31 5.61.1 8.62.2v6.75c-1.04-1.49-1.53-2.35-2.18-3.08-1.93-2.19-6.06-2.51-8.28-.71-2.2 1.78-2.41 5.27-.07 7.66 2.61 2.66 5.74 4.82 8.32 7.51 4.75 4.93 4.39 11.67-.59 15.52-.79.61-1.63 1.14-2.45 1.71h-9.52Z"></path>
        <path d="M151.99 306.32c2.68-2.89 2.42-6.5 2.43-10.03v-18.64c-.97-.85-1.85-1.63-3.23-2.85h17.26c-.12 1.68-.23 3.14-.42 5.68-2.73-4.31-5.92-3.56-9.35-3.09v10.48h9.04c-.09 1.73-.17 3.24-.22 4.15-2.97-.6-5.69-1.14-8.62-1.73v13.08c2.73.12 4.97.22 7.83.35l2.18-2.83.69.24c-.38 1.73-.77 3.46-1.15 5.19h-16.44Z"></path>
        <path d="M273.1 306.32c2.73-4.81 1.7-10.08 1.81-15.19.1-4.43.02-8.86.02-14.34-3.99.6-7.42 1.11-11.01 1.65.21-.94.53-2.39.84-3.79h25.07v4.11c-3.27-.7-6.51-1.4-10.24-2.2v26.62c.98 1.02 2 2.08 3.02 3.15h-9.52Z"></path>
        <path d="M179.92 157.09c-5.55-13.74-10.8-26.8-16.12-39.85-1.63-4-4.73-5.94-9.02-6.31-1.49-.13-2.94-.85-4.32-1.97 5.49-3.69 11.36-1.48 16.99-1.67 5.86-.19 11.73-.04 17.83-.04 8.28-11.09 18.42-13.72 35.54-8.7-.2 4.93.36 10.03-1.05 14.93l-1.52.18c-.53-1.32-1.27-2.59-1.54-3.96-.72-3.67-2.94-5.91-6.4-6.85-2.06-.56-4.26-.94-6.39-.91-8.36.11-12.99 6.63-10.61 14.84 2.2 7.56 8.06 12.11 14.06 16.39 3.85 2.74 8.03 5.03 12.7 7.91 3.36-9.72 7.79-18.93 9.85-29.23-2.96-.78-5.32-1.39-7.67-2.01-.06-.45-.12-.9-.19-1.36 1.24-.56 2.47-1.56 3.72-1.59 7.19-.15 14.38-.12 21.58-.01 1.13.02 2.25.73 3.38 1.12.04.4.09.79.13 1.19-1.11.56-2.2 1.57-3.33 1.61-4.43.15-6.77 2.82-8.33 6.47-4.24 9.91-8.41 19.85-12.65 29.89 1.52 2.03 3.06 3.91 4.43 5.91 5.89 8.64 8.32 18.03 7.24 28.6-1.31 12.85-16.15 28.29-31.48 30.63-5.71.87-11.2.36-16.62-1.31-23.64-7.3-30.12-35.25-12.19-52.46.51-.49 1.16-.85 1.98-1.44Zm2.98 7.97c-4.6 4.76-6.09 11.11-4.78 19.56 1.94 12.53 12.65 21.89 24.05 21 18.16-1.41 29.48-20.9 21.6-37.26-.88-1.82-2.12-3.46-3.49-5.65-1 2.23-1.66 3.66-2.29 5.11-4.53 10.42-9.02 20.85-13.62 31.24-.76 1.73-1.98 3.26-2.98 4.88l-1.39.1c-1.16-1.81-2.62-3.49-3.43-5.44-3.8-9.16-7.41-18.41-11.11-27.61-.78-1.95-1.67-3.86-2.57-5.92Zm13.91-3.02-.93.6c2.41 6.4 4.82 12.8 7.23 19.21.31-.04.62-.09.94-.13 3.39-8.48 6.78-16.95 10.29-25.73-3.74-2.46-7.05-4.71-10.44-6.85-10.94-6.9-18.05-16.36-19.74-29.41-.36-2.79-.34-5.64-.53-9-2.28.39-4.11.71-6.76 1.17 5.08 13.6 9.89 26.47 14.49 38.79 4.61.7 8.6 1.09 12.48 1.97 2.81.64 5.03 2.54 5.25 5.63.37 5.09-2.77 8.81-5.16 12.89-1.09-4.45-2.73-7.88-7.12-9.12Z"></path>
        <path d="M220.58 245.35c-.04 9.78-7.33 17.09-16.85 16.91-9.22-.17-15.78-7.01-15.74-16.42.03-9.25 7.25-16.42 16.45-16.34 9.63.09 16.19 6.52 16.15 15.85Zm-27.95.16c-.07 3.47.92 7.3 3.79 10.47 4.5 4.96 12.33 5.11 16.49.36 4.99-5.7 3.84-17.81-2.26-22.28-1.34-.98-3.05-1.7-4.69-1.96-8.17-1.32-13.35 3.69-13.33 13.41Z"></path>
        <path d="M235.45 261.38h-9.22c2.84-5.06 1.76-10.39 1.61-15.51-.15-5.03 1.88-10.52-2.3-15.58 4.16 0 8.25-.38 12.24.08 6.9.8 9.59 6.58 6.18 12.67-.83 1.48-1.88 2.83-3.04 4.54 4.26 4.77 6.85 11.08 13.86 13.03-4.18 1.77-7.34 1.23-10.19-2.08-2.62-3.04-4.96-6.32-7.58-9.7h-5.04c.55 4.19-2.04 8.78 3.49 12.54Zm-3.29-15.52c2.94.83 5.57 1.49 7.69-1.07 1.69-2.03 1.75-7.45.06-9.78-1.88-2.59-4.41-3.38-7.75-2.26v13.11Z"></path>
        <path d="M153.5 231.45v6.65l-.76.76c-1.2-5.47-4.93-6.79-9.47-6.85-3.68-.05-7.21.25-9.99 3.08-5.06 5.18-4.15 15.85 1.8 21.02 5.88 5.11 13.8 4.42 18.77-1.51l-.86 5.57c-7.55 3.9-18.43 2.08-23.48-3.65-4.75-5.38-5.14-14.46-.88-20.48 4.59-6.48 15.33-8.48 24.87-4.6Z"></path>
        <path d="M281.04 261.36h-6.37c1.49-3.03 3.25-6.1 4.54-9.35 2.39-6.01 4.49-12.13 6.73-18.19.48-1.29 1.08-2.54 2.09-4.89 1.08 2.32 1.77 3.62 2.31 4.99 2.56 6.56 4.94 13.2 7.68 19.68 1.16 2.74 3.04 5.18 4.58 7.72h-6.28c-1.45-3.84-2.91-7.68-4.37-11.55h-8.55c-1.32 3.62-3.92 6.99-2.35 11.59Zm3.12-14.15H291c-1.16-3.29-2.21-6.24-3.25-9.2-.26.03-.52.06-.78.1-.87 2.83-1.75 5.66-2.8 9.1Z"></path>
        <path d="M329.3 230.92v5.17c-1.2-1.53-1.96-2.48-2.91-3.69-1.11-.13-2.37-.46-3.62-.4-4.04.19-5.76 3.66-3.41 6.98.89 1.26 2.21 2.24 3.38 3.3.96.87 2.02 1.63 2.98 2.49 4.84 4.39 5.92 9.02 3.14 13.32-2.72 4.19-8.62 5.23-14.57 2.36v-4.93c2.11 1.43 3.98 3.25 6.22 4.07 2.07.75 4.71-.04 5.37-2.39.52-1.84.18-4.2-.55-6.01-.59-1.46-2.32-2.48-3.58-3.65-.63-.59-1.34-1.08-1.99-1.65-4.65-4.08-5.96-8.62-3.78-12.47 1.96-3.46 8.56-5.27 13.32-2.48Z"></path>
        <path d="M183.84 230.33v3.93c-3.32-.59-6.62-1.18-10.85-1.94 1.11 10.21-1.94 19.71 2.24 28.9h-7.42c2.6-9.13.64-18.46 1.34-28.67-4.1.5-7.57.93-11.29 1.38.23-.94.57-2.37.87-3.6h25.1Z"></path>
        <path d="M267.39 261.31h-7.98c1.29-10.29 1.54-20.43-.15-30.85h6.34c-.33 2.46-.92 4.96-.97 7.48-.14 6.75-.05 13.51-.05 20.36.87.93 1.7 1.82 2.81 3.02Z"></path>
        <path d="M111.67 261.35c2.94-5.41 2.66-27.13-.33-30.84h7.49c-.38 2.36-1.02 4.65-1.08 6.95-.16 5.59-.06 11.19-.05 16.78 0 2.68-.28 5.5 2.81 7.11h-8.84Z"></path>
        <path d="M302.39 239.15c1.51-2.03 2.63-3.52 4.02-5.38-1.78-.61-2.92-1.01-3.96-1.36-1.54-2.14-1.08-3.8 1.08-4.59 2.47-.9 4.16.51 5.01 2.75 1.32 3.49-1.14 7.19-6.15 8.59Z"></path>
      </g>
    </svg>
  );
};
