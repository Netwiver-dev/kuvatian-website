import React from "react";
import "../../assets/css/components/News.css";

function News() {
  return (
    <section className="news-events" id="news">
      <h2> News & Events </h2>
      <p> Stay updated with our latest news and upcoming events! </p>

      <div className="news-container">
        <div className="upcomingEvents-section">
          <h3> Upcoming Event </h3>
          <p> International Conference on Women&apos;s Empowerment – November 2024 </p>
          <a href=""> Event details </a>
        </div>

        <div className="latestNews-section">
          <h3> Latest News </h3>
          <p> Kivutian Fraternity Opens New Vocational School in Lubumbashi </p>
          <a href=""> Article </a>
        </div>
      </div>
    </section>
  )
}

export default News;
