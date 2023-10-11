import React from 'react';
import UserList from './UserList';

const UsersPage = () => {
	return (
		<div className='row'>
			<div className='col'>
				<UserList />
			</div>
			<div className='col'></div>
		</div>
	);
};

export default UsersPage;
