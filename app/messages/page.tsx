export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main style={{ padding: "20px" }}>
      <h1>All Submitted Contact Form Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>Name:</strong> {msg.name}
              </p>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p>
                <strong>Message:</strong> {msg.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}