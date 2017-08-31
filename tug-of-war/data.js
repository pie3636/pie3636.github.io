data = {
    charts: {
        historical: "http://i.imgur.com/QWVbd3G.png",
        temporal: "http://i.imgur.com/WpRsa6x.png",
        frequency: "http://i.imgur.com/uA2u2QM.png",
        getsLength: "http://i.imgur.com/tR1xMQp.png",
        weekly: "http://i.imgur.com/mpV8K3N.png",
        replyTime: "http://i.imgur.com/ff8ncgL.png"
    },
    comment: "- We have never stayed above zero for so long\n\
              - The count has been struggling over 2,900 for more than a month now, however this trend might end soon\n\
              - The Tug of War has gotten back to a standard pace, although the recent issues with Reddit have made it hard to reach low reply times",
    counts: {
        total:       { cur: 115783,  prev: 111635  },
        min:         { cur: -4043,   prev: -4043   },
        max:         { cur: 4084,    prev: 3000    },
        range:       { cur: 8127,    prev: 7043    },
        ofMaxRange:  14.25,
        avg:         { cur: 94.56,  prev: -19.67  },
        med:         { cur: 53,     prev: 35      },
        mostCommon:  {
            cur:  [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]],
            prev: [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]]
        },
        leastCommon: {
            cur:  [[-4043, 1], ["1084 and many numbers in the 1086-2571 range", 1], [4084, 1]],
            prev: [[-4043, 1], ["1084 and many numbers in the 1086-2571 range", 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 664.78, prev: 626.91, unit: "day"    },
        fastest: { cur: 1,      prev: 1,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.27,   prev: 8.09,   unit: "minute" },
        med:     { cur: 14,     prev: 13,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 66523,  prev: 62375 },
        neg:           { cur: 48136,  prev: 48136 },
        posPercent:    { cur: 57.45,  prev: 55.87 },
        negPercent:    { cur: 41.57,  prev: 43.12 },
        zeros:         { cur: 1124,   prev: 1124  },
        ofZero:        { cur: 103.01, prev: 99.32 },
        maxPosStreak:  { cur: 19329,  prev: 15181 },
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
        avgStreak:     { cur: 2.8945,   prev: 2.9292,   precision: 4 },
        posNegAsym:    { cur: 0.000191, prev: 0.002101, precision: 6 }
    },
    oneStalemates: {
        cur:  [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1731, 152], [-1, 110], [3527, 101], [0, 100], [3528, 95]],
        prev: [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1731, 152], [-1, 110], [3527, 101], [0, 100], [3528, 95]]
    },
    twoStalemates: {
        cur:  [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129], [203, 202, 120]],
        prev: [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129], [203, 202, 120]]
    },
    gets: {
        count:      { cur: 240,    prev: 237 },
        avg:        { cur: -33.33, prev: -72.57 },
        med:        { cur: 0,      prev: 0 },
        mostCommon: {
            cur:  [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]],
            prev: [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]]
        },
        leastCommon: {
            cur:  [[-4000, 1], ["1200 and most gets in the 1200-2600 range", 1]],
            prev: [[-4000, 1], ["1200 and most gets in the 1200-2600 range", 1]]
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
        avgTime:    { cur: 66.76,  prev: 63.75, unit: "hour" },
        medTime:    { cur: 23.13,  prev: 22.63, unit: "hour" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4144, prev: 4144 },
            begin: -200, end: 0
        },
        avgLen:     { cur: 482.43, prev: 471.03 },
        medLen:     { cur: 352,    prev: 350 }
    },
    getSign: {
        pos:           { cur: 110,   prev: 107   },
        neg:           { cur: 96,    prev: 96    },
        posPercent:    { cur: 45.83, prev: 45.15 },
        negPercent:    { cur: 40.00, prev: 40.51 },
        zeros:         { cur: 34,    prev: 34    },
        ofZero:        { cur: 7.06,  prev: 6.97  },
        maxPosStreak:  { cur: 25,    prev: 25    },
        maxNegStreak:  { cur: 53,    prev: 53    },
    },
    users: {
        count: { cur: 1254,  prev: 1240  },
        avg:   { cur: 92.33, prev: 91.77 },
        med:   { cur: 3,     prev: 4     },
        top20: {
            cur: [["TheNitromeFan", 9637], ["gordonpt8", 5775], ["smarvin6689", 5330], ["davidjl123", 4793], ["Urbul", 4471], ["Smartstocks", 3976], ["Sharpeye468", 3585], ["xHOCKEYx12", 3473], ["randomusername123458", 3399], ["pie3636", 3392], ["DemonBurritoCat", 3169], ["[deleted]", 2481], ["KingCaspianX", 2174], ["Decap_", 2061], ["JordanLadd", 1847], ["SolidGoldMagikarp", 1698], ["VitaminB16", 1491], ["Adinida", 1374], ["kawzeg", 1283], ["abplows", 1245], ["RandomRedditorWithNo", 1228]],
            prev: [["TheNitromeFan", 9330], ["gordonpt8", 5775], ["smarvin6689", 5288], ["davidjl123", 4791], ["Urbul", 4390], ["Smartstocks", 3976], ["Sharpeye468", 3585], ["xHOCKEYx12", 3473], ["randomusername123458", 3399], ["pie3636", 3185], ["DemonBurritoCat", 2687], ["[deleted]", 2375], ["KingCaspianX", 2174], ["Decap_", 2061], ["JordanLadd", 1847], ["SolidGoldMagikarp", 1671], ["VitaminB16", 1486], ["Adinida", 1374], ["kawzeg", 1283], ["abplows", 1245], ["RandomRedditorWithNo", 1228]]
        }
    },
    deletedCounts: { cur: 533, prev: 525 },
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
            ["https://www.reddit.com/r/counting/comments/6r5367/tug_of_war_3200/dl44sxr/"]
        ]
    }
};
