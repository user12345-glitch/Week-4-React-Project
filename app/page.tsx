import Card from "../components/Card";

export default function Home() {
  return (
    <main className="page">
      <Card
        title="Welcome"
        description="This is my personal web application built using Next.js."
      />

      <Card
        title="Design"
        description="The application has a modern user interface."
      />

      <Card
        title="React Learning"
        description="The application demonstrates props, components, and state management."
      />
    </main>
  );
}