import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./LoginForm.module.css"

const LoginForm = (props) => {
    console.log("RERENDER")
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name="login" component="input"/>
            </div>
            <div>
                <Field placeholder="Password" type="password" name="password" component="input"/>
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox"/>remember me
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "Login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login