function Presentation({ title, name }) {
  console.log(title, name);
  //destructuralization
  //   const { title, name } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{name}</p>
    </div>
  );
}

export default Presentation;
