import Image from "next/image";

type PlayerProps = {
  data: Player;
}

const player: React.FC<PlayerProps> = async ({ data }) => {

  return (
    <div
      key={data.id}
      tabIndex={0}
      className="player flex justify-center items-end relative lg:w-[20.5rem] lg:h-[25rem] md:w-[10.5rem] md:h-[16rem] sm:w-[19rem] sm:h-[21rem] w-[8.5rem] h-[13rem] max-w-sm  border rounded-lg shadow bg-[#0c0600] border-gray-700 *:hover:opacity-100 *: focus:opacity-100 ">

      {/*     position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 230px;
    color: #ffa400; */}
      {/* <span className="absolute opacity-0 w-full h-full flex justify-center items-center text-[80px] sm:text-[140px] md:text-[180px] lg:text-[220px]">{data?.id}</span> */}
      <Image
        className="mx-auto object-cover duration-200 ease-in-out"
        src={`/players${data?.image}`}
        width={342}
        height={250}
        quality={80}
        placeholder="blur"
        blurDataURL="https://cdn.nba.com/headshots/nba/latest/1040x760/logoman.png"
        alt={`${data?.firstname} ${data?.nickname} in the lakers jersy`}
      />
      {/* 42004b4a */}
      <div className="layer absolute w-full h-full duration-200 opacity-0 flex items-start">
        {/* 5a0081 00  553e00*/}
        <div className="description text-center lg:px-2 lg:py-4 w-full h-unset max-h-[50%] bg-[#553e00] rounded-t-lg flex flex-col justify-center items-center gap-2 py-1">
          <h2 className="max-md:text-xs">{data?.role}</h2>
          <h1 className=" max-md:text-sm uppercase font-semibold">{data?.firstname} <span className="text-yellow-500 max-lg:block">{data?.nickname}</span></h1>
          <h1 className="max-md:text-xl font-semibold text-yellow-500">{data?.id}</h1>
        </div>
      </div>
    </div>
  )
}

export default player