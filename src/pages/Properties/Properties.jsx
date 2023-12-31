import React,{useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useProperties from "../../hooks/useProperties"
import "./Properties.css";
import {PuffLoader} from "react-spinners";
import PropertyCard from "..//../components/PropertyCard/PropertyCard"

const Properties=()=>{
    const{data,isError,isLoading}=useProperties()
   if(isError){
    return(
        <div className="wrapper">
        <span>Error while fetching data</span>
        </div>
    )
   }
   if(isLoading){
    return (
       <div className="wrapper flexCenter" style={{height: "60vh"}}>
    <PuffLoader
    height="80"
    width="80"
    radius={1}
    color="#406fff"
    aria-label="puff-loading"
     />
       </div>
    )
   }
   return(<div className="wrapper"><h1>
        <div className="flexColCenter paddings innerWidth properties-container">

            <SearchBar />
            <div className="paddings flexCenter properties">
             {
                data.map((card,i)=>(<PropertyCard card={card} key={i}/>))
             }                
            </div>
        </div>
    </h1>
    </div>);
}
export default Properties;