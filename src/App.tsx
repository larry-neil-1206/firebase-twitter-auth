import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './utils/firebase';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const signInWithTwitter = () => {
    setIsLoading(true);
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("===> success:", result);
      })
      .catch((error) => {
        console.error("===> error:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={() => signInWithTwitter()}>
        Twitter login
      </Button>
    </div>
  );
}

export default App;
