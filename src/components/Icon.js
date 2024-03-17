import React from 'react'
import { Icon } from '@iconify/react'
export function Iconify ({ children }) {
  return (
    <span style={{
      paddingLeft: '4px',
      paddingRight: '10px',
      display: 'flex',
    }}>
        <Icon icon={children} height="24" width="24"></Icon>
    </span>
  )
}