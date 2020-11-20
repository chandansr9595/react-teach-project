import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    state = { gauth : null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "108565118305-pevktdepqt341nqc6gqp19de59j0mn58.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.setState({
                    gauth: window.gapi.auth2.getAuthInstance()
                });
                this.onAuthChange(this.state.gauth.isSignedIn.get());
                this.state.gauth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.state.gauth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignOutClick = () => {
        this.state.gauth.signOut();
    }

    onSignInClick = () => {
        this.state.gauth.signIn();
    }

    getLoginOrLogOut = () => {
        if(this.props.isSignedIn === null) {
            return "";
        } else if(this.props.isSignedIn) {
            return <button 
                onClick={ this.onSignOutClick}> Sign Out</button>
        } else {
            return <button
                onClick={this.onSignInClick}>Sign In</button>
        }
    }

    render() {
        return <div>{this.getLoginOrLogOut()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);