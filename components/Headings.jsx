import { cn } from '@/lib/utils'
import { Divider } from '@nextui-org/react'

const Heading = ({ title, children, className }) => {
  return (
    <>
      <div className={cn('py-14 md:py-20', className)}>
        <h1 className="mb-6 w-fit bg-gradient-to-r from-default-500 to-default-900 bg-clip-text text-2xl font-bold text-transparent md:mb-10 md:text-4xl md:leading-[2.75rem]">
          {title}
        </h1>
        {children}
      </div>
      <Divider className="mb-6 md:mb-8" />
    </>
  )
}

export default Heading
