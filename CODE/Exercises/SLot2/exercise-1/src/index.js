import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./NamePerson";
import PersonDetails from "./PersonDetails";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import Sort from "./Sort";
import GroupByOccupation from "./GroupByOccupation.js";
import OldestYoungest from "./OldestandYoungest.js";
import AverageAgeByOcc from "./AverageAgeByOcc.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetails />
    <PeopleList />
    <PeopleTable />
    <FirstTeenager />
    <AreAllTeenagers />
    <Sort />
    <GroupByOccupation />
    <OldestYoungest />
    <AverageAgeByOcc />
  </React.StrictMode>
);
