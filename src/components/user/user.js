import React, {Component} from 'react';
//import '../../style.css';
import {bindActionCreators} from 'redux';
import {connect } from 'react-redux';
import styles from  '../../style.styl';


class User extends Component{

    getUserList(){
        return this.props.users.map((user)=>{
            return (
                <li key={user.id}>{user.first} {user.last}</li>
            )
        
            
        })

    }
   render(){
        return(
            <div>
                <h2 className={styles.username}>Username</h2>
                <ul>{this.getUserList()}</ul>
                <hr />
                <h2 className={styles.userdetails}>User Details</h2>
            </div>
        )
   }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(User);
