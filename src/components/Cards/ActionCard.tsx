import Image from 'next/image'

type prop = {
  icon: string
  title: string
  subtitle: string
  className?: string
  name?: string
}
const ActionCard = ({ icon, title, subtitle, className, name }: prop) => {
  return (
    <div
      className={`w-full  p-10 rounded-[25px] tracking-wide ${className}`}
    >
      <Image src={icon} width={80} height={100} alt="img" />

      <h3
        className={`text-2xl font-neueMedium pt-2 ${
          name === 'invoice' ? 'text-white' : ' text-[#373B47] '
        }`}
      >
        {title}
      </h3>

      <p
        className={` text-sm  font-neueLight  pt-2 ${
          name === 'invoice' ? 'text-white' : ' text-[#697598] '
        }`}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default ActionCard
