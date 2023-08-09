import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import {createUser} from "../../utils/api";
import { get } from "lodash";
// import useFavourites from "../../hooks/useFavourites";
// import useBookings from "../../hooks/useBookings";

const Layout = () => {

//   useFavourites()
//   useBookings()

const {isAuthenticated, user,getAccessTokenSilently} = useAuth0();
const { setUserDetails } = useContext(UserDetailContext);

const {mutate} = useMutation({
  mutationKey: [user?.email],
  mutationFn: () => createUser(user?.email),
  onError: (error) => {
    // Handle the error here
    console.error("Mutation error:", error);
    // You can display an error toast using react-toastify or handle it in any other way
    toast.error("Something went wrong while creating the user");
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
  },
  
});




useEffect(() => {
  const getTokenAndRegsiter=async ()=>{

    const res=await getAccessTokenSilently({
      authorizationParams:{
      audience:"http://localhost:8000/",
scope:"openid profile email"
      }
    })
    localStorage.setItem("access_token", res)
    setUserDetails((prev)=>({...prev, token: res}))
    console.log(res)

  }
  isAuthenticated && mutate()
},[isAuthenticated])
//   const getTokenAndRegsiter = async () => {

//     const res = await getAccessTokenWithPopup({
//       authorizationParams: {
//         audience: "http://localhost:8000",
//         scope: "email",
//       },
//     });
//     localStorage.setItem("access_token", res);
//     setUserDetails((prev) => ({ ...prev,token:res}));
//     mutate(res)
//   };


//   isAuthenticated && getTokenAndRegsiter();
// }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

// // eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJneFd3UG9IZ0VuUjNOa1pWMTVfcSJ9.eyJpc3MiOiJodHRwczovL2Rldi1hbnRyYWd1cHRhLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMzA0NDMxMjU3NzYzNzI3NzE5MSIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJodHRwczovL2Rldi1hbnRyYWd1cHRhLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2OTA2MTkyNzQsImV4cCI6MTY5MDcwNTY3NCwiYXpwIjoiZFA2OVpDTnRYSE1VS0ROR2oyOTB1WlRzTkRtR2FCakYiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.idqrV94ytQRLYOwVJZzxbPcw45zAG2FUrykxSU8WlGJfpbL1UBkKOtJJQFxXS-a5ONrb7xWhznLe3pzvZ74AYwKFRWd_6glU3h5aoeekc_20VeXn2chVD33Z0yp6OTz2FCaPbE2xQ7WPwQfLxypFmS9D5dzB5bQ_RYMR9R7-ukAmcQOAcyI9tbtyilsaEOZvY9Hgm3DVgKEAzBkOJTIplavI4zhEFuuFe8u1xS8ZO2PogJ7mrgn-o7-fGT1tydAW4153aWQvhkX0WPy4Yh4Chv6baSoFY6jEZqk_Dnpq_eui86GbFH-QWEVmU6RCdqq0wZtdvy6kwXM_j1gVFIvVLg