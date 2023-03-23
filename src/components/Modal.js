import React from "react"
import { closeModal } from "../redux/modalSlice"
import { clearCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux"

const Modal = () => {
  const dispatch = useDispatch()

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
            type="button"
            className="btn confirm-btn"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => dispatch(closeModal())}
            className="btn clear-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
