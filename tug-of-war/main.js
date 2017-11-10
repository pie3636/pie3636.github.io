function changeTab(newTab) {
        $("#nav_" + currentTab).parent().removeClass("active");
        $("#nav_" + newTab).parent().addClass("active");
        $("#" + currentTab).hide();
        $("#" + newTab).show();
        currentTab = newTab;
        scroll();
}

function updateValue(value, id, hasVariation, digits, hasUnit) {
    // Try to read "digits" from parameter, if it fails try to read from
    hasDigits = typeof digits !== "undefined" && digits !== 0 || typeof (digits = value.precision) !== "undefined"; JSON
    if (hasVariation) {
        valueCur = value.cur;
        variation = valueCur - value.prev;
    } else {
        valueCur = value;
        variation = 0;
    }
    if (hasDigits) {
        valueCur = valueCur.toFixed(digits);
    }
    $("#" + id).html(format(valueCur) + (~id.indexOf("percent") ? " %" : ""));
    if (hasVariation && variation) {
        isPos = variation > 0;
        if (hasDigits) {
            variation = variation.toFixed(digits);
            if (~variation.indexOf(".")) { // Remove trailing zeroes
                while (variation[variation.length - 1] === "0") {
                    variation = variation.slice(0, -1);
                }
                if (variation.slice(-1) === ".") { // Remove trailing "."
                    variation = variation.slice(0, -1);
                }
            }
        }
        variationStr = format(String(variation).replace("-", "")) + "</span>";
        if (isPos) {
            variationStr = "<span class='green'>+ " + variationStr;
        } else {
            variationStr = "<span class='red'>- " + variationStr;
        }
        $("#" + id + "-variation").html(" (" + variationStr + ")");
    }
    if (hasUnit) {
        $("#" + id + "-unit").html(value.unit + (valueCur == 0 || valueCur == 1 ? "" : "s"));
    }
}

function isDeleted(tab) {
    return tab[0] === "[deleted]";
}

function hasSameValue(a, b, isTwo) {
    return a[1] === b[1] && (!isTwo || isTwo && a[2] === b[2]);
}

function updateTableNR(values, id, isTwo, canValueChange) {
    var col1, col2, col3;
    for (var value = 0; value < values.cur.length; value++) {
        col3 = "New";
        for (oldValue in values.prev) { // Remove "New" if it was already present
            if (values.cur[value][0] === values.prev[oldValue][0] && (canValueChange || hasSameValue(values.cur[value], values.prev[oldValue], isTwo))) {
                col3 = "";
                break;
            }
        }
        var curCol = 2;
        if (isTwo) {
            col1 = values.cur[value][0] + " and " + values.cur[value][1];
            col2 = values.cur[value][2];
            curCol++;
        } else {
            col1 = values.cur[value][0];
            col2 = values.cur[value][1];
        }
        while (curCol < values.cur[value].length) { // Append remaining columns if necessary
            col2 += "</td><td>" + values.cur[value][curCol];
            curCol++;
        }
        $("#" + id).append("<tr><td class='text-center'><b>" + (value + 1) + "</b></td><td>" + col1 + "</td><td>" + col2 + "</td><td><b>" + col3 + "</b></td></tr>");
    }
}

// Returns [ranks with equal positions, tie begin indices, tie end indices]
function getRanks(values) {
    var res = [], tiesBegin = [], tiesEnd = [], cnt = 0, ties = 0;
    for (var value = 0; value < values.length; value++) {
        cnt++;
        res.push([values[value][0], cnt].concat(values[value].slice(1)));
        if (value != 0 && hasSameValue(values[value - 1], values[value], false)) {
            cnt--;
            if (ties == 0) {
                tiesBegin.push(value);
            }
            ties++;
            res[res.length - 1][1] = cnt;
        } else {
            cnt += ties;
            ties = 0;
            tiesEnd.push(value);
            tiesBegin.push(value + 1);
            res[res.length - 1][1] = cnt;
            if (isDeleted(values[value])) {
                cnt--;
                res[res.length - 1][1] = "-";
            }
        }
    }
    return [res, tiesBegin, tiesEnd];
}

// Returns map[name, values], where values is a table
function getValues(values) {
    var map = {}, curCol = 2;
    for (var value = 0; value < values.length; value++) {
        map[values[value][0]] = [values[value][1]];
        curCol = 2;
        while (curCol < values[value].length) { // Append remaining columns if necessary
            map[values[value][0]].push(values[value][curCol]);
            curCol++;
        }
    }
    return map;
}

function getVariationText(delta, forceNoEmpty) {
    if (delta === 0) {
        return forceNoEmpty ? "" : "=";
    } else if (delta > 0) {
        return "<span class='green'>+ " + delta + "</span>";
    } else {
        return "<span class='red'>- " + -delta + "</span>";
    }
}

// Returns the variation text for any col2 stat
function deltaFor(curVal, map, col) {
    try {
        var str = getVariationText(Math.floor(100 * (curVal[col - 1] - map[curVal[0]][col - 2])) / 100, true);
        if (str !== "") {
            return " <b>(" + str + ")</b>";
        }
        return str;
    } catch (e) {
        if (e instanceof TypeError) {
            return "";
        }
    }
}

function updateTableR(values, id) {
    ranks = getRanks(values.cur);
    dataPrev = getRanks(values.prev)[0];
    dataCur = ranks[0];
    oldDataMap = getValues(values.prev);
    var col1, col2, col3, delta;
    for (var value = 0; value < values.cur.length; value++) {
        var curCol = 2;
        col1 = values.cur[value][0];
        col2 = values.cur[value][1];
        delta = "";
        if (isDeleted(values.cur[value])) { // Don't register variation for [deleted]
            col3 = "N/A";
        } else {
            for (val in dataPrev) {
                if (dataPrev[val][0] == values.cur[value][0]) {
                    delta = dataPrev[val][1] - dataCur[value][1];
                    break;
                }
            }
            if (delta === "") {
                col3 = "New";
            } else {
                col3 = getVariationText(delta);
            }
        }
        col2 += deltaFor(values.cur[value], oldDataMap, curCol);
        while (curCol < values.cur[value].length) { // Append remaining columns if necessary
            col2 += "</td><td>" + values.cur[value][curCol];
            col2 += deltaFor(values.cur[value], oldDataMap, curCol); // Get variation
            curCol++;
        }
        border = " class='inter-border ";
        if (~ranks[1].indexOf(value + 1)) {
            border += "double-border-top ";
        }
        if (~ranks[2].indexOf(value + 1)) {
            border += "double-border-bottom";
        }
        border += "'";
        if (~id.indexOf("_and")) {
            col1 = col1.split(" ").map(x => x === "[deleted]" ? "[deleted]" : "<a href='http://reddit.com/u/" + x + "'>" + x + "</a>").join(" and ");
        } else {
            if (col1 !== "[deleted]") {
                col1 = "<a href='http://reddit.com/u/" + col1 + "'>" + col1 + "</a>";
            } else {
                col1 = "Total for [deleted] users (not updated retroactively)";
            }
        }
        $("#" + id).append("<tr" + border + "><td class='text-center'><b>" + dataCur[value][1] + "</b></td><td>" + col1 + "</td><td>" + col2 + "</td><td><b>" + col3 + "</b></td></tr>")
    }
}

function tooltip(id, title, show) {
    show = (typeof show === 'undefined' ? true : show);
    $("#" + id).attr("title", title).tooltip('fixTitle');
    if (show) {
        $("#" + id).tooltip('show');
    }
}

function centerModal() {
    $(this).show();
    var $dialog = $(this).find(".modal-dialog").css("margin-top", offset);;
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css("margin-top", offset);
}

function format(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

$(document).ready(function() {
    $("#loading").remove();
    currentTab = "charts";
    changeTab("charts");
    
    $("#version").append(data.lastData);
    $("#version-mobile").append(data.lastData.substr(0, 7));
    $("#updateAnnouncementVersion").html(data.lastUpdate);

    $('.modal').on('show.bs.modal', centerModal);
    $(window).on("resize", function() {
        $('.modal:visible').each(centerModal);
    });
    
    var storedVersion = localStorage.storedVersion;
    if (typeof storedVersion === "undefined" || storedVersion !== data.lastUpdate) {
        $("#updateAnnouncement").show();
    }
    $("#updateAnnouncementClose").click(function() {
        $("#updateAnnouncement").hide();
        localStorage.storedVersion = data.lastUpdate;
    });
    
    /******************** Data inclusion ********************/
    
    if (data.comment !== "") {
        $("#comment").html(data.comment.replace(/\n/g, "<br />"));
        $("#comment-panel").show();
    }
    
    for (var i in data.charts) {
        $("#charts-link-" + i).attr("href", data.charts[i]);
        $("#charts-img-" + i).attr("src", data.charts[i]);
    }
    
    updateValue(data.counts.total, "total-counts", true);
    updateValue(data.counts.ofMain, "of-main-counts-percent", true);
    updateValue(data.counts.min, "min-count", true);
    updateValue(data.counts.max, "max-count", true);
    updateValue(data.counts.range, "count-range", true);
    updateValue(data.counts.ofMaxRange, "of-max-count-range", true, 2);
    updateValue(data.counts.avg, "avg-count", true, 2);
    updateValue(data.counts.med, "med-count", true);
    
    updateTableNR(data.counts.mostCommon, "most-common-counts", false, true);
    updateTableNR(data.counts.leastCommon, "least-common-counts", false, true);
    
    updateValue(data.replyTime.started, "started", true, 2, true);
    updateValue(data.replyTime.fastest, "fastest-count", true, 2, true);
    updateValue(data.replyTime.slowest, "slowest-count", true, 2, true);
    updateValue(data.replyTime.avg, "avg-time", true, 2, true);
    updateValue(data.replyTime.med, "med-time", true, 0, true);
    updateValue(data.countSign.pos, "pos-counts", true);
    updateValue(data.countSign.neg, "neg-counts", true);
    updateValue(data.countSign.posPercent, "pos-counts-percent", true, 2);
    updateValue(data.countSign.negPercent, "neg-counts-percent", true, 2);
    updateValue(data.countSign.zeros, "zero-counts", true);
    updateValue(data.countSign.ofZero, "of-counts-zero", true, 2);
    updateValue(data.countSign.maxPosStreak, "max-pos-streak", true);
    updateValue(data.countSign.maxNegStreak, "max-neg-streak", true);
    updateValue(data.countSign.maxUpStreak.length, "max-up-streak", true);
    updateValue(data.countSign.maxUpStreak.percent, "max-up-streak-percent", true, 2);
    updateValue(data.countSign.maxUpStreak.begin, "max-up-streak-begin");
    updateValue(data.countSign.maxUpStreak.end, "max-up-streak-end");
    updateValue(data.countSign.maxDownStreak.length, "max-down-streak", true);
    updateValue(data.countSign.maxDownStreak.percent, "max-down-streak-percent", true, 2);
    updateValue(data.countSign.maxDownStreak.begin, "max-down-streak-begin");
    updateValue(data.countSign.maxDownStreak.end, "max-down-streak-end");
    updateValue(data.countSign.avgStreak, "avg-streak", true);
    updateValue(data.countSign.posNegAsym, "pos-neg-asym", true);
    updateValue(data.gets.count, "total-gets", true);
    updateValue(data.gets.avg, "avg-get", true, 2);
    updateValue(data.gets.med, "med-get", true);
    
    updateTableNR(data.gets.mostCommon, "most-common-gets", false, true);
    updateTableNR(data.gets.leastCommon, "least-common-gets", false, true);
    
    updateValue(data.gets.fastest.time, "fastest-get", true, 2, true);
    $("#fastest-get-direction").html(data.gets.fastest.begin < data.gets.fastest.end ? "up" : "down")
    updateValue(data.gets.fastest.begin, "fastest-get-begin");
    updateValue(data.gets.fastest.end, "fastest-get-end");
    updateValue(data.gets.slowest.time, "slowest-get", true, 2, true);
    $("#slowest-get-direction").html(data.gets.slowest.begin < data.gets.slowest.end ? "up" : "down")
    updateValue(data.gets.slowest.begin, "slowest-get-begin");
    updateValue(data.gets.slowest.end, "slowest-get-end");
    updateValue(data.gets.avgTime, "avg-get-time", true, 2, true);
    updateValue(data.gets.medTime, "med-get-time", true, 2, true);
    updateValue(data.gets.longest.length, "longest-get", true, 2, true);
    $("#longest-get-direction").html(data.gets.longest.begin < data.gets.longest.end ? "up" : "down")
    updateValue(data.gets.longest.begin, "longest-get-begin");
    updateValue(data.gets.longest.end, "longest-get-end");
    updateValue(data.gets.avgLen, "avg-get-len", true, 2);
    updateValue(data.gets.medLen, "med-get-len", true);
    updateValue(data.gets.lastLen, "last-get-len");
    updateValue(data.getSign.maxUpStreak.length, "max-up-get-streak", true);
    updateValue(data.getSign.maxUpStreak.begin, "max-up-get-streak-begin");
    updateValue(data.getSign.maxUpStreak.end, "max-up-get-streak-end");
    updateValue(data.getSign.maxDownStreak.length, "max-down-get-streak", true);
    updateValue(data.getSign.maxDownStreak.begin, "max-down-get-streak-begin");
    updateValue(data.getSign.maxDownStreak.end, "max-down-get-streak-end");
    updateValue(data.getSign.avgStreak, "avg-get-streak", true);
    updateValue(data.getSign.posNegAsym, "pos-neg-get-asym", true);
    updateValue(data.getSign.pos, "pos-gets", true);
    updateValue(data.getSign.neg, "neg-gets", true);
    updateValue(data.getSign.posPercent, "pos-gets-percent", true, 2);
    updateValue(data.getSign.negPercent, "neg-gets-percent", true, 2);
    updateValue(data.getSign.zeros, "zero-gets", true);
    updateValue(data.getSign.ofZero, "of-gets-zero", true, 2);
    updateValue(data.getSign.maxPosStreak, "max-pos-get-streak", true);
    updateValue(data.getSign.maxNegStreak, "max-neg-get-streak", true);
    
    updateTableNR(data.oneStalemates, "one-stalemates");
    updateTableNR(data.twoStalemates, "two-stalemates", true);
    
    updateValue(data.deletedCounts, "deleted-counts", true);
    updateValue(data.forks, "forks", true);
    updateValue(data.users.count, "total-usrs", true);
    updateValue(data.users.avg, "avg-usr", true, 2);
    updateValue(data.users.med, "med-usr", true);
    
    updateTableR(data.users.top20, "top-20-usrs");
    updateTableR(data.users.topGets, "top-usr-gets");
    
    updateValue(data.users.topGets.threshold, "usr-min-gets");
    
    updateTableR(data.users.topAssists, "top-usr-assists");
    
    updateValue(data.users.topAssists.threshold, "usr-min-assists");
    
    updateTableR(data.users.fastest, "top-usr-speed");
    
    updateValue(data.users.fastest.threshold, "usr-min-counts");
    
    updateTableR(data.users.fastestMed, "top-usr-med-speed");
    updateTableR(data.users.speedScore, "top-usr-speed-score");
    updateTableR(data.users.topTeamScore, "top-team-score-_and");
    
    updateTableR(data.top100, "top-100-usrs");
});