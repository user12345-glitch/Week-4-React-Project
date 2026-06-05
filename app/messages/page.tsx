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
    <main className="messages-page">
      <h1>All Submitted Contact Form Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <p>
                <strong>Name:</strong> {msg.name}
              </p>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p>
                <strong>Message:</strong> {msg.message}
              </p>
              <p>
                <strong>Sent:</strong>{" "}
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}