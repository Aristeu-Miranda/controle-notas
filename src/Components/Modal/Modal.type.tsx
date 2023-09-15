import { ReactNode } from "react";

export type ModalProps = {
    openmodal: boolean;
    closemodal: () => void;
    children: ReactNode;
}