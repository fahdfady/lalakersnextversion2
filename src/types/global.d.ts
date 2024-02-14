export { };

declare global {

    type Match = {
        id: number;
        type: string;
        latest: boolean;
        opp: string;
        oppLogo: string;

        lakerscore: number;
        oppScore: number;

        status: string;
        stadium: string;
        location: string;
        date: Date;
    };

    type Player = {
        id: number;
        firstname: string;
        nickname: string;
        image: string;
        role: string;
    };

    
}