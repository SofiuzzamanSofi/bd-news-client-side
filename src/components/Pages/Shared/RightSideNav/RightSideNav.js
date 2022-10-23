import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaDiscord, FaApple, FaWhatsapp, FaCreativeCommonsShare } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const RightSideNav = () => {

    const { popUpGoogleLogin } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        popUpGoogleLogin(googleProvider)
            .then(reselt => {
                const user = reselt.user;
                console.log("google pop up sign in ok:", user);
            })
            .catch(error => {
                console.log("google pop up error:", error);
            })
    }


    return (
        <div>
            <div className='mb-4'>
                <ButtonGroup vertical >
                    <Button className='mb-3 ' onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle /> Sign in with Google</Button>
                    <Button variant="outline-dark"><FaGithub /> Login with github</Button>
                </ButtonGroup>
            </div>
            <div>
                <h4>Find us on.</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaGoogle /> Google</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaApple /> Apple</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaGithub /> Github</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaLinkedin /> LInked In</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaDiscord /> Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-3' ><FaCreativeCommonsShare /> Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;