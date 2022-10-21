import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import dynamic from "next/dynamic";
// import Modal from "../components/Modal";

const Modal = dynamic(() => import("../components/Modal"), { ssr: false });

export interface IModal {
  title: string;
  message: string;
}

export interface IModalContext {
  modal: IModal;
  showModal(value: IModal): void;
}

export interface IModalProvider {
  children: ReactNode;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IModalProvider) => {
  const [modal, setModal] = useState<IModal>({} as IModal);
  const [open, setOpen] = useState(false);

  const showModal = useCallback((value: IModal) => {
    setModal(value);
    setOpen(true);
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const value = useMemo(() => ({ modal, showModal }), [modal, showModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {open && (
        <Modal
          title={modal.title}
          description={modal.message}
          onClose={onClose}
          open={open}
        />
      )}
    </ModalContext.Provider>
  );
};
