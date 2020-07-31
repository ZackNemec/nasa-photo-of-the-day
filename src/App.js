import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://api.nasa.gov/#apod").then((pull) => {
      console.log(pull.data);
      setData(pull.data.results);
    });
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
