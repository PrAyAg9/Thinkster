import DisclosureList from "./DisclosureList";

const DisclosurePage = () => {
  const sections = [
    {
      title: "Week 1 - Introduction",
      documents: [
        { name: "Document 1A" },
        { name: "Document 1B" },
      ],
    },
    {
      title: "Week 2 - Advanced Topics",
      documents: [
        { name: "Document 2A" },
        { name: "Document 2B" },
        { name: "Document 2C" },
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Disclosure Agreement</h1>
      <DisclosureList sections={sections} />
    </div>
  );
};

export default DisclosurePage;
