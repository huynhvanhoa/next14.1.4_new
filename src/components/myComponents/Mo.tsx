import "./modalStyles.css";

function Modal({ children, isOpen, handleClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <button onClick={handleClose} className="close-btn">
        Close
      </button>
      <div className="modal-content">{children}</div>
    </div>
  );
}
export default Modal;
