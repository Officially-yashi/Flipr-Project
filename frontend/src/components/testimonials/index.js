import Final from "../footer/Final.js";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Aditi Sharma",
      feedback: "This platform is amazing. Helped me grow so fast!",
    },
   
    {
      name: "Vihan Parashar",
      feedback: "Everything works so smoothly. Great job by the team!",
    },
    {
      name: "Riyaz Ali",
      feedback: "Helped me achieve my goals faster than I expected. Highly useful!",
    },
    {
      name: "Soniya Sharma",
      feedback: "Clean design, easy navigation, and excellent features.",
    },
    {
      name: "Vivek Sanghvi",
      feedback:"Incredible features and fantastic customer service.",
    },
    {
      name: "Priti Zinta",
      feedback: "The tools here really boosted my productivity.",
    },
  ];

  return (
    <div>
    <div className="p-10 bg-gray-50 min-h-screen text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="italic text-gray-700">“{item.feedback}”</p>
            <p className="mt-4 font-semibold text-blue-800">— {item.name}</p>
          </div>
        ))}
      </div>
      
    </div>
    <Final />
    </div>
  );
  
};

export default Testimonials;
