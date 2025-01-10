import React from 'react';

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16">
  <div className="text-center max-w-7xl mb-16 sm:mb-20 lg:mb-28 mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 lg:mb-12 text-left">
      Who we are
    </h2>
    <p className="text-black text-base sm:text-lg lg:text-xl text-left leading-relaxed sm:leading-8">
      We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success. We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
    </p>
  </div>
  <div className="max-w-7xl mx-auto">
    <img
      src="/images/Mid Image.jpg"
      alt="About us"
      className="w-full h-auto object-cover shadow-lg"
    />
  </div>
</section>
  );
};

export default About;
