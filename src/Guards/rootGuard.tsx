import AuthGaurd from "./AuthGuard";
import React from "react";

const RootGaurd = ({ children }: any) => {
  return <AuthGaurd>{children}</AuthGaurd>;
};

export default RootGaurd;
