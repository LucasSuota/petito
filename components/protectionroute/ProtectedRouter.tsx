import React, { ReactNode } from "react";

const ProtectedRouter = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default ProtectedRouter;
