import { useState } from "react";

const Home = () => {
  // let name = "mario";
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    console.log(e);
    console.log("ciao!");
    setName("luigi");
    setAge(18);
  };

  const handleClickAgain = (name) => {
    console.log("ciao " + name);
  };

  return (
    <div className="home">
      <h2>Homepage </h2>
      <p>
        {" "}
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => handleClickAgain("mario")}>Click me againe</button>
    </div>
  );
};

export default Home;
