// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios, { Axios } from "axios";


// function NextVideo(){
    
//     // that specific id that we typed in teh url 
//     const {videoId} = useParams();
//     console.log({videoId});
//     const API_BASE_URL = "https://project-2-api.herokuapp.com";
//     const API_KEY = "1ca570a3-8506-4c77-9dfc-66a557d5396b";
  
//     // need to use usestate for the video and id
//     const[video,setVideo] = useState(null)
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(()=>{
//         // we are getting that id
//         axios.get(`${API_BASE_URL}/videos/${videoId}?api_key=${API_KEY}`)
//         .then((response)=>{
//             setVideo(response.data)
//             setIsLoading(false)
//             console.log(response.data);
//         })
//     },[])

//     if(isLoading){
//         return console.log("Loading");
        
//     }
    


//     return(
//         <p>{video.title}</p>
//     )
// }

// export default NextVideo