import * as React from 'react';
import './001.scss';
import Progress from './Progress';

class Signup extends React.Component<{}, {}> {
  render() {
    return (
        <div>
            <h2>Sign up in Seconds</h2>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_password" />
                </div>
                <div className="form-group">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <Progress />
        </div>
    );
  }
}

export default Signup;

