import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  // Default image if user does not have a profile photo
  const picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";
  const navigate = useNavigate();
  const [data, setData] = useState([]); // Posts data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch posts after component mounts
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/signup"); // Redirect to signup if no JWT token
      return;
    }

    // Fetch all posts from the backend
    fetch("http://localhost:5000/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result); // Log fetched posts
        if (Array.isArray(result)) {
          setData(result); // Set posts to state if the result is an array
        } else {
          setData([]); // Ensure data is an empty array if result is not valid
        }
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Set loading to false in case of error
      });
  }, [navigate]);

  return (
    <div className="home">
      {loading ? (
        <div className="loading">
          <p>Loading posts...</p> {/* Loading indicator */}
        </div>
      ) : (
        data.length > 0 ? (
          data.map((posts) => (
            <div className="card" key={posts._id}>
              {/* Card Header */}
              <div className="card-header">
                <div className="card-pic">
                  <img
                    src={posts.postedBy?.Photo ? posts.postedBy.Photo : picLink}
                    alt={posts.postedBy?.name || "User profile picture"}
                  />
                </div>
                <h5>
                  <Link to={`/profile/${posts.postedBy?._id}`}>
                    {posts.postedBy?.name}
                  </Link>
                </h5>
              </div>

              {/* Card Image */}
              <div className="card-image">
                <img src={posts.photo} alt="Post" />
              </div>

              {/* Card Content */}
              <div className="card-content">
                <span className="material-symbols-outlined material-symbols-outlined-red">
                  favorite
                </span>
                <p>{Array.isArray(posts.likes) ? posts.likes.length : 0} Likes</p>
                <p>{posts.body}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-posts">
            <p>No posts available</p> {/* Message when no posts are found */}
          </div>
        )
      )}
    </div>
  );
}
