// export const  fetchMovies=async() =>{
//         try {
//           let page = 1;
//           let totalPages = 1;
//           let allMovies = [];
  
//           while (page <= totalPages && allMovies.length < maxMovies) {
//             const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
//               params: {
//                 api_key: 'f3bf97e36474e6b3f3dbd267ac45a672',
//                 page: page
//               }
//             });
  
//             const popularMovies = response.data.results;
//             allMovies = [...allMovies, ...popularMovies];
  
//             totalPages = response.data.total_pages;
//             page++;
//           }
//           allMovies = allMovies.slice(0, maxMovies);
  
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       }
  
//     //   fetchMovies();
