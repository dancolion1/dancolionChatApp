import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} /> 
            <Route path="/" component={Login} />
          </Switch> 
        </AuthProvider> 
      </Router>
    </div>
  )
}

export default App  


// firebase


// import firebase from "firebase/app";
// import "firebase/auth";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const auth = firebase.initializeApp ( {
//     apiKey: "AIzaSyCE52rhj3iqhcSxZDXLFtR27Ku0LayrjO4",
//     authDomain: "webchat-23c0d.firebaseapp.com",
//     projectId: "webchat-23c0d",
//     storageBucket: "webchat-23c0d.appspot.com",
//     messagingSenderId: "300371900673",
//     appId: "1:300371900673:web:c84410202037517990c300",
//     measurementId: "G-CRQ7V272XK"
//   }).auth();



// login

// import React from 'react';
// import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// import "firebase/app";

// import { auth } from '../firebase';
// import firebase from 'firebase/app'; 

// const Login = () => {
//     return ( 
//         <div id='login-page'>
//             <div id='login-card'>
//                 <h2>Welcome to WebChat</h2>
//                 <div
                
//                 className='login-button google'
//                 onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
//                 >
//                     <GoogleOutlined /> Sign in With Google
//                 </div>
//                 <br /> <br />
//                 <div
                
//                 className='login-button facebook'
//                 onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}

//                 >
//                     <FacebookOutlined /> Sign in With Google 
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default Login;


// Chat.js


// import React, {useRef, useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
// import { ChatEngine } from 'react-chat-engine';
// import { auth } from 'firebase';

// import { useAuth } from '../contexts/AuthContext'
// import axios from 'axios';



// const Chats = () => {

//         const history = useHistory();
//         // we use Usehistory and history.push to redirect back to our login page

        

//         const { user } = useAuth();
//        // This is going to populate the user variable 
//          console.log(user);

//          const [loading, setLoading] = useState(true); 

//         const handleLogout = async () => {
//             await auth.signOut(); 

//             history.push('/'); 
//         }
//         const getFile = async (url) => {
//                 const response = await fetch(url);
//                 const data = await response.blob();
//                 // blobs functions are images or any file you want to transfer in binary format

//                 return new File([data], "userPhoto.jpg", { type: 'image/jpeg' }) 
//         }

//  // for useEffects we are using conditional statements to push the person back to login page if he isnt a user or if no user
//  // push back to login
//         useEffect( () => {
//             if (!user) {
//                 history.push('/');
//                 return;
//                 //we using return statement so we dont duve deeper into the code
//             }
//             // what happens if we do get the user using the axios get call too the current
//             // axios first comma checks if the user has been created and second comma is the options objetc

//            axios.get('https://api.chatengine.io/users/me', {
//                headers: {
//                    "project-id" : "35f5344f-ae7c-4c7e-9178-80d2319a9e35",
//                    "user-name": user.email, 
//                    "user-secret": user.uid,
//                     // all this is trying to get the already created User
//                    // the user data is coming from const { user } = useAuth();
//                }
//            })
//            .then (() => {
//                 setLoading (false);
//            })
//            // this is to prompt the user to create a new profile with email, name secret key if he isnt a user yet
//            .catch(() => {
//             let formdata = new FormData();
//             formdata.append('email', user.email);
//             formdata.append('username', user.displayName);
//             formdata.append('secret', user.uid);

//             getFile(user.photoURL)
//             // This is creating two chat engine apis to create or fetch the users and login as a specified user with facebook or gmail account rather than
//             // using create users by chatengine api
//             .then((avatar) => {
//                 formdata.append('avatar', avatar, avatar.name);
//               //post requests are usually used to create some documents
//                axios.post('https://api.chatengine.io/users',
//                formdata, 
//                { headers: {'private-key': "9779a8e2-00c4-4b48-baa3-6b9e28b30569" } } 
//                ) 
//                .then(() => setLoading(false))
//                .catch((error) => console.log(error))
//             })
//            })

//         }, [user, history]);

//     // to solve the issu of the user being undefined once we first load the page on the component that mount 
//     if(!user || loading) return 'Loading...'; 
//     return ( 
//         <div className='chats-page'>
//             <div className='nav-bar'> 
//             <div className='logo-tab'> 
//                     Web Chat
//             </div>
//             <div onClick={handleLogout} className='logout-tab'> 
//                     Logout
//             </div>

//             </div>
//             <ChatEngine 
//                  height= "calc(100vh-66px)"
//                  projectID="35f5344f-ae7c-4c7e-9178-80d2319a9e35"
//                  userName={user.email} 
//                  userSecret={useRef.uid} 
            
//             />
//         </div>
//      );
// }
 
// export default Chats;






// Autocontext.js
// import React, {useContext, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { auth } from '../firebase';

// //Note React Context is one big object that contains data for this case user data and it wraps all of the components like 
// //the login component

// //Creating a context
// const AuthContext = React.createContext();

// //Creating a function to grab that context
// export const useAuth = () => useContext(AuthContext);

// //setting the loading and complete load for users state
// export const AuthProvider = ({ children }) => {
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);
//     const history = useHistory();


//     //grabbing the User from the firebase Authentication setting the user  to the defined useState
//     useEffect( () => {
//          auth.onAuthStateChanged((user) => { 
//             setUser(user);
//             setLoading(false);
//             if(user) history.push('/chats');
//             //conditional statements only if we have the user do we push to the chats navigation 
//          })
//          //the callback user function gives use the user data
//          //history.puch/chats redirects us after login authorization into the chat website using react router Dom 
//     }, [user, history]);

//         const value = { user }; 

//         return (
//             <AuthContext.Provider value={value}>
//                  {!loading && children}
//             </AuthContext.Provider> 
//         );
// }  