import { isImageFound } from "@/lib/ImageValidate";
import Image from "next/image";

type Props = {
    game: Match;
}

const Game: React.FC<Props> = async ({ game }) => {

    let oppLogoImg = '/logoplaceholder.png';
    const opponentLogo = await isImageFound(game?.oppLogo);

    if (opponentLogo.status === 200) {
        oppLogoImg = game?.oppLogo
    }

    return (
        <section className="max-w-5xl mx-auto">
            <div className="section-title">
                <h2>Latest game</h2>
            </div>

            <div className="flex flex-col justify-evenly items-center text-center sm:flex-row md:px-5">
                <div className="team w-[220px] flex flex-col justify-center items-center gap-3 md:order-none">
                    <Image src={"/logo.png"}
                        width={100} height={100}
                        alt="Lakers Logo"
                    />
                    <h3 className="uppercase text-lg">los angeles lakers</h3>
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-1 md:gap-4 md:order-5 py-6 sm:py-0">
                    <h3 className="text-stone-400">
                        {game?.status}
                    </h3>
                    <div className="score font-bold text-6xl text-yellow-300 tracking-[.45rem]" aria-describedby="score">
                        <span aria-labelledby={`lakers score`}>{game?.lakerscore}</span>
                        -
                        <span aria-label={`${game?.opp.slice(-1)} score`}>{game?.oppScore}</span>
                    </div>
                    <div className="stadium flex flex-col justify-center items-center">
                        <h4 className="text-stone-50">{game?.stadium}</h4>
                        <h4 className="text-stone-400">{game?.location}</h4>
                    </div>
                </div>
                <div className="team w-[220px] flex flex-col justify-center items-center gap-3 md:order-10">
                    <Image
                        src={oppLogoImg}
                        width={100} height={100}
                        alt={`${game?.opp} Logo`} />
                    <h3 className="uppercase text-lg">{game?.opp}</h3>
                </div>
            </div>
        </section>
    )
}

export default Game