type prop = {
  title: string
  subtitle: string
  count: string
  firstAmount: string
  secondAmount: string
}

const SingleItem = ({
  title,
  subtitle,
  count,
  firstAmount,
  secondAmount,
}: prop) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-base font-neueLight font-semibold tracking-wider text-[#1F1F23]">
          {title}
        </h3>
        <p className="text-[13px] font-neueLight font-medium text-[#666F77] tracking-wider w-[16rem]">
          {subtitle}
        </p>
      </div>
      <p className="font-neueLight font-medium text-base text-[#1F1F23] text-end w-10 ">{count}</p>
      <p className="font-neueLight font-medium text-base text-[#1F1F23] text-end w-[8rem]">
        {firstAmount}
      </p>
      <p className="font-neueLight font-medium text-base text-[#1F1F23] w-[8rem] text-end">
        {secondAmount}
      </p>
    </div>
  )
}

export default SingleItem
