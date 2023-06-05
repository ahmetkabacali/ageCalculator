import { useState } from "react";
import Content from "./components/Content";
import InputHeader from "./components/InputHeader";


function App() {
  const [age, setAge] = useState({});
  console.log(age)

  return (
    <div className="min-h-screen flex bg-[#f0f0f0]">
      <div className="max-w-[800px] lg:w-[80%] p-4 md:p-12 m-auto bg-white rounded-3xl rounded-br-[30%]">
        <InputHeader setAge={setAge} />
        <Content age={age} />
      </div>
    </div>
  );
}

export default App;
