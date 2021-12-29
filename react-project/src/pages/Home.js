import React from "react";
import BodyContent from "../components/Home/Body-Content/BodyContent";
import BodyPosts from "../components/Home/Body-Posts/BodyPosts";
import Body from "../components/Home/Body/Body";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";

export default () => {
    return(
        <>
            <Header />
            <Body />
            <BodyContent />
            <BodyPosts />
            <Footer />
        </>
    )
}