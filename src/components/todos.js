import React, { useEffect, useState } from "react";
import Todo from "./Todo";

export function Todos() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center ">All Todos</h1>

        <div className="row">
          {isLoading ? (
            <h className="d-flex justify-content-center p-3 ">Loading...</h>
          ) : (
            data.map((data) => (
              <Todo className="co-4" key={data.id} todo={data} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
