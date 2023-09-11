export const formatInput = (text) => {
    let result = "";

    for(let i = 0; i < text.length; i++)
        i === 0 ? result += text[i].toUpperCase() : result += text[i].toLowerCase();

    return result;
}
