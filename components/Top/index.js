import React from 'react';

const ToppersSection = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-red-200 text-blue-400">School Toppers</h2>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold">90.6%</div>
          <div className="text-lg md:text-xl">Overall School Average</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold">35</div>
          <div className="text-lg md:text-xl">Students in the Average Class</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold">48</div>
          <div className="text-lg md:text-xl">Years of Trust</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold">15</div>
          <div className="text-lg md:text-xl">Kishore Vaigyanik Protsahan Yojana</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-center">
          <img
            src="images/Sneha.png"
            alt="Sneha Singh"
            className="w-24 h-24 md:w-32 md:h-32 object-cover mb-2"
          />
          <div className="text-md md:text-lg font-bold">Sneha Singh</div>
          <div className="text-lg md:text-xl">95.20%</div>
        </div>
        <div className="text-center">
          <img
            src="images/Vaishali.png"
            alt="Vaishali Aggarwal"
            className="w-24 h-24 md:w-32 md:h-32 object-cover mb-2"
          />
          <div className="text-md md:text-lg font-bold">Vaishali Aggarwal</div>
          <div className="text-lg md:text-xl">93.20%</div>
        </div>
        <div className="text-center">
          <img
            src="images/Aditi.png"
            alt="Aditi"
            className="w-24 h-24 md:w-32 md:h-32 object-cover mb-2"
          />
          <div className="text-md md:text-lg font-bold">Aditi</div>
          <div className="text-lg md:text-xl">98%</div>
        </div>
        <div className="text-center">
          <img
            src="images/Khushi.png"
            alt="Khushi Yadav"
            className="w-24 h-24 md:w-32 md:h-32 object-cover mb-2"
          />
          <div className="text-md md:text-lg font-bold">Khushi Yadav</div>
          <div className="text-lg md:text-xl">96%</div>
        </div>
      </div>
    </div>
  );
};

export default ToppersSection;
