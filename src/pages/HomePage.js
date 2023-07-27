import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div className="holder">
      <Hero />
      {/* <Banner /> */}
      <CoursesList />
      <CategoriesList />
    </div>
  );
};

export default HomePage;
