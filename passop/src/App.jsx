import { useState } from "react";

import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

        <Navbar />
        <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <Manager />
        </div>
        <Footer />
        {/* <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <Navbar />
          <div className="bg-green-50 dark:bg-gray-800 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <Manager />
          </div>
          <Footer />
        </div> */}

    </>
  );
}

export default App;
