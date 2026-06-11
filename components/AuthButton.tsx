import { auth, signIn, signOut } from "@/auth";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <span className="mr-2">
          Hi, {session.user.name}
        </span>

        <button
          type="submit"
          className="bg-red-500 px-3 py-1 rounded"
        >
          Sign Out
        </button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="bg-green-500 px-3 py-1 rounded"
      >
        Sign In with GitHub
      </button>
    </form>
  );
}