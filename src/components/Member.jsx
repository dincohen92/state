import "../index.css"

let memberData = require('../memberData.json');
const members = memberData.map((member) =>
  <div  className="member-card">
    <img src={member.imageURL} alt="headshot" className="member-headshot"/>
    <div className="member-card-details">
      <div>{member.firstName} {member.lastName}</div>
      <div>{member.location}</div>
      <div>{member.blurb}</div>
      <div>Favorite Project: {member.favoriteProject}</div>
    </div>
  </div>
);

function Member() {
  return (
    <div>
      {members}
    </div>
  );
}

export default Member;
