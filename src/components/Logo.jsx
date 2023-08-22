import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <></>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />

      <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    `}
      </style>

      {/* 'G' */}
      <text
        x="20"
        y="24"
        fontSize="28"
        fontFamily="'Montserrat', sans-serif" 
        className={invert ? 'fill-white' : 'fill-neutral-950'}
      >
        G
      </text>

      {/* 'U' */}
      <text
        x="40"
        y="24"
        fontSize="28"
        fontFamily="'Montserrat', sans-serif" 
        className={invert ? 'fill-white' : 'fill-neutral-950'}
      >
        U
      </text>

      {/* 'S' */}
      <text
        x="60"
        y="24"
        fontSize="28"
        fontFamily="'Montserrat', sans-serif" 
        className={invert ? 'fill-white' : 'fill-neutral-950'}
      >
        S
      </text>
    </svg>
  )
}
