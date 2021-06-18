import React from "react";
import ReactDOM from "react-dom";
import Users from "./json/user.json";
import App from "./App";
import statisticalData from "./json/statistical-data.json"
import friendsInf from "./json/friends.json"
import transactionData from "./json/transactions.json"

ReactDOM.render(
<App
      MyProfile={Users}
      StatisticalData={statisticalData}
      friendsData={friendsInf}
      TransactionData={transactionData}
    />,
    document.getElementById('root')
);
