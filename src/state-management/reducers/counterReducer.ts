interface Action {
	type: 'RESET' | 'INCREMENT';
}

const counterReducer = (state: number, action: Action): number => {
	// counterReducer take 2 parameter. The current state and action. Action is an object that describes what the user is trying to do.
	// It returns new object
	if (action.type === 'INCREMENT') return state + 1;
	if (action.type === 'RESET') return 0;
	return state;
};

export default counterReducer;
