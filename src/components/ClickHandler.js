export const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log("clicked", count, event);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click default</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  );
};
