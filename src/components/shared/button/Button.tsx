import React from 'react'

type Props = {
  text: string,
  type: 'button' | 'submit' | 'reset'
  disabled: boolean,
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) =>  void,
  isFeteching?: boolean
}
 
const Button = ({
  text,
  type,
  disabled,
  handleClick,
  isFeteching
}: Props) => {
  return (
    <>
    <button
    type={type}
    disabled={disabled}
    onClick={handleClick}
    >
      {text}
    </button>
    </>
  )
}

export default Button
