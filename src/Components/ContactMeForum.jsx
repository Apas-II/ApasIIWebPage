import {React, useState} from 'react'
import {useForm} from "react-hook-form"
import {FaEnvelope} from "react-icons/fa"
function ContactMeForum() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data)
  return (
    <div className = "Maindiv-ContactMeForum">
    <div className = "Primarydiv-ContactMeForum" ></div>
    <div className = "Secondarydiv-ContactMeForum" ></div>
      <div className = "Terciarydiv-ContactMeForum">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("Name")} placeholder="Name" />
      <input {...register("Email")} placeholder="Email" />
      <input {...register("Budget range")} placeholder="Budget range" /> 
      <input {...register("Timeline")} placeholder="Timeline" />
      <textarea {...register("Proyect details")} placeholder="Proyect details" />
      <button className = "Input-Bottom-Sumit" type="submit"  >Enviar<FaEnvelope/></button>
        </form>      
      </div>
      
      </div>
  )
}

export default ContactMeForum