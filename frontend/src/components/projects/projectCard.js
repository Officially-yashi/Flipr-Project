const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={project.imgPath} alt={project.name} className="w-full h-auto" />

      <div className="p-4">
         <h3 className="text-xl font-bold">{project.name}</h3>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
