import { useRef } from "react"

function Modal({ headerLabel, isOpen, onCloseRequested, children }) {
  const dialogRef = useRef(null)

  if (!isOpen) return null

  function handleOverlayClick(e) {
    if (!dialogRef.current) return
    const clickedInsideDialog = dialogRef.current.contains(e.target)
    if (clickedInsideDialog) return
    onCloseRequested()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-lg rounded bg-white p-4 shadow-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onCloseRequested}
            className="rounded px-2 py-1 text-gray-600 hover:bg-gray-100 active:bg-gray-200"
          >
            X
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

export default Modal