import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import "../Styles/list.css"


export const List = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token"); 
  useEffect(() => {
    
    axios.get(`http://localhost:8080/list/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  // for delete--------------------------------------------
  const handleDeleteClick = (itemId) => {
    console.log("itemId",itemId)
      axios.delete(`http://localhost:8080/list/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          // Update state or do something else after successful deletion
          alert("Item deleted successfully")
          console.log("Item deleted successfully");
        })
        .catch(error => {
          console.error(error);
        });
    };
  // for delete--------------------------------------------

  return (
    <>

    <Navbar/>
    <div className="list-div-cont">
      {data.map((item) => (
        <Card key={item.id} title={item.title} imageUrl={item.img_url}  handleDeleteClick={() => handleDeleteClick(item.id)}/>
      ))}
    </div>
    </>
  );
};
