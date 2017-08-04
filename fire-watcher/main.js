//TODO: More stats (prestigeTime...), hasOwnProperty/booleans 0-1 -> optimisation, progress (bars?), log highlighting transition? (bitstorm), compatibility on version update, cost
// "use strict"
// Bug log très rapide, double uselink, "5 month 19 day"

function tick() {
        game.realTime = new Date - game.lastDate;
        if (game.realTime < 2 * gD.tickDuration) {
                game.realTime = gD.tickDuration;
        }
        game.lastDate = new Date;
        gD.time -= gD.timeSpeed * game.timeMultiplier * game.realTime/1000;
        gD.stats.playTime += game.realTime/1000;
        gD.stats.ticks++;
        gD.stats.sessionTime += game.realTime/1000;
        $("#time").html(timify(gD.time, true, 0, 4, 3));
        for (var i in actions) {
                var justUnlocked = !gD.actions[i].unlocked && compare(actions[i].unlock, gD);
                var normalTick =  justUnlocked || gD.actions[i].unlocked && game.onLoad && !gD.actions[i].bought;
                var restoreStats = game.onLoad && gD.actions[i].bought;
                var tab = ["1", "2", "3", "4"]; // 1, 10, 100, max
                if (normalTick || restoreStats) { // If new action unlocked or unlocked in loaded game or bought in loaded game (to add to stats)
                        gD.actions[i].unlocked = true;
                        if (actions[i].repeatable) {
                                gD.stats.totalActions++;
                        }
                        if (actions[i].show.type == "achievement") {
                                gD.stats.totalAchievements++;
                        }
                        var strHR = '<hr id="' + i + 'HR"' + (gD.options.darkTheme ? 'class="HR2"' : "") + ' />';
                        var name = (actions[i].show.title ? actions[i].show.title : i.textify());
                        switch (actions[i].show.type) { // Display it
                                case "action":
                                        if (normalTick) {
                                                $("#actions").append(strDiv(i, 10) + '\
                                                                <div class="col-md-3 col-md-center' + (actions[i].show.nocenter ? ' top3' : '') + '">\
                                                                ' + strButton(i, name) + '\
                                                                </div>\
                                                                <div class="col-md-9' + (actions[i].show.nocenter ? '' : ' top6') + '" id="' + i + 'Inside">\
                                                                ' + actions[i].show.inside + '\
                                                                </div>\
                                                                </div>' + strHR);
                                        }
                                        break;
                                case "unit":
                                        if (normalTick) {
                                                $("#actions").append(strDiv(i, 0) + '\
                                                                <div class="col-md-2 top6">\
                                                                <span' + strTooltip(i) + ' id="' + i + 'Info">' + name + 's</span> : <span id="' + i + 'Number">0</span>\
                                                                </div>\
                                                                <div class="col-md-3 top6">\
                                                                Next cost : <span id="' + i + 'Cost">' + cost(actions[i].getCost(1), true) + '</span>\
                                                                </div>\
                                                                <div class="col-md-3 top6">\
                                                                Production : <span id="' + i + 'Production">0</span>\
                                                                </div>\
                                                                <div class="col-md-4">\
                                                                <div class="btn-group float-right">' + strButton(i + "1", "Buy 1", i, 1) + strButton(i + "2", "10", i, 1) + strButton(i + "3", "100", i, 1) + strButton(i + "4", "Max (0)", i, 1) + '\
                                                                </div>\
                                                                </div>\
                                                                </div>' + strHR);
                                                actions[i].effect(0); // Initialize text
                                        }
                                        break;
                                case "upgrade":
                                        if (normalTick) {
                                                $("#upgrades").append(
                                                                strButton(i, name + ' ' + cost(actions[i].cost)));
                                                $("#" + i).css("margin-right", 10).css("margin-bottom", 5);
                                        }
                                        if (restoreStats) {
                                                if (!actions[i].noStats) {
                                                        $((actions[i].extension ? "#extensionsBought" : "#upgradesBought")).append(
                                                                        strButton(i, name));
                                                        $("#" + i).css("margin-right", 10).css("margin-bottom", 5);
                                                        if (!actions[i].noStats) {
                                                                gD.stats.totalUpgrades++;
                                                                if (actions[i].extension) {
                                                                        gD.stats.totalExtensions++;
                                                                }
                                                        }
                                                }
                                                if (actions[i].onLoad) {
                                                        actions[i].effect();
                                                }
                                        }
                                        break;
                                case "achievement":
                                        if (normalTick) {
                                                $("#achievements").append(
                                                                strButton(i, name));
                                                $("#" + i).css("margin-right", 10).css("margin-bottom", 5);
                                                if (typeof actions[i].effect !== 'undefined' && justUnlocked) { // Don't apply effects on load
                                                        actions[i].effect();
                                                }
                                                if (!game.onLoad) {
                                                        log("Achievement unlocked : " + name + "!");
                                                }
                                        }
                                        break;
                                case "noDisplay":
                                        buyUpgrade(i);
                                        break;
                                default:
                                        if (normalTick) {
                                                $(actions[i].isUpgrade ? "#upgrades" : "#actions").after(actions[i].show.text);
                                        }
                                        break;
                        }
                        if (typeof actions[i].doUnlock !== 'undefined' && (!actions[i].noUnlockOnLoad || justUnlocked)) {
                                actions[i].doUnlock();
                        }
                        if (actions[i].show.type == "action" || actions[i].show.type == "upgrade" || actions[i].show.type == "achievement") { // Fix to prevent constant focus after clicking, TODO : Optimize
                                $("#" + i).tooltip().mouseup(toBlur).hover(themeTooltip); // Changes tooltip theme as needed
                                if (normalTick && actions[i].show.type != "achievement") {
                                        $("#" + i).on('click', function(_i){
                                                return function() {
                                                        buyUpgrade(_i, 0);
                                                };
                                        }(i));
                                }
                        } else if (actions[i].show.type == "unit") {
                                for (var j in tab) {
                                        $("#" + i +  tab[j]).mouseup(toBlur);
                                        if (normalTick) {
                                                $("#" + i + tab[j]).on('click', function(_i, _j){
                                                        return function() {
                                                                buyUpgrade(_i, Number(_j) + 1);
                                                        };
                                                }(i, j));
                                        }
                                }
                                $("#" + i + "Info").tooltip().hover(themeTooltip);
                        }
                }
                if (actions[i].show.type != "unit") {
                        setGreyout(i);
                } else {
                        for (var j in tab) {
                                setGreyout(i, j);
                        }
                }
                if (typeof actions[i].tick !== 'undefined' && (!game.onLoad || gD.actions[i].unlocked)) { // && (!actions[i].tickIfBought || gD.actions[i].bought) && (!actions[i].tickIfUnlocked || gD.actions[i].unlocked)) { // No tick if loading game and not unlocked
                        actions[i].tick();
                }
                }
                if (gD.currentTab == "stats") {
                        setStats("#stats", gD.stats);
                } else if (gD.currentTab == "inv") {
                        $("#time2").html(timify(gD.time, true, 0, 4, 3));
                        for (var i in gD.inventory) {
                                if (gD.inventory[i].unlocked) {
                                        $("#inv_" + i + "_value").html(timify(gD.inventory[i].value, false, 1, 1, 3));
                                        $("#inv_" + i).show();
                                        $("#inv_" + i + "_info").tooltip().hover(themeTooltip);
                                        var tmp = $("#inv_" + i).parents()[0].id;
                                        if (tmp.substring(0, 8) == "inv_raw_") {
                                                $("#" + tmp).show();
                                        }
                                }
                        }
                }
                game.onLoad = false;
        }

        function buyUpgrade(upgrade, unit) {
                unit = set(unit, false);
                if (!gD.actions[upgrade].bought && (unit && gD.actions[upgrade].maxBuy && compare(actions[upgrade].getCost(unit), gD, true) || !unit && compare(actions[upgrade].cost, gD, true, false))) { // First condition isn't mandatory
                        if (typeof actions[upgrade].effect !== 'undefined') {
                                actions[upgrade].effect((actions[upgrade].show.type == "unit" ? unit : undefined));
                        }
                        if (!actions[upgrade].repeatable) {
                                gD.actions[upgrade].bought = true;
                                switch (actions[upgrade].show.type) {
                                        case "action":
                                        case "unit":
                                                $("#" + upgrade).tooltip('hide');
                                                $("#" + upgrade + "Div").remove();
                                                $("#" + upgrade + "HR").remove();
                                                break;
                                        case "upgrade":
                                                if (!actions[upgrade].noStats) {
                                                        $((actions[upgrade].extension ? "#extensionsBought" : "#upgradesBought")).append($("#" + upgrade)[0].outerHTML.replace(/ \(.*\)/, "")); //TODO : Add other cases?
                                                }
                                                $("#" + upgrade).tooltip('hide').remove(); // Don't join!
                                                $("#" + upgrade).tooltip().mouseup(toBlur).hover(themeTooltip);
                                                if (!actions[upgrade].noStats) {
                                                        gD.stats.totalUpgrades++;
                                                        if (actions[upgrade].extension) {
                                                                gD.stats.totalExtensions++;
                                                        }
                                                }
                                                break;
                                        case "noDisplay":
                                                break;
                                        case "achievement": // Shouldn't happen
                                        default:
                                                console.log("ERROR");
                                                break;
                                }
                        }
                }
        }

        function compare(cost, data, doSub, subStep) { // Returns (cost <= data), data -= cost if doSub, subStep means toplevel (nested objects)
                var ret = true;
                if(!subStep) {
                        for (var i in cost) {
                                switch (typeof data[i]) {
                                        case "number":
                                                if (typeof cost[i] === "number") {
                                                        ret = cost[i] <= data[i];
                                                } else {
                                                        switch (cost[i].operator) {
                                                                case game.operator.EQ:
                                                                        ret = cost[i].value == data[i];
                                                                        break;
                                                                case game.operator.LT:
                                                                        ret = cost[i].value > data[i];
                                                                        break;
                                                                case game.operator.LE:
                                                                        ret = cost[i].value >= data[i];
                                                                        break;
                                                                case game.operator.GT:
                                                                        ret = cost[i].value < data[i];
                                                                        break;
                                                                case game.operator.GE:
                                                                        ret = cost[i].value <= data[i];
                                                                        break;
                                                                case game.operator.NE:
                                                                        ret = cost[i].value != data[i];
                                                                        break;
                                                        }
                                                }
                                                break;
                                        case "boolean":
                                                if (typeof data[i] === "boolean") {
                                                        ret = cost[i] == data[i];
                                                } else {
                                                        switch (cost[i].operator) {
                                                                case game.operator.EQ:
                                                                        ret = cost[i].value == data[i];
                                                                        break;
                                                                case game.operator.NE:
                                                                        ret = cost[i].value != data[i];
                                                                        break;
                                                        }
                                                }
                                                ret = cost[i] == data[i];
                                                break;
                                        case "object":
                                                ret = compare(cost[i], data[i], false, subStep); // doSub == false => compare only
                                                break;
                                        case "undefined":
                                        default:
                                                break;
                                }
                                if (!ret) return false;
                        }
                }
                if (doSub) { // Can only possibly happen at toplevel
                        for (var i in cost) {
                                switch (typeof cost[i]) {
                                        case "number":
                                                //if (typeof data[i] === "number" || cost[i].isConsumed) {
                                                data[i] -= cost[i];
                                                if (i == "time" && cost[i]) {
                                                        animate(-cost[i]);
                                                }
                                                //}
                                                break;
                                        case "object":
                                                ret = compare(cost[i], data[i], true, true); // Transmit doSub, skip first step
                                        case "boolean":
                                                /*if (typeof data[i] === "object" || cost[i].isConsumed) {
                                                  data[i] = !data[i];
                                                  }*/
                                        case "undefined":
                                        default:
                                                break;
                                }
                        }
                }
                return true;
        }

        function changeTab(newTab) {
                $("#nav_" + gD.currentTab).parent().removeClass("active");
                $("#nav_" + newTab).parent().addClass("active");
                $("#" + gD.currentTab).hide();
                $("#" + newTab).show();
                gD.currentTab = newTab;
                scroll();
        }

        function checkKode(e) {
                var order = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
                if (gD.event.kode != 10) {
                        if(e.which == order[gD.event.kode]) {
                                gD.event.kode++;
                        } else {
                                gD.event.kode = 0;
                        }
                }
        }

        function setTheme() {
                var add = (gD.options.darkTheme ? "2" : "");
                var add2 = (add ? "" : "2");
                var fg = (gD.options.darkTheme ? "#000" : "#FFF");
                if (gD.options.darkTheme) {
                        $("#navbar, #logger").removeClass("navbar-inverse");
                        $("hr").removeClass("HR2");
                } else {
                        $("#navbar, #logger").addClass("navbar-inverse");
                        $("hr").addClass("HR2");
                }
                $(".split-left" + add).removeClass("split-left" + add).addClass("split-left" + add2);
                $(".split-right" + add).removeClass("split-right" + add).addClass("split-right" + add2);
                $(".btn-default" + add).not(document.getElementById("importNow")).removeClass("btn-default" + add).addClass("btn-default" + add2);
                $(".btn").removeClass("greyedOut" + (gD.options.darkTheme ? "2" : ""));
                $(".navbar-fixed-bottom").css("color", (gD.options.darkTheme ? "#777" : "9d9d9d")).css("text-shadow", (gD.options.darkTheme ? "0 1px 0 rgba(255, 255, 255, .25)" : "0 -1px 0 rgba(0, 0, 0, .25)"));
                $("#logger").css("background-color", (gD.options.darkTheme ? "#eee" : "#111"));
                $("#fullLogs").css("background-color", (gD.options.darkTheme ? "#eee" : "#111")).css("color", (gD.options.darkTheme ? "#555" : "#9d9d9d"));
                $("body").css("background-color", (gD.options.darkTheme ? "#FFF" : "#000")).css("color", fg);
                $("#copyleft").html("<svg width='10' height='10'><circle cx='4.9' cy='5.1' r='4.4' style='fill:none;stroke:" + fg + ";stroke-width:1'/><path d='m 4.86,2.35 c -1.3,0 -2.39,0.91 -2.67,2.13 l 1.31,0 c 0.24,-0.52 0.76,-0.88 1.36,-0.88 0.83,0 1.5,0.67 1.5,1.5 0,0.83 -0.67,1.5 -1.5,1.5 -0.6,0 -1.12,-0.36 -1.36,-0.87 l -1.31,0 c 0.28,1.21 1.37,2.12 2.67,2.12 1.52,0 2.75,-1.23 2.75,-2.75 0,-1.52 -1.23,-2.75 -2.75,-2.75 z' style='fill:" + fg + "'/></svg>");
                for (var i = 1; i <= game.numLogs; i++) {
                        if ($("#l" + i).css("font-weight") == "bold") {
                                $("#l" + i).css("color", (gD.options.darkTheme ? "#08F" : "#FF0"));
                        }
                }
                gD.options.darkTheme = !gD.options.darkTheme;
        }

        $(function () {
                $("#loading").remove();
                for (var i in actions) {
                        if (gD.actions.hasOwnProperty(i)) {
                                gD.actions[i].unlocked = false;
                                gD.actions[i].bought = false;
                        } else {
                                gD.actions[i] = {unlocked: false, bought: false};
                        }
                }
                for (var i in gD.inventory) {
                        if (gD.inventory.hasOwnProperty(i)) {
                                gD.inventory[i].unlocked = false;
                                gD.inventory[i].value = 0;
                        } else {
                                gD.inventory[i] = {unlocked: false, value: 0};
                        }
                }
                localStorage.setItem("initValues", JSON.stringify(gD));
                for(var i = 1; i <= game.numLogs; i++) {
                        $("#l" + i).css("color", (gD.options.darkTheme ? "#FF0" : "#08F")).css("font-weight", "bold");
                        game.logTimeout["l" + i] = setTimeout(unhighlightLastLog, 10000 + 1000 * i);
                }
                load();
                gD.currentTab = "play";
                $("#version").append(game.version);
                $("#updateAnnouncementVersion").html(game.version);
                $("#darkTheme").change(setTheme).prop("checked", gD.options.darkTheme);
                if (gD.options.darkTheme) {
                        gD.options.darkTheme = false;
                        setTheme();
                }

                $("#autoSave").change(autoSave).prop("checked", gD.options.autoSave.enabled != 0);
                $("#autoSaveTimer").keydown(validateNumber(autoSaveTimer)).change(autoSaveTimer);
                $("#saveSave").tooltip().mouseup(toBlur).hover(themeTooltip).click(save);
                $("#loadSave").tooltip().mouseup(toBlur).hover(themeTooltip).click(load);
                $("#deleteSave").tooltip().mouseup(toBlur).hover(themeTooltip).click(function() {
                        localStorage.setItem("save", JSON.stringify(JSON.parse(localStorage.getItem("initValues"))));
                        log("Savefile successfully deleted.");
                });
                $("#wipeSave").tooltip().mouseup(toBlur).hover(themeTooltip).click(wipe);
                $("#exportSave").tooltip().mouseup(toBlur).hover(themeTooltip).click(exportSave).attr("data-toggle", "modal").attr("data-target","#exportGame").focus(toBlur);
                $("#importSave").tooltip().mouseup(toBlur).hover(themeTooltip).attr("data-toggle", "modal").attr("data-target","#importGame").focus(toBlur); // Or it stays focused after the modal is closed
                $("#importNow").tooltip().mouseup(toBlur).click(importSave);

                $("#logDuration").keydown(validateNumber(logDurationSetting)).change(logDurationSetting);
                $("#fullLogSize").keydown(validateNumber(fullLogSize)).change(fullLogSize);
                $("#clearLogs").tooltip().mouseup(toBlur).click(clearLogs);
                $("#clearFullLogs").tooltip().mouseup(toBlur).click(clearFullLogs);

                $("#timeFormatting").change(setFormatting);
                $("#resourcesFormatting").change(setFormatting);

                $("#actionsUnlockedTotal").html(count("action") + count("unit")); //TODO : split?
                $("#upgradesUnlockedTotal").html(count("upgrade") - count("noStats"));
                $("#achievementsUnlockedTotal").html(count("achievement"));
                $("#extensionsUnlockedTotal").html(count("upgrade", true)  - count("noStats"));

                $('.modal').on('show.bs.modal', centerModal);
                $(window).on("resize", function() {
                        $('.modal:visible').each(centerModal);
                });
                $('#exportGame').on('shown.bs.modal', function() { // Select and focus text
                        $('#containerExport').focus().select();
                });
                $('#importGame').on('hidden.bs.modal', function() {
                        $("#importError").hide();
                });
                $('#importGame').on('shown.bs.modal', function() {
                        $('#containerImport').focus();
                });
                game.codeSource = " " + scramble("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,!?.'-();:/\"~*+=^");
                game.codeDest = "᛫" + scramble("ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪᛯᛰ᛬᛭");
        });

        window.setInterval(tick, gD.tickDuration);
        /*window.onbeforeunload = function (event) {
          var message = 'Are you sure you want to leave?';
          if (typeof event == 'undefined') {
          event = window.event;
          }
          if (event) {
          event.returnValue = message;
          }
          return message;
          }*/

        $(window).scroll(scroll);

        (function($) {
                $.eventReport = function(selector, root) {
                        var s = [];
                        $(selector || '*', root).addBack().each(function() {
                                // the following line is the only change
                                var e = $._data(this, 'events');
                                if(!e) return;
                                s.push(this.tagName);
                                if(this.id) s.push('#', this.id);
                                if(this.className) s.push('.', this.className.replace(/ +/g, '.'));
                                for(var p in e) {
                                        var r = e[p],
                                                h = r.length - r.delegateCount;
                                        if(h)
                                                s.push('\n', h, ' ', p, ' handler', h > 1 ? 's' : '');
                                        if(r.delegateCount) {
                                                for(var q = 0; q < r.length; q++)
                                                        if(r[q].selector) s.push('\n', p, ' for ', r[q].selector);
                                        }
                                }
                                s.push('\n\n');
                        });
                        return s.join('');
                }
                $.fn.eventReport = function(selector) {
                        return $.eventReport(selector, this);
                }
                $(document).keyup(checkKode);
        })(jQuery);
        //alert($.eventReport('#monkey1'));
