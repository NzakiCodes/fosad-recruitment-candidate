import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Initializer from "../../components/initializer";
import { useAuth } from "../../context/authContext";

interface RouteProps {
  children: JSX.Element | JSX.Element[];
}

const GuardRoutes: FC<RouteProps> = ({ children }) => {
  const { auth, initializing } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      if (auth) {
        router.push("/jobs/suggested");
      }
    }
    setIsLoading(false);
  }, [auth, initializing]);

  if (isLoading || !auth) {
    return <Initializer />;
  }
  return <div>{children}</div>;
};

export default GuardRoutes;
