function ModalContainer({children, onClose, className}) {
  return (
    <div onClick={(e)=>onClose()} className={`${className} w-screen h-screen fixed z-[999] bg-[rgba(0,0,0,0.5)] flex justify-center content-center items-center py-5`}>{children}</div>
  )
}

export default ModalContainer