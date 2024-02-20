import prisma from "@/lib/prisma";
import { getTextColor, isImageFound, teamThemeValidate } from "@/lib/validations";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";


export default async function UpcomingMatches() {

    const fixtures: Match[] = await prisma.match.findMany({
        where: { status: "fixture" },
        orderBy: { date: "asc" },
        take: 3,
    })


    return (
        <section className="max-w-6xl mx-auto">
            <SectionTitle title="Upcoming games" />

            <div className="grid grid-cols-3">
                {fixtures.map((match) => {
                    return (
                        // assign the team theme as a background
                        <div key={match?.id}
                            style={{ backgroundColor: teamThemeValidate(match?.opp), color: getTextColor(teamThemeValidate(match?.opp)) }}
                            className="flex flex-col justify-center items-center p-2 border-x-2 border-black text-center"
                        >
                            <Image
                                width={150} height={150}
                                className="h-[150px] object-contain mb-3"
                                quality={80}
                                src={match?.oppLogo}
                                alt={`${match?.opp} Logo`} />
                            <h3 className="font-semibold text-lg uppercase mb-3">{match?.opp}</h3>

                            <span style={{ color: getTextColor(teamThemeValidate(match?.opp), true) }}>{match?.date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()}</span>
                            <strong>{match?.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase()}</strong>
                            <span>{match?.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}