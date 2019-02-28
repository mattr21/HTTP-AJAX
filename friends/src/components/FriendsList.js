import React from 'react';

const FriendsList = props => {
    console.log(props, "FriendsList");
    return (
        <div>
            {props.friends.map(friend => 
                <div>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
                )}
        </div>
    );
}

export default FriendsList;