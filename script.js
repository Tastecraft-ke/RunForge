// ==========================================
// GAMECHECK GAME DATABASE
// ==========================================

const games = [

    {
        id: "gta5",
        name: "GTA V",
        category: "Open World",
        image: "images/gta5.jpg",
        release: "2015",
        storage: 72,

        minimum: {
            ram: 4,
            cpu: 2,
            gpu: 2
        },

        recommended: {
            ram: 8,
            cpu: 4,
            gpu: 4
        },

        baseFPS: 60
    },


    {
        id: "hitman2",
        name: "Hitman 2",
        category: "Stealth",
        image: "images/hitman2.jpg",
        release: "2018",
        storage: 60,

        minimum: {
            ram: 8,
            cpu: 4,
            gpu: 3
        },

        recommended: {
            ram: 16,
            cpu: 6,
            gpu: 5
        },

        baseFPS: 45
    },


    {
        id: "farcry4",
        name: "Far Cry 4",
        category: "FPS",
        image: "images/farcry4.jpg",
        release: "2014",
        storage: 30,

        minimum: {
            ram: 4,
            cpu: 2,
            gpu: 2
        },

        recommended: {
            ram: 8,
            cpu: 4,
            gpu: 4
        },

        baseFPS: 60
    },


    {
        id: "watchdogs",
        name: "Watch Dogs",
        category: "Open World",
        image: "images/watchdogs.jpg",
        release: "2014",
        storage: 25,

        minimum: {
            ram: 6,
            cpu: 3,
            gpu: 2
        },

        recommended: {
            ram: 8,
            cpu: 4,
            gpu: 4
        },

        baseFPS: 50
    },


    {
        id: "gta4",
        name: "GTA IV",
        category: "Open World",
        image: "images/gta4.jpg",
        release: "2008",
        storage: 22,

        minimum: {
            ram: 2,
            cpu: 2,
            gpu: 1
        },

        recommended: {
            ram: 4,
            cpu: 4,
            gpu: 2
        },

        baseFPS: 60
    },


    {
        id: "farcry3",
        name: "Far Cry 3",
        category: "FPS",
        image: "images/farcry3.jpg",
        release: "2012",
        storage: 15,

        minimum: {
            ram: 2,
            cpu: 2,
            gpu: 1
        },

        recommended: {
            ram: 4,
            cpu: 3,
            gpu: 2
        },

        baseFPS: 60
    },


    {
        id: "farcry5",
        name: "Far Cry 5",
        category: "FPS",
        image: "images/farcry5.jpg",
        release: "2018",
        storage: 40,

        minimum: {
            ram: 8,
            cpu: 4,
            gpu: 3
        },

        recommended: {
            ram: 16,
            cpu: 6,
            gpu: 5
        },

        baseFPS: 60
    },


    {
        id: "watchdogs2",
        name: "Watch Dogs 2",
        category: "Open World",
        image: "images/watchdogs2.jpg",
        release: "2016",
        storage: 27,

        minimum: {
            ram: 6,
            cpu: 4,
            gpu: 3
        },

        recommended: {
            ram: 8,
            cpu: 6,
            gpu: 5
        },

        baseFPS: 60
    },


    {
        id: "mgsv",
        name: "Metal Gear Solid V",
        category: "Stealth",
        image: "images/mgsv.jpg",
        release: "2015",
        storage: 28,

        minimum: {
            ram: 4,
            cpu: 3,
            gpu: 2
        },

        recommended: {
            ram: 8,
            cpu: 4,
            gpu: 4
        },

        baseFPS: 60
    },


    {
        id: "sleepingdogs",
        name: "Sleeping Dogs",
        category: "Open World",
        image: "images/sleepingdogs.jpg",
        release: "2012",
        storage: 15,

        minimum: {
            ram: 2,
            cpu: 2,
            gpu: 1
        },

        recommended: {
            ram: 4,
            cpu: 3,
            gpu: 2
        },

        baseFPS: 60
    },


    {
        id: "rdr2",
        name: "Red Dead Redemption 2",
        category: "Open World",
        image: "images/rdr2.jpg",
        release: "2019",
        storage: 150,

        minimum: {
            ram: 8,
            cpu: 5,
            gpu: 4
        },

        recommended: {
            ram: 12,
            cpu: 7,
            gpu: 6
        },

        baseFPS: 45
    },


    {
        id: "hitman3",
        name: "Hitman 3",
        category: "Stealth",
        image: "images/hitman3.jpg",
        release: "2021",
        storage: 80,

        minimum: {
            ram: 8,
            cpu: 5,
            gpu: 4
        },

        recommended: {
            ram: 16,
            cpu: 7,
            gpu: 6
        },

        baseFPS: 45
    }

];


// ==========================================
// CPU PERFORMANCE SCORE
// ==========================================

function getCPUScore(cpu) {

    const cpuScores = {

        i3: 2,
        i5: 4,
        i7: 6,
        i9: 8,

        ryzen3: 2,
        ryzen5: 4,
        ryzen7: 6,
        ryzen9: 8

    };

    return cpuScores[cpu] || 0;
}


// ==========================================
// GPU PERFORMANCE SCORE
// ==========================================

function getGPUScore(gpu) {

    const gpuScores = {

        // Integrated graphics

        hd4000: 1.5,
        hd4400: 1.7,
        hd520: 2,
        uhd620: 2.2,
        uhd630: 2.5,
        irisxe: 3.5,

        vega3: 1.8,
        vega8: 3,


        // Dedicated graphics

        gtx750: 2,
        gtx1050: 3,
        gtx1650: 4,
        gtx1660: 5,
        rtx2060: 6,
        rtx3060: 7,
        rtx4060: 8

    };

    return gpuScores[gpu] || 0;
}


// ==========================================
// SEARCH
// ==========================================

function searchGames() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".game-card");

    cards.forEach(card => {

        const gameName =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        if (gameName.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ==========================================
// COMPATIBILITY CHECKER
// ==========================================

function checkGame() {

    const ram =
        Number(document.getElementById("ram").value);

    const cpu =
        document.getElementById("cpu").value;

    const gpu =
        document.getElementById("gpu").value;

    const storage =
        Number(document.getElementById("storage").value);

    const storageType =
        document.getElementById("storageType").value;

    const gameID =
        document.getElementById("game").value;

    const result =
        document.getElementById("result");


    // ======================================
    // CHECK EMPTY FIELDS
    // ======================================

    if (
        !ram ||
        !cpu ||
        !gpu ||
        !storage ||
        !storageType ||
        !gameID
    ) {

        result.innerHTML = `

            <div class="result-warning">

                ⚠️ Please fill in all laptop
                specifications before checking.

            </div>

        `;

        return;
    }


    // ======================================
    // FIND GAME
    // ======================================

    const game =
        games.find(g => g.id === gameID);


    if (!game) {

        result.innerHTML = `

            <div class="result-warning">

                ⚠️ Game information could not
                be found.

            </div>

        `;

        return;
    }


    // ======================================
    // GET HARDWARE SCORES
    // ======================================

    const cpuScore =
        getCPUScore(cpu);

    const gpuScore =
        getGPUScore(gpu);


    // ======================================
    // RAM
    // ======================================

    const ramMinimum =
        ram >= game.minimum.ram;

    const ramRecommended =
        ram >= game.recommended.ram;


    // ======================================
    // STORAGE
    // ======================================

    const storageOK =
        storage >= game.storage;


    // ======================================
    // CPU
    // ======================================

    const cpuMinimum =
        cpuScore >= game.minimum.cpu;

    const cpuRecommended =
        cpuScore >= game.recommended.cpu;


    // ======================================
    // GPU
    // ======================================

    const gpuMinimum =
        gpuScore >= game.minimum.gpu;

    const gpuRecommended =
        gpuScore >= game.recommended.gpu;


    // ======================================
    // DETERMINE PERFORMANCE
    // ======================================

    let status;
    let fps;
    let settings;


    /*
       We give integrated graphics a chance
       instead of automatically rejecting them.
    */

    if (
        ramRecommended &&
        cpuRecommended &&
        gpuRecommended &&
        storageOK
    ) {

        status = "EXCELLENT";

        fps = game.baseFPS;

        settings = "Medium / High";

    }

    else if (
        ramMinimum &&
        cpuMinimum &&
        gpuMinimum &&
        storageOK
    ) {

        status = "PLAYABLE";

        fps = Math.round(game.baseFPS * 0.65);

        settings = "Low / Medium";

    }

    else if (
        ramMinimum &&
        storageOK &&
        gpuScore >= game.minimum.gpu - 0.5 &&
        cpuScore >= game.minimum.cpu - 0.5
    ) {

        status = "LOW SETTINGS";

        fps = Math.round(game.baseFPS * 0.45);

        settings = "Low";

    }

    else {

        status = "NOT RECOMMENDED";

        fps = "Below 30";

        settings = "Very Low";

    }


    // ======================================
    // SSD / HDD INFORMATION
    // ======================================

    let storageMessage;


    if (storageType === "ssd") {

        storageMessage =
            "🚀 SSD detected — faster loading times and better overall responsiveness.";

    }

    else {

        storageMessage =
            "💾 HDD detected — the game can still run, but loading times may be longer.";

    }


    // ======================================
    // DISPLAY RESULT
    // ======================================

    result.innerHTML = `

        <div class="compatibility-result">

            <h3>${game.name}</h3>

            <div class="result-status">
                ${status}
            </div>

            <p>
                🎮 Estimated FPS:
                <strong>${fps}</strong>
            </p>

            <p>
                ⚙️ Suggested Settings:
                <strong>${settings}</strong>
            </p>

            <p>
                💾 Storage:
                <strong>
                    ${storage}GB ${storageType.toUpperCase()}
                </strong>
            </p>

            <div class="storage-message">

                ${storageMessage}

            </div>

            <div class="requirements-check">

                <p>
                    ${ramMinimum ? "✅" : "❌"}
                    RAM:
                    ${ram}GB
                    —
                    Minimum:
                    ${game.minimum.ram}GB
                </p>

                <p>
                    ${storageOK ? "✅" : "❌"}
                    Storage:
                    ${storage}GB
                    —
                    Game needs:
                    ${game.storage}GB
                </p>

                <p>
                    ${cpuMinimum ? "✅" : "❌"}
                    Processor requirement
                </p>

                <p>
                    ${gpuMinimum ? "✅" : "❌"}
                    Graphics requirement
                </p>

            </div>

        </div>

    `;

}
