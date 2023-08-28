import { useParams } from "react-router-dom";
import NavigationBar from "./navigationBar"
import { useEffect, useState } from "react";
import { getAddress, getProfileDetails } from "../services/user";
import { log } from "../utils/utils";
import { toast } from "react-toastify";

function Profile() {
    
    const [profile, setProfile] = useState([]);
    const [address,setAddress ] = useState([]);

    
  useEffect(() => {
    loadProfile();
    loadAddress();
  }, []);

  const loadProfile = async () => {
    const response = await getProfileDetails(sessionStorage.getItem('customerId'));
    if (response['status'] === 200) {
      setProfile(response.data);
      log(response.data);
    } else {
      toast.error('Error while calling get /profile api');
    }
  };

  const loadAddress = async () => {
    const response = await getAddress(sessionStorage.getItem('customerId'));
    if (response['status'] === 200) {
      setAddress(response.data);
      log(response.data);
    } else {
      toast.error('Error while calling get /Address api');
    }
  };

    return (
      <>
      <NavigationBar></NavigationBar>
        <h1>Profile</h1>
        <h3>Name :{profile.firstName}   {profile.lastName}</h3>
        <h3>Email :{profile.email}</h3>
        <h3>Mobile NO:{profile.phone}</h3>
<br></br>
<hr></hr>
        <h1>Address</h1>
        <h3>Street :{address.adrLine1}  ,  {address.adrLine2}</h3>
        <h3>City :{address.city}</h3>
        <h3>State :{address.state}</h3>
        <h3>Country :{address.country}</h3>
        <h3>--{address.zipCode}</h3>
        
      </> 
    )
  }
  
  export default Profile
  