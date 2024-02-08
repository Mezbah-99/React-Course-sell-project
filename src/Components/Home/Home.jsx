import Hero from "./Hero";
import Courses from "./Courses";
import { useContext } from "react";
import { CourseContext } from "../../Contexts/CoursesContext";

const Home = () => {
  const {coursesData} = useContext(CourseContext)
  return (
    <div>
      <Hero />
      <Courses data={coursesData} />
    </div>
  );
};

export default Home;
