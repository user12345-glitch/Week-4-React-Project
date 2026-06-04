import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      <h1>All submitted contact form messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div>
          {messages.map((msg) => (
            <div key={msg.id}>
              <p>Name: {msg.name}</p>
              <p>Email: {msg.email}</p>
              <p>Message: {msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}