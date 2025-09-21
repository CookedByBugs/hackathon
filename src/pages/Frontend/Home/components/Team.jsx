import React from "react";
import Person1 from "../../../../assets/Person1.jpg"; // replace with real images
import Person2 from "../../../../assets/Person2.jpg";
import Person3 from "../../../../assets/Person3.jpg";

const Team = () => {
  const members = [
    {
      name: "Ayesha Khan",
      role: "Founder & Director",
      img: Person1,
    },
    {
      name: "Omar Farooq",
      role: "Operations Manager",
      img: Person2,
    },
    {
      name: "Fatima Ali",
      role: "Community Coordinator",
      img: Person3,
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold text-bar mb-4">Meet Our Team</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        The passionate people behind{" "}
        <span className="font-semibold text-bar">Donors Hub</span>, working
        tirelessly to bring hope and change to communities in need.
      </p>

      {/* Team Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-bar"
            />
            <h3 className="text-xl font-bold text-bar">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
