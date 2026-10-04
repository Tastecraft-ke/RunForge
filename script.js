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


/* =========================
   LAPTOP COMPATIBILITY CHECKER
   ========================= */

function checkGame() {

    let ram = Number(
        document.getElementById("ram").value
    );

    let storage = Number(
        document.getElementById("storage").value
    );

    let cpu = document.getElementById("cpu").value;

    let gpu = document.getElementById("gpu").value;

    let game = document.getElementById("game").value;

    let result = document.getElementById("result");


    /* CHECK FOR EMPTY INFORMATION */

    if (
        ram === 0 ||
        storage === 0 ||
        cpu === "" ||
        gpu === "" ||
        game === ""
    ) {

        result.innerHTML =
            "⚠️ Please enter all your laptop information.";

        return;
    }


    /* CPU POWER */

    let cpuPower = {

        i3: 2,
        i5: 4,
        i7: 6,
        i9: 8,

        ryzen3: 2,
        ryzen5: 4,
        ryzen7: 6,
        ryzen9: 8

    };


    /* GPU POWER */

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


    /* GAME REQUIREMENTS */

    let requirements = {

        gta5: {
            name: "GTA V",
            ram: 4,
            storage: 72,
            cpu: 2,
            gpu: 2
        },

        hitman2: {
            name: "Hitman 2",
            ram: 8,
            storage: 60,
            cpu: 4,
            gpu: 3
        },

        farcry4: {
            name: "Far Cry 4",
            ram: 4,
            storage: 30,
            cpu: 2,
            gpu: 2
        },

        watchdogs: {
            name: "Watch Dogs",
            ram: 6,
            storage: 25,
            cpu: 3,
            gpu: 2
        }

    };


    let selectedGame = requirements[game];

    let userCpuPower = cpuPower[cpu];

    let userGpuPower = gpuPower[gpu];


    /* CHECK COMPATIBILITY */

    let ramOkay = ram >= selectedGame.ram;

    let storageOkay = storage >= selectedGame.storage;

    let cpuOkay = userCpuPower >= selectedGame.cpu;

    let gpuOkay = userGpuPower >= selectedGame.gpu;


    if (
        ramOkay &&
        storageOkay &&
        cpuOkay &&
        gpuOkay
    ) {

        result.innerHTML = `
            🟢 <strong>YES!</strong>
            <br><br>

            Your laptop should be able to run
            <strong>${selectedGame.name}</strong>.

            <br><br>

            💻 Compatibility: <strong>Good</strong>
        `;

    } else {

        result.innerHTML = `
            🔴 <strong>NOT RECOMMENDED</strong>
            <br><br>

            Your laptop may struggle to run
            <strong>${selectedGame.name}</strong>.

            <br><br>

            Try lowering the game's graphics
            settings or upgrading your hardware.
        `;

    }

}
