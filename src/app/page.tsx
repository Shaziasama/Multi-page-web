import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Seasons Website</h1>
      <p className="home-description">
        Explore the beauty of all four seasons. Click on your favorite season below!
      </p>
      <div className="season-links">
      

        <Link href="/summer" className="season-card summer">Summer</Link>
        <Link href="/winter" className="season-card winter">Winter</Link>
        <Link href="/autumn" className="season-card autumn">Autumn</Link>
        <Link href="/spring" className="season-card spring">Spring</Link>
      </div>
    </div>
  );
}

