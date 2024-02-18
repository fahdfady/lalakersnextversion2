import Image from "next/image";
import prisma from "@/lib/prisma";


export default async function About() {
    const seasonList: Season[] = await prisma.season.findMany()
    return (
        <section className="text-center lg:px-4 px-2">
            <div className="section-title">
                <h1>team history</h1>
                <p>From Minneapolis to Los Angeles: The Lakers’ Legacy of Excellence</p>
                <Image src={'/logo.png'} width={140} height={102} alt="Los Angeles Lakers logo" />
            </div>

            <article className="history max-w-screen-lg mx-auto">
                <div className="section-title">
                    <h2>our history</h2>
                </div>
                <p className="text-sm md:text-lg px-1 md:px-6">The Lakers are one of the most successful and storied franchises in NBA history. They have won <span className="text-yellow-300">17 championships</span>, tied with the <span className="text-green-400">Boston Celtics</span> for the most in the league, and have featured some of the greatest players of all time, such as George Mikan, Jerry West, Wilt Chamberlain, Kareem Abdul-Jabbar, Magic Johnson, Kobe Bryant, and LeBron James. The Lakers began their journey in Minneapolis in 1947, where they won five titles in six years. They moved to Los Angeles in 1960 and continued their dominance with 12 more championships in the following decades. The Lakers have also set many NBA records, such as the longest winning streak (33 games) and the best regular season record (69–13). The Lakers are not just a basketball team, they are a cultural phenomenon that has captivated fans around the world</p>
            </article>

            <hr className="w-6/12 mx-auto my-4 text-gray-400" />

            {seasonList && seasonList.map((season) => (
                <>
                    <article className="max-w-screen-xl mx-auto text-start" tabIndex={0} key={season?.id}>
                        <div className="section-title">
                            <h2 className="">the {season?.year} season</h2>
                            <p>{season?.title}</p>
                        </div>
                        <div className="flex justify-center flex-wrap gap-2 items-center py-2">
                            <p className="inline max-w-[800px] lg:w-[800px] md:w-[350px] text-sm lg:text-lg md:text-base px-1 lg:px-6 md:px-1">{season?.text}</p>
                            <Image className="inline" src={`/photos/${season?.image}`} width={350} height={373} sizes="(max-width: 768px) 40vw" alt={season?.imageAlt} quality={80} />
                        </div>
                    </article>
                    <hr className="w-10/12 mx-auto my-4 text-gray-700" />
                </>
            ))}

        </section>
    )
}