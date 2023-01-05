import React from "react";
import Rating from "./Rating";
import styled from 'styled-components';

const CourseTitleWrapper = styled.div`
    border:2px rgb(56 56 122 / 11%) solid;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    width: 700px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const RatingContainer = styled.div`
    display: flex;
`
const RatingWrapper = styled.div`
    margin-left:3px;
    margin-right:3px;
    border:2px rgb(56 56 122 / 11%) solid;
    border-radius: 4px;
`
const WantCourseTitle = ({ title,link,rating }) => {
    const { quality,easyA,freedom,workload } = rating;
    return (
        <CourseTitleWrapper onClick={() => {
            const w = window.open("about:blank");
            w.location.href = link;
        }}>
            <h2 style={{fontWeight: "1000"}}>{ title }</h2>
            <RatingContainer>
                <RatingWrapper><Rating attr={"品質"} score={quality}/></RatingWrapper>
                <RatingWrapper><Rating attr={"甜度"} score={easyA}/></RatingWrapper>
                <RatingWrapper><Rating attr={"涼度"} score={freedom}/></RatingWrapper>
                <RatingWrapper><Rating attr={"紮實度"} score={workload}/></RatingWrapper>
            </RatingContainer>
        </CourseTitleWrapper>
    )
}
export default WantCourseTitle;