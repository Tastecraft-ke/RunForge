function searchGames() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let games = document
        .getElementsByClassName("game-card");

    for (let i = 0; i < games.length; i++) {

        let gameName = games[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if (gameName.includes(input)) {

            games[i].style.display = "block";

        } else {

            games[i].style.display = "none";

        }
    }
}
