import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../store/session";

const SignUpForm = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    // Redirect if you are logged in
    const sessionUser = useSelector(state => state.session.user);
    if (sessionUser) return <Redirect to="/" />;

    const user = {
        email,
        username,
        password
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        return dispatch(signUpUser(user)) // catch errors later

    }

    return(
        <>
            <h1>Sign Up</h1>
            <ul>
                

            </ul>

            <form onSubmit={handleSubmit}>
                <label>Email
                    <input
                        type="text"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                        required>
                    
                    </input>
                </label>
                <label>Username
                    <input
                        type="text"
                        value={username}
                        onChange={ e => setUsername(e.target.value) }
                        required>
                    
                    </input>
                </label>
                <label>Password
                    <input
                        type="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                        required>
                    
                    </input>
                </label>

                <button type="submit">Sign Up</button>

            </form>
        </>
    )
}

export default SignUpForm;