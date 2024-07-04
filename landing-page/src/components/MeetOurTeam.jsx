import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import { teamMembers } from "../data/teem";

const MeetOurTeam = () => {
  const TeamMemberCard = ({ member }) => (
    <div className="w-full sm:w-full lg:w-full p-4">
      <div className="member bg-white rounded-lg shadow-lg p-6 text-center max-w-sm mx-auto">
        <img
          src={member.image}
          alt={member.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-[#4CC3ED] text-xl font-semibold">{member.name}</h2>
        <p className="text-gray-600 text-sm">{member.role}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={member.github}
            className="text-[#4CC3ED] hover:text-blue-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={member.linkedin}
            className="text-[#4CC3ED] hover:text-blue-600"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Element name="team" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Meet Our <span className="text-[#4CC3ED]">Team</span>
          </h1>
          <p className="text-gray-700">
            Learn about the dedicated individuals who make our team great.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MeetOurTeam;
