import "./App.css";
import PostList from "./componets/PostList";
import CreatePost from "./componets/CreatePost";
import Footer from "./componets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componets/header";
import Sidebar from "./componets/Sidebar";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content ">
          <Header></Header>
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
