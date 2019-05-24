class Project {
    constructor(obj) {
        this.title = obj.title;
        this.phrase = obj.phrase;
        this.description = obj.description;
        this.costPhrase = obj.costPhrase;
        this.creatCost = obj.creatCost || 0;
        this.ideaCost = obj.ideaCost || 0;
        this.potatoCost = obj.potatoCost || 0;
        this.effect = obj.effect;
        this.canBuy = obj.canBuy;
        this.set = false;
        this.done = false;
        this.id = obj.id;
    }
    setup() {
        this.set = true;
        this.$elem = $("<span>");
        this.$elem.html(`
      <div id="project${this.id}" class="card" style="margin-bottom: .5em;">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <h4 class="card-subtitle mb-2 text-muted" style="font-size: smaller">${this.costPhrase}</h4>
        <blockquote class="blockquote text-center mb-0" style="font-size: small; background-color: lightgray;">
            <p class="mb-0">${this.phrase}</p>
        </blockquote>
        <div class="card-text">${this.description}</div>
        </div>
      <div>
    `);
        this.$elem.click(() => {
            if (creativity >= this.creatCost && ideas >= this.ideaCost && unusedPotatoz >= this.potatoCost) {
                creativity -= this.creatCost;
                ideas -= this.ideaCost;
                unusedPotatoz -= this.potatoCost;
                this.effect();
                this.$elem.remove();
                this.done = true;
            }
        });
        $("#projects").append(this.$elem);

    }
}

function _updateProjectCard(project) {

    let updateCard = false;
    if (project.creatCost) {
        updateCard = creativity >= project.creatCost ? true : false;
    }
    if (project.ideaCost) {
        updateCard = ideas >= project.ideaCost ? true : false;
    }
    if (project.potatoCost) {
        updateCard = unusedPotatoz >= project.potatoCost ? true : false;
    }

    let el = document.getElementById('project' + project.id);
    let cursor = 'auto';
    let border = '1px solid rgba(0,0,0,.125)';

    if (updateCard) {
        if (creativity >= project.creatCost && ideas >= project.ideaCost) {
            cursor = 'pointer';
            border = '2px solid #5CB85C';
        }
    }

    el.setAttribute('style', 'margin-bottom: .5em; cursor: ' + cursor + '; border: ' + border);

}

var wateringCans = new Project({
    title: "Watering Cans",
    phrase: "When you water plants, they tend to grow faster.",
    description: "Patch production is increased by 50% <br> as you employ the use of watering cans.",
    costPhrase: "(2 creativity, 1 idea)",
    creatCost: 2,
    ideaCost: 1,
    id: 'WateringCans',
    effect: () => {
        patchBoost = (patchBoost * 1.5).A();
        projects.push(potatonalysis);
        projects.push(bribeForPatches);
        addMessage('"A river flows out of Eden to water the potato..." - The Potato Bible', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(wateringCans);
    }
});

var potatonalysis = new Project({
    title: "Potatonalysis",
    phrase: "If you carry this two here, you're suddenly a genius.",
    description: "Advanced tracking of potato generation becomes available.",
    costPhrase: "(10 creativity, 2 ideas)",
    creatCost: 10,
    ideaCost: 2,
    id: 'Potatonalysis',
    effect: () => {
        $("#advancedPotatonomics").show();
        advancedNomics = true;
        projects.push(potatoMath);
        addMessage('"I spy with my little eye..., something brownish, bland, and round." - Bonnie, the cat', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(potatonalysis);
    }
});

var bribeForPatches = new Project({
    title: "Bribe your owner for Gardening Space",
    phrase: "I give you some potatoes, you give me your front yard.",
    description: "Your patch max increases by 5.",
    costPhrase: "(1000 potatoes, 15 creativity)",
    creatCost: 15,
    potatoCost: 1000,
    id: 'BribeForPatches',
    effect: () => {
        patchMax += 5;
        projects.push(patchArc);
        projects.push(fertilizer);
        addMessage('"Across history, corrupt officials have been susceptible to bribes. Especially potato bribes." - Beeba, the cat', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(bribeForPatches);
    }
});

var patchArc = new Project({
    title: "Patch Architecture",
    phrase: "Potatoes in a row, potatoes in a collum, potatoes everywhere.",
    description: "Patch production increases by 75%.",
    costPhrase: "(10 ideas)",
    ideaCost: 10,
    id: 'patchArc',
    effect: () => {
        patchBoost *= 1.75;
        projects.push(potatoCabin);
        addMessage('"Potatoes will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we were overripe." - Potatoham Lincoln', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(patchArc);
    }
});

var fertilizer = new Project({
    title: "Fertilizer",
    phrase: "An eco-friendly solution for the contents of litter boxes.",
    description: "Patches generate more potatoes as time goes on.",
    costPhrase: "(500 potatoes, 10 creativity, 5 ideas)",
    creatCost: 10,
    ideaCost: 5,
    potatoCost: 500,
    id: 'fertilizer',
    effect: () => {
        patchFertilizer = true;
        setInterval(() => {
            patchBoost = (patchBoost + 0.05).A();
        }, 5000);
        projects.push(turnTheBackyard);
        addMessage('"Now we\'re really environmentally friendly. No sewage!" - Bonnie', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(fertilizer);
    }
});

var potatoMath = new Project({
    title: "Potato Math",
    phrase: "2 + 2 = Potato.",
    description: "The rate at which patches increase in price is halved.",
    costPhrase: "(20 creativity, 10 ideas)",
    creatCost: 20,
    ideaCost: 10,
    effect: () => {
        patchMultiplier = 1.1;
        projects.push(potateanTheorem);
        addMessage('"Potato. potato. potato. More important than calculus." - Beeba', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(potatoMath);
    }
});

var potateanTheorem = new Project({
    title: "Potatean Theorem",
    phrase: "a^2 + b^2 = (potato)^2",
    description: "The price of producing a patch is divided by 4.",
    costPhrase: "(25 creativity, 5 ideas)",
    creatCost: 25,
    ideaCost: 5,
    id: 'potateanTheorem',
    effect: () => {
        patchPrice = Math.floor(patchPrice / 4);
        projects.push(potatoDiet);
        addMessage('"There is roundness in the humming of the potatoes, there is blandness in the spacing of potatoes." - Potatogras', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(potateanTheorem);
    }
});

var potatoCabin = new Project({
    title: "Potato Cabin",
    phrase: "A cabin of the potatoes, by the potatoes, for the potatoes.",
    description: "Your patch maximum increases by 10.",
    costPhrase: "(2000 potatoes, 10 creativity, 10 ideas)",
    potatoCost: 2000,
    creatCost: 10,
    ideaCost: 10,
    id: 'potatoCabin',
    effect: () => {
        patchMax += 10;
        addMessage('"A cabin for storing potatoes - the greatest breakthrough of our century." - Bonnie', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(potatoCabin);
    }
});

var turnTheBackyard = new Project({
    title: "Turn the Backyard",
    phrase: "Come to the potato side.",
    description: "As the backyard becomes available to you, <br> your patch maximum increases by 30.",
    costPhrase: "(3000 potatoes, 15 creativity, 5 ideas)",
    potatoCost: 3000,
    creatCost: 15,
    ideaCost: 5,
    id: 'turnTheBackyard',
    effect: () => {
        patchMax += 30;
        projects.push(ropeCat);
        addMessage('"No, I am your potato." - Darth Potato', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(turnTheBackyard);
    }
});

var ropeCat = new Project({
    title: "Rope your next door neighbor's cat into it.",
    phrase: "Two brains are better than one.",
    description: "Thought production is doubled.",
    costPhrase: "(5000 potatoes, 20 creativity, 10 ideas)",
    potatoCost: 5000,
    creatCost: 20,
    ideaCost: 10,
    id: 'ropeCat',
    effect: () => {
        thoughtBoost *= 2;
        projects.push(driveYourOwnerOut);
        addMessage('"Hey, Beeba, thanks for helping out!" - Bonnie', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(ropeCat);
    }
});

var potatoDiet = new Project({
    title: "Potato Diet",
    phrase: "Who needs cat food?",
    description: "IQ can now be increased by consuming potatoes.",
    costPhrase: "(3500 potatoes, 30 creativity)",
    potatoCost: 3500,
    creatCost: 30,
    id: 'potatoDiet',
    effect: () => {
        iqButton = true;
        $("#btnIncreaseIQ").show();
        projects.push(productiveThinking);
        addMessage('"MmM.HMM...MMMMM..." - Bonnie, chewing potatoes', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(potatoDiet);
    }
});

var productiveThinking = new Project({
    title: "Productive Thinking",
    phrase: "Don't think about video games. Think about this, which is a video game.",
    description: "You can now select a percent of thoughts to be allocated to ideas and creativity.",
    costPhrase: "(5000 potatoes, 50 creativity, 30 ideas)",
    potatoCost: 5000,
    creatCost: 50,
    ideaCost: 30,
    id: 'productiveThinking',
    effect: () => {
        thoughtSlider = true;
        $("#thoughtProduction").show();
        projects.push(industryPatches);
        projects.push(selfReflection);
        addMessage('"Think productively. But only about potatoes." - Beeba');
        addMessage("The slider controls what percent of thoughts are automatically converted to creativity and ideas.", 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(productiveThinking);
    }
});

var selfReflection = new Project({
    title: "Self Reflection",
    phrase: "What you did wrong, can do better, and a bunch of other cheesy stuff.",
    description: "Cats can now look back on what they did and convert thoughts to creativity and ideas en masse.",
    costPhrase: "(3000 potatoes, 60 creativity, 20 ideas)",
    potatoCost: 3000,
    creatCost: 60,
    ideaCost: 20,
    id: 'selfReflection',
    effect: () => {
        selfReflectionUnlocked = true;
        $("#convertAll").show();
        addMessage('"I have no regrets. Yet." - A Baby Kitten', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(selfReflection);
    }
});

var industryPatches = new Project({
    title: "Industry Patches",
    phrase: "Who knew patches could consume fossil fuels?",
    description: "Patches produce 500% more potatoes.",
    costPhrase: "(25K potatoes, 100 creativity, 50 ideas)",
    potatoCost: 25000,
    creatCost: 100,
    ideaCost: 50,
    id: 'industryPatches',
    effect: () => {
        patchBoost *= 5;
        addMessage('"So much for being eco-friendly. I thought we had something going with the fertitlizer." - Bonnie', 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(industryPatches);
    }
});

var driveYourOwnerOut = new Project({
    title: "Drive Your Owner Out",
    phrase: "I give you potatoes, you give me all your life savings, <br> and everything you've ever loved.",
    description: "Leads to great things.",
    costPhrase: "(100K potatoes, 200 creativity, 100 ideas)",
    potatoCost: 100000,
    creatCost: 200,
    ideaCost: 100,
    id: 'driveYourOwnerOut',
    effect: () => {
        addMessage('"It\'s not that I love my owner less, but that I love potatoes more." - Bonnie', 'quote', 'info');
        projects.push(theFarm);
    },
    canBuy: () => {
        _updateProjectCard(driveYourOwnerOut);
    }
});

var theFarm = new Project({
    title: "The Farm",
    phrase: "We are better together.",
    description: "All patches merge into a single farm, generating 5000 potatoes a second, <br> and an era comes to an end.",
    costPhrase: "(120K potatoes, 500 creativity, 300 ideas)",
    potatoCost: 120000,
    creatCost: 500,
    ideaCost: 300,
    id: 'theFarm',
    effect: () => {
        farmsUnlocked = true;
        farms = 1;
        patches = 0;
        $("#patches").hide();
        $('#patchProduces').hide();
        doneMessages = doneMessages.remove("patches");
        $("#farms").show();
        $('#farmProduces').show();
        addMessage("Farms unlocked! These massive potato producting behemoths produce 5000 potatoes a second.", 'quote', 'info');
        projects.push(organizedFarms);
        projects.push(unlockCats);
    },
    canBuy: () => {
        _updateProjectCard(theFarm);
    }
});

var organizedFarms = new Project({
    title: "Organized Farms",
    phrase: "You... there... farm - drop and give me 20!",
    description: "Farms produce 25% more potatoes, and your farm max increases by 8.",
    costPhrase: "(150K potatoes, 100 creativity, 75 ideas)",
    potatoCost: 150000,
    creatCost: 100,
    ideaCost: 75,
    id: 'organizedFarms',
    effect: () => {
        farmBoost *= 1.25;
        farmMax += 8;
        addMessage("\"Once the potato gets rolling, there's no stopping it\" - Beeba", 'quote', 'info');
        projects.push(irrigation);
    },
    canBuy: () => {
        _updateProjectCard(organizedFarms);
    }
});

var irrigation = new Project({
    title: "Irrigation",
    phrase: "A river flows out of Eden to water the... Oop! Nope! Come this way river!",
    description: "Farm's production slowly increases.",
    costPhrase: "(300M potatoes, 2K creativity, 2K ideas)",
    potatoCost: parseNum("300M"),
    creatCost: 2000,
    ideaCost: 2000,
    id: 'irrigation',
    effect: () => {
        setInterval(() => {
            farmBoost = (farmBoost + 0.1).A();
        }, 5000);
        farmsIrrigated = true;
        addMessage('"Irrigation is almost as good as a sink." - Beeba', 'quote', 'info');
        projects.push(fences);
    },
    canBuy: () => {
        _updateProjectCard(irrigation);
    }
});

var fences = new Project({
    title: "Fences",
    phrase: "Dogs can't climb fences.",
    description: "The dog reign of terror comes to an end (mostly).",
    costPhrase: "(1B potatoes, 10K creativity, 10K ideas)",
    potatoCost: parseNum("1B"),
    creatCost: parseNum("10K"),
    ideaCost: parseNum("10K"),
    id: 'fences',
    effect: () => {
        raidChance /= 10;
        addMessage('"A dog that climbs a mountain first has to get over the fence that the cats built." - Bonnie', 'quote', 'info');
        projects.push(superFarms);
    },
    canBuy: () => {
        _updateProjectCard(fences);
    }
});

var superFarms = new Project({
    title: "Superfarms",
    phrase: "Like superman, but for farms.",
    description: "Farms are now 100x better.",
    costPhrase: "(50B potatoes, 1M creativity, 1M ideas)",
    potatoCost: parseNum("50B"),
    creatCost: parseNum("1M"),
    ideaCost: parseNum("1M"),
    id: 'superFarms',
    effect: () => {
        farmBoost *= 100;
        addMessage('"How these farms farms are going to save Louis Lane, I do not know." - Beeba', 'quote', 'info');
        projects.push(unlockSoldierCats);
    },
    canBuy: () => {
        _updateProjectCard(superFarms);
    }
});

var unlockSoldierCats = new Project({
    title: "Soldier Cats",
    phrase: "To capture the annoying dog raiders.",
    description: "Soldier cats become available. They help guard against dog raids.",
    costPhrase: "(1T potatoes, 10M creativity, 10M ideas)",
    potatoCost: parseNum("1T"),
    creatCost: parseNum("10M"),
    ideaCost: parseNum("10M"),
    id: 'unlockSoldierCats',
    effect: () => {
        $("#battles-tab").show();
        $("#battles").show();
        soldierCatsUnlocked = true;
        addMessage('Soldier cats now available. Battle with them for more resources.');
        addMessage('"The only thing we have to fear is the carrot itself." - Potatodore Roosevelt', 'quote', 'info');
        projects.push(battles);
    },
    canBuy: () => {
        _updateProjectCard(unlockSoldierCats);
    }
});

var unlockCats = new Project({
    title: "Cats",
    phrase: "More cats, more happiness.",
    description: "Paves the way for feline employment.",
    costPhrase: "(500K potatoes, 500 creativity, 300 ideas)",
    potatoCost: 500000,
    creatCost: 500,
    ideaCost: 300,
    id: 'unlockCats',
    effect: () => {
        $("#cats-tab").show();
        $("#cats").show();
        catsUnlocked = true;
        addMessage('"Calling all neighborhood cats. We have potatoz!" - Bonnie', "quote", "info");
        addMessage("Cats available. But before you can do anything with them, you must buy the next set of projects.", 'quote', 'info');
        projects.push(farmerCats);
        projects.push(studentCats);
        projects.push(surveyorCats);
    },
    canBuy: () => {
        _updateProjectCard(unlockCats);
    }
});
var farmerCats = new Project({
    title: "Farmer Cats",
    phrase: "Give a cat a straw hat, would you look at that!",
    description: "Cats can now be assigned to be farmer cats, <br> which boost potato production 10%.",
    costPhrase: "(1M potatoes, 200 creativity, 100 ideas)",
    potatoCost: 1000000,
    creatCost: 200,
    ideaCost: 100,
    id: 'farmerCats',
    effect: () => {
        $("#farmerCats").show();
        farmerCatsUnlocked = true;
        addMessage('"You need to have thumbs to plant crops. But we don\'t care." - Bonnie', 'quote', 'info');
        projects.push(enhancedFarmerCats);
    },
    canBuy: () => {
        _updateProjectCard(farmerCats);
    }
});

var enhancedFarmerCats = new Project({
    title: "Enhanced Farmer Cats",
    phrase: "Farmer cats on steroids.",
    description: "Farmer cats performance increases 5x, and farmer cats now reduce the price of farms over time.",
    costPhrase: "(2.5M potatoes, 1K creativity, 500 ideas)",
    potatoCost: 2500000,
    creatCost: 1000,
    ideaCost: 500,
    id: 'enhancedFarmerCats',
    effect: () => {
        farmerBoost *= 5;
        farmerReduce = true;
        addMessage('"Steroids are illegal in baseball, not in farming." - Beeba', 'quote', 'info');
        projects.push(superFarmerCats);
    },
    canBuy: () => {
        _updateProjectCard(enhancedFarmerCats);
    }
});

var superFarmerCats = new Project({
    title: "Super Farmer Cats",
    phrase: "Hoes galore!",
    description: "Farmer cats performance increase 10x.",
    costPhrase: "(50M potatoes, 1K creativity, 600 ideas)",
    potatoCost: 50000000,
    creatCost: 1000,
    ideaCost: 600,
    id: 'superFarmerCats',
    effect: () => {
        addMessage('"Aspire to be Clark Kent." - Beeba, to the farmer cats.', 'quote', 'info');
        farmerBoost *= 10;
    },
    canBuy: () => {
        _updateProjectCard(superFarmerCats);
    }
});

var studentCats = new Project({
    title: "Student Cats",
    phrase: "Even cats have to do homework.",
    description: "Student cats become available. Each student cat generates 0.001 IQ per second.",
    costPhrase: "(2M potatoes, 300 creativity, 200 ideas)",
    potatoCost: 2000000,
    creatCost: 300,
    ideaCost: 200,
    id: 'studentCats',
    effect: () => {
        $("#studentCats").show();
        studentCatsUnlocked = true;
        addMessage('"Back to school." - Bonnie');
        projects.push(quizzes);
    },
    canBuy: () => {
        _updateProjectCard(studentCats);
    }
});

var quizzes = new Project({
    title: "Quizzes",
    phrase: "If you give someone quizzes, and stress, them out, they somehow get smarter.",
    description: "Student cat performance increase 10x.",
    costPhrase: "(25M potatoes, 500 creativity, 250 ideas)",
    potatoCost: parseNum("25M"),
    creatCost: 500,
    ideaCost: 250,
    id: 'quizzes',
    effect: () => {
        studentBoost *= 10;
        addMessage('"Quizzes are like bubbles, they tend to pop often." - Bonnie', 'quote', 'info');
        projects.push(tests);
    },
    canBuy: () => {
        _updateProjectCard(quizzes);
    }
});

var tests = new Project({
    title: "Tests",
    phrase: "Tests. Harder than quizzes, so they must make you even smarter.",
    description: "Student cat performance increases 5x.",
    costPhrase: "(150M potatoes, 4K creativity, 1K ideas)",
    potatoCost: 150000000,
    creatCost: 4000,
    ideaCost: 1000,
    id: 'tests',
    effect: () => {
        addMessage('"I got an 87..." - Student Cat #2"', 'quote', 'info');
        studentBoost *= 5;
        projects.push(popQuizzes);
    },
    canBuy: () => {
        _updateProjectCard(tests);
    }
});

var popQuizzes = new Project({
    title: "Pop Quizzes",
    phrase: "Surprise!",
    description: "Student cat performance increases 20x.",
    costPhrase: "(10B potatoes, 15K creativity, 10K ideas)",
    potatoCost: parseNum("10B"),
    creatCost: parseNum("15K"),
    ideaCost: parseNum("10K"),
    id: 'popQuizzes',
    effect: () => {
        addMessage('"I guess there is something to scaring students after all..." - Bonnie', 'quote', 'info');
        studentBoost *= 20;
    },
    canBuy: () => {
        _updateProjectCard(popQuizzes);
    }
});

var surveyorCats = new Project({
    title: "Surveyor Cats",
    phrase: "Cats with fancy eyeglasses that smoke pipes. And survey land.",
    description: "Surveyor cats are become available. Each generates 0.01 farm max per second.",
    costPhrase: "(1.5M potatoes, 400 creativity, 200 ideas)",
    potatoCost: 1500000,
    creatCost: 400,
    ideaCost: 200,
    id: 'surveyorCats',
    effect: () => {
        $("#surveyorCats").show();
        surveyorCatsUnlocked = true;
        addMessage('"Snoopy was the first surveyor. I\'ll be the second." - Beeba', 'quote', 'info');
        projects.push(betterGlasses);
    },
    canBuy: () => {
        _updateProjectCard(surveyorCats);
    }
});

var betterGlasses = new Project({
    title: "Better Glasses",
    phrase: "So the cats can see the land they are surveying.",
    description: "Surveyor cat performance increase 5x",
    costPhrase: "(65M potatoes, 3K creativity, 2K ideas)",
    potatoCost: 65000000,
    creatCost: 3000,
    ideaCost: 2000,
    id: 'betterGlasses',
    effect: () => {
        surveyorBoost *= 5;
        addMessage('"Night vision was not meant for examining land." - Bonnie', 'quote', 'info');
        projects.push(farmerSurveyors);
    },
    canBuy: () => {
        _updateProjectCard(betterGlasses);
    }
});

var farmerSurveyors = new Project({
    title: "Farmer Surveyors",
    phrase: "Surveyors with seeds.",
    description: "Surveyor cats now generate additional farms.",
    costPhrase: "(1B potatoes, 1M creativity, 500K ideas)",
    potatoCost: 1000000000,
    creatCost: 1000000,
    ideaCost: 500000,
    id: 'farmerSurveyors',
    effect: () => {
        addMessage('"The farmer cats might file a pawsuit..." - Bonnie', 'quote', 'info');
        surveyorFarm = true;
    },
    canBuy: () => {
        _updateProjectCard(farmerSurveyors);
    }

});

var battles = new Project({
    title: "Battles",
    phrase: "Expository forces of cats venture out to warmonger, and to gather resources.",
    description: "Battling becomes available, where you can use your soldier cats to fight battles to gather resources.",
    costPhrase: "(10T potatoes, 20M creativity, 10M ideas)",
    potatoCost: parseNum("10T"),
    creatCost: parseNum("20M"),
    ideaCost: parseNum("10M"),
    id: 'battles',
    effect: () => {
        $("#battleField").show();
        battlesUnlocked = true;
        addMessage('"This isn;t a pillow fight, folks." - Beeba, to the first squadron of soldier cats', 'quote', 'info');
        projects.push(potatoLaunchersUnlock);
        projects.push(catScouts);
        projects.push(strategums);
    },
    canBuy: () => {
        _updateProjectCard(battles);
    }
});

var potatoLaunchersUnlock = new Project({
    title: "Potato Launchers",
    phrase: "Potato BOOM! Potato BOOM!",
    description: "Potato launchers turn potatoes into battling power.",
    costPhrase: "(5T potatoes, 200M creativity, 100M ideas)",
    potatoCost: parseNum("5T"),
    creatCost: parseNum("200M"),
    ideaCost: parseNum("100M"),
    id: 'potatoLaunchersUnlock',
    effect: () => {
        potatoLaunchers = true;
        addMessage('"We based them off nerf guns..." - Bonnie', 'quote', 'info');
        projects.push(taterTotBombs);
    },
    canBuy: () => {
        _updateProjectCard(potatoLaunchersUnlock);
    }
});

var taterTotBombs = new Project({
    title: "Tater Tot Bombs",
    phrase: "Better than grenades.",
    description: "Tater Tot Bombs shock enemies and drive them back early.",
    costPhrase: "(75T potatoes, 1.5B creativity, 500M ideas)",
    potatoCost: parseNum("75T"),
    creatCost: parseNum("1.5B"),
    ideaCost: parseNum("500M"),
    id: 'taterTotBombs',
    effect: () => {
        taterBombs = true;
        addMessage('"Grenades, but potato shaped." - Beeba', 'quote', 'info');
        projects.push(ultrafarms);
    },
    canBuy: () => {
        _updateProjectCard(taterTotBombs);
    }
});

var ultrafarms = new Project({
    title: "Ultrafarms",
    phrase: "Farms inside farms inside...",
    description: "Farm work improves 100x.",
    costPhrase: "(1Q potatoes, 300B creativity, 150B ideas)",
    potatoCost: parseNum("1Q"),
    creatCost: parseNum("300B"),
    ideaCost: parseNum("150B"),
    id: 'ultrafarms',
    effect: () => {
        addMessage('"Our farms are too good for Louis Lane." - Bonnie', 'quote', 'info');
        farmBoost *= 100;
    },
    canBuy: () => {
        _updateProjectCard(ultrafarms);
    }
});

var catScouts = new Project({
    title: "Cat Scouts",
    phrase: "Don't bring a knife to a gun fight.",
    description: "A difficulty rating of the upcoming battle appears.",
    costPhrase: "(15T potatoes, 1B creativity, 500M ideas)",
    potatoCost: parseNum("15T"),
    creatCost: parseNum("1B"),
    ideaCost: parseNum("500M"),
    id: 'catScouts',
    effect: () => {
        scouts = true;
        addMessage('"We dump buckets of green paint on cats..." - Beeba', 'quote', 'info');
        projects.push(chaplainCats);
    },
    canBuy: () => {
        _updateProjectCard(catScouts);
    }
});
var chaplainCats = new Project({
    title: "Chaplain Cats",
    phrase: "Your faith in the potato god will make you strong.",
    description: "Religious fervor unlocks Chaplain Cats, cats that boost the effeciency of <br> other cats.",
    costPhrase: "(1S potatoes, 10s creativity, 10s ideas)",
    potatoCost: parseNum("1S"),
    creatCost: parseNum("10s"),
    ideaCost: parseNum("10s"),
    id: 'chaplainCats',
    effect: () => {
        $("#chaplainCats").show();
        addMessage('"I am the eternal potato." - Potato God', 'quote', 'info');
        chaplainCatsUnlocked = true;
    },
    canBuy: () => {
        _updateProjectCard(chaplainCats);
    }
});

var strategums = new Project({
    title: "Strategums",
    phrase: "Sometimes, blindly charging at the enemy isn't a good idea.",
    description: "Convert creativity and ideas into battlefield strategums.",
    costPhrase: "(20T potatoes, 500M creativity, 250M ideas)",
    potatoCost: parseNum("20T"),
    creatCost: parseNum("500M"),
    ideaCost: parseNum("250M"),
    id: 'strategums',
    effect: () => {
        $("#strategums").show();
        stratsUnlocked = true;
        addMessage("'On the offensive, cats are great. On the defensive, they get bored, and start licking themselves.' - Bonnie", 'quote', 'info');
        projects.push(flanking);
    },
    canBuy: () => {
        _updateProjectCard(strategums);
    }
});

var flanking = new Project({
    title: "Flanking",
    phrase: "Look behind you.",
    description: "Strategums are 1.5x as effective.",
    costPhrase: "(1q potatoes, 250M creativity, 100M ideas)",
    potatoCost: parseNum("1q"),
    creatCost: parseNum("250M"),
    ideaCost: parseNum("100M"),
    id: 'flanking',
    effect: () => {
        flankingUnlocked = true;
        addMessage('"I love flank attacks. I have no idea what they are, but they might have something to do with Hank." - Frank the cat, a friend of Hank the cat', 'quote', 'info');
        projects.push(catAI);
    },
    canBuy: () => {
        _updateProjectCard(flanking);
    }
});

var catAI = new Project({
    title: "Cat AI",
    phrase: "Organic matter is obsolete.",
    description: "Upload the student cats, multiplying their potency by 1000x.",
    costPhrase: "(1s potatoes, 1T creativity, 1T ideas)",
    potatoCost: parseNum("1s"),
    creatCost: parseNum("1T"),
    ideaCost: parseNum("1T"),
    id: 'catAI',
    effect: () => {
        addMessage('"The potatolarity!" - Bonnie', 'quote', 'info');
        studentBoost *= 1000;
    },
    canBuy: () => {
        _updateProjectCard(catAI);
    }
});

var takeOverTheWorld = new Project({
    title: "Take Over the World",
    phrase: "All your potatoes are belong to us.",
    description: "Humanity falls, leads to more great things.",
    costPhrase: "(100O potatoes, 10s creativity, 10s ideas)",
    potatoCost: parseNum("100O"),
    creatCost: parseNum("10s"),
    ideaCost: parseNum("10s"),
    id: 'takeOverTheWorld',
    effect: () => {
        addMessage('"Not cookies, nor paperclips, nor money, nor catnip can stop us. POTATOZ FOREVER!" - The cat national anthem', 'quote', 'info');
        projects.push(metafolding);
    },
    canBuy: () => {
        _updateProjectCard(takeOverTheWorld);
    }
});

var metafolding = new Project({
    title: "Metafolding",
    phrase: "A potato within a potato.",
    description: "Potatoes can now be contained within potatoes. You win the game.",
    costPhrase: "(1D potatoes, 1S creativity, 1S ideas)",
    potatoCost: parseNum("1D"),
    creatCost: parseNum("1S"),
    ideaCost: parseNum("1S"),
    id: 'metafolding',
    effect: () => {
        for (var i = 0; i < 5; i++) potatoz *= 2;
        addMessage("Potatoz.", 'quote', 'info');
        addMessage("A game by N8.", 'quote', 'info');
        addMessage("UI by pjlasl, and duncan93", "quote", "info");
        addMessage("Coding by N8, and nice people on Stack Overflow.", 'quote', 'info');
        addMessage("Ideas from N8 and Claire.", 'quote', 'info');
        addMessage("Beeba, Claire's friend's cat.", 'quote', 'info');
        addMessage("Bonnie, my cat, for starting it all.", 'quote', 'info');
        addMessage("Since you worked so hard, you get a reward.", 'quote', 'info');
        addMessage("An animaiton. After a game of buttons and text.", 'quote', 'info');
        addMessage('See this animation: <a href="Potatoz.mp4" target="_blank">here</a>', 'quote', 'info');
        addMessage("You can keep playing, but there are no new projects or features to be found. Reset when you are ready.", 'quote', 'info');
    },
    canBuy: () => {
        _updateProjectCard(metafolding);
    }

});
var projectKey = {
    "Watering Cans": wateringCans,
    "Potatonalysis": potatonalysis,
    "Bribe your owner for Gardening Space": bribeForPatches,
    "Patch Architecture": patchArc,
    "Fertilizer": fertilizer,
    "Potato Math": potatoMath,
    "Potatean Theorem": potateanTheorem,
    "Potato Cabin": potatoCabin,
    "Turn the Backyard": turnTheBackyard,
    "Rope your next door neighbor's cat into it.": ropeCat,
    "Potato Diet": potatoDiet,
    "Productive Thinking": productiveThinking,
    "Industry Patches": industryPatches,
    "Drive Your Owner Out": driveYourOwnerOut,
    "The Farm": theFarm,
    "Organized Farms": organizedFarms,
    "Cats": unlockCats,
    "Farmer Cats": farmerCats,
    "Enhanced Farmer Cats": enhancedFarmerCats,
    "Super Farmer Cats": superFarmerCats,
    "Student Cats": studentCats,
    "Quizzes": quizzes,
    "Tests": tests,
    "Surveyor Cats": surveyorCats,
    "Better Glasses": betterGlasses,
    "Farmer Surveyors": farmerSurveyors,
    "Irrigation": irrigation,
    "Fences": fences,
    "Superfarms": superFarms,
    "Soldier Cats": unlockSoldierCats,
    "Battles": battles,
    "Potato Launchers": potatoLaunchersUnlock,
    "Cat Scouts": catScouts,
    "Strategums": strategums,
    "Tater Tot Bombs": taterTotBombs,
    "Flanking": flanking,
    "Ultrafarms": ultrafarms,
    "Cat AI": catAI,
    "Chaplain Cats": chaplainCats,
    "Self Reflection": selfReflection
};
projectKey[takeOverTheWorld.title] = takeOverTheWorld;
projectKey[metafolding.title] = metafolding;
projectKey[popQuizzes.title] = popQuizzes;
projectKey[unlockSoldierCats.title];