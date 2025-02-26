const Form = () => {
  return (
    <div className="text-white bg-[#22252c]">
      <h4
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mb-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1fb385] to-[#24dfde] text-center aos-init"
      >
        CONTACT ME
      </h4>
      <section className="py-6 px-2 lg:px-[13%] pb-20 lg:pb-36">
        <form
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 aos-init"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-col md:flex-row lg:flex-row gap-10">
            <label className="block flex-1">
              <span className="mb-1">Name</span>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="block w-full rounded-md border-2 border-gray-500 py-2 pl-2 shadow-sm focus:ring focus:ring-[#02cfb4] bg-gray-500"
                required
              />
            </label>
            <label className="block flex-1">
              <span className="mb-1">Email</span>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="block w-full rounded-md border-2 border-gray-500 py-2 pl-2 shadow-sm focus:ring focus:ring-[#02cfb4] bg-gray-500"
                required
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1">Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="block w-full rounded-md border-2 border-gray-500 py-2 pl-2 shadow-sm focus:ring focus:ring-[#02cfb4] bg-gray-500"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows={10}
              name="message"
              className="block w-full rounded-md focus:ring focus:ring-[#02cfb4] bg-gray-500"
            ></textarea>
          </label>
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg bg-[#22252c] border border-[#02cfb4] hover:text-[#22252c] hover:bg-[#02cfb4]"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
