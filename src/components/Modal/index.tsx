import Image from 'next/image'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import Button from '../Button'
import SingleActivity from '../Cards/SingleActivity'
import SingleItem from '../Cards/SingleItem'

type prop = {
  toggleModal: () => void
}

const Modal = ({ toggleModal }: prop) => {
  const [openMore, setOpenMore] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenMore(false)
    }
  }

  useEffect(() => {
    if (openMore) {
      // @ts-expect-error needed to pass an event
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      // @ts-expect-error needed to pass an event
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      // @ts-expect-error needed to pass an event
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openMore])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50 ">
      <div>
        <button
          onClick={toggleModal}
          className="absolute top-14 right-10 mt-2 mr-2 text-gray-500 hover:text-gray-800 bg-white p-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="relative bg-white p-10 rounded-[30px] shadow-lg max-w-[100rem] w-full  h-[80vh] overflow-auto mt-10 ">
        <div className="flex justify-between">
          <div>
            <h4 className="text-3xl font-neueMedium">
              Invoice - 1023494 - 2304
            </h4>
            <p className="text-[#697598] text-base font-neueLight font-semibold tracking-wider pt-2">
              View the details and activity of this invoice
            </p>
          </div>

          <div className=" space-x-6">
            <Button
              onClick={toggleModal}
              className="border-[#E3E6EF] border-[1px] bg-white w-[15rem] py-5 text-secondary font-neueMedium text-base uppercase tracking-widest"
              text="Download as pdf"
            />
            <Button
              className="bg-secondary text-white w-[14rem] py-5 font-neueMedium text-base uppercase tracking-widest"
              text="Send invoice"
            />

            <Button
              className="bg-white  border-[#E3E6EF] border-[1px] px-6 text-[#373B47] py-5 font-neueMedium text-base uppercase tracking-widest"
              text="More"
              onClick={() => setOpenMore(true)}
            />
          </div>
        </div>

        {openMore && (
          <div
            ref={menuRef}
            className="border-[#E3E6EF] bg-white border-[1px] p-8 inline-block absolute right-10 mt-2 rounded-[24px] text-[#697598] space-y-4 font-neueMedium uppercase text-sm tracking-wider w-[16rem] z-50"
          >
            <h3 className=" ">Duplicate invoice</h3>

            <h3 className="">get sharable link</h3>
          </div>
        )}

        <div className="bg-[#F2FBFF] py-2 inline-flex text-[10px] tracking-wider mt-6 px-4 font-neueMedium text-secondary border-[#003EFF33] border-[0.3px] rounded-[20px]">
          PARTIAL PAYMENT
        </div>

        <div className="w-[86%] border-[0.2px] mt-8 p-6 rounded-[22px] -z-10">
          <div className="flex space-x-6 items-center">
            <p className="text-xs uppercase text-[#666F77]">Reminders</p>

            <div className="flex space-x-4">
              <Button
                text="14 days before due date"
                icon
                className="flex space-x-4 items-center text-sm font-neueMedium text-[#373B47] bg-[#E6FFF0] p-3 px-6"
              />

              <Button
                text="7 days before due date"
                icon
                className="flex space-x-4 items-center text-sm font-neueMedium text-[#373B47] bg-[#E6FFF0] p-3 px-6"
              />

              <Button
                text="3 days before due date"
                className="flex space-x-4 items-center text-sm font-neueMedium text-[#373B47]  p-3 px-6 border-[#E3E6EF] border-[0.8px]"
              />

              <Button
                text="14 days before due date"
                className="flex space-x-4 items-center text-sm font-neueMedium text-[#373B47]  p-3 px-6 border-[#E3E6EF] border-[0.8px]"
              />
              <Button
                text="On the due date"
                className="flex space-x-4 items-center text-sm font-neueMedium text-[#373B47]  p-3 px-6 border-[#E3E6EF] border-[0.8px]"
              />
            </div>
          </div>
        </div>

        <div
          onClick={handleClickOutside}
          id="outside"
          className="flex mt-8 space-x-16 "
        >
          <div className="w-7/12 border-[#E3E6EF] border-[0.8px] p-10 rounded-[24px]">
            <div className="bg-[#FCDDEC] w-full  p-8 rounded-[24px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-[#697598] font-neueMedium tracking-wider">
                    SENDER
                  </p>

                  <div className="pt-3 flex space-x-4">
                    <div>
                      <Image
                        src={'/avatar2.svg'}
                        width={60}
                        height={60}
                        alt={'avatar'}
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="font-neueMedium text-[#1F1F23] text-base">
                        Fabulous Enterprise
                      </p>
                      <p className="text-xs font-neueLight tracking-wider text-[#697598]">
                        +386 989 271 3115
                      </p>
                      <p className="text-xs font-neueLight tracking-wider text-[#697598]">
                        1331 Hart Ridge Road 48436 Gaines, MI{' '}
                      </p>
                      <p className="text-xs font-neueLight tracking-wider text-[#697598]">
                        info@fabulousenterise.co
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[#697598] font-neueMedium tracking-wider">
                    CUSTOMER
                  </p>

                  <div className="pt-3 flex space-x-4">
                    <div className="space-y-2">
                      <p className="font-neueMedium text-[#1F1F23] text-base">
                        Olaniyi Ojo Adewale
                      </p>
                      <p className="text-xs font-neueLight tracking-wider text-[#697598]">
                        +386 989 271 3115
                      </p>
                      <p className="text-xs font-neueLight tracking-wider text-[#697598]">
                        info@fabulousenterise.co
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-[#697598] font-neueMedium tracking-wider pt-8">
                  INVOICE DETAILS
                </p>

                <div className="overflow-x-auto pt-2">
                  <table className="min-w-full rounded-lg shadow-lg">
                    <thead>
                      <tr className="text-[10px] text-[#666F77] font-neueLight tracking-wider uppercase">
                        <th className=" py-1 text-left   ">invoice no</th>
                        <th className=" py-1 text-left ">Issue date</th>
                        <th className=" py-1 text-left  ">Due date</th>
                        <th className=" py-1 text-left ">Billing currency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-sm  text-[#1F1F23] font-neueMedium">
                        <td className=" whitespace-nowrap ">1023902390</td>
                        <td className=" whitespace-nowrap">March 30th, 2023</td>
                        <td className=" whitespace-nowrap">May 19th, 2023</td>
                        <td className=" whitespace-nowrap">USD ($)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="pt-6 tracking-widest flex space-x-2 justify-between items-center">
              <h3 className="font-neueMedium text-[20px]">Items</h3>{' '}
              <div className="w-10/12 h-[0.8px] bg-[#E3E6EF]"></div>
            </div>

            <div className="pt-8 space-y-8">
              <SingleItem
                title="Email Marketing"
                subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                count="10"
                firstAmount="$1,500"
                secondAmount="$15,000.00"
              />

              <SingleItem
                title="Video looping effect"
                subtitle=""
                count="6"
                firstAmount="$1,110,500"
                secondAmount="$6,663,000.00"
              />

              <SingleItem
                title="Graphic design for emails"
                subtitle="Tsit voluptatem accusantium  accusantium "
                count="7"
                firstAmount="$2,750"
                secondAmount="$19,250.00"
              />
              <SingleItem
                title="Video looping effect"
                subtitle=""
                count="6"
                firstAmount="$1,110,500"
                secondAmount="$19,250.00"
              />
            </div>

            <div className=" flex justify-end pt-10">
              <div className=" w-7/12 space-y-3">
                <div className="flex justify-between tracking-wider">
                  <p className="text-sm font-neueLight text-[#B7BDCF] uppercase">
                    Subtotal
                  </p>

                  <p className="text-[#373B47] text-lg font-neueLight font-semibold">
                    $6,697,200.00
                  </p>
                </div>
                <div className="flex justify-between tracking-wider">
                  <p className="text-sm font-neueLight text-[#B7BDCF] uppercase">
                    Discount (2.5%)
                  </p>

                  <p className="text-[#373B47] text-lg font-neueLight font-semibold">
                    $167,430.00
                  </p>
                </div>

                <div className="flex justify-between tracking-wider items-center pt-4">
                  <p className="text-lg font-neueMedium text-[#373B47] uppercase">
                    Total amount due
                  </p>

                  <p className="text-[#373B47] text-2xl font-neueMedium">
                    $6,529,770.00
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border-[0.8px] border-[#E3E6EF] p-4 mt-10">
              <p className="text-xs text-[#697598] font-neueMedium tracking-wider  uppercase">
                Payment information
              </p>

              <div className="overflow-x-auto pt-2">
                <table className="min-w-full rounded-lg shadow-lg">
                  <thead>
                    <tr className="text-[10px] text-[#666F77] font-neueLight tracking-wider uppercase">
                      <th className=" py-1 text-left   ">Account name</th>
                      <th className=" py-1 text-left ">account number</th>
                      <th className=" py-1 text-left  ">Ach routing no</th>
                      <th className=" py-1 text-left ">Bank Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm  text-[#1F1F23] font-neueMedium">
                      <td className=" whitespace-nowrap ">1023902390</td>
                      <td className=" whitespace-nowrap">March 30th, 2023</td>
                      <td className=" whitespace-nowrap">May 19th, 2023</td>
                      <td className=" whitespace-nowrap">USD ($)</td>
                    </tr>
                  </tbody>

                  <thead className="">
                    <tr className="text-[10px] text-[#666F77] font-neueLight tracking-wider uppercase">
                      <th className=" py-1 pt-3 text-left ">bank address</th>
                      <th className=" py-1 pt-3 text-left ">account number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm  text-[#1F1F23] font-neueMedium">
                      <td className=" whitespace-nowrap ">1023902390</td>
                      <td className=" whitespace-nowrap">March 30th, 2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#F6F8FA] w-full font-neueLight font-semibold rounded-[20px] p-6 mt-10 tracking-wider">
              <p className="text-[#B7BDCF] text-sm">NOTE</p>
              <p className="text-[#666F77] text-base pt-1">
                Thank you for your patronage
              </p>
            </div>
          </div>

          <div className="w-4/12 ">
            <div className="flex justify-between items-center">
              <h4 className="font-neueMedium text-[20px] text-[#1F1F23] tracking-wide">
                Invoice Activity
              </h4>
            </div>

            <div className="space-y-5 pt-4">
              <SingleActivity
                title="You"
                date="Yesterday, 12:05 PM"
                type="Created invoice"
                subtitle="00239434/Olaniyi Ojo Adewale"
                divider
              />{' '}
              <SingleActivity
                title="You"
                date="Yesterday, 12:05 PM"
                type="Sent invoice "
                subtitle=" 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale"
                divider
              />
              <SingleActivity
                title="Payment Confirmed"
                date="Yesterday, 12:05 PM"
                type="You manually confirmed a partial payment of "
                subtitle="$503,000.00"
                divider
              />{' '}
              <SingleActivity
                title="Payment Confirmed"
                date="Yesterday, 12:05 PM"
                type="Created invoice"
                subtitle="00239434/Olaniyi Ojo Adewale"
                divider
              />
              <SingleActivity
                title="You"
                date="Yesterday, 12:05 PM"
                type="You manually confirmed a partial payment of "
                subtitle="$503,000.00"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
