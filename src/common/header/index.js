import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import{
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Button 
} from './style';

class MainHeader extends Component {
    getListArea() {
        const { focus ,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();//转化为普通js数组
        const pageList = [];
        if(newList.length){
        for(let i = (page - 1) * 10; i < page * 10; i++){
            pageList.push(
                <SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
    }
        if(focus || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索
                                <SearchInfoSwitch
                                    onClick = {() => handleChangePage(page,totalPage,this.spin)}
                                >
                                    <span ref={(icon) => {this.spin = icon}} className="iconfont spin">&#xe626;</span>
                                    换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        const {focus,handleInputFocus,handleInputBlur,list,login, logout} = this.props;
    return(
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {focus}
                            classNames = "slide"
                            timeout = {200}
                        >
                            <NavSearch
                            className = {focus ? 'focus':''}
                            onFocus = {() => handleInputFocus(list)}
                            onBlur = {handleInputBlur}
                            ></NavSearch>
                            </CSSTransition>
                            <span className = {focus ? 'focus iconfont zoom':'iconfont zoom'}>&#xe60e;</span>
                            {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                <Link to='/write'>
                    <Button className='write'>
                        <span className="iconfont">&#xe606;</span>
                        写文章</Button>
                        </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
    )
}
}
const mapStateToProps = (state) =>{
    return {
            focus: state.getIn(['header','focus']),
            list: state.getIn(['header','list']),
            page: state.getIn(['header','page']),
            totalPage: state.getIn(['header','totalPage']),
            mouseIn: state.getIn(['header','mouseIn'])
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle){
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
            dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
			dispatch(loginActionCreators.logout())
		}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainHeader);