// `use client`

// import Image from "next/image";
// import { UserAuth } from "../context/AuthContext.ts";
// import { db } from '../firebase';
// import { useState } from "react";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";

// export default function Fixture({ match:match }) {
//     const [like, setLike] = useState(false);
//     const [saved, setSaved] = useState(false);
//     const [date, setDate] = useState();
//     const { user } = UserAuth();

//     const saveMatch = async () => {
//         if (user) {
//             setLike(!like);
//             setSaved(true);
//             await updateDoc(doc(db, 'users', `${user?.id}`), {
//                 savedMatches: arrayUnion({
//                     id: match?.id,
//                     opp: match?.opp,
//                     oppLogo: match?.oppLogo,
//                     date: match?.date,
//                     // time: match?.time,
//                     status: match?.status,
//                     score: match?.score
//                 }),
//             });
//         }
// else{}
//     }

//     const fireBaseTime = new Date(
//         match?.date.seconds * 1000 + match?.date.nanoseconds / 1000000,
//     );
//     const matchDate = fireBaseTime.toDateString();
//     const matchTime = fireBaseTime.toLocaleTimeString();

//     return (
//         <div aria-label="Fixture" className="flex items-center gap-2 w-full h-[62px]" tabIndex={0}>
//             <div className="flex flex-col justify-around text-gray-400">
//                 <bdi>{matchDate}</bdi>
//                 <bdi>{matchTime}</bdi>
//             </div>
//             <div className="fixture flex flex-col gap-2 flex-grow px-3" title="Los Angeles Lakers Sacramento Kings live score">
//                 <div className="flex items-center">
//                     <Image
//                         width={25} height={25}
//                         quality={50}
//                         src={'/logo.png'}
//                         alt={"Lakers"}
//                         className="me-2 object-cover align-middle" />
//                     <bdi className="text-base whitespace-nowrap">Lakers</bdi>
//                 </div>
//                 <div className="flex items-center">
//                     <Image
//                         width={25} height={25}
//                         quality={50}
//                         src={match?.oppLogo}
//                         alt={match?.opp}
//                         className="me-2 object-cover align-middle" />
//                     <bdi className="text-base whitespace-nowrap">{match?.opp.split(" ").splice(-1)}</bdi>
//                 </div>
//             </div>
//             <button
//                 onClick={saveMatch}
//                 className="fill-purple-400 flex justify-center items-center duration-100 rounded-md p-1 outline-none hover:bg-purple-950 focus:bg-purple-950"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" /></svg></button>
//         </div>

//     )
// }