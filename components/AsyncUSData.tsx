"use client";

import { useEffect, useState } from "react";

export default function AsyncDemo() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchData(isRefresh = false) {
    try {
      if (isRefresh) {
        setRefreshing(true);
        setLoading(true);
      } else {
        setLoading(true);
      }

      setError(null);

      const res = await fetch(
        "https://restcountries.com/v3.1/name/united states"
      );

      await new Promise((r) => setTimeout(r, 3000));

      if (!res.ok) {
        throw new Error(`fetch failed`);
      }

      const json = await res.json();
      setData(json[0]);
    } catch (err: any) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const showSkeleton = loading;

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-4xl font-bold">
            U.S. Country Information
          </h1>

          <button
            onClick={() => fetchData(true)}
            disabled={refreshing || loading}
            aria-busy={refreshing}
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {refreshing ? "Refreshing…" : "Refresh Data"}
          </button>
        </div>

        {showSkeleton && (
          <div className="space-y-4">
            <div className="h-6 w-48 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse" />
            <div className="h-40 w-56 bg-gray-300 rounded animate-pulse" />
          </div>
        )}

        {error && !loading && (
          <div
            role="alert"
            className="bg-red-100 text-red-700 p-4 rounded mb-6"
          >
            Error: {error}
          </div>
        )}

        {data && !loading && (
          <div className="space-y-4 animate-premiumFadeIn">
            <img
              src={data.flags.png}
              alt="USA Flag"
              className="w-56 rounded shadow"
            />

            <p>
              <strong>Country:</strong> {data.name.common}
            </p>

            <p>
              <strong>Official Name:</strong> {data.name.official}
            </p>

            <p>
              <strong>Capital City:</strong> {data.capital[0]}
            </p>

            <p>
              <strong>Region:</strong> {data.region}
            </p>

            <p>
              <strong>Population:</strong>{" "}
              {data.population.toLocaleString()}
            </p>

            <p>
             <strong>Currency:</strong>{" "}
            {(Object.values(data.currencies) as any[])[0]?.name}
             </p>

            <p>
              <strong>Time Zone:</strong> {data.timezones[0]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}