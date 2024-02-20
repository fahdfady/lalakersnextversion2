import Fixture from "@/components/Fixture";
import prisma from "@/lib/prisma";

export default async function Fixtures() {
    const fixtures: Match[] = await prisma.match.findMany({
        where: { status: "fixture" },
        orderBy: { date: "asc" }
    })

    return (
        <section>
            <div className="max-w-screen-md mx-auto">
                {fixtures.map((game) => (
                    <Fixture key={game?.id} {...game} />
                ))}
            </div>
        </section>
    )
}