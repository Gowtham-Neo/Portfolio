export default function AboutContent() {
  return (
    <div className="flex flex-col items-start md:w-7/12 md:justify-center md:ml-32">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center px-4 py-2 border-2 border-black rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>

          <h1 className="mt-3 font-serif text-lg font-semibold text-amber-500">
            Experience
          </h1>
          <h2>6 months</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border-2 border-black rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12.16v1.69A11.37 11.37 0 0 1 12 23.63"></path>
            <path d="M3.51 9a11 11 0 0 1 2.13-2.13"></path>
            <path d="M11 21.35l-1.42-1.36"></path>
            <path d="M12 1l-8.6 8.6a2 2 0 0 0 0 2.83l12.35 12.35a2 2 0 0 0 2.83 0L23 13"></path>
          </svg>

          <h1 className="mt-3 font-serif text-lg font-semibold text-amber-500">
            Project
          </h1>
          <h2>10+ Projects</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border-2 border-black rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
          </svg>
          <h1 className="mt-3 font-serif text-lg font-semibold text-amber-500">
            Support
          </h1>
          <h2>Online 24/7</h2>
        </div>
      </div>
      <h1 className="flex justify-center w-full mt-3 font-sans text-sm md:text-base md:w-5/6 text-zinc-700">
        I am a passionate and adept full-stack developer, well-versed in the
        latest technologies. With expertise in both front-end and back-end
        development, I excel in transforming creative ideas into functional and
        user-friendly applications. Committed to staying updated with current
        trends, I bring innovative solutions to the table. Collaborative and
        detail-oriented, I thrive on overcoming challenges to contribute
        effectively to diverse projects. My dedication to continuous learning
        ensures the delivery of high-quality code, creating impactful digital
        experiences.
      </h1>
    </div>
  );
}
