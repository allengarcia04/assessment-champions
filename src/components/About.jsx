import React from 'react';

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center mt-6 lg:mt-20"> {/* Added id attribute */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
          About Us
        </span>
        
        <p className="mt-10 text-lg text-center text-white-200 max-w-4xl">
          Balancing work, studies, and personal life as an international student can be incredibly demanding. We understand the unique challenges you face, from managing work schedules to meeting assignment deadlines, all while navigating a new environment. That's where we come in. At Assessment Champions, our mission is to ease your burden by taking care of your academic assessments.
        </p>
        <br />
        <p className="mt-10 text-lg text-center text-white-200 max-w-4xl">
          Our expert team specializes in crafting high-quality, custom-written papers tailored to your specific requirements. By entrusting us with your assignments, you can dedicate more time to what truly matters—whether it's advancing your career, spending time with loved ones, or simply taking a well-deserved break.
        </p>
        <br />
        <p className="mt-10 text-lg text-center text-white-200 max-w-4xl">
          Let us help you achieve academic success without compromising on the other important aspects of your life.
        </p>
      </div>
    </div>
  );
}

export default About;
