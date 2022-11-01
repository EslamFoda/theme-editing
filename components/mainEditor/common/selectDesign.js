const SelectDesign = ({ designs, comps, nextIndex,setComps }) => {
  return (
    <div className="bg-[#26313f] px-5">
      <div className="h-40 flex items-center  overflow-auto gap-8  w-full">
        {designs.map((Design, i) => (
          <div
            className={`h-32 relative rounded-md overflow-hidden  cursor-pointer min-w-[288px] ${
              comps[nextIndex].designNum === i + 1
                ? "bg-red-500"
                : "bg-blue-400"
            }`}
            key={i}
            onClick={() => {
              comps[nextIndex].designNum = i + 1;
              setComps([...comps]);
            }}
          >
            {<Design choose={true} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectDesign;
