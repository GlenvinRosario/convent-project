import Image from "next/image";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Dharma Jyothi Social Centre was established in 1981 under the
          inspiring leadership of Sr. Maria Goretti.
        </p>
        <p>
          The centre focuses on education, women empowerment, health,
          environment and social development.
        </p>
      </div>

      <div className="about-image">
        <Image
          src="/aboutUs.png"
          alt="About Dharma Jyothi"
          width={500}
          height={350}
        />
      </div>
    </section>
  );
}
