import React, { useState } from "react";
// import { setValue } from "../../features/homePageSLice";

// const Home = (props) =>
//   props.data.map((name, index) => (
//     <div key={index}>
//       <label>{name.title}</label>
//       <input name="name" type="text" id="first-name" />
//     </div>
//   ));
const Home = (props) => {
  const [name, setName] = useState("");
  // const [lastName, setLastName] = useState(null);
  console.log(name);
  return (
    <div>
      {props.data.map((item) => (
        <div key={item.id}>
          <label htmlFor={item.name}>{item.title}</label>
          <input
            type="text"
            id="input-name"
            name="name"
            value={name}
            // placeholder={item.title}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};
export default Home;
