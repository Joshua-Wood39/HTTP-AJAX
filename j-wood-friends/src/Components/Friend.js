import React from 'react';
import styled from 'styled-components';

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

const ButtonWrap = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const StyledButts = styled.button`
    font-size: 1.1rem;
    border: 1px solid darkgray;
    border-radius: 7px;
    margin-bottom: 5px;
`;

function Friend ({ friends, match, deleteFriend, setUpdateForm}) {
    const { id } = match.params;

    const friend = friends.find(thing => `${thing.id}` === id);
    console.log('rendering Friend: ', friends, friend);

    if(!friend) {
        return <h3>Loading friends . . .</h3>;
    }

    return (
        <FriendWrapper>
            <FriendName>Name: {friend.name}</FriendName>
            <FriendAge>Age: {friend.age}</FriendAge>
            <FriendMail>e-mail: {friend.email}</FriendMail>
            <ButtonWrap>
                <StyledButts onClick={e => deleteFriend(e, friend.id)}>Delete Friend</StyledButts>
                <StyledButts onClick={e => setUpdateForm(e, friend)}>Update Friend</StyledButts> 
            </ButtonWrap>
        </FriendWrapper>
    )
}


export default Friend;