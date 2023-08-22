import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="The Gourmet Hub" invert={invert}>
          Home Kitchen
          <br />
          Seattle, WA
        </Office>
      </li>
      <li>
        <Office name="The Cozy Commons" invert={invert}>
          My Living Room
          <br />
          Seattle, WA
        </Office>
      </li>
      
    </ul>
  )
}
