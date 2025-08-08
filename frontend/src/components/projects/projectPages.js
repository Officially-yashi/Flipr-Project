import ProjectList from './projectList.js';
import Final from '../footer/Final.js';

const ProjectPages = () => {
  return (
    <div>
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Our Projects</h2>
      <ProjectList />
     
    </div>
    <Final />
</div>
  );
};

export default ProjectPages;
