import LMS from "/src/assets/Lms.png";
import FoodApp from "../assets/FoodApp.png";
import TodoApp from "../assets/Todo-app.png";
import CGPA from "../assets/CGPA.png";
import SmartTasker from "../assets/SmartTasker.png";
import Sports from "../assets/Sports.png"
export default function Projects() {
  return (
    <div
      className="items-center min-h-screen md:bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-200 md:-mb-28"
      id="project"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl font-bold md:mt-20 text-amber-500">
          Projects
        </h1>
        <h2 className="mt-2 font-serif md:ml-2 md:mt-0">
          Projects I have Done
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-1 mx-12 md:grid-cols-3">
        <div className="p-4 m-5 text-black border shadow-xl md:m-10 rounded-2xl shadow-slate-900">
          <a href="https://sport-centre.netlify.app/" target="_blank">
            <img src={Sports} alt="Sports  Image" className="rounded-2xl" />
          </a>
          <div>
            <h1 className="mt-2 font-serif font-semibold md:text-xl text-amber-700">
              Sports Center
            </h1>
            <p className="mt-3 mb-3 font-sans text-sm md:text-base text-zinc-900">
              Welcome to our React-based Sports Cente. This
              dynamic platform is designed to provide users with up-to-date
              sports news articles and live scores for various sports. Whether
              you're a sports enthusiast, a casual follower,
              this dashboard has you covered.
            </p>
            <a
              href="https://github.com/Gowtham-Neo/Sports-Center"
              target="_blank"
              className="px-4 py-2 mt-3 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-600 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Code
            </a>
            <a
              href="https://sport-centre.netlify.app/"
              target="_blank"
              className="px-4 py-2 mt-3 ml-4 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-600 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Live
            </a>
          </div>
        </div>
        <div className="p-4 m-5 text-black border shadow-xl md:m-10 rounded-2xl shadow-slate-900">
          <a
            href="https://learning-management-system-v39t.onrender.com"
            target="_blank"
          >
            <img src={LMS} alt="LMS Image" className="rounded-2xl" />
          </a>
          <div>
            <h1 className="mt-2 font-serif font-semibold md:text-xl text-amber-600">
              Learning Management System
            </h1>
            <p className="mt-3 mb-3 font-sans text-sm md:text-base text-zinc-900">
              This Learning Management System, developed in Node.js with a
              PostgreSQL database, empowers educators to create engaging courses
              while providing students a seamless and enriched learning
              experience. Unlock knowledge effortlessly.
            </p>
            <a
              href="https://github.com/Gowtham-Neo/Learning_Management_System"
              target="_blank"
              className="px-4 py-2 mt-3 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-600 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Code
            </a>
            <a
              href="https://learning-management-system-v39t.onrender.com"
              target="_blank"
              className="px-4 py-2 mt-3 ml-4 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-600 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Live
            </a>
          </div>
        </div>
        <div className="p-4 m-5 text-black border shadow-xl md:m-10 rounded-2xl shadow-slate-900">
          <a href="https://food-application-alpha.vercel.app/" target="_blank">
            <img src={FoodApp} alt="LMS Image" className="rounded-2xl" />
          </a>
          <div>
            <h1 className="mt-2 font-serif font-semibold md:text-xl text-amber-600">
              Food App
            </h1>
            <p className="mt-3 mb-3 font-sans text-sm md:text-base text-zinc-900">
              Indulge in culinary adventures with our React.js-based Food App.
              Utilizing Spoonacular API and Tailwind CSS, it provides
              step-by-step instructions for delightful recipes, ensuring a
              seamless and flavorful cooking experience
            </p>
            <a
              href="https://github.com/Gowtham-Neo/Food-Application"
              target="_blank"
              className="px-4 py-2 mt-3 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-500 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Code
            </a>
            <a
              href="https://food-application-alpha.vercel.app/"
              target="_blank"
              className="px-4 py-2 mt-3 ml-4 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-500 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Live
            </a>
          </div>
        </div>
        
        <div className="p-4 m-5 text-black border shadow-xl md:m-10 rounded-2xl shadow-slate-900">
          <a
            href="https://gowtham-neo.github.io/CGPA-Calculator/"
            target="_blank"
          >
            <img src={CGPA} alt="LMS Image" className="rounded-2xl" />
          </a>
          <div>
            <h1 className="mt-2 font-serif font-semibold md:text-xl text-amber-700">
              CGPA Calculator
            </h1>
            <p className="mt-3 mb-3 font-sans text-sm md:text-base text-zinc-900">
              Crafted with HTML, CSS, and JavaScript, our CGPA Calculator
              empowers you to effortlessly compute both SGPA and CGPA, ensuring
              accurate academic performance assessment with user-friendly
              precision
            </p>
            <a
              href="https://github.com/Gowtham-Neo/CGPA-Calculator"
              target="_blank"
              className="px-4 py-2 mt-3 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-600 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Code
            </a>
            <a
              href="https://gowtham-neo.github.io/CGPA-Calculator/"
              target="_blank"
              className="px-4 py-2 mt-3 ml-4 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-600 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Live
            </a>
          </div>
        </div>
        <div className="p-4 m-5 text-black border shadow-xl md:m-10 rounded-2xl shadow-slate-900">
          <a
            href="https://wd301-todo.netlify.app/account/projects"
            target="_blank"
          >
            <img src={SmartTasker} alt="LMS Image" className="rounded-2xl" />
          </a>
          <div>
            <h1 className="mt-2 font-serif font-semibold md:text-xl text-amber-600">
              Smart Tasker{" "}
              <span className="text-lg text-zinc-700">(ongoing)</span>
            </h1>
            <p className="mt-3 mb-3 font-sans text-sm md:text-base text-zinc-900">
              Smarter Task, a React and TypeScript-based project management
              tool, empowers seamless collaboration. Effortlessly manage
              projects, assign tasks, and coordinate with team members for
              efficient project execution."
            </p>
            <a
              href="https://github.com/Gowtham-Neo/wd301/tree/main/smarter-tasks"
              target="_blank"
              className="px-4 py-2 mt-3 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-500 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Code
            </a>
            <a
              href="https://wd301-todo.netlify.app/account/projects"
              target="_blank"
              className="px-4 py-2 mt-3 ml-4 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-500 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
