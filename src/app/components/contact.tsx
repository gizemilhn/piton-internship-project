import React from 'react';

const ContactForm: React.FC = () => {
  return (
<section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 pb-8 md:pb-16">
  
  <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
    <img
      src="images/Side Image.jpg"
      alt="Team Illustration"
      className="w-4/5 sm:w-3/5 h-auto shadow-sm"
    />
  </div>


  <div className="w-full md:w-1/2 md:ml-12 lg:ml-16 max-w-2xl mx-auto mt-8 md:mt-0">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center md:text-right">
      We'd love to hear <br /> from you
    </h2>
    <form className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-base sm:text-lg font-medium">
          Name*
        </label>
        <input
          type="text"
          id="name"
          className="border border-black w-full p-3 "
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-base sm:text-lg font-medium">
          Email*
        </label>
        <input
          type="email"
          id="email"
          className="border border-black w-full p-3 "
          placeholder="Your Email"
        />
      </div>
      <div>
        <label htmlFor="website" className="block text-base sm:text-lg font-medium">
          Website URL*
        </label>
        <input
          type="url"
          id="website"
          className="border border-black w-full p-3 "
          placeholder="https://yourwebsite.com"
        />
      </div>
      <div>
        <label htmlFor="details" className="block text-base sm:text-lg font-medium">
          Project Details*
        </label>
        <textarea
          id="details"
          className="border border-black w-full p-3 "
          placeholder="Tell us about your project..."
          rows={4}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-black text-white w-full p-3 hover:bg-gray-800 transition"
      >
        Send Proposal
      </button>
    </form>
  </div>
</section>

  );
};
export default ContactForm;
