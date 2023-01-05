/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect } from "react";
import PttCourseTitle from "../components/pttCourseTitle";
import WantCourseTitle from "../components/wantCourseTitle";
import styled from 'styled-components';
import { useCourse } from "./hooks/useCourse";
import { LikeTwoTone } from '@ant-design/icons'
import { useParams } from 'react-router-dom';
import { Pagination,Button,Spin } from 'antd';

const SearchContainer = styled.div`
    padding-top: 120px;
    display: flex;
    justify-content: center;
    position: relative;
`
const BackgroundImg = styled.img`
    height: 670px;
    width: 100%;
    position: fixed;
    top: 120px;
    left: 0px;
    z-index: -1;
    filter: blur(10px);
    transform: scale(1.2);
`
const MainContainer = styled.div`
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0,0,0,0.03);
    width: 780px;
    min-height: 593px;
`
const MainWrapper = styled.div`
    height: 100px;
    padding-top: 30px;
`
const NameWrapper = styled.h2`
    height: 70px;
    padding-top: 10px;
`
const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`
const ButtonWrapper = styled(Button)`
    width: 120px;
    height: 60px;
    font-size: 24px;
    margin-left: 5px;
    margin-right: 5px;
`
const CourseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const SearchPage = () => {
    const { getData,pageNum,data,scrollToPosition,page,setPage,isPtt,setIsPtt } = useCourse();
    const { search: keyword } = useParams();


    useEffect(() => {
        scrollToPosition();
    },[])
    useEffect(() => {
        scrollToPosition();
        console.log('update data')
        getData(keyword,page,isPtt);
    },[keyword,page,isPtt])
    const displayData = (data) => {
        if(pageNum < 0)
            return (
                <h3>甚麼都找不到...</h3>
            )
        else if(pageNum === 0)
            return (
                <Spin size="large" />
            )
        if(isPtt && data[0] && data[0].id)
            return (
                <CourseWrapper>
                    {data.map(({title,id}) => 
                        <PttCourseTitle title={title} id={id} />
                    )}
                </CourseWrapper>
            )
        else if(data[0] && data[0].rating)
            return (
                <CourseWrapper>
                    {data.map(({title,link,rating}) => 
                        <WantCourseTitle title={title} link={link} rating={rating} />
                    )}
                </CourseWrapper>
            )
    }
    return (
        <SearchContainer>
            <div style={{overflow: "hidden"}}>
                <BackgroundImg src={"https://imgur.com/e2K9Vhb.jpg"} alt="圖片載入中"/>
            </div>
            <div style={{backgroundColor: "white"}}>
                <MainContainer>
                    <MainWrapper>
                        <h1><LikeTwoTone /> 課程評價</h1>
                    </MainWrapper>
                    <NameWrapper>{keyword}</NameWrapper>
                    <ButtonContainer>
                        <ButtonWrapper disabled={pageNum === 0? true:false} onClick={() => {setIsPtt(true);setPage(1);}} type={isPtt? "primary":"text"}>Ptt</ButtonWrapper>
                        <ButtonWrapper disabled={pageNum === 0? true:false} onClick={() => {setIsPtt(false);setPage(1);}} type={!isPtt? "primary":"text"}>想鑑你</ButtonWrapper>
                    </ButtonContainer>
                    {displayData(data)}
                    <Pagination 
                        style={{marginBottom: "5%",marginTop: "5%"}}
                        showSizeChanger={false}
                        current={page}
                        hideOnSinglePage={true}
                        showQuickJumper={true}
                        total={ pageNum * 10 }
                        onChange={(current) => {
                            setPage(current);
                        }}    
                    />
                </MainContainer>
            </div>
        </SearchContainer>
    )
}
export default SearchPage