const cars = [
    // Add more car objects as needed
];

// Car data organized by type
const carTypes = {
    SUVs: [
        { id: 1, image: "x3.jpg", name: "BMW X3", specs: "2.0L Turbo AWD <br>248 hp, 258 lb-ft, 4030 lbs<br> $43,700", class: "SUV"},
        { id: 2, image: "q5.jpg", name: "Audi Q5", specs: "2.0L Turbo AWD <br>261 hp, 273 lb-ft, 4000 lbs<br> $43,300", class: "SUV"},
        { id: 3, image: "modely.jpg", name: "Tesla Model Y", specs: "Electric AWD <br>384 hp, 376 lb-ft, 4416 lbs<br> $52,990", class: "SUV"},
        { id: 4, image: "macan.jpg", name: "Porsche Macan", specs: "2.0L Turbo AWD <br>261 hp, 295 lb-ft, 3990 lbs<br> $57,500", class: "SUV"},
        { id: 5, image: "r2.jpg", name: "Rivian R2", specs: "Electric AWD <br>600 hp, 600 lb-ft, 5000 lbs<br> $72,500", class: "SUV"},
        { id: 22, image: "CRV.jpg", name: "Honda CRV", specs: "2.0L Hybrid FWD/AWD <br>190 hp, 179 lb-ft, 3616   lbs<br> $35,200", class: "SUV"},
        { id: 23, image: "hrv.jpg", name: "Honda HRV", specs: "2.0L FWD/AWD <br>150 hp, 100 lb-ft, 3500 lbs<br> $30,000", class: "SUV"},
        { id: 24, image: "corolla_cross.jpg", name: "Toyota Corolla Cross", specs: "1.6L FWD/AWD <br>150 hp, 100 lb-ft, 3500 lbs<br> $30,000", class: "SUV"},
        { id: 24, image: "lexusRX.jpg", name: "Lexus RX350", specs: "2.5L FWD/AWD <br>275 hp, 317 lb-ft, 4133 lbs<br> $50,325", class: "SUV"},
        { id: 24, image: "lexusNX.jpg", name: "Lexus NX250", specs: "2.5-liter four-cylinder FWD/AWD <br>205 hp, 184 lbft, 3700 lbs<br> $40,965", class: "SUV"},

    ],
    Sedans: [
        { id: 6, image: "3series.jpg", name: "BMW 3 Series", specs: "2.0L Turbo RWD <br>255 hp, 294 lb-ft, 3825 lbs<br> $43,800", class: "Sedan"},
        { id: 7, image: "is350.jpg", name: "Lexus IS350", specs: "3.5L V6 RWD <br>311 hp, 280 lb-ft, 3748 lbs<br> $46,735", class: "Sedan"},
        { id: 8, image: "a3_sedan.jpg", name: "Audi A3/S3 Sedan", specs: "2.0L Turbo AWD <br>306 hp, 295 lb-ft, 3450 lbs<br> $45,000", class: "Sedan"},
        // { id: 9, image: "ct4.jpg", name: "Cadillac CT4", specs: "2.0L Turbo RWD <br>237 hp, 258 lb-ft, 3451 lbs<br> $35,495", class: "Sedan"},
        { id: 10, image: "corolla_hybrid.jpg", name: "Toyota Corolla SE", specs: "2.0L FWD <br>168  hp, 151 lb-ft, 2850 lbs<br> $25,750", class: "Sedan"},
        { id: 11, image: "civic_sedan.jpg", name: "Honda Civic Sport Sedan", specs: "2.0L FWD <br>150 hp, 133 lb-ft, 2926 lbs<br> $27,345", class: "Sedan"},
        { id: 21, image: "camry.jpg", name: "Toyota Camry SE Hybrid", specs: "Hybrid FWD/AWD <br>225 hp, 163 lb-ft, 3494 lbs<br> Starting $31,835", class: "Sedan"},
    ],
    Hatchbacks: [
        { id: 12, image: "corolla_hatch.jpg", name: "Toyota Corolla Hatchback", specs: "2.0L FWD <br>169 hp, 151 lb-ft, 3060 lbs<br> $23,100", class: "Hatchback"},
        { id: 14, image: "civic_hatch.jpg", name: "Honda Civic Sport Hatchback", specs: "2.0L NA FWD <br>150 hp, 133 lb-ft, 2976 lbs<br> $28,545", class: "Hatchback"},
        { id: 15, image: "gti.jpg", name: "VW Golf GTI", specs: "2.0L Turbo FWD <br>241 hp, 273 lb-ft, 3250 lbs<br> $30,530", class: "Hatchback"},
        { id: 29, image: "mazda3hatch.jpg", name: "Mazda 3 Hatchback", specs: "2.0L Turbo FWD <br>250 hp, 320 lb-ft, 3392 lbs<br> $30,530", class: "Hatchback"},
    ],
    Hybrids: [
        { id: 28, image: "civic_hatch.jpg", name: "Honda Civic Sport Hybrid Hatchback", specs: "2.0L Hybrid FWD <br>200 hp, 232 lb-ft, 3258 lbs<br> $31,045", class: "Hatchback"},
        { id: 13, image: "prius.jpg", name: "Toyota Prius", specs: "2.0L Hybrid FWD <br>194 hp, 139 lb-ft, 3097 lbs<br> $29,085", class: "Hatchback"},
        { id: 27, image: "civic_sedan.jpg", name: "Honda Civic Sport Hybrid Sedan", specs: "2.0L Hybrid FWD <br>200 hp, 232 lb-ft, 3208 lbs<br> $29,845", class: "Sedan"},
        { id: 21, image: "camry.jpg", name: "Toyota Camry SE Hybrid", specs: "Hybrid FWD/AWD <br>225 hp, 163 lb-ft, 3494 lbs<br> Starting $31,835", class: "Sedan"},
        { id: 22, image: "CRV.jpg", name: "Honda CRV", specs: "2.0L Hybrid FWD/AWD <br>190 hp, 179 lb-ft, 3616   lbs<br> $35,200", class: "SUV"},
        { id: 10, image: "corolla_hybrid.jpg", name: "Toyota Corolla Hybrid SE", specs: "2.0L Hybrid FWD <br>138 hp, 156 lb-ft, 3250 lbs<br> $27,200", class: "Sedan"},
    ],
    Performance: [  
        { id: 16, image: "rs3.jpg", name: "Audi RS3 Sedan", specs: "2.5L Turbo 5-Cyl AWD <br>401 hp, 369 lb-ft, 3680 lbs<br> $62,300", class: "Performance"},
        { id: 18, image: "golfR.jpg", name: "VW Golf R", specs: "2.0L Turbo AWD <br>315 hp, 310 lb-ft, 3300 lbs<br> $44,740", class: "Performance"},
        { id: 21, image: "gr86.jpg", name: "Toyota GR86", specs: "2.4L RWD <br>228 hp, 184 lb-ft, 2838 lbs<br> $28,400", class: "Performance"},
        { id: 17, image: "grc.jpg", name: "Toyota GR Corolla", specs: "1.6L Turbo AWD <br>300 hp, 195 lb-ft, 3276 lbs<br> $46,650", class: "Performance"},
        { id: 19, image: "typeR.jpg", name: "Honda Civic Type R", specs: "2.0L Turbo FWD <br>315 hp, 310 lb-ft, 3188lbs<br> $46,690", class: "Performance"},
        { id: 20, image: "integratypes.jpg", name: "Acura Integra Type S", specs: "2.0L Turbo FWD <br>320 hp, 310 lb-ft, 3219 lbs<br> $53,795", class: "Performance"},
        { id: 25, image: "caymanblue.jpg", name: "Porsche Cayman/Boxster", specs: "Inline 6-Cyl Engine <br>350 hp, 309  lb-ft, 3157 lbs<br> $86,795", class: "Performance"},
        { id: 26, image: "supra.jpg", name: "Toyota Supra", specs: "Inline 6-Cyl Engine <br>382 hp, 368 b-ft, 3411lbs<br> $59,685", class: "Performance"},
    ], 
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
    Performance: {
        name: 'Performance',
        image: 'performance.jpg' // Replace with the actual image path
   },
    Hybrids: {
        name: 'Hybrids',
        image: 'cross.jpg' // Replace with the actual image path
    }
};

const priceRanges = {
    '$20,000 - $40,000': [
        carTypes.Sedans[3], // Toyota Corolla Hybrid 
        carTypes.Sedans[4], // Honda Civic sedan 
        carTypes.Hybrids[2], // civic hybrid sedan
        carTypes.Hybrids[0], // civic hybrid hatch 
        carTypes.Sedans[5], //Camry
        carTypes.SUVs[7], //corolla corss
        carTypes.Hatchbacks[0], // Toyota Corolla Hatchback 
        carTypes.Hatchbacks[1], // Honda Civic Hatchback 
        carTypes.Hybrids[1], // Toyota Prius 
        carTypes.Performance[2], // Toyota GR86 
        carTypes.Hatchbacks[2], // VW Golf GTI 
        carTypes.Hatchbacks[3], // mazda 3
    ],
    '$40,000 - $50,000': [
        carTypes.SUVs[0], // BMW X3 ($43,700)
        carTypes.SUVs[1], // Audi Q5 ($43,300)
        carTypes.SUVs[8], //lexus rx350
        carTypes.Sedans[0], // BMW 3 Series Sedan ($43,800)
        carTypes.Sedans[1], // Lexus IS ($43,050)
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
    // updateBracket();
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
    // updateBracket();
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
