import React from "react";
import Slider from "react-slick";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Element } from "react-scroll";
import { teamImage1 } from "../assets";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Mahmoud Atef",
      role: "Full Stack",
      image: "https://via.placeholder.com/150",
      email: "mahmoud@example.com",
    },
    {
      name: "Mohamed Atef",
      role: "Full Stack",
      image: "https://via.placeholder.com/150",
      email: "mohamed@example.com",
    },
    {
      name: "Omar Kenawi",
      role: "Front End",
      image: teamImage1,
      email: "omar.sseeddeekk@gmail.com",
      Linkedin: "https://www.linkedin.com/in/omar-kenawi",
    },
    {
      name: "Mohamed Walied",
      role: "Front End",
      image: "https://via.placeholder.com/150",
      email: "walied@example.com",
    },
    {
      name: "Hazem Mohamed",
      role: "Front End",
      image: "https://via.placeholder.com/150",
      email: "hazem@example.com",
    },
    {
      name: "Abdallah Mohamed",
      role: "Back End",
      image: "https://via.placeholder.com/150",
      email: "abdallah@example.com",
    },
    {
      name: "Ahmed Hany",
      role: "Back End",
      image: "https://via.placeholder.com/150",
      email: "ahmed@example.com",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const TeamMemberCard = ({ member }) => (
    <div className="col-lg-4 mt-4 mb-4">
      <div className="member bg-white rounded-lg shadow-lg p-6 text-center max-w-xs">
        <img
          src={member.image}
          alt={member.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-[#4CC3ED] text-xl font-semibold">{member.name}</h2>
        <p className="text-gray-600 text-sm">{member.role}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={`mailto:${member.email}`}
            className="text-[#4CC3ED] hover:text-blue-600"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href={member.Linkedin}r
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

        <div className="mt-8 m">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className={`px-2 ${"ml-12"}`}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Element>
  );
};

export default MeetOurTeam;
