import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useGetUserRole = () => {
  const {user}=useAuth()
  const email = user?.email
  console.log(email);
const [role,setRole]=useState('')
// get user role
useEffect(()=>{
  axios.get(`http://localhost:5000/user_role?email=${email}`)
  .then(res=>{
    console.log(res.data);
    setRole(res?.data?.role)
  })
},[email]) 
  return role
};

export default useGetUserRole;