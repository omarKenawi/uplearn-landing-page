import React from "react";
import { featureImage } from "../assets";
import { FaHeadset } from "react-icons/fa";


import {
  FaTachometerAlt,
  FaClipboardList,
  FaBullhorn,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { Element } from "react-scroll"; 

const Features = () => {
  return (
    <Element name="features" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid grid-cols-1 md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col justify-center">
          <h1 className="md:leading-[72px] text-3xl font-bold">
            Key <span className="text-[#4CC3ED]">Features</span>
          </h1>
          <p className="text-lg text-gray-600">
            Discover the powerful tools and functionalities that make our LMS
            stand out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
            <FeatureCard
              icon={<FaTachometerAlt size={30} style={{ color: "#1A906B" }} />}
              title="Dashboard"
              description="Overview of all activities"
            />
            <FeatureCard
              icon={<FiBookOpen size={30} style={{ color: "#FFC27A" }} />}
              title="Course Registration"
              description="Enroll in courses"
            />
            <FeatureCard
              icon={<FaClipboardList size={30} style={{ color: "#ED4459" }} />}
              title="Show Results"
              description="View academic performance"
            />
            <FeatureCard
              icon={<FaBullhorn size={30} style={{ color: "#0075FD" }} />}
              title="Announcements"
              description="Stay updated with news"
            />
            <FeatureCard
              icon={<FaHeadset size={30} style={{ color: "#F7B32B" }} />}
              title="Jenny"
              description="get instant support from your uplearn personal assistant"
            />
            <FeatureCard
              icon={<FaCalendarAlt size={30} style={{ color: "#1A906B" }} />}
              title="Schedules"
              description="Organize your learning"
            />
          </div>
        </div>

        <img src={featureImage} className="m-auto md:order-last order-first" />
      </div>
    </Element>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="py-6 flex">
    <div className="p-4 bg-[#E9F8F3] rounded-xl">{icon}</div>
    <div className="px-3">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-[#6D737A]">{description}</p>
    </div>
  </div>
);

export default Features;
