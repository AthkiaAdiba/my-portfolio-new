const Services = () => {
  return (
    <div className="text-white bg-[#22252c] pt-17 md:pt-20 pb-28 px-2 lg:px-[9%] xl:px-[13%] mx-auto">
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
              <p className="text-white mb-[14%]">
                Building dynamic and responsive web applications using React.js
                and Next.js for the frontend, and Node.js with Express.js for
                the backend. Implementing RESTful APIs and integrating MongoDB,
                Mongoose, PostgreSQL, and Prisma to ensure smooth, efficient,
                and scalable communication between the frontend and backend.
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
                Crafting visually appealing and user-friendly interfaces using
                HTML, CSS, JavaScript, and TypeScript. Leveraging React.js and
                Tailwind CSS for efficient, responsive, and modern UI
                development, while incorporating Next.js for enhanced
                performance and scalability.
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
              <p className="text-white md:mb-[5%] lg:mb-[69%] xl:mb-[42%]">
                Ensuring websites are fully responsive and mobile-friendly
                across a wide range of devices and screen sizes by utilizing
                modern frontend technologies like React.js, Next.js, Tailwind
                CSS, and TypeScript for optimized layout and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Title of skills section */}
      <h4
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="pt-40 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde] text-center aos-init"
      >
        PROFESSIONAL SKILLS
      </h4>
    </div>
  );
};

export default Services;
