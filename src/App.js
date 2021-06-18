import React from "react";
import Profile from "./Profile_component/Profile";
import PropTypes from "prop-types";
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./Transaction/TransactionHistory"
import "./index.css"


App.propTypes = {
  MyProfile: PropTypes.object,
  StatisticalData:PropTypes.array,
  friendsData:PropTypes.array,
  TransactionData:PropTypes.array
}

function App({MyProfile,StatisticalData,friendsData,TransactionData}) {
  let { name, tag, location, avatar, stats} = MyProfile;
  return (
    <>
   
    <Profile
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
        stats={stats}
      />
       <FriendList friends={friendsData} />,
       <Statistics
    title="Upload stats"
    stats={StatisticalData}
  />
 
  <TransactionHistory items={TransactionData} />
     </>

  );}

export default App;
