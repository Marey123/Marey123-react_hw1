import React from "react";
import PropTypes from "prop-types";
import "./profile.css";


function Profile({name,tag,location,avatar,stats}){
    return (
    
    <div className="profile">
      <div className="description">
        <img
          src= {avatar}
          alt="Аватар пользователя"
          className="avatar"
        />
        <p className="name_1">Name: {name}</p>
        <p className="tag">TagName: {tag}</p>
        <p className="location">Location:{location}</p>
      </div>
      <ul className="first_stats">
     <li>
           <span className="label_1">Followers: </span>
           <span className="quantity">{stats.followers}</span>
         </li>
         <li>
           <span className="label_1">Views: </span>
           <span className="quantity">{stats.views}</span>
         </li>
         <li>
           <span className="label_1">Likes: </span>
           <span className="quantity">{stats.likes}</span>
         </li>
         </ul>
    </div>
    );
    }
    Profile.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.objectOf(PropTypes.number)
      }
      
     

export default Profile;