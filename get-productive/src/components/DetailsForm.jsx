// import { useEffect, useState } from "react";
// import { baseURL, config } from "../services";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function DetailsForm(props) {
//   const [details, setDetails] = useState("");
//   const [date, setDate] = useState("");
//   const params = useParams();

//   // useEffect(() => {
//   //   if (params.id && props.details.length > 0){
//   //     const info= props.info.find((info) => info.id === params.id)
//   //     if (info) {
//   //       setDetails(info.fields.details);

//   //     }
//   //   }
//   // }, [props.details, params.id])
  
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(`ganamos2`)
//     const fields = {
//       details,
//       date,
//     }
//     await axios.post(baseURL, { fields }, config);
//     props.setToggleFetch((curr) => !curr);
//   };

//   return (

//     <form onSubmit={handleSubmit}>
      
      
//     </form>
//   )
// }

// export default DetailsForm;