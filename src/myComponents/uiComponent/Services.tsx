const Services = () => {
  return (
    <div className="text-white bg-[#22252c] pt-36 pb-28 px-2 lg:px-[13%] mx-auto">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 lg:grid-cols-3 relative aos-init"
      >
        {/* first card */}
        <div>
          <div className="bg-[#313741] text-primary-content p-8">
            <div className="card-body">
              <h1 className="text-black text-4xl font-bold">02.</h1>
              <h2 className="card-title text-2xl font-bold text-[#00d7bb] py-2">
                Full-Stack Web Development
              </h2>
              <p className="text-white mb-16">
                Building dynamic and responsive web applications using React.js
                for the frontend and Express.js for the backend.Implementing
                RESTful APIs to ensure smooth and efficient communication
                between the frontend and backend.
              </p>
            </div>
          </div>
        </div>
        {/* second card */}
        <div>
          <div className="bg-[#05c7ae] text-primary-content lg:absolute lg:w-[34%] -bottom-4 -top-5 p-8">
            <div className="card-body">
              <h1 className="text-[#07463e] text-4xl font-bold">01.</h1>
              <h2 className="card-title text-2xl font-bold text-[#1f2229] py-2">
                Front-End Development
              </h2>
              <p className="text-white mb-36">
                Crafting visually appealing and user-friendly interfaces with
                HTML, CSS3, and JavaScript.Leveraging Tailwind CSS for rapid and
                responsive UI development.
              </p>
            </div>
          </div>
        </div>
        {/* third card */}
        <div>
          <div className="bg-[#313741] text-primary-content p-8">
            <div className="card-body">
              <h1 className="text-black text-4xl font-bold">03.</h1>
              <h2 className="card-title text-2xl font-bold text-[#00d7bb] py-2">
                Responsive Design
              </h2>
              <p className="text-white mb-44">
                Ensuring websites are mobile-friendly and responsive across
                various devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Title of skills section */}
      <h4
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="pt-48 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde] text-center aos-init"
      >
        PROFESSIONAL SKILLS
      </h4>
    </div>
  );
};

export default Services;
