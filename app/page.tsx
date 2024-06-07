"use client";

import { useFusionAuth } from "@fusionauth/react-sdk";

export default function Home() {
  const { startLogout, userInfo, startLogin, isLoggedIn } = useFusionAuth();

  return (
    <main>
      {isLoggedIn ? (
        <>
          <h1>Welcome {userInfo?.email}</h1>
          <button onClick={startLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Hello, please login</h1>
          <button onClick={() => startLogin("state from login")}>Login</button>
        </>
      )}
    </main>
  );
}
