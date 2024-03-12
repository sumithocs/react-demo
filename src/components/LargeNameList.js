import { useState } from "react";
import NAMES from "./data.json";

export const LargeNameList = () => {

  const [query, setQuery] = useState('');
  const changeHandler = (event) => {
    setQuery(event.target.value);
  }

  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  })

  return (
    <div>
      <input type="text" value={query} onChange={changeHandler}/>
      {filteredNames.map((item) => {
        return (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        );
      })}
    </div>
  );
};
