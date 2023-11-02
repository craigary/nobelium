import { Button } from '@nextui-org/react'
import { forwardRef } from 'react'

const NavLinkItem = forwardRef(({ onClick, href }, ref) => {
  return (
    <Button color="primary" variant="light" fullWidth ref={ref}>
      Click Me
    </Button>
  )
})

export default NavLinkItem
