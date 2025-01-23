import "./modalwindow.css";

const Modal = ({ isOpen, onClose, children, func }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        {children}
        <div className="modal-cont">
          <button className="modal-btn modal-btn-exit" onClick={onClose}>
            Отмена
          </button>
          <button
            className="modal-btn modal-btn-yes"
            onClick={() => {
              func(), onClose();
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
