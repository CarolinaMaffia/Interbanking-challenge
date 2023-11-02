import './Modal.scss';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {

    if(!isOpen) {
        return null
    }

    return (
        <div className="modal-background">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    x
                </button>
                {children}
            </div>
        </div>
    )
};

export default Modal;