export const UserGreetings = () => {
  const isLoggedIn = true;
  // return <div>Welcome {isLoggedIn ? "Sumith" : "Guest"}</div>;
  return <div>Welcome {isLoggedIn && "Sumith"}</div>;
};
