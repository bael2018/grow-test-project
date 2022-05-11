export const mathRevovered = (data) => {
    return data?.sort((a, b) => a.Recovered - b.Recovered).pop();
};