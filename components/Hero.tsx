import { Image } from '@components/index'

const Hero = () => {
  return (
    <div>
      <h2>Hero</h2>
      <Image src={'/vercel.svg'} width={50} height={50} alt="Hero image" />
    </div>
  )
}

export default Hero
