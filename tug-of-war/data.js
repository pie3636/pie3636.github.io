data = {
    charts: {
        historical: "https://i.imgur.com/DpZ3ntQ.png",
        temporal: "https://i.imgur.com/R2y0mYg.png",
        frequency: "https://i.imgur.com/J72w7fO.png",
        getsLength: "https://i.imgur.com/5jZw180.png",
        weekly: "https://i.imgur.com/CU8pkJ1.png",
        replyTime: "https://i.imgur.com/5cYXEUD.png"
    },
    comment: "- We have never stayed above zero for so long\n\
              - The count has gone below 1600 for the first time in three months\n\
              - The count is still heading towards zero, with little to no resistance\n\
              - New stalemate records have been established by <a href='http://reddit.com/u/kdiuro13'><b>/u/kdiuro13</b></a> and <a href='http://reddit.com/u/WellHeresMyFourthAcc'><b>/u/WellHeresMyFourthAcc</b></a>",
    counts: {
        total:       { cur: 118487,  prev: 117329  },
        min:         { cur: -4043,   prev: -4043   },
        max:         { cur: 4084,    prev: 4084    },
        range:       { cur: 8127,    prev: 8127    },
        ofMaxRange:  14.58,
        avg:         { cur: 142.12, prev: 125.74   },
        med:         { cur: 68,     prev: 61       },
        mostCommon:  {
            cur:  [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]],
            prev: [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]]
        },
        leastCommon: {
            cur:  [[-4043, 1], ["1084 and many numbers in the 1086-1599 range", 1], [4084, 1]],
            prev: [[-4043, 1], ["1084 and many numbers in the 1086-2000 range", 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 686.86, prev: 683.03, unit: "day"    },
        fastest: { cur: 1,      prev: 1,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.35,   prev: 8.38,   unit: "minute" },
        med:     { cur: 14,     prev: 14,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 69227,  prev: 68069  },
        neg:           { cur: 48136,  prev: 48136  },
        posPercent:    { cur: 58.43,  prev: 58.02  },
        negPercent:    { cur: 40.63,  prev: 41.03  },
        zeros:         { cur: 1124,   prev: 1124   },
        ofZero:        { cur: 105.42, prev: 104.39 },
        maxPosStreak:  { cur: 22033,  prev: 20875  },
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
        avgStreak:     { cur: 2.8957,   prev: 2.9099,   precision: 4 },
        posNegAsym:    { cur: 0.000189, prev: 0.000191, precision: 6 }
    },
    gets: {
        count:      { cur: 247,    prev: 245   },
        avg:        { cur: 29.96,  prev: 16.33 },
        med:        { cur: 0,      prev: 0     },
        mostCommon: {
            cur:  [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]],
            prev: [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]]
        },
        leastCommon: {
            cur:  [[-4000, 1], [1200, 1], [1400, 1], [4000, 1]],
            prev: [[-4000, 1], [1200, 1], [1400, 1], [4, 1], [1800, 1]]
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
        avgTime:    { cur: 67.01,  prev: 67.18, unit: "hour" },
        medTime:    { cur: 23.26,  prev: 23.21, unit: "hour" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4144, prev: 4144 },
            begin: -200, end: 0
        },
        avgLen:     { cur: 479.7, prev: 478.89 },
        medLen:     { cur: 350,   prev: 350    }
    },
    getSign: {
        pos:           { cur: 117,   prev: 115   },
        neg:           { cur: 96,    prev: 96    },
        posPercent:    { cur: 47.37, prev: 46.94 },
        negPercent:    { cur: 38.87, prev: 39.18 },
        zeros:         { cur: 34,    prev: 34    },
        ofZero:        { cur: 7.26,  prev: 7.21  },
        maxPosStreak:  { cur: 49,    prev: 25    },
        maxNegStreak:  { cur: 53,    prev: 53    },
    },
    oneStalemates: {
        cur:  [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1730, 152], [1799, 146], [1798, 145], [-1, 110], [3527, 101]],
        prev: [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1730, 152], [-1, 110], [3527, 101], [0, 100], [3528, 95]]
    },
    twoStalemates: {
        cur:  [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [1799, 1798, 290], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129]],
        prev: [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129], [203, 202, 120]]
    },
    users: {
        count: { cur: 1279,  prev: 1275  },
        avg:   { cur: 92.64, prev: 92.02 },
        med:   { cur: 3,     prev: 3     },
        top20: {
            cur: [['TheNitromeFan', 9919], ['gordonpt8', 5775], ['smarvin6689', 5534], ['davidjl123', 4802], ['Urbul', 4689], ['Smartstocks', 3976], ['pie3636', 3894], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['randomusername123458', 3399], ['DemonBurritoCat', 3387], ['[deleted]', 2488], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1494], ['Adinida', 1374], ['kawzeg', 1283], ['abplows', 1245], ['RandomRedditorWithNo', 1228]],
            prev: [['TheNitromeFan', 9880], ['gordonpt8', 5775], ['smarvin6689', 5483], ['davidjl123', 4799], ['Urbul', 4553], ['Smartstocks', 3976], ['pie3636', 3822], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['randomusername123458', 3399], ['DemonBurritoCat', 3337], ['[deleted]', 2485], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1494], ['Adinida', 1374], ['kawzeg', 1283], ['abplows', 1245], ['RandomRedditorWithNo', 1228]]
        },
        topGets: {
            threshold: 2,
            cur: [['TheNitromeFan', 28], ['davidjl123', 22], ['Sharpeye468', 19], ['DemonBurritoCat', 9], ['gordonpt8', 8], ['xHOCKEYx12', 8], ['pie3636', 8], ['smarvin6689', 8], ['Smartstocks', 7], ['randomusername123458', 7], ['KingCaspianX', 7], ['Urbul', 6], ['Adinida', 5], ['origamimissile', 5], ['kawzeg', 5], ['Decap_', 4], ['JordanLadd', 4], ['skizfrenik_syco', 3], ['False1512', 3], ['co3_carbonate', 3], ['kdiuro13', 3], ['HermioneReynaChase', 3], ['VitaminB16', 2], ['hackerboy777', 2], ['cfcgtyk', 2], ['Hedix1', 2], ['qwertylool', 2], ['SolidGoldMagikarp', 2], ['Robert_Schaosid', 2], ['TehVulpez', 2], ['lazersmoke', 2], ['poltory', 2], ['UnsuccessfulAtLife', 2], ['piyushsharma301', 2]],
            prev: [['TheNitromeFan', 28], ['davidjl123', 22], ['Sharpeye468', 19], ['DemonBurritoCat', 9], ['gordonpt8', 8], ['xHOCKEYx12', 8], ['pie3636', 8], ['smarvin6689', 8], ['Smartstocks', 7], ['randomusername123458', 7], ['KingCaspianX', 7], ['Urbul', 6], ['Adinida', 5], ['origamimissile', 5], ['kawzeg', 5], ['Decap_', 4], ['JordanLadd', 4], ['skizfrenik_syco', 3], ['False1512', 3], ['co3_carbonate', 3], ['kdiuro13', 3], ['HermioneReynaChase', 3], ['VitaminB16', 2], ['hackerboy777', 2], ['cfcgtyk', 2], ['Hedix1', 2], ['qwertylool', 2], ['SolidGoldMagikarp', 2], ['Robert_Schaosid', 2], ['TehVulpez', 2], ['lazersmoke', 2], ['poltory', 2], ['UnsuccessfulAtLife', 2], ['piyushsharma301', 2]]
        },
        topAssists: {
            threshold: 2,
            cur: [['TheNitromeFan', 21], ['davidjl123', 16], ['smarvin6689', 14], ['randomusername123458', 12], ['gordonpt8', 11], ['Smartstocks', 10], ['Sharpeye468', 10], ['Adinida', 8], ['Urbul', 8], ['xHOCKEYx12', 6], ['DemonBurritoCat', 6], ['RandomRedditorWithNo', 6], ['VitaminB16', 6], ['SolidGoldMagikarp', 6], ['pie3636', 6], ['HermioneReynaChase', 5], ['username111112222233', 5], ['piyushsharma301', 4], ['JordanLadd', 4], ['KingCaspianX', 4], ['yodaisdancing', 3], ['[deleted]', 3], ['pixiestar1', 2], ['loriirubiio', 2], ['NubCaeks', 2], ['torncolours', 2], ['Jacriton', 2], ['supersammy00', 2], ['poon-is-food', 2], ['Robert_Schaosid', 2], ['xMeowzerz', 2], ['abplows', 2], ['Saltbearer', 2], ['4everNdeavor', 2], ['cfcgtyk', 2]],
            prev: [['TheNitromeFan', 21], ['davidjl123', 16], ['smarvin6689', 14], ['randomusername123458', 12], ['gordonpt8', 11], ['Smartstocks', 10], ['Sharpeye468', 10], ['Adinida', 8], ['Urbul', 8], ['xHOCKEYx12', 6], ['DemonBurritoCat', 6], ['RandomRedditorWithNo', 6], ['VitaminB16', 6], ['SolidGoldMagikarp', 6], ['pie3636', 6], ['HermioneReynaChase', 5], ['username111112222233', 5], ['piyushsharma301', 4], ['JordanLadd', 4], ['KingCaspianX', 4], ['yodaisdancing', 3], ['[deleted]', 3], ['pixiestar1', 2], ['loriirubiio', 2], ['NubCaeks', 2], ['torncolours', 2], ['Jacriton', 2], ['supersammy00', 2], ['poon-is-food', 2], ['Robert_Schaosid', 2], ['xMeowzerz', 2], ['abplows', 2], ['Saltbearer', 2], ['4everNdeavor', 2], ['cfcgtyk', 2]]
        },
        fastest: {
            threshold: 50,
            cur: [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['curtdammit', 19.33, 81], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['a368', 31.11, 91], ['TheFeathers', 31.61, 243], ['IAmNateHello', 34.63, 112], ['DjMidget', 35.03, 130], ['Audict', 37.15, 131], ['MarchingTrombonist', 39.9, 107], ['erskw', 43.23, 122], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['Hedix1', 49.17, 309], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['InterdimensionalMan', 55.63, 57], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 64.86, 202], ['rideride', 74.65, 376], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['Thunderclanawe', 89.14, 50], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['mastersword83', 101.5, 64], ['Smartstocks', 102.58, 3976], ['StarmanPWN', 104.0, 50], ['tkim32', 105.53, 104], ['PBnSpots', 105.74, 74], ['TOP_20', 106.1, 488], ['yodaisdancing', 108.01, 541], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['Furyful_Fawful', 116.25, 232], ['amazingpikachu_38', 119.56, 163], ['Sharpeye468', 123.6, 3585], ['Zeusky', 124.43, 63], ['Jacriton', 131.36, 426], ['poon-is-food', 132.47, 420], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['VIOLENT_POOP', 141.62, 252], ['Robert_Schaosid', 145.77, 606], ['WellHeresMyFourthAcc', 148.07, 351], ['iSandpeople', 153.31, 225], ['limited-papertrail', 156.57, 185], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Chiafriend12', 164.33, 569], ['Sentenceh', 165.47, 68], ['Sam5253', 168.26, 205], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['davidjl123', 180.63, 4802], ['skatterbug', 181.96, 71], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['tonyxyou', 196.32, 145], ['MegaUltraSonic', 196.96, 82], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['Imbc', 209.52, 95], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['alkazam', 218.36, 114], ['[deleted]', 219.25, 2488], ['Jzkqm', 226.88, 177], ['BoggleWogglez', 232.61, 202], ['cupofmilo', 233.13, 109], ['Aldeberon', 236.65, 157], ['xMeowzerz', 244.14, 328], ['padiwik', 248.16, 75], ['Chintam', 254.78, 417], ['DruidNick', 264.07, 161], ['pixiestar1', 268.61, 250], ['linaeap', 268.84, 64], ['gordonpt8', 277.23, 5775], ['VitaminB16', 278.28, 1494], ['helpsupportreddit', 279.11, 63], ['Unknow3n', 281.49, 55], ['Aarex2104', 291.14, 320]],
            prev: [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['curtdammit', 19.33, 81], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['a368', 31.11, 91], ['TheFeathers', 31.61, 243], ['IAmNateHello', 34.63, 112], ['DjMidget', 35.03, 130], ['Audict', 37.15, 131], ['MarchingTrombonist', 39.9, 107], ['erskw', 43.23, 122], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['Hedix1', 49.17, 309], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['InterdimensionalMan', 55.63, 57], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 64.86, 202], ['rideride', 74.65, 376], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['Thunderclanawe', 89.14, 50], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['mastersword83', 101.5, 64], ['Smartstocks', 102.58, 3976], ['StarmanPWN', 104.0, 50], ['tkim32', 105.53, 104], ['PBnSpots', 105.74, 74], ['TOP_20', 106.1, 488], ['yodaisdancing', 108.01, 541], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['Furyful_Fawful', 116.25, 232], ['amazingpikachu_38', 119.56, 163], ['Sharpeye468', 123.6, 3585], ['Zeusky', 124.43, 63], ['Jacriton', 131.36, 426], ['poon-is-food', 132.47, 420], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['VIOLENT_POOP', 141.62, 252], ['Robert_Schaosid', 145.77, 606], ['WellHeresMyFourthAcc', 148.07, 351], ['iSandpeople', 153.31, 225], ['limited-papertrail', 156.57, 185], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Chiafriend12', 164.33, 569], ['Sentenceh', 165.47, 68], ['Sam5253', 168.26, 205], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['davidjl123', 180.63, 4802], ['skatterbug', 181.96, 71], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['tonyxyou', 196.32, 145], ['MegaUltraSonic', 196.96, 82], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['Imbc', 209.52, 95], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['alkazam', 218.36, 114], ['[deleted]', 219.25, 2488], ['Jzkqm', 226.88, 177], ['BoggleWogglez', 232.61, 202], ['cupofmilo', 233.13, 109], ['Aldeberon', 236.65, 157], ['xMeowzerz', 244.14, 328], ['padiwik', 248.16, 75], ['Chintam', 254.78, 417], ['DruidNick', 264.07, 161], ['pixiestar1', 268.61, 250], ['linaeap', 268.84, 64], ['gordonpt8', 277.23, 5775], ['VitaminB16', 278.28, 1494], ['helpsupportreddit', 279.11, 63], ['Unknow3n', 281.49, 55], ['Aarex2104', 291.14, 320]]
        }
    },
    top100: {
        cur: [['TheNitromeFan', 9919], ['gordonpt8', 5775], ['smarvin6689', 5534], ['davidjl123', 4802], ['Urbul', 4689], ['Smartstocks', 3976], ['pie3636', 3894], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['randomusername123458', 3399], ['DemonBurritoCat', 3387], ['[deleted]', 2488], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1494], ['Adinida', 1374], ['kawzeg', 1283], ['abplows', 1245], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['kdiuro13', 1170], ['skizfrenik_syco', 1143], ['TehVulpez', 1134], ['origamimissile', 953], ['Pookah', 930], ['piyushsharma301', 917], ['QuestoGuy', 795], ['HermioneReynaChase', 770], ['username111112222233', 724], ['CarbonSpectre', 640], ['qwertylool', 619], ['Robert_Schaosid', 606], ['Removedpixel', 579], ['Chiafriend12', 569], ['yodaisdancing', 541], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['False1512', 500], ['The_Nepenthe', 491], ['TOP_20', 488], ['Syrrim', 436], ['Jacriton', 426], ['poon-is-food', 420], ['Chintam', 417], ['Ynax', 411], ['co3_carbonate', 402], ['a-username-for-me', 394], ['cfcgtyk', 389], ['rideride', 376], ['WellHeresMyFourthAcc', 351], ['TheBravestFart', 343], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['orangey10', 313], ['zotc', 313], ['Hedix1', 309], ['SaraKmado', 290], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['about929', 274], ['loriirubiio', 267], ['hackerboy777', 260], ['Nes370', 259], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['TheFeathers', 243], ['4everNdeavor', 241], ['Jondom_', 241], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['Omegamanthethird', 217], ['HELP_im_not_original', 214], ['Mindlesssavage', 212], ['shortroundfarm', 207], ['Sam5253', 205], ['BoggleWogglez', 202], ['thatdometho', 202], ['Gocountgrainsofsand', 202], ['VMorkva', 200], ['Elegance200', 198], ['M_McFly', 193], ['limited-papertrail', 185], ['ermahgerd_cats', 183], ['Jzkqm', 177], ['enceladus47', 174], ['EinsteinReplica', 168], ['Lucwousin', 167], ['amazingpikachu_38', 163], ['slugmaboy8', 161]],
        prev: [['TheNitromeFan', 9880], ['gordonpt8', 5775], ['smarvin6689', 5483], ['davidjl123', 4799], ['Urbul', 4553], ['Smartstocks', 3976], ['pie3636', 3822], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['randomusername123458', 3399], ['DemonBurritoCat', 3337], ['[deleted]', 2485], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1494], ['Adinida', 1374], ['kawzeg', 1283], ['abplows', 1245], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['skizfrenik_syco', 1143], ['TehVulpez', 1134], ['origamimissile', 953], ['Pookah', 930], ['piyushsharma301', 917], ['kdiuro13', 815], ['QuestoGuy', 795], ['HermioneReynaChase', 770], ['username111112222233', 724], ['CarbonSpectre', 639], ['qwertylool', 619], ['Robert_Schaosid', 606], ['Removedpixel', 579], ['Chiafriend12', 569], ['yodaisdancing', 541], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['False1512', 500], ['The_Nepenthe', 491], ['TOP_20', 488], ['Syrrim', 436], ['Jacriton', 426], ['poon-is-food', 420], ['Chintam', 412], ['Ynax', 411], ['co3_carbonate', 402], ['a-username-for-me', 394], ['rideride', 376], ['cfcgtyk', 347], ['TheBravestFart', 343], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['orangey10', 313], ['Hedix1', 309], ['SaraKmado', 290], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['about929', 274], ['loriirubiio', 267], ['hackerboy777', 260], ['Nes370', 259], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['TheFeathers', 243], ['Jondom_', 241], ['4everNdeavor', 241], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['Omegamanthethird', 217], ['HELP_im_not_original', 214], ['Mindlesssavage', 212], ['shortroundfarm', 207], ['Sam5253', 205], ['BoggleWogglez', 202], ['thatdometho', 202], ['Gocountgrainsofsand', 202], ['VMorkva', 200], ['Elegance200', 198], ['M_McFly', 193], ['limited-papertrail', 185], ['ermahgerd_cats', 183], ['Jzkqm', 177], ['enceladus47', 174], ['EinsteinReplica', 168], ['Lucwousin', 167], ['amazingpikachu_38', 163], ['slugmaboy8', 161], ['DruidNick', 161]]
    },
    deletedCounts: { cur: 535, prev: 534 },
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
