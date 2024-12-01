import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import UserInfo from "./components/UserInfo/UserInfo";
import ActionLauncher from "./components/ActionLauncher/ActionLauncher";
import ChatSection from "./components/ChatSection/ChatSection";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <div className="main-content">
            <UserInfo />
            <ChatSection />
          </div>
          <ActionLauncher />
        </div>
      </div>
    </div>
  );
}

export default App;
