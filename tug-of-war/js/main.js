function changeTab(newTab) {
        $('#nav_' + currentTab).parent().removeClass('active');
        $('#nav_' + newTab).parent().addClass('active');
        $('#' + currentTab).hide();
        $('#' + newTab).show();
        currentTab = newTab;
        scroll();
}

function readSingleFile(file, i) {
    var request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.responseType = 'blob';
    request.onload = function() {
        var reader = new FileReader();
        reader.readAsDataURL(request.response);
        reader.onload = function(e) {
            options = {};
            switch (i) {
                case 0:
                    options = {
                        divName: 'chart-historical',
                        color: '#0088FF',
                        drawAxesAtZero: true,
                        title: 'Historical chart',
                        xlabel: 'Nth count',
                        ylabel: 'Count value',
                        labels: ["Count", "Value"],
                        legendFormatter: function (data) {
                            return '<b><span style="color:#0088FF">' + Number(data.x + 1).toLocaleString() + suffix(data.x + 1) + ' count:</span></b> ' + Number(data.series[0].y).toLocaleString();
                        },
                        axes: {
                            x: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            },
                            y: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            }
                        }
                    };
                break;
                case 1:
                    options = {
                        divName: 'chart-temporal',
                        color: '#0088FF',
                        drawAxesAtZero: true,
                        title: 'Temporal chart',
                        xlabel: 'Date',
                        ylabel: 'Count value',
                        labels: ["Date", "Value"],
                        axes: {
                            x: {
                                valueFormatter: Dygraph.dateString_,
                                ticker: Dygraph.dateTicker,
                                axisLabelFormatter: function(ms) {
                                    return new Date(ms).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric'});
                                },
                                axisLabelWidth: 80
                            },
                            y: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            }
                        },
                        legendFormatter: function (data) {
                            return '<b><span style="color:#0088FF">Count on ' + new Date(data.x).toLocaleString() + ':</span></b> ' + Number(data.series[0].y).toLocaleString() + '</div>';
                        }
                    };
                break;
                case 2:
                    options = {
                        divName: 'chart-frequency',
                        color: '#0088FF',
                        title: 'Count frequency',
                        xlabel: 'Count value',
                        ylabel: 'Times this number was counted',
                        labels: ["Value", "Frequency"],
                        logscale: true,
                        legendFormatter: function (data) {
                        return '<b><span style="color:#0088FF">' + Number(data.x).toLocaleString() + '</span></b> was counted <b><span style="color:#0088FF">' + data.series[0].y + ' time' + (data.series[0].y > 1 ? 's' : '') + '</span></b>';
                        },
                        axes: {
                            x: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            },
                            y: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            }
                        }
                    };
                break;
                case 3:
                    options = {
                        divName: 'chart-gets',
                        color: '#0088FF',
                        title: 'Get length cumulative distribution',
                        xlabel: 'Length in counts',
                        ylabel: 'Proportion of gets with at least X counts',
                        labels: ["Length", "Frequency"],
                        legendFormatter: function (data) {
                            return '<b><span style="color:#0088FF">' + (100*data.series[0].y).toFixed(2) + '%</span></b> of gets took at least ' + '<b><span style="color:#0088FF">' + Number(data.x).toLocaleString() + '</span></b> counts';
                        },
                        axes: {
                            x: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            },
                            y: {
                                valueRange: [0, 1],
                                axisLabelFormatter: function(n) {
                                    return Math.round(100*n) + '%';
                                }
                            }
                        },
                    };
                break;
                case 4:
                    options = {
                        divName: 'chart-weekly',
                        title: 'Weekly posting time',
                        xlabel: 'Time of the day (UTC)',
                        ylabel: 'Counts posted between between this hour and the next one',
                        labels: ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        axes: {
                            x: {
                                valueFormatter: function(n) {
                                    return (n < 10 ? '0' : '') + n + ':00' + ' to ' + (n == 23 ? '00:00' : (n < 9 ? '0' : '') + (n + 1) + ':00');
                                },
                                axisLabelFormatter: function(n) {
                                    return (n < 10 ? '0' : '') + n + ':00';
                                }
                            },
                            y: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            }
                        },
                    };
                break;
                case 5:
                    options = {
                        divName: 'chart-timedist',
                        title: 'Percentage of 1- to 60- second replies',
                        xlabel: 'Time to reply in seconds',
                        ylabel: 'Percentage of all counts',
                        labels: ["Time", "Counts"],
                        legendFormatter: function (data) {
                            return '<b><span style="color:#0088FF">' + (100*data.series[0].y).toFixed(2) + '%</span></b> of counts were ' + '<b><span style="color:#0088FF">' + Number(data.x).toLocaleString() + '</span></b>-second replies';
                        },
                        axes: {
                            x: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            },
                            y: {
                                axisLabelFormatter: function(n) {
                                    return Math.round(1000*n)/10 + '%';
                                }
                            }
                        }
                    };
                break;
                case 6:
                    options = {
                        divName: 'chart-powerusers',
                        title: 'Percentage of all counts posted by top users',
                        xlabel: 'Top X users',
                        ylabel: 'Percentage of all counts',
                        labels: ["Users", "Counts"],
                        legendFormatter: function (data) {
                            return '<b><span style="color:#0088FF">' + (100*data.series[0].y).toFixed(2) + '%</span></b> of counts were posted by the top ' + '<b><span style="color:#0088FF">' + Number(data.x).toLocaleString() + '</span></b> user' + (data.x > 1 ? 's' : '');
                        },
                        logscale: true,
                        axes: {
                            x: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                },
                                logscale: true
                            },
                            y: {
                                valueRange: [0, 1],
                                axisLabelFormatter: function(n) {
                                    return Math.round(100*n) + '%';
                                },
                                logscale: false
                            }
                        }
                    };
                break;
                case 7:
                    options = {
                        divName: 'chart-underabove',
                        title: 'Number of counts above/under a certain number',
                        xlabel: 'Number',
                        ylabel: 'Counts above/under',
                        labels: ["Number", "Counts above", "Counts under"],
                        legendFormatter: function (data) {
                            return '<b><span style="color:#0088FF">' + Number(data.series[0].y).toLocaleString() + '</span></b> count' + (data.series[0].y > 1 ? 's were' : ' was') + ' above and <b><span style="color:#0088FF">' + Number(data.series[1].y).toLocaleString() + '</span></b> ' + (data.series[1].y > 1 ? 'were' : 'was') + ' below <b><span style="color:#008800">' + Number(data.x).toLocaleString() + '</span></b>';
                        },
                        axes: {
                            x: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            },
                            y: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                },
                                axisLabelWidth: 75
                            }
                        }
                    };
                break;
                case 8:
                    options = {
                        divName: 'chart-underabovetime',
                        title: 'Time spent above/under a certain number',
                        xlabel: 'Number',
                        ylabel: 'Time spent above/under',
                        labels: ["Number", "Time above", "Time under"],
                        legendFormatter: function (data) {
                            return 'The count spent <b><span style="color:#0088FF">' + formatTimeDifference(data.series[0].y) + '</span></b> above and <b><span style="color:#0088FF">' + formatTimeDifference(data.series[1].y) + '</span></b> below <b><span style="color:#008800">' + Number(data.x).toLocaleString() + '</span></b>';
                        },
                        axes: {
                            x: {
                                axisLabelFormatter: function(n) {
                                    return Number(n).toLocaleString();
                                }
                            },
                            y: {
                                axisLabelFormatter: function(n) {
                                    return formatTimeDifference(n, true).split(' ').slice(0, 2).join(' ');
                                },
                                axisLabelWidth: 75
                            }
                        }
                    };
                break;
            }
            new Dygraph(document.getElementById(options.divName), e.target.result, options);
        };
    };
    request.send();
}

function formatTimeDifference(d) {
    if (!d) return "0s";
    str = d % 60 ? (d % 60) + 's' : '';
    d = Math.floor(d / 60);
    if (!d) return str;
    str = d % 60 ? (d % 60) + 'm ' + str : str;
    d = Math.floor(d / 60);
    if (!d) return str;
    str = d % 24 ? (d % 24) + 'h ' + str : str;
    d = Math.floor(d / 24);
    if (!d) return str;
    str = d % 365 ? (d % 365) + 'd ' + str : str;
    d = Math.floor(d / 365);
    if (!d) return str;
    return d + 'y ' + str;
}

function formatDate(d) {
    var yyyy = d.getFullYear(),
        mm = d.getMonth() + 1,
        dd = d.getDate();
    return dd + ' ' + d.getMonth() + yyyy + '/' + (mm < 10 ? '0' : '') + mm + '/' + (dd < 10 ? '0' : '') + dd;
  } 

function suffix(n) {
    if (n % 10 == 1 && n % 100 != 11) return "st";
    if (n % 10 == 2 && n % 100 != 12) return "nd";
    if (n % 10 == 3 && n % 100 != 13) return "rd";
    return "th";
}

$(function () {
        readSingleFile('data/historical.csv', 0);
        readSingleFile('data/temporal.csv', 1)
        readSingleFile('data/difficulty.csv', 2)
        readSingleFile('data/gets.csv', 3)
        readSingleFile('data/weekly.csv', 4)
        readSingleFile('data/timedist.csv', 5)
        readSingleFile('data/powerusers.csv', 6)
        readSingleFile('data/underabove.csv', 7)
        readSingleFile('data/underabovetime.csv', 8)
    
        $('#loading').remove();
        currentTab = 'charts';
        changeTab('charts');

        $('#version').append(data.lastData);
        $('#version-mobile').append(data.lastData.substr(0, 7));
        $('#updateAnnouncementVersion').html(data.lastUpdate);

        $('.modal').on('show.bs.modal', centerModal);
        $(window).on('resize', function() {
            $('.modal:visible').each(centerModal);
        });

        var storedVersion = localStorage.storedVersion;
        if (typeof storedVersion === 'undefined' || storedVersion !== data.lastUpdate) {
            $('#updateAnnouncement').show();
        }
        $('#updateAnnouncementClose').click(function() {
            $('#updateAnnouncement').hide();
            localStorage.storedVersion = data.lastUpdate;
        });

        /******************** Data inclusion ********************/

        if (data.comment !== '') {
            $('#comment').html(data.comment.replace(/\n/g, '<br />'));
            $('#comment-panel').show();
        }

        updateValue(data.counts.total, 'total-counts', true);
        updateValue(data.counts.ofMain, 'of-main-counts-percent', true);
        updateValue(data.counts.min, 'min-count', true);
        updateValue(data.counts.max, 'max-count', true);
        updateValue(data.counts.range, 'count-range', true);
        updateValue(data.counts.ofMaxRange, 'of-max-count-range', true, 2);
        updateValue(data.counts.avg, 'avg-count', true, 2);
        updateValue(data.counts.med, 'med-count', true);

        updateTableNR(data.counts.mostCommon, 'most-common-counts', false, true);
        updateTableNR(data.counts.leastCommon, 'least-common-counts', false, true);

        updateValue(data.replyTime.started, 'started', true, 2, true);
        updateValue(data.replyTime.fastest, 'fastest-count', true, 0, true);
        updateValue(data.replyTime.slowest, 'slowest-count', true, 2, true);
        updateValue(data.replyTime.avg, 'avg-time', true, 2, true);
        updateValue(data.replyTime.med, 'med-time', true, 0, true);
        updateValue(data.replyTime.fastestGetReach, 'fastest-count-get-reach', true, 0, true);
        updateValue(data.replyTime.slowestGetReach, 'slowest-count-get-reach', true, 0, true);
        updateValue(data.replyTime.avgGetReach, 'avg-time-get-reach', true, 2, true);
        updateValue(data.replyTime.medGetReach, 'med-time-get-reach', true, 0, true);
        updateValue(data.countSign.pos, 'pos-counts', true);
        updateValue(data.countSign.neg, 'neg-counts', true);
        updateValue(data.countSign.posPercent, 'pos-counts-percent', true, 2);
        updateValue(data.countSign.negPercent, 'neg-counts-percent', true, 2);
        updateValue(data.countSign.zeros, 'zero-counts', true);
        updateValue(data.countSign.ofZero, 'of-counts-zero', true, 2);
        updateValue(data.countSign.maxPosStreak, 'max-pos-streak', true);
        updateValue(data.countSign.maxNegStreak, 'max-neg-streak', true);
        updateValue(data.countSign.curPosNegStreak, 'cur-pos-neg-streak');
        $('#cur-pos-neg-streak-sign').html(data.countSign.curPosNegStreakSign < 0 ? 'negative' : 'positive');
        updateValue(data.countSign.maxUpStreak.length, 'max-up-streak', true);
        updateValue(data.countSign.maxUpStreak.percent, 'max-up-streak-percent', true, 2);
        updateValue(data.countSign.maxUpStreak.begin, 'max-up-streak-begin');
        updateValue(data.countSign.maxUpStreak.end, 'max-up-streak-end');
        updateValue(data.countSign.maxDownStreak.length, 'max-down-streak', true);
        updateValue(data.countSign.maxDownStreak.percent, 'max-down-streak-percent', true, 2);
        updateValue(data.countSign.maxDownStreak.begin, 'max-down-streak-begin');
        updateValue(data.countSign.maxDownStreak.end, 'max-down-streak-end');
        updateValue(data.countSign.avgStreak, 'avg-streak', true);
        updateValue(data.countSign.posNegAsym, 'pos-neg-asym', true);
        updateValue(data.gets.count, 'total-gets', true);
        updateValue(data.gets.avg, 'avg-get', true, 2);
        updateValue(data.gets.med, 'med-get', true);

        updateTableNR(data.gets.mostCommon, 'most-common-gets', false, true);
        updateTableNR(data.gets.leastCommon, 'least-common-gets', false, true);

        updateValue(data.gets.fastest.time, 'fastest-get', true, 2, true);
        $('#fastest-get-direction').html(data.gets.fastest.begin < data.gets.fastest.end ? 'up' : 'down')
        updateValue(data.gets.fastest.begin, 'fastest-get-begin');
        updateValue(data.gets.fastest.end, 'fastest-get-end');
        updateValue(data.gets.slowest.time, 'slowest-get', true, 2, true);
        $('#slowest-get-direction').html(data.gets.slowest.begin < data.gets.slowest.end ? 'up' : 'down')
        updateValue(data.gets.slowest.begin, 'slowest-get-begin');
        updateValue(data.gets.slowest.end, 'slowest-get-end');
        updateValue(data.gets.avgTime, 'avg-get-time', true, 2, true);
        updateValue(data.gets.medTime, 'med-get-time', true, 2, true);
        updateValue(data.gets.longest.length, 'longest-get', true);
        $('#longest-get-direction').html(data.gets.longest.begin < data.gets.longest.end ? 'up' : 'down')
        updateValue(data.gets.longest.begin, 'longest-get-begin');
        updateValue(data.gets.longest.end, 'longest-get-end');
        updateValue(data.gets.avgLen, 'avg-get-len', true, 2);
        updateValue(data.gets.medLen, 'med-get-len', true);
        updateValue(data.gets.lastLen, 'last-get-percent-len');
        updateValue(data.getSign.maxUpStreak.length, 'max-up-get-streak', true);
        updateValue(data.getSign.maxUpStreak.begin, 'max-up-get-streak-begin');
        updateValue(data.getSign.maxUpStreak.end, 'max-up-get-streak-end');
        updateValue(data.getSign.maxDownStreak.length, 'max-down-get-streak', true);
        updateValue(data.getSign.maxDownStreak.begin, 'max-down-get-streak-begin');
        updateValue(data.getSign.maxDownStreak.end, 'max-down-get-streak-end');
        updateValue(data.getSign.avgStreak, 'avg-get-streak', true);
        updateValue(data.getSign.posNegAsym, 'pos-neg-get-asym', true);
        updateValue(data.getSign.pos, 'pos-gets', true);
        updateValue(data.getSign.neg, 'neg-gets', true);
        updateValue(data.getSign.posPercent, 'pos-gets-percent', true, 2);
        updateValue(data.getSign.negPercent, 'neg-gets-percent', true, 2);
        updateValue(data.getSign.zeros, 'zero-gets', true);
        updateValue(data.getSign.ofZero, 'of-gets-zero', true, 2);
        updateValue(data.getSign.maxPosStreak, 'max-pos-get-streak', true);
        updateValue(data.getSign.maxNegStreak, 'max-neg-get-streak', true);
        updateValue(data.getSign.curPosNegStreak, 'cur-pos-neg-get-streak');
        $('#cur-pos-neg-get-streak-sign').html(data.getSign.curPosNegStreakSign < 0 ? 'negative' : 'positive');
        

        updateTableNR(data.oneStalemates, 'one-stalemates');
        updateTableNR(data.twoStalemates, 'two-stalemates', true);

        updateValue(data.deletedCounts, 'deleted-counts', true);
        updateValue(data.forks, 'forks', true);
        updateValue(data.users.count, 'total-usrs', true);
        updateValue(data.users.avg, 'avg-usr', true, 2);
        updateValue(data.users.med, 'med-usr', true);

        updateTableR(data.users.top20, 'top-20-usrs');
        updateTableR(data.users.topGets, 'top-usr-gets');
        updateValue(data.users.topGets.threshold, 'usr-min-gets');
        updateTableR(data.users.topAssists, 'top-usr-assists');
        updateValue(data.users.topAssists.threshold, 'usr-min-assists');

        updateTableR(data.users.fastestMed, 'top-usr-med-speed');
        updateValue(data.users.fastestMed.threshold, 'usr-min-counts');

        updateTableR(data.users.fastest, 'top-usr-speed');
        updateValue(data.users.fastest.threshold, 'usr-min-counts2');

        updateTableR(data.users.speedScore, 'top-usr-speed-score');

        updateTableR(data.top100, 'top-100-usrs');

        updateTableR(data.teams, 'top-team-score-nolink')
});

function updateValue(value, id, hasVariation, digits, hasUnit) {
    // Try to read 'digits' from parameter, if it fails try to read from
    hasDigits = typeof digits !== 'undefined' && digits !== 0 || typeof (digits = value.precision) !== 'undefined'; // JSON
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
    $('#' + id).html(format(valueCur) + (~id.indexOf('percent') ? ' %' : ''));
    if (hasVariation && variation) {
        isPos = variation > 0;
        if (hasDigits) {
            variation = variation.toFixed(digits);
            if (~variation.indexOf('.')) { // Remove trailing zeroes
                while (variation[variation.length - 1] === '0') {
                    variation = variation.slice(0, -1);
                }
                if (variation.slice(-1) === '.') { // Remove trailing '.'
                    variation = variation.slice(0, -1);
                }
            }
        }
        variationStr = format(String(variation).replace('-', '')) + '</span>';
        if (isPos) {
            variationStr = '<span class="green">+ ' + variationStr;
        } else {
            variationStr = '<span class="red">- ' + variationStr;
        }
        $('#' + id + '-variation').html(' (' + variationStr + ')');
    }
    if (hasUnit) {
        $('#' + id + '-unit').html(value.unit + (valueCur == 0 || valueCur == 1 ? '' : 's'));
    }
}

function isDeleted(tab) {
    return tab[0] === '[deleted]';
}

function hasSameValue(a, b, isTwo) {
    return a[1] === b[1] && (!isTwo || isTwo && a[2] === b[2]);
}

function updateTableNR(values, id, isTwo, canValueChange) {
    var col1, col2, col3;
    for (var value = 0; value < values.cur.length; value++) {
        col3 = 'New';
        for (oldValue in values.prev) { // Remove 'New' if it was already present
            if (values.cur[value][0] === values.prev[oldValue][0] && (canValueChange || hasSameValue(values.cur[value], values.prev[oldValue], isTwo))) {
                col3 = '';
                break;
            }
        }
        var curCol = 2;
        if (isTwo) {
            col1 = values.cur[value][0] + ' and ' + values.cur[value][1];
            col2 = values.cur[value][2];
            curCol++;
        } else {
            col1 = values.cur[value][0];
            col2 = values.cur[value][1];
        }
        while (curCol < values.cur[value].length) { // Append remaining columns if necessary
            col2 += '</td><td>' + values.cur[value][curCol];
            curCol++;
        }
        $('#' + id).append('<tr><td class="text-center"><b>' + (value + 1) + '</b></td><td>' + col1 + '</td><td>' + col2 + '</td><td><b>' + col3 + '</b></td></tr>');
    }
}

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
                res[res.length - 1][1] = '-';
            }
        }
    }
    return [res, tiesBegin, tiesEnd];
}

function getValueAndDelta(value, curVal, prev) {
    str = curVal[1];
    for (val in prev) {
        if (prev[val][0] == curVal[0]) {
            delta = Math.round(100 * (curVal[1] - prev[val][1])) / 100;
            if (delta === 0) {
                str += ' (=)';
            } else if (delta > 0) {
                str += ' (<span class="green">+ ' + delta + '</span>)';
            } else {
                str += ' (<span class="red">- ' + -delta + '</span>)';
            }
        }
    }
    return str;
}

function updateTableR(values, id) {
    dataPrev = getRanks(values.prev)[0];
    ranks = getRanks(values.cur);
    dataCur = ranks[0];
    var col1, col2, col3, delta;
    for (var value = 0; value < values.cur.length; value++) {
        if (isDeleted(values.cur[value])) { // Don't register variation for [deleted]
            col3 = 'N/A';
        } else {
            delta = '';
            for (val in dataPrev) {
                if (dataPrev[val][0] == values.cur[value][0]) {
                    delta = dataPrev[val][1] - dataCur[value][1];
                    break;
                }
            }
            if (delta === '') {
                col3 = 'New';
            } else if (delta === 0) {
                col3 = '=';
            } else if (delta > 0) {
                col3 = '<span class="green">+ ' + delta + '</span>';
            } else {
                col3 = '<span class="red">- ' + -delta + '</span>';
            }
        }
        var curCol = 2;
        col1 = values.cur[value][0];
        col2 = getValueAndDelta(value, values.cur[value], values.prev);
        while (curCol < values.cur[value].length) { // Append remaining columns if necessary
            col2 += '</td><td>' + values.cur[value][curCol];
            curCol++;
        }
        border = ' class="inter-border ';
        if (~ranks[1].indexOf(value + 1)) {
            border += 'double-border-top ';
        }
        if (~ranks[2].indexOf(value + 1)) {
            border += 'double-border-bottom';
        }
        border += '"';
        if (col1 !== '[deleted]') {
            if (!~id.indexOf('-nolink')) {
                col1 = '<a href="http://reddit.com/u/' + col1 + '">' + col1 + '</a>';
            }
        } else {
            col1 = 'Total for [deleted] users (not updated retroactively)';
        }
        $('#' + id).append('<tr' + border + '><td class="text-center"><b>' + (~border.indexOf('top') ? dataCur[value][1] : '') + '</b></td><td>' + col1 + '</td><td>' + col2 + '</td><td><b>' + col3 + '</b></td></tr>')
    }
}

function tooltip(id, title, show) {
    show = (typeof show === 'undefined' ? true : show);
    $('#' + id).attr('title', title).tooltip('fixTitle');
    if (show) {
        $('#' + id).tooltip('show');
    }
}

function centerModal() {
    $(this).show();
    var $dialog = $(this).find('.modal-dialog').css('margin-top', offset);;
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css('margin-top', offset);
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
