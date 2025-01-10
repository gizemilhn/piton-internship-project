import React from "react";

const Stats: React.FC=() => {
 return(
    <section className="bg-black py-12 mt-24">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
          <div className="text-yellow-500">
            <p className="text-6xl font-bold mb-2">350 +</p>
            <p className="text-white text-xl">Clients Worldwide</p>
          </div>
          <div className="text-yellow-500">
            <p className="text-6xl font-bold mb-2">20 +</p>
            <p className="text-white text-xl">Team Members</p>
          </div>
          <div className="text-yellow-500">
            <p className="text-6xl font-bold mb-2">100 +</p>
            <p className="text-white text-xl">Projects Completed</p>
          </div>
          <div className="text-yellow-500">
            <p className="text-6xl font-bold mb-2">85M +</p>
            <p className="text-white text-xl">Revenue Generated</p>
          </div>
        </div>
      </div>
    </section>
 );
};
export default Stats;