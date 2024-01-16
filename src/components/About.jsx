import IdCard from "./IdCard";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <div 
      className="absolute items-center min-h-screen md:bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-200 md:-mb-28"
      id="about"
    >
      <div className="flex flex-col items-center justify-center md:items-center">
        <h1 className="font-serif text-3xl font-bold md:mt-20 text-amber-500">
          About Me
        </h1>
        <span className="mt-2 font-serif md:ml-2 md:mt-0">My Introduction</span>
      </div>
      <div className="flex flex-col items-center gap-5 p-5 md:flex-row md:justify-around md:mt-10">
        <IdCard />
        <AboutContent/>
      </div>
    </div>
  );
}
