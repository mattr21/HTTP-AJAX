import React from 'react';

const FriendsList = props => {
    const { friends } = props
    return (
        <div>
            {friends.map(friend => 
                <div key={friend.id}>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <p><button onClick={e => props.deleteFriend(e, friend.id)}>X</button></p>
                </div>
                )}
        </div>
    );
}

export default FriendsList;