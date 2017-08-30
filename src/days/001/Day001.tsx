import * as React from 'react';
import './001.scss';

import Options from './Options';
import Signup from './Signup';
import Signin from './Signin';

class Day001 extends React.Component<{}, {}> {

    signup: boolean = false;
    signin: boolean = false;

    constructor(props: Object) {
        super(props);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.state = {signup: false, signin: false};
    }

    handleSignUpClick() {
        this.setState({signup: true});
    }

    handleSignInClick() {
        this.setState({signin: true});
    }

    render() {
        return (
            <div>
                <section>
                    <button>Sign Up</button>
                    <button>Login</button>
                </section>
                <section className="sign-up">
                    {!this.signup && !this.signin &&  <Options />}
                    {this.signup && <Signup />}
                    {this.signin && <Signin />}
                </section>
            </div>
        );
    }
}

export default Day001;