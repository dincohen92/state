import "../index.css"

let memberData = require('../memberData.json');
const members = memberData.map((member) =>
  <div  className="member-card">
    <img src={member.imageURL} alt="headshot" className="member-headshot"/>
    <div className="member-card-details">
      <div className="member-card-details-header">
        <h3>{member.firstName} {member.lastName}</h3>
        <p>{member.location}</p>
      </div>
      <p>{member.blurb}</p>
      <p>Favorite Project: {member.favoriteProject}</p>
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
