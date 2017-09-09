data = {
    charts: {
        historical: "https://i.imgur.com/oDwHqf3.png",
        temporal: "https://i.imgur.com/t6Hcsd2.png",
        frequency: "https://i.imgur.com/HQp8eX9.png",
        getsLength: "https://i.imgur.com/MMIWvq5.png",
        weekly: "https://i.imgur.com/CJxkCjo.png",
        replyTime: "https://i.imgur.com/VJbGAmO.png"
    },
    comment: "- We have never stayed above zero for so long\n\
              - The count has gone below 2600 for the first time in over two months\n\
              - It seems that the count is currently heading back to zero at a relatively fast pace",
    counts: {
        total:       { cur: 116595,  prev: 115783  },
        min:         { cur: -4043,   prev: -4043   },
        max:         { cur: 4084,    prev: 4084    },
        range:       { cur: 8127,    prev: 8127    },
        ofMaxRange:  14.35,
        avg:         { cur: 112.7,  prev: 94.56    },
        med:         { cur: 57,     prev: 53       },
        mostCommon:  {
            cur:  [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]],
            prev: [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]]
        },
        leastCommon: {
            cur:  [[-4043, 1], ["1084 and many numbers in the 1086-2399 range", 1], [4084, 1]],
            prev: [[-4043, 1], ["1084 and many numbers in the 1086-2571 range", 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 673.12, prev: 664.78, unit: "day"    },
        fastest: { cur: 1,      prev: 1,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.31,   prev: 8.27,   unit: "minute" },
        med:     { cur: 14,     prev: 14,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 67335,  prev: 66523  },
        neg:           { cur: 48136,  prev: 48136  },
        posPercent:    { cur: 57.75,  prev: 57.45  },
        negPercent:    { cur: 41.28,  prev: 41.57  },
        zeros:         { cur: 1124,   prev: 1124   },
        ofZero:        { cur: 103.73, prev: 103.01 },
        maxPosStreak:  { cur: 19329,  prev: 15181  },
        maxNegStreak:  { cur: 16155,  prev: 16155  },
        maxUpStreak:   {
            length:  { cur: 1129,   prev: 1129  },
            percent: { cur: 13.89,  prev: 13.89 },
            begin: -3753, end: -2624
        },
        maxDownStreak: {
            length:  { cur: 571,    prev: 571   },
            percent: { cur: 7.03,   prev: 7.03  },
            begin: 227, end: -344
        },
        avgStreak:     { cur: 2.9048,   prev: 2.8945,   precision: 4 },
        posNegAsym:    { cur: 0.000192, prev: 0.000191, precision: 6 }
    },
    gets: {
        count:      { cur: 243,    prev: 240 },
        avg:        { cur: -0.82,  prev: -33.33 },
        med:        { cur: 0,      prev: 0 },
        mostCommon: {
            cur:  [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]],
            prev: [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]]
        },
        leastCommon: {
            cur:  [[-4000, 1], ["1200 and most gets in the 1200-2400 range", 1]],
            prev: [[-4000, 1], ["1200 and most gets in the 1200-2400 range", 1]]
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
        avgTime:    { cur: 66.76,  prev: 66.76, unit: "hour" },
        medTime:    { cur: 23.21,  prev: 23.13, unit: "hour" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4144, prev: 4144 },
            begin: -200, end: 0
        },
        avgLen:     { cur: 479.81, prev: 482.43 },
        medLen:     { cur: 350,    prev: 352 }
    },
    getSign: {
        pos:           { cur: 113,   prev: 110   },
        neg:           { cur: 96,    prev: 96    },
        posPercent:    { cur: 46.5,  prev: 45.83 },
        negPercent:    { cur: 39.51, prev: 40.00 },
        zeros:         { cur: 34,    prev: 34    },
        ofZero:        { cur: 7.15,  prev: 7.06  },
        maxPosStreak:  { cur: 25,    prev: 25    },
        maxNegStreak:  { cur: 53,    prev: 53    },
    },
    oneStalemates: {
        cur:  [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1731, 152], [-1, 110], [3527, 101], [0, 100], [3528, 95]],
        prev: [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1731, 152], [-1, 110], [3527, 101], [0, 100], [3528, 95]]
    },
    twoStalemates: {
        cur:  [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129], [203, 202, 120]],
        prev: [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129], [203, 202, 120]]
    },
    users: {
        count: { cur: 1262,  prev: 1254  },
        avg:   { cur: 92.39, prev: 92.33 },
        med:   { cur: 3,     prev: 3     },
        top20: {
            cur: [["TheNitromeFan", 9824], ["gordonpt8", 5775], ["smarvin6689", 5390], ["davidjl123", 4794], ["Urbul", 4511], ["Smartstocks", 3976], ["pie3636", 3668], ["Sharpeye468", 3585], ["xHOCKEYx12", 3473], ["randomusername123458", 3399], ["DemonBurritoCat", 3276], ["[deleted]", 2485], ["KingCaspianX", 2174], ["Decap_", 2061], ["JordanLadd", 1847], ["SolidGoldMagikarp", 1698], ["VitaminB16", 1491], ["Adinida", 1374], ["kawzeg", 1283], ["abplows", 1245], ["RandomRedditorWithNo", 1228]],
            prev: [["TheNitromeFan", 9637], ["gordonpt8", 5775], ["smarvin6689", 5330], ["davidjl123", 4793], ["Urbul", 4471], ["Smartstocks", 3976], ["Sharpeye468", 3585], ["xHOCKEYx12", 3473], ["randomusername123458", 3399], ["pie3636", 3392], ["DemonBurritoCat", 3169], ["[deleted]", 2481], ["KingCaspianX", 2174], ["Decap_", 2061], ["JordanLadd", 1847], ["SolidGoldMagikarp", 1698], ["VitaminB16", 1491], ["Adinida", 1374], ["kawzeg", 1283], ["abplows", 1245], ["RandomRedditorWithNo", 1228]]
        }
    },
    deletedCounts: { cur: 534, prev: 533 },
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
