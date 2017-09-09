var lastData = "09 Sep 2017"

var lastUpdate = "09 Sep 2017"
var announcement = true

function changeTab(newTab) {
        $("#nav_" + currentTab).parent().removeClass("active");
        $("#nav_" + newTab).parent().addClass("active");
        $("#" + currentTab).hide();
        $("#" + newTab).show();
        currentTab = newTab;
        scroll();
}

$(function () {
        $("#loading").remove();
        currentTab = "charts";
        
        $("#version").append(lastData);
        $("#version-mobile").append(lastData.substr(0, 7));
        $("#updateAnnouncementVersion").html(lastUpdate);

        $('.modal').on('show.bs.modal', centerModal);
        $(window).on("resize", function() {
            $('.modal:visible').each(centerModal);
        });
        
        if (announcement) {
            $("#updateAnnouncement").show();
        }
        $("#updateAnnouncementClose").click(function() {
            $("#updateAnnouncement").hide();
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
        updateValue(data.counts.min, "min-count", true);
        updateValue(data.counts.max, "max-count", true);
        updateValue(data.counts.range, "count-range", true);
        updateValue(data.counts.ofMaxRange, "of-max-count-range");
        updateValue(data.counts.avg, "avg-count", true, 2);
        updateValue(data.counts.med, "med-count", true);
        
        updateTable(data.counts.mostCommon, "most-common-counts");
        updateTable(data.counts.leastCommon, "least-common-counts");
        
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
        
        updateTable(data.gets.mostCommon, "most-common-gets");
        updateTable(data.gets.leastCommon, "least-common-gets");
        
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
        updateValue(data.getSign.pos, "pos-gets", true);
        updateValue(data.getSign.neg, "neg-gets", true);
        updateValue(data.getSign.posPercent, "pos-gets-percent", true, 2);
        updateValue(data.getSign.negPercent, "neg-gets-percent", true, 2);
        updateValue(data.getSign.zeros, "zero-gets", true);
        updateValue(data.getSign.ofZero, "of-gets-zero", true, 2);
        updateValue(data.getSign.maxPosStreak, "max-pos-get-streak", true);
        updateValue(data.getSign.maxNegStreak, "max-neg-get-streak", true);
        
        updateTable(data.oneStalemates, "one-stalemates");
        updateTable(data.twoStalemates, "two-stalemates", true);
        
        updateValue(data.deletedCounts, "deleted-counts", true);
        updateValue(data.forks, "forks", true);
        updateValue(data.users.count, "total-usrs", true);
        updateValue(data.users.avg, "avg-usr", true, 2);
        updateValue(data.users.med, "med-usr", true);
        
        updateTable(data.users.top20, "top-20-usrs", false, true, true);
        
        updateTable(data.top100, "top-100-usrs", false, true, true);
});

function updateValue(value, id, hasVariation, digits, hasUnit) {
    if (hasVariation) {
        valueCur = value.cur;
        variation = valueCur - value.prev;
    } else {
        valueCur = value;
        variation = 0;
    }
    $("#" + id).html(format(valueCur));
    if (hasVariation && variation) {
        isPos = variation > 0;
        if (typeof digits !== "undefined" && digits !== 0 || typeof (digits = value.precision) !== "undefined") { // Try to read from parameter, if it fails try to read from JSON
            variation = variation.toFixed(digits);
            if (~variation.indexOf(".")) { // remove trailing zeroes
                while (variation[variation.length - 1] === "0") {
                    variation = variation.slice(0, -1);
                }
                if (variation.slice(-1) === ".") { // remove trailing "."
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

function updateTable(values, id, isTwo, isUser, hasRanking) {
    var cnt = 1, col1, col2, col3, delta, cntDisp;
    for (value in values.cur) {
        col3 = "New";
        if (hasRanking) {
            if (isDeleted(values.cur[value])) { // Don't register variation for [deleted]
                col3 = "N/A";
            } else {
                var posDel = values.cur.findIndex(isDeleted), oldPosDel = values.prev.findIndex(isDeleted);
                for (value2 in values.prev) {
                    if (values.cur[value][0] === values.prev[value2][0]) {
                        delta = value2 - value;
                        if (value2 < oldPosDel && value > posDel) {
                            delta++;
                        } else if (value2 > oldPosDel && value < posDel) {
                            delta--;
                        }
                        if (delta === 0) {
                            col3 = "=";
                        } else if (delta > 0) {
                            col3 = "<span class='green'>+ " + delta + "</span>";
                        } else {
                            col3 = "<span class='red'>- " + -delta + "</span>";
                        }
                        break;
                    }
                }
            }
        } else {
            for (value2 in values.prev) {
                if (values.cur[value][0] === values.prev[value2][0] && values.cur[value][1] === values.prev[value2][1]
                && (!isTwo || isTwo && values.cur[value][2] === values.prev[value2][2])) {
                    col3 = "";
                    break;
                }
            }
        }        
        if (isTwo) {
            col1 = values.cur[value][0] + " and " + values.cur[value][1];
            col2 = values.cur[value][2];
        } else {
            col1 = values.cur[value][0];
            col2 = values.cur[value][1];
        }
        cntDisp = cnt;
        if (isUser) {
            if (col1 !== "[deleted]") {
                col1 = "<a href='http://reddit.com/u/" + col1 + "'>" + col1 + "</a>";
            } else {
                col1 = "Total for [deleted] users (not updated retroactively)";
                cntDisp = "-";
                cnt--;
            }
        }
        $("#" + id).append("<tr><td class='text-center'><b>" + cntDisp + "</b></td><td>" + col1 + "</td><td>" + col2 + "</td><td><b>" + col3 + "</b></td></tr>");
        cnt++;
    }
}

function scroll() {
    var height = $('#navbar').height();
    if ($(this).scrollTop() + height + 10 > $("#charts").position().top) {
        $('#upgrades').css({
            "position": "fixed",
            "top": height + 10,
            "right": 0});
    } else {
        $('#upgrades').css({
            "position": "relative",
            "top": "auto",
            "right": "auto"});
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

$(window).scroll(scroll);

/*
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
})(jQuery);
*/