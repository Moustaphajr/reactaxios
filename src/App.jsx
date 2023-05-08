import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")

      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [data]);
  return (
    <div className="ml-8">
      {data ? (
        <div>
          {data.map((data, index) => (
            <div
              key={index}
              className=" card border-primary mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">{data.id}</div>
              <div className="card-body text-primary">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Chargement...</h1>
      )}
    </div>
  );
}

export default App;
