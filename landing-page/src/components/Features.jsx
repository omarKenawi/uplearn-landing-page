import React from "react";
import { featureImage } from "../assets";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaBullhorn,
  FaRobot,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { Element } from "react-scroll"; // Import Element from react-scroll

const Features = () => {
  return (
    <Element name="features" className="w-full bg-white py-24">
      {" "}
      {/* Add Element with name="features" */}
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col justify-center">
          <h1 className="md:leading-[72px] text-3xl font-bold">
            Key <span className="text-[#4CC3ED]">Features</span>
          </h1>
          <p className="text-lg text-gray-600">
            Discover the powerful tools and functionalities that make our LMS
            stand out.
          </p>

          <div className="grid grid-cols-2 py-16">
            <div className="py-6 flex">
              <div className="p-4 bg-[#E9F8F3] rounded-xl">
                <FaTachometerAlt size={30} style={{ color: "#1A906B" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-[#6D737A]">Overview of all activities</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFFAF5] rounded-xl">
                <FiBookOpen size={30} style={{ color: "#FFC27A" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">Course Registration</h1>
                <p className="text-[#6D737A]">Enroll in courses</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFEEF0] rounded-xl">
                <FaClipboardList size={30} style={{ color: "#ED4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">Show Results</h1>
                <p className="text-[#6D737A]">View academic performance</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#F0F7FF] rounded-xl">
                <FaBullhorn size={30} style={{ color: "#0075FD" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">Announcements</h1>
                <p className="text-[#6D737A]">Stay updated with news</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFF8E5] rounded-xl">
                <FaRobot size={30} style={{ color: "#F7B32B" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">Chat Bot</h1>
                <p className="text-[#6D737A]">Get instant support</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#E9F8F3] rounded-xl">
                <FaCalendarAlt size={30} style={{ color: "#1A906B" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">Schedules</h1>
                <p className="text-[#6D737A]">Organize your learning</p>
              </div>
            </div>
          </div>
        </div>

        <img src={featureImage} className="m-auto md:order-last order-first" />
      </div>
    </Element>
  );
};

export default Features;
