import React from "react";
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";


const HomePage = () => {
  return (
    <div className="text-violet-200 flex mx-auto flex-col items-center min-h-screen px-2">
      <h1 className="text-violet-400 text-5xl font-bold mb-20">
        vaBank<span className="text-red-500">.</span>
        <span className="">GPT</span>
      </h1>

      <div className="flex space-x-4">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8 text-yellow-300" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">"Why dogs are so intelligent?"</p>
            <p className="infoText">"Whatis the color of the sun?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Capabilities */}
            <BoltIcon className="h-8 w-8 text-yellow-300" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">"Why dogs are so intelligent?"</p>
            <p className="infoText">"Whatis the color of the sun?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* ExclamationTriangleIcon */}
            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-300" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">"Why dogs are so intelligent?"</p>
            <p className="infoText">"Whatis the color of the sun?"</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
