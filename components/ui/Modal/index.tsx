import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalWindow, CloseModalButton } from './styles';

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  children: any;
}

export default function Modal({ children, isOpen, closeModal }: IModal) {
  const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'));

  if (!isOpen || !modalRef.current) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWindow>
        <CloseModalButton onClick={closeModal}>close</CloseModalButton>
        {children}
      </ModalWindow>
    </ModalOverlay>,
    modalRef.current,
  );
}
