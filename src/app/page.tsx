import prisma from "@/lib/prisma";
import Game from "@/components/Game";
import Banner from "@/components/banner";

export default async function Home() {
  const latestGame: Match[] = await prisma.match.findMany({
    where: { latest: true },
    orderBy: { createdAt: "desc" }
  })

  return (
    <>
      <Banner />

      {latestGame && <Game game={latestGame[0]} />}

    </>
  );
}
