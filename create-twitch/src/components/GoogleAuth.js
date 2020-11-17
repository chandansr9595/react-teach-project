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
                    gauth: window.gapi.auth2.getAuthInstance(),
                    isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get()
                });
                this.state.gauth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.state.gauth.isSignedIn.get()
        })
    }

    getLoginOrLogOut = () => {
        if(this.state.isSignedIn === null) {
            return "";
        } else if(this.state.isSignedIn) {
            return <button 
                onClick={
                    () => {
                        this.state.gauth.signOut();
                    }
            }> Sign Out</button>
        } else {
            return <button
                onClick={
                    () => {
                        this.state.gauth.signIn();
                    }
                }
            >Sign In</button>
        }
    }

    render() {
        return <div>{this.getLoginOrLogOut()}</div>
    }
}

export default GoogleAuth;