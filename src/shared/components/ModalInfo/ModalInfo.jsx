import "./ModalInfo.css";

export const ModalInfo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalII" onClick={onClose}>
      <div className="modalII-content" onClick={(e) => e.stopPropagation()}>
        <span className="closeII-btn" onClick={onClose}>
          &times;
        </span>
        <p className="modalII-title">{children.title}</p>
        <p
          className="modalII-text"
          dangerouslySetInnerHTML={{ __html: children.description }}
        ></p>
        <button className="modalII-btn" onClick={() => onClose()}>
          Назад
        </button>
      </div>
    </div>
  );
};
