import React from "react";

const ProcessCard = () => {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4 md:px-0">
      <h2 className="text-center text-3xl md:text-5xl font-medium text-[#0a1f55] mb-6 md:mb-8">
        Process and the Solutions We Can Provide
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        <div className="w-full md:w-1/3 bg-white shadow-sm rounded-lg p-4 md:p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-[#169548] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
              1
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-center md:text-left">
            Shaping Visions into Smart Solutions
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            A team of skilled professionals visit the customer's site, and
            our company meticulously analyzes their unique requirements. Armed
            with the requirements analyzed, our talented team began the process
            of designing a product that perfectly aligns with their needs.
          </p>
        </div>
        <div className="w-full md:w-1/3 bg-white shadow-sm rounded-lg p-4 md:p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-[#169548] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
              2
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-center md:text-left">
            Delivering Custom Solutions, Beyond Expectations
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            After meticulous planning and innovative brainstorming, we eagerly
            submitted our custom solutions to the customer, confident in our
            ability to exceed their expectations and provide them with a
            remarkable and tailored solution.
          </p>
        </div>
        <div className="w-full md:w-1/3 bg-white shadow-sm rounded-lg p-4 md:p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-[#169548] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
              3
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-center md:text-left">
           Excellence in Every Phase, From Start to Success
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We promptly dispatched their order when the customer accepted our
            custom-made solution and proceeded with the purchase. A visit by
            our experienced engineers ensures smooth installation and successful
            implementation at the customer's location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
