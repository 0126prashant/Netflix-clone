import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Cards";



export const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userId = "65428c186ffdbca825655065"; 

    axios.get(`http://localhost:8080/list/?creatorId=${userId}`)
      .then(response => {
        setData(response.data);
        console.log(data,"in list")
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} title={item.title} imageUrl={item.img_url} />
      ))}
    </div>
  );
};
