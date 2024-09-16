'use client'

import Button from '@/components/Button'
import ActionCard from '@/components/Cards/ActionCard'
import InvoiceCard from '@/components/Cards/InvoiceCard'
import SingleActivity from '@/components/Cards/SingleActivity'
import SingleInvoice from '@/components/Cards/SingleInvoice'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);



  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className="w-full flex">
      <Sidebar />

      <div className="w-10/12 bg-[#F5F6FA] h-full pb-10 px-10 pt-8 ml-[17%]">
        <Header />

        <div className="flex justify-between items-center pt-10">
          <h4 className="font-semibold text-3xl tracking-wide">Invoice</h4>

          <div className=" flex space-x-10">
            <Button
              onClick={toggleModal}
              className="border-[#E3E6EF] border-[1px] bg-white w-[15rem] py-5 text-[#697598] tracking-widest font-neueMedium text-base uppercase  "
              text="see what’s new"
            />
            <Button
              className="bg-secondary text-white w-[15rem] py-5 tracking-widest font-neueMedium text-base uppercase "
              text="create"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 pt-10">
          <InvoiceCard
            status="Total Paid"
            num="1,222"
            amount="$4,120,102."
            decimal="76"
            className="bg-[#B6FDD3]"
          />
          <InvoiceCard
            status="Total overdue"
            num="13"
            amount="$23,000."
            decimal="13"
            className="bg-[#FFB7BD]"
          />
          <InvoiceCard
            status="Total draft"
            num="08"
            amount="$12,200."
            decimal="00"
            className="bg-[#D9D9E0]"
          />
          <InvoiceCard
            status="Total unpaid"
            num="06"
            amount="$87,102."
            decimal="00"
            className="bg-[#F8E39B]"
          />
        </div>

        <div className="pt-10 tracking-widest flex space-x-2 justify-between items-center">
          <h3 className="font-neueLight font-semibold text-[20px]">
            Invoice Actions
          </h3>{' '}
          <div className="w-10/12 h-[0.8px] bg-white"></div>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-6 ">
          <ActionCard
            icon="/dollar.svg"
            title="Create New Invoice"
            subtitle="Create new invoices easily"
            className=" bg-secondary"
            name="invoice"
          />
          <ActionCard
            icon="/invoice_settings.svg"
            title="Change Invoice settings"
            className=" bg-white"
            subtitle="Customise your invoices "
          />
          <ActionCard
            icon="/customer_list.svg"
            title="Manage Customer list"
            className=" bg-white"
            subtitle="Add and remove customers "
          />
        </div>

        <div className="flex gap-8 mt-6">
          <div className="w-7/12 bg-white  p-8  rounded-[40px]">
            <div className="flex justify-between items-center">
              <h4 className="font-neueMedium text-[20px] text-[#1F1F23] tracking-wide">
                Recent Invoices
              </h4>

              <Button
                className="border-[#E3E6EF] border-[0.8px] bg-white w-[15rem] py-5  text-secondary text-xs font-neueMedium tracking-wider uppercase "
                text="View All invoices"
              />
            </div>

            <div>
              <p className="uppercase font-neueMedium font-semibold text-xs tracking-wider text-[#1F1F23] pt-4">
                today - 27th November, 2022
              </p>

              <div className="p-8 tracking-wider space-y-8">
                <SingleInvoice status="PAID" />
                <SingleInvoice status="OVERDUE" />
              </div>
            </div>
            <div>
              <p className="uppercase font-neueMedium font-semibold text-xs tracking-wider text-[#1F1F23] pt-2">
                8th december, 2022
              </p>

              <div className="p-8 tracking-wider space-y-8">
                <SingleInvoice status="DRAFT" />
                <SingleInvoice status="PENDING PAYMENT" />
                <SingleInvoice status="PAID" />
              </div>
            </div>
          </div>
          <div className="w-5/12 bg-white rounded-[40px] p-8">
            <div className="flex justify-between items-center">
              <h4 className="font-neueMedium text-[20px] text-[#1F1F23] tracking-wide">
                Recent Activities
              </h4>

              <Button
                className="border-[#E3E6EF] border-[0.8px] bg-white w-[7rem] py-5  text-secondary text-xs font-neueMedium tracking-widest uppercase "
                text="View All"
              />
            </div>

            <div className="space-y-5 pt-4">
              <SingleActivity
                title="Invoice creation"
                date="Yesterday, 12:05 PM"
                type="Created invoice"
                subtitle="00239434/Olaniyi Ojo Adewale"
              />
              <SingleActivity
                title="Invoice creation"
                date="Yesterday, 12:05 PM"
                type="Created invoice"
                subtitle="00239434/Olaniyi Ojo Adewale"
              />
              <SingleActivity
                title="Invoice creation"
                date="Yesterday, 12:05 PM"
                type="Created invoice"
                subtitle="00239434/Olaniyi Ojo Adewale"
              />{' '}
              <SingleActivity
                title="Invoice creation"
                date="Yesterday, 12:05 PM"
                type="Created invoice"
                subtitle="00239434/Olaniyi Ojo Adewale"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </div>
  )
}
