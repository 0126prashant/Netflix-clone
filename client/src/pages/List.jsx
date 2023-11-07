import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import "../Styles/list.css"
import { useToast } from '@chakra-ui/react';

export const List = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefersh] = useState(false);
  const toast = useToast(); 

  const token = localStorage.getItem("token"); 
  useEffect(() => {
    
  const getData = ()=>{
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
  }
  getData()
  }, [refresh]);


  // for delete--------------------------------------------
  const handleDeleteClick = (itemId) => {
    console.log("itemId",itemId)
    setRefersh(true)
    setTimeout(()=>{
      setRefersh(false)
    },100)
      axios.delete(`http://localhost:8080/list/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          toast({
            title: "Movie has been Deleted",
            description: "Movie has been Deleted!",
            status: "failed",
            duration: 5000,
            isClosable: true,
            style: {
              background: "red", 
              color: "white", 
            },
          });
          
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
      {data.length > 0 && data.map((item) => (
        <Card key={item.id} title={item.title} imageUrl={item.img_url}  handleDeleteClick={() => handleDeleteClick(item._id)}/>
      ))}
    </div>
    </>
  );
};
