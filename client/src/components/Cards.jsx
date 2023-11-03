import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react";
import "../Styles/cards.css"

export const Card = ({ title, imageUrl }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={"https://image.tmdb.org/t/p/original/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg"} alt={title} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {title}
        </Text>
      </Box>
    </Box>
  );
};


// export const Cards = (
//      {id,original_language,original_title
//     ,overview,popularity
//     ,poster_path,release_date,
//     title,
//     video
//     }
//     ) => {
//       // console.log("card",original_title)
//     // console.log(original_language,id,original_title,overview)
//   return (
//     <div className="card">
//     <img className="card__image" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} />
//     <div className="card__info">
//       <h2 className="card__title">{title}</h2>
//       <p className="card__overview">{overview}</p>
//     </div>
//   </div>
    
//   )
// }
