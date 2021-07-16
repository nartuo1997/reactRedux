import * as actionTypes from './Action';

const initialState = {
    persons: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age
            }
            debugger;
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state;

};



export default Reducer;