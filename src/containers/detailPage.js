/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React,{ useEffect } from "react";
import { useCourse } from "./hooks/useCourse";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { StarTwoTone, CrownTwoTone, TagsTwoTone, BookTwoTone, ScheduleTwoTone } from '@ant-design/icons'

const DetailContainer = styled.div`
    width:100%;
    position: relative;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const CourseNameWrapper = styled.div`
    height: 158px;
    width: 100%;
    padding: 30px 8%;
    font-size: 48px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`
const CourseInfoWrapper = styled.div`
    width: 100%;
    flex-direction: column;
    background-color: rgba(0,0,0,0.03);
`
const SomeInfoWrapper = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px 8%;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
`
const OneInfoWrapper = styled.div`
    padding: 8px 30px 8px 8px;
    display: flex;
    flex-direction: column;
`
const DetailPage = () => {
    const { id } = useParams();
    const { content,getContent,scrollToPosition } = useCourse();

    useEffect(() => {
        getContent(id);
        scrollToPosition();
    },[id])
    const displayMsg = (description) => {
        if(!description)
            return (<></>)
        return (
            <>
                {description.split('\n').map((str) => <h4 style={{marginLeft: "30px",wordBreak: "break-all"}}>{str}</h4>)}
            </>
        )
    }
    return (
        <DetailContainer>
            <CourseNameWrapper><Button
                href={content.url}
                type={"link"}
                size={"large"}
                target={"view_window"}
                style={{fontSize: "48px"}}
            >{content.courseName}</Button></CourseNameWrapper>
            <CourseInfoWrapper>
                <h1 style={{fontSize: "40px",marginLeft: "8%",marginBottom: "20px",paddingTop: "15px"}}>課程資訊</h1>
                <SomeInfoWrapper>  
                    <OneInfoWrapper>
                        <h2><CrownTwoTone /> 授課講師</h2>
                        <h4 style={{marginLeft: "30px"}}>{content.teacher}</h4>
                    </OneInfoWrapper>
                    <OneInfoWrapper>
                        <h2><TagsTwoTone /> 分類</h2>
                        <h4 style={{marginLeft: "30px"}}>{content.classification}</h4>
                    </OneInfoWrapper>
                </SomeInfoWrapper>
                <h1 style={{fontSize: "40px",marginLeft: "8%",marginBottom: "20px"}}>評價</h1>
                <SomeInfoWrapper>
                    <OneInfoWrapper>
                        <h2><ScheduleTwoTone /> 哪一年度修課</h2>
                        <h4 style={{marginLeft: "30px"}}>{content.year}</h4>
                    </OneInfoWrapper>
                    <OneInfoWrapper>
                        <h2><StarTwoTone /> 評分</h2>
                        <h4 style={{marginLeft: "30px"}}>{content.rating}</h4>
                    </OneInfoWrapper>
                    <OneInfoWrapper>
                        <h2><BookTwoTone /> 內文</h2>
                        {displayMsg(content.description)}
                    </OneInfoWrapper>
                </SomeInfoWrapper>
            </CourseInfoWrapper>
        </DetailContainer>
    )
}
export default DetailPage;