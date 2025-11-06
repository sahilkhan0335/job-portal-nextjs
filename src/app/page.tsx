import { getCurrentUser } from "@/features/auth/server/auth.queries";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      <div>
        <h1 className="text-center mt-10 text-4xl">
          Name Login User {user?.name}{" "}
        </h1>
        <h2 className=" text-center mt-2 text-3xl">
          Email Login User {user?.email}{" "}
        </h2>
      </div>
    </>
  );
}
