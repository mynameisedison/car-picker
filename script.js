const cars = [
    // Add more car objects as needed
];

// Car data organized by type
const carTypes = {
    SUVs: [
        { id: 1, image: "x3.jpg", name: "BMW X3", specs: "2.0L Turbo AWD <br>248hp, 258lbft, 4030 lbs<br> $43,700" },
        { id: 2, image: "q5.jpg", name: "Audi Q5", specs: "2.0L Turbo AWD <br>261hp, 273lbft, 4000 lbs<br> $43,300" },
        { id: 3, image: "modely.jpg", name: "Tesla Model Y", specs: "Electric AWD <br>384hp, 376lbft, 4416 lbs<br> $52,990" },
        { id: 4, image: "macan.jpg", name: "Porsche Macan", specs: "2.0L Turbo AWD <br>261hp, 295lbft, 3990 lbs<br> $57,500" },
        { id: 5, image: "r2.jpg", name: "Rivian R2", specs: "Electric AWD <br>600hp, 600lbft, 5000 lbs<br> $72,500" },
    ],
    Crossovers: [
        { id: 1, image: "x3.jpg", name: "BMW X3", specs: "2.0L Turbo AWD <br>248hp, 258lbft, 4030 lbs<br> $43,700" },
        { id: 1, image: "x3.jpg", name: "BMW X3", specs: "2.0L Turbo AWD <br>248hp, 258lbft, 4030 lbs<br> $43,700" },
        { id: 1, image: "x3.jpg", name: "BMW X3", specs: "2.0L Turbo AWD <br>248hp, 258lbft, 4030 lbs<br> $43,700" },

    ],
    Sedans: [
        { id: 6, image: "3series.jpg", name: "BMW 3 Series Sedan", specs: "2.0L Turbo RWD <br>255hp, 294lbft, 3825 lbs<br> $43,800" },
        { id: 7, image: "is350.jpg", name: "Lexus IS", specs: "3.5L V6 AWD <br>311hp, 280lbft, 3725 lbs<br> $43,050" },
        { id: 8, image: "a3_sedan.jpg", name: "Audi A3/S3 Sedan", specs: "2.0L Turbo AWD <br>306hp, 295lbft, 3450 lbs<br> $45,000" },
        { id: 9, image: "ct4.jpg", name: "Cadillac CT4", specs: "2.0L Turbo RWD <br>237hp, 258lbft, 3451 lbs<br> $35,495" },
        { id: 10, image: "corolla_hybrid.jpg", name: "Toyota Corolla", specs: "1.8L Hybrid FWD <br>121hp, 105lbft, 2850 lbs<br> $24,675" },
        { id: 11, image: "civic_sedan.jpg", name: "Honda Civic Sedan", specs: "2.0L NA FWD <br>150hp, 177lbft, 2950 lbs<br> $24,250" },
        { id: 21, image: "camry.jpg", name: "Toyota Camry", specs: "Hybrid FWD/AWD <br>225, 177lbft, 2950 lbs<br> Starting $29,535" },
    ],
    Hatchbacks: [
        { id: 12, image: "corolla_hatch.jpg", name: "Toyota Corolla Hatchback", specs: "2.0L FWD <br>169hp, 151lbft, 3060 lbs<br> $23,100" },
        { id: 13, image: "prius.jpg", name: "Toyota Prius", specs: "2.0L Hybrid AWD <br>196hp, 139lbft, 3375 lbs<br> $27,450" },
        { id: 14, image: "civic_hatch.jpg", name: "Honda Civic Hatchback", specs: "2.0L NA FWD <br>150hp, 177lbft, 2950 lbs<br> $27,450" },
        { id: 15, image: "gti.jpg", name: "VW Golf GTI", specs: "2.0L Turbo FWD <br>241hp, 273lbft, 3250 lbs<br> $30,530" }
    ],
    Performance: [
        { id: 16, image: "rs3.jpg", name: "Audi RS3 Sedan", specs: "2.5L Turbo AWD <br>401hp, 369lbft, 3680 lbs<br> $62,300" },
        { id: 18, image: "golfR.jpg", name: "VW Golf R", specs: "2.0L Turbo AWD <br>315hp, 310lbft, 3300 lbs<br> $44,740" },
        { id: 21, image: "gr86.jpg", name: "Toyota GR86", specs: "2.4L RWD <br>228hp, 184lbft, 2838 lbs<br> $28,400" },
        { id: 17, image: "grc.jpg", name: "Toyota GR Corolla", specs: "1.6L Turbo AWD <br>300hp, 195lbft, 3276 lbs<br> $46,650" },
        { id: 19, image: "typeR.jpg", name: "Honda Civic Type R", specs: "2.0L Turbo FWD <br>315hp, 310lbft, 3188lbs<br> $46,690" },
        { id: 20, image: "integratypes.jpg", name: "Acura Integra Type S", specs: "2.0L Turbo FWD <br>320hp, 310lbft, 3219lbs<br> $53,795" },
        { id: 20, image: "911.jpg", name: "Porsche 911", specs: "Engine <br>379hp, 331 lbft, 3354lbs<br> $116,050" },
    ]
};

const carTypePics = {
    SUVs: {
        name: 'SUV',
        image: 'suv.jpg' // Replace with the actual image path
    },
    Sedans: {
        name: 'Sedan',
        image: 'sedan.jpg' // Replace with the actual image path
    },
    Hatchbacks: {
        name: 'Hatchback',
        image: 'golf.jpg' // Replace with the actual image path
    },
    Crossovers: {
        name: 'Crossovers',
        image: 'cross.jpg' // Replace with the actual image path
    },
    Performance: {
        name: 'Performance',
        image: 'Performance.jpg' // Replace with the actual image path
    }
};

const priceRanges = {
    '$20,000 - $40,000': [
        carTypes.Sedans[4], // Toyota Corolla Hybrid ($24,675)
        carTypes.Sedans[5], // Honda Civic Hybrid ($26,500)
        carTypes.Hatchbacks[0], // Toyota Corolla Hatchback ($23,100)
        carTypes.Hatchbacks[2], // Honda Civic Hatchback ($25,850)
        carTypes.Hatchbacks[1], // Toyota Prius ($27,450)
        carTypes.Performance[2], // Toyota GR86 ($28,400)
        carTypes.Sedans[6]
    ],
    '$40,000 - $50,000': [
        carTypes.SUVs[0], // BMW X3 ($43,700)
        carTypes.SUVs[1], // Audi Q5 ($43,300)
        carTypes.Sedans[0], // BMW 3 Series Sedan ($43,800)
        carTypes.Sedans[1], // Lexus IS ($43,050)
        carTypes.Hatchbacks[3], // VW Golf GTI ($30,530)
        carTypes.Performance[1], // VW Golf R ($44,740)
        carTypes.Performance[3], // Toyota GR Corolla ($46,650)
        carTypes.Performance[4], // Honda Civic Type R ($46,690)
    ],
    '$50,000 - $60,000+': [
        carTypes.SUVs[2], // Tesla Model Y ($52,990)
        carTypes.SUVs[3], // Porsche Macan ($57,500)
        carTypes.Performance[0], // Audi RS3 Sedan ($62,300)
        carTypes.Performance[5], // Acura Integra Type S ($53,795)
        carTypes.SUVs[4]
    ]
};


let currentRound = []; // Start with the selected type of cars
let nextRound = [];    // To hold winners of the current round
let currentPairIndex = 0; // Track the pair of cars being compared

// Function to display car types for selection
function displaySelections() {
    const cardContainer = document.getElementById("cards");
    cardContainer.innerHTML = ''; 


    cardContainer.innerHTML += '<h2>Select a Car Type</h2>';
    const carTypeContainer = document.createElement('div');
    carTypeContainer.classList.add('selection-container'); // Add a container for styling

    for (const type in carTypePics) {
        const carType = carTypePics[type];
        carTypeContainer.innerHTML += `
            <div class="card" onclick="selectCarType('${type}')">
            <img src="${carType.image}" alt="${carType.name}" class="car-type-image">
            <p>${type}</p>
            </div>
        `;
    }
    cardContainer.appendChild(carTypeContainer); 

    //price range selection
    cardContainer.innerHTML += '<h2>Select a Price Range</h2>';
    const priceRangeContainer = document.createElement('div');
    priceRangeContainer.classList.add('selection-container'); // Add a container for styling

    for (const priceRange in priceRanges) {
        priceRangeContainer.innerHTML += `
            <div class="card" onclick="selectCarPriceRange('${priceRange}')">
                <p>${priceRange}</p>
            </div>
        `;
    }
    cardContainer.appendChild(priceRangeContainer); // Append price ranges
}

// Function to handle car type selection
function selectCarType(type) {
    currentRound = [...carTypes[type]]; // Set current round to the selected type
    currentPairIndex = 0; // Reset index
    nextRound = []; // Reset next round
    displayPair(); // Start the tournament with the selected car type
}


// Function to handle car type selection
function selectCarPriceRange(priceRange) {
    currentRound = [...priceRanges[priceRange]]; // Set current round to the selected price range
    currentPairIndex = 0; // Reset index
    nextRound = []; // Reset next round
    displayPair(); // Start the tournament with the selected car type
}


// Function to display the current pair of cars
function updateBracket() {
    const bracketContainer = document.getElementById("bracket");
    bracketContainer.innerHTML = '<h2>Tournament Bracket</h2>';

    const rounds = [currentRound, ...nextRound.map(round => [round])];

    rounds.forEach((round, index) => {
        const roundDiv = document.createElement("div");
        roundDiv.classList.add("bracket-round");
        
        round.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.classList.add("bracket-car");
            carDiv.innerHTML = `
                <p>${car.name}</p>
                <img src="${car.image}" alt="${car.name}" width="50">
            `;
            roundDiv.appendChild(carDiv);
        });

        bracketContainer.appendChild(roundDiv);
    });
}

// Update the `displayPair` and `showFavoriteCar` functions to call updateBracket()
function displayPair() {
    const cardContainer = document.getElementById("cards");
    cardContainer.innerHTML = '';

    if (currentRound.length === 1) {
        showFavoriteCar(currentRound[0]);
        return;
    }

    if (currentPairIndex >= currentRound.length - 1) {
        if (currentRound.length % 2 !== 0) {
            nextRound.push(currentRound[currentRound.length - 1]);
        }
        currentRound = nextRound;
        nextRound = [];
        currentPairIndex = 0;
        displayPair();
        return;
    }

    const car1 = currentRound[currentPairIndex];
    const car2 = currentRound[currentPairIndex + 1];

    if (car1 && car2) {
        cardContainer.innerHTML += `
            <h2>Which Car?</h2>
            <div class="card" onclick="selectCar(${car1.id})">
                <img src="${car1.image}" alt="${car1.name}">
                <p>${car1.name}</p>
                <p>${car1.specs}</p>
            </div>
            <div class="card" onclick="selectCar(${car2.id})">
                <img src="${car2.image}" alt="${car2.name}">
                <p>${car2.name}</p>
                <p>${car2.specs}</p>
            </div>
        `;
    }

    // Update the bracket with the current state
    updateBracket();
}

function showFavoriteCar(favoriteCar) {
    const cardContainer = document.getElementById("cards");
    cardContainer.innerHTML = `
        <div class="favorite-header">
            <button class="restart-button" onclick="restartApp()">Restart</button>
            <h2>Your Favorite Car</h2>
        </div>
        <div class="favorite-container">
            <div class="card">
                <img src="${favoriteCar.image}" alt="${favoriteCar.name}">
                <p>${favoriteCar.name}</p>
                <p>${favoriteCar.specs}</p>
            </div>
        </div>
    `;

    // Show the final car in the bracket
    updateBracket();
}


// Function to handle car selection and progress the tournament
function selectCar(selectedId) {
    // Find the selected car in the current round and add it to the next round
    const selectedCar = currentRound.find(car => car.id === selectedId);
    if (selectedCar) {
        nextRound.push(selectedCar);
    }

    // Move to the next pair in the current round
    currentPairIndex += 2;
    displayPair();
}





// Function to restart the app and display the selection screen again
function restartApp() {
    selectedCarType = ''; // Clear selected car type
    selectedPriceRange = ''; // Clear selected price range
    currentRound = []; // Reset current round
    nextRound = []; // Reset next round
    currentPairIndex = 0; // Reset pair index
    displaySelections(); // Show the initial selection screen
}


// Initial load
document.addEventListener("DOMContentLoaded", displaySelections);