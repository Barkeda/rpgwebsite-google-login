import React, {useState} from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import {Button} from './Button';
import {FaBars} from 'react-icons/fa';
// import firebase from 'firebase/compat';
import GoogleLogin from 'react-google-login';
// require('firebase/auth');



const Nav = styled.nav`
height: 60px;
display: flx;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;

const Logo = styled(Link)`
${NavLink}
font-style: italic;
`;
const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 760px){
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 760px){
    display: none;
}
`;


//    export default function App() {
    //    var provider = new firebase.auth.GoogleAuthProvider();

    //  const [user, setUser] = useState(null);

    //  useEffect(() => {
    //     firebase.auth.onAuthStateChanged((user) => {
    //       if (user) {
    //           var uid = user.uid;
    //         console.log('User has signed in');
    //         setUser(uid);
    //       } else {
    //         // User is signed out
    //         console.log('user has not signed in');
    //         setUser(null);
    //       }
    //     });
    // }, [])

    // function signInWithGooglePopup(){
    //     firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //       console.log('User has signed in')
    //     }).catch((error) => {
    //       // Handle Errors here.
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       // The email of the user's account used.
    //       var email = error.email;
    //       // The firebase.auth.AuthCredential type that was used.
    //       var credential = error.credential;
    //       console.log('Errors occurred doing sign in: $(errorCode), $(errorMessage), $(email), $(credential)')
    //     });
    //   }


      export default function App() {

        const [loginData, setLoginData] = useState(
            localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
        );

        const handleFailure = (result) =>{
            alert(result);
        };
        const handleLogin = async(googleData) =>{
           const res = await fetch('/api/google-login',
           {
               method: 'POST',
               body: JSON.stringify({
                   token: googleData.tokenId,
               }),
               headers: {
                   'Content-Type': 'application/json'
               },
           });

           const data = await res.json();
           setLoginData(data);
           localStorage.setItem('loginData', JSON.stringify(data));
        };

        const handleLogout = () =>{
            localStorage.removeItem('loginData')
            setLoginData(null);
        };

    return (
        <Nav>
            <Logo to='/'>RPG Games</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                {loginData ?(
                    <div>
                    <h3>You logged in as {loginData.email}</h3>
                    <button onClick={handleLogout}>Logout</button>
                    </div>
                ) :
                ( <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                ></GoogleLogin>)}
               
                <Button to='/contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    );
}



