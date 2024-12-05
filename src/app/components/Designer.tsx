import Image from "next/image";
import designerData from "../designerData.json"

import { Designer } from "../typeDefinitions";

// const designerData = require('../designerData.json');
const designers : Designer[] = designerData.map((designer: Designer) =>
  <div key={"designer"} className="flex gap-5 mt-3">
    <Image src={`/headshots/${designer.imageURL}`} alt="headshot" width={300} height={300}/>
    <div className="max-w-96 flex flex-col gap-5">
      <div className="flex gap-5 align-bottom">
        <h3 className="text-4xl">{designer.firstName} {designer.lastName}</h3>
        <p>{designer.location}</p>
      </div>
      <div  className="flex gap-5">
        {designer.roles.map((role) =>
          <div key={"role"}>
            {role}
          </div>
        )}
      </div>
      <p>{designer.blurb}</p>
      <div  className="flex gap-5">
        {designer.socials.map((social) =>
          <a key={"designer"} href={social.link}>
            <Image src={`/icons/${social.platform}.png`} alt="socials-icon" width={50} height={50}></Image>
          </a>
        )}
      </div>
    </div>
  </div>
);

function Designer() {
  return (
    <div>
      {designers}
    </div>
  );
}

export default Designer;