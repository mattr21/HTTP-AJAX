import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') {
        value = parseInt(value, 10);
    }

    this.setState(prevState => ({
        friend: {
            ...prevState.friend,
            [e.target.name]: value
        }
    }));
};

handleSubmit = e => {
    // if (this.props.activeItem) {
    //   this.props.updateItem(e, this.state.item);
    // } else {
      this.props.addItem(e, this.state.item);
    // }
    this.setState({
      item: {
        name: '',
        price: '',
        imageUrl: '',
        description: '',
        shipping: ''
      }
    });
  };


render() {
    return (
        <div>
            <form onSubmit={this.props.addFriend}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.changeHandler}
                    value={this.state.friend.name}
                />
                <input 
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={this.changeHandler}
                    value={this.state.friend.age}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.changeHandler}
                    value={this.state.friend.email}
                />
                <button>Submit</button>
            </form>
        </div>
    )

}

}

export default FriendForm;