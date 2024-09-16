type prop = {
  status: string
}

const SingleInvoice = ({ status }: prop) => {
  return (
    <div className="flex justify-between ">
      <div className="w-full text-sm text-[#373B47]">
        <p className=" font-neueMedium ">Invoice -</p>
        <p className="font-neueLight  font-semibold ">1023494 - 2304</p>
      </div>

      <div className="w-full flex justify-center ">
        <div>
          <p className="text-[#666F77] text-[10px] uppercase font-neueLight">
            Due date
          </p>
          <p className="text-sm font-neueMedium  font-semibold text-[#697598] pt-1">
            May 19th, 2023
          </p>
        </div>
      </div>
      <div className="w-full  flex justify-end ">
        <div className="">
          <p className="text-[#373B47] font-neueMedium text-end">
            {' '}
            $1,311,750.12
          </p>
          <div className="flex justify-end">
            <p
              className={`text-[9px] uppercase font-neueMedium bg-[#E6FFF0] inline-flex text-end py-1.5 mt-2 rounded-[18px]  border-[0.1px] ${
                status === 'PAID'
                  ? 'text-[#129043] border-[#12904333] px-2'
                  : status === 'OVERDUE'
                  ? 'text-[#FF5663] bg-[#FFF4F5] border-[#FF566333] px-6 '
                  : status === 'PENDING PAYMENT'
                  ? 'text-[#D98F00] bg-[#FFF8EB] border-[#D98F0033] px-6'
                  : status === 'DRAFT'
                  ? 'text-[#373B47] bg-[#F6F8FA] border-[#373B4733] px-6'
                  : ''
              }`}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleInvoice
