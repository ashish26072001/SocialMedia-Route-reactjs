import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        <Outlet />

        <Footer></Footer>
      </div>
    </div>
  </PostListProvider>

}
export default App;
