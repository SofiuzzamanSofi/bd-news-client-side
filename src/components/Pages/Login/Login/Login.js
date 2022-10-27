import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';


const Login = () => {

    const [error, setError] = useState(null);

    const { Login, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // form.reset();
        console.log(email, password);

        Login(email, password)
            .then(result => {
                const user = result.user;
                console.log('login ok done', user);
                navigate(from, { replace: true });
                if (user.emailVerified) {
                }
                else {
                    toast.error('kindly check your email, or spam folder to verify ')
                }
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('login faild error', error);
                setError(errorMessage)
                toast.error(errorMessage)
            })
            .finally(() => {
                // setLoading(false);
            })
    }



    return (
        <>
            <Form onSubmit={handleSubmit} className="my-4 py-4">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                    <Form.Text className="text-danger">
                        {error || "We'll never share your email with anyone else."}
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            <p className=''>Don't Have a Account Pls Register.</p>

            <Link to="/register"><Button variant="primary" type="submit"  >Register</Button></Link>

        </>
    );
};

export default Login;