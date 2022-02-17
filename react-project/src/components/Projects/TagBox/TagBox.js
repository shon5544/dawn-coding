import React from "react";
import "./TagBox.css";
import "../../../Font.css";
import LoginOrState from "./LoginOrState/LoginOrState";

export default () => {
    return(
        <div className="big-container">
            <div className="selector-container">
                <select 
                className="selector-lang selector" 
                name="select_language"
                defaultValue={"default"}
                >
                    <option value={"default"}>프로그래밍 언어 선택</option>
                    <option value={"C"}>C</option>
                    <option value={"C++"}>C++</option>
                    <option value={"java"}>java</option>
                    <option value={"javascript"}>javascript</option>
                    <option value={"swift"}>swift</option>
                    <option value={"dart"}>dart</option>
                    <option value={"etc"}>그 외 언어</option>
                </select>
                <select 
                className="selector-pos selector" 
                name="select_position"
                defaultValue={"default"}
                >
                    <option value={"default"}>포지션 선택</option>
                    <option value={"front"}>프론트엔드/클라이언트</option>
                    <option value={"back"}>백엔드/서버사이드</option>
                </select>
                <select 
                className="selector-genre selector" 
                name="select-genre"
                defaultValue={"default"}
                >
                    <option value={"default"}>개발 분야 선택</option>
                    <option value={"web"}>웹 개발</option>
                    <option value={"android"}>Android 앱 개발</option>
                    <option value={"ios"}>ios 앱 개발</option>
                    <option value={"game"}>게임 개발</option>
                    <option value={"desktop"}>데스크탑 앱 개발</option>
                </select>
                <button className="search-btn">검색</button>
            </div>
            <LoginOrState/>
        </div>
    )
}