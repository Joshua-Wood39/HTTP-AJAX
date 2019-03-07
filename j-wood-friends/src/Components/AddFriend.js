import React from 'react';
import styled from 'styled-components';

const AddForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 300px;
`;

const AddButton = styled.button`
    font-size: 1.4rem;
`;

const FormInput = styled.input`
    font-size: 1.4rem;
    border-radius: 7px;
`;

class AddFriend extends React.Component {

        state = {
            friend: this.props.activeFriend || {
                name: '',
                age: '',
                email: '',
            }
        }
    

componentDidUpdate(prevProps) {
    if(
        this.props.activeFriend &&
        prevProps.activeFriend !== this.props.activeFriend
    ) {
        this.setState({
            friend: this.props.activeFriend
        })
    }
}

changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if(ev.target.name === 'age') {
        value = parseInt(value, 10);
    }

    this.setState(prevState => ({
        friend: {
            ...prevState.friend,
            [ev.target.name]: value
        }
    }))
}

handleSubmit = e => {
    if(this.props.activeFriend) {
        this.props.updateFriend(e, this.state.friend);
    } else {
        this.props.addFriend(e, this.state.friend);
    }
    this.setState({
        friend: {
            name: '',
            age: '',
            email: '',
        }
    });
}


    render(){
        return (
            <AddForm onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="Name"
                    value={this.state.friend.name}
                />
                <FormInput
                    type="number"
                    name="age"
                    onChange={this.changeHandler}
                    placeholder="Age"
                    value={this.state.friend.age}
                />
                <FormInput
                    type="text"
                    name="email"
                    onChange={this.changeHandler}
                    placeholder="E-mail"
                    value={this.state.friend.email}
                />
            
                <AddButton>{`${this.props.activeFriend ? 'Update' : 'Add New'} Friend`}</AddButton>
            
            
            </AddForm>
        )
    }
}



export default AddFriend;