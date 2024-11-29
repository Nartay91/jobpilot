import React from "react";
import Search from "../components/findPage/Search";
import Description from "../components/findPage/JobDescription";

function Details() {
    return (
        <div className="detail__">
           <Search />
           <div className="rows__">
           <Description />
           
           </div>
        </div>
    )
};

export default Details;