import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    <div className="modal-background">
      <section className="modal-main">
        {props.children}
        <button className="close" type="button" onClick={props.onClose}>
          Close
        </button>
      </section>
    </div>;
  }
}
