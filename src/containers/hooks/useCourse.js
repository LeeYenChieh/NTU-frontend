/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
import { createContext,useContext } from "react";
import { message } from 'antd';
import axios from 'axios';
 
const CourseContext = createContext({
    pageNum: 0,
    data: [],
    displayStatus: () => {},
    getData: () => {},
    content: {},
    getContent: () => {},
    scrollToPosition: () => {},
    page: 1,
    setPage: () => {},
    isPtt: true,
    setIsPtt: () => {}
});

const instance = axios.create({
    baseURL: `https://rating-backend.onrender.com`,
});
const CourseProvider = (props) => {
    const [data,setData] = useState([]);
    const [pageNum,setPageNum] = useState(0);
    const [content,setContent] = useState({});
    const [page,setPage] = useState(1);
    const [isPtt,setIsPtt] = useState(true);
    
    const scrollToPosition = (top = 0) => {
        try {
          window.scroll({
            top: top,
            left: 0,
            behavior: "instant",
          });
        } catch (_) {
          window.scrollTo(0, top);
        }
    };

    const getData = async(key,page,isPtt) => {    
        if(!key){
            setData([]);
            setPageNum(0);
        }
        if(isPtt){
            // const result = [
            //     {
            //         title: "ADAmwoewofekw",
            //         id: "wjefowe"
            //     },
            //     {
            //         title: "DSAfweoifjweo",
            //         id: "abcde"
            //     }
            //    ]
            setPageNum(0)
            setData([]);
            const {data : {result, pageNum}} = await instance.get('/searchPtt', {
                params: {
                    key,
                    pageNum: page
                }
            })
            setData(result);
            setPageNum(pageNum);
        }
        else{
            // const result = [{
            //     title: "ADA",
            //     link: "https://rating.myntu.me/course-overview?_id=611654f71ca507248a5cab95&instructor=%E9%99%B6%E5%84%80%E8%8A%AC&courseName=%E4%B8%AD%E5%9C%8B%E5%A4%A7%E9%99%B8%E6%94%BF%E5%BA%9C%E8%88%87%E6%94%BF%E6%B2%BB",
            //     rating: {
            //         quality: 4.5,
            //         easyA: 3,
            //         freedom: 4,
            //         workload: 2
            //     }
            // },{
            //     title: "DSA",
            //     link: "https://rating.myntu.me/course-overview?_id=61e0796e5de04a69ac9e1b04&instructor=%E6%9E%97%E5%8F%8B%E7%91%9C&courseName=%E4%BB%A5Excel%E9%80%B2%E8%A1%8C%E8%B3%87%E6%96%99%E5%88%86%E6%9E%90",
            //     rating: {
            //         quality: 4.5,
            //         easyA: 3,
            //         freedom: 4,
            //         workload: 2
            //     }
            // }]
            setPageNum(0)
            setData([]);
            const {data : {result, pageNum}} = await instance.get('/searchRating', {
                params: {
                    key,
                    pageNum: page
                }
            })
            setData(result);
            setPageNum(pageNum);
        }
    }

    const getContent = async(id) => {
        /*get data from id*/
        setContent({});
        const { data: {result} } = await instance.get('/detailPtt',{
            params:{
                id
            }
        })
        // const result = {
        //     courseName: "ADA",
        //     teacher: "me",
        //     year: "110-1",
        //     rating: "5",
        //     classification: "專項體育",
        //     description: "wefjewoifjweofjweiofjweofjweofjweofjweofjew\nwefoijweofjewofjweofjweofjewo\nmdqkmdkwqjiuhuwefjwkejfiojro3r\newqoirj2oi3rj23oj\n",
        //     link: "https://www.ptt.cc/bbs/NTUcourse/M.1671629254.A.E62.html"
        // }
        setContent(result);
    }

    const displayStatus = (s) => {
        if(s.msg){
            const { type,msg } = s;
            const content = { content: msg,duration: 0.5 };
            switch(type){
                case 'success':
                    message.success(content)
                    break;
                case 'error':
                default:
                    message.error(content)
                    break;
            }
        }
    };
    return (
        <CourseContext.Provider
            value={{
                displayStatus, getData, pageNum, data, getContent, content, scrollToPosition,page,setPage,isPtt,setIsPtt
            }}
            {...props}
        />
    );
};
const useCourse = () => {
    return useContext(CourseContext)
};
export { CourseProvider,useCourse };