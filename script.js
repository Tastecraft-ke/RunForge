function checkGame() {

    let ram = Number(document.getElementById("ram").value);

    let gpu = document.getElementById("gpu").value;

    let game = document.getElementById("game").value;

    let result = document.getElementById("result");


    if (ram === 0 || gpu === "" || game === "") {

        result.innerHTML =
            "⚠️ Please enter all your laptop information.";

        return;
    }


    let requiredRam = 0;

    let requiredGpu = 0;


    // GTA V
    if (game === "gta5") {

        requiredRam = 4;
        requiredGpu = 2;

    }


    // Hitman 2
    else if (game === "hitman2") {

        requiredRam = 8;
        requiredGpu = 3;

    }


    // Far Cry 4
    else if (game === "farcry4") {

        requiredRam = 4;
        requiredGpu = 2;

    }


    // Watch Dogs
    else if (game === "watchdogs") {

        requiredRam = 6;
        requiredGpu = 2;

    }


    let gpuPower = {

        integrated: 1,

        gtx750: 2,

        gtx1050: 3,

        gtx1650: 4,

        gtx1660: 5,

        rtx2060: 6,

        rtx3060: 7,

        rtx4060: 8

    };


    let userGpuPower = gpuPower[gpu];


    if (ram >= requiredRam && userGpuPower >= requiredGpu) {

        result.innerHTML =
            "🟢 <strong>YES!</strong><br><br>" +
            "Your laptop should be able to run this game.";

    }

    else {

        result.innerHTML =
            "🔴 <strong>NOT RECOMMENDED</strong><br><br>" +
            "Your laptop may struggle to run this game.";

    }

}

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
