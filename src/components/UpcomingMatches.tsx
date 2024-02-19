import prisma from "@/lib/prisma";
import { getTextColor, isImageFound, teamThemeValidate } from "@/lib/validations";
import Image from "next/image";


export default async function UpcomingMatches() {

    const fixtures: Match[] = await prisma.match.findMany({
        where: { status: "fixture" },
        orderBy: { date: "desc" },
        take: 3,
    })


    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3">
                {fixtures.map((match) => (
                    // assign the team theme as a background
                    <div key={match?.id}
                        style={{ backgroundColor: teamThemeValidate(match?.opp), color: getTextColor(teamThemeValidate(match?.opp)) }}
                        className="flex flex-col justify-center items-center gap-2 p-2 border-x-2 border-black"
                    >
                        <Image
                            width={150} height={150}
                            className="h-[150px] object-contain"
                            quality={80}
                            src={match?.oppLogo}
                            alt={`${match?.opp} Logo`}
                        />
                        <h3 className="font-semibold text-lg  uppercase">{match?.opp}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}