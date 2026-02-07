"use client";

import Image from "next/image";
import "./OurTeam.css";

export default function OurTeam({
  title,
  name,
  description,
  image,
  reverse = false,
}) {
  return (
    <section className={`person-section ${reverse ? "reverse" : ""}`}>
      <div className="person-text">
        <h2 className="person-title">{title}</h2>
        <p>{description}</p>
        <h4 className="person-name">{name}</h4>
      </div>

      <div className="person-image">
        <Image src={image} alt={name} width={320} height={380} />
      </div>
    </section>
  );
}
