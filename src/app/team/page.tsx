import Player from "@/components/player";
import prisma from "@/lib/prisma";


export default async function Team() {
    const teamList: Player[] = await prisma.player.findMany();
    return (
        <section>
            <div className="section-title">
                <h2>lake show squad</h2>
                <p>17x champions. get to know your LA Lakers players.</p>
            </div>
            <div className="players flex flex-row flex-wrap justify-center lg:gap-7 md:gap-x-4 md:gap-y-6 gap-2 w-full lg:px-2">
                {teamList && teamList.map((playeritem) => (<Player key={playeritem?.id} data={playeritem} />))}
            </div>
        </section>
    )
}