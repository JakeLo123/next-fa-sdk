"use client";

import { PropsWithChildren } from "react";

import {
  FusionAuthProvider,
  FusionAuthProviderConfig,
} from "@fusionauth/react-sdk";
import { useCookies } from "next-client-cookies";

const config: FusionAuthProviderConfig = {
  clientId: "e9fdb985-9173-4e01-9d73-ac2d60d1dc8e",
  redirectUri: "http://localhost:3000",
  serverUrl: "http://localhost:9011",
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  onRedirect: (state?: string) => {
    console.log(`Redirect happened with state value: ${state}`);
  },
  scope: "openid email profile offline_access",
};

export default function Providers({ children }: PropsWithChildren) {
  const cookies = useCookies();

  const cookieAdapter = {
    at_exp() {
      return cookies.get("app.at_exp");
    },
  };

  const c = {
    ...config,
    cookieAdapter,
  };

  return <FusionAuthProvider {...c}>{children}</FusionAuthProvider>;
}
