import Fixture from "@/components/Fixture";
import prisma from "@/lib/prisma";

export default async function Fixtures() {
    const fixtures: Match[] = await prisma.match.findMany({
        where: { status: "fixture" },
        orderBy: { date: "desc" }
    })

    return (
        <section>
            <div className="max-w-screen-md mx-auto flex flex-col justify-center items-center">
                {fixtures.map((game) => (
                    <Fixture key={game?.id} {...game} />
                ))}
            </div>
        </section>
    )
}