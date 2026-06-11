import Card from "../components/Card";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
      
        <p>
          Whether you're planning your next trip, researching a destination, or
          simply curious about different cultures, Country Explorer brings
          global information together in one place.
        </p>
      </section>

      <Card
        title="✈️ Travel Planning"
        description="Find important information about countries before your next journey. View capitals, regions, population figures, and national flags to help you better understand your destination."
      />

      <Card
        title="📊 Global Statistics"
        description="Access country population data and regional classifications to gain a broader understanding of demographic and geographic trends around the world."
      />

      <Card
        title="🌎 Explore by Region"
        description="Discover countries from Africa, Europe, Asia, the Americas, and Oceania. Compare countries across regions and learn about their unique characteristics."
      />

      <Card
        title="🎓 Educational Resource"
        description="Students, teachers, and researchers can use Country Explorer as a quick reference tool for geography projects, classroom activities, and academic research."
      />

      <Card
        title="🔍 Quick Search"
        description="Instantly search for countries and access reliable information in seconds through an intuitive and easy-to-use interface."
      />

      <Card
        title="💬 Community Feedback"
        description="Have a suggestion or notice something missing? Use our contact page to share feedback and help improve the platform for everyone."
      />

      <section className="featured-section">
        <h2>Featured Regions</h2>

        <div className="region-grid">
          <div className="region-card">
            <h3>Africa</h3>
            <p>
              Explore diverse nations, cultures, wildlife, and growing
              economies across the African continent.
            </p>
          </div>

          <div className="region-card">
            <h3>Europe</h3>
            <p>
              Discover historic countries, major capitals, and some of the
              world's most visited destinations.
            </p>
          </div>

          <div className="region-card">
            <h3>Asia</h3>
            <p>
              Learn about the world's largest continent and its rapidly growing
              populations and economies.
            </p>
          </div>

          <div className="region-card">
            <h3>Americas</h3>
            <p>
              From North America to South America, explore a wide variety of
              countries and cultures.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <h2>Platform Highlights</h2>

        <div className="stats-grid">
          <div>
            <h3>250+</h3>
            <p>Countries & territories</p>
          </div>

          <div>
            <h3>5</h3>
            <p>Global regions</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Online access</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Cloud hosted</p>
          </div>
        </div>
      </section>
    </main>
  );
}