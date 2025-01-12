import React from 'react';
import "./Profile.css";

export default function Profie() {
    return (
        <div className="profile">
          {/* Profile frame */}
          <div className="profile-frame">
            {/* profile-pic */}
            <div className="profile-pic"> </div>
            {/* profile-data */}
            <div className="pofile-data">
              <h1>jjtdvk</h1>
              <div className="profile-info" style={{ display: "flex" }}>
                <p>posts</p>
                <p>followers</p>
                <p>following</p>
              </div>
            </div>
          </div>
          <hr
            style={{
              width: "90%",
    
              opacity: "0.8",
              margin: "25px auto",
            }}
          />
          {/* Gallery */}
          <div className="gallery"></div>
        </div>
      );
    }  