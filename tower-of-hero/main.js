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

itemObjs = {
    /*
     * i1 = linear param, i2 = inverse param, limitLine = decay point, limitI1 = i1 past decay
     * 0 limitLine: lv * (i1 - i2/2) + lv² * i2 / 2
     * < limitLine: lv * i1
     * > limitLine: limitLine * i1 + (lv - limitLine) * limitI1
     */
    //                               id       cap  rank rank2   i1   i2   lI1 lLine
    "Lance":                new Item( 0,       20,    1,   9,    5,   0,    2,  10),
    "Earth Armour":         new Item( 1, Infinity,    1,   2,   20,   5,    0,   0),
    "Claymore":             new Item( 2, Infinity, 0.05, 1.5,   20,   5,    0,   0),
    "Wing Boots":           new Item( 3,       30,    1,  11,    3,   0,    1,   5),
    "Training Book":        new Item( 4,       20,    3,  10,    2,   0,    1,  10),
    "Golden Gloves":        new Item( 5, Infinity,    2, 1.9,   15,   0,   10, 200),
    "Rapier":               new Item( 6,       25,    1,  11,    5,   0,    1,  10),
    "Halberd":              new Item( 7, Infinity,    3,   5,   10,   0,    5, 100),
    "Red Elixir":           new Item( 8,      100,    2,   6,    2,   0,    1,  30),
    "Gold Vessels":         new Item( 9, Infinity,    2,   9,   10,   0,    5, 100),
    "Blue Elixir":          new Item(10,      300,    7,  17,    5,   0,    2, 100),
    "Green Elixir":         new Item(11,       10,    7,  14,    5,   0,    0,   0),
    "Coat of Gold":         new Item(12,      300,    5,  11,    5,   0,    2, 100),
    "Golden Rod":           new Item(13,       10,    5,   9,    5,   0,    0,   0),
    "Solomon's Staff":      new Item(14,      300,    3,   8,    5,   0,    2, 100),
    "Solomon's Key":        new Item(15,       10,    4,   3,    5,   0,    0,   0),
    "Excalibur":            new Item(16,      300,    4,   9,    5,   0,    2, 100),
    "Aegis":                new Item(17,       10,    3,   2,    5,   0,    0,   0),
    "Caduceus":             new Item(18,      600,    4,  11,   10,   0,    2, 200),
    "Philosopher's Stone":  new Item(19, Infinity,    4,   3,   10,   0,    2, 500),
    "Hydra's Poison Arrow": new Item(20,       10,    5,   3,    5,   0,    1,  10),
    "Durandal":             new Item(21,      105,    5,  30,    2,   0,    1,  20),
    "Mistilteinn":          new Item(22,      105,    6,  32,    2,   0,    1,  20),
    "A King's Crown":       new Item(23,      100,   30,  90,    5,   0,    1,  40),
    "Gungnir":              new Item(24, Infinity,    5,   6,   10,   0,    0,   0),
    "Lævateinn":            new Item(25,       12,   10,  50,    1,   0,    0,   0),
    "Gáe Bolg":             new Item(26,        3,   50, 500,    1,   0,    0,   0),
    "Mithril Sword":        new Item(27,       45,    7,  45,    2,   0,    1,  20),
    "Mithril Armour":       new Item(28,       45,    5,  28,    2,   0,    1,  20),
    "Full Plate":           new Item(29, Infinity,  7.5, 5.5,  300,  10,    0,   0),
    "Flamberge":            new Item(30, Infinity,  6.5, 5.5,  300,  10,    0,   0),
    "Full Helmet":          new Item(31, Infinity,   11,  15, 1800,  11,    0,   0),
    "Tomahawk":             new Item(32, Infinity,   10,  15, 1800,  11,    0,   0),
    "Summoning letter":     new Item(33,       10,    7,  10,    1,   0,    0,   0),
    "Awakening Armor":      new Item(34,       70,   10,  67,   10,   2,    0,   0),
    "Awakening Sword":      new Item(35,       70,   10,  67,   10,   2,    0,   0),
    "Gold Box":             new Item(36,    30000,  0.9,   2,    5,   2,    0,   0),
    "Awakening Armor 2":    new Item(37,       30,   12,  70,   10,   2,    0,   0),
    "Awakening Sword 2":    new Item(38,       30,   12,  70,   10,   2,    0,   0),
    "Guild Hat":            new Item(39,       16,    6,  26,   25,   0,    1,   1),
    "Mjolnir":              new Item(40,       31,   12,  12,  0.2,   0, 0.01,   1),
    "Dark Knight Armor":    new Item(41,        5,   15,  13,    1,   0,    0,   0),
    "Gate":                 new Item(42,      701,    9,   7,   22,   0, 0.02,   1),
    "Dark Gate":            new Item(43,      401,   10,   8,    4,   0, 0.02,   1),
    "Magic Lamp":           new Item(44,       76,    7,  10,  100,   0,    2,   1),
    "Dark Boots":           new Item(45,       85,  8.7,   5,    1,   0,  0.5,  30),
    "Fire Sword":           new Item(46,    30000,  999, 999,    5,   0,    0,   0),
    "Freyr's Sword":        new Item(47,    50000,   20,  20,    1,   0,    0,   0),
    "Flame Pot":            new Item(48,       16,    7,  25,    1,   0,  0.3,   1),
    "Ice Pot":              new Item(49,       16,    7,  25,    1,   0,  0.3,   1),
    "Golden Pot":           new Item(50,       11,    7,  25,    1,   0,  0.3,   1),
    "Black Essence":        new Item(51,       30,    6,  30,    2,   0,  0.4,   5),
    "Demon Eye":            new Item(52,      151,   12,  12,   10,   0,  0.1,   1),
    "Red Hand":             new Item(53,      151,   30,  90,    5,   0,  0.1,   1),
    "Veteran's Hat":        new Item(54,       10,   30,  90,    3,   0,    0,   0),
    "Blue Crystal":         new Item(55,       11,   6,   32,  100,   0,   10,   1)
}

names = ["Lance", "Earth Armour", "Claymore", "Wing Boots", "Training Book", "Golden Gloves", "Rapier", "Halberd", "Red Elixir", "Gold Vessels", "Blue Elixir", "Green Elixir", "Coat of Gold", "Golden Rod", "Solomon's Staff", "Solomon's Key", "Excalibur", "Aegis", "Caduceus", "Philosopher's Stone", "Hydra's Poison Arrow", "Durandal", "Mistilteinn", "A King's Crown", "Gungnir", "Lævateinn", "Gáe Bolg", "Mithril Sword", "Mithril Armour", "Full Plate", "Flamberge", "Full Helmet", "Tomahawk", "Summoning letter", "Awakening Armor", "Awakening Sword", "Gold Box", "Awakening Armor 2", "Awakening Sword 2", "Guild Hat", "Mjolnir", "Dark Knight Armor", "Gate", "Dark Gate", "Magic Lamp", "Dark Boots", "Fire Sword", "Freyr's Sword", "Flame Pot", "Ice Pot", "Golden Pot", "Black Essence", "Demon Eye", "Red Hand", "Veteran's Hat", "Blue Crystal"];

caps = names.map(function(index) {
    return itemObjs[index].cap;
});

droprank = names.map(function(index) {
    return itemObjs[index].droprank;
});

droprank2 = names.map(function(index) {
    return itemObjs[index].droprank2;
});

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
        if (floor == 350 || floor == 450 || floor == 550) {
            itemID = 30;
            if (floor == 450 && random40Bool(engine))
                itemID = 29;
            if (isntMaxed(curItems, itemID)) {
                acquireItem(curItems, itemID, noBuy);
                return itemID;
            }
        }
        if (floor == 750 || floor == 850) {
            itemID = 32;
            if (floor == 850 && random40Bool(engine))
                itemID = 31;
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
        if (resets != 0)
            itemID = 2;
        if (resets >= 5)
            itemID = random70Bool(engine) ? 2 : 1;
        acquireItem(curItems, itemID, noBuy);
        return itemID;
    }
    if (floor > 550 && random01(engine) < 0.0075)
        floor = 1000;
    else if (floor > 350 && random01(engine) < 0.006)
        floor = 1000;
    ranks = getRanks(curItems);
    num1 = floor * 0.0008 + randomRangeFloat(0.0008, 0.0508);
    if (num1 > 0.9)
        num1 = 0.9;
    itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1))];
    if (itemID1 == 36 && resets == 0)
        itemID1 = 2;
    if (itemID1 == 1 || itemID1 == 2) {
        lv = curItems[itemID1];
        if (lv >= 400 && random75Bool(engine) && curItems[36] <= lv * 0.65)
            itemID1 = 36;
    }
    if (curItems[39] == 0 && floor > 156 + randomRangeInt(0, randomRangeInt(10, 110)))
        itemID1 = 39;
    num2 = random01(engine);
    if (num2 <= 0.045)
        floor += 50;
    else if (num2 <= 0.07)
        floor += 100;
    else if (num2 <= 0.075)
        floor += 150;
    flag1 = random01(engine) > 0.164;
    flag2 = floor % 100 != 0;
    flag3 = floor % 50 != 0;
    flag4 = !flag3;
    if (itemID1 == 26) {
        lv2 = curItems[26];
        if (flag1 || flag2 || lv2 <= 0 && floor < 501 || (lv2 <= 1 && floor < 1101 || lv2 >= 2 && floor < 1501) || lv2 >= 2 && random01(engine) > 0.4999 + floor * 0.0001) {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.94))];
            if (itemID1 == 26)
                itemID1 = 2;
        }
    } else if (itemID1 == 36 && (flag4 && random20Bool(engine) || floor > 501))
        itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.94))];
    if (itemID1 == 47) {
        lv2 = curItems[25];
        if (lv2 <= 2) {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.7))];
            if (itemID1 == 47)
                itemID1 = 2;
        } else {
            lv3 = curItems[itemID1];
            if (flag3 || floor < 111 + 7 * lv3 - lv2 * 5 && random01(engine) < 0.98 - lv2 * 0.005) {
                itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.7))];
                if (itemID1 == 47)
                    itemID1 = 2;
            }
            if (lv3 >= 10000 && random30Bool(engine))
                itemID1 = 2;
            if (lv3 >= 20000 && random20Bool(engine))
                itemID1 = 2;
            if (lv3 >= 30000 && random30Bool(engine))
                itemID1 = 2;
            if (lv3 >= 40000 && random30Bool(engine))
                itemID1 = 2;
        }
    }
    if (itemID1 == 4) {
        lv2 = curItems[itemID1];
        if (lv2 > 9 && (flag1 || flag3 || floor < 151 + 40 * lv2))
            itemID1 = 2;
    } else if (itemID1 == 3) {
        lv2 = curItems[itemID1];
        if (lv2 >= 15 && randomBool(engine))
            itemID1 = 1;
        if (lv2 >= 21 && random40Bool(engine))
            itemID1 = 1;
        if (lv2 >= 24 && random30Bool(engine))
            itemID1 = 1;
        if (lv2 >= 27 && random30Bool(engine))
            itemID1 = 1;
    } else if (itemID1 == 6) {
        lv2 = curItems[itemID1];
        if (lv2 > 20 && (flag1 || flag3 || floor < 301))
            itemID1 = 1;
        if (lv2 >= 15 && randomBool(engine))
            itemID1 = 1;
        if (lv2 >= 18 && randomBool(engine))
            itemID1 = 1;
        if (lv2 >= 22 && randomBool(engine))
            itemID1 = 1;
    } else if (itemID1 == 55) {
        lv2 = curItems[itemID1]
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
    } else if (itemID1 == 34 || itemID1 == 35) {
        lv2 = curItems[itemID1];
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
    } else if (itemID1 == 37 || itemID1 == 38) {
        lv2 = curItems[itemID1];
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
    } else switch (itemID1) {
        case 23:
            lv4 = curItems[itemID1];
            if (flag1 || flag3 || lv4 <= 0 && floor < 251 || lv4 == 1 && floor < 301 || lv4 >= 2 && floor < 351 + lv4 * 35 + (lv4 < 6 ? 0 : 100)) {
                itemID1 = 2;
                break;
            }
            if (lv4 >= 91 && random80Bool(engine)) {
                itemID1 = 2;
                break;
            }
            if (lv4 >= 20 && random01(engine) > 0.09994 + floor * 0.00006) {
                itemID1 = 2;
                break;
            }
            if (lv4 >= 16 && random01(engine) > 0.19992 + floor * 0.00008) {
                itemID1 = 2;
                break;
            }
            if (lv4 >= 12 && random01(engine) > 0.2999 + floor * 0.0001) {
                itemID1 = 2;
                break;
            }
            if (lv4 >= 8 && random01(engine) > 0.4999 + floor * 0.0001) {
                itemID1 = 2;
                break;
            }
            if (lv4 >= 5 && random01(engine) > 0.7999 + floor * 0.0001) {
                itemID1 = 2;
                break;
            } if (floor < 1000) {
                if (lv4 >= 20 && random30Bool(engine)) {
                    itemID1 = 2;
                    break;
                }
                if (lv4 >= 40 && random30Bool(engine)) {
                    itemID1 = 2;
                    break;
                }
                if (lv4 >= 60 && random30Bool(engine)) {
                    itemID1 = 2;
                    break;
                }
                if (lv4 >= 80 && random30Bool(engine)) {
                    itemID1 = 2;
                    break;
                }
                break;
            }
            break;
        case 25:
            lv5 = curItems[itemID1];
            if (flag1 || flag3 || floor < (111 + 90 * lv5 + lv5 * lv5 * 6 + (lv5 < 7 ? 0 : 150)) + (lv5 < 9 ? 0 : 90 + (lv5 * lv5) * 0.5)) {
                itemID1 = 2;
                break;
            }
            if (lv5 >= 9 && Random.get_value() < 0.5) {
                itemID1 = 2;
                break;
            }
            break;
        default:
            if (itemID1 == 21 || itemID1 == 22) {
              lv2 = curItems[itemID1];
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
            }
            if (itemID1 == 27 || itemID1 == 28) {
                lv2 = curItems[itemID1];
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
            }
            break;
    }
    if (itemID1 == 48) {
        lv2 = curItems[itemID1];
        if (lv2 >= 1) {
            if (flag3 || floor < 241 + 41 * lv2)
                itemID1 = 2;
        } else if (floor < 141)
            itemID1 = 2;
    } else if (itemID1 == 49) {
        lv2 = curItems[itemID1];
        if (flag3 || floor < 231 + 45 * lv2)
            itemID1 = 2;
    } else if (itemID1 == 50) {
        lv2 = curItems[itemID1];
        if (flag3 || floor < 211 + 49 * lv2)
            itemID1 = 2;
    } else if (itemID1 == 51) {
        lv2 = curItems[itemID1];
        if (lv2 >= 1) {
            if (floor < 201 + 35 * lv2)
                itemID1 = 2;
        } else if (floor < 161)
            itemID1 = 2;
        if (lv2 >= 24 && random30Bool(engine))
            itemID1 = 2;
        if (lv2 >= 26 && random30Bool(engine))
            itemID1 = 2;
    } else if (itemID1 == 53) {
        lv2 = curItems[itemID1];
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
    }
    if (itemID1 == 33) {
        lv2 = curItems[itemID1];
        if (floor < 20 * lv2 * (lv2 - 1) - 99)
            itemID1 = 2;
    } else if (itemID1 == 39) {
        lv2 = curItems[itemID1];
        if (lv2 != 0) {
            num2 = 0;
            if (lv2 >= 10)
                num2 = 150 + lv2 * 8;
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
    } else if (itemID1 == 54) {
        lv1 = curItems[itemID1];
        if (lv1 <= 14)
            itemID1 = 2;
        if (lv1 <= 15 && random70Bool(engine))
            itemID1 = 1;
        lv2 = curItems[itemID1];
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
    } else if (itemID1 == 40) {
        lv2 = curItems[itemID1];
        if (floor < 251 + 39 * lv2)
            itemID1 = 1;
    } else if (itemID1 == 41) {
        lv2 = curItems[40];
        lv3 = curItems[itemID1];
        if (lv2 == 0 || floor < 291 + 190 * lv3)
            itemID1 = 1;
    } else if (itemID1 == 42) {
        lv2 = curItems[40];
        lv3 = curItems[itemID1];
        if (lv2 == 0 || floor < 221 + 2.4 * lv3)
            itemID1 = 1;
        if (lv3 >= 350 && random30Bool(engine))
            itemID1 = 2;
        if (lv3 >= 500 && random40Bool(engine))
            itemID1 = 2;
        if (lv3 >= 600 && randomBool(engine))
            itemID1 = 2;
    } else if (itemID1 == 43) {
        lv2 = curItems[40];
        lv3 = curItems[42];
        lv6 = curItems[itemID1];
        if (lv2 == 0 || lv3 == 0 || floor < 321 + 4.6 * lv6)
            itemID1 = 1;
        if (lv6 >= 200 && random40Bool(engine))
            itemID1 = 2;
        if (lv6 >= 300 && randomBool(engine))
            itemID1 = 2;
    } else if (itemID1 == 52) {
        lv2 = curItems[40];
        lv3 = curItems[43];
        lv6 = curItems[itemID1];
        if (lv2 == 0 || lv3 <= 10 || floor < 501 + 12 * lv6)
            itemID1 = 1;
        if (lv6 >= 25 && random40Bool(engine))
            itemID1 = 2;
        if (lv6 >= 50 && random30Bool(engine))
            itemID1 = 2;
        if (lv6 >= 75 && random40Bool(engine))
            itemID1 = 2;
    }
    if (itemID1 == 10 || itemID1 == 12 || (itemID1 == 14 || itemID1 == 16)) {
        if (curItems[itemID1] >= 210 && random70Bool(engine))
            itemID1 = 2;
    } else switch (itemID1) {
        case 44:
            lv7 = curItems[itemID1];
            if (lv7 >= 1 && floor < 101 + 4 * lv7 + (lv7 < 5 ? 0 : 50) + (lv7 < 10 ? 0 : 70) + (lv7 < 40 ? 0 : 70) + (lv7 < 60 ? 0 : 70) + (lv7 < 70 ? 0 : 70)) {
                itemID1 = 2;
                break;
            }
            break;
        case 45:
            lv8 = curItems[itemID1];
            if (floor < 451 + 6 * lv8) {
                itemID1 = 1;
                break;
            }
            break;
    }
    if (itemID1 == 31 && floor <= 600)
        itemID1 = 29;
    if (itemID1 == 32 && floor <= 600)
        itemID1 = 30;
    if (itemID1 == 2 && curItems[1] < curItems[2] * 0.5 && random40Bool(engine))
        itemID1 = 1;
    if (itemID1 == 1) {
        if (flag4 && floor >= 500)
            itemID1 = random20Bool(engine) ? ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.6))] : 29;
    } else if (itemID1 == 2 && flag4 && floor >= 500)
        itemID1 = random20Bool(engine) ? ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.6))] : 30;
    if (itemID1 == 26) {
        lv2 = curItems[itemID1];
        if (flag2 || lv2 <= 0 && floor < 501 || (lv2 <= 1 && floor < 1101 || lv2 >= 2 && floor < 1501))
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, num1 * 0.8))];
    }
    if (itemID1 == 46) {
        max = floor * 0.0006 + randomRangeFloat(0, 0.05);
        if (max > 0.6)
            max = 0.6;
        do {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max))];
        } while (itemID1 == 46);
    }
    if (!isntMaxed(curItems, itemID1))
        itemID1 = random70Bool(engine) ? 2 : 1;
    if (itemID1 == 1 && floor >= 570)
        itemID1 = 29;
    if (itemID1 == 2 && floor >= 570)
        itemID1 = 30;
    if ((itemID1 == 1 || itemID1 == 29) && floor >= (randomBool(engine) ? 850 : 900))
        itemID1 = 31;
    if ((itemID1 == 2 || itemID1 == 30) && floor >= (randomBool(engine) ? 850 : 900))
        itemID1 = 32;
    if (floor >= 200) {
        if (itemID1 == 1) {
            if (curItems[itemID1] >= 1000 && random30Bool(engine))
                itemID1 = 29;
        } else if (itemID1 == 2 && curItems[itemID1] >= 1000 && random30Bool(engine))
            itemID1 = 30;
    }
    if (itemID1 == 31)
        itemID1 = ATKHPItemHosei(curItems, itemID1, 29);
    if (itemID1 == 29)
        itemID1 = ATKHPItemHosei(curItems, itemID1, 1);
    if (itemID1 == 32)
        itemID1 = ATKHPItemHosei(curItems, itemID1, 30);
    if (itemID1 == 30)
        itemID1 = ATKHPItemHosei(curItems, itemID1, 2);
    if (!isntMaxed(curItems, itemID1))
        itemID1 = random70Bool(engine) ? 2 : 1;
    acquireItem(curItems, itemID1, noBuy);
    return itemID1;
}

function simulateRun(curItems, beginFloor, endFloor) {
    var lv = curItems[23];
    var num1 = 1.0 + (lv >= 40 ? 160 + lv : 5 * lv) * 0.01; // Based on item 23 parameters
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
        flag = true;
        if (lv >= 100 && random01(engine) <= 0.28 || lv >= 150 && random01(engine) <= 0.34 || lv >= 200 && random01(engine) <= 0.38 || lv >= 250 && random01(engine) <= 0.5)
            flag = false;
        if (flag) {
            var num2 = random01(engine);
            var num3 = random01(engine);
            if (resets >= 10 && num2 < 0.5 + resets * 0.035) {
                if (num3 < 0.2)
                    chests[8] = 1;
                else
                    chests[7] = 1;
            } else if (num3 < 0.045)
                chests[4] = 1;
            else if (num3 < 0.255)
                chests[5] = 1;
            else if (num3 < 0.29) {
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
    if (curItems[39] == 0)
        chests[17] = 1;
    var num4 = 0;
    var cur = 20;
    while (cur*10 <= Math.min(endFloor, 2405)) {
        chests[cur] = 0;
        num2 = 0.12 + cur / 380;
        if (num2 > 0.2)
            num2 = num2 * 0.8 + 0.04;
        if (num2 > 0.25)
            num2 = num2 * 0.5 + 0.125;
        if (num2 > 0.35)
            num2 = num2 * 0.5 + 0.175;
        num3 = num2 * num1;
        if (num3 >= 0.42)
            num3 = 0.42;
        if (random01(engine) < num3) {
            chests[cur] = 1;
            ++num4;
        }
        if (cur % 5 == 0) {
            chests[cur] = 1;
            if (cur % 10 == 0) {
                if (endFloor < cur/10) // TODO record floor instead
                    chests[cur] = cur != 20 ? (cur % 50 != 0 ? 3 : 4) : 2;
                else if (random25Bool(engine))
                    chests[cur] = 2;
                else if (random01(engine) < 0.22 && cur % 50 == 0)
                    chests[cur] = 3;
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
        if (i*10 > beginFloor && i*10 <= endFloor) {
            for (var j = 0; j < chests[i]; j++) {
                simulateChest(curItems, i*10);
            }
        }
    }
}

function simulateReset(curItems, endFloor) {
    var num2 = (curItems[44] >= 1 ? (98 + 2 * curItems[44]) : 0) * 0.01 * randomRangeFloat(1 + endFloor * 0.001, endFloor * 0.009);
    if (endFloor > 200 && num2 < 2) {
        num2 = 2;
    }
    var num3 = Math.trunc(num2);
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

function randm101(max) {
    num1 = randomRangeInt(0, max + 1);
    num2 = num1 - num1 % 10;
    if (num2 < 0)
        return 0;
    return num2;
  }

function randm10(min, max) {
    num1 = randomRangeInt(Math.trunc(min), Math.trunc(max) + 1);
    num2 = num1 - num1 % 10;
    if (num2 < 0)
        return 0;
    return num2;
}

// Copied directly from the code, with few modifications. I didn't really understand that part
function simulateQuest(curItems, beginFloor, endFloor) {
    duration = randomRangeInt(8, 12);
    if (duration == 11) {
        duration += randomRangeInt(0, 2 + randomRangeInt(0, 2))
    }
    length = 50;
    kuriaLine = new Array(length).fill(0);
    chestFloor = new Array(length).fill(0);
    chestCount = new Array(length).fill(0);
    num1 = 0;
    if (duration >= 11)
        num1 = 1;
    num2 = Math.trunc((1 + endFloor * 1.2) / 30 + randomRangeFloat(-2, 2)); // .45 bestFloorSum + .75 questBestFloorSum
    max1 = num2 - num2 % 10;
    if (max1 > 20)
        max1 = 20;
    num3 = Math.trunc((1 + endFloor * 1.2) / 30 + randomRangeFloat(-2, 2)); // Idem
    num4 = num3 - num3 % 10;
    if (num4 > 10)
        num4 = 10;
    num5 = (1.0 + endFloor * 1.2) / 500 + randomRangeFloat(-0.25, 0.25); // Idem
    num6 = Math.trunc(num5 * 10);
    num7 = num6 - num6 % 10;
    num8 = ((1 + endFloor) / 170) + randomRangeFloat(-0.25, 0.25);
    num9 = Math.trunc(num5 * 10);
    if (num9 < 0)
        num9 = 1;
    if (num1 == 0) {
        kuriaLine[3] = 70 + num4 + randm101(max1) + randm101(max1 + 5)
            + randm101(max1) + randm10(num9 * 0.25, num9 * 0.8) + randm10(num9 * 0.25, num9 * 0.8) + randm10(num9 * 0.45, num9 * 0.9 + 1) + randm10(num9 * 0.5, num9 * 0.9 + 1);
        kuriaLine[4] = kuriaLine[3] + 30 + randm101(num7 + num4 + 6) + randm10(num9 * 0.55, num9 + 2);
        kuriaLine[5] = kuriaLine[4] + 50 + num7 + randm101(num7 + num4 + 7) + randm10(num9 * 0.6, num9 + 6);
        for (var index = 6; index < length; ++index) {
            num11 = random01(engine);
            num12 = 90 + randm101(num7 + num4) + randm10(num9 * 0.35, num9 * 0.7);
            if (num11 < 0.2)
                num12 = 80 + randm101(num7 + num4 + 4) + randm10(num9 * 0.35, num9 * 0.8);
            else if (num11 < 0.5)
                num12 = 60 + randm101(num7 + num4 + 6) + randm10(num9 * 0.35, num9 * 0.8);
            else if (num11 < 0.65)
                num12 = 50 + randm101(num7 + num4 + 8) + randm10(num9 * 0.35, num9 * 0.8);
            kuriaLine[index] += kuriaLine[index - 1] + num12;
        }
        chestCount[3] = 1;
        if (duration <= 9 && random60Bool(engine))
            chestCount[3] = 2;
        else if (duration <= 8)
            chestCount[3] = 2;
        chestFloor[3] = 120 + randomRangeFloat(kuriaLine[3] + 80, kuriaLine[3] * 2 + 80);
        chestFloor[3] -= chestFloor[3] % 10;
        num10 = 4;
    } else {
        kuriaLine[2] = 60 + num4 + randm101(max1) + randm101(max1) + randm101(num9 * 0.2, num9 * 0.8) + randm101(num9 * 0.25, num9 * 0.8) + randm10(num9 * 0.45, num9 * 0.9 + 1);
        kuriaLine[3] = kuriaLine[2] + 40 + randm101(max1 + 5) + randm10(num9 * 0.5, num9 * 0.95 + 1);
        kuriaLine[4] = kuriaLine[3] + 40 + num7 + randm101(num7 + num4 + 7) + randm10(num9 * 0.6, num9 + 6);
        for (var index = 5; index < length; ++index) {
            num11 = random01(engine);
            num12 = 100 + randm101(num7 + num4) + randm10(num9 * 0.3, num9 * 0.6);
            if (num11 < 0.2)
                num12 = 80 + randm101(num7 + num4 + 4) + randm10(num9 * 0.35, num9 * 0.75);
            else if (num11 < 0.5)
                num12 = 70 + randm101(num7 + num4 + 6) + randm10(num9 * 0.35, num9 * 0.8);
            else if (num11 < 0.65)
                num12 = 60 + randm101(num7 + num4 + 7) + randm10(num9 * 0.35, num9 * 0.8);
            kuriaLine[index] += kuriaLine[index - 1] + num12;
        }
        chestCount[2] = 1;
        chestFloor[2] = 120 + randomRangeFloat(kuriaLine[2] + 80, kuriaLine[2] * 2 + 80);
        chestFloor[2] -= chestFloor[2] % 10;
        num10 = 3;
    }
    for (var index = num10; index < length; ++index) {
        max2 = (0.7 + index * 0.05);
        if (max2 > 1)
            max2 = 1;
        num11 = randomRangeFloat(0, max2);
        if (num11 > 0.52) {
            chestCount[index] = 1 + Math.trunc(randomRangeFloat(0, kuriaLine[index] * (num11 < 0.82 ? 0.0065 : 0.005)));
        }
        if (chestCount[index] != 0) {
            chestFloor[index] = 150 + randomRangeFloat(kuriaLine[index] + 60, Math.trunc(kuriaLine[index] * 1.4 + 170));
            if (chestFloor[index] > endFloor) {
                break;
            }
            chestFloor[index] -= chestFloor[index] % (randomRangeFloat(0, max2) < 0.75 || chestFloor[index] < 200 ? 10 : 50);
        }
        var m = index < 2 ? 1 : 2;
        if (chestCount[index] > m)
            chestCount[index] = m;
    }
    for (var i = 0; i < length; i++) {
        if (chestFloor[i] > beginFloor) {
            if (chestFloor[i] <= endFloor) {
                for (var j = 0; j < chestCount[i]; j++) {
                    simulateChest(curItems, i);
                }
            } else {
                break;
            }
        }
    }
}

// Also copied directly from the code
function okno(zako, id, lv) {
    return (zako || id != 1 && id != 2 && (id != 29 && id != 30) && (id != 31 && id != 32)) && (lv <= 1 || id != -99 && id != 21 && (id != 22 && id != 27) && (id != 28 && id != 34 && (id != 35 && id != 37)) && id != 38) && (id != -99 && id != 23 && (id != 25 && id != 26) && (id != 25 && id != 39 && (id != 40 && id != 44)) && id != 46);
}

// Also copied directly from the code
function Hosei1OR2(itemID) {
    if (itemID != 1 && itemID != 2)
        return itemID;
    return random75Bool(engine) ? 2 : 1;
}

// Also copied directly from the code
function ATKHPItemHosei(curitems, itemID, t2) {
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
        for (var i = 0; i < guildHatStat; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            simulateReset(curItems, endFloor);
            simulateQuest(curItems, beginFloor, endFloor);
        };
        for (var i = guildHatStat; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            simulateReset(curItems, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_sq_re_nf() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < guildHatStat; i++) {
            curItems = items.slice();
            simulateReset(curItems, endFloor);
            simulateQuest(curItems, beginFloor, endFloor);
        };
        for (var i = guildHatStat; i < 100; i++) {
            curItems = items.slice();
            simulateReset(curItems, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_sq_nr_fl() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < guildHatStat; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
            simulateQuest(curItems, beginFloor, endFloor);
        };
        for (var i = guildHatStat; i < 100; i++) {
            curItems = items.slice();
            simulateRun(curItems, beginFloor, endFloor);
        };
        steps += 100;
    } while (performance.now() - timeStart < timeLimit);
}

function sim_sq_nr_nf() {
    steps = 0;
    timeLimit = Number($("input[name='run-time']:checked")[0].id.replace("s", '')) * 1000;
    timeStart = performance.now();
    do {
        for (var i = 0; i < guildHatStat; i++) {
            curItems = items.slice();
            simulateQuest(curItems, beginFloor, endFloor);
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
        beginFloor = $("#floor-min")[0].value + 10;
        endFloor = $("#floor-max")[0].value;
        questValues = [Number($("#8min")[0].value), Number($("#9min")[0].value), Number($("#10min")[0].value), Number($("#11min")[0].value), Number($("#12min")[0].value), Number($("#13min")[0].value), Number($("#14min")[0].value), Number($("#15min")[0].value)];
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
        gainedTimes[i] = gainedTimes[i]/steps * 100;
    }
    restoreGUI();
    displayResults();
    $("#results").modal();
}

function debugInit() {
    j = 0;
    for (var i in itemObjs) {
        items[j] = Number($("#" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, ""))[0].value);
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
    curItems = items.slice();
    console.log("Ready to run");
}

function debugCur() {
    items = [20, 10069, 12961, 30, 20, 10223, 25, 6360, 100, 5089, 300, 10, 300, 10, 300, 10, 300, 10, 600, 7452, 10, 56, 61, 65, 7869, 12, 3, 45, 45, 11128, 9899, 7862, 9464, 10, 70, 70, 9823, 30, 30, 16, 31, 5, 701, 401, 76, 85, 0, 326, 16, 16, 11, 30, 121, 17]
    j = 0;
    for (i in itemObjs) {
        $("#" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, ""))[0].value = items[j];
        j++;
    }
    $("#resets")[0].value = 1828;
    $("#floor-max")[0].value = 1560;
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
    for (var i = 0; i < itemCount; i++) {
        var str = "<tr><td>" + tabs[1][i] + "</td><td>" + curItems[itemObjs[tabs[1][i]].id] + "</td><td>";
        var hidden = hideCapped;
        if (!isntMaxed(curItems, itemObjs[tabs[1][i]].id)) {
            str += "<span class='red'>Capped</span></td><td>";
        } else if (tabs[1][i] === "Fire Sword") {
            str += "<span class='red'>Shop only</span></td><td>";
        } else {
            hidden = false;
            str += tabs[j][i].toFixed(5) + "%</td><td>+" + tabs[2 - j][i].toFixed(2);
        }
        str += "</td></tr>";
        if (!hidden) {
            $("#res-table").append(str);
        }
    }
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
        items[j] = Number($("#" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, ""))[0].value);
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
        toImport = JSON.parse(RawDeflate.inflate(Base64.decode($("#import-code")[0].value)));
        items = toImport[0];
        var j = 0;
        for (i in itemObjs) { // Update item levels in GUI
            $("#" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, ""))[0].value = items[j];
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
        
        $("#import").modal("hide");
        presetLoading = false;
    } catch (e) {
        $("#import-error").show();
        $("#import-error-text").html("(" + e.message + ")");
        console.error(e);
        presetLoading = false;
    }
}

function exportPreset() {
    j = 0;
    for (var i in itemObjs) {
        items[j] = Number($("#" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, ""))[0].value);
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
    ];
    $("#export-code").html(Base64.encode(RawDeflate.deflate(JSON.stringify(toExport))));
    $("#export").modal();
}

function savePreset() {
    // TODO
}

function loadPreset() {
    // TODO
}

function removePreset() {
    // TODO
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("#version").append("1.8.0");
    
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
    
    presetLoading = false;
    
    items = new Array(itemCount).fill(0); // TODO   
    
    for (var i in itemObjs) {
        itemObjs[i].value = 0; // TODO, also merge with loop under
    }

    for (var i in itemObjs) {
        $("#itemLevels").append("<tr><td>" + i + "</td><td><input type='number' id='" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, "") + "' name='quantity' min='0' max='" + itemObjs[i].cap + "' value='" + itemObjs[i].value + "'></td><tr/>");
    }
    
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
        this.blur();
    });
    
    // Event listeners
    
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
    
    $("#simulate").click(runSimulation);
    $("#prob, #avg").click(displayResults);
    $("#btn-save").click(savePreset);
    $("#btn-import").click(openImport);
    $("#btn-export").click(exportPreset);
    $("#do-import").click(importPreset);
    $("#btn-load").click(loadPreset);
    $("#btn-remove").click(removePreset);
    
    //debugCur();
});
