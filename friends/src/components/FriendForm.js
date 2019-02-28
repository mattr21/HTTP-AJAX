import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

render() {
    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.changeHolder}
                    value={this.state.friend.name}
                />
                <input 
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={this.changeHolder}
                    value={this.state.friend.age}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.changeHolder}
                    value={this.state.friend.email}
                />
            </form>
        </div>
    )

}

}

export default FriendForm;