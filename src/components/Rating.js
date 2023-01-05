import React from "react";
import styled from 'styled-components';
import { FrownOutlined, MehOutlined, SmileOutlined,ThunderboltOutlined,LikeOutlined,SkinOutlined } from '@ant-design/icons';
import { Rate } from "antd";

const RatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`
const TopicWrapper = styled.h2`
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    color: white;
`
const Rating = ({ attr,score }) => {
    let color,prop;
    if(attr === "品質"){
        color = "#FADB14"
        prop = (<LikeOutlined />)
    }
    else if(attr === "甜度")
        color = "#F06B6B";
    else if(attr === "涼度"){
        color = "#74B577";
        prop = <SkinOutlined />;
    }
    else{
        color = "rgb(0,100,200)";
        prop = (<ThunderboltOutlined />);
    }
    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };
    return (
        <RatingWrapper>
            <TopicWrapper style={{backgroundColor: color}}><strong>{attr}</strong></TopicWrapper>
            {
                attr !== "甜度"?
                    (<Rate 
                        style={{color: color}}
                        defaultValue={score}
                        disabled={true}
                        allowHalf={true}
                        character={prop}
                    />):
                    (<Rate 
                        style={{color: color}}
                        defaultValue={score}
                        disabled={true}
                        allowHalf={true}
                        character={({ index }) => customIcons[index + 1]}
                    />)
            }
        </RatingWrapper>
    );
}
export default Rating;