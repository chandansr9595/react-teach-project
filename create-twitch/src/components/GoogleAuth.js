import React from 'react';

class GoogleAuth extends React.Component {

    state = { gauth : null, isSignedIn: null};

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
        this.setState({isSignedIn});
    }

    onSignOutClick = () => {
        this.state.gauth.signOut();
    }

    onSignInClick = () => {
        this.state.gauth.signIn();
    }

    getLoginOrLogOut = () => {
        if(this.state.isSignedIn === null) {
            return "";
        } else if(this.state.isSignedIn) {
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

export default GoogleAuth;