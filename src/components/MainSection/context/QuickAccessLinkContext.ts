import { Dispatch, SetStateAction, createContext } from "react";
import { LinkInterface } from "../types/LinkInterface";

export const quickAccessLinkContext = createContext<{
    quickAccessLinks: LinkInterface[],
    setQuickAccessLinks: Dispatch<SetStateAction<LinkInterface[]>>,
}>({
    quickAccessLinks: [],
    setQuickAccessLinks: () => {},
  });
  