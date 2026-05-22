import Card from "../components/Card";

export default function Home() {
  return (
    <main className="page">
      <Card
        title=" Dashboard"
        description="A simple web app built with Next.js that shows live information about countries using the REST Countries API."
      />

      <Card
        title="Design"
        description="The app has a clean, modern look and gives feedback while loading data. It shows a skeleton screen while waiting, displays clear error messages if something goes wrong, and includes a refresh button so users can update the data easily."
      />

      <Card
        title="Objective"
        description="The goal of this project is to show how to fetch data from an API using JavaScript, manage different states like loading and errors, and build reusable components in a structured way using React and Next.js."
      />
    </main>
  );
}