localStore("potatoz", 0);
localStore("unusedPotatoz", 0);
localStore("doneMessages", []);
localStore("patchPrice", 20);
localStore("patches", 0);
localStore("patchBoost", 1);
localStore("patchMax", 5);
localStore("patchFertilizer", false);
localStore("patchMultiplier", 1.2);
localStore("farmPrice", 250000);
localStore("farms", 0);
localStore("farmBoost", 1);
localStore("farmMax", 2);
localStore("farmsIrrigated", false);
localStore("farmsUnlocked", false);
localStore("cats", 0);
localStore("availableCats", 0)
localStore("catPrice", 1000000)
localStore("catsUnlocked", false)
localStore("farmers", 0);
localStore("farmerBoost", 0.1);
localStore("farmerReduce", false);
localStore("farmerCatsUnlocked", false);
localStore("students", 0);
localStore("studentBoost", 0.001);
localStore("studentCatsUnlocked", false);
localStore("surveyors", 0);
localStore("surveyorBoost", 0.001);
localStore("surveyorCatsUnlocked", false);
localStore("surveyorFarm", false);
localStore("soldierCats", 0);
localStore("soldierCatsUnlocked", false);
localStore("chaplains", 0);
localStore("chaplainBoost", 0.0001)
localStore("chaplainCatsUnlocked", false);
localStore("battlesUnlocked", false);
localStore("battleIntensity", 1);
localStore("selfReflectionUnlocked", false);
localStore("iq", 20);
localStore("iqButton", false);
localStore("iqCost", 10)
localStore("thoughts", 0);
localStore("thoughtBoost", 1);
localStore("thoughtSlider", false);
localStore("creativity", 0);
localStore("ideas", 0);
localStore("projects", []);
localStore("advancedNomics", false);
localStore("raidChance", 0.05);
localStore("percentWorldConquered", 0);
localStore("potatoLaunchers", false);
localStore("scouts", false);
localStore("stratsUnlocked", false);
localStore("strats", 0);
localStore("taterBombs", false);
localStore("flankingUnlocked", false);
localStore("takeoverAdded", false);
let randInt = new Random().getRandomNumber;
projects = projects.map(project => projectKey[project.title]);
projects.forEach(project => {
    project.set = false;
});
$("#patches").hide();
$("#brain").hide();
$("#buyThoughts").hide();
$("#projects").hide();
$("#advancedPotatonomics").hide();
$("#increaseIQ").hide();
$("#convertAll").hide();
$("#thoughtProduction").hide();
$("#farms").hide();
$("#farmProduces").hide();
$("#cats").hide();
$("#farmerCats").hide();
$("#studentCats").hide();
$("#surveyorCats").hide();
$("#battles").hide();
$("#battleField").hide();
$("#strategums").hide();
$("#chaplainCats").hide();
if (patchFertilizer) {
    setInterval(() => {
        patchBoost = (patchBoost + 0.05).A();
    }, 5000);
}
if (farmsIrrigated) {
    setInterval(() => {
        farmBoost = (farmBoost + 0.1).A();
    }, 5000)
}
if (doneMessages.includes("patches")) {
    $("#patches").show();
}
if (doneMessages.includes("self")) {
    $("#brain").show();
    $("#buyThoughts").show();
    $("#projects").show();
}
if (advancedNomics) {
    $("#advancedPotatonomics").show();
}
if (iqButton) {
    $("#increaseIQ").show();
}
if (selfReflectionUnlocked) {
    $("#convertAll").show();
}
if (thoughtSlider) {
    $("#thoughtProduction").show();
}
if (farmsUnlocked) {
    $("#farms").show();
    $("#farmProduces").show();
    $("#patchProduces").hide();
}
if (catsUnlocked) {
    $("#cats").show();
}
if (farmerCatsUnlocked) {
    $("#farmerCats").show();
}
if (studentCatsUnlocked) {
    $("#studentCats").show();
}
if (surveyorCatsUnlocked) {
    $("#surveyorCats").show();
}
if (soldierCatsUnlocked) {
    $("#battles").show();
}
if (battlesUnlocked) {
    $("#battleField").show();
}
if (stratsUnlocked) {
    $("#strategums").show();
}
if (chaplainCatsUnlocked) {
    $("#chaplainCats").show();
}
$("#potatozPlus").click(() => {
    potatoz++;
    unusedPotatoz++;
});
$("#buyAPatch").click(() => {
    if (unusedPotatoz >= patchPrice && patches < patchMax) {
        unusedPotatoz -= patchPrice;
        patchPrice = Math.floor(patchPrice * patchMultiplier);
        patches += 1;
    }
});
$("#buyAFarm").click(() => {
    if (unusedPotatoz >= farmPrice && farms < Math.floor(farmMax)) {
        unusedPotatoz -= farmPrice;
        farmPrice = Math.floor(farmPrice * 1.5);
        farms += 1;
    }
});
$("#buyACat").click(() => {
    if (unusedPotatoz >= catPrice) {
        unusedPotatoz -= catPrice;
        catPrice = Math.floor(catPrice * 1.05);
        cats += 1;
        availableCats += 1;
    }
});

$("#recallAllCats").click(() => {
    farmers = 0;
    students = 0;
    surveyors = 0;
    soldierCats = 0;
    chaplains = 0;
    availableCats = cats;
});
$("#numFarmerCats").click(e => e.stopPropagation());
$("#numStudentCats").click(e => e.stopPropagation());
$("#numSurveyorCats").click(e => e.stopPropagation());
$("#numSoldierCats").click(e => e.stopPropagation());
$("#numChaplainCats").click(e => e.stopPropagation());

$("#assignFarmer").click(() => {
    if (availableCats > 0) {
        let withdrawAmount = Math.max(parseNum($("#numFarmerCats").val()), 0);
        if (withdrawAmount > availableCats) {
            addMessage("You can't withdraw more than you have!");
            return;
        }
        availableCats -= withdrawAmount;
        farmers += withdrawAmount;
    }
});
$("#assignStudent").click(() => {
    if (availableCats > 0) {
        let withdrawAmount = Math.max(parseNum($("#numStudentCats").val()), 0);
        if (withdrawAmount > availableCats) {
            addMessage("You can't withdraw more than you have!");
            return;
        }
        availableCats -= withdrawAmount;
        students += withdrawAmount;
    }
});
$("#assignSurveyor").click(() => {
    if (availableCats > 0) {
        let withdrawAmount = Math.max(parseNum($("#numSurveyorCats").val()), 0);
        if (withdrawAmount > availableCats) {
            addMessage("You can't withdraw more than you have!");
            return;
        }
        availableCats -= withdrawAmount;
        surveyors += withdrawAmount;
    }
});
$("#assignSoldier").click(() => {
    if (availableCats > 0) {
        let withdrawAmount = Math.max(parseNum($("#numSoldierCats").val()), 0);
        if (withdrawAmount > availableCats) {
            addMessage("You can't withdraw more than you have!");
            return;
        }
        availableCats -= withdrawAmount;
        soldierCats += withdrawAmount;
    }
});
$("#assignChaplain").click(() => {
    if (availableCats > 0) {
        let withdrawAmount = Math.max(parseNum($("#numChaplainCats").val()), 0);
        if (withdrawAmount > availableCats) {
            addMessage("You can't withdraw more than you have!");
            return;
        }
        availableCats -= withdrawAmount;
        chaplains += withdrawAmount;
    }
});
$("#buyCreat").click(() => {
    if (thoughts > 4) {
        thoughts -= 5;
        creativity += 1;
    }
});
$("#buyIdea").click(() => {
    if (thoughts > 9) {
        thoughts -= 10;
        ideas += 1;
    }
});
$("#convertAll").click(() => {
    ideas += Math.floor(thoughts / 20);
    creativity += Math.floor(thoughts / 10);
    thoughts = 0;
});
$("#increaseIQ").click(() => {
    if (unusedPotatoz >= iqCost) {
        iq++;
        unusedPotatoz -= iqCost;
        iqCost = Math.ceil(iqCost ** 1.05);
    }
});
$("#buyStrategum").click(() => {
    if (creativity > parseNum("1M") && ideas > parseNum("1M")) {
        creativity -= parseNum("1M");
        ideas -= parseNum("1M");
        strats += 1;
    }
})
$("#battle").click(() => {
    if (!battleOn) battle(soldierCats, 100 * battleIntensity);
});

function format(number, decPlaces = 2) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "D"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number * decPlaces / size) / decPlaces;

            // Handle special case where we round up to the next abbreviation
            if ((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }

            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }

    return number;
}
let updateId = setInterval(() => {
    $("#potatozAmount").html(`Total Potatoz: ${format(potatoz)}`);
    $("#unusedPotatozAmount").html(`Available potatoz: ${format(unusedPotatoz)}`);
    $("#buyAPatch").html(`Buy a patch for ${format(patchPrice)} potatoes.`);
    $("#patchesAmount").html(`Patches: ${format(patches)}`);
    $("#patchMax").html(`Patch Max: ${format(patchMax)}`);
    $("#buyAFarm").html(`Buy a farm for ${format(farmPrice)} potatoes.`);
    $("#farmAmount").html(`Farms: ${format(farms)}`);
    $("#farmMax").html(`Farm Max: ${format(farmMax)}`);
    $("#buyACat").html(`Buy a cat for ${format(catPrice)} potatoes.`);
    $("#catAmount").html(`Cats: ${format(availableCats.A())} / ${format(cats.A())}`);
    $("#eachBoostFarmer").html(`Each farmer cat adds a ${format(farmerBoost*100)}% boost to potato production.`);
    $("#totalBoostFarmer").html(`Total farmer cat boost provided: ${format((farmerBoost*farmers*100).A())}%`)
    $("#farmerCatAmount").html(`Farmer Cats: ${format(farmers)}`);
    $("#studentCatAmount").html(`Student Cats: ${format(students)}`);
    $("#eachBoostStudent").html(`Each student cat generates ${format(studentBoost)} IQ per second.`);
    $("#totalBoostStudent").html(`Total IQ per second: ${format((studentBoost*students).A())}`);
    $("#surveyorCatAmount").html(`Surveyor Cats: ${format(surveyors)}`);
    $("#eachBoostSurveyor").html(`Each surveyor cat generates ${format(surveyorBoost)} farm max per second.`);
    $("#totalBoostSurveyor").html(`Total Farm Max Added Per Sec: ${format((surveyorBoost*surveyors).A())}`);
    $("#chaplainCatAmount").html(`Chaplain Cats: ${format(chaplains)}`);
    $("#eachBoostChaplain").html(`Each chaplain cat provides +${format(chaplainBoost)} boost per second.`);
    $("#totalBoostChaplain").html(`Total boost added per sec: ${format((chaplains*chaplainBoost).A())}`)
    $("#soldierCatAmount").html(`Soldier Cats: ${format(soldierCats)}`);
    $("#percentConquered").html(`Percent of the World Conquered: ${format(percentWorldConquered)}%`);
    $("#battleDiff").html(`${
    (scouts) ?
    "Battle Difficulty: " + calcDiff(soldierCats, 100*battleIntensity)
    :
    ""
  }
  `);
    $("#iq").html(`IQ: ${format(iq)}`);
    $("#thoughts").html(`Thoughts: ${format(thoughts)}`);
    $("#creat").html(`Creativity: ${format(creativity)}`);
    $("#ideas").html(`Ideas: ${format(ideas)}`);
    $("#increaseIQ").html(`+1 IQ for ${format(iqCost)} potatoes`);
    $("#productionPercentDisplay").html(`Percent alocated to production: ${$("#productionPercent").val()}%`)
    $("#weapons").html(`Weapons Equipped: ${(potatoLaunchers) ? "<br> Potato Launchers" : ""} ${(taterBombs) ? "<br> Tater Tot Bombs" : ""}`);
    $("#stratCount").html(`Strategums: ${strats}`);
}, 1);
let consoleId = setInterval(() => {
    if (potatoz > 19 && !doneMessages.includes("patches") && !farmsUnlocked) {
        doneMessages.push("patches");
        $("#patches").show();
        addMessage("If you put a potato in the ground, maybe another one will grow. Hmmm.");
        addMessage("Potato patches are now available for purchase. They generate one potato a second.");
    }
    if (potatoz > 249 && !doneMessages.includes("self")) {
        doneMessages.push("self");
        $("#brain").show();
        $("#buyThoughts").show();
        $("#projects").show();
        projects.push(wateringCans);
        addMessage("Self-awareness achieved. Thoughts to be redirected to maximize potato production.");
        addMessage("Rumor is that potatoes make you smarter.");
        setTimeout(() => {
            addMessage("Creativity and Ideas are bound to come from thoughts.");
            addMessage("And then you can use them to complete projects.")
        }, 500);
    }
    if (percentWorldConquered >= 100 && !takeoverAdded) {
        addMessage("World conquered.");
        addMessage("Battles are still available to fight local uprisings, and to aquire resources.");
        projects.push(takeOverTheWorld);
        takeoverAdded = true;
    }
}, 1);
let updatePotatoz = setInterval(() => {
    if (potatoz > parseNum("1B") && Math.random() < raidChance) {
        dogRaid();
    }
    let incAmount = 0;
    incAmount += Math.ceil(patches * patchBoost);
    incAmount += Math.ceil(farms * farmBoost * 5000);
    if (farmers > 0) {
        incAmount += (farmerBoost * farmers * incAmount);
    }
    if (farmerReduce && farmPrice > 200000) {
        farmPrice -= (farmers * 10);
    }
    potatoz += incAmount;
    unusedPotatoz += incAmount;
    if (chaplainCatsUnlocked) {
        let chaplainPlus = (chaplains * chaplainBoost).A();
        farmBoost += chaplainPlus;
        farmerBoost += chaplainPlus;
        studentBoost += chaplainPlus;
        surveyorBoost += chaplainPlus;
    }
    iq = (iq + students * studentBoost).A();
    farmMax = (farmMax + surveyors * surveyorBoost).A();
    if (surveyorFarm) farms = (farms + surveyors * surveyorBoost).A();
    $("#pPerSec").html(`Potatoz per sec: ${format(incAmount)}`);
    $("#patchProduces").html(`Each patch produces: ${format(patchBoost)} per sec`)
    $("#farmProduces").html(`Each farm produces: ${format(farmBoost*5000)} per sec`)
    if (doneMessages.includes("self")) {
        let thoughtInc = Math.floor((Math.ceil(iq ** 2 / 200)) * thoughtBoost);
        if (!thoughtSlider) {
            thoughts += thoughtInc;
        } else {
            let sliderAmount = Number($("#productionPercent").val())
            let thoughtsForProduction = thoughtInc * sliderAmount / 100
            thoughtInc -= thoughtsForProduction;
            thoughtInc = Math.floor(thoughtInc);
            thoughts += thoughtInc;
            creativity += Math.ceil(((thoughtsForProduction / 2) / 5))
            ideas += Math.ceil(((thoughtsForProduction / 2) / 10))
        }
    }
}, 1000);

let updateButtons = setInterval(() => {
    if (!(unusedPotatoz >= patchPrice && patches < patchMax)) {
        $("#buyAPatch").attr("disabled", "");
    } else {
        $("#buyAPatch").removeAttr("disabled");
    }
    if (!(unusedPotatoz >= farmPrice && farms < Math.floor(farmMax))) {
        $("#buyAFarm").attr("disabled", "");
    } else {
        $("#buyAFarm").removeAttr("disabled");
    }
    if (!(unusedPotatoz >= catPrice)) {
        $("#buyACat").attr("disabled", "");
    } else {
        $("#buyACat").removeAttr("disabled");
    }
    if (!(availableCats > 0)) {
        $("#assignFarmer").attr("disabled", "");
        $("#assignStudent").attr("disabled", "");
        $("#assignSurveyor").attr("disabled", "");
        $("#assignSoldier").attr("disabled", "");
        $("#assignChaplain").attr("disabled", "");
    } else {
        $("#assignFarmer").removeAttr("disabled");
        $("#assignStudent").removeAttr("disabled");
        $("#assignSurveyor").removeAttr("disabled");
        $("#assignSoldier").removeAttr("disabled");
        $("#assignChaplain").removeAttr("disabled");
    }
    if (availableCats === cats) {
        $("#recallAllCats").attr("disabled", "");
    } else {
        $("#recallAllCats").removeAttr("disabled");
    }
    if (!(unusedPotatoz >= iqCost)) {
        $("#increaseIQ").attr("disabled", "");
    } else {
        $("#increaseIQ").removeAttr("disabled");
    }
    if (thoughts < 5) {
        $("#buyCreat").attr("disabled", "");
    } else {
        $("#buyCreat").removeAttr("disabled");
    }
    if (thoughts < 10) {
        $("#buyIdea").attr("disabled", "");
    } else {
        $("#buyIdea").removeAttr("disabled", "");
    }
    if (!(soldierCats > 0)) {
        $("#battle").attr("disabled", "");
    } else {
        $("#battle").removeAttr("disabled");
    }
}, 1)

let updateProjects = setInterval(() => {
    projects.forEach(project => {
        if (!project.set) {
            project.setup();
        }
    });
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].done) projects.splice(i, 1);
    }
}, 1);

function reset() {
    potatoz = 0;
    unusedPotatoz = 0;
    doneMessages = [];
    patchPrice = 50;
    patches = 0;
    patchBoost = 1;
    patchMax = 5;
    patchFertilizer = false;
    patchMultiplier = 1.2;
    farmPrice = 250000;
    farms = 0;
    farmBoost = 1;
    farmMax = 2;
    farmsIrrigated = false;
    farmsUnlocked = false;
    cats = 0;
    availableCats = 0;
    catPrice = 1000000;
    catsUnlocked = false;
    farmers = 0
    farmerBoost = 0.1;
    farmerReduce = false;
    farmerCatsUnlocked = false;
    students = 0;
    studentBoost = 0.001;
    studentCatsUnlocked = false;
    surveyors = 0;
    surveyorBoost = 0.001;
    surveyorCatsUnlocked = false;
    surveyorFarm = false;
    soldierCats = 0;
    soldierCatsUnlocked = false;
    chaplains = 0;
    chaplainBoost = 0.0001;
    chaplainCatsUnlocked = false;
    battlesUnlocked = false;
    battleIntensity = 1;
    iq = 20;
    iqButton = false;
    iqCost = 10;
    thoughts = 0;
    thoughtBoost = 1;
    thoughtSlider = false;
    creativity = 0;
    ideas = 0;
    projects = [];
    advancedNomics = false;
    raidChance = 0.05;
    percentWorldConquered = 0;
    potatoLaunchers = false;
    scouts = false;
    stratsUnlocked = false;
    strats = 0;
    taterBombs = false;
    flankingUnlocked = false;
    takeoverAdded = false;
}

function dogRaid() {
    let raidingDogs = randInt(30, 200);
    if (soldierCats > 0) {
        let loss = Math.floor(Math.sqrt(soldierCats) ** 3);
        loss += randInt(-30, 30);
        if (loss >= raidingDogs) {
            addMessage("Your soldier cats stopped and destroyed a dog raid!");
            return;
        }
        addMessage(`Your soldier cats intercepted ${loss} dogs`);
        raidingDogs -= loss;
    }
    addMessage(`${raidingDogs} dogs raided your potato empire.`);
    let potatoesLost = Math.floor(unusedPotatoz * (Math.sqrt(raidingDogs) * 0.04));
    addMessage(`${format(potatoesLost)} potatoes lost.`);
    unusedPotatoz -= potatoesLost;
}

function calcDiff(catPow, enemyPow) {
    if (potatoLaunchers) catPow += (catPow * 5);
    if (taterBombs) catPow *= 2;
    let ratio = catPow / enemyPow;
    if (ratio > 10) {
        return "Absolute Cake";
    } else if (ratio > 5) {
        return "Very Easy";
    } else if (ratio > 3) {
        return "Pretty Easy";
    } else if (ratio > 1.5) {
        return "Medium";
    } else if (ratio > 0.8) {
        return "Moderate";
    } else if (ratio > 0.5) {
        return "Hard";
    } else if (ratio > 0.3) {
        return "Very Hard";
    } else if (ratio > 0.1) {
        return "Near Impossible";
    } else {
        return "DO NOT CLICK THAT BATTLE BUTTON!";
    }
}

function askForReset() {
    swal({
        title: "Are you sure you want to reset?",
        text: "Reseting means you will lose all your progress, hours of work.",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willReset) => {
        if (willReset) reset();
    })
}
setTimeout(() => {
    $("#console").html(`
<button class="w3-right w3-button w3-text-white w3-grey w3-hover-lightgrey"><a href="numbers.txt" target="_blank">What do those weird letter abbreviations mean?</a></button>
You're a cat, producting potatoz!`);
}, 10);