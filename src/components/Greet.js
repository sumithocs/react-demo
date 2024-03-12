// function Greet() {
//     return (
//         <h1>Hello people!</h1>
//       );
// }

// export default Greet;

export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name}! I know you are the {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
