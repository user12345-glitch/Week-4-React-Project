"use client";

import { useState } from "react";

export default function CountryDashboard() {
  const [input, setInput] = useState("kenya");
  const [data, setData] = useState<any>(null);
  const [borders, setBorders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchCountry(name?: string) {
    try {
      const query = (name || input).trim();

      if (!query) {
        setError("Enter a country name");
        return;
      }

      setLoading(true);
      setError(null);
      setBorders([]);

      const res = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(query)}?fullText=true`
      );

      if (!res.ok) {
        throw new Error("Country not found");
      }

      const json = await res.json();
      const country = json[0];

      setData(country);

      if (country?.borders?.length) {
        const borderRes = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`
        );

        if (borderRes.ok) {
          const borderJson = await borderRes.json();
          setBorders(borderJson);
        }
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setData(null);
      setBorders([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-6">
          Country Dashboard
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search country..."
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button
            onClick={() => fetchCountry()}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
            {error}
          </div>
        )}

        {loading && (
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-48 bg-gray-300 rounded" />
            <div className="h-40 w-64 bg-gray-300 rounded" />
          </div>
        )}

        {data && !loading && (
          <div className="space-y-6">

            <img
              src={data?.flags?.png}
              className="w-64 rounded shadow"
              alt="flag"
            />

            <div>
              <p><strong>Country:</strong> {data?.name?.common}</p>
              <p><strong>Official:</strong> {data?.name?.official}</p>
              <p><strong>Capital:</strong> {data?.capital?.[0]}</p>
              <p><strong>Region:</strong> {data?.region}</p>
              <p><strong>Population:</strong> {data?.population?.toLocaleString()}</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Languages</h2>
              <p>
                {data?.languages
                  ? Object.values(data.languages).join(", ")
                  : "N/A"}
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Currencies</h2>
              <p>
                {data?.currencies
                  ? Object.values(data.currencies as any)
                      .map((c: any) => `${c.name} (${c.symbol})`)
                      .join(", ")
                  : "N/A"}
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg">Border Countries</h2>

              {borders.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-2">
                  {borders.map((b) => (
                    <span
                      key={b.cca3}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {b.name.common}
                    </span>
                  ))}
                </div>
              ) : (
                <p>No bordering countries</p>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}