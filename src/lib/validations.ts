export const isImageFound = async (imageName: string): Promise<string> => {
    try {
        // Try fetching from the server first
        const response = await fetch(`https://lalakersnext.vercel.app/${imageName}`, {
            method: "HEAD",
        });
        if (response.ok) {
            return `https://lalakersnext.vercel.app/${imageName}`;
        } else {
            throw new Error('Not found on server');
        }
    } catch (error) {
        console.log(error);
        // If fetching from the server fails, return the default image
        return '/logoplaceholder.png';
    }
};

// to validate the theme of team depending on the team name
export const teamThemeValidate = (teamName: string): string => {
    if (teamName.includes("Portland")) return "#E03A3E";
    else if (teamName.includes("Kings")) return "#5A2D81";
    else if (teamName.includes("Warriors")) return "#1D428A";
    else if (teamName.includes("Spurs")) return "#1D428A";
    else return "#fff"
}

// Function to determine if a color is light or dark
export const isLight = (color: string): boolean => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.slice(0, 2) || "0", 16);
    const g = parseInt(hex.slice(2, 4) || "0", 16);
    const b = parseInt(hex.slice(4, 6) || "0", 16);
    const result = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    return result > 127.5;
    // It removes the '#' from the color code 
    // It parses the red, green, and blue components of the color 
    // It calculates the brightness of the color
    // If the brightness is greater than 127.5, it's considered a light color
}

// Function to get the text color based on the background color
export const getTextColor = (backgroundColor: string, muted?: boolean): string => {
    // muted ? return isLight(backgroundColor) ? "#000" : "#fff"
    // : return isLight(backgroundColor) ? "#000" : "#fff";
    return muted
        ? (isLight(backgroundColor) ? "#222" : "#d8d8d8")
        : (isLight(backgroundColor) ? "#000" : "#fff")
}
