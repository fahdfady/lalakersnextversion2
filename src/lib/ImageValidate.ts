export const isImageFound = async (imageName: string) => {
    return await fetch(`http://localhost:3000${imageName}`, {
        method: "HEAD",
    });
};

