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
        this.set = false;
        this.done = false;
    }
    setup() {
        this.set = true;
        this.$elem = $("<span>");
        this.$elem.html(`
      <div class="w3-border w3-button w3-text-white w3-grey w3-hover-lightgrey w3-padding" style="display: inline-block;">
        <p>${this.title} ${this.costPhrase}</p>
        <p class="w3-small"><em>${this.phrase}</em></p>
        <p>${this.description}</p>
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
        })
        $("#projects").append(this.$elem);
    }
}

let wateringCans = new Project({
    title: "Watering Cans",
    phrase: "When you water plants, they tend to grow faster.",
    description: "Patch production is increased by 50% <br> as you employ the use of watering cans.",
    costPhrase: "(2 creativity, 1 idea)",
    creatCost: 2,
    ideaCost: 1,
    effect: () => {
        patchBoost = (patchBoost * 1.5).A();
        projects.push(potatonalysis);
        projects.push(bribeForPatches);
        addMessage('"A river flows out of Eden to water the potato..." - The Potato Bible')
    }
});

let potatonalysis = new Project({
    title: "Potatonalysis",
    phrase: "If you carry this two here, you're suddenly a genius.",
    description: "Advanced tracking of potato generation becomes available.",
    costPhrase: "(10 creativity, 2 ideas)",
    creatCost: 10,
    ideaCost: 1,
    effect: () => {
        $("#advancedPotatonomics").show();
        advancedNomics = true;
        projects.push(potatoMath);
        addMessage('"I spy with my little eye..., something brownish, bland, and round." - Bonnie, the cat')
    }
});

let bribeForPatches = new Project({
    title: "Bribe your owner for Gardening Space",
    phrase: "I give you some potatoes, you give me your front yard.",
    description: "Your patch max increases by 5.",
    costPhrase: "(1000 potatoes, 15 creativity)",
    creatCost: 15,
    potatoCost: 1000,
    effect: () => {
        patchMax += 5;
        projects.push(patchArc);
        projects.push(fertilizer);
        addMessage('"Across history, corrupt officials have been susceptible to bribes. Especially potato bribes." - Beeba, the cat')
    }
});

let patchArc = new Project({
    title: "Patch Architecture",
    phrase: "Potatoes in a row, potatoes in a collum, potatoes everywhere.",
    description: "Patch production increases by 75%.",
    costPhrase: "(10 ideas)",
    ideaCost: 10,
    effect: () => {
        patchBoost *= 1.75;
        projects.push(potatoCabin);
        addMessage('"Potatoes will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we were overripe." - Potatoham Lincoln');
    }
});

let fertilizer = new Project({
    title: "Fertilizer",
    phrase: "An eco-friendly solution for the contents of litter boxes.",
    description: "Patches generate more potatoes as time goes on.",
    costPhrase: "(500 potatoes, 10 creativity, 5 ideas)",
    creatCost: 10,
    ideaCost: 5,
    potatoCost: 500,
    effect: () => {
        patchFertilizer = true;
        setInterval(() => {
            patchBoost = (patchBoost + 0.05).A();
        }, 5000)
        projects.push(turnTheBackyard)
        addMessage('"Now we\'re really environmentally friendly. No sewage!" - Bonnie')
    }
});

let potatoMath = new Project({
    title: "Potato Math",
    phrase: "2 + 2 = Potato.",
    description: "The rate at which patches increase in price is halved.",
    costPhrase: "(20 creativity, 10 ideas)",
    creatCost: 20,
    ideaCost: 5,
    effect: () => {
        patchMultiplier = 1.1;
        projects.push(potateanTheorem);
        addMessage('"Potato. potato. potato. More important than calculus." - Beeba');
    }
});

let potateanTheorem = new Project({
    title: "Potatean Theorem",
    phrase: "a^2 + b^2 = (potato)^2",
    description: "The price of producing a patch is divided by 4.",
    costPhrase: "(25 creativity, 5 ideas)",
    creatCost: 25,
    ideaCost: 5,
    effect: () => {
        patchPrice = Math.floor(patchPrice / 4);
        projects.push(potatoDiet);
        addMessage('"There is roundness in the humming of the potatoes, there is blandness in the spacing of potatoes." - Potatogras')
    }
});

let potatoCabin = new Project({
    title: "Potato Cabin",
    phrase: "A cabin of the potatoes, by the potatoes, for the potatoes.",
    description: "Your patch maximum increases by 10.",
    costPhrase: "(2000 potatoes, 10 creativity, 10 ideas)",
    potatoCost: 2000,
    creatCost: 10,
    ideaCost: 10,
    effect: () => {
        patchMax += 10;
        addMessage('"A cabin for storing potatoes - the greatest breakthrough of our century." - Bonnie')
    }
});

let turnTheBackyard = new Project({
    title: "Turn the Backyard",
    phrase: "Come to the potato side.",
    description: "As the backyard becomes available to you, <br> your patch maximum increases by 30.",
    costPhrase: "(3000 potatoes, 15 creativity, 5 ideas)",
    potatoCost: 3000,
    creatCost: 15,
    ideaCost: 5,
    effect: () => {
        patchMax += 30;
        projects.push(ropeCat);
        addMessage('"No, I am your potato." - Darth Potato');
    }
});

let ropeCat = new Project({
    title: "Rope your next door neighbor's cat into it.",
    phrase: "Two brains are better than one.",
    description: "Thought production is doubled.",
    costPhrase: "(5000 potatoes, 20 creativity, 10 ideas)",
    potatoCost: 5000,
    creatCost: 20,
    ideaCost: 10,
    effect: () => {
        thoughtBoost *= 2;
        projects.push(driveYourOwnerOut);
        addMessage('"Hey, Beeba, thanks for helping out!" - Bonnie')
    }
});

let potatoDiet = new Project({
    title: "Potato Diet",
    phrase: "Who needs cat food?",
    description: "IQ can now be increased by consuming potatoes.",
    costPhrase: "(3500 potatoes, 30 creativity)",
    potatoCost: 3500,
    creatCost: 30,
    effect: () => {
        iqButton = true;
        $("#increaseIQ").show();
        projects.push(productiveThinking);
        addMessage('"MmM.HMM...MMMMM..." - Bonnie, chewing potatoes');
    }
});

let productiveThinking = new Project({
    title: "Productive Thinking",
    phrase: "Don't think about video games. Think about this, which is a video game.",
    description: "You can now select a percent of thoughts to be allocated to ideas and creativity",
    costPhrase: "(5000 potatoes, 50 creativity, 30 ideas)",
    potatoCost: 5000,
    creatCost: 50,
    ideaCost: 30,
    effect: () => {
        thoughtSlider = true;
        $("#thoughtProduction").show();
        projects.push(industryPatches);
        projects.push(selfReflection);
        addMessage('"Think productively. But only about potatoes." - Beeba');
        addMessage("The slider controls what percent of thoughts are automatically converted to creativity and ideas.")
    }
});

let selfReflection = new Project({
    title: "Self Reflection",
    phrase: "What you did wrong, can do better, and a bunch of other cheesy stuff.",
    description: "Cats can now look back on what they did and convert thoughts to creativity and ideas en masse.",
    costPhrase: "(3000 potatoes, 60 creativity, 20 ideas)",
    potatoCost: 3000,
    creatCost: 60,
    ideaCost: 20,
    effect: () => {
        selfReflectionUnlocked = true;
        $("#convertAll").show();
        addMessage('"I have no regrets. Yet." - A Baby Kitten');
    }
});

let industryPatches = new Project({
    title: "Industry Patches",
    phrase: "Who knew patches could consume fossil fuels?",
    description: "Patches produce 500% more potatoes.",
    costPhrase: "(25K potatoes, 100 creativity, 50 ideas)",
    potatoCost: 25000,
    creatCost: 100,
    ideaCost: 50,
    effect: () => {
        patchBoost *= 5;
        addMessage('"So much for being eco-friendly. I thought we had something going with the fertitlizer." - Bonnie')
    }
});

let driveYourOwnerOut = new Project({
    title: "Drive Your Owner Out",
    phrase: "I give you potatoes, you give me all your life savings, <br> and everything you've ever loved.",
    description: "Leads to great things.",
    costPhrase: "(100K potatoes, 200 creativity, 100 ideas)",
    potatoCost: 100000,
    creatCost: 200,
    ideaCost: 100,
    effect: () => {
        addMessage('"It\'s not that I love my owner less, but that I love potatoes more." - Bonnie');
        projects.push(theFarm);
    }
});

let theFarm = new Project({
    title: "The Farm",
    phrase: "We are better together.",
    description: "All patches merge into a single farm, generating 5000 potatoes a second, <br> and an era comes to an end.",
    costPhrase: "(120K potatoes, 500 creativity, 300 ideas)",
    potatoCost: 120000,
    creatCost: 500,
    ideaCost: 300,
    effect: () => {
        farmsUnlocked = true;
        farms = 1;
        patches = 0;
        $("#patches").hide();
        doneMessages = doneMessages.remove("patches");
        $("#farms").show();
        addMessage("Farms unlocked! These massive potato producting behemoths produce 5000 potatoes a second.");
        projects.push(organizedFarms);
        projects.push(unlockCats);
    }
});

let organizedFarms = new Project({
    title: "Organized Farms",
    phrase: "You... there... farm - drop and give me 20!",
    description: "Farms produce 25% more potatoes, and your farm max increases by 8.",
    costPhrase: "(150K potatoes, 100 creativity, 75 ideas)",
    potatoCost: 150000,
    creatCost: 100,
    ideaCost: 75,
    effect: () => {
        farmBoost *= 1.25;
        farmMax += 8;
        addMessage("\"Once the potato gets rolling, there's no stopping it\" - Beeba");
        projects.push(irrigation);
    }
});

let irrigation = new Project({
    title: "Irrigation",
    phrase: "A river flows out of Eden to water the... Oop! Nope! Come this way river!",
    description: "Farm's production slowly increases.",
    costPhrase: "(300M potatoes, 2K creativity, 2K ideas)",
    potatoCost: parseNum("300M"),
    creatCost: 2000,
    ideaCost: 2000,
    effect: () => {
        setInterval(() => {
            farmBoost = (farmBoost + 0.1).A();
        }, 5000)
        farmsIrrigated = true;
        addMessage('"Irrigation is almost as good as a sink." - Beeba');
        projects.push(fences);
    }
});

let fences = new Project({
    title: "Fences",
    phrase: "Dogs can't climb fences.",
    description: "The dog reign of terror comes to an end.",
    costPhrase: "(1B potatoes, 10K creativity, 10K ideas)",
    potatoCost: parseNum("1B"),
    creatCost: parseNum("10K"),
    ideaCost: parseNum("10K"),
    effect: () => {
        raidChance /= 10;
        addMessage('"A dog that climbs a mountain first has to get over the fence that the cats built." - Bonnie')
        projects.push(superFarms);
    }
});

let superFarms = new Project({
    title: "Superfarms",
    phrase: "Like superman, but for farms.",
    description: "Farms are now 100x better.",
    costPhrase: "(50B potatoes, 1M creativity, 1M ideas)",
    potatoCost: parseNum("50B"),
    creatCost: parseNum("1M"),
    ideaCost: parseNum("1M"),
    effect: () => {
        farmBoost *= 100;
        addMessage('"How these farms farms are going to save Louis Lane, I do not know." - Beeba')
        projects.push(unlockSoldierCats);
    }
});

let unlockSoldierCats = new Project({
    title: "Soldier Cats",
    phrase: "To capture the annoying dog raiders.",
    description: "Soldier cats become available. They help guard against dog raids.",
    costPhrase: "(1T potatoes, 10M creativity, 10M ideas)",
    potatoCost: parseNum("1T"),
    creatCost: parseNum("10M"),
    ideaCost: parseNum("10M"),
    effect: () => {
        $("#battles").show();
        soldierCatsUnlocked = true;
        addMessage('Soldier cats now available. Battle with them for more resources.');
        addMessage('"The only thing we have to fear is the carrot itself." - Potatodore Roosevelt')
        projects.push(battles)
    }
});

let unlockCats = new Project({
    title: "Cats",
    phrase: "More cats, more happiness.",
    description: "Paves the way for feline employment.",
    costPhrase: "(500K potatoes, 500 creativity, 300 ideas)",
    potatoCost: 500000,
    creatCost: 500,
    ideaCost: 300,
    effect: () => {
        $("#cats").show();
        catsUnlocked = true;
        addMessage('"Calling all neighborhood cats. We have potatoz!" - Bonnie');
        addMessage("Cats available. But before you can do anything with them, you must buy the next set of projects.");
        projects.push(farmerCats);
        projects.push(studentCats);
        projects.push(surveyorCats);
    }
});
let farmerCats = new Project({
    title: "Farmer Cats",
    phrase: "Give a cat a straw hat, would you look at that!",
    description: "Cats can now be assigned to be farmer cats, <br> which boost potato production 10%.",
    costPhrase: "(1M potatoes, 200 creativity, 100 ideas)",
    potatoCost: 1000000,
    creatCost: 200,
    ideaCost: 100,
    effect: () => {
        $("#farmerCats").show();
        farmerCatsUnlocked = true;
        addMessage('"You need to have thumbs to plant crops. But we don\'t care." - Bonnie')
        projects.push(enhancedFarmerCats);
    }
});

let enhancedFarmerCats = new Project({
    title: "Enhanced Farmer Cats",
    phrase: "Farmer cats on steroids.",
    description: "Farmer cats performance increases 5x, and farmer cats now reduce the price of farms over time.",
    costPhrase: "(2.5M potatoes, 1K creativity, 500 ideas)",
    potatoCost: 2500000,
    creatCost: 1000,
    ideaCost: 500,
    effect: () => {
        farmerBoost *= 5;
        farmerReduce = true;
        addMessage('"Steroids are illegal in baseball, not in farming." - Beeba')
        projects.push(superFarmerCats)
    }
});

let superFarmerCats = new Project({
    title: "Super Farmer Cats",
    phrase: "Hoes galore!",
    description: "Farmer cats performance increase 10x.",
    costPhrase: "(50M potatoes, 1K creativity, 600 ideas)",
    potatoCost: 50000000,
    creatCost: 1000,
    ideaCost: 600,
    effect: () => {
        addMessage('"Aspire to be Clark Kent." - Beeba, to the farmer cats.')
        farmerBoost *= 10;
    }
});

let studentCats = new Project({
    title: "Student Cats",
    phrase: "Even cats have to do homework.",
    description: "Student cats become available. Each student cat generates 0.001 IQ per second.",
    costPhrase: "(2M potatoes, 300 creativity, 200 ideas)",
    potatoCost: 2000000,
    creatCost: 300,
    ideaCost: 200,
    effect: () => {
        $("#studentCats").show();
        studentCatsUnlocked = true;
        addMessage('"Back to school." - Bonnie')
        projects.push(quizzes)
    }
});

let quizzes = new Project({
    title: "Quizzes",
    phrase: "If you give someone quizzes, and stress, them out, they somehow get smarter.",
    description: "Student cat performance increase 10x.",
    costPhrase: "(25M potatoes, 500 creativity, 250 ideas)",
    potatoCost: parseNum("25M"),
    creatCost: 500,
    ideaCost: 250,
    effect: () => {
        studentBoost *= 10;
        addMessage('"Quizzes are like bubbles, they tend to pop often." - Bonnie');
        projects.push(tests);
    }
});

let tests = new Project({
    title: "Tests",
    phrase: "Tests. Harder than quizzes, so they must make you even smarter.",
    description: "Student cat performance increases 5x.",
    costPhrase: "(150M potatoes, 4K creativity, 1K ideas)",
    potatoCost: 150000000,
    creatCost: 4000,
    ideaCost: 1000,
    effect: () => {
        addMessage('"I got an 87..." - Student Cat #2"')
        studentBoost *= 5;
        projects.push(popQuizzes);
    }
});

let popQuizzes = new Project({
    title: "Pop Quizzes",
    phrase: "Surprise!",
    description: "Student cat performance increases 20x.",
    costPhrase: "(10B potatoes, 15K creativity, 10K ideas)",
    potatoCost: parseNum("10B"),
    creatCost: parseNum("15K"),
    ideaCost: parseNum("10K"),
    effect: () => {
        addMessage('"I guess there is something to scaring students after all..." - Bonnie');
        studentBoost *= 20;
    }
})

let surveyorCats = new Project({
    title: "Surveyor Cats",
    phrase: "Cats with fancy eyeglasses that smoke pipes. And survey land.",
    description: "Surveyor cats are become available. Each generates 0.01 farm max per second.",
    costPhrase: "(1.5M potatoes, 400 creativity, 200 ideas)",
    potatoCost: 1500000,
    creatCost: 400,
    ideaCost: 200,
    effect: () => {
        $("#surveyorCats").show();
        surveyorCatsUnlocked = true;
        addMessage('"Snoopy was the first surveyor. I\'ll be the second." - Beeba');
        projects.push(betterGlasses);
    }
});

let betterGlasses = new Project({
    title: "Better Glasses",
    phrase: "So the cats can see the land they are surveying.",
    description: "Surveyor cat performance increase 5x",
    costPhrase: "(65M potatoes, 3K creativity, 2K ideas)",
    potatoCost: 65000000,
    creatCost: 3000,
    ideaCost: 2000,
    effect: () => {
        surveyorBoost *= 5;
        addMessage('"Night vision was not meant for examining land." - Bonnie');
        projects.push(farmerSurveyors)
    }
});

let farmerSurveyors = new Project({
    title: "Farmer Surveyors",
    phrase: "Surveyors with seeds.",
    description: "Surveyor cats now generate additional farms.",
    costPhrase: "(1B potatoes, 1M creativity, 500K ideas)",
    potatoCost: 1000000000,
    creatCost: 1000000,
    ideaCost: 500000,
    effect: () => {
        addMessage('"The farmer cats might file a lawsuit..." - Bonnie');
        surveyorFarm = true;
    }

});

let battles = new Project({
    title: "Battles",
    phrase: "Expository forces of cats venture out to warmonger, and to gather resources.",
    description: "Battling becomes available, where you can use your soldier cats to fight battles to gather resources.",
    costPhrase: "(10T potatoes, 20M creativity, 10M ideas)",
    potatoCost: parseNum("10T"),
    creatCost: parseNum("20M"),
    ideaCost: parseNum("10M"),
    effect: () => {
        $("#battleField").show();
        battlesUnlocked = true;
        addMessage('"This isn;t a pillow fight, folks." - Beeba, to the first squadron of soldier cats');
        projects.push(potatoLaunchersUnlock);
        projects.push(catScouts);
        projects.push(strategums);
    }
});

let potatoLaunchersUnlock = new Project({
    title: "Potato Launchers",
    phrase: "Potato BOOM! Potato BOOM!",
    description: "Potato launchers turn potatoes into battling power.",
    costPhrase: "(5T potatoes, 200M creativity, 100M ideas)",
    potatoCost: parseNum("5T"),
    creatCost: parseNum("200M"),
    ideaCost: parseNum("100M"),
    effect: () => {
        potatoLaunchers = true;
        addMessage('"We based them off nerf guns..." - Bonnie');
        projects.push(taterTotBombs);
    }
});

let taterTotBombs = new Project({
    title: "Tater Tot Bombs",
    phrase: "Better than grenades.",
    description: "Tater Tot Bombs shock enemies and drive them back early.",
    costPhrase: "(75T potatoes, 1.5B creativity, 500M ideas)",
    potatoCost: parseNum("75T"),
    creatCost: parseNum("1.5B"),
    ideaCost: parseNum("500M"),
    effect: () => {
        taterBombs = true;
        addMessage('"Grenades, but potato shaped." - Beeba');
        projects.push(ultrafarms);
    }
});

let ultrafarms = new Project({
    title: "Ultrafarms",
    phrase: "Farms inside farms inside...",
    description: "Farm work improves 100x.",
    costPhrase: "(1Q potatoes, 300B creativity, 150B ideas)",
    potatoCost: parseNum("1Q"),
    creatCost: parseNum("300B"),
    ideaCost: parseNum("150B"),
    effect: () => {
        addMessage('"Our farms are to good for Louis Lane." - Bonnie');
        farmBoost *= 100;
    }
});

let catScouts = new Project({
    title: "Cat Scouts",
    phrase: "Don't bring a knife to a gun fight.",
    description: "A difficulty rating of the upcoming battle appears.",
    costPhrase: "(15T potatoes, 1B creativity, 500M ideas)",
    potatoCost: parseNum("15T"),
    creatCost: parseNum("1B"),
    ideaCost: parseNum("500M"),
    effect: () => {
        scouts = true;
        addMessage('"We dump buckets of green paint on cats..." - Beeba');
        projects.push(chaplainCats)
    }
});
let chaplainCats = new Project({
    title: "Chaplain Cats",
    phrase: "Your faith in the potato god will make you strong.",
    description: "Religious fervor unlocks Chaplain Cats, cats that boost the effeciency of <br> other cats.",
    costPhrase: "(1S potatoes, 10s creativity, 10s ideas)",
    potatoCost: parseNum("1S"),
    creatCost: parseNum("10s"),
    ideaCost: parseNum("10s"),
    effect: () => {
        $("#chaplainCats").show();
        addMessage('"I am the eternal potato." - Potato God')
        chaplainCatsUnlocked = true;
    }
})

let strategums = new Project({
    title: "Strategums",
    phrase: "Sometimes, blindly charging at the enemy isn't a good idea.",
    description: "Convert creativity and ideas into battlefield strategums.",
    costPhrase: "(20T potatoes, 500M creativity, 250M ideas)",
    potatoCost: parseNum("20T"),
    creatCost: parseNum("500M"),
    ideaCost: parseNum("250M"),
    effect: () => {
        $("#strategums").show();
        stratsUnlocked = true;
        addMessage("'On the offensive, cats are great. On the defensive, they get bored, and start licking themselves.' - Bonnie");
        projects.push(flanking);
    }
});

let flanking = new Project({
    title: "Flanking",
    phrase: "Look behind you.",
    description: "Strategums are 1.5x as effective.",
    costPhrase: "(1q potatoes, 250M creativity, 100M ideas)",
    potatoCost: parseNum("1q"),
    creatCost: parseNum("250M"),
    ideaCost: parseNum("100M"),
    effect: () => {
        flankingUnlocked = true;
        addMessage('"I love flank attacks. I have no idea what they are, but they might have something to do with Hank." - Frank the cat, a friend of Hank the cat');
        projects.push(catAI);
    }
});

let catAI = new Project({
    title: "Cat AI",
    phrase: "Organic matter is obsolete.",
    description: "Upload the student cats, multiplying their potency by 1000x.",
    costPhrase: "(1s potatoes, 1T creativity, 1T ideas)",
    potatoCost: parseNum("1s"),
    creatCost: parseNum("1T"),
    ideaCost: parseNum("1T"),
    effect: () => {
        addMessage('"The potatolarity!" - Bonnie');
        studentBoost *= 1000;
    }
});

let takeOverTheWorld = new Project({
    title: "Take Over the World",
    phrase: "All your potatoes are belong to us.",
    description: "Humanity falls, leads to more great things.",
    costPhrase: "(100O potatoes, 10s creativity, 10s ideas)",
    potatoCost: parseNum("100O"),
    creatCost: parseNum("10s"),
    potatoCost: parseNum("10s"),
    effect: () => {
        addMessage('"Not cookies, nor paperclips, nor money, nor catnip can stop us. POTATOZ FOREVER!" - THe cat national anthem');
        projects.push(metafolding);
    }
});

let metafolding = new Project({
    title: "Metafolding",
    phrase: "A potato within a potato.",
    description: "Potatoes can now be contained within potatoes. You win the game.",
    costPhrase: "(1000D potatoes, 1S creativity, 1S ideas)",
    potatoCost: parseNum("1000D"),
    creatCost: parseNum("1S"),
    potatoCost: parseNum("1S"),
    effect: () => {
        for (let i = 0; i < 5; i++) potatoz **= 2;
        addMessage("Potatoz.");
        addMessage("A game by Nathan Breslow.");
        addMessage("Coding by Nathan Breslow, and nice people on Stack Overflow.");
        addMessage("Ideas from Nathan Breslow and Claire.");
        addMessage("Beeba, Claire's friend's cat.");
        addMessage("Bonnie, my cat, for starting it all.");
        addMessage("Since you worked so hard, you get a reward.");
        addMessage("An animaiton. After a game of buttons and text.");
        addMessage('See this animation: <a href="Potatoz.webm" target="_blank">here</a>')
        reset();
        addMessage("Game reset. Reload the page to play again.");
    }
})
let projectKey = {
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
projectKey[unlockSoldierCats.title]