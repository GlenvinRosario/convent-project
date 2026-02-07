import React from "react";
import "./NewsEvents.css";
import Image from "next/image";
import Link from "next/link";

const dummyData = [
  {
    id: 1,
    title: "Annual Newsletter 2023–2024",
    image: "/annualNews.png",
    link: "#",
  },
  {
    id: 2,
    title: "Prthiba E Magazine 2019",
    image: "/annualNews.png",
    link: "#",
  },
  {
    id: 3,
    title: "Prthiba E Magazine 2018",
    image: "/annualNews.png",
    link: "#",
  },
];

const NewsEvents = () => {
  return (
    <main className="news-page">
      {/* Banner */}
      <section className="news-banner">
        <div className="news-banner-content">
          <h1>News and Events</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="news-breadcrumb">
        <Link href="/">Home</Link>
        <span> / </span>
        <span>News & Events</span>
      </div>

      {/* Grid */}
      <section className="news-section">
        <div className="news-grid">
          {dummyData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="news-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="news-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <h3 className="news-title">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NewsEvents;
