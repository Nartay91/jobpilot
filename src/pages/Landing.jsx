import React from "react";
import Search from '../components/Search';
import Section from "../components/Section";
import Main from '../components/Main';
import Main2 from '../components/Main2';
import Comment from "../components/Comment";

function Landing() {
    return (
        <div>
            <Search />
            <Section />
            <Main />
            <Main2 />
            <Comment />
        </div>
    );
}

export default Landing;