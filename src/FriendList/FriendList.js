import React from "react";
import PropTypes from "prop-types";
import "./Friend.css"

FriendList.propTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          avatar: PropTypes.string.isRequired
        })
      )
}


function FriendList({friends}){
   return (
    
   <ul className ="friend-list">
  {friends.map(({avatar,name,isOnline,id})=>
  <li className="item" key ={id}>
  {isOnline ? ( <span className="status-online">online</span>) : ( <span className="status-offline">offline</span>)}
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li> )}
</ul>

   );
}


export default FriendList;

