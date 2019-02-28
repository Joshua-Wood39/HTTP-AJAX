import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavWrapper = styled.div`
    margin: auto;
    max-width: 800px;
    height: 60px;
    background: darkgray;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavSearch = styled.input`
    font-size: 1.4rem;
    border-radius: 7px;
`;

const LinkWrapper = styled.div`
    margin-right: 10px;
    padding: 3px;
    background: white;
    border: 2px solid navy;
    border-radius: 4px;
`;

const NavBar = props => {
    return (
        <NavWrapper>
            <div>
                <i className="fab fa-searchengin"></i>
                <NavSearch
                    autoComplete="off"
                    type="text" 
                    onChange={props.searchHandler} 
                    name="search" 
                    placeholder="..find a friend.." 
                />
            </div>
            <LinkWrapper><NavLink to="/">Friend's List</NavLink></LinkWrapper>
            <LinkWrapper><NavLink to="/addfriend">Add A Friend!</NavLink></LinkWrapper>
        </NavWrapper>
    )
}



export default NavBar;