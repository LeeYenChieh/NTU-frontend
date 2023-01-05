import React,{ useState } from "react";
import { useCourse } from "../containers/hooks/useCourse";
import { Input,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HomeTwoTone,SearchOutlined } from '@ant-design/icons'

const NavBarContainer = styled.div`
    background-color: white;
    position: fixed;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 120px;
    z-index: 1;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`
const NavBarWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const ButtonWrapper = styled(Button)`
    color: #000000;
`

const NavBar = () => {
    const { displayStatus,scrollToPosition,setPage } = useCourse();
    const [msg,setMsg] = useState('');
    const navigate = useNavigate();
    return (
        <NavBarContainer>
            <NavBarWrapper>
                <h1 style={{width: "240px",paddingLeft: "10pxs",marginLeft: "20px"}}>NTU評價網</h1>
                <ButtonWrapper  icon={(<HomeTwoTone />)}type={'text'} size={'large'}
                    onClick={() => {scrollToPosition();navigate('/');}}>Home</ButtonWrapper>
                <Input.Search
                    prefix={(<SearchOutlined />)}
                    size="large"
                    style={{marginLeft: "60px",marginRight: "60px"}}
                    enterButton="搜尋"
                    value={msg}
                    onChange={(e) => {setMsg(e.target.value);}}
                    placeholder="請輸入課程名稱"
                    onSearch={(msg) => {
                        if(!msg){
                            displayStatus({type: 'error',msg: 'Please enter a keyword!'})
                        }
                        else{
                            const temp = msg;
                            setMsg('');
                            setPage(1);
                            scrollToPosition();
                            navigate('/search/' + temp);
                        }
                    }}
                    ></Input.Search>
            </NavBarWrapper>
        </NavBarContainer>
    )
}
export default NavBar;

