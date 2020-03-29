import {combineReducers} from 'redux';
import users from './users'
import selectedUser from './selected-user';

const allReducers = combineReducers({
        users: users,
        activeUser: selectedUser
    });

export default allReducers;