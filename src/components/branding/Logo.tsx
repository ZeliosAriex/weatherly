import PictoIcon from '@/assets/svgs/horizon.svg?react'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <PictoIcon className='w-8 h-8' />
      <span className='text-lg'>Weatherly</span>
    </div>
  )
}

export default Logo
