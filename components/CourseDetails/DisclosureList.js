"use client"; // Ensures this runs only on the client side

import { useState } from "react";

const DisclosureList = ({ sections }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {sections.map((section, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full text-left p-3 font-semibold bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </button>

          {openSection === index && (
            <div className="p-4 bg-white shadow-md">
              {section.documents.map((doc, docIndex) => (
                <div key={docIndex} className="border p-3 my-2 rounded">
                  <p className="font-medium">{doc.name}</p>
                  <div className="flex gap-3 mt-2">
                    <button className="text-blue-500 hover:underline">
                      View Document
                    </button>
                    <button className="text-green-500 hover:underline">
                      About Document
                    </button>
                    <button className="text-red-500 hover:underline">
                      Another Option
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisclosureList;
