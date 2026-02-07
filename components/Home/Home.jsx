import "./Homes.css";

export default function HomePage() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="home-hero">
        <h1>Welcome to Vamanjoor Convent</h1>
        <p>
          A place where education meets values, discipline, and compassion —
          shaping young minds for a brighter tomorrow.
        </p>
        <img src="/conventGroup.png" alt="vamnjoor convent" />
      </section>

      {/* ABOUT */}
      <section className="home-about">
        <h2>Nurturing Minds, Building Futures</h2>
        <p>
          Vamanjoor Convent is committed to holistic education that empowers
          students academically, morally, and socially. Guided by strong values
          and dedicated educators, we create a supportive environment where
          every child is encouraged to grow with confidence and purpose.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="home-highlights">
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>Quality Education</h3>
            <p>
              A balanced curriculum focusing on academic excellence and
              practical learning.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Strong Values</h3>
            <p>
              We emphasize discipline, respect, and integrity in everyday
              learning.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Caring Community</h3>
            <p>
              A safe and nurturing environment where students feel supported and
              inspired.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
