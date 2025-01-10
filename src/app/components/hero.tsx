import React from "react";

const Hero: React.FC = () =>{
    return(
        <section className="bg-hero-color flex flex-col items-center justify-center text-center pt-36 px-4 sm:px-2 lg:px-16">
        <img
        src="/images/heroback.png"
        alt="Background Image"
        className="absolute top-0 z-0 justify-center h-4/5"
        width={1200}
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 z-10">
            Let's create something <br></br> great together.
        </h1>
        <div className="flex flex-wrap justify-center gap-4 pb-0 z-10">
        <img
          src="/images/hand1.png"
          alt="Hand Image 1"
          width={200}
          height={330}
        />
        <img
          src="/images/hand2.png"
          alt="Hand Image 2"
          width={200}
          height={330}
        />
        <img
          src="/images/hand3.png"
          alt="Hand Image 3"
          width={200}
          height={330}
         
        />
        <img
          src="/images/hand4.png"
          alt="Hand Image 4"
          width={200}
          height={330}
          
        />
        <img
          src="/images/hand5.png"
          alt="Hand Image 5"
          width={200}
          height={330}
          
        />
        <img
          src="/images/hand6.png"
          alt="Hand Image 6"
          width={200}
          height={330}
          
        />
      </div>
    </section>
    );
};
export default Hero;

