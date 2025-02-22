import React from "react";

const QuickLinks = () => {
  const links = [
    { name: "Library", url: "#" },
    { name: "Exam Portal", url: "#" },
    { name: "Student Dashboard", url: "#" },
  ];

  return (
    <div className="w-1/3 p-4 border-l">
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-blue-500 hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
