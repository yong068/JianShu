import styled from "styled-components";
import logoPic from "../../static/nav-logo.png";

 export const HeaderWrapper = styled.div`
    height: 58px;
    margin: 0 71.5px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo =  styled.a.attrs({href: '/'})`
    position: absolute;
    top: 1px;
    left: 71.5px;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
width: 960px;
height: 100%;
margin: 0 auto;
`;
export const NavItem = styled.div`
line-height: 50px;
padding: 0 15px;
font-size: 17px;
color: #333;
    &.left{
        float: left;
    }
    &.right{
        font-size:15px;
        color: #969696;
        float: right;
    }
    &.active{
        color: #1890ff;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width:30px;
        line-height:30px;
        border-radius: 15px;
        text-align: center;
        &.focus {
            background: #777;
            color: #fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 240px;
    height: 38px;
    padding-left:15px;
    margin: 10px 0 0 20px;
    box-sizing: border-box;
    border: none;
    outline:none;
    background: #EEEEEE;
    font-size:15px;
    border-radius: 19px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focus{
        width: 320px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width: 320px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px 20px 10px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    cursor: pointer;
    font-size: 13px;
    color: #969696;
    .spin{
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`;
export const SearchInfoList = styled.div`
    overflow: hidden;
`;
export const SearchInfoItem = styled.span`
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right:10px;
    margin-bottom:15px;
    font-size: 12px;
    border:1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`
export const Addition = styled.div`
    position: absolute;
    right: 71.5px;
    top: 0;
    height: 56px;
`;
export const Button = styled.a.attrs({href: '/'})`
    display:block;
    text-decoration: none;
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border: 1px solid #1890ff;
    font-size:14px;
    &.reg{
        color: #1890ff;
    }
    &.write{
        color:#fff;
        background: #1890ff;
    }
`;