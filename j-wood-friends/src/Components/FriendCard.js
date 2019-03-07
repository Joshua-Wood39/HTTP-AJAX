import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FriendWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    border: 3px double black;
    border-radius: 7px;
    margin-top: 5px;
    margin-bottom: 5px;
    max-width: 800px;
`;

const FriendName = styled.h3`
    font-size: 1.5rem;
    border: 2px solid navy;
    border-radius: 7px;
    background: goldenrod;
`;

const FriendAge = styled.h4`

`;

const FriendMail = styled.p`
    color: blue;
`;


const FriendCard = props => {
    return (
        <FriendWrapper>
            <Link to={`/${props.friends.id}`} key={props.friends.id}>
            <FriendName>Name: {props.friends.name}</FriendName>
            <FriendAge>Age: {props.friends.age}</FriendAge>
            <FriendMail>e-mail: {props.friends.email}</FriendMail>
            </Link>
        </FriendWrapper>
    )
}

FriendCard.propTypes = {
    friends: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            age: PropTypes.number,
            email: PropTypes.string
        })
}

export default FriendCard;