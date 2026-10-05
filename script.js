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


    /* CHECK FOR MISSING INFORMATION */

    if (
        ram === 0 ||
        storage === 0 ||
        cpu === "" ||
        gpu === "" ||
        game === ""
    ) {

        result.innerHTML = `
            ⚠️ <strong>Missing information</strong>
            <br><br>
            Please enter all your laptop specifications.
        `;

        return;
    }


    /* =========================
       CPU POWER
       ========================= */

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


    /* =========================
       GPU POWER
       ========================= */

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


    /* =========================
       GAME REQUIREMENTS
       ========================= */

    let requirements = {

        gta5: {
            name: "GTA V",
            ram: 4,
            storage: 72,
            cpu: 2,
            gpu: 2,
            fps: 60
        },

        hitman2: {
            name: "Hitman 2",
            ram: 8,
            storage: 60,
            cpu: 4,
            gpu: 3,
            fps: 45
        },

        farcry4: {
            name: "Far Cry 4",
            ram: 4,
            storage: 30,
            cpu: 2,
            gpu: 2,
            fps: 60
        },

        watchdogs: {
            name: "Watch Dogs",
            ram: 6,
            storage: 25,
            cpu: 3,
            gpu: 2,
            fps: 50
        }

    };


    let selectedGame = requirements[game];

    let userCpuPower = cpuPower[cpu];

    let userGpuPower = gpuPower[gpu];


    /* =========================
       CHECK EACH COMPONENT
       ========================= */

    let ramOkay =
        ram >= selectedGame.ram;

    let storageOkay =
        storage >= selectedGame.storage;

    let cpuOkay =
        userCpuPower >= selectedGame.cpu;

    let gpuOkay =
        userGpuPower >= selectedGame.gpu;


    /* =========================
       CALCULATE PERFORMANCE
       ========================= */

    let performanceScore = 0;

    if (ramOkay) {
        performanceScore++;
    }

    if (storageOkay) {
        performanceScore++;
    }

    if (cpuOkay) {
        performanceScore++;
    }

    if (gpuOkay) {
        performanceScore++;
    }


    /* =========================
       EXCELLENT
       ========================= */

    if (performanceScore === 4) {

        let estimatedFPS =
            selectedGame.fps;

        result.innerHTML = `
            🟢 <strong>EXCELLENT</strong>

            <br><br>

            Your laptop should run
            <strong>${selectedGame.name}</strong>
            very well.

            <br><br>

            🎮 Estimated FPS:
            <strong>${estimatedFPS} FPS</strong>

            <br>

            ⚙️ Recommended settings:
            <strong>High</strong>
        `;

    }


    /* =========================
       PLAYABLE
       ========================= */

    else if (performanceScore === 3) {

        let estimatedFPS =
            Math.round(selectedGame.fps * 0.75);

        result.innerHTML = `
            🟢 <strong>GOOD</strong>

            <br><br>

            Your laptop should run
            <strong>${selectedGame.name}</strong>.

            <br><br>

            🎮 Estimated FPS:
            <strong>${estimatedFPS} FPS</strong>

            <br>

            ⚙️ Recommended settings:
            <strong>Medium</strong>
        `;

    }


    /* =========================
       LOW
       ========================= */

    else if (performanceScore === 2) {

        let estimatedFPS =
            Math.round(selectedGame.fps * 0.50);

        result.innerHTML = `
            🟡 <strong>PLAYABLE</strong>

            <br><br>

            Your laptop may run
            <strong>${selectedGame.name}</strong>,
            but performance may be limited.

            <br><br>

            🎮 Estimated FPS:
            <strong>${estimatedFPS} FPS</strong>

            <br>

            ⚙️ Recommended settings:
            <strong>Low</strong>
        `;

    }


    /* =========================
       NOT RECOMMENDED
       ========================= */

    else {

        result.innerHTML = `
            🔴 <strong>NOT RECOMMENDED</strong>

            <br><br>

            Your laptop may struggle to run
            <strong>${selectedGame.name}</strong>.

            <br><br>

            💡 Consider upgrading your
            RAM or graphics card.
        `;

    }

}
