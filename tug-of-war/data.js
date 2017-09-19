data = {
    charts: {
        historical: "https://i.imgur.com/Th3cETl.png",
        temporal: "https://i.imgur.com/ABoe25J.png",
        frequency: "https://i.imgur.com/8N5c3Ac.png",
        getsLength: "https://i.imgur.com/ea3XRjt.png",
        weekly: "https://i.imgur.com/dkZ7cco.png",
        replyTime: "https://i.imgur.com/N4aa2Xq.png"
    },
    comment: "- We have never stayed above zero for so long\n\
              - The count has gone below 2000 for the first time in over two months\n\
              - The count is still heading towards zero, with little to no resistance",
    counts: {
        total:       { cur: 117329,  prev: 116595  },
        min:         { cur: -4043,   prev: -4043   },
        max:         { cur: 4084,    prev: 4084    },
        range:       { cur: 8127,    prev: 8127    },
        ofMaxRange:  14.44,
        avg:         { cur: 125.74, prev: 112.7    },
        med:         { cur: 61,     prev: 57       },
        mostCommon:  {
            cur:  [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]],
            prev: [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]]
        },
        leastCommon: {
            cur:  [[-4043, 1], ["1084 and many numbers in the 1086-2000 range", 1], [4084, 1]],
            prev: [[-4043, 1], ["1084 and many numbers in the 1086-2399 range", 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 683.03, prev: 673.12, unit: "day"    },
        fastest: { cur: 1,      prev: 1,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.38,   prev: 8.31,   unit: "minute" },
        med:     { cur: 14,     prev: 14,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 68069,  prev: 67335  },
        neg:           { cur: 48136,  prev: 48136  },
        posPercent:    { cur: 58.02,  prev: 57.75  },
        negPercent:    { cur: 41.03,  prev: 41.25  },
        zeros:         { cur: 1124,   prev: 1124   },
        ofZero:        { cur: 104.39, prev: 103.73 },
        maxPosStreak:  { cur: 20875,  prev: 19329  },
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
        avgStreak:     { cur: 2.9099,   prev: 2.9048,   precision: 4 },
        posNegAsym:    { cur: 0.000191, prev: 0.000192, precision: 6 }
    },
    gets: {
        count:      { cur: 245,    prev: 243   },
        avg:        { cur: 16.33,  prev: -0.82 },
        med:        { cur: 0,      prev: 0     },
        mostCommon: {
            cur:  [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]],
            prev: [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]]
        },
        leastCommon: {
            cur:  [[-4000, 1], [1200, 1], [1400, 1], [1600, 1], [1800, 1]],
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
        avgTime:    { cur: 67.18,  prev: 66.76, unit: "hour" },
        medTime:    { cur: 23.21,  prev: 23.21, unit: "hour" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4144, prev: 4144 },
            begin: -200, end: 0
        },
        avgLen:     { cur: 478.89, prev: 479.81 },
        medLen:     { cur: 350,    prev: 350    }
    },
    getSign: {
        pos:           { cur: 115,   prev: 113   },
        neg:           { cur: 96,    prev: 96    },
        posPercent:    { cur: 46.94, prev: 46.5  },
        negPercent:    { cur: 39.18, prev: 39.51 },
        zeros:         { cur: 34,    prev: 34    },
        ofZero:        { cur: 7.21,  prev: 7.15  },
        maxPosStreak:  { cur: 25,    prev: 25    }, // TODO: Check
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
        count: { cur: 1275,  prev: 1262  },
        avg:   { cur: 92.02, prev: 92.39 },
        med:   { cur: 3,     prev: 3     },
        top20: {
            cur: [['TheNitromeFan', 9880], ['gordonpt8', 5775], ['smarvin6689', 5483], ['davidjl123', 4799], ['Urbul', 4553], ['Smartstocks', 3976], ['pie3636', 3822], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['randomusername123458', 3399], ['DemonBurritoCat', 3337], ['[deleted]', 2485], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1494], ['Adinida', 1374], ['kawzeg', 1283], ['abplows', 1245], ['RandomRedditorWithNo', 1228]],
            prev: [["TheNitromeFan", 9824], ["gordonpt8", 5775], ["smarvin6689", 5390], ["davidjl123", 4794], ["Urbul", 4511], ["Smartstocks", 3976], ["pie3636", 3668], ["Sharpeye468", 3585], ["xHOCKEYx12", 3473], ["randomusername123458", 3399], ["DemonBurritoCat", 3276], ["[deleted]", 2485], ["KingCaspianX", 2174], ["Decap_", 2061], ["JordanLadd", 1847], ["SolidGoldMagikarp", 1698], ["VitaminB16", 1491], ["Adinida", 1374], ["kawzeg", 1283], ["abplows", 1245], ["RandomRedditorWithNo", 1228]]
        }
    },
    top100: {
        cur: [['TheNitromeFan', 9880], ['gordonpt8', 5775], ['smarvin6689', 5483], ['davidjl123', 4799], ['Urbul', 4553], ['Smartstocks', 3976], ['pie3636', 3822], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['randomusername123458', 3399], ['DemonBurritoCat', 3337], ['[deleted]', 2485], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1494], ['Adinida', 1374], ['kawzeg', 1283], ['abplows', 1245], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['skizfrenik_syco', 1143], ['TehVulpez', 1134], ['origamimissile', 953], ['Pookah', 930], ['piyushsharma301', 917], ['kdiuro13', 815], ['QuestoGuy', 795], ['HermioneReynaChase', 770], ['username111112222233', 724], ['CarbonSpectre', 639], ['qwertylool', 619], ['Robert_Schaosid', 606], ['Removedpixel', 579], ['Chiafriend12', 569], ['yodaisdancing', 541], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['False1512', 500], ['The_Nepenthe', 491], ['TOP_20', 488], ['Syrrim', 436], ['Jacriton', 426], ['poon-is-food', 420], ['Chintam', 412], ['Ynax', 411], ['co3_carbonate', 402], ['a-username-for-me', 394], ['rideride', 376], ['cfcgtyk', 347], ['TheBravestFart', 343], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['orangey10', 313], ['Hedix1', 309], ['SaraKmado', 290], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['about929', 274], ['loriirubiio', 267], ['hackerboy777', 260], ['Nes370', 259], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['TheFeathers', 243], ['Jondom_', 241], ['4everNdeavor', 241], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['Omegamanthethird', 217], ['HELP_im_not_original', 214], ['Mindlesssavage', 212], ['shortroundfarm', 207], ['Sam5253', 205], ['BoggleWogglez', 202], ['thatdometho', 202], ['Gocountgrainsofsand', 202], ['VMorkva', 200], ['Elegance200', 198], ['M_McFly', 193], ['limited-papertrail', 185], ['ermahgerd_cats', 183], ['Jzkqm', 177], ['enceladus47', 174], ['EinsteinReplica', 168], ['Lucwousin', 167], ['amazingpikachu_38', 163], ['slugmaboy8', 161], ['DruidNick', 161]],
        prev: [['TheNitromeFan', 9824], ['gordonpt8', 5775], ['smarvin6689', 5390], ['davidjl123', 4797], ['Urbul', 4511], ['Smartstocks', 3976], ['pie3636', 3668], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['randomusername123458', 3399], ['DemonBurritoCat', 3276], ['[deleted]', 2485], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1491], ['Adinida', 1374], ['kawzeg', 1283], ['abplows', 1245], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['skizfrenik_syco', 1143], ['TehVulpez', 1134], ['origamimissile', 953], ['Pookah', 930], ['piyushsharma301', 917], ['QuestoGuy', 795], ['HermioneReynaChase', 770], ['kdiuro13', 765], ['username111112222233', 724], ['CarbonSpectre', 639], ['qwertylool', 619], ['Robert_Schaosid', 606], ['Removedpixel', 579], ['Chiafriend12', 569], ['yodaisdancing', 541], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['False1512', 500], ['The_Nepenthe', 491], ['TOP_20', 488], ['Syrrim', 436], ['Jacriton', 426], ['poon-is-food', 420], ['Ynax', 411], ['Chintam', 410], ['co3_carbonate', 402], ['a-username-for-me', 394], ['rideride', 376], ['TheBravestFart', 343], ['Weekndr', 340], ['NubCaeks', 339], ['rschaosid', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['orangey10', 313], ['Hedix1', 309], ['cfcgtyk', 290], ['SaraKmado', 290], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['about929', 270], ['loriirubiio', 267], ['hackerboy777', 260], ['Nes370', 259], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['TheFeathers', 243], ['Jondom_', 241], ['4everNdeavor', 241], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['Omegamanthethird', 217], ['HELP_im_not_original', 214], ['shortroundfarm', 207], ['Sam5253', 205], ['thatdometho', 202], ['Gocountgrainsofsand', 202], ['BoggleWogglez', 202], ['VMorkva', 200], ['Elegance200', 198], ['M_McFly', 193], ['Mindlesssavage', 189], ['limited-papertrail', 185], ['ermahgerd_cats', 183], ['Jzkqm', 177], ['enceladus47', 174], ['EinsteinReplica', 168], ['Lucwousin', 167], ['amazingpikachu_38', 163], ['DruidNick', 161], ['slugmaboy8', 161]]
    },
    deletedCounts: { cur: 534, prev: 534 },
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
