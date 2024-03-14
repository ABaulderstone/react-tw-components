import { useState } from "react";
import "./App.css";
import SearchableDropdown from "./components/SearchableDropdown";
import Chip from "./components/Chip";

function App() {
  const [value, setValue] = useState(null);
  const options = [
    { label: "Apple", value: 1 },
    { label: "Orange", value: 2 },
    { label: "Banana", value: 3 },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <section>
        <SearchableDropdown
          value={value}
          placeholder="Search"
          onChange={setValue}
          options={options}
        />
      </section>
      {value && <p>{value}</p>}
      <div>
        <Chip label="Test" />
        <Chip label="Red" backgroundColor="bg-red-500" />
      </div>
    </>
  );
}

export default App;
