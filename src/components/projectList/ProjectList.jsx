import React from "react";
import "./projectList.css";
import Project1 from "../projects/Project1";
import {projects} from '../../data'

const Projects = () => {
  return (
    <div className="p-l">
      <div className="p-texts">
        <h1 className="p-title"> Projects</h1>
        <p className="p-desc">Description of Project</p>
      </div>
      <div className="p-list">
        {projects.map(item=>(
          <Project1 key={item.id} img={item.img} link={item.link} />
        ))}
      
      </div>
    </div>
  );
};

export default Projects;
