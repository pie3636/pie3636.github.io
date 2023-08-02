$(function () {
    versionStr = "2.0.8";
    saveInterval = undefined;

    // TODO add total stats on top, for [v] unit at level ___ and [x] skill 1 (level ___) -> HP, Atk, Spd, ClimbSpd, nextCost, [spawn time] + gold find, skill effects etc, top floor calculator
    // TODO add a king's crown ("quantum" distribution), demon's mask, power of demons
    // TODO Alphab sort, +1/+10, guide next to it
    // TOH change time tooltip (page may freeze...) OR add simulation status update
    // MAX: Summon (5+2x) 100   Seal 5   Growth Speed 52   Power Up 200   Warp 16   Ultimate Summon 80   Fame 150   New Dungeon   Auto-Seal 8

    itemObjs = {
        /*
         * i1 = linear param, i2 = inverse param, limitLine = decay point, limitI1 = i1 past decay
         * 0 limitLine: lv * (i1 - i2/2) + lv² * i2 / 2
         * < limitLine: lv * i1
         * > limitLine: limitLine * i1 + (lv - limitLine) * limitI1
         */
        //                                id       cap   rank  rank2   i1   i2   lI1 lLine
        "Lance":                 new Item( 0,       20,     1,     9,    5,   0,    2,  10),
        "Earth Armour":          new Item( 1, Infinity,     1,     2,   20,   5,    0,   0),
        "Claymore":              new Item( 2, Infinity,  0.05,   1.5,   20,   5,    0,   0),
        "Wing Boots":            new Item( 3,       30,     1,    11,    3,   0,    1,   5),
        "Training Book":         new Item( 4,       20,     3,    10,    2,   0,    1,  10),
        "Golden Gloves":         new Item( 5, Infinity,     2,   1.9,   15,   0,   10, 200),
        "Rapier":                new Item( 6,       25,     1,    21,    5,   0,    1,  10),
        "Halberd":               new Item( 7, Infinity,     3,     5,   10,   0,    5, 100),
        "Red Elixir":            new Item( 8,      100,     2,     6,    2,   0,    1,  30),
        "Gold Vessels":          new Item( 9, Infinity,     2,     9,   10,   0,    5, 100),
        "Blue Elixir":           new Item(10,      300,     7,    17,    5,   0,    2, 100),
        "Green Elixir":          new Item(11,       10,     7,    14,    5,   0,    0,   0),
        "Golden Coat":           new Item(12,      300,     5,    11,    5,   0,    2, 100),
        "Golden Rod":            new Item(13,       10,     5,     9,    5,   0,    0,   0),
        "Solomon's Staff":       new Item(14,      300,     3,     8,    5,   0,    2, 100),
        "Solomon's Key":         new Item(15,       10,     4,     3,    5,   0,    0,   0),
        "Excalibur":             new Item(16,      300,     4,     9,    5,   0,    2, 100),
        "Aegis":                 new Item(17,       10,     3,     2,    5,   0,    0,   0),
        "Caduceus":              new Item(18,      600,     4,  11.5,   10,   0,    2, 200),
        "Philosopher's Stone":   new Item(19, Infinity,     4,     3,   10,   0,    2, 500),
        "Hydra's Poison Arrow":  new Item(20,       10,     5,     3,    5,   0,    1,  10),
        "Durandal":              new Item(21,      115,     5,    30,    2,   0,    1,  20),
        "Mistilteinn":           new Item(22,      115,     6,    32,    2,   0,    1,  20),
        "Royal Crown":           new Item(23,      100,    50,    60,    5,   0,    1,  40),
        "Gungnir":               new Item(24, Infinity,     5,     6,   10,   0,    0,   0),
        "Lævateinn":             new Item(25,       12,    10,    50,    1,   0,    0,   0),
        "Gáe Bolg":              new Item(26,        3,   400,   200,    1,   0,    0,   0),
        "Mithril Sword":         new Item(27,       50,     7,    42,    2,   0,    1,  20),
        "Mithril Armour":        new Item(28,       50,     5,    28,    2,   0,    1,  20),
        "Full Plate":            new Item(29, Infinity,   7.5,   5.5,  300,  10,    0,   0),
        "Flamberge":             new Item(30, Infinity,   6.5,   5.5,  300,  10,    0,   0),
        "Full Helmet":           new Item(31, Infinity,    11,    14, 1800,  11,    0,   0),
        "Tomahawk":              new Item(32, Infinity,    10,    14, 1800,  11,    0,   0),
        "Summoning letter":      new Item(33,       10,     7,    10,    1,   0,    0,   0),
        "Awakening Armor":       new Item(34,       75,    15,   100,   10,   2,    0,   0),
        "Awakening Sword":       new Item(35,       75,    15,   100,   10,   2,    0,   0),
        "Gold Box":              new Item(36,    30000,   0.9,     2,    5,   2,    0,   0),
        "Awakening Armor 2":     new Item(37,       75,    25,   120,   10,   2,    0,   0),
        "Awakening Sword 2":     new Item(38,       75,    25,   120,   10,   2,    0,   0),
        "Guild Hat":             new Item(39,       16,     5,    40,   25,   0,    1,   1),
        "Mjolnir":               new Item(40,       31,    12,    90,  0.2,   0, 0.01,   1),
        "Dark Knight Armor":     new Item(41,        5,    15,   300,    1,   0,    0,   0),
        "Gate":                  new Item(42,      701,   8.5,     8,   22,   0, 0.02,   1),
        "Dark Gate":             new Item(43,      401,   9.5,     9,    4,   0, 0.02,   1),
        "Magic Lamp":            new Item(44,       76,     7,    12,  100,   0,    2,   1),
        "Dark Boots":            new Item(45,      100,     8,    40,    1,   0,  0.5,  30),
        "Fire Sword":            new Item(46,    30000, 99999, 99999,    5,   0,    0,   0),
        "Freyr's Sword":         new Item(47,    50000,    18,  13.5,    1,   0,    0,   0),
        "Flame Pot":             new Item(48,       16,     7,    22,    1,   0,  0.3,   1),
        "Ice Pot":               new Item(49,       16,     7,    22,    1,   0,  0.3,   1),
        "Golden Pot":            new Item(50,       11,     7,    22,    1,   0,  0.3,   1),
        "Black Essence":         new Item(51,       30,     9,    18,    2,   0,  0.4,   5),
        "Demon Eye":             new Item(52,      151,    12,    11,   10,   0,  0.1,   1),
        "Red Hand":              new Item(53,      201,    26,    42,    5,   0,  0.1,   1),
        "Veteran's Hat":         new Item(54,       10,    33,    62,    3,   0,    0,   0),
        "Blue Crystal":          new Item(55,       13,     6,    33,  100,   0,   10,   1),
        "Freyr's Sword 2":       new Item(56,       20,   100,  1000,  500,   0,    0,   0),
        "Book of Prophecy":      new Item(57,       3,     18,   200,  100,   0,    0,   0),
        "Ancient Magic Stone":   new Item(58,       3,    450,   450,    1,   0,    0,   0),
        "Mass prod Gáe Bolg":    new Item(59,      26,    400,   200,  0.5,   0,  0.1,   1),
        "Demon's Mask":          new Item(60,      11,    300,   250,   25,   0,    1,   1),
        "Power of Demons":       new Item(61,      26,    500,   200,   10,   0,    1,   1),
	"Golden Mysterious Key": new Item(62,     251,     71,    35,    5,   0,  0.1,   1),
	"Red Mysterious Key":    new Item(63,     151,     69,    42,    5,   0,  0.1,   1),
	"Mysterious Vault":      new Item(64,      15,    200,  1200,  0.1,   0,    0,   0),
        "Ancestor's Book":       new Item(65,     201,     72,    38,    5,   0,  0.1,   1),
        "Spirit Ring":           new Item(66,     201,     72,    36,    5,   0,  0.1,   1)
    };
    
    
    names = ["Lance", "Earth Armour", "Claymore", "Wing Boots", "Training Book", "Golden Gloves", "Rapier", "Halberd", "Red Elixir", "Gold Vessels", "Blue Elixir", "Green Elixir", "Golden Coat", "Golden Rod", "Solomon's Staff",
        "Solomon's Key", "Excalibur", "Aegis", "Caduceus", "Philosopher's Stone", "Hydra's Poison Arrow", "Durandal", "Mistilteinn", "Royal Crown", "Gungnir", "Lævateinn", "Gáe Bolg", "Mithril Sword", "Mithril Armour",
        "Full Plate", "Flamberge", "Full Helmet", "Tomahawk", "Summoning letter", "Awakening Armor", "Awakening Sword", "Gold Box", "Awakening Armor 2", "Awakening Sword 2", "Guild Hat", "Mjolnir", "Dark Knight Armor", "Gate",
        "Dark Gate", "Magic Lamp", "Dark Boots", "Fire Sword", "Freyr's Sword", "Flame Pot", "Ice Pot", "Golden Pot", "Black Essence", "Demon Eye", "Red Hand", "Veteran's Hat", "Blue Crystal", "Freyr's Sword 2",
        "Book of Prophecy", "Ancient Magic Stone", "Mass prod Gáe Bolg", "Demon's Mask", "Power of Demons", "Golden Mysterious Key", "Red Mysterious Key", "Mysterious Vault", "Ancestor's Book", "Spirit Ring"
    ];
    
    bc_items = [[0.89, 0.10, 0.01, "-"],
                [0.86, 0.12, 0.02, "-"],
                [0.82, 0.15, 0.03, "-"],
                [0.78, 0.18, 0.04, "-"],
                [0.74, 0.21, 0.05, "-"],
                [0.70, 0.24, 0.06, "-"],
                [0.65, 0.28, 0.07, "-"],
                [0.60, 0.32, 0.08, "-"],
                [0.55, 0.36, 0.09, "-"],
                [0.50, 0.40, 0.10, "-"],
                [0.45, 0.44, 0.11, "-"],
                [0.40, 0.48, 0.12, "-"],
                [0.35, 0.52, 0.13, "-"]];

    bc_crystals = [["-", 0.70, 0.28, 0.02],
                   ["-", 0.65, 0.33, 0.02],
                   ["-", 0.60, 0.38, 0.02],
                   ["-", 0.55, 0.42, 0.03],
                   ["-", 0.50, 0.47, 0.03],
                   ["-", 0.47, 0.49, 0.04],
                   ["-", 0.44, 0.50, 0.06],
                   ["-", 0.42, 0.50, 0.08],
                   ["-", 0.40, 0.52, 0.08],
                   ["-", 0.35, 0.55, 0.10],
                   ["-", 0.25, 0.60, 0.15],
                   ["-", 0.20, 0.60, 0.20],
                   ["-", 0.10, 0.65, 0.25]];
   
    bop_rewards = [[["8",   "-",  "-"],
                    ["8",   "-",  "-"],
                    ["8",   "-",  "-"],
                    ["12",  "-",  "-"],
                    ["12",  "1",  "-"],
                    ["8",   "-",  "-"],
                    ["8",   "-",  "-"],
                    ["8",   "-",  "-"],
                    ["12",  "-",  "-"],
                    ["12¹", "2³", "-"],
                    ["8",   "-",  "-"],
                    ["8",   "-",  "-"],
                    ["15",  "-",  "-"],
                    ["20",  "-",  "-"],
                    ["20²", "-",  "1"]],
                   [["9",   "-",  "-"],
                    ["9",   "-",  "-"],
                    ["9",   "-",  "-"],
                    ["14",  "-",  "-"],
                    ["14",  "3",  "-"],
                    ["9",   "-",  "-"],
                    ["9",   "-",  "-"],
                    ["9",   "-",  "-"],
                    ["14",  "-",  "-"],
                    ["14¹", "3³", "-"],
                    ["9",   "-",  "-"],
                    ["9",   "-",  "-"],
                    ["15",  "-",  "-"],
                    ["20",  "-",  "-"],
                    ["20²", "-",  "2"]],
                   [["10",  "-",  "-"],
                    ["10",  "-",  "-"],
                    ["10",  "-",  "-"],
                    ["15",  "-",  "-"],
                    ["15",  "5",  "-"],
                    ["10",  "-",  "-"],
                    ["10",  "-",  "-"],
                    ["10",  "-",  "-"],
                    ["15",  "-",  "-"],
                    ["15¹", "5³", "-"],
                    ["10",  "-",  "-"],
                    ["10",  "-",  "-"],
                    ["15",  "-",  "-"],
                    ["20",  "-",  "-"],
                    ["20²", "-",  "3"]]]
    
    caps = names.map(function(index) {
        return itemObjs[index].cap;
    });
    
    droprank = names.map(function(index) {
        return itemObjs[index].droprank;
    });
    
    droprank2 = names.map(function(index) {
        return itemObjs[index].droprank2;
    });
        
    $('[data-toggle="tooltip"]').tooltip();
    $("#version").append(versionStr);

    engine = Random.engines.mt19937().autoSeed();
    random01 = Random.real(0, 1, false);
    randomBool = Random.bool();
    random10Bool = Random.bool(.1);
    random15Bool = Random.bool(.15);
    random20Bool = Random.bool(.2);
    random25Bool = Random.bool(.25);
    random30Bool = Random.bool(.3);
    random40Bool = Random.bool(.4);
    random45Bool = Random.bool(.45);
    random60Bool = Random.bool(.6);
    random70Bool = Random.bool(.7);
    random75Bool = Random.bool(.75);
    random80Bool = Random.bool(.8);
    random85Bool = Random.bool(.85);
    random90Bool = Random.bool(.9);

    itemCount = 0;

    for (var i in itemObjs) {
        itemCount++;
    }
    
    items = new Array(itemCount).fill(0);

    for (var i in itemObjs) {
        $("#itemLevels").append(
            "<tr id=tr_" + cleanName(i) + " class='item_tr'>"
            + "<td class='handle'><span class='glyphicon glyphicon-option-vertical' aria-hidden='true'></span></td>"
            + "<td><img src='img/item" + itemObjs[i].id + ".png'/>"
            + "<td>" + i + "</td>"
            + "<td><input type='number' id='" + cleanName(i) + "' name='quantity' min='0' max='" + itemObjs[i].cap + "' value='" + itemObjs[i].value + "'></td>"
            + "<tr/>");
        $("#itemLevels2").append("<tr><td><img src='img/item" + itemObjs[i].id + ".png'/></td><td class='left-pad5'>" + i + "</td><td><a class='anchor' id='" + nameCleanup(i) + "_l'></a><input type='number' id='" + nameCleanup(i) + "_i' name='quantity' min='0'" + (itemObjs[i].cap != Infinity ? " max='" + itemObjs[i].cap + "'" : "") + "value='0'></td><td>" + getEffect() + "</td></tr>");
    }
    $("#itemLevels").sortable({
        item: "> tr",
        cursor: "move",
        revert: true
    });
    
    // Event listeners (must be done before loading autosave)
    $("#full-run").click(function() {
        $("#run-form").show();
        $("#one-floor").hide();
    });

    $("#gold-chest, #normal-chest").click(function() {
        $("#run-form").hide();
        $("#one-floor").show();
    });

    $("#no-quest").click(function() {
        $("#quest-form").hide();
    });

    $("#normal-quest, #always-quest").click(function() {
        $("#quest-form").show();
    });
    
    var autosave = localStorage.getItem("_autosave");
    if (autosave) {
        doImportPreset(decodePreset(autosave));
    }
    
    for (var i in itemObjs) {
        updateItemEffect(i, false);
    }

    updatePresets();

    presetLoading = false;
    
    currentTab = 'loot';
    changeTab('loot');

    $('.modal').on('show.bs.modal', centerModal);
    $("#export").on('shown.bs.modal', function(e) {
        $("#export-code").select();
    })
    $("#import").on('shown.bs.modal', function(e) {
        $("#import-code").focus();
    })
    $(window).on("resize", function() {
        $('.modal:visible').each(centerModal);
    });

    $(".btn").click(function() { // Unfocus buttons
        blur();
    });

    // Event listeners
    $("#simulate").click(runSimulation);
    $("#prob, #avg").click(displayResults);
    $("#btn-save").click(savePreset);
    $("#btn-import").click(openImport);
    $("#btn-export").click(exportPreset);
    $("#do-import").click(importPreset);
    $("#do-save").click(doSavePreset);
    $("#do-remove").click(doRemovePreset);
    $("#btn-load").click(loadPreset);
    $("#btn-remove").click(removePreset);
    $("#copy-loot-items").click(copyLootItems);
    $("#copy-items-loot").click(copyItemsLoot);
    for (var i in itemObjs) {
        $("#" + nameCleanup(i) + "_i").change(function(i) {
            return function(e) {
                updateItemEffect(i, true);
            };
        }(i));
    }
    
    saveInterval = setInterval(function() {
        localStorage.setItem("_autosave", getExportData());
    }, 1000);
    
    //debugCur();
});

function Item(id, cap, droprank, droprank2, i1, i2, limitI1, limitLine) {
    this.id = id;
    this.cap = cap;
    this.droprank = droprank;
    this.droprank2 = droprank2;
    this.i1 = i1;
    this.i2 = i2;
    this.limitI1 = limitI1;
    this.limitLine = limitLine;
}

function centerModal() {
    $(this).show();
    var $dialog = $(this).find(".modal-dialog").css("margin-top", offset);
    var offset = Math.max(($(window).height() - $dialog.height()) / 2, 30);
    $dialog.css("margin-top", offset);
}

function acquireItem(curItems, id, noBuy) {
    if (noBuy) {
        return;
    }
    gainedLevels[id]++;
    if (curItems[id] == items[id]) {
        gainedTimes[id]++;
    }
    curItems[id]++;
}

function isntMaxed(curItems, id) {
    return caps[id] == 0 || curItems[id] < caps[id];
}

function randomRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomRangeFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// A function which sorts the targetData array based on the second parameter
function advancedSort(targetData, sortType = "A-Z") {
	switch (sortType) {
		case "A-Z":
			targetData.sort((a, b) => (names[a.key] > names[b.key]) ? 1 : -1)
			break;
		case "Z-A":
			targetData.sort((a, b) => (names[a.key] < names[b.key]) ? 1 : -1)
			break;
		case "Amount_least-highest":
			targetData.sort((a, b) => (gainedTimes[a.key] > gainedTimes[b.key]) ? 1 : -1)
			break;
		case "Amount_highest-least":
			targetData.sort((a, b) => (gainedTimes[a.key] < gainedTimes[b.key]) ? 1 : -1)
			break;

		default:
			//error, is not given right sortType, so cannot sort
			break;
	}


	//finally returns the array
	return targetData;
}

function refSort(targetData, refData) {
    var indices = Object.keys(refData);
    indices.sort(function(indexA, indexB) {
        if (refData[indexA] < refData[indexB]) {
            return -1;
        } else if (refData[indexA] > refData[indexB]) {
            return 1;
        }
        return 0;
    });
    return indices.map(function(index) {
        return targetData[index];
    });
}

function doubleRefSort(target1, target2, refData) {
    var indices = Object.keys(refData);
    indices.sort(function(indexA, indexB) {
        if (refData[indexA] > refData[indexB]) {
            return -1;
        } else if (refData[indexA] < refData[indexB]) {
            return 1;
        }
        return 0;
    });
    t1 = indices.map(function(index) {
        return target1[index];
    });
    t2 = indices.map(function(index) {
        return target2[index];
    });
    t3 = indices.map(function(index) {
        return refData[index];
    });
    return [t1, t2, t3];
}

function Hosei1OR2(itemID) {
    if (itemID != 1 && itemID != 2)
        return itemID;
    return random75Bool(engine) ? 2 : 1;
}

function getRanks(curItems) {
    numArray1 = new Array(itemCount);
    numArray2 = new Array(itemCount);
    maxedItems = 0;
    for (var itemID = 0; itemID < itemCount; ++itemID) {
        if (!isntMaxed(curItems, itemID)) {
            numArray1[itemID] = itemID;
            numArray2[itemID] = -1;
            ++maxedItems;
        } else {
            rank = droprank[itemID];
            rank2 = droprank2[itemID];
            num3 = rank + (0.5 + rank * 0.5) * (1 + rank2 * 0.5 * curItems[itemID]);
            numArray1[itemID] = itemID;
            numArray2[itemID] = num3;
        }
    }
    return refSort(numArray1, numArray2);
}

function simulateChest(curItems, floor, noBuy) {
    if (randomBool(engine)) {
        if (floor == 350 || floor == 450 || floor == 550 || floor == 750 || floor == 850) {
            itemID = floor < 700 ? 30 : 32;
            if ((floor == 450 || floor == 850) && random40Bool(engine)) {
                itemID--;
            }
            if (isntMaxed(curItems, itemID)) {
                acquireItem(curItems, itemID, noBuy);
                return itemID;
            }
        }
    }
    if (floor <= 30 && curItems[44] == 0) {
        acquireItem(curItems, 44, noBuy);
        return 44;
    }
    if (floor <= 60) {
        acquireItem(curItems, 1, noBuy);
        return 1;
    }
    if (floor <= 80) {
        itemID = 1;
        if (resets != 0) {
            itemID = 2;
        }
        if (resets >= 5) {
            itemID = random70Bool(engine) ? 2 : 1;
        }
        acquireItem(curItems, itemID, noBuy);
        return itemID;
    }
    if (floor > 550 && random01(engine) < 0.0075
        || floor > 350 && random01(engine) < 0.006) {
        floor = 1000;
    }
    ranks = getRanks(curItems);
    num1 = floor * 0.0008 + randomRangeFloat(0.0008, 0.0508);
    if (num1 > 0.9) {
        num1 = 0.9;
    }
    itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1))];
    if (itemID1 == 36 && resets == 0) {
        itemID1 = 2;
    }
    lv = curItems[itemID1];
    if ((itemID1 == 1 || itemID1 == 2) && lv >= 400 && random75Bool(engine) && curItems[36] <= lv * 0.65) {
        itemID1 = 36;
    }
    if (curItems[39] == 0 && random85Bool(engine) && floor > 146 + randomRangeInt(0, randomRangeInt(10, 110))) {
        itemID1 = 39;
    }
    num2 = random01(engine);
    if (num2 <= 0.045) {
        floor += 50;
    } else if (num2 <= 0.07) {
        floor += 100;
    } else if (num2 <= 0.075) {
        floor += 150;
    }
    flag1 = random01(engine) > 0.164;
    flag2 = floor % 100 != 0;
    flag3 = floor % 50 != 0;
    flag4 = !flag3;
    if (itemID1 == 26) {
        lv = curItems[26];
        if (flag1
            || flag2
            || lv <= 0 && floor < 501
            || lv <= 1 && floor < 1101
            || lv >= 2 && floor < 1501
            || lv >= 2 && random01(engine) > 0.4999 + floor * 0.0001) {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.94))];
            if (itemID1 == 26) {
                itemID1 = 2;
            }
        }
    } else if (itemID1 == 36 && (flag4 && random20Bool(engine) || floor > 501)) {
        itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.94))];
    }
    if (itemID1 == 47 && curItems[25] <= 2) {
        lv2 = curItems[25];
        if (lv2 <= 2) {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.7))];
            if (itemID1 == 47) {
                itemID1 = 2;
            }
        } else {
            lv = curItems[itemID1];
            if (flag3 || floor < 111 + 7 * lv - lv2 * 5 && random01(engine) < 0.98 - lv2 * 0.005) {
                itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.7))];
                if (itemID1 == 47) {
                    itemID1 = 2;
                }
            }
            if (lv >= 10000 && random30Bool(engine)
                || lv >= 20000 && random20Bool(engine)
                || lv >= 30000 && random30Bool(engine)
                || lv >= 40000 && random30Bool(engine)) {
                itemID1 = 2;
            }
        }
    }
    lv2 = curItems[itemID1];
    switch (itemID1) {
        case 3:
            if (lv2 >= 15 && randomBool(engine))
                itemID1 = 1;
            if (lv2 >= 21 && random40Bool(engine))
                itemID1 = 1;
            if (lv2 >= 24 && random30Bool(engine))
                itemID1 = 1;
            if (lv2 >= 27 && random30Bool(engine))
                itemID1 = 1;
            break;
        case 4:
            if (lv2 > 9 && (flag1 || flag3 || floor < 151 + 40 * lv2))
                itemID1 = 2;
            break;
        case 6:
            if (lv2 > 20 && (flag1 || flag3 || floor < 301))
            itemID1 = 1;
            if (lv2 >= 15 && randomBool(engine))
                itemID1 = 1;
            if (lv2 >= 18 && randomBool(engine))
                itemID1 = 1;
            if (lv2 >= 22 && randomBool(engine))
                itemID1 = 1;
            break;
        case 10:
        case 12:
        case 14:
        case 16:
            if (lv2 >= 210 && random70Bool(engine))
                itemID1 = 2;
            break;
        case 21:
        case 22:
            num3 = 100 + 36 * lv2 + (lv2 < 3 ? 0 : 100) + (lv2 < 5 ? 0 : 70) + (lv2 < 10 ? 0 : 90) + (lv2 < 25 ? 0 : 80) + (lv2 < 35 ? 0 : 80);
            if (num3 > 1199)
                num3 = num3 * 0.5 + 599.5;
            if (num3 > 1499)
                num3 = num3 * 0.5 + 749.5;
            if (num3 > 1899)
                num3 = num3 * 0.5 + 949.5;
            if (flag1 || flag2 || floor < num3 + 1) {
                itemID1 = 2;
                break;
            }
            if (lv2 >= 25 && random30Bool(engine)) {
                itemID1 = 2;
                break;
            }
            break;
        case 23:
            if (flag1 || flag3 || lv2 <= 0 && floor < 251 || lv2 == 1 && floor < 301 || lv2 >= 2 && floor < 351 + lv2 * 35 + (lv2 < 6 ? 0 : 100)) {
                itemID1 = 2;
            }
            if (lv2 >= 91 && random80Bool(engine)) {
                itemID1 = 2;
            }
            if (lv2 >= 20 && random01(engine) > 0.09994 + floor * 0.00006) {
                itemID1 = 2;
            }
            if (lv2 >= 16 && random01(engine) > 0.19992 + floor * 0.00008) {
                itemID1 = 2;
                break;
            }
            if (lv2 >= 12 && random01(engine) > 0.2999 + floor * 0.0001) {
                itemID1 = 2;
            }
            if (lv2 >= 8 && random01(engine) > 0.4999 + floor * 0.0001) {
                itemID1 = 2;
            }
            if (lv2 >= 5 && random01(engine) > 0.7999 + floor * 0.0001) {
                itemID1 = 2;
                break;
            }
            if (floor < 1000) {
                if (lv2 >= 20 && random30Bool(engine)) {
                    itemID1 = 2;
                    break;
                }
                if (lv2 >= 40 && random30Bool(engine)) {
                    itemID1 = 2;
                    break;
                }
                if (lv2 >= 60 && random30Bool(engine)) {
                    itemID1 = 2;
                    break;
                }
                if (lv2 >= 80 && random30Bool(engine)) {
                    itemID1 = 2;
                }
            }
            break;
        case 25:
            if (flag1 || flag3 || floor < (111 + 90 * lv2 + lv2 * lv2 * 6 + (lv2 < 7 ? 0 : 150)) + (lv2 < 9 ? 0 : 90 + (lv2 * lv2) * 0.5)) {
                itemID1 = 2;
            }
            if (lv2 >= 9 && randomBool(engine) < 0.5) {
                itemID1 = 2;
            }
            break;
        case 27:
        case 28:
            num3 = 132 + 33 * lv2 + (lv2 < 3 ? 0 : 100) + (lv2 < 5 ? 0 : 80) + (lv2 < 10 ? 0 : 90) + (lv2 < 25 ? 0 : 90) + (lv2 < 35 ? 0 : 80);
            if (flag1 || flag2 || floor < num3 + 1) {
                itemID1 = 2;
                break;
            }
            if (lv2 >= 25 && random30Bool(engine)) {
                itemID1 = 2;
                break;
            }
            break;
        case 33:
            if (floor < 20 * lv2 * (lv2 - 1) - 99)
                itemID1 = 2;
            break;
        case 34:
        case 35:
            if (flag1 || flag3 || lv2 <= 0 && floor < 351 || lv2 >= 1 && floor < 461 + lv2 * 40)
                itemID1 = 2;
            else if (lv2 >= 2 && random01(engine) < 0.30005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 3 && random01(engine) < 0.40005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 5 && random01(engine) < 0.50005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 10 && random01(engine) < 0.50005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 20 && random01(engine) < 0.50005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 45 && random01(engine) < 0.50005 - floor * 0.00005)
                itemID1 = 2;
            else if (floor < 901) {
                if (lv2 >= 48 && random40Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 58 && random40Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 68 && random40Bool(engine))
                    itemID1 = 2;
            } else if (floor < 1101) {
                if (lv2 >= 48 && random30Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 58 && random30Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 68 && random30Bool(engine))
                    itemID1 = 2;
            }
            break;
        case 37:
        case 38:
            if (curItems[itemID1 - 3] == 0 || flag1 || flag3 || (lv2 <= 0 && floor < 501 || lv2 >= 1 && floor < 621 + lv2 * 46))
                itemID1 = 2;
            else if (lv2 >= 2 && random01(engine) < 0.40005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 3 && random01(engine) < 0.50005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 5 && random01(engine) < 0.70005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 10 && random01(engine) < 0.50005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 20 && random01(engine) < 0.50005 - floor * 0.00005)
                itemID1 = 2;
            else if (lv2 >= 20 && randomBool(engine))
                itemID1 = 1;
            else if (lv2 >= 25 && random25Bool(engine))
                itemID1 = 1;
            else if (lv2 >= 28 && random25Bool(engine))
                itemID1 = 1;
            else if (floor < 1401) {
                if (lv2 >= 22 && random40Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 24 && random40Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 26 && random40Bool(engine))
                    itemID1 = 2;
            } else if (floor < 1601) {
                if (lv2 >= 22 && random30Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 24 && random30Bool(engine))
                    itemID1 = 2;
                else if (lv2 >= 26 && random30Bool(engine))
                    itemID1 = 2;
            }
            break;
        case 39:
            if (lv2 != 0) {
                num2 = 0;
                if (lv2 >= 10)
                    num2 = 201 + lv2 * 44;
                if (lv2 >= 5)
                    num2 = 20 + lv2 * 8;
                if (floor < 181 + lv2 * 36 + num2)
                    itemID1 = 2;
                if (lv2 >= 10 && random45Bool(engine))
                    itemID1 = 2;
                if (lv2 >= 12 && random45Bool(engine))
                    itemID1 = 2;
                if (lv2 >= 14 && random45Bool(engine))
                    itemID1 = 2;
            }
            break;
        case 40:
            if (floor < 251 + 39 * lv2)
                itemID1 = 1;
            break;
        case 41:
            lv3 = curItems[40];
            if (lv3 == 0 || floor < 291 + 190 * lv2)
                itemID1 = 1;
            if (lv2 >= 3 && randomBool(engine)) {
                itemID1 = 1;
            }
            break;
        case 42:
            lv3 = curItems[40];
            if (lv3 == 0 || floor < 221 + 2.4 * lv2)
                itemID1 = 1;
            if (lv2 >= 350 && random30Bool(engine))
                itemID1 = 2;
            if (lv2 >= 500 && random40Bool(engine))
                itemID1 = 2;
            if (lv2 >= 600 && randomBool(engine))
                itemID1 = 2;
            break;
        case 43:
            lv6 = curItems[40];
            lv3 = curItems[42];
            if (lv6 == 0 || lv3 == 0 || floor < 321 + 4.6 * lv2)
                itemID1 = 1;
            if (lv2 >= 200 && random40Bool(engine))
                itemID1 = 2;
            if (lv2 >= 300 && randomBool(engine))
                itemID1 = 2;
            break;
        case 44:
            if (lv2 >= 1 && floor < 101 + 4 * lv2 + (lv2 < 5 ? 0 : 50) + (lv2 < 10 ? 0 : 70) + (lv2 < 40 ? 0 : 70) + (lv2 < 60 ? 0 : 70) + (lv2 < 70 ? 0 : 70))
                itemID1 = 2;
            break;
        case 45:
            num3 = 451 + 6 * lv2;
            if (lv2 >= 70)
                num3 += 100;
            if (lv2 >= 80)
                num3 += 200;
            if (lv2 >= 90)
                num3 += 200;
            if (floor < num3)
                itemID1 = 1;
            break;
        case 48:
            if (lv2 >= 1) {
                if (flag3 || floor < 241 + 41 * lv2)
                    itemID1 = 2;
            } else if (floor < 141)
                itemID1 = 2;
            break;
        case 49:
            if (flag3 || floor < 231 + 45 * lv2)
                itemID1 = 2;
            break;
        case 50:
            if (flag3 || floor < 211 + 49 * lv2)
                itemID1 = 2;
            break;
        case 51:
            if (lv2 >= 1) {
                if (floor < 201 + 35 * lv2)
                    itemID1 = 2;
            } else if (floor < 161)
                itemID1 = 2;
            if (lv2 >= 24 && random30Bool(engine))
                itemID1 = 2;
            if (lv2 >= 26 && random30Bool(engine))
                itemID1 = 2;
            break;
        case 52:
            lv6 = curItems[40];
            lv3 = curItems[43];
            if (lv6 == 0 || lv3 <= 10 || floor < 501 + 12 * lv2)
                itemID1 = 1;
            if (lv2 >= 25 && random40Bool(engine))
                itemID1 = 2;
            if (lv2 >= 50 && random30Bool(engine))
                itemID1 = 2;
            if (lv2 >= 75 && random40Bool(engine))
                itemID1 = 2;
            break;
        case 53:
            if (flag1 || flag3 || floor < 761 + 5 * lv2)
                itemID1 = 2;
            else if (lv2 >= 2 && random10Bool(engine))
                itemID1 = 2;
            else if (lv2 >= 3 && random30Bool(engine))
                itemID1 = 2;
            else if (lv2 >= 10 && random15Bool(engine))
                itemID1 = 1;
            else if (lv2 >= 50 && random25Bool(engine))
                itemID1 = 1;
            else if (lv2 >= 80 && random25Bool(engine))
                itemID1 = 2;
            break;
        case 54:
            if (lv2 <= 14)
                itemID1 = 2;
            if (lv2 <= 15 && random70Bool(engine))
                itemID1 = 1;
            lv2 = curItems[itemID1]; // Keep this line
            if (floor < 851 + lv2 * 80)
                itemID1 = 1;
            else if (flag2)
                itemID1 = 2;
            else if (lv2 >= 1 && random40Bool(engine))
                itemID1 = 2;
            else if (lv2 >= 3 && random60Bool(engine))
                itemID1 = 2;
            else if (lv2 >= 5 && random40Bool(engine))
                itemID1 = 1;
            else if (lv2 >= 6 && random90Bool(engine))
                itemID1 = 1;
            else if (lv2 >= 7 && random40Bool(engine))
                itemID1 = 2;
            else if (lv2 >= 9 && random90Bool(engine))
                itemID1 = 2;
            itemID1 = Hosei1OR2(itemID1);
            break;
        case 55:
            if (lv2 >= 2 && random30Bool(engine))
                itemID1 = 1;
            if (lv2 >= 4 && random70Bool(engine))
                itemID1 = 1;
            if (lv2 >= 5 && random90Bool(engine))
                itemID1 = 1;
            if (lv2 >= 7 && random90Bool(engine))
                itemID1 = 1;
            if (flag3)
                itemID1 = 1;
            itemID1 = Hosei1OR2(itemID1);
            break;
        case 56:
            lv3 = curItems[47];
            if (lv3 < 500)
                itemID1 = 2;
            if (lv3 < lv2 * 500)
                itemID1 = 2;
            if (flag3 && random30Bool(engine) || floor < 201)
                itemID1 = 2;
            break;
        case 57:
            if (random90Bool(engine) && (flag3 || floor < 150))
                itemID1 = 2;
            else if (lv2 >= 1 && floor < 226)
                itemID1 = 2;
            else if (flag2 || floor < 801 + lv2 * 200)
                itemID1 = 2;
            break;
        case 58:
            if (flag2 || floor < 1651 + 200 * lv2)
                itemID1 = 2;
            else if (lv2 >= 1 && random01(engine) < 0.334)
                itemID1 = 2;
            break;
        case 59:
            if (flag2 || floor < 1151 + 150 * lv2)
                itemID1 = 2;
            else if (lv2 >= 1 && randomBool(engine))
                itemID1 = 2;
            else if (lv2 >= 5 && random40Bool(engine))
                itemID1 = 2;
            break;
        case 60:
            if (flag2 || floor < 1001 + 250 * lv2)
                itemID1 = 2;
            else if (lv2 >= 5 && randomBool(engine))
                itemID1 = 2;
            break;
        case 61:
            if (flag2 || floor < 1401 + 150 * lv2)
                itemID1 = 2;
            else if (lv2 >= 5 && randomBool(engine))
                itemID1 = 2;
            else if (lv2 >= 10 && random30Bool(engine))
                itemID1 = 2;
            else if (lv2 >= 15 && random25Bool(engine))
                itemID1 = 2;
            else if (lv2 >= 20 && random25Bool(engine))
                itemID1 = 2;
            break;
    }
    
    if (itemID1 == 31 && floor <= 600) {
        itemID1 = 29;
    }

    if (itemID1 == 32 && floor <= 600) {
        itemID1 = 30;
    }
	
    if (itemID1 == 2 && curItems[1] < curItems[2] * 0.5 && random40Bool(engine)) {
        itemID1 = 1;
    }
    if (itemID1 == 1) {
        if (flag4 && floor >= 500) {
            itemID1 = random20Bool(engine) ? ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.6))] : 29;
        }
    } else if (itemID1 == 2 && flag4 && floor >= 500) {
        itemID1 = random20Bool(engine) ? ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.6))] : 30;
    }
    if (itemID1 == 26) {
        lv2 = curItems[itemID1];
        if (flag2 || lv2 <= 0 && floor < 501 || (lv2 <= 1 && floor < 1101 || lv2 >= 2 && floor < 1501)) {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.8))];
        }
    }
    if (itemID1 == 46) {
        max = (floor - 1) * 0.0006 + randomRangeFloat(0, 0.05);
        if (max > 0.6) {
            max = 0.6;
        }
        do {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max))];
        } while (itemID1 == 46);
    }
    if (!isntMaxed(curItems, itemID1)) {
        itemID1 = random70Bool(engine) ? 2 : 1;
    }
    if ((itemID1 == 1 || itemID1 == 2) && floor >= 570) {
        itemID1 += 28;
    }
    if ((itemID1 == 1 || itemID1 == 2 || itemID1 == 29 || itemID1 == 30) && floor >= (randomBool(engine) ? 850 : 900)) {
        itemID1 += 30;
    }
    if (floor >= 200
        && (itemID1 == 1 || itemID1 == 2)
        && curItems[itemID1] >= 1000
        && random30Bool(engine)) {
        itemID1 += 28;
    }
    if (itemID1 == 31 || itemID1 == 32) {
        itemID1 = itemDowngrade(curItems, itemID1, itemID1 - 2);
    }
    if (itemID1 == 29 || itemID1 == 30) {
        itemID1 = itemDowngrade(curItems, itemID1, itemID1 - 28);
    }
    if (!isntMaxed(curItems, itemID1)) {
        itemID1 = random70Bool(engine) ? 2 : 1;
    }
    acquireItem(curItems, itemID1, noBuy);
    return itemID1;
}

function simulateRun(curItems, beginFloor, endFloor) {
    var lv = curItems[23];
    var num1 = 1 + (lv >= 40 ? 160 + lv : 5 * lv) * 0.01; // Based on item 23 parameters
    chests = Array(300).fill(0);
    if (resets == 0) {
        chests[5] = 1;
        chests[7] = 1;
    } else if (resets == 1) {
        chests[2] = 1;
        chests[4] = 1;
        chests[7] = 1;
    } else {
        lv = curItems[2];
        if (!(lv >= 100 && random01(engine) <= 0.28 || lv >= 150 && random01(engine) <= 0.34 || lv >= 200 && random01(engine) <= 0.38 || lv >= 250 && randomBool(engine))) {
            var num2 = random01(engine);
            var num3 = random01(engine);
            if (resets >= 10 && num2 < 0.5 + resets * 0.035) {
                if (num3 < 0.2) {
                    chests[8] = 1;
                } else {
                    chests[7] = 1;
                }
            } else if (num3 < 0.045) {
                chests[4] = 1;
            } else if (num3 < 0.255) {
                chests[5] = 1;
            } else if (num3 < 0.29) {
                chests[4] = 1;
                chests[7] = 1;
            } else if (num3 < 0.4) {
                chests[5] = 1;
                chests[7] = 1;
            } else if (num3 < 0.47) {
                chests[5] = 1;
                chests[8] = 1;
            } else
                chests[7] = 1;
        }
    }
    chests[10] = 1;
    chests[12 + randomRangeInt(0, 2)] = 1;
    chests[15] = 1;
    chests[16 + randomRangeInt(0, 3)] = 1;
    if (curItems[39] == 0) {
        chests[17] = 1;
    }
    var num4 = 0;
    var cur = 20;
    while (cur * 10 <= Math.min(endFloor, 2405)) {
        chests[cur] = 0;
        num2 = 0.12 + cur / 380;
        if (num2 > 0.2) {
            num2 = num2 * 0.8 + 0.04;
        }
        if (num2 > 0.25) {
            num2 = num2 * 0.5 + 0.125;
        }
        if (num2 > 0.35) {
            num2 = num2 * 0.5 + 0.175;
        }
        num3 = num2 * num1;
        if (num3 >= 0.42) {
            num3 = 0.42;
        }
        if (random01(engine) < num3) {
            chests[cur] = 1;
            ++num4;
        }
        if (cur % 5 == 0) {
            chests[cur] = 1;
            if (cur % 10 == 0) {
                if (endFloor < cur / 10) { // TODO record floor instead
                    chests[cur] = cur != 20 ? (cur % 50 != 0 ? 3 : 4) : 2;
                } else if (random25Bool(engine)) {
                    chests[cur] = 2;
                } else if (random01(engine) < 0.22 && cur % 50 == 0) {
                    chests[cur] = 3;
                }
            }
        }
        if (cur % 10 == 0 && cur >= 30) {
            if (num4 == 0) {
                chests[cur - 5 + randomRangeInt(1, 3)] = 1;
                chests[cur - 5 - randomRangeInt(1, 3)] = 1;
            } else if (num4 == 1) {
                chests[cur - 5] = 1;
            } else if (num4 > 5) {
                for (var j = 9; j > 0; j--) {
                    chests[cur - j] = 0;
                }
                for (var j = 0; j < 3; j++) {
                    chests[cur - 5 + randomRangeInt(1, 5)] = 1;
                    chests[cur - 5 - randomRangeInt(1, 5)] = 1;
                }
            }
            num4 = 0;
        }
        cur++;
    }
    for (var i in chests) {
        if (i * 10 > beginFloor && i * 10 <= endFloor) {
            for (var j = 0; j < chests[i]; j++) {
                simulateChest(curItems, i * 10);
            }
        }
    }
}

function simulateReset(curItems, endFloor) {
    var num2 = (curItems[44] >= 1 ? (98 + 2 * curItems[44]) : 0) * 0.01 * randomRangeFloat(1 + endFloor * 0.001, endFloor * 0.009);
    if (endFloor > 200 && num2 < 2) {
        num2 = 2;
    }
    var num3 = Math.floor(num2);
    if (num3 <= 0) {
        num3 = 1;
    }
    if (num3 > 9) {
        num3 = 9;
    }
    for (var i = 0; i < num3; ++i) {
        num1 = randomRangeInt(100, endFloor);
        num2 = num1 - num1 % 10;
        simulateChest(curItems, num2);
    }
}

function randm10(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    num1 = randomRangeInt(Math.trunc(min), Math.trunc(max) + 1);
    num2 = num1 - num1 % 10;
    if (num2 < 0) {
        return 0;
    }
    return num2;
}

// Copied directly from the code, with few modifications. Not too sure what's going there with the whole clearLine thing.
function simulateQuest(curItems, beginFloor, endFloor) {
    specialQuest = random01(engine) < curItems[54] * 0.03;

    duration = randomRangeInt(8, 12);
    if (duration == 11) {
        duration += randomRangeInt(0, 2 + randomRangeInt(0, 2))
    }
    clearLine = new Array(50).fill(0);
    chestFloor = new Array(50).fill(0);
    chestCount = new Array(50).fill(0);
    max1 = Math.min(Math.floor((1 + floorRecord * 0.45 + questRecord * 0.75) / 300 + randomRangeFloat(-0.2, 0.2)), 2) * 10;
    max2 = Math.min(max1, 10);
    max3 = Math.floor((1 + floorRecord * 0.45 + questRecord * 0.75) / 50 + randomRangeFloat(-2.5, 2.5));
    max4 = max3 - max3 % 10;
    num8 = ((1 + questRecord) / 170) + randomRangeFloat(-0.25, 0.25);
    if (max3 < 0) {
        max3 = 1;
    }
    if (specialQuest) {
        clearLine[0] = 100 + randm10(max1) + randm10(max3 * 0.2, max3 * 0.8);
        clearLine[1] = clearLine[0] + 20 + randm10(max3 * 0.25, max3 * 0.8);
        clearLine[2] = clearLine[1] + 20 + max2 + randm10(max1) + randm10(max3 * 0.45, max3 * 0.9 + 1);
        clearLine[3] = clearLine[2] + 30 + randm10(max1 + 5) + randm10(max3 * 0.5, max3 * 0.95 + 1);
        clearLine[4] = clearLine[3] + 20 + max4 + randm10(max4 + max2 + 7) + randm10(max3 * 0.6, max3 + 6);
        for (index = 5; index < 50; ++index) {
            x = random01(engine);
            num12 = 70 + randm10(max4 + max2) + randm10(max3 * 0.3, max3 * 0.6);
            if (x < 0.2) {
                num12 = 50 + randm10(max4 + max2 + 4) + randm10(max3 * 0.35, max3 * 0.75);
            } else if (x < 0.4) {
                num12 = 50 + randm10(max4 + max2 + 6) + randm10(max3 * 0.35, max3 * 0.8);
            } else if (x < 0.5) {
                num12 = 30 + randm10(max4 + max2 + 6) + randm10(max3 * 0.35, max3 * 0.8);
            } else if (x < 0.7) {
                num12 = 20 + randm10(max4 + max2 + 7) + randm10(max3 * 0.35, max3 * 0.8);
            }
            clearLine[index] += clearLine[index - 1] + num12;
        }
        chestCount[2] = 2;
        chestFloor[2] = 200 + randomRangeInt(clearLine[2], clearLine[2] * 2);
        chestFloor[2] -= chestFloor[2] % 10;
        num10 = 3;
    } else if (duration < 11) {
        clearLine[0] = 20 + randm10(max1) + randm10(max3 * 0.25, max3 * 0.8);
        clearLine[1] = clearLine[0] + 20 + randm10(max3 * 0.25, max3 * 0.8);
        clearLine[2] = clearLine[1] + 10 + max2 + randm10(max1) + randm10(max3 * 0.45, max3 * 0.9 + 1);
        clearLine[3] = clearLine[2] + 20 + randm10(max1 + 5) + randm10(max3 * 0.5, max3 * 0.9 + 1);
        clearLine[4] = clearLine[3] + 30 + randm10(max4 + max2 + 6) + randm10(max3 * 0.55, max3 + 2);
        clearLine[5] = clearLine[4] + 40 + max4 + randm10(max4 + max2 + 7) + randm10(max3 * 0.6, max3 + 6);
        for (index = 6; index < 50; ++index) {
            x = random01(engine);
            num12 = 80 + randm10(max4 + max2) + randm10(max3 * 0.35, max3 * 0.7);
            if (x < 0.2) {
                num12 = 70 + randm10(max4 + max2 + 4) + randm10(max3 * 0.35, max3 * 0.8);
            } else if (x < 0.5) {
                num12 = 60 + randm10(max4 + max2 + 6) + randm10(max3 * 0.35, max3 * 0.8);
            } else if (x < 0.65) {
                num12 = 50 + randm10(max4 + max2 + 8) + randm10(max3 * 0.35, max3 * 0.8);
            }
            clearLine[index] += clearLine[index - 1] + num12;
        }
        chestCount[3] = 1;
        if (duration <= 9 && random60Bool(engine) || duration <= 8) {
            chestCount[3] = 2;
        }
        chestFloor[3] = 200 + randomRangeInt(clearLine[3], clearLine[3] * 2);
        chestFloor[3] -= chestFloor[3] % 10;
        num10 = 4;
    } else {
        clearLine[0] = 30 + randm10(max1) + randm10(max3 * 0.2, max3 * 0.8);
        clearLine[1] = clearLine[0] + 20 + randm10(max3 * 0.25, max3 * 0.8);
        clearLine[2] = clearLine[1] + 10 + max2 + randm10(max1) + randm10(max3 * 0.45, max3 * 0.9 + 1);
        clearLine[3] = clearLine[2] + 40 + randm10(max1 + 5) + randm10(max3 * 0.5, max3 * 0.95 + 1);
        clearLine[4] = clearLine[3] + 40 + max4 + randm10(max4 + max2 + 7) + randm10(max3 * 0.6, max3 + 6);
        for (index = 5; index < 50; ++index) {
            x = random01(engine);
            num12 = 90 + randm10(max4 + max2) + randm10(max3 * 0.3, max3 * 0.6);
            if (x < 0.2) {
                num12 = 80 + randm10(max4 + max2 + 4) + randm10(max3 * 0.35, max3 * 0.75);
            } else if (x < 0.5) {
                num12 = 70 + randm10(max4 + max2 + 6) + randm10(max3 * 0.35, max3 * 0.8);
            } else if (x < 0.65) {
                num12 = 60 + randm10(max4 + max2 + 7) + randm10(max3 * 0.35, max3 * 0.8);
            }
            clearLine[index] += clearLine[index - 1] + num12;
        }
        chestCount[2] = 1;
        chestFloor[2] = 200 + randomRangeInt(clearLine[2], clearLine[2] * 2);
        chestFloor[2] -= chestFloor[2] % 10;
        num10 = 3;
    }
    for (index = num10; index < 50; ++index) {
        min = clearLine[index];
        max2 = Math.min(0.7 + index * 0.05, 1);
        floorFactor = randomRangeFloat(0, max2);
        if (specialQuest) {
            floorFactor += 0.05;
        }
        if (floorFactor < 0.34) {
            chestCount[index] = 1 + Math.floor(randomRangeFloat(0, min * 0.0065));
        } else if (floorFactor < 0.52) {
            chestCount[index] = 1 + Math.floor(randomRangeFloat(0, min * 0.005));
        }
        if (chestCount[index] != 0) {
            num12 = 150 + randomRangeInt(min, Math.floor(min * 1.35 + 150));
            if (num12 >= 800) {
                num12 = Math.floor(num12 * 0.75 + 200);
            }
            if (num12 >= 1200) {
                num12 = Math.floor(num12 * 0.75 + 300);
            }
            if (num12 >= 1600) {
                num12 = Math.floor(num12 * 0.75 + 400);
            }
            if (num12 >= 2000) {
                num12 = 2000 + randomRangeInt(0, 70);
            }
            num13 = randomRangeFloat(0, max2) < 0.75 || num12 < 200 ? num12 - num12 % 10 : num12 - num12 % 50;
            if (num13 % 50 == 0 && random30Bool(engine)) {
                num13 += 10;
            }
            chestFloor[index] = num13;
        }
        chestCount[index] = Math.max(chestCount[index], index) < 2 ? 1 : 2;
    }
    if (specialQuest) {
        for (index = 0; index < 50; ++index) {
            if (chestCount[index] != 0) {
                ++chestCount[index];
                if (random01(engine) < 0.35) {
                    ++chestCount[index];
                }
                if (random15Bool(engine)) {
                    ++chestCount[index];
                }
            }
        }
        if (random25Bool(engine)) {
            for (index = 0; index < 50; ++index) {
                if (chestCount[index] == 0 && (index < 5 || random01(engine) >= 0.225) && (index < 12 || random01(engine) >= 0.225)) {
                    ++chestCount[index];
                    if (random40Bool(engine)) {
                        ++chestCount[index];
                    }
                    num4 = clearLine[index] + randomRangeInt(0, 100);
                    if (num4 >= 2000) {
                        num4 = 2000 + randomRangeInt(0, 70);
                    }
                    num12 = num4 - num4 % 10;
                    if (num12 % 50 == 0 && random30Bool(engine)) {
                        num12 += 10;
                    }
                    chestFloor[index] = num12;
                }
            }
        }
        flag = false;
        num13 = 0;
        for (index = 0; index < 50; ++index) {
            if (chestCount[index] >= 4) {
                if (flag) {
                    chestCount[index] = 3;
                }
                flag = true;
            }
            if (chestCount[index] >= 3) {
                if (num13 >= 1 && random01(engine) < 0.26) {
                    chestCount[index] = 2;
                }
                if (num13 >= 2 && random01(engine) < 0.22) {
                    chestCount[index] = 2;
                }
                if (num13 >= 3 && random30Bool(engine)) {
                    chestCount[index] = 2;
                }
                ++num13;
            }
        }
    }
    for (var i = 0; i < 50 && endFloor >= clearLine[i]; i++) {
        if (clearLine[i] > beginFloor) {
            for (j = 0; j < chestCount[i]; ++j) {
                simulateChest(curItems, chestFloor[i] - 1);
            }
        }
    }
}

// Also copied directly from the code
function okno(zako, id, lv) {
    return (zako || ![1, 2, 29, 30, 31, 32].includes(id))
           && (lv <= 1 || ![-99, 21, 22, 27, 28, 34, 35, 37, 38].includes(id))
           && ![-99, 23, 25, 26, 40, 44, 46].includes(id);
}

function itemDowngrade(curitems, itemID, t2) {
    lv = curItems[itemID];
    if (lv >= 15000 && random85Bool(engine))
        itemID = t2;
    else if (lv >= 15100 && randomBool(engine))
        itemID = t2;
    else if (lv >= 15250 && random40Bool(engine))
        itemID = t2;
    else if (lv >= 15500 && random30Bool(engine))
        itemID = t2;
    else if (lv >= 15750 && random25Bool(engine))
        itemID = t2;
    else if (lv >= 16000 && random85Bool(engine))
        itemID = t2;
    else if (lv >= 16500 && random30Bool(engine))
        itemID = t2;
    else if (lv >= 17000 && random80Bool(engine))
        itemID = t2;
    else if (lv >= 18000 && random60Bool(engine))
        itemID = t2;
    else if (lv >= 19000 && random70Bool(engine))
        itemID = t2;
    else if (lv >= 20000 && random90Bool(engine))
        itemID = t2;
    else if (lv >= 25000 && random90Bool(engine))
        itemID = t2;
    else if (lv >= 30000 && random90Bool(engine))
        itemID = t2;
    return itemID;
}

function getItem(floor, zako) {
    if (floor >= 131 && floor % 100 == 0 && randomBool(engine))
        floor -= 10;
    var itemID = simulateChest(curItems, floor, true);
    if (!okno(zako, itemID, curItems[itemID]))
        return -1;
    return itemID;
}

function simulateGoldChest(curItems, floor) {
    itemID1 = -1;
    itemID2 = -1;
    itemID3 = -1;
    for (var index = 0; index < 20; ++index) {
        num1 = index * 3 + randomRangeInt(0, 10 + index * 5);
        num2 = num1 - num1 % 10;
        var itemID = getItem(floor + num2, false);
        if (itemID != -1) {
            if (itemID1 != itemID && itemID2 != itemID && itemID3 != itemID) {
                if (itemID1 == -1)
                    itemID1 = itemID;
                else if (itemID2 == -1)
                    itemID2 = itemID;
                else if (itemID3 == -1)
                    itemID3 = itemID;
                if (itemID3 != -1)
                    break;
            }
        }
    }
    if (itemID3 == -1) {
        for (var index = 0; index < 30; ++index) {
            num1 = index * 3 + randomRangeInt(0, 10 + index * 5);
            num2 = num1 - num1 % 10;
            itemID = getItem(floor + num2, true);
            if (itemID != -1) {
                if (itemID1 != itemID && itemID2 != itemID && itemID3 != itemID) {
                    if (itemID1 == -1)
                        itemID1 = itemID;
                    else if (itemID2 == -1)
                        itemID2 = itemID;
                    else if (itemID3 == -1)
                        itemID3 = itemID;
                    if (itemID3 != -1)
                        break;
                }
            }
        }
    }
    if (itemID3 == -1) {
        ranks = getRanks(curItems);
        for (var index = 0; index < itemCount; ++index) {
            id = ranks[index];
            if (itemID1 != id && itemID2 != id && itemID3 != id) {
                if (okno(true, id, 0)) {
                    if (itemID1 == -1)
                        itemID1 = id;
                    else if (itemID2 == -1)
                        itemID2 = id;
                    else if (itemID3 == -1)
                        itemID3 = id;
                }
                if (itemID3 != -1)
                    break;
            }
        }
    }
    acquireItem(curItems, itemID1);
    acquireItem(curItems, itemID2);
    acquireItem(curItems, itemID3);
}

// The painful part
function sim_nq_re_fl() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            simulateReset(curItems, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_nq_re_nf() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateReset(curItems, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_nq_nr_fl() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_sq_re_fl() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            simulateReset(curItems, endFloor);
            if (randomRangeFloat(0, 1.1) < guildHatStat * 0.0085 + 0.075) {
                simulateQuest(curItems, beginFloor, endFloor);
            }
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_sq_re_nf() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateReset(curItems, endFloor);
            if (randomRangeFloat(0, 1.1) < guildHatStat * 0.0085 + 0.075) {
                simulateQuest(curItems, beginFloor, endFloor);
            }
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_sq_nr_fl() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            if (randomRangeFloat(0, 1.1) < guildHatStat * 0.0085 + 0.075) {
                simulateQuest(curItems, beginFloor, endFloor);
            }
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_sq_nr_nf() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            if (randomRangeFloat(0, 1.1) < guildHatStat * 0.0085 + 0.075) {
                curItems = items.slice();
                simulateQuest(curItems, beginFloor, endFloor);
            }
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_aq_re_fl() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            simulateReset(curItems, endFloor);
            simulateQuest(curItems, beginFloor, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_aq_re_nf() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateReset(curItems, endFloor);
            simulateQuest(curItems, beginFloor, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_aq_nr_fl() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            simulateQuest(curItems, beginFloor, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_aq_nr_nf() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateQuest(curItems, beginFloor, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_gc() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000,
        timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateGoldChest(curItems, singleFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_nc() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000,
        timeStart = performance.now();
    do {
        for (var i = 0; i < 100; i++) {
            curItems = items.slice();
            simulateChest(curItems, singleFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function restoreGUI() {
    setTimeout(function() {
        $("#simulate").show();
        $("#simulating").hide();
    }, 10);
}

// That function is pretty ugly, but it does the job faster than checking every iteration what parameters are set
function mainLoop() {
    runType = $("input[name='is-full-run']:checked")[0].id;
    resets = Number($("#resets")[0].value);
    if (runType === "full-run") {
        questType = $("input[name='quest']:checked")[0].id;
        beginFloor = Number($("#floor-min")[0].value) + 1;
        endFloor = $("#floor-max")[0].value;
        questValues = [Number($("#8min")[0].value), Number($("#9min")[0].value), Number($("#10min")[0].value), Number($("#11min")[0].value), Number($("#12min")[0].value), Number($("#13min")[0].value), Number($("#14min")[0].value), Number($("#15min")[0].value)];
        floorRecord = Number($("#floor-record")[0].value);
        questRecord = Number($("#quest-record")[0].value);
        curItems = items.slice()
        if (questType === "no-quest") {
            if ($("#reset-chests")[0].checked) {
                if ($("#floor-chests")[0].checked) {
                    sim_nq_re_fl();
                } else {
                    sim_nq_re_nf();
                }
            } else {
                if ($("#floor-chests")[0].checked) {
                    sim_nq_nr_fl();
                } else {
                    $("#err-nop").show();
                    restoreGUI();
                    return;
                }
            }
        } else if (questType === "normal-quest") {
            guildHatStat = curItems[39] == 0 ? 0 : curItems[39] + 24;
            if ($("#reset-chests")[0].checked) {
                if ($("#floor-chests")[0].checked) {
                    sim_sq_re_fl();
                } else {
                    sim_sq_re_nf();
                }
            } else {
                if ($("#floor-chests")[0].checked) {
                    sim_sq_nr_fl();
                } else {
                    sim_sq_nr_nf();
                }
            }
        } else if (questType === "always-quest") {
            if ($("#reset-chests")[0].checked) {
                if ($("#floor-chests")[0].checked) {
                    sim_aq_re_fl();
                } else {
                    sim_aq_re_nf();
                }
            } else {
                if ($("#floor-chests")[0].checked) {
                    sim_aq_nr_fl();
                } else {
                    sim_aq_nr_nf();
                }
            }
        } else {
            $("#err-wrong-quest").show();
            restoreGUI();
            return;
        }
    } else if (runType === "gold-chest") {
        singleFloor = Number($("#single-floor")[0].value);
        sim_gc();
    } else if (runType === "normal-chest") {
        singleFloor = Number($("#single-floor")[0].value);
        sim_nc();
    } else {
        $("#err-wrong-run").show();
        restoreGUI();
        return;
    }
    for (var i = 0; i < items.length; i++) {
        gainedLevels[i] /= steps;
        gainedTimes[i] = gainedTimes[i] / steps * 100;
    }
    restoreGUI();
    displayResults();
    $("#results").modal();
}

function debugInit() {
    j = 0;
    for (var i in itemObjs) {
        items[j] = Number(getByCleanName(i)[0].value);
        j++;
    }
    gainedLevels = new Array(itemCount).fill(0);
    gainedTimes = new Array(itemCount).fill(0);
    runType = $("input[name='is-full-run']:checked")[0].id;
    resets = Number($("#resets")[0].value);
    questType = $("input[name='quest']:checked")[0].id;
    singleFloor = Number($("#single-floor")[0].value);
    beginFloor = $("#floor-min")[0].value + 10;
    endFloor = $("#floor-max")[0].value;
    questValues = [Number($("#8min")[0].value), Number($("#9min")[0].value), Number($("#10min")[0].value), Number($("#11min")[0].value), Number($("#12min")[0].value), Number($("#13min")[0].value), Number($("#14min")[0].value), Number($("#15min")[0].value)];
    guildHatStat = items[39] == 0 ? 0 : items[39] + 24;
    floorRecord = Number($("#floor-record")[0].value);
    questRecord = Number($("#quest-record")[0].value);
    curItems = items.slice();
    console.log("Ready to run");
}

function debugCur() { // /u/Vetokend 20190526
    items = [20,12273,19516,30,20,15123,25,9643,100,7729,300,10,300,10,300,10,300,10,600,11257,10,105,105,71,6004,12,3,45,45,13377,15323,12111,15335,10,70,70,13014,30,30,16,31,5,701,401,76,100,355,512,16,16,11,30,151,118,10,13,3,3,2,3]
    j = 0;
    for (i in itemObjs) {
        getByCleanName(i)[0].value = items[j];
        j++;
    }
    $("#resets")[0].value = 2348;
    $("#floor-max")[0].value = 1550;
}

function debugItem() {
    lv = 1, claymoreLv = 929, resets = 171;
}

function displayResults() {
    if (presetLoading) { // Loading a preset will trigger radio button clicks and call this function
        return;
    }
    hideCapped = $("#hide-capped")[0].checked;
    sortType = $("input[name='res-sort']:checked")[0].id;
    $("#res-table").html("");
    $("#simulated-count").html(steps);
    $("#simulated-item").html(gainedLevels.reduce((a, b) => a + b, 0).toFixed(2));
    var j;
    if (sortType === "avg") {
        j = 0;
        tabs = doubleRefSort(gainedTimes, names, gainedLevels);
    } else if (sortType === "prob") {
        j = 2;
        tabs = doubleRefSort(gainedLevels, names, gainedTimes);
    } else {
        $('#results').modal('hide');
        $("#err-wrong-sort").show();
        return;
    }
    curItems = items.slice();
    for (var i = 0; i < itemCount; i++) {
        var x = 0;
        itemID = itemObjs[tabs[1][i]].id;
        if (caps[itemID]) {
            x = 160 * (curItems[itemID] / caps[itemID]);
        }
        var str = "<tr><td><img src='img/item" + itemID + ".png'/></td><td>" + setColor(tabs[1][i], x) + "</td><td>" + setColor(curItems[itemID], x) + "</td><td>";
        var hidden = hideCapped;
        if (!isntMaxed(curItems, itemID)) {
            str += "<span class='red'>Capped</span></td><td>";
        } else if (tabs[1][i] === "Fire Sword") {
            str += "<span class='red'>Shop only</span></td><td>";
        } else {
            hidden = false;
            str += setColor(tabs[j][i].toFixed(5) + "%", x) + "</td><td>" + setColor("+" + tabs[2 - j][i].toFixed(2), x);
        }
        rank = rnd(droprank[itemID] + (1 + droprank[itemID]) * (1 + droprank2[itemID] * curItems[itemID] / 2) / 2, 1);
        str += "</td><td>" + setColor(String(itemObjs[tabs[1][i]].cap).replace("Infinity", "-"), x) + "</td><td>" + rank + "</td></tr>";
        if (!hidden) {
            $("#res-table").append(str);
        }
    }
}

function setColor(txt, capProgression) {
    return "<span style='color:rgb(" + capProgression + ", " + (160 - capProgression) + ", 0)'>" + txt + "</span>";
}

function runSimulation() {
    $("#simulate").hide();
    $("#simulating").show();
    $("#err-wrong-run").hide();
    $("#err-wrong-quest").hide();
    $("#err-wrong-sort").hide();
    $("#err-nop").hide();
    items = new Array(itemCount).fill(0);
    j = 0;
    for (var i in itemObjs) {
        items[j] = Number(getByCleanName(i)[0].value);
        j++;
    }
    gainedLevels = new Array(itemCount).fill(0);
    gainedTimes = new Array(itemCount).fill(0);
    setTimeout(mainLoop, 10);
}

function openImport() {
    $("#import-code")[0].value = "";
    $("#import-error").hide();
    $("#import").modal();
}

function importPreset() {
    try {
        presetLoading = true;
        doImportPreset(decodePreset($("#import-code")[0].value));
        presetLoading = false;
        $("#import").modal("hide");
    } catch (e) {
        $("#import-error").show();
        $("#import-error-text").html("(" + e.message + ")");
        console.error(e);
        presetLoading = false;
    }
}

function doImportPreset(toImport) {
    items = toImport[0];
    var j = 0;
    for (i in itemObjs) { // Update item levels in GUI
        if (i == "Coat of Gold") i = "Golden Coat"; // Pre-2.0.0 compatibility
        if (i == "A King's Crown") i = "Royal Crown";
        val = items[j];
        if (val === undefined) {
            val = 0;
        }
        getByCleanName(i)[0].value = val;
        j++;
    }
    $("#" + toImport[1]).prop("checked", true).trigger("click");
    $("#resets")[0].value = toImport[2];
    $("#" + toImport[3]).prop("checked", true).trigger("click");
    $("#single-floor")[0].value = toImport[4];
    $("#reset-chests").prop("checked", toImport[5]);
    $("#floor-chests").prop("checked", toImport[6]);
    $("#hide-capped").prop("checked", toImport[7]);
    $("#floor-min")[0].value = toImport[8];
    $("#floor-max")[0].value = toImport[9];
    $("#" + toImport[10]).prop("checked", true).trigger("click");
    for (var i = 9; i < 19; i++) {
        $("#" + i).value = toImport[i + 2];
    }
    $("#" + toImport[19]).prop("checked", true).trigger("click");
    $("#floor-record")[0].value = toImport[20] || 750;
    $("#quest-record")[0].value = toImport[21] || 700;
    for (i in toImport[22]) {
        if (i == 0) {
            $("#itemLevels").prepend($("#" + toImport[22][i]));
        } else {
            $("#" + toImport[22][i]).insertAfter($("#" + toImport[22][i-1]));
        }
    }
}

function cleanName(i) {
    return i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, "");
}

function getByCleanName(i) {
    return $("#" + cleanName(i));
}

function getExportData() {
    j = 0;
    for (var i in itemObjs) {
        items[j] = Number(getByCleanName(i)[0].value);
        j++;
    }
    toExport = [
        items,
        $("input[name='is-full-run']:checked")[0].id,
        Number($("#resets")[0].value),
        $("input[name='run-time']:checked")[0].id,
        Number($("#single-floor")[0].value),
        $("#reset-chests")[0].checked,
        $("#floor-chests")[0].checked,
        $("#hide-capped")[0].checked,
        Number($("#floor-min")[0].value),
        Number($("#floor-max")[0].value),
        $("input[name='quest']:checked")[0].id,
        Number($("#8min")[0].value),
        Number($("#9min")[0].value),
        Number($("#10min")[0].value),
        Number($("#11min")[0].value),
        Number($("#12min")[0].value),
        Number($("#13min")[0].value),
        Number($("#14min")[0].value),
        Number($("#15min")[0].value),
        $("input[name='res-sort']:checked")[0].id,
        Number($("#floor-record")[0].value),
        Number($("#quest-record")[0].value),
        $.map($(".item_tr"), x => x.id)
    ];
    return encodePreset(toExport);
}

function decodePreset(preset) {
    return JSON.parse(RawDeflate.inflate(atob(preset)));
}

function encodePreset(data) {
    return btoa(RawDeflate.deflate(JSON.stringify(data)));
}

function exportPreset() {
    $("#export-code").html(getExportData());
    $("#export").modal();
}

function savePreset() {
    if (localStorage.getItem("pset_" + $("#presetSave")[0].value)) {
        $("#save-confirm").modal();
    } else {
        doSavePreset();
        $("#save-success").modal();
    }
}

function doSavePreset() {
    localStorage.setItem("pset_" + $("#presetSave")[0].value, getExportData());
    updatePresets();
}

function updatePresets() {
    $("#presetEdit option:gt(0)").remove();
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != "_autosave" && localStorage.key(i) != "initValues") {
            $("#presetEdit").append($("<option></option>").attr("value", localStorage[localStorage.key(i)]).text(localStorage.key(i).substr(5)));
        }
    }
}

function loadPreset() {
    var pset = "pset_" + $("#presetEdit option:selected").text();
    if (!localStorage.getItem(pset)) {
        $("#unselected").modal();
        return;
    }
    try {
        presetLoading = true;
        doImportPreset(decodePreset(localStorage.getItem(pset)));
        presetLoading = false;
        $("#load-success").modal();
    } catch (e) {
        presetLoading = false;
        $("#load-err").html(e);
        $("#load-fail").modal();
    }
}

function removePreset() {
    var pset = "pset_" + $("#presetEdit option:selected").text();
    if (!localStorage.getItem(pset)) {
        $("#unselected").modal();
        return;
    }
    $("#remove-confirm").modal();
}

function doRemovePreset() {
    localStorage.removeItem("pset_" + $("#presetEdit option:selected").text());
    updatePresets();
}

function changeTab(newTab) {
        $('#nav_' + currentTab).parent().removeClass('active');
        $('#nav_' + newTab).parent().addClass('active');
        $('#' + currentTab).hide();
        $('#' + newTab).show();
        currentTab = newTab;
        scroll();
}

function copyItemsLoot() {
    for (var i in itemObjs) {
        $("#" + nameCleanup(i))[0].value = $("#" + nameCleanup(i) + "_i")[0].value;
    }
}

function copyLootItems() {
    for (var i in itemObjs) {
        $("#" + nameCleanup(i) + "_i")[0].value = $("#" + nameCleanup(i))[0].value;
    }
    for (var i in itemObjs) {
        updateItemEffect(i, false);
    }
}

function getTable(strCaption, strData, start, end, fCaption, fData, cl="") {
    str = "<table class='table table-hover table-data'><thead><tr><th>" + strCaption + "</th>";
    for (var i = start; i <= end; i++) {
        str += "<td" + (cl ? " class='" + cl + "'>" : ">") + fCaption(i) + "</td>";
    }
    str += "</tr></thead><tbody>";
    for (var i = 0; i < strData.length; i++) {
        str += "<tr><th>" + strData[i] + "</th>";
        for (var j = start; j <= end; j++) {
            str += "<td" + (cl ? " class='" + cl + "'>" : ">") + fData[i](j) + "</td>";
        }
        str += "</tr>";
    }
    return str + "</tbody></table>";
}

function rnd(x, n) {
    return +x.toFixed(n)
}

function getAnchor(id) {
    return "<a class='alink' href='#" + nameCleanup(id) + "_l'><samp>" + id + "</samp></a>";
}

function getTime(x) {
    x = rnd(x, 2);
    return x < 60 ? x + " second" + (x == 1 ? "" : "s") : Math.floor(x/60) + " minute" + (x < 120 ? "" : "s") + (x % 60 == 0 ? "" : " " + getTime(x % 60));
}

function getSkillDuration(skill, x, lv) {
    return "<samp>" + skill + "</samp> lasts <b>" + getTime(30*x) + "</b> (base duration" + (lv == 0 ? "" : ": " + getTime(30)) + ").";
}

function getSkillCooldown(skill, id, lv, baseDuration) {
    x = 1 - getPara(id, lv)*0.01;
    return "<samp>" + skill + "</samp> recharges in <b>" + getTime(baseDuration*x) + "</b> after being used (base duration" + (lv == 0 ? "" : ": " + getTime(baseDuration)) + ").";
}

function getEffect(id, lv = 0) {
    if (lv < 0 || !itemObjs.hasOwnProperty(id) || Math.floor(lv) != lv || lv > itemObjs[id].cap) {
        return "Invalid level";
    } else if (lv == 0 && !["Lance", "Halberd", "Red Elixir", "Gold Vessels", "Blue Elixir", "Green Elixir", "Coat of Gold", "Golden Rod", "Solomon's Staff", "Solomon's Key", "Excalibur", "Aegis", "Caduceus", "Philosopher's Stone", "Summoning letter", "Book of Prophecy", "Mysterious Vault"].includes(id)) {
        return "No effect.";
    }
    x = 1 + getPara(id, lv)/100;
    switch (id) {
        case "Lance":
            x = rnd(x, 2);
            return (lv == 0 ? "No effect." : "Berserker spawn chance from <samp>Heroic Berserker</samp> is multiplied by <b>" + x + "</b>.") + "<br/>"
            + getTable("Heroic Berserker's level", ["Berserker chance (%)"], 1, 15, i => i, [i => i <= 5 ? rnd((1.5 + i / 2) * x, 2) : rnd((3 + i/ 5) * x, 2)], "w50")
            + getTable("Heroic Berserker's level", ["Berserker chance (%)"], 16, 30, i => i, [i => rnd((4.5 + i/10) * x, 2)], "w50") + "<div class='bottom10'/>";
        case "Earth Armour":
            return "Heroes' and soldiers' HP are multiplied by <b>" + x.toLocaleString() + "</b>. This factor stacks <b>additively</b> with " + getAnchor("Full Plate") + " and " + getAnchor("Full Helmet") + ", and <b>multiplicatively</b> with <samp>Power Up</samp> and other HP bonuses.";
        case "Claymore":
            return "Heroes' and soldiers' attack is multiplied by <b>" + x.toLocaleString() + "</b>. This factor stacks <b>additively</b> with " + getAnchor("Flamberge") + " and " + getAnchor("Tomahawk") + ", and <b>multiplicatively</b> with <samp>Power Up</samp>, <samp>Fame</samp> and other attack bonuses.";
        case "Wing Boots":
            return "Heroes' moving speed is multiplied by <b>" + x.toLocaleString() + "</b>. Soldiers' moving speed is increased by <b>" + (x - 1).toLocaleString() + "</b>. This stacks <b>multiplicatively</b> with <samp>Doping</samp>."; 
        case "Training Book":
            x = getPara(id, lv);
            return "Soldiers spawn <b>" + x + "%</b> faster. This stacks <b>multiplicatively</b> with <samp>Growth Speed</samp> and <samp>Doping</samp>.";
        case "Golden Gloves":
            return "Multiplies enemy gold found by <b>" + x.toLocaleString() + "</b>. This stacks <b>multiplicatively</b> with <samp>Rain of Gold</samp> and " + getAnchor("Golden Pot") + ".";
        case "Rapier":
            return "Heroes' and soldiers' climbing speed is multiplied by <b>" + x.toLocaleString() + "</b>."; 
        case "Halberd":
            y = 32 + 0.18 * getPara(id, lv);
            z = 15 + 0.1 * getPara(id, lv);
            return "Berserkers from <samp>Heroic Berserker</samp> have <b>" + (3*x).toLocaleString() + " times</b> as much HP and <b>" + (5*x).toLocaleString() + " times</b> as much attack as normal heroes." + (Number($("#mjolnir_i")[0].value) ? "<br/>Demons from " + getAnchor("Mjolnir") + " have <b>" + y.toLocaleString() + " times</b> as much HP and <b>" + z.toLocaleString() + " times</b> as much attack as normal heroes." : "");
        case "Red Elixir":
            return (lv == 0 ? "No effect." : "Increases the moving speed and spawning speed of units affected by <samp>Doping</samp>.") + "<br/>"
            + getTable("Doping's level", ["Moving speed multiplier", "Spawn speed multiplier"], 1, 20, i => i, [i => rnd(1 + Math.min((27 + i * 3) * x, 60) * 0.01, 2), i => rnd(1 + (40 + i * 10) * x * 0.01, 2)], "w50") + "<div class='bottom10'/>";
        case "Gold Vessels":
            return (lv == 0 ? "No effect." : "Increases the gold from enemies when using <samp>Rain of Gold</samp>.") + "<br/>"
            + getTable("Rain of Gold's level", ["Gold multiplier"], 1, 20, i => i, [i => rnd((90 + i * 10) * x * 0.01, 2)], "w50")
            + getTable("Rain of Gold's level", ["Gold multiplier"], 21, 40, i => i, [i => rnd((90 + i * 10) * x * 0.01, 2)], "w50")
            + getTable("Rain of Gold's level", ["Gold multiplier"], 41, 60, i => i, [i => rnd((90 + i * 10) * x * 0.01, 2)], "w50")
            + getTable("Rain of Gold's level", ["Gold multiplier"], 61, 80, i => i, [i => rnd((90 + i * 10) * x * 0.01, 2)], "w50")
            + getTable("Rain of Gold's level", ["Gold multiplier"], 81, 100, i => i, [i => rnd((90 + i * 10) * x * 0.01, 2)], "w50")
            + getTable("Rain of Gold's level", ["Gold multiplier"], 101, 120, i => i, [i => rnd((90 + i * 10) * x * 0.01, 2)], "w50") + "<div class='bottom10'/>";
        case "Blue Elixir":
            return getSkillDuration("Doping", x, lv);
        case "Green Elixir":
            return getSkillCooldown("Doping", id, lv, 600);
        case "Golden Coat":
            return getSkillDuration("Rain of Gold", x, lv);
        case "Golden Rod":
            return getSkillCooldown("Rain of Gold", id, lv, 900);
        case "Solomon's Staff":
            return getSkillDuration("Warp", x, lv);
        case "Solomon's Key":
            return getSkillCooldown("Warp", id, lv, 1800);
        case "Excalibur":
            return getSkillDuration("Ultimate Summon", x, lv);
        case "Aegis":
            return getSkillCooldown("Ultimate Summon", id, lv, 2700);
        case "Caduceus":
            return "<b>" + (0.25 + 1.75 * x).toLocaleString() + "%</b> of all non-boss enemies above floor 25 are treasure chests."
        case "Philosopher's Stone":
            return "Treasure chests contain <b>" + (x*10).toLocaleString() + " times</b> more gold than normal monsters, which are themselves affected by <samp>Rain of Gold</samp> and " + getAnchor("Golden Pot") + ".";
        case "Hydra's Poison Arrow":
            x = getPara(id, lv);
            return "Enemies' HP regeneration is decreased by <b>" + x + "%</b>.";
        case "Durandal":
            x = getPara(id, lv);
            return "Heroes' are <b>" + x + "%</b> cheaper.";
        case "Mistilteinn":
            x = getPara(id, lv);
            return "Soldiers are <b>" + x + "%</b> cheaper.";
        case "Royal Crown":
            return "Increases the probability and number of chests gotten on floors ending with 10, 20, 30 or 40. This is a complex effect; exact values will come in a future update.";
            // TODO
        case "Gungnir":
            return "Offline gold is multiplied by <b>" + x.toLocaleString() + "</b>. Offline time past 10 hours counts for half as much, with a hard cap at 22 hours (16 hours worth of gold). Offline gold follows a formula based on the current highest floor and the number of levels of your soldiers. Soldiers that are far in the soldier list count more.";
        case "Lævateinn":
            return "The first <b>" + lv + "</b> soldier" + (lv > 1 ? "s" : "") + " will be automatically bought when resetting the Tower.";
        case "Gáe Bolg":
            return "Tapping the screen will summon <b>" + (lv + 1) + "</b> heroes at once.";
        case "Mithril Sword":
            x = getPara(id, lv);
            return "Decreases enemy HP by <b>" + x + "%</b>.";
        case "Mithril Armour":
            x = getPara(id, lv);
            return "Decreases enemy attack by <b>" + x + "%</b>.";
        case "Full Plate":
            return "Heroes' and soldiers' HP are multiplied by <b>" + x.toLocaleString() + "</b>. This factor stacks <b>additively</b> with " + getAnchor("Earth Armour") + " and " + getAnchor("Full Helmet") + ", and <b>multiplicatively</b> with <samp>Power Up</samp> and other HP bonuses.";
        case "Flamberge":
            return "Heroes' and soldiers' attack is multiplied by <b>" + x.toLocaleString() + "</b>. This factor stacks <b>additively</b> with " + getAnchor("Claymore") + " and " + getAnchor("Tomahawk") + ", and <b>multiplicatively</b> with <samp>Power Up</samp>, <samp>Fame</samp> and other attack bonuses.";
        case "Full Helmet":
            return "Heroes' and soldiers' HP are multiplied by <b>" + x.toLocaleString() + "</b>. This factor stacks <b>additively</b> with " + getAnchor("Earth Armour") + " and " + getAnchor("Full Plate") + ", and <b>multiplicatively</b> with <samp>Power Up</samp> and other HP bonuses.";
        case "Tomahawk":
            return "Heroes' and soldiers' attack is multiplied by <b>" + x.toLocaleString() + "</b>. This factor stacks <b>additively</b> with " + getAnchor("Claymore") + " and " + getAnchor("Flamberge") + ", and <b>multiplicatively</b> with <samp>Power Up</samp>, <samp>Fame</samp> and other attack bonuses.";
        case "Summoning letter":
            return (lv == 0 ? "No effect." : "Increases the number of heroes that can be summoned at once. Stacks up with <samp>Summon</samp>.") + "<br/>"
            + getTable("Summon's level", ["Max. heroes"], 0, 19, i => i, [i => 5 + 2*i + lv], "w50")
            + getTable("Summon's level", ["Max. heroes"], 20, 39, i => i, [i => 5 + 2*i + lv], "w50")
            + getTable("Summon's level", ["Max. heroes"], 40, 59, i => i, [i => 5 + 2*i + lv], "w50")
            + getTable("Summon's level", ["Max. heroes"], 60, 79, i => i, [i => 5 + 2*i + lv], "w50") + getTable("Summon's level", ["Max. heroes"], 80, 100, i => i, [i => 5 + 2*i + lv], "w50");
        case "Awakening Armor":
            x = rnd(x, 2);
            return "Multiplies the HP of soldiers above level 1000 by <b>" + x.toLocaleString() + "</b>. This stacks <b> multiplicatively</b> with other HP bonuses.";
        case "Awakening Sword":
            x = rnd(x, 2);
            return "Multiplies the attack of soldiers above level 1000 by <b>" + x.toLocaleString() + "</b>. This stacks <b> multiplicatively</b> with other attack bonuses.";
        case "Gold Box":
            x = getPara(id, lv);
            return "Automatically grants <b>" + x.toLocaleString() + "</b> starting gold when resetting the Tower.";
        case "Awakening Armor 2":
            x = rnd(x, 2);
            return "Multiplies the HP of soldiers above level 10000 by <b>" + x.toLocaleString() + "</b>. This stacks <b> multiplicatively</b> with other HP bonuses.";
        case "Awakening Sword 2":
            x = rnd(x, 2);
            return "Multiplies the attack of soldiers above level 10000 by <b>" + x.toLocaleString() + "</b>. This stacks <b> multiplicatively</b> with other attack bonuses.";
        case "Guild Hat":
            x = getPara(id, lv);
            return "Upon resetting the Tower, there is a <b>" + rnd(x * 0.85 + 7.5, 2) + "%</b> chance of starting a quest.";
        case "Mjolnir":
            x = rnd(getPara(id, lv), 2);
            return "Tapping the screen has a <b>" + x + "%</b> chance of summoning a demon.";
        case "Dark Knight Armor":
            return "Demons will nullify all damage for the first <b>" + lv + "</b> times they are hit.";
        case "Gate":
            x = rnd(getPara(id, lv), 2);
            x2 = getPara("Dark Gate", Number($("#dark_gate_i")[0].value));
            return "Units have a <b>" + x + "%</b> chance of teleporting to the next enemy after killing one.<br/>For Demons, this chance compounds with " + getAnchor("Dark Gate") + " for a total chance of <b>" + rnd(x + x2, 2) + "%</b>.";
        case "Dark Gate":
            x = rnd(getPara(id, lv), 2);
            x2 = getPara("Gate", Number($("#gate_i")[0].value));
            return "Demons have an additional <b>" + x + "%</b> chance of teleporting to the next enemy after killing one.<br/>This chance compounds with " + getAnchor("Gate") + " for a total chance of <b>" + rnd(x + x2, 2) + "</b>%.";
        case "Magic Lamp":
            x = getPara(id, lv);
            return "Resetting the Tower grants additional item chests.<br/>"
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 9, 19, i => i == 9 ? "<100": 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 20, 29, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 30, 39, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 40, 49, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 50, 59, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 60, 69, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 70, 79, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 80, 89, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 90, 99, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 100, 109, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 110, 119, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 120, 129, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 130, 139, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 140, 149, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 150, 159, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 160, 169, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
            + getTable("Reset at floor", ["Chests gotten (min ~ avg ~ max)"], 170, 179, i => 10*i, [i => (magicLampCalc(10*i, x)).join(" ~ ")], "w90")
        case "Dark Boots":
            x -= 1;
            return "Demons' moving speed is increased by <b>" + x.toLocaleString() + "</b>. This stacks <b>multiplicatively</b> with <samp>Doping</samp>.";
        case "Fire Sword":
            return "Multiplies heroes and soldier's attack by <b>" + (1+lv/20).toLocaleString() + "</b>. This stacks <b>multiplicatively</b> with " + getAnchor("Flame Pot") + ", " + getAnchor("Awakening Sword") + ", " + getAnchor("Awakening Sword 2") + " and <samp>Power Up</samp> and <b>additively</b> with other attack bonuses.<br/>Also increases heroes and soldier's base attack (at their current level) by <b>" + (lv*(lv+41)).toLocaleString() + "</b>. This stacks <b>multiplicatively</b> with all other attack bonuses.";
        case "Freyr's Sword":
            x = getPara(id, lv);
            x2 = getPara("Freyr's Sword 2", Number($("#freyrs_sword_2_i")[0].value));
            lvs = x + x2;
            save = lvs;
            lv200 = lvs >= 3000 ? Math.floor((lvs - 1001) / 200) + 1 : 0;
            lvs -= 200 * lv200;
            lv50 = lvs >= 800 ? Math.floor((lvs - 401) / 50) + 1 : 0;
            lvs -= 50 * lv50;
            lv20 = lvs >= 300 ? Math.floor((lvs - 101) / 20) + 1 : 0;
            lvs -= 20 * lv20;
            return "When resetting the Tower, soldiers affected by " + getAnchor("Lævateinn") + " will receive additional levels as follow:<br/>"
            + (lv200 ? "- <b>200</b> levels will be added to a random soldier, repeated <b>" + lv200 + "</b> time" + (lv200 > 1 ? "s": "") + ".<br/>" : "")
            + (lv50 ? "- <b>50</b> levels will be added to a random soldier, repeated <b>" + lv50 + "</b> time" + (lv50 > 1 ? "s": "") + ".<br/>" : "")
            + (lv20 ? "- <b>20</b> levels will be added to a random soldier, repeated <b>" + lv20 + "</b> time" + (lv20 > 1 ? "s": "") + ".<br/>" : "")
            + (lvs ? "- <b>1</b> level will be added to a random soldier, repeated <b>" + lvs + "</b> time" + (lvs > 1 ? "s": "") + ".<br/>" : "")
            + "In total, <b>" + save.toLocaleString() + "</b> additional soldiers levels will be purchased for free (includes the effect of " + getAnchor("Freyr's Sword 2") + ").";
        case "Flame Pot":
            x = rnd(getPara(id, lv), 2);
            return "Increases heroes and soldiers' attack by your amount of crystals divided by 10 (in percent), up to a maximum of <b>" + x + "%</b> at <b>" + (x*10) + "</b> crystals. This stacks <b>multiplicatively</b> with all other attack bonuses.";
        case "Ice Pot":
            x = rnd(getPara(id, lv), 2);
            return "Increases heroes and soldiers' HP by your amount of crystals divided by 10 (in percent), up to a maximum of <b>" + x + "%</b> at <b>" + (x*10) + "</b> crystals. This stacks <b>multiplicatively</b> with all other HP bonuses.";
        case "Golden Pot":
            x = rnd(getPara(id, lv), 2);
            return "Increases all gold found by your amount of crystals divided by 10 (in percent), up to a maximum of <b>" + x + "%</b> at <b>" + (x*10) + "</b> crystals. This stacks <b>multiplicatively</b> with all other gold bonuses.";
        case "Black Essence":
            x = getPara(id, lv);
            return "Whenever a soldier is summoned, there is a <b>" + x + "%</b> chance that the next same unit will be summoned <b>30%</b> earlier. On average, increases soldier spawning speed by <b>" + rnd(x*0.3, 2) + "%</b>.";
        case "Demon Eye":
            x = rnd(getPara(id, lv), 2);
            return "Demons have a <b>" + x + "%</b> chance of attacking all enemies on the floor at once.";
        case "Red Hand":
            x = rnd(getPara(id, lv), 2);
            return "When a unit is summoned, it has a <b>" + x + "%</b> chance of appearing directly next to the first living enemy of the floor.";
        case "Veteran's Hat":
            x = getPara(id, lv);
            return "When a quest is starting through " + getAnchor("Guild Hat") + ", there is a <b>" + x + "%</b> chance it will be a special quest, which will yield additional rewards." + (x != 30 ? " If you have never encountered a special quest so far, this chance is set to <b>30%</b> instead." : "");
        case "Blue Crystal":
            return "Watching an ad will reward crystals and chests with the following probabilities:</br>" + getTable("Number received", ["Chests", "Crystals"], 0, 3, i => i, [i => bc_items[lv - 1][i], i => bc_crystals[lv - 1][i]], "w50");
        case "Freyr's Sword 2":
            x = getPara(id, lv);
            x2 = getPara("Freyr's Sword", Number($("#freyrs_sword_i")[0].value));
            lvs = x + x2;
            save = lvs;
            lv200 = lvs >= 3000 ? Math.floor((lvs - 1001) / 200) + 1 : 0;
            lvs -= 200 * lv200;
            lv50 = lvs >= 800 ? Math.floor((lvs - 401) / 50) + 1 : 0;
            lvs -= 50 * lv50;
            lv20 = lvs >= 300 ? Math.floor((lvs - 101) / 20) + 1 : 0;
            lvs -= 20 * lv20;
            return "When resetting the Tower, soldiers affected by " + getAnchor("Lævateinn") + " will receive additional levels as follow:<br/>"
            + (lv200 ? "- <b>200</b> levels will be added to a random soldier, repeated <b>" + lv200 + "</b> time" + (lv200 > 1 ? "s": "") + ".<br/>" : "")
            + (lv50 ? "- <b>50</b> levels will be added to a random soldier, repeated <b>" + lv50 + "</b> time" + (lv50 > 1 ? "s": "") + ".<br/>" : "")
            + (lv20 ? "- <b>20</b> levels will be added to a random soldier, repeated <b>" + lv20 + "</b> time" + (lv20 > 1 ? "s": "") + ".<br/>" : "")
            + (lvs ? "- <b>1</b> level will be added to a random soldier, repeated <b>" + lvs + "</b> time" + (lvs > 1 ? "s": "") + ".<br/>" : "")
            + "In total, <b>" + save.toLocaleString() + "</b> additional soldiers levels will be purchased for free (includes the effect of " + getAnchor("Freyr's Sword") + ").";
        case "Book of Prophecy":
            str = "The daily reward depends on the number of consecutive logins.<br/>";
            if (lv == 0) {
                return str + getTable("Day", ["Crystals"], 1, 15, i => i, [i => (i == 2 ? 10 : 8) + (i % 5 == 0 ? 2 : 0) + (i % 10 == 0 ? 7 : 0) + (i % 15 == 0 ? 12 : 0)], "w50") + getTable("Day", ["Crystals"], 16, 30, i => i, [i => (i == 2 ? 10 : 8) + (i % 5 == 0 ? 2 : 0) + (i % 10 == 0 ? 7 : 0) + (i % 15 == 0 ? 12 : 0)], "w50")
                + "<br/>This table loops after 30 days, except that Day 2 will reward <b>8</b> crystals instead of <b>10</b> after the first 30 days.";
            }
            return str + getTable("Day", ["Crystals", "Chests", "Gold chests"], 0, 14, i => i + 1, [i => bop_rewards[lv - 1][i][0], i => bop_rewards[lv - 1][i][1], i => bop_rewards[lv - 1][i][2]], "w50")
            + "<br/>¹ +1 for every 5 completed 15-day cycle, up to +5"
            + "<br/>² +1 for every completed 15-day cycle, up to +5"
            + "<br/>³ +1 for every 10 completed 15-day cycle, up to +5"
            + "<br/>This table loops after 15 days.";
        case "Ancient Magic Stone":
            return "Picks <b>" + (lv > 1 ? ((lv == 2 ? "two" : "three") + "</b> random items") : "one</b> random item") + " after resetting the Tower. The selected item" + (lv == 2 ? "s are" : " is") + " upgraded with bonus levels for the next reset.</b>The list of items that can be upgraded, their possible bonus levels and their weight (chance of being picked) are available <a href='https://i.imgur.com/YtXJc7m.png'><b>here</b></a>.";
        case "Mass prod Gáe Bolg":
            x = rnd(getPara(id, lv), 2);
            return "Soldiers have a <b>" + x + "%</b> chance of being summoned in groups of two at a time instead of one.";
        case "Demon's Mask":
            return "Upon killing an enemy, Demons gain <b>" + rnd((x - 1)/100, 4) + "</b> moving speed (stacks).<br/><b>Note:</b> These values are unconfirmed as they have not yet been found in the code.";
            // TODO
        case "Power of Demons":
            x = rnd(x, 2);
            return "Heroes and soldiers' attack is multiplied by <b>" + x + "</b> against enemies that have over <b>90%</b> of their max health.<br/><b>Note:</b> This effect and its values are unconfirmed as they have not yet been found in the code.";
            // TODO
    	case "Golden Mysterious Key":
	    x = rnd(getPara(id, lv), 2);
	    return "Upon opening an item chest, gold collection is temporarily increased by <b>" + x + "%</b>.";
    	case "Red Mysterious Key":
	    x = rnd(getPara(id, lv), 2);
	    return "Upon opening an chest, attack is temporarily increased by <b>" + x + "%</b>.";
    	case "Mysterious Vault":
	    x = 1 + rnd(getPara(id, lv), 1);
    	    return "The effect of " + getAnchor("Golden Mysterious Key") + " and " + getAnchor("Red Mysterious Key") + " lasts <b>" + x + " seconds</b>."
    	case "Ancestor's Book":
	    x = rnd(getPara(id, lv), 2);
	    return "Decreases HP of enemies outside of the top floor by <b>" + x + "%</b>."
    	case "Spirit Ring":
	    x = rnd(getPara(id, lv), 2);
	    return "The power of enemy knockback is reduced by <b>" + x + "%</b>."
        default:
            return "[Error] Please report the following code to pie3636: getEffect(" + names.indexOf(id) + ", " + lv + ")";
    }
}

function magicLampCalc(floor, value) {
    if (floor < 100) {
        return [0];
    }
    min = value * 0.01 * (1 + floor * 0.001);
    max = value * 0.01 * floor * 0.009;
    if (max < min) {
        max = min;
    }
    fx = [[min, max, 1]];
    if (floor > 200) {
        if (min <= 2 && max >= 2) {
            fx = [[min, 2, 0, 2], [2, max, 1]];
        } else if (min <= 2) {
            fx = [[min, max, 0, 2]];
        }
        min = 2;
        if (max <= min) {
            max = min;
        }
    }
    if (max > 9) {
        max = 9;
        fx[fx.length - 1][1] = 9;
        fx[fx.length - 1][4] = 9;
        fx.push([max, 9, 0, 9]);
    }
    newFx = []
    min = Math.floor(min);
    max = Math.floor(max);
    for (segment of fx) {
        if (segment[2] == 0) { // Flat: no changes
            newFx.push(segment);
        } else if (segment[2] == 1) { // Linear: subdivision
            i0 = Math.ceil(segment[0]);
            i1 = Math.floor(segment[1]);
            for (j = i0; j < i1; j++) {
                newFx.push([j, j + 1, 0, j]);
            }
            if (i1 >= i0) {
                newFx.push([segment[0], i0, 0, Math.floor(segment[0])]);
                newFx.push([i1, segment[1], 0, i1]);
            } else {
                newFx.push([segment[0], segment[i1], 0, Math.floor(segment[0])]);
            }
        } else {
        }
    }
    return [rnd(min, 2), rnd(quickIntegral(newFx), 2), rnd(max, 2)];
}

function quickIntegral(arr) { // computes average value of a function
    area = 0;
    maxX = arr[0][0];
    minX = maxX;
    for (i of arr) { // x0, x1, type, values
        minX = Math.min(minX, i[0]);
        maxX = Math.max(maxX, i[1]);
        if (maxX < minX) {
            continue;
        }
        switch (i[2]) {
            case 0: // Flat
                area += (i[1] - i[0]) * i[3];
                break;
            case 1: // Linear
                area += (i[1] - i[0]) * (i[1] + i[0]) / 2
                break;
            default:
                console.log("Unknown function type " + i);
                break;
        }
    }
    if (minX == maxX && arr.length == 1) {
        return arr[0][3];
    }
    return area / (maxX - minX);
}

Object.defineProperties(Array.prototype, {
    'collapseSimple': {
        value: function() {
            return this.reduce((a, b) => a * b, 1);
        }
    },
    'probInsert': {
        value: function(newProb) {
            for (var i = 0; i < this.length; i++) {
                if (this[i][0] == newProb[0]) {
                    this[i][1] += newProb[1];
                    return;
                }
            }
            this.push(newProb);
        }
    },
    'probSet': {
        value: function(newProbMArray) {
            replProba = newProbMArray.reduce((a, b) => a + b[1], 0);
            if (replProba == 1) {
                this.length = 0;
            } else {
                for (var i = 0; i < this.length; i++) {
                    this[i][1] *= 1 - replProba;
                }
            }
            for (var j = 0; j < newProbMArray.length; j++) {
                this.probInsert([newProbMArray[j][0], newProbMArray[j][1]]);
            }
        }
    },
    'invertLastProb': {
        value: function() {
            this[this.length - 1] = 1 - this[this.length - 1];
        }
    },
    'replaceLastProb': {
        value: function(newProb) {
            this[this.length - 1] = newProb;
        }
    },
    'getProb': {
        value: function(potentialValue) {
            // TODO: Find [potentialValue, x] in this, else return 0
        }
    }
});

function simulateChestProba(lv, claymoreLv, resets, endFloor) {
    var num1 = 1 + (lv >= 40 ? 160 + lv : 5 * lv) * 0.01; // Based on item 23 parameters
    chests = Array(300);
    for (var i = 0; i < 300; i++) {
        chests[i] = [[0, 1]];
    }
    currentProb = [1];
    if (resets == 0) {
        chests[5].probSet([[1, currentProb.collapseSimple()]]);
        chests[7].probSet([[1, currentProb.collapseSimple()]]);
    } else if (resets == 1) {
        chests[2].probSet([[1, currentProb.collapseSimple()]]);
        chests[4].probSet([[1, currentProb.collapseSimple()]]);
        chests[7].probSet([[1, currentProb.collapseSimple()]]);
    } else {
        currentProb.push((claymoreLv >= 100 ? 0.72 : 1) * (claymoreLv >= 150 ? 0.66 : 1) * (claymoreLv >= 200 ? 0.62 : 1) * (claymoreLv >= 250 ? 0.5 : 1));
        currentProb.push(Math.min(0.5 + resets * 0.035, 1));
        if (resets >= 10) {
            currentProb.push(0.2);
            chests[8].probSet([[1, currentProb.collapseSimple()]]);
            currentProb.invertLastProb();
            chests[7].probSet([[1, currentProb.collapseSimple()]]);
            currentProb.pop();
            currentProb.invertLastProb();
        } else {
            currentProb.replaceLastProb(1);
        }
        currentProb.push(0.045);
        chests[4].probSet([[1, currentProb.collapseSimple()]]);
        currentProb.replaceLastProb(0.255 - 0.045);
        chests[5].probSet([[1, currentProb.collapseSimple()]]);
        currentProb.replaceLastProb(0.29 - 0.255);
        chests[4].probSet([[1, currentProb.collapseSimple()]]);
        chests[7].probSet([[1, currentProb.collapseSimple()]]);
        currentProb.replaceLastProb(0.4 - 0.29);
        chests[5].probSet([[1, currentProb.collapseSimple()]]);
        chests[7].probSet([[1, currentProb.collapseSimple()]]);
        currentProb.replaceLastProb(0.47 - 0.4);
        chests[5].probSet([[1, currentProb.collapseSimple()]]);
        chests[8].probSet([[1, currentProb.collapseSimple()]]);
        currentProb.replaceLastProb(1 - 0.7);
        chests[7].probSet([[1, currentProb.collapseSimple()]]);
        currentProb.pop();
        currentProb.pop();
        currentProb.pop();
    }
    
    chests[10] = [[1, 1]];
    currentProb.push(1/3);
    chests[12].probSet([[1, currentProb.collapseSimple()]]);
    chests[13].probSet([[1, currentProb.collapseSimple()]]);
    chests[14].probSet([[1, currentProb.collapseSimple()]]);
    currentProb.pop();
    chests[15] = [[1, 1]];
    currentProb.push(1/4);
    chests[16].probSet([[1, currentProb.collapseSimple()]]);
    chests[17].probSet([[1, currentProb.collapseSimple()]]);
    chests[18].probSet([[1, currentProb.collapseSimple()]]);
    chests[19].probSet([[1, currentProb.collapseSimple()]]);
    currentProb.pop();
    
    if (curItems[39] == 0) {
        chests[17] = [[1, 1]];
    }
    
    var num4 = [[0, 1]];
    var cur = 20;
    while (cur*10 <= Math.min(endFloor, 2405)) {
        chests[cur] = [[0, 1]];
        num2 = 0.12 + cur / 380;
        if (num2 > 0.2) {
            num2 = num2 * 0.8 + 0.04;
        }
        if (num2 > 0.25) {
            num2 = num2 * 0.5 + 0.125;
        }
        if (num2 > 0.35) {
            num2 = num2 * 0.5 + 0.175;
        }
        num3 = num2 * num1;
        if (num3 >= 0.42) {
            num3 = 0.42;
        }
        currentProb.push(num3);
        chests[cur].probSet([[1, currentProb.collapseSimple()]]);
        num4.probSet([[num4 + 1, currentProb.collapseSimple()]]);
        currentProb.pop();
        if (cur % 5 == 0) {
            chests[cur] = [[1, 1]];
            if (cur % 10 == 0) {
                currentProb.push(0.25);
            chests[cur].probSet([[2, currentProb.collapseSimple]]);
                currentProb.invertLastProb();
                    if (cur % 50 == 0) {
                    currentProb.push(0.22);
                    chests[cur].probSet([[3, currentProb.collapseSimple]]);
                    currentProb.pop();
                }
                currentProb.pop();
            }
        }
        if (cur % 10 == 0 && cur >= 30) {
            if (num4 == 0) { // TODO
                chests[cur - 5 + randomRangeInt(1, 3)] = 1; // TODO
                chests[cur - 5 - randomRangeInt(1, 3)] = 1; // TODO
            } else if (num4 == 1) { // TODO
                chests[cur - 5] = [[1, 1]];
            } else if (num4 > 5) { // TODO
                for (var j = 9; j > 0; j--) {
                    chests[cur - j] = [[0, 1]];
                }
                for (var j = 0; j < 3; j++) {
                    chests[cur - 5 + randomRangeInt(1, 5)] = 1; // TODO
                    chests[cur - 5 - randomRangeInt(1, 5)] = 1; // TODO
                }
            }
            num4 = [[0, 1]];
        }
        cur++;
    }
}

function getPara(tid, lv) {
    id = itemObjs[tid].id;
    f = itemObjs[tid].limitLine == 0 ? (itemObjs[tid].i1 * lv + lv * (lv - 1) * 0.5 * itemObjs[tid].i2) : (lv >= itemObjs[tid].limitLine ? (itemObjs[tid].i1 * itemObjs[tid].limitLine + itemObjs[tid].limitI1 * (lv - itemObjs[tid].limitLine)) : itemObjs[tid].i1 * lv);
    if (id == 1 || id == 2 || id >= 29 && id <= 32) {
        if (id == 1 || id == 2) {
            if (lv <= 18) {
                return [30, 65, 100, 140, 185, 230, 280, 330, 385, 460, 535, 610, 690, 770, 850, 935, 1030, 1130][lv - 1];
            }
            if (f > 25000) {
                f = f * 0.88 + 3000;
            }
            if (f > 50000) {
                f = f * 0.82 + 9000;
            }
            if (f > 100000) {
                f = f * 0.76 + 24000;
            }
            if (f > 500000) {
                f = f * 0.7 + 150000;
            }
            if (f > 1000000) {
                f = f * 0.6 + 400000;
            }
            if (f > 10000000) {
                f = f * 0.6 + 4000000;
            }
            if (f > 100000000) {
                f = f * 0.6 + 40000000;
            }
        } else {
            if (f > 25000) {
                f = f * 0.88 + 3000;
            }
            if (f > 50000) {
                f = f * 0.825 + 8250;
            }
            if (f > 100000) {
                f = f * 0.77 + 23000;
            }
            if (f > 500000) {
                f = f * 0.715 + 137500;
            }
            if (f > 1000000) {
                f = f * 0.63 + 370000;
            }
            if (f > 10000000) {
                f = f * 0.64 + 3600000.25;
            }
            if (f > 100000000) {
                f = f * 0.65 + 35000000;
            }
        }
        return f - f % 5;
    } else if (id == 21 || id == 22) {
        if (lv > 45) {
            f = 32.5 + f * 0.5;
        }
        if (lv > 75) {
            f = 40 + f * 0.5;
        }
    } else if (id == 36) {
        for (i of [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000]) {
            if (lv >= i) {
                f *= 4;
            }
        }
    }
    else if (id == 46) {
        return lv * (lv + 39);
    }
    return f;
  }

function nameCleanup(i) {
    return i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, "");
}

function updateItemEffect(i, propagate) {
    sel = $("#" + nameCleanup(i) + "_i");
    val = Number(sel[0].value);
    sel.css("color", val == itemObjs[i].cap ? "#c00" : "#000");
    sel.parent().prev().css("color", val == itemObjs[i].cap ? "#c00" : "#000");
    sel.parent().next().html(getEffect(i, val));
    if (propagate) {
        if (i == "Gate") {
            updateItemEffect("Dark Gate", false);
        } else if (i == "Dark Gate") {
            updateItemEffect("Gate", false);
        }
        if (i == "Freyr's Sword") {
            updateItemEffect("Freyr's Sword 2", false);
        } else if (i == "Freyr's Sword 2") {
            updateItemEffect("Freyr's Sword", false);
        }
    }
}
