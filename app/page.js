import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          Welcome to Real-time Collaborative Cyber Threat Hunting Platform
        </h1>
        <h2>
          we are looking towards tracking down threat targeted to your cyber
          space
        </h2>
        <Link href="/threats" className="btn">
          {" "}
          Start Monitoring
        </Link>
      </div>
    </main>
  );
}
