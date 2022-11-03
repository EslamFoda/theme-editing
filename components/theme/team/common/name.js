const Name = ({ name, choose }) => {
  return <h3 className={`text-primary ${choose ? "text-small" :"text-2xl"} font-semibold`}>{name}</h3>;
};

export default Name;
