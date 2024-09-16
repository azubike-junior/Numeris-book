import Image from 'next/image'

type prop = {
  status: string
  num: string
  amount: string
  decimal: string
  className: string
}

const InvoiceCard = ({ status, num, amount, decimal, className }: prop) => {
  return (
    <div className="bg-white w-full px-10 py-8 rounded-[20px]">
      <Image src={'/inv_icon.svg'} width={38} height={40} alt="icon" />

      <div className='pt-5 tracking-widest flex space-x-2 items-center' >
        <p className='uppercase text-[#697598] font-neueLight text-xs'>{status}</p>
        <div className={` text-[#373B47] font-neueLight font-semibold py-3 rounded-[24px] text-sm px-4 ${className}`}>{num}</div>
      </div>

      <h4 className='text-[28px] pt-3 font-neueLight font-bold tracking-wider'>
        {amount}<span className='text-sm text-[#697598]'>{decimal}</span>
      </h4>
    </div>
  )
}

export default InvoiceCard
