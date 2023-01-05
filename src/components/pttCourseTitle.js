import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CourseTitleWrapper = styled.div`
    border:2px rgb(56 56 122 / 11%) solid;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    width: 700px;
    height: 65px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const PttCourseTitle = ({ title,id }) => {
    const navigate = useNavigate();
    return (
        <CourseTitleWrapper onClick={() => {navigate('/detail/' + id)}}>
            <h2>{ title }</h2>
        </CourseTitleWrapper>
    )
}
export default PttCourseTitle;