import { useEffect, useState } from 'react';
import ProjectCard from './projectCard.js';
import axios from 'axios';


const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/list-projects')
      .then(res =>   { console.log("Fetched projects:", res.data);setProjects(res.data)})
   
      .catch(err => console.error("Failed to fetch projects", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project._id} project={project} />
      ))}
 
    </div>
  );
};

export default ProjectList;
