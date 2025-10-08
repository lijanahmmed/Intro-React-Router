import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);

    console.log('users 2 suspense data load', users);

    return (
        <div>
            <h2>This is User2</h2>
        </div>
    );
};

export default Users2;