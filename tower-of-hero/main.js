function Item(cap) {
    this.cap = cap;
}

itemObjs = {
    "Lance":                new Item(20),
    "Earth Armour":         new Item(Infinity),
    "Claymore":             new Item(Infinity),
    "Wing Boots":           new Item(30),
    "Training Book":        new Item(20),
    "Golden Gloves":        new Item(Infinity),
    "Rapier":               new Item(25),
    "Halberd":              new Item(Infinity),
    "Red Elixir":           new Item(100),
    "Gold Vessels":         new Item(Infinity),
    "Blue Elixir":          new Item(300),
    "Green Elixir":         new Item(10),
    "Coat of Gold":         new Item(300),
    "Golden Rod":           new Item(10),
    "Solomon’s Staff":      new Item(300),
    "Solomon’s Key":        new Item(10),
    "Excalibur":            new Item(300),
    "Aegis":                new Item(10),
    "Caduceus":             new Item(600),
    "Philosopher’s Stone":  new Item(Infinity),
    "Hydra’s Poison Arrow": new Item(10),
    "Durandal":             new Item(105),
    "Mistilteinn":          new Item(105),
    "A King's Crown":       new Item(100),
    "Gungnir":              new Item(Infinity),
    "Lævateinn":            new Item(12),
    "Gáe Bolg":             new Item(3),
    "Mithril Sword":        new Item(45),
    "Mithril Armour":       new Item(45),
    "Full Plate":           new Item(15000),
    "Flamberge":            new Item(15000),
    "Full Helmet":          new Item(15000),
    "Tomahawk":             new Item(15000),
    "Summoning letter":     new Item(10),
    "Awakening Armor":      new Item(70),
    "Awakening Sword":      new Item(70),
    "Gold Box":             new Item(30000),
    "Awakening Armor+1":    new Item(30),
    "Awakening Sword+1":    new Item(30),
    "Guild Hat":            new Item(16),
    "Mjolnir":              new Item(31),
    "Dark Knight Armor":    new Item(5),
    "Gate":                 new Item(701),
    "Dark Gate":            new Item(401),
    "Magic Lamp":           new Item(76),
    "Dark Boots":           new Item(85),
    "Fire Sword":           new Item(Infinity),
    "Freyr's Sword":        new Item(50000),
    "Flame Pot":            new Item(16),
    "Ice Pot":              new Item(16),
    "Golden Pot":           new Item(11),
    "Black Essence":        new Item(30),
    "Demon Eye":            new Item(151),
    "Red Hand":             new Item(151)
}

itemCount = 0;
for (var i in itemObjs) {
    itemCount++;
}

names = ["Lance", "Earth Armour", "Claymore", "Wing Boots", "Training Book", "Golden Gloves", "Rapier", "Halberd", "Red Elixir", "Gold Vessels", "Blue Elixir", "Green Elixir", "Coat of Gold", "Golden Rod", "Solomon’s Staff", "Solomon’s Key", "Excalibur", "Aegis", "Caduceus", "Philosopher’s Stone", "Hydra’s Poison Arrow", "Durandal", "Mistilteinn", "A King's Crown", "Gungnir", "Lævateinn", "Gáe Bolg", "Mithril Sword", "Mithril Armour", "Full Plate", "Flamberge", "Full Helmet", "Tomahawk", "Summoning letter", "Awakening Armor", "Awakening Sword", "Gold Box", "Awakening Armor+", "Awakening Sword+", "Guild Hat", "Mjolnir", "Dark Knight Armor", "Gate", "Dark Gate", "Magic Lamp", "Dark Boots", "Fire Sword", "Freyr's Sword", "Flame Pot", "Ice Pot", "Golden Pot", "Black Essence", "Demon Eye", "Red Hand"];

caps = [20, Infinity, Infinity, 30, 20, Infinity, 25, Infinity, 100, Infinity, 300, 10, 300, 10, 300, 10, 300, 10, 600, Infinity, 10, 105, 105, 100, Infinity, 12, 3, 45, 45, 15000, 15000, 15000, 15000, 10, 70, 70, 30000, 30, 30, 16, 31, 5, 701, 401, 76, 85, Infinity, 50000, 16, 16, 11, 30, 151, 151];

droprank = [1, 1, 0.05, 1, 3, 2, 1, 3, 2, 2, 7, 7, 5, 5, 3, 4, 4, 3, 4, 4, 5, 5, 6, 30, 5, 10, 50, 7, 5, 7.5, 6.5, 11, 10, 7, 10, 10, 0.9, 12, 12, 6, 12, 15, 9, 10, 7, 8.7, 999, 20, 7, 7, 7, 6, 12, 30];

droprank2 = [9, 2, 1.5, 11, 10, 1.9, 11, 5, 6, 9, 17, 14, 11, 9, 8, 3, 9, 2, 11, 3, 3, 30, 32, 90, 6, 50, 500, 45, 28, 5.5, 5.5, 15, 15, 10, 67, 67, 2, 70, 70, 26, 12, 13, 7, 8, 10, 5, 999, 20, 25, 25, 25, 30, 12, 90];

function centerModal() {
    $(this).show();
    var $dialog = $(this).find(".modal-dialog").css("margin-top", offset);;
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css("margin-top", offset);
}

/*
Item levels
 presetSave
 btnSave
presetEdit
btnLoad
btnRemove
 
res-sort = avg/proba
*/

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
    return caps[id] == 0 || curItems[id] != caps[id];
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
    max = floor * 0.0008 + randomRangeFloat(0.0008, 0.0508);
    if (max > 0.9)
        max = 0.9;
    itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max))];
    if (itemID1 == 36 && resets == 0)
        itemID1 = 2;
    if (itemID1 == 1 || itemID1 == 2) {
        lv = curItems[itemID1];
        if (lv >= 400 && random01(engine) <= 0.75 && curItems[36] <= lv * 0.65)
            itemID1 = 36;
    }
    if (curItems[39] == 0 && floor > 156 + randomRangeInt(0, randomRangeInt(10, 110)))
        itemID1 = 39;
    num1 = random01(engine);
    if (num1 <= 0.045)
        floor += 50;
    else if (num1 <= 0.07)
        floor += 100;
    else if (num1 <= 0.075)
        floor += 150;
    flag1 = random01(engine) > 0.164;
    flag2 = floor % 100 != 0;
    flag3 = floor % 50 != 0;
    flag4 = !flag3;
    if (itemID1 == 26) {
        lv = curItems[26];
        if (flag1 || flag2 || lv <= 0 && floor < 501 || (lv <= 1 && floor < 1101 || lv >= 2 && floor < 1501) || lv >= 2 && random01(engine) > 0.4999 + floor * 0.0001) {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max * 0.94))];
            if (itemID1 == 26)
                itemID1 = 2;
        }
    } else if (itemID1 == 36 && (flag4 && random20Bool(engine) || floor > 501))
        itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max * 0.94))];
    if (itemID1 == 47) {
        lv1 = curItems[25];
        if (lv1 <= 2) {
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max * 0.7))];
            if (itemID1 == 47)
                itemID1 = 2;
        } else {
            lv2 = curItems[itemID1];
            if (flag3 || floor < 111 + 7 * lv2 - lv1 * 5 && random01(engine) < 0.98 - lv1 * 0.005) {
                itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max * 0.7))];
                if (itemID1 == 47)
                    itemID1 = 2;
            }
            if (lv2 >= 10000 && random30Bool(engine))
                itemID1 = 2;
            if (lv2 >= 20000 && random20Bool(engine))
                itemID1 = 2;
            if (lv2 >= 30000 && random30Bool(engine))
                itemID1 = 2;
            if (lv2 >= 40000 && random30Bool(engine))
                itemID1 = 2;
        }
    }
    if (itemID1 == 4) {
        lv = curItems[itemID1];
        if (lv > 9 && (flag1 || flag3 || floor < 151 + 40 * lv))
            itemID1 = 2;
    } else if (itemID1 == 3) {
        lv = curItems[itemID1];
        if (lv >= 15 && randomBool(engine))
            itemID1 = 1;
        if (lv >= 21 && random40Bool(engine))
            itemID1 = 1;
        if (lv >= 24 && random30Bool(engine))
            itemID1 = 1;
        if (lv >= 27 && random30Bool(engine))
            itemID1 = 1;
    } else if (itemID1 == 6) {
        lv = curItems[itemID1];
        if (lv > 20 && (flag1 || flag3 || floor < 301))
            itemID1 = 1;
        if (lv >= 15 && randomBool(engine))
            itemID1 = 1;
        if (lv >= 18 && randomBool(engine))
            itemID1 = 1;
        if (lv >= 22 && randomBool(engine))
            itemID1 = 1;
    } else if (itemID1 == 34 || itemID1 == 35) {
        lv = curItems[itemID1];
        if (flag1 || flag3 || lv <= 0 && floor < 351 || lv >= 1 && floor < 461 + lv * 40)
            itemID1 = 2;
        else if (lv >= 2 && random01(engine) < 0.30005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 3 && random01(engine) < 0.40005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 5 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 10 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 20 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 50 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
    } else if (itemID1 == 37 || itemID1 == 38) {
        lv = curItems[itemID1];
        if (curItems[itemID1 - 3] == 0 || flag1 || flag3 || (lv <= 0 && floor < 501 || lv >= 1 && floor < 621 + lv * 46))
            itemID1 = 2;
        else if (lv >= 2 && random01(engine) < 0.40005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 3 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 5 && random01(engine) < 0.70005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 10 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 20 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 50 && random01(engine) < 0.50005 - floor * 0.00005)
            itemID1 = 2;
        else if (lv >= 20 && randomBool(engine))
            itemID1 = 1;
        else if (lv >= 25 && random25Bool(engine))
            itemID1 = 1;
        else if (lv >= 28 && random25Bool(engine))
            itemID1 = 1;
    } else if (itemID1 == 23) {
        lv = curItems[itemID1];
        if (flag1 || flag3 || lv <= 0 && floor < 251 || lv == 1 && floor < 301 || lv >= 2 && floor < 351 + lv * 35 + (lv < 6 ? 0 : 100))
            itemID1 = 2;
        else if (lv >= 20 && random01(engine) > 0.09994 + floor * 0.00006)
            itemID1 = 2;
        else if (lv >= 16 && random01(engine) > 0.09992 + floor * 0.00008)
            itemID1 = 2;
        else if (lv >= 12 && random01(engine) > 0.0999 +  floor * 0.0001)
            itemID1 = 2;
        else if (lv >= 8 && random01(engine) > 0.0999 + floor * 0.0001)
            itemID1 = 2;
        else if (lv >= 5 && random01(engine) > 0.0999 + floor * 0.0001)
            itemID1 = 2;
    } else if (itemID1 == 25) {
        lv = curItems[itemID1];
        if (flag1 || flag3 || floor < 111 + 90 * lv + lv * lv * 6 + (lv < 7 ? 0 : 150) + (lv < 9 ? 0 : 90 + lv * lv * 0.5))
            itemID1 = 2;
        else if (lv >= 9 && randomBool(engine))
            itemID1 = 2;
    } else if (itemID1 == 21 || itemID1 == 22) {
        lv = curItems[itemID1];
        num2 = 101 + 36 * lv + (lv < 3 ? 0 : 100) + (lv < 5 ? 0 : 70) + (lv < 10 ? 0 : 90) + (lv < 25 ? 0 : 80) + (lv < 35 ? 0 : 80);
        if (num2 > 1199)
            num2 = num2 * 0.5 + 599.5;
        if (num2 > 1499)
            num2 = num2 * 0.5 + 749.5;
        if (num2 > 1899)
            num2 = num2 * 0.5 + 949.5;
        if (flag1 || flag2 || floor < num2 + 1)
            itemID1 = 2;
        else if (lv >= 25 && random30Bool(engine))
            itemID1 = 2;
    } else if (itemID1 == 27 || itemID1 == 28) {
        lv = curItems[itemID1];
        if (flag1 || flag2 || floor < 133 + 33 * lv + (lv < 3 ? 0 : 100) + (lv < 5 ? 0 : 80) + (lv < 10 ? 0 : 90) + (lv < 25 ? 0 : 90) + (lv < 35 ? 0 : 80))
            itemID1 = 2;
        else if (lv >= 25 && random30Bool(engine))
            itemID1 = 2;
    }
    if (itemID1 == 48) {
        lv = curItems[itemID1];
        if (lv >= 1) {
            if (flag3 || floor < 241 + 41 * lv)
                itemID1 = 2;
        } else if (floor < 141)
            itemID1 = 2;
    } else if (itemID1 == 49) {
        lv = curItems[itemID1];
        if (flag3 || floor < 231 + 45 * lv)
            itemID1 = 2;
    } else if (itemID1 == 50) {
        lv = curItems[itemID1];
        if (flag3 || floor < 211 + 49 * lv)
            itemID1 = 2;
    } else if (itemID1 == 51) {
        lv = curItems[itemID1];
        if (lv >= 1) {
            if (floor < 201 + 35 * lv)
                itemID1 = 2;
        } else if (floor < 161)
            itemID1 = 2;
        if (lv >= 24 && random30Bool(engine))
            itemID1 = 2;
        if (lv >= 26 && random30Bool(engine))
            itemID1 = 2;
    } else if (itemID1 == 53) {
        lv = curItems[itemID1];
        if (flag1 || flag3 || floor < 761 + 5 * lv)
            itemID1 = 2;
        else if (lv >= 2 && random01(engine) < 0.1)
            itemID1 = 2;
        else if (lv >= 3 && random30Bool(engine))
            itemID1 = 2;
        else if (lv >= 10 && random01(engine) < 0.15)
            itemID1 = 1;
        else if (lv >= 50 && random25Bool(engine))
            itemID1 = 1;
        else if (lv >= 80 && random25Bool(engine))
            itemID1 = 2;
    }
    if (itemID1 == 33) {
        lv = curItems[itemID1];
        if (floor < 20 * lv * (lv - 1) - 99)
            itemID1 = 2;
    } else if (itemID1 == 39) {
        lv = curItems[itemID1];
        if (lv != 0) {
            num2 = 0;
            if (lv >= 10)
                num2 = 150 + lv * 8;
            if (lv >= 5)
                num2 = 20 + lv * 8;
            if (floor < 181 + lv * 36 + num2)
                itemID1 = 2;
            if (lv >= 10 && random45Bool(engine))
                itemID1 = 2;
            if (lv >= 12 && random45Bool(engine))
                itemID1 = 2;
            if (lv >= 14 && random45Bool(engine))
                itemID1 = 2;
        }
    } else if (itemID1 == 40) {
        lv = curItems[itemID1];
        if (floor < 251 + 39 * lv)
            itemID1 = 1;
    } else if (itemID1 == 41) {
        lv1 = curItems[40];
        lv2 = curItems[itemID1];
        if (lv1 == 0 || floor < 291 + 190 * lv2)
            itemID1 = 1;
    } else if (itemID1 == 42) {
        lv1 = curItems[40];
        lv2 = curItems[itemID1];
        if (lv1 == 0 || floor < 221 + 2.4 * lv2)
            itemID1 = 1;
        if (lv2 >= 350 && random30Bool(engine))
            itemID1 = 2;
        if (lv2 >= 500 && random40Bool(engine))
            itemID1 = 2;
        if (lv2 >= 600 && randomBool(engine))
            itemID1 = 2;
    } else if (itemID1 == 43) {
        lv1 = curItems[40];
        lv2 = curItems[42];
        lv3 = curItems[itemID1];
        if (lv1 == 0 || lv2 == 0 || floor < 321 + 4.6 * lv3)
            itemID1 = 1;
        if (lv3 >= 200 && random40Bool(engine))
            itemID1 = 2;
        if (lv3 >= 300 && randomBool(engine))
            itemID1 = 2;
    } else if (itemID1 == 52) {
        lv1 = curItems[40];
        lv2 = curItems[43];
        lv3 = curItems[itemID1];
        if (lv1 == 0 || lv2 <= 10 || floor < 501 + 12 * lv3)
            itemID1 = 1;
        if (lv3 >= 25 && random40Bool(engine))
            itemID1 = 2;
        if (lv3 >= 50 && random30Bool(engine))
            itemID1 = 2;
        if (lv3 >= 75 && random40Bool(engine))
            itemID1 = 2;
    }
    if (itemID1 == 10 || itemID1 == 12 || (itemID1 == 14 || itemID1 == 16)) {
        if (curItems[itemID1] >= 210 && random70Bool(engine))
            itemID1 = 2;
    } else if (itemID1 == 44) {
        lv = curItems[itemID1];
        if (lv >= 1 && floor < 101 + 4 * lv + (lv < 5 ? 0 : 50) + (lv < 10 ? 0 : 70) + (lv < 40 ? 0 : 70) + (lv < 60 ? 0 : 70) + (lv < 70 ? 0 : 70))
            itemID1 = 2;
    } else if (itemID1 == 45) {
        lv = curItems[itemID1];
        if (floor < 451 + 6 * lv)
            itemID1 = 1;
    }
    if (itemID1 == 31 && floor <= 600)
        itemID1 = 29;
    if (itemID1 == 32 && floor <= 600)
        itemID1 = 30;
    if (itemID1 == 2 && curItems[1] < curItems[2] * 0.5 && random40Bool(engine))
        itemID1 = 1;
    if (itemID1 == 1) {
        if (flag4 && floor >= 500)
            itemID1 = random20Bool(engine) ? ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max * 0.6))] : 29;
    } else if (itemID1 == 2 && flag4 && floor >= 500)
        itemID1 = random20Bool(engine) ? ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max * 0.6))] : 30;
    if (itemID1 == 26) {
        lv = curItems[itemID1];
        if (flag2 || lv <= 0 && floor < 501 || (lv <= 1 && floor < 1101 || lv >= 2 && floor < 1501))
            itemID1 = ranks[maxedItems + Math.trunc((itemCount - maxedItems) * randomRangeFloat(0, max * 0.8))];
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
        if (lv >= 100 && random01(engine) <= 0.28 || lv >= 150 && random01(engine) <= 0.34 || (lv >= 200 && random01(engine) <= 0.38 || lv >= 250 && random01(engine) <= 0.5))
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
    if (curItems[40] == 0)
        chests[17] = 1;
    var num4 = 0;
    var num5 = 20;
    while (num5*10 <= endFloor) {
        chests[num5/10] = 0;
        num2 = 0.12 + num5 / 380;
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
            chests[num5] = 1;
            ++num4;
        }
        if (num5 % 5 == 0) {
            chests[num5] = 1;
            if (num5 % 10 == 0) {
                if (endFloor < num5/10)
                    chests[num5] = num5 != 20 ? (num5 % 50 != 0 ? 3 : 4) : 2;
                else if (random01(engine) < 0.25)
                    chests[num5] = 2;
                else if (random01(engine) < 0.22 && num5 % 50 == 0)
                    chests[num5] = 3;
            }
        }
        if (num5 % 10 == 0 && num5 >= 30) {
            if (num4 == 0) {
                chests[num5 - 5 + randomRangeInt(1, 3)] = 1;
                chests[num5 - 5 - randomRangeInt(1, 3)] = 1;
            } else if (num4 == 1)
                chests[num5 - 5] = 1;
            else if (num4 > 5) {
                chests[num5 - 9] = 0;
                chests[num5 - 8] = 0;
                chests[num5 - 7] = 0;
                chests[num5 - 6] = 0;
                chests[num5 - 4] = 0;
                chests[num5 - 3] = 0;
                chests[num5 - 2] = 0;
                chests[num5 - 1] = 0;
                chests[num5 - 5 + randomRangeInt(1, 5)] = 1;
                chests[num5 - 5 - randomRangeInt(1, 5)] = 1;
                chests[num5 - 5 + randomRangeInt(1, 5)] = 1;
                chests[num5 - 5 - randomRangeInt(1, 5)] = 1;
                chests[num5 - 5 + randomRangeInt(1, 5)] = 1;
                chests[num5 - 5 - randomRangeInt(1, 5)] = 1;
            }
            num4 = 0;
        }
        num5 += 10;
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
        if (num2 < 100) {
            num2 = 100;
        }
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

// Also copied directly from the code, with few modifications and little understanding
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
    num2 = Math.trunc(((1 + endFloor * 0.45 + endFloor * 0.75) / 300 + randomRangeFloat(-0.2, 0.2)) * 10);
    max1 = num2 - num2 % 10;
    if (max1 > 20)
        max1 = 20;
    num3 = Math.trunc(((1 + endFloor * 0.45 + endFloor * 0.75) / 300 + randomRangeFloat(-0.2, 0.2)) * 10);
    num4 = num3 - num3 % 10;
    if (num4 > 10)
        num4 = 10;
    num5 = (1.0 + endFloor * 0.45 + endFloor * 0.75) / 500 + randomRangeFloat(-0.25, 0.25);
    num6 = Math.trunc(num5 * 10);
    num7 = num6 - num6 % 10;
    num8 = ((1 + endFloor) / 170) + randomRangeFloat(-0.25, 0.25);
    num9 = Math.trunc(num5 * 10);
    if (num9 < 0)
        num9 = 1;
    if (num1 == 0) {
        kuriaLine[0] = 20 + randm101(max1) + randm10(num9 * 0.25, num9 * 0.8);
        kuriaLine[1] = kuriaLine[0] + 20 + randm10(num9 * 0.25, num9 * 0.8);
        kuriaLine[2] = kuriaLine[1] + 10 + num4 + randm101(max1) + randm10(num9 * 0.45, num9 * 0.9 + 1);
        kuriaLine[3] = kuriaLine[2] + 20 + randm101(max1 + 5) + randm10(num9 * 0.5, num9 * 0.9 + 1);
        kuriaLine[4] = kuriaLine[3] + 30 + randm101(num7 + num4 + 6) + randm10(num9 * 0.55, num9 + 2);
        kuriaLine[5] = kuriaLine[4] + 50 + num7 + randm101(num7 + num4 + 7) + randm10(num9 * 0.6, num9 + 6);
        for (var index = 6; index < length; ++index) {
            num11 = randomRangeFloat(0, 1);
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
        if (duration <= 9 && random01(engine) < 0.6)
            chestCount[3] = 2;
        else if (duration <= 8)
            chestCount[3] = 2;
        chestFloor[3] = 120 + randomRangeFloat(kuriaLine[3] + 80, kuriaLine[3] * 2 + 80);
        chestFloor[3] -= chestFloor[3] % 10;
        num10 = 4;
    } else {
        kuriaLine[0] = 30 + randm101(max1) + randm101(num9 * 0.2, num9 * 0.8);
        kuriaLine[1] = kuriaLine[0] + 20 + randm101(num9 * 0.25, num9 * 0.8);
        kuriaLine[2] = kuriaLine[1] + 10 + num4 + randm101(max1) + randm10(num9 * 0.45, num9 * 0.9 + 1);
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
            if (num11 < 0.82) {
                chestCount[index] = 1 + Math.trunc(randomRangeFloat(0, kuriaLine[index] * 0.0065));
            } else {
                chestCount[index] = 1 + Math.trunc(randomRangeFloat(0, kuriaLine[index] * 0.005));
            }
        }
        if (chestCount[index] != 0) {
            chestFloor[index] = 150 + randomRangeFloat(kuriaLine[index] + 60, Math.trunc(kuriaLine[index] * 1.4 + 170));
            if (chestFloor[index] > endFloor) {
                break;
            }
            if (randomRangeFloat(0, max2) < 0.75 || chestFloor[index] < 200)
                chestFloor[index] -= chestFloor[index] % 10;
            else
                chestFloor[index] -= chestFloor[index] % 50;
        }
        if (index < 2) {
            if (chestCount[index] > 1)
                chestCount[index] = 1;
        } else {
            if (chestCount[index] > 2)
                chestCount[index] = 2;
        }
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

// Copied directly from the code. I didn't really understand that part
function okno(zako, id, lv) {
    return (zako || id != 1 && id != 2 && (id != 29 && id != 30) && (id != 31 && id != 32)) && (lv <= 1 || id != -99 && id != 21 && (id != 22 && id != 27) && (id != 28 && id != 34 && (id != 35 && id != 37)) && id != 38) && (id != -99 && id != 23 && (id != 25 && id != 26) && (id != 25 && id != 39 && (id != 40 && id != 44)) && id != 46);
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
            guildHatStat = items[39] == 0 ? 0 : items[39] + 24;
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
    items = new Array(itemCount).fill(0);
    j = 0;
    for (var i in itemObjs) {
        items[j] = Number($("#" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, ""))[0].value);
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
    sortType = $("input[name='res-sort']:checked")[0].id;
    $("#res-table").html("");
    $("#simulated-count").html(steps);
    $("#simulated-item").html(gainedLevels.reduce((a, b) => a + b, 0).toFixed(2));
    if (sortType === "avg") {
        tabs = doubleRefSort(gainedTimes, names, gainedLevels);
        for (var i = 0; i < itemCount; i++) {
            $("#res-table").append("<tr><td>" + tabs[1][i] + "</td><td>" + tabs[0][i].toFixed(5) + "%</td><td>" + tabs[2][i].toFixed(2) + "</td></tr>");
        }
    } else if (sortType === "prob") {
        tabs = doubleRefSort(gainedLevels, names, gainedTimes);
        for (var i = 0; i < itemCount; i++) {
            $("#res-table").append("<tr><td>" + tabs[1][i] + "</td><td>" + tabs[2][i].toFixed(5) + "%</td><td>" + tabs[0][i].toFixed(2) + "</td></tr>");
        }
    } else {
        $('#results').modal('hide');
        $("#err-wrong-sort").show();
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

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("#version").append("1.7.4");
    
    engine = Random.engines.mt19937().autoSeed();
    random01 = Random.real(0, 1, false);
    randomBool = Random.bool();
    random20Bool = Random.bool(.2);
    random25Bool = Random.bool(.25);
    random30Bool = Random.bool(.3);
    random40Bool = Random.bool(.4);
    random45Bool = Random.bool(.45);
    random70Bool = Random.bool(.7);
    
    for (var i in itemObjs) {
        itemObjs[i].value = 0; // TODO
    }

    for (var i in itemObjs) {
        $("#itemLevels").append("<tr><td>" + i + "</td><td><input type='number' id='" + i.toLowerCase().replace(/ /g, "_").replace(/'/g, "").replace(/\+/g, "") + "' name='quantity' min='0' max='" + itemObjs[i].cap + "' value='" + itemObjs[i].value + "'></td><tr/>");
    }
    
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

    $(".btn").click(function() {
        this.blur();} // Unfocus buttons
    );
    
    $('.modal').on('show.bs.modal', centerModal);
    $(window).on("resize", function() {
        $('.modal:visible').each(centerModal);
    });
    
    $("#simulate").click(runSimulation);
    
    $("#prob, #avg").click(displayResults);
    
    //debugCur();
});