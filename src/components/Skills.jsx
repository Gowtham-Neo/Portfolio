export default function Skills() {
  return (
    <div
      className="items-center min-h-screen md:bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-200 md:-mb-28"
      id="skills"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl font-bold md:mt-20 text-amber-500">
          Skills
        </h1>
        <h2 className="mt-2 font-serif md:ml-2 md:mt-0">What Skills I Have</h2>
      </div>
      <div className="flex flex-col justify-center gap-8 m-10 md:flex-row">
        <div className="flex flex-col items-start justify-start p-10 border-2 border-black rounded-xl">
          <h2 className="mb-6 font-serif text-2xl font-bold text-amber-600">
            Frontend Development
          </h2>
          <div className="flex flex-col items-start font-serif text-xl font-semibold md:gap-24 md:flex-row mb-7 justify-evenly">
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 384 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
              </svg>
              <span>HTML</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="currentColor"
                  d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                />
              </svg>
              <h1>CSS</h1>
            </div>
          </div>
          <div className="flex flex-col items-start font-serif text-xl font-semibold md:gap-16 md:flex-row mb-7 justify-evenly">
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
              </svg>
              <span>JavaScript</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z" />
              </svg>
              <h1>TypeScript</h1>
            </div>
          </div>
          <div className="flex flex-col items-start font-serif text-xl font-semibold md:gap-24 md:flex-row mb-7 justify-evenly">
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
              </svg>
              <span>React</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
              </svg>
              <h1>Tailwind</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start p-10 border-2 border-black rounded-xl ">
          <h2 className="mb-6 font-serif text-2xl font-bold text-amber-600">
            Backend Development
          </h2>
          <div className="flex flex-col items-start font-serif text-xl font-semibold md:gap-24 md:flex-row mb-7 justify-evenly">
            <div className="flex flex-row items-center justify-center">
              <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14 4.213L7.5.42 1 4.213v6.574l1.006.587 2.057-.832A1.5 1.5 0 005 9.152V4h1v5.152a2.5 2.5 0 01-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792V4.213zM7 6a2 2 0 012-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0010.167 5H9a1 1 0 000 2h1a2 2 0 110 4H9a2 2 0 01-2-2h1a1 1 0 001 1h1a1 1 0 100-2H9a2 2 0 01-2-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>N0de JS</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 00.26-3.74.86.86 0 00-.66-.74 3.12 3.12 0 00-2.08.61v.18a11.34 11.34 0 01-.06 2.41 2.37 2.37 0 00.62 2 2 2 0 001.43.63 8.05 8.05 0 01.3-.81zM10 8.58a.36.36 0 01-.09-.23.19.19 0 01.09-.12.74.74 0 01.48-.07c.25 0 .5.16.48.34a.51.51 0 01-.49.33h-.06a.63.63 0 01-.41-.25z" />
                <path d="M7.88 11a12.58 12.58 0 00.06-2.3v-.28a7 7 0 011.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 001 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 017.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 00-.29.35c-.35.43-.5.58-1.51.79a2 2 0 00-.4.11 1 1 0 00.37.16 2.21 2.21 0 002.5-.8.41.41 0 000-.35.59.59 0 00-.25-.37zm6.29-5.82a5.29 5.29 0 00.08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 01.26.48 1.79 1.79 0 00.15.31 3.72 3.72 0 00.16-2.13 7.51 7.51 0 01-.07-1.05 6 6 0 01.14-.93zm-.56-.16a.6.6 0 01-.32.17h-.06a.47.47 0 01-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 01-.12.26z" />
                <path d="M17 4.88a6.06 6.06 0 011.37 2.57.71.71 0 010 .15 5.67 5.67 0 01-.09 1.06 7.11 7.11 0 00-.09.86 6.61 6.61 0 00.07 1 4 4 0 01-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 00-3.81-1.8 7.34 7.34 0 00-1.63.16A6.17 6.17 0 0117 4.88z" />
                <path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 01-1 .13 19.74 19.74 0 002.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0016.37 2a8.44 8.44 0 00-2.46.35 9.38 9.38 0 00-1.45-.14 4.8 4.8 0 00-2.46.62 12.22 12.22 0 00-1.77-.44A5.44 5.44 0 004 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 001 4.67A15.76 15.76 0 004.4 15a3.39 3.39 0 001.75 1.83 1.71 1.71 0 001.69-.37 2 2 0 001 .59 3.65 3.65 0 002.35-.14v.81a8.46 8.46 0 00.31 2.36 1 1 0 010 .13 3 3 0 00.71 1.24 2.08 2.08 0 001.49.56 3 3 0 00.7-.08 3.27 3.27 0 002.21-1.27 7.34 7.34 0 00.91-4v-.26h.17a5.24 5.24 0 002.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 01-1.8.34 2.62 2.62 0 01-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 01-2.25 2.3 3.23 3.23 0 01-.66.07A2 2 0 0112 20a16.77 16.77 0 01-.28-4.06 2.56 2.56 0 01-1.78.66 3.94 3.94 0 01-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 01.19-.24 2.56 2.56 0 01-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 01-1.11.63 1.23 1.23 0 01-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 01-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 012.41-.66 5.58 5.58 0 011.4.18 7.51 7.51 0 012.5-.4 5.35 5.35 0 014.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 01-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z" />
                <path d="M17.43 13.59a4 4 0 01-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 012.12-.61 6.28 6.28 0 00-1.13-1.94 5.41 5.41 0 00-4.13-2 3.34 3.34 0 00-2.55.95A5.82 5.82 0 008.51 7.8l.15-.08A3.7 3.7 0 0110 7.3a1.45 1.45 0 011.76 1.19 5.73 5.73 0 01-.29 4.09 3.29 3.29 0 00-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 01.57.07 1.16 1.16 0 01.62.74v.16a.28.28 0 010 .09 22.22 22.22 0 00.22 4.9 1.5 1.5 0 002 1.09A1.92 1.92 0 0016.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z" />
                <path d="M18 14.33l-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 00.93.12 4.29 4.29 0 001.38-.29 3 3 0 00.79-.52 3.47 3.47 0 01-2.43-.05z" />
              </svg>

              <h1>Postgresql</h1>
            </div>
          </div>
          <div className="flex flex-col items-start font-serif text-xl font-semibold md:gap-20 md:flex-row mb-7 justify-evenly">
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
              </svg>
              <span>JavaScript</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
              </svg>
              <h1>Git & Github</h1>
            </div>
          </div>
          <div className="flex flex-col items-start font-serif text-xl font-semibold md:gap-24 md:flex-row mb-7 justify-evenly">
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="currentColor"
                  d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756V7.96c0-1.47-1.24-2.574-2.712-2.819-.932-.155-1.898-.226-2.825-.221s-1.813.083-2.592.221c-2.295.405-2.712 1.254-2.712 2.819v2.067h5.423v.689H8.527c-1.576 0-2.956.947-3.388 2.75-.498 2.066-.52 3.355 0 5.512.385 1.606 1.306 2.75 2.882 2.75h1.865V19.25c0-1.79 1.549-3.369 3.388-3.369zm-.342-7.231a1.024 1.024 0 01-1.018-1.03c0-.572.455-1.037 1.018-1.037.56 0 1.018.465 1.018 1.037 0 .57-.457 1.03-1.018 1.03zm13.893 4.816c-.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717.505 3.363.596 5.417 0 1.365-.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-.689h8.129c1.576 0 2.163-1.099 2.712-2.75.566-1.699.542-3.332 0-5.512zm-7.793 10.329c.562 0 1.018.461 1.018 1.03 0 .572-.456 1.037-1.018 1.037a1.03 1.03 0 01-1.018-1.037c0-.57.457-1.03 1.018-1.03z"
                />
              </svg>
              <span>Python</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 00-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 11.847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 01-.067-.032.06.06 0 01.01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 01-.085-.039.072.072 0 01.013-.093zm-3.646 6.058a.076.076 0 01-.069-.083.077.077 0 01.022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 00-.117.256l.203.865a.125.125 0 01-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 00.119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 012.459-2.684l-1.61 1.613a.119.119 0 000 .169l1.247 1.247a1.817 1.817 0 01-2.093-.343zm2.578 0a1.714 1.714 0 01-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zm-.1-1.544a.143.143 0 00-.053.157.416.416 0 01-.053.45.14.14 0 00.023.197.141.141 0 00.084.03.14.14 0 00.106-.05.691.691 0 00.087-.751.138.138 0 00-.194-.033z" />
              </svg>
              <span>Postman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}