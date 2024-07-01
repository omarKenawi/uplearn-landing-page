import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import {
  teamImage1,
  teamImage2,
  teamImage3,
  teamImage4,
  teamImage5,
  teamImage6,
  teamImage7,
} from "../assets";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Mahmoud Atef",
      role: "Full Stack",
      image: teamImage3,
      github: "https://github.com/Mahmoudbakar2002",
      linkedin: "https://www.linkedin.com/in/mahmoud-atef-a399011b4/",
    },
    {
      name: "Mohamed Atef",
      role: "Full Stack",
      image: teamImage7,
      github: "https://github.com/MohamedAtefShata",
      linkedin: "https://www.linkedin.com/in/mohamed-atef-shata/",
    },
    {
      name: "Omar Kenawi",
      role: "Front End",
      image: teamImage1,
      github: "https://github.com/omarKenawi",
      linkedin: "https://www.linkedin.com/in/omar-kenawi",
    },
    {
      name: "Mohamed Walied",
      role: "Front End",
      image: teamImage5,
      github: "https://github.com/Muhammed-Walied",
      linkedin: "https://www.linkedin.com/in/muhammed-walied-281213277/",
    },
    {
      name: "Hazem Mohamed",
      role: "Front End",
      image: teamImage6,
      github: "https://github.com/hazemmuuhammed",
      linkedin: "https://www.linkedin.com/in/hazemmuuhammed/",
    },
    {
      name: "Abdallah Mohamed",
      role: "Back End",
      image: teamImage2,
      github: "https://github.com/Abdallah85",
      linkedin: "https://www.linkedin.com/in/abdallah-mmohamed/",
    },
    {
      name: "Ahmed Hany",
      role: "Back End",
      image: teamImage4,
      github: "https://github.com/HNOONa-0",
      linkedin: "https://www.linkedin.com/in/ahmed-hani-18b170193/",
    },
  ];

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
