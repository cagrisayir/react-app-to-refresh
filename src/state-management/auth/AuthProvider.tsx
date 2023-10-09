import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

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

interface Props {
	children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
	const [user, dispatch] = useReducer(authReducer, '');

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
