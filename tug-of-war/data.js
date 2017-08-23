data = {
    charts: {
        historical: "http://i.imgur.com/MBV3pwi.png",
        temporal: "http://i.imgur.com/hMX3MEW.png",
        frequency: "http://i.imgur.com/er9W7Pr.png",
        getsLength: "http://i.imgur.com/tbst7w2.png",
        weekly: "http://i.imgur.com/t4099mN.png"
    },
    comment: "- We have never stayed above zero for so long\n\
              - A new stalemate record has been reached\n\
              - The count has recently been struggling between 3,000 and 3,600\n\
              - After a spike in activity, the main Tug of War thread seems to have become slower. This might be due to the abundance of ToW-like threads popping up",
    counts: {
        total:       { cur: 111635,  prev: 104055  },
        min:         { cur: -4043,   prev: -4043   },
        max:         { cur: 4084,    prev: 3000    },
        range:       { cur: 8127,    prev: 7043    },
        ofMaxRange:  13.74,
        avg:         { cur: -19.67,  prev: -261.89 },
        med:         { cur: 35,      prev: 10      },
        mostCommon:  {
            cur:  [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]],
            prev: [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]]
        },
        leastCommon: {
            cur:  [[-4043, 1], ["1084 and many numbers in the 1084-2900 range", 1], [4084, 1]],
            prev: [[-4043, 1], ["1084 and many numbers in the 1084-2900 range", 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 626.91, prev: 599.76, unit: "day"    },
        fastest: { cur: 1,      prev: 0,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.09,   prev: 8.30,   unit: "minute" },
        med:     { cur: 13,     prev: 13,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 62375,  prev: 54795 },
        neg:           { cur: 48136,  prev: 48136 },
        posPercent:    { cur: 55.87,  prev: 52.66 },
        negPercent:    { cur: 43.12,  prev: 46.26 },
        zeros:         { cur: 1124,   prev: 1124  },
        ofZero:        { cur: 99.32,  prev: 99.32 },
        maxPosStreak:  { cur: 15181,  prev: 7039  },
        maxNegStreak:  { cur: 16155,  prev: 16155 },
        maxUpStreak:   {
            length:  { cur: 1129,   prev: 1129  },
            percent: { cur: 13.89,  prev: 11.75 },
            begin: -3753, end: -2624
        },
        maxDownStreak: {
            length:  { cur: 571,    prev: 571   },
            percent: { cur: 7.03,   prev: 5.95  },
            begin: 227, end: -344
        },
        avgStreak:     { cur: 2.9292,   prev: 2.9776,   precision: 4 },
        posNegAsym:    { cur: 0.002101, prev: 0.000297, precision: 6 }
    },
    oneStalemates: {
        cur:  [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1731, 152], [-1, 110], [3527, 101], [0, 100], [3528, 95]],
        prev: [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1731, 152], [-1, 110], [0, 100], [0, 0], [0, 0]]
    },
    twoStalemates: {
        cur:  [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129], [203, 202, 120]],
        prev: [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [-1, 0, 201], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129], [203, 202, 120], [0, 0, 0]]
    },
    gets: {
        count:      { cur: 237,    prev: 237 },
        avg:        { cur: -72.57, prev: -373.75 },
        med:        { cur: 0,      prev: 0 },
        mostCommon: {
            cur:  [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]],
            prev: [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]]
        },
        leastCommon: {
            cur:  [[-4000, 1], ["1200 and most gets in the 1200-2800 range", 1]],
            prev: [[-4000, 1], ["1200 and most gets in the 1200-2800 range", 1]]
        },
        fastest:    {
            time:  { cur: 9.25,  prev: 9.25,  unit: "minute" },
            begin: -3200, end: -3000
        },
        slowest:    {
            time:  { cur: 33.39, prev: 33.39, unit: "day" },
            begin: 400,
            end:   200
        },
        avgTime:    { cur: 63.75,  prev: 66.31, unit: "hour" },
        medTime:    { cur: 22.63,  prev: 23.25, unit: "hour" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4144, prev: 4144 },
            begin: -200, end: 0
        },
        avgLen:     { cur: 471.03, prev: 477.31 },
        medLen:     { cur: 350,    prev: 352 }
    },
    getSign: {
        pos:           { cur: 107,   prev: 88    },
        neg:           { cur: 96,    prev: 96    },
        posPercent:    { cur: 45.15, prev: 40.37 },
        negPercent:    { cur: 40.51, prev: 44.02 },
        zeros:         { cur: 34,    prev: 34    },
        ofZero:        { cur: 6.97,  prev: 6.97  },
        maxPosStreak:  { cur: 25,    prev: 25    },
        maxNegStreak:  { cur: 53,    prev: 53    },
    },
    users: {
        count: { cur: 1240,  prev: 1240  },
        avg:   { cur: 91.77, prev: 91.77 },
        med:   { cur: 4,     prev: 4     },
        top20: {
            cur: [["TheNitromeFan", 9330], ["gordonpt8", 5775], ["smarvin6689", 5288], ["davidjl123", 4791], ["Urbul", 4390], ["Smartstocks", 3976], ["Sharpeye468", 3585], ["xHOCKEYx12", 3473], ["randomusername123458", 3399], ["pie3636", 3185], ["DemonBurritoCat", 2687], ["[deleted]", 2375], ["KingCaspianX", 2174], ["Decap_", 2061], ["JordanLadd", 1847], ["SolidGoldMagikarp", 1671], ["VitaminB16", 1486], ["Adinida", 1374], ["kawzeg", 1283], ["abplows", 1245], ["RandomRedditorWithNo", 1228]],
            prev: [["TheNitromeFan", 9330], ["gordonpt8", 5775], ["smarvin6689", 5288], ["davidjl123", 4791], ["Urbul", 4390], ["Smartstocks", 3976], ["Sharpeye468", 3585], ["xHOCKEYx12", 3473], ["randomusername123458", 3399], ["pie3636", 3185], ["DemonBurritoCat", 2687], ["[deleted]", 2375], ["KingCaspianX", 2174], ["Decap_", 2061], ["JordanLadd", 1847], ["SolidGoldMagikarp", 1671], ["VitaminB16", 1486], ["Adinida", 1374], ["kawzeg", 1283], ["abplows", 1245], ["RandomRedditorWithNo", 1228]]
        }
    },
    deletedCounts: { cur: 525, prev: 522 },
    forks: {
        cur: 14,
        prev: 14,
        data: [
        ["https://www.reddit.com/r/counting/comments/3st17h/counting_up_to_600_or_down_to_200/cx27pre/"],
        ["https://www.reddit.com/r/counting/comments/401le7/counting_tug_of_war_from_400_also_known_as/cyr8ach/", true],
        ["https://www.reddit.com/r/counting/comments/401le7/counting_tug_of_war_from_400_also_known_as/cyra2k6/"],
        ["https://www.reddit.com/r/counting/comments/4eg74h/tug_of_war_0/d22acpn/"],
        ["https://www.reddit.com/r/counting/comments/4ik5uy/tug_of_war_0/d33s24t/"],
        ["https://www.reddit.com/r/counting/comments/4n8tw7/tug_of_war_200/d49z9xv/"],
        ["https://www.reddit.com/r/counting/comments/4p7rt5/tug_of_war_600/d4r1d34/"],
        ["https://www.reddit.com/r/counting/comments/4udrhp/tug_of_war_200/d5pll5u/"],
        ["https://www.reddit.com/r/counting/comments/4ulp7p/tug_of_war_0/d5seco8/"],
        ["https://www.reddit.com/r/counting/comments/51dazw/tug_of_war_2200/d7eyr4d/"],
        ["https://www.reddit.com/r/counting/comments/5h5xnk/tug_of_war_400/daz3bja/"],
        ["https://www.reddit.com/r/counting/comments/64ew2x/tug_of_war_200/dg2aa2z/"],
        ["https://www.reddit.com/r/counting/comments/69mu14/tug_of_war_1000/dh7xc70/"],
        ["https://www.reddit.com/r/counting/comments/6ndwo2/tug_of_war_3400/dkc24vj/"],
        ["https://www.reddit.com/r/counting/comments/6r5367/tug_of_war_3200/dl44sxr/"]]
    }
};
