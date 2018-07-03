const colors = ['lightblue', 'orange', 'lightgreen', 'pink', 'yellow', 'red', 'grey', 'magenta', 'cyan'];

export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};
