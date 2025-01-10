import React from "react";

const Team:React.FC =()=>{
return(
<section className="py-12 px-4 sm:px-8 lg:px-16">
  <div className="text-center mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-16">
      Meet the heroes behind the magic
    </h2>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 max-w-7xl mx-auto">
    
    <div className="p-6 text-center shadow-lg bg-white ">
      <img
        src="images/Avatar1.jpg"
        alt="Esther Howard"
        className="w-full h-80 object-cover "
      />
      <div className="text-left mt-6">
        <h3 className="text-xl sm:text-2xl font-bold">Esther Howard</h3>
        <p className="text-gray-500">Founder</p>
      </div>
    </div>
    
    <div className="p-6 text-center shadow-lg bg-white ">
      <img
        src="images/Avatar2.jpg"
        alt="Cody Fisher"
        className="w-full h-80 object-cover "
      />
      <div className="text-left mt-6">
        <h3 className="text-xl sm:text-2xl font-bold">Cody Fisher</h3>
        <p className="text-gray-500">Developer</p>
      </div>
    </div>
    
    <div className="p-6 text-center shadow-lg bg-white ">
      <img
        src="images/Avatar3.jpg"
        alt="Brooklyn Simmons"
        className="w-full h-80 object-cover"
      />
      <div className="text-left mt-6">
        <h3 className="text-xl sm:text-2xl font-bold">Brooklyn Simmons</h3>
        <p className="text-gray-500">Designer</p>
      </div>
    </div>
  </div>
</section>


);
};
export default Team;