import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  interface GithubData {
    avatar_url: string;
    name: string;
    location: string;
    bio: string;
  }
  const [githubData, setGithubData] = useState<GithubData | null>(null);

  axios
    .get("/api/github")
    .then((response) => {
      setGithubData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <h1>Welcome to My WORLD of Full Stack Development</h1>
      {githubData && (
        <div>
          <h2>GitHub Data</h2>
          <img src={githubData.avatar_url} alt="avatar" />
          <p>
            <strong>Name:</strong> {githubData.name}
          </p>
          <p>
            <strong>Location:</strong> {githubData.location}
          </p>
          <p>
            <strong>Bio:</strong> {githubData.bio}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
