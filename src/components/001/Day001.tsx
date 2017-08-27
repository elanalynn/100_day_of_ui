import * as React from 'react';
import './001.scss';

class Day001 extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <section>
            <button type="button">Sign Up</button>
            <button type="button">Login</button>
        </section>
        <section className="sign-up">

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
            <section className="progress">
                <div />
                <div />
                <div />
            </section>
        </section>

      </div>
    );
  }
}

export default Day001;

