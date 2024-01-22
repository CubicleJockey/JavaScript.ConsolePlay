window.onload = () => {
    class VideoGame{
        constructor(id, name, publisher, platform){
            this.id = id;
            this.name = name;
            this.publisher = publisher;
            this.platform = platform;
        }
    }

    const marioOdyessy = new VideoGame(1, 'Mario Odysessy', 'Nintendo', 'Nintendo Switch');
    const objectButton = document.getElementById('object-to-table');
    if(objectButton){
        objectButton.onclick = () => {
            console.table(marioOdyessy);
        };
    }

    const videoGameConsoles = ['Nintendo Switch', 'Xbox Series X', 'Playstation 5'];
    const singleArrayButton = document.getElementById('1D-array-to-table');
    if(singleArrayButton){
        singleArrayButton.onclick = () => {
            console.table(videoGameConsoles);
        };
    }

    const multiDim = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19],
        [20]
    ];
    const multiDimButton = document.getElementById('multi-array-to-table');
    if(multiDimButton){
        multiDimButton.onclick = () => {
            console.table(multiDim);
        };
    }

    const zeldaBreathOfTheWild = new VideoGame(2, 'The Legend of Zelda: Breath of the Wild', 'Nintendo', 'Nintendo Switch');
    const godOfWar = new VideoGame(3, 'God of War', 'Sony Interactive Entertainment', 'PlayStation 4');
    const cyberpunk2077 = new VideoGame(4, 'Cyberpunk 2077', 'CD Projekt', 'Multiple Platforms');
    const multiGames = [marioOdyessy, zeldaBreathOfTheWild, godOfWar, cyberpunk2077];
    const multiObjectButton = document.getElementById('array-of-similar-objects');
    if(multiObjectButton){
        multiObjectButton.onclick = () => {
            console.table(multiGames);
        };
    }
};
