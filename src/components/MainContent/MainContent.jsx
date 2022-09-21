import React from 'react';
import MainContentInfo from "../MainContentInfo/MainContentInfo";
import mainImg from "../../images/main.png"
import classes from "./_MainContent.module.scss"
import ScrollArrow from "../ScrollArrow/ScrollArrow";


class MainContent extends React.Component {
    render() {
        return (
            <div className={classes.mainContentWrapper}>
              <MainContentInfo />
                <div className={classes.mainContentImg}>
                    <img src={mainImg} alt={mainImg} />
                </div>
                <ScrollArrow />
            </div>
        );
    }
}

export default MainContent;