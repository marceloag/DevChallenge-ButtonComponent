function Button({title, variant, disabled, startIcon, endIcon, size, color, children}) {

  const baseStyle ="text-gray text-lg inline-block w-auto text-textgray rounded-md px-4 py-2 hover:bg-hovergray cursor-pointer drop-shadow-md";
  const variantStyle = variant != null && !disabled ? `${variant}` : "default";


  const buttonStyle = `${variantStyle} + ${baseStyle}`;

  return (
    <div className={buttonStyle}>
      {children}
    </div>
  )
}

export default Button