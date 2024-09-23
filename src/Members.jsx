import Header from "./components/Header";

let memberData = require('./memberData.json');
const members = memberData.map((member) =>
  <li>
    <img src={member.imageURL} alt="headshot" className="member-headshot"/><br/>
    {member.firstName} {member.lastName}<br/>
    {member.location}<br/>
    {member.blurb}<br/>
    Favorite Project: {member.favoriteProject}
  </li>
);

function Members() {
  return (
    <div className="members-page">
      <Header/>
      <h1>Meet the Team</h1>
      <ul>{members}</ul>
    </div>
  );
}

export default Members;
