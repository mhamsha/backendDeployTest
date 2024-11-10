require("dotenv").config()
const express = require("express");
const app = express();
// const port = 3000;

const githubData = {
    "login": "mhamsha",
    "id": 145947871,
    "node_id": "U_kgDOCLL83w",
    "avatar_url": "https://avatars.githubusercontent.com/u/145947871?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mhamsha",
    "html_url": "https://github.com/mhamsha",
    "followers_url": "https://api.github.com/users/mhamsha/followers",
    "following_url": "https://api.github.com/users/mhamsha/following{/other_user}",
    "gists_url": "https://api.github.com/users/mhamsha/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mhamsha/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mhamsha/subscriptions",
    "organizations_url": "https://api.github.com/users/mhamsha/orgs",
    "repos_url": "https://api.github.com/users/mhamsha/repos",
    "events_url": "https://api.github.com/users/mhamsha/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mhamsha/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Hamza Shahzad",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 2,
    "following": 10,
    "created_at": "2023-09-25T02:04:14Z",
    "updated_at": "2024-10-29T12:14:46Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login",(req, res)=>{
    res.send("You are currently not login!")
})
app.get("/check",(req, res)=>{
    res.send("<h1>Welcome to my website!</h1>")
})
app.get("/github", (req, res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
