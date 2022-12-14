import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import UpcommingExperiencesCard from "./Components/UpcomingExperiences";
import Stats from "./Components/Stats";
import UpcommingCoursesCard from "./Components/UpcomingCourseCard";
import mentor from "./Components/Mentor";
import Mentor from "./Components/Mentor";

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex fc">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <p className="mx-5 mt-5">
              <b>Welcome back Harshita</b> <br /> What it's going to be today?
            </p>
            <UpcommingExperiencesCard />
            <UpcommingCoursesCard />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <Stats />
            <Mentor />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
