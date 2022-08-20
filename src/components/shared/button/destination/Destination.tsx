import React from 'react'

type Props = {
  text: string,
}

function Destination({
  text,
}: Props) {
  return (
    <div>{text}</div>
  )
}

export default Destination