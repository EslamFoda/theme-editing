const Preview = ({ containerWidth, comps, setComps, device,editSections }) => {
  return (
    <div
      style={{
        margin: "0px auto",
        flex: "1 1 0%",
        transition: "width 0.2s ease 0s",
        width: containerWidth,
      }}
      className="flex flex-col"
    >
      {comps.map((comp, i) => {
        return (
          <div className="relative" key={comp.id}>
            <comp.Component
              comp={comp}
              setComps={setComps}
              comps={comps}
              index={i}
              device={device}
              editSections={editSections}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
