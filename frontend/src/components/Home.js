import React from 'react';

export default function Home() {
    return (
        <div className="home">
          {/* card */}
          

            return (
              <div className="card">
                {/* card header */}
                <div className="card-header">
                  <div className="card-pic"></div>
                  <h5> eyyqj</h5>
                </div>
                {/* card image */}
                <div className="card-image">

                </div>
    
                {/* card content */}
                <div className="card-content">
                    <span className="material-symbols-outlined material-symbols-outlined-red"> favorite </span>
                    <span className="material-symbols-outlined"> favorite</span>
                  <p>Likes</p>
                  <p>h </p>
                  <p style={{ fontWeight: "bold", cursor: "pointer" }} > View all comments
                  </p>
                </div>
    
                {/* add Comment */}
                <div className="add-comment">
                  <span className="material-symbols-outlined">mood</span>
                  <input type="text"placeholder="Add a comment"/>
                  <button className="comment" > Post </button>
                </div>
              </div>
            );
       
    
          {/* show Comment */}
          {(
            <div className="showComment">
              <div className="container">
                <div className="postPic">
                </div>
                <div className="details">
                  {/* card header */}
                  <div
                    className="card-header"
                    style={{ borderBottom: "1px solid #00000029" }}
                  >
                    <div className="card-pic">
                      <img
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                    <h5>rgrh</h5>
                  </div>
    
                  {/* commentSection */}
                  <div className="comment-section" ></div>
    
                  {/* card content */}
                  <div className="card-content"> </div>
    
                  {/* add Comment */}
                  <div className="add-comment">
                    <span className="material-symbols-outlined">mood</span>
                    <input  type="text" placeholder="Add a comment"  />
                    <button className="comment">Post</button>
                  </div>
                </div>
              </div>
              <div className="close-comment">
              </div>
            </div>
          )}
        </div>
      );
} 