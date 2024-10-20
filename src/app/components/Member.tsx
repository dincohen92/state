import Image from "next/image";
import memberData from "../memberData.json"

type Member = {
  id: string,
  firstName: string,
  lastName: string,
  imageURL: string,
  location: string,
  blurb: string,
  favoriteProject: string
};

// const memberData = require('../memberData.json');
const members = memberData.map((member: Member) =>
  <div key={"member"} className="member-card">
    <Image src={member.imageURL} alt="headshot" className="member-headshot" width={200} height={200}/>
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
