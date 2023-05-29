import React from 'react'
import { Icon } from '@iconify/react'
export function Iconify ({ children }) {
  return (
    <span style={{
      paddingRight: '10px',
      display: 'flex',
    }}>
        <Icon icon={children} height="20" style={{verticalAlign: "-0.35em"}}></Icon>
    </span>
  )
}