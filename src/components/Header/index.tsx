import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-b-[#A1B8FF33] pb-5">
      <h4 className=" font-neueMedium text-2xl uppercase tracking-widest text-[#373B47]">
        Invoice
      </h4>

      <div className="flex space-x-6">
        <div className="bg-white w-[54px] h-[54px] rounded-full flex justify-center items-center">
          <Image src={'/bell.svg'} width={24} height={24} alt="bell" />
        </div>
        <div className="bg-white w-[80px] h-[54px] rounded-full flex justify-center space-x-2 items-center">
          <div className=" bg-secondary w-[36px] h-[36px] rounded-full flex justify-center items-center tracking-wider">
            <span className="text-white font-neueMedium ">KO</span>
          </div>

          <Image src={'/arrow_down.svg'} width={10} height={10} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Header
