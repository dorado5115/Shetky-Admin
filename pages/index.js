import { useUser } from "@auth0/nextjs-auth0";
import { Login } from "../components";
import Router from "next/router";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (user) {
    //redirect to /students
    Router.push("/students");
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}
