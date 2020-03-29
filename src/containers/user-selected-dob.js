import React, { Component } from "react";
import { connect } from "react-redux";

class UserSeleted extends Component {
    render() {
        if(!this.props.user) {
            console.log("no user");
            return (
                <h1>Select an user...</h1>
            );
        }
        return (
        <div>
            <h1>
                {this.props.user.name}'s Date Of Birth is {this.props.user.dob}
           </h1>
        </div>
        );
    }
}

function mapStateToProps(state) {         
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserSeleted);