import { PropsWithChildren, ReactNode } from "react";

import useCustomRouter from "@/router";

function App({ children }: PropsWithChildren<any>): ReactNode {
  return useCustomRouter();
}

export default App;
