import prisma from "@/lib/prisma";
import Game from "@/components/Game";
import Banner from "@/components/banner";

export default async function Home() {
  const latestGame: Match[] = await prisma.match.findMany({
    where: { latest: true },
    orderBy: { date: "desc" }
  })

  return (
    <>
      <Banner />

      {latestGame && <Game game={latestGame[0]} />}

      <section className="max-w-5xl mx-auto">
        <div className="section-title"><h2>ACHIEVEMENTS</h2></div>
        <div className="space-y-4">
          <div className="flex flex-wrap">
            <h3>Championship wins</h3>
          </div>
        </div>
      </section>
    </>
  );
}
