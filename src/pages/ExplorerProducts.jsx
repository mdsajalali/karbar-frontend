import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectTab from "../components/ExplorerProductTab.jsx";
import projectData from "../data/ExplorerProductsData.js";

const ExplorerProducts = () => {
  const women = projectData.filter((item) => item.category === "women");
  const man = projectData.filter((item) => item.category === "man");
  const kids = projectData.filter((item) => item.category === "kids");
  const sports = projectData.filter((item) => item.category === "sports");
  const beauty = projectData.filter((item) => item.category === "beauty");

  return (
    <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center font-semibold my-10 xl:text-5xl md:text-3xl text-2xl">
        Start exploring.
      </h1>

      <div>
        <Tabs>
          <TabList className="flex flex-wrap gap-2 justify-center">
            <Tab className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded-tl-md rounded-tr-md mr-2 transition duration-300 hover:bg-gray-300 focus:outline-none">
              Women
            </Tab>
            <Tab className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded-tl-md rounded-tr-md mr-2 transition duration-300 hover:bg-gray-300 focus:outline-none">
              Man
            </Tab>
            <Tab className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded-tl-md rounded-tr-md mr-2 transition duration-300 hover:bg-gray-300 focus:outline-none">
              Kids
            </Tab>
            <Tab className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded-tl-md rounded-tr-md mr-2 transition duration-300 hover:bg-gray-300 focus:outline-none">
              Sports
            </Tab>
            <Tab className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded-tl-md rounded-tr-md mr-2 transition duration-300 hover:bg-gray-300 focus:outline-none">
              Beauty
            </Tab>
          </TabList>
          <TabPanel>
            <ProjectTab projects={women} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={man} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={kids} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={sports} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={beauty} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ExplorerProducts;
