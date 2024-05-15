const ProjectTab = ({ projects }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((item) => (
          <div key={item.id} className="rounded-md   border ">
            <img
              className="h-[200px]  w-full  rounded-t-md"
              src={item.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectTab;
