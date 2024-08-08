import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Custom.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import RecipeItem from "../components/RecipeItem";

function Custom() {
    return (
        <>
            <Header></Header>
            <div className="page">
                <div className="CustomBox">
                    <div className="DetailPage-title">
                        <div className="DetailPage-title-des">밤송이님의 취향에 딱 맞는</div>
                        <div className="DetailPage-title-name">밤송이님의 맞춤 레시피</div>
                    </div>
                    <div className="DetailPage-contents">
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                    </div>
                </div>
            </div>
            <Nav></Nav>
        </>
    );
}

export default Custom;
