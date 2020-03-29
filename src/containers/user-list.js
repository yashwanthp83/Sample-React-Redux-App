import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions/user-select';
class UserList extends React.Component {
    createReturnItems() {
        return this.props.users.map((user) => {
                return (
                <li 
                onClick = {() => this.props.selectUser(user)}
                key={user.id}>{user.name}</li>
                );
        });
    }

    render() {
       return (
       <ul>
            {this.createReturnItems()}
        </ul>
       );
    } 
}

function mapStateToProps(state) {
    return {
        users : state.users
    };
}

function matchDispatchToProps(dispatch) {
   return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);