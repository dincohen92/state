import Image from "next/image";
import memberData from "../memberData.json"

type Member = {
  id: string,
  firstName: string,
  lastName: string,
  imageURL: string,
  location: string,
  roles: string[],
  blurb: string,
  socials: Socials[]
};

type Socials = {
  platform: string,
  link: string
}

// const memberData = require('../memberData.json');
const members = memberData.map((member: Member) =>
  <div key={"member"} className="flex gap-5 mt-3">
    <Image src={`/headshots/${member.imageURL}`} alt="headshot" width={300} height={300}/>
    <div className="max-w-96 flex flex-col gap-5">
      <div className="flex gap-5 align-bottom">
        <h3 className="text-4xl">{member.firstName} {member.lastName}</h3>
        <p>{member.location}</p>
      </div>
      <div  className="flex gap-5">
        {member.roles.map((role) =>
          <div key={"role"}>
            {role}
          </div>
        )}
      </div>
      <p>{member.blurb}</p>
      <div  className="flex gap-5">
        {member.socials.map((social) =>
          <a key={"member"} href={social.link}>
            <Image src={`/icons/${social.platform}.png`} alt="socials-icon" width={50} height={50}></Image>
          </a>
        )}
      </div>
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