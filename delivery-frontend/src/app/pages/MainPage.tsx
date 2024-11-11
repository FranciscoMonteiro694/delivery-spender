"use client"

import { signIn, useSession } from 'next-auth/react';
import Calendar from '../components/Calendar';
import CurrentCost from '../components/CurrentCost';
import './MainPage.css';

const MainPage = () => {
  const {data: session} = useSession();

  return (
   <>
   {session ? (<div className="main-div">
        {/* Current Total Cost */}
        <div className="costs-div">
        <CurrentCost/>
        {/* Current Month Cost */}
        <CurrentCost/>
        </div>
        <br></br>
        {/* Calendar */}
        <div className="calendar-div">
            <Calendar/>
        </div>
    </div>) : (<>
    <h1> Not logged in</h1> 
    <button onClick={() => signIn("google")}>Sign In With Google</button>
    </>)}
  
    </> 
  );
}

export default MainPage;
