import Image from 'next/image'


type prop = {
  title: string
  date: string
  type: string
  subtitle: string
  divider?: boolean
}

const SingleActivity = ({title, date, type, subtitle, divider}: prop) => {
  return (
    <div className="flex space-x-4 ">
      <div>
        <Image
          src={'/avatar.svg'}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full "
        />

        
        {divider &&
          <div className=" w-full flex justify-center h-full items-center">
            <div className="h-full w-[0.5px] bg-[#E3E6EF]"></div>
          </div>
        }
      </div>

      <div className="w-full">
        <div>
          <h3 className=" font-neueMedium text-lg tracking-wide">
            {title}
          </h3>
          <span className="text-[#697598] text-sm font-neueLight tracking-wider">
            {date}
          </span>
        </div>

        <div className="bg-[#F6F8FA] w-full mt-2 p-5 rounded-xl">
          <p className="text-sm tracking-wider font-neueMedium">
            <span className="text-[#697598] font-neueLight font-semibold">
              {type}
            </span>{' '}
           {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleActivity
