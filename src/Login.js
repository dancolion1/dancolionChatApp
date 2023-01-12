import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() { 
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to WebChat</h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>

        <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
           
           <ul className="layout">

          <li>Sign in with Gmail and Create a Chat profile. </li >
          <li>Tilt the phone to landscape Use the Chats Icon<br />at top left to Create a Chat Room</li>
          <li>Add people to the Chat Room with their gmail address<br /> using the type username at the right.</li> 
          <li>Note you must add a User who has <br />already signed in with his email address.</li > 
          <li>You can ask people to send you their <br />address after signing up so you can add them.</li>
          <li>Tilt it back to portrait view and Chat</li>     
          </ul >    
      </div>
   
    </div>
  )
} 

/* <p className="layout">  
Sign in with Gmail and Create a Chat profile
Tilt the phone to landscape Use the Chats Icon <br /> at top left to Create a Chat Room
Add people to the Chat Room with their <br /> gmail address 
Note you must add a User who has already <br /> signed in with his email address
You can ask people to send you their address <br />  after signing up so you can add them 
Happy Chatting with your friends     
</p> 
</div> */
