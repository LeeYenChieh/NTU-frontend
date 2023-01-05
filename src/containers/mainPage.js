/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect } from "react";
import styled from 'styled-components';
import { useCourse } from "./hooks/useCourse";
const MainContainer = styled.div`
    width:100%;
    position: relative;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const IntroWrapper = styled.div`
    padding-top:0px;
    text-align: center;
    height: 670px;
    width: 100%;
    position: relative;
    overflow:hidden
`
const BackgroundImg = styled.img`
    height: 670px;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    filter: blur(10px);
    transform: scale(1.2);
`
const MainWrapper = styled.div`
    text-align: center;
    padding-top: 200px;
    padding-left: 30px;
    padding-right:30px;
    margin-left: 100px;
    margin-right: 100px;
`
const BlueAreaWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 90px;
    padding-bottom: 50px;
    padding-left: 15px;
    padding-right: 15px;
    color: white;
    background-color: #00008B;
`
const WhiteAreaWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 90px;
    padding-bottom: 50px;
    padding-left: 15px;
    padding-right: 15px;
    color: black;
    background-color: white;
`
const MainPage = () => {
    const { scrollToPosition } = useCourse();
    useEffect(() => {
        scrollToPosition();
    },[]);

    return (
        <MainContainer>
            <IntroWrapper>
                <BackgroundImg src={"https://imgur.com/us2l97Q.jpg"} alt="圖片載入中" />
                <MainWrapper>
                    <h1 style={{color: "white",fontSize: "40px"}}>| 還在為了選哪堂課而煩惱嗎? |</h1>
                    <h3 style={{color: "white",fontSize: "36px"}}>| 還在因為課程評價太多而感到混亂嗎? |</h3>
                    <h5 style={{color: "white",fontSize: "32px"}}><strong>已經不用怕了，因為我來了</strong></h5>
                </MainWrapper>
            </IntroWrapper>
            <BlueAreaWrapper>
                <h1 style={{fontSize: "40px"}}>| 我們的目的 |</h1>
                <h3>課程的評價往往散落在各個網站，因此在尋找課程評價時資訊來源會很混亂</h3>
                <h3>因此，我們做出了課程整合網頁，並把評分,年度等資訊擷取下來讓資訊更加清楚！</h3>
            </BlueAreaWrapper>
            <WhiteAreaWrapper>
                <h1 style={{fontSize: "40px"}}>| How to use |</h1>
                <h3>只要在網頁右上方的搜尋框輸入自己想搜尋的課程並按下搜尋</h3>
                <h3>我們就會幫你把各大評價網站的資訊整合到一起喔!</h3>
            </WhiteAreaWrapper>
            <BlueAreaWrapper>
                <h1 style={{fontSize: "40px"}}>| 注意 |</h1>
                <h3>我們只是把評價整合在一起，使用者仍需要依自身想法參考評價，並選出最適合自己的課程</h3>
            </BlueAreaWrapper>
            <WhiteAreaWrapper></WhiteAreaWrapper>
        </MainContainer>
    )
}
export default MainPage