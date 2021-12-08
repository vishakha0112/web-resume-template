import React from 'react';
import {Profile} from '../components/Profile';
import {Navbar} from '../components/navbar';
import {Aboutme} from '../components/Aboutme';

export const Resume = () => {
    let resumeStyle={
        display: "flex",
        flexDirection: "row",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }
      return (
        <div  className="bg-black text-light py-3" style={resumeStyle}>
          <Navbar/>
          <Profile/>
          <Aboutme/>
        </div>
      )
}
