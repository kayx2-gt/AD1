//home.jsx
import React, { useEffect, useState } from "react";
import GenerateLink from "../Components/GenerateLink";
import Message from "../Components/Message";
import Inbox from "../Components/Inbox"; // ✅ import inbox component

function Home() {
  const [greeting, setGreeting] = useState("");
  const [username, setUsername] = useState("User");
  const [showComponent, setShowComponent] = useState(null); // "generate", "message", or "inbox"

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening"
    );

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.userId) {
      fetch(`http://localhost:3001/api/user/${storedUser.userId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch user");
          return res.json();
        })
        .then((data) => setUsername(data.username))
        .catch(() => {
          setUsername(storedUser.username || "User");
        });
    }
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>
        {greeting}, {username}!
      </h1>
      <p>What would you like to do?</p>

      {/* ✅ Buttons for navigation */}
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => setShowComponent("message")}
          style={{ marginRight: "1rem", padding: "10px 20px" }}
        >
          Send Anonymous Message
        </button>

        <button
          onClick={() => setShowComponent("generate")}
          style={{ marginRight: "1rem", padding: "10px 20px" }}
        >
          Generate Link
        </button>

        <button
          onClick={() => setShowComponent("inbox")}
          style={{ padding: "10px 20px" }}
        >
          View Inbox
        </button>
      </div>

      {/* ✅ Display selected component */}
      <div className="user-msg" style={{ marginTop: "2rem" }}>
        {showComponent === "generate" && <GenerateLink />}
        {showComponent === "message" && <Message />}
        {showComponent === "inbox" && <Inbox />}
      </div>
    </div>
  );
}

export default Home;
