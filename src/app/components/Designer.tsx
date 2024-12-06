import Image from "next/image";
import Link from "next/link";
import designerData from "../designerData.json"

import { Designer } from "../typeDefinitions";

// const designerData = require('../designerData.json');
const designers : Designer[] = designerData.map((designer: Designer) =>
  <Link href={`/designers/${designer.id}`} key={"designer"} className="flex gap-5 mt-3">
    <Image src={`/headshots/${designer.imageURL}`} alt="headshot" width={200} height={200}/>
    <div className="flex flex-col gap-5">
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
      <div  className="flex gap-5">
        {designer.socials.map((social) =>
          <a key={"designer"} href={social.link}>
            <Image src={`/icons/${social.platform}.png`} alt="socials-icon" width={50} height={50}></Image>
          </a>
        )}
      </div>
    </div>
  </Link>
);

function Designer() {
  return (
    <div>
      {designers}
    </div>
  );
}

export default Designer;