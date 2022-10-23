import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState(null);
    const [accepted, setAccepted] = useState(false);
    const { createNewUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.location?.pathname || "/";



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);


        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('create user ok done', user);

                setError(null);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Pls Verify The email to continue, If not found, pls check spam folder.')
                navigate(from, { replace: true });

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('create user error: ', error);
                setError(errorMessage)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.log('profile updte hoina kare?? :::', error);
            })
    }
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => {
                console.log('email verification jaina kare:', error);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
                <Form.Text className="text-danger">
                    {error || "Use 8 or more characters with a mix of letters, numbers & symbols"}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    name="checkbox"
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accepts <Link to="/terms">Terms & Conditions</Link> </>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>

        </Form>
    );
};
export default Register;