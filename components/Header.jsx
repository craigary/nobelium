'use client'

import Logo from '@/components/Logo'
import { Button } from '@nextui-org/react'
import { IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <div className="h-16 md:hidden sticky z-[110] top-0">
        <div className="h-full px-4 border border-b flex items-center justify-between ">
          <Logo />
          <Button
            isIconOnly
            color="primary"
            size="sm"
            radius="md"
            variant="flat"
            aria-label="Like"
            onPress={toggleDrawer}
          >
            <IconMenu2 />
          </Button>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        lockBackgroundScroll
        style={{
          height: 'calc(100% - 4rem)',
          top: '4rem'
        }}
        enableOverlay={false}
        className="!shadow-none"
        customIdSuffix="nobelium-drawer"
      >
        {children}
      </Drawer>
    </>
  )
}

export default Header
