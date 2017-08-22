import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

export const Test = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;


 /*<!--#001 - Sign Up - Hint: Design a sign up page, modal, form, app screen, etc.-->

        <section>
            <button type="button">Sign Up</button>
            <button type="button">Login</button>
        </section>

        <div class="sign-up">

            <h2>Sign up in Seconds</h2>

            <section>
                <form>
                    <div class="form-group">
                        <label for="username">Email</label>
                        <input type="text" name="username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label for="confirm_password">Confirm Password</label>
                        <input type="password" name="confirm_password">
                    </div>
                    <div class="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </section>
            <section class="progress">
                <div></div>
                <div></div>
                <div></div>
            </section>
        </div>*/