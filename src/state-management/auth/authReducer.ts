interface LogoutAction {
	type: 'LOGOUT';
}

interface LoginAction {
	type: 'LOGIN';
	username: string;
}

export type AuthAction = LogoutAction | LoginAction;

const authReducer = (_state: string, action: AuthAction): string => {
	switch (action.type) {
		case 'LOGIN':
			return action.username;
		case 'LOGOUT':
			return '';
	}
};

export default authReducer;
