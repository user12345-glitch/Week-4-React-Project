import Nav from "./Nav";
import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1>🌍 Discover the World</h1>

          <Nav />
        </div>
      </div>
    </header>
  );
}