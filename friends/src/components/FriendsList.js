import React from 'react';

const FriendsList = props => {
    const {friends} = props
    return (
        <div>
            {friends.map(friend => 
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