import React from "react";
import { useLocation } from "react-router-dom";
import Search from "../components/findPage/Search";
import Find from "../components/findPage/Main";
import Form from "../components/findPage/FormInput";

const FindJob = () => {
    const location = useLocation();

    return (
        <div className="find-job">
            <Search />
            <div className="current-path">
            <h2 className="header_curr">Find Job</h2>
            <h3 className="header_current">Home {location.pathname}</h3>
        </div>
            <Form />
        <Find />       
    </div>
  );
};

export default FindJob;

