import { ReactNode } from "react";

export type UserContextProps = {
    children: ReactNode;
    value?: object;
}