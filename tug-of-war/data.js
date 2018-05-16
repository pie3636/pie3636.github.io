data = {
    lastData: "29 Jan 2017",
    lastUpdate: "17 Dec 2017",
    announcement: false,
    charts: {
        historical: "https://i.imgur.com/Xm6ukW3.png",
        temporal: "https://i.imgur.com/JntMIOi.png",
        frequency: "https://i.imgur.com/HfEzbgm.png",
        getsLength: "https://i.imgur.com/PNGhWqQ.png",
        weekly: "https://i.imgur.com/hGtcByU.png",
        replyTime: "https://i.imgur.com/KTRwDvV.png",
        powerUsers: "https://i.imgur.com/zsaS9vK.png"
    },
    comment: "- There are now over 300 ToW threads in total (307 as of the time I wrote this)\n\
              - After the long zero stalemate, the count rapidly went down to -1000. It has since then been dragged up slowly towards zero\n\
              - New stalemate records have been reached at -798, -799, -801 and -802, as well as for those values in pairs\n\
              - The Urbul-smarvin6689 team now has the most counts together\n\
              - We are still gaining ground on the main thread",
    counts: {
        total:       { cur: 142077, prev: 133501  },
        ofMain:      { cur: 142077/2075333*100, prev: 133501/2033198*100, precision: 2 },
        min:         { cur: -4043,  prev: -4043   },
        max:         { cur: 4084,   prev: 4084    },
        range:       { cur: 8127,   prev: 8127    },
        ofMaxRange:  { cur: 17.48,  prev: 16.43   },
        avg:         { cur: 145.56, prev: 179.05  },
        med:         { cur: 65,     prev: 93      },
        mostCommon:  {
            cur:  [[0, 1795], [1, 1262], [-1, 1151], [2, 681], [-1026, 541], [-1027, 523], [3, 514], [-2, 425], [1066, 405], [4, 383]],
            prev: [[0, 1677], [1, 1177], [-1, 1097], [2, 580], [-1026, 539], [-1027, 517], [3, 426], [-2, 414], [1066, 405], [4, 364]]
        },
        leastCommon: {
            cur:  [[-4043, 1], [4084, 1]],
            prev: [[-4043, 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 814.09, prev: 770.92,  unit: "day"    },
        fastest: { cur: 1,      prev: 1,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.25,   prev: 8.32,   unit: "minute" },
        med:     { cur: 15,     prev: 15,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 83745,  prev: 81155  },
        neg:           { cur: 56537,  prev: 50669  },
        posPercent:    { cur: 58.94,  prev: 60.79  },
        negPercent:    { cur: 39.79,  prev: 37.95  },
        zeros:         { cur: 1795,   prev: 1677   },
        ofZero:        { cur: 79.15,  prev: 79.61  },
        maxPosStreak:  { cur: 28615,  prev: 28615  },
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
        avgStreak:     { cur: 2.798,   prev: 2.8224,  precision: 4 },
        posNegAsym:    { cur: -0.0104, prev: -0.0121, precision: 4 }
    },
    gets: {
        count:      { cur: 282,    prev: 267   },
        avg:        { cur: 44.68,  prev: 65.17 },
        med:        { cur: 0,      prev: 0     },
        mostCommon: {
            cur:  [[200, 42], [0, 39], [400, 26], [-200, 25], [-400, 14]],
            prev: [[200, 40], [0, 36], [400, 26], [-200, 22], [-400, 12]]
        },
        leastCommon: {
            cur:  [[-4000, 1], [4000, 1]],
            prev: [[-4000, 1], [4000, 1]]
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
        avgTime:    { cur: 69.53,  prev: 69.56,  unit: "hour" },
        medTime:    { cur: 46.86,  prev: 16.63, unit: "minute" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4284, prev: 4144 },
            begin: 200, end: 0
        },
        avgLen:     { cur: 503.82, prev: 500.00 },
        medLen:     { cur: 356,    prev: 356    },
        lastLen: 24.11
    },
    getSign: {
        pos:           { cur: 135,   prev: 133   },
        neg:           { cur: 108,   prev: 98    },
        posPercent:    { cur: 47.87, prev: 49.84 },
        negPercent:    { cur: 38.3,  prev: 36.7  },
        zeros:         { cur: 39,    prev: 36    },
        ofZero:        { cur: 7.23,  prev: 7.42  },
        maxPosStreak:  { cur: 67,    prev: 61    },
        maxNegStreak:  { cur: 53,    prev: 53    },
        maxUpStreak:   {
            length:  { cur: 14, prev: 14  },
            begin: -2400, end: 400
        },
        maxDownStreak: {
            length:  { cur: 15, prev: 15 },
            begin: 400, end: -2600
        },
        avgStreak:     { cur: 3.1477, prev: 3.1566, precision: 4 },
        posNegAsym:    { cur: -0.0682, prev: 0.0203, precision: 4 }
    },
    oneStalemates: {
        cur:  [[-1026, 499], [-1027, 499], [978, 198], [-1563, 184], [-1564, 183], [-798, 182], [-799, 176], [-801, 163], [-802, 161], [-1731, 157]],
        prev: [[-1026, 499], [-1027, 499], [978, 198], [-1563, 184], [-1564, 183], [-1731, 157], [-1730, 152], [1799, 146], [1798, 145], [977, 129]]
    },
    twoStalemates: {
        cur:  [[-1026, -1027, 998], [-1563, -1564, 367], [-798, -799, 352], [-801, -802, 323], [-1731, -1730, 305], [1799, 1798, 290], [978, 977, 259], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159]],
        prev: [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [1799, 1798, 290], [978, 977, 259], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142]]
    },
    users: {
        count: { cur: 1461,  prev: 1421  },
        avg:   { cur: 97.25, prev: 93.95 },
        med:   { cur: 3,     prev: 3     },
        top20: {
            cur:  [['TheNitromeFan', 15715], ['Urbul', 7211], ['smarvin6689', 6985], ['gordonpt8', 6081], ['davidjl123', 5029], ['pie3636', 5023], ['Smartstocks', 3990], ['Sharpeye468', 3693], ['DemonBurritoCat', 3583], ['xHOCKEYx12', 3474], ['randomusername123458', 3399], ['kdiuro13', 2655], ['[deleted]', 2500], ['KingCaspianX', 2176], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1699], ['VitaminB16', 1681], ['qualw', 1680], ['TehVulpez', 1519], ['abplows', 1501]],
            prev: [['TheNitromeFan', 13411], ['Urbul', 6593], ['smarvin6689', 6571], ['gordonpt8', 6057], ['pie3636', 4988], ['davidjl123', 4838], ['Smartstocks', 3990], ['Sharpeye468', 3693], ['DemonBurritoCat', 3583], ['xHOCKEYx12', 3474], ['randomusername123458', 3399], ['[deleted]', 2499], ['KingCaspianX', 2176], ['Decap_', 2061], ['JordanLadd', 1847], ['kdiuro13', 1736], ['SolidGoldMagikarp', 1699], ['VitaminB16', 1674], ['abplows', 1488], ['TehVulpez', 1378], ['Adinida', 1374]]
        },
        topGets: {
            threshold: 2,
            cur: [['TheNitromeFan', 38], ['davidjl123', 24], ['Sharpeye468', 19], ['smarvin6689', 11], ['pie3636', 11], ['DemonBurritoCat', 9], ['xHOCKEYx12', 8], ['gordonpt8', 8], ['KingCaspianX', 7], ['randomusername123458', 7], ['Smartstocks', 7], ['Urbul', 7], ['kawzeg', 5], ['origamimissile', 5], ['Adinida', 5], ['kdiuro13', 5], ['Decap_', 4], ['JordanLadd', 4], ['skizfrenik_syco', 3], ['co3_carbonate', 3], ['HermioneReynaChase', 3], ['False1512', 3], ['cfcgtyk', 3], ['Robert_Schaosid', 2], ['hackerboy777', 2], ['lazersmoke', 2], ['SolidGoldMagikarp', 2], ['UnsuccessfulAtLife', 2], ['qwertylool', 2], ['piyushsharma301', 2], ['Hedix1', 2], ['poltory', 2], ['TehVulpez', 2], ['VitaminB16', 2], ['TheSilentLink', 2], ['MewDP', 2], ['amazingpikachu_38', 2]],
            prev: [['TheNitromeFan', 33], ['davidjl123', 22], ['Sharpeye468', 19], ['pie3636', 11], ['smarvin6689', 9], ['DemonBurritoCat', 9], ['xHOCKEYx12', 8], ['gordonpt8', 8], ['KingCaspianX', 7], ['randomusername123458', 7], ['Smartstocks', 7], ['Urbul', 7], ['kawzeg', 5], ['origamimissile', 5], ['Adinida', 5], ['Decap_', 4], ['JordanLadd', 4], ['skizfrenik_syco', 3], ['co3_carbonate', 3], ['HermioneReynaChase', 3], ['False1512', 3], ['cfcgtyk', 3], ['kdiuro13', 3], ['Robert_Schaosid', 2], ['hackerboy777', 2], ['lazersmoke', 2], ['SolidGoldMagikarp', 2], ['UnsuccessfulAtLife', 2], ['qwertylool', 2], ['piyushsharma301', 2], ['Hedix1', 2], ['poltory', 2], ['TehVulpez', 2], ['VitaminB16', 2], ['TheSilentLink', 2], ['MewDP', 2], ['amazingpikachu_38', 2]]
        },
        topAssists: {
            threshold: 2,
            cur: [['TheNitromeFan', 34], ['davidjl123', 17], ['smarvin6689', 16], ['randomusername123458', 12], ['gordonpt8', 11], ['Urbul', 11], ['Sharpeye468', 10], ['Smartstocks', 10], ['pie3636', 9], ['Adinida', 8], ['RandomRedditorWithNo', 6], ['xHOCKEYx12', 6], ['SolidGoldMagikarp', 6], ['DemonBurritoCat', 6], ['VitaminB16', 6], ['username111112222233', 5], ['HermioneReynaChase', 5], ['KingCaspianX', 4], ['abplows', 4], ['JordanLadd', 4], ['piyushsharma301', 4], ['[deleted]', 3], ['yodaisdancing', 3], ['kdiuro13', 3], ['qualw', 3], ['supersammy00', 2], ['torncolours', 2], ['Saltbearer', 2], ['loriirubiio', 2], ['poon-is-food', 2], ['Robert_Schaosid', 2], ['4everNdeavor', 2], ['pixiestar1', 2], ['Jacriton', 2], ['xMeowzerz', 2], ['NubCaeks', 2], ['cfcgtyk', 2], ['amazingpikachu_38', 2], ['Antichess', 2]],
            prev: [['TheNitromeFan', 28], ['davidjl123', 16], ['smarvin6689', 15], ['randomusername123458', 12], ['gordonpt8', 11], ['Urbul', 11], ['Sharpeye468', 10], ['Smartstocks', 10], ['pie3636', 9], ['Adinida', 8], ['RandomRedditorWithNo', 6], ['xHOCKEYx12', 6], ['SolidGoldMagikarp', 6], ['DemonBurritoCat', 6], ['VitaminB16', 6], ['username111112222233', 5], ['HermioneReynaChase', 5], ['KingCaspianX', 4], ['abplows', 4], ['JordanLadd', 4], ['piyushsharma301', 4], ['[deleted]', 3], ['yodaisdancing', 3], ['supersammy00', 2], ['torncolours', 2], ['Saltbearer', 2], ['loriirubiio', 2], ['poon-is-food', 2], ['Robert_Schaosid', 2], ['4everNdeavor', 2], ['pixiestar1', 2], ['Jacriton', 2], ['xMeowzerz', 2], ['NubCaeks', 2], ['cfcgtyk', 2], ['amazingpikachu_38', 2]]
        },
        fastest: {
            threshold: 50,
            cur: [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['TheFeathers', 31.61, 243], ['IAmNateHello', 34.63, 112], ['DjMidget', 35.03, 130], ['Audict', 37.15, 131], ['Tessaract2', 39.21, 131], ['MarchingTrombonist', 39.9, 107], ['erskw', 43.23, 122], ['curtdammit', 46.08, 266], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['Hedix1', 49.17, 309], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['InterdimensionalMan', 55.63, 57], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 73.08, 220], ['rideride', 74.65, 376], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['Thunderclanawe', 89.14, 50], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['mastersword83', 101.5, 64], ['Smartstocks', 102.32, 3990], ['StarmanPWN', 104.0, 50], ['PBnSpots', 105.39, 75], ['tkim32', 105.53, 104], ['TOP_20', 106.1, 488], ['a368', 108.0, 102], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['Furyful_Fawful', 116.25, 232], ['Zeusky', 124.43, 63], ['MewDP', 125.75, 288], ['Sharpeye468', 129.57, 3693], ['Jacriton', 131.36, 426], ['poon-is-food', 132.47, 420], ['qualw', 134.59, 1680], ['SuperSeagull01', 135.17, 100], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['VIOLENT_POOP', 141.62, 252], ['Robert_Schaosid', 145.77, 606], ['iSandpeople', 153.31, 225], ['limited-papertrail', 156.57, 185], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Sentenceh', 165.47, 68], ['Sam5253', 168.26, 205], ['Chiafriend12', 168.35, 572], ['WellHeresMyFourthAcc', 169.25, 397], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['skatterbug', 181.96, 71], ['davidjl123', 186.07, 5029], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['tonyxyou', 196.32, 145], ['amazingpikachu_38', 198.79, 901], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['MegaUltraSonic', 205.24, 90], ['Imbc', 209.52, 95], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['[deleted]', 221.31, 2500], ['Jzkqm', 226.88, 177], ['BoggleWogglez', 232.61, 202], ['cupofmilo', 233.13, 109], ['YotasAndPolestars', 234.8, 138], ['yodaisdancing', 236.38, 581], ['Aldeberon', 236.65, 157], ['alkazam', 239.41, 116], ['xMeowzerz', 244.14, 328], ['padiwik', 248.16, 75], ['Franz_Mueller', 260.02, 53], ['abclop99', 263.95, 83], ['DruidNick', 264.07, 161], ['pixiestar1', 268.61, 250]],
            prev: [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['curtdammit', 19.33, 81], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['TheFeathers', 31.61, 243], ['MewDP', 33.93, 257], ['IAmNateHello', 34.63, 112], ['DjMidget', 35.03, 130], ['Audict', 37.15, 131], ['Tessaract2', 39.21, 131], ['MarchingTrombonist', 39.9, 107], ['erskw', 43.23, 122], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['Hedix1', 49.17, 309], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['InterdimensionalMan', 55.63, 57], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 73.08, 220], ['rideride', 74.65, 376], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['Thunderclanawe', 89.14, 50], ['a368', 93.09, 99], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['mastersword83', 101.5, 64], ['Smartstocks', 102.32, 3990], ['StarmanPWN', 104.0, 50], ['PBnSpots', 105.39, 75], ['tkim32', 105.53, 104], ['TOP_20', 106.1, 488], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['Furyful_Fawful', 116.25, 232], ['Zeusky', 124.43, 63], ['Sharpeye468', 129.57, 3693], ['Jacriton', 131.36, 426], ['poon-is-food', 132.47, 420], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['yodaisdancing', 138.55, 552], ['Franz_Mueller', 139.58, 52], ['VIOLENT_POOP', 141.62, 252], ['amazingpikachu_38', 145.16, 723], ['Robert_Schaosid', 145.77, 606], ['iSandpeople', 153.31, 225], ['limited-papertrail', 156.57, 185], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Sentenceh', 165.47, 68], ['Sam5253', 168.26, 205], ['Chiafriend12', 168.35, 572], ['WellHeresMyFourthAcc', 169.25, 397], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['skatterbug', 181.96, 71], ['davidjl123', 185.45, 4838], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['tonyxyou', 196.32, 145], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['MegaUltraSonic', 205.24, 90], ['Imbc', 209.52, 95], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['[deleted]', 221.15, 2499], ['Jzkqm', 226.88, 177], ['BoggleWogglez', 232.61, 202], ['cupofmilo', 233.13, 109], ['YotasAndPolestars', 234.8, 138], ['Aldeberon', 236.65, 157], ['alkazam', 239.41, 116], ['xMeowzerz', 244.14, 328], ['padiwik', 248.16, 75], ['kdiuro13', 261.78, 1736], ['abclop99', 263.95, 83], ['DruidNick', 264.07, 161], ['pixiestar1', 268.61, 250], ['linaeap', 268.84, 64]]
        },
        fastestMed: {
            cur: [['rideride', 3, 376], ['boxofkangaroos', 3, 151], ['davidjl123', 3, 5029], ['Adinida', 3, 1374], ['Koraine', 3, 521], ['rschaosid', 4, 339], ['bluesolid', 4, 106], ['networksky', 4.5, 102], ['KingCaspianX', 5, 2176], ['Sharpeye468', 6, 3693], ['Smartstocks', 6, 3990], ['hackerboy777', 6, 260], ['Jzkqm', 6, 177], ['lazersmoke', 6, 135], ['co3_carbonate', 6, 402], ['username111112222233', 6, 727], ['xMeowzerz', 6, 328], ['NubCaeks', 6, 339], ['HarrisonFordFocus', 6, 72], ['alkazam', 6, 116], ['Elegance200', 7, 198], ['Robert_Schaosid', 7, 606], ['Sam5253', 7, 205], ['amazingpikachu_38', 7, 901], ['poltory', 7, 508], ['VitaminB16', 7, 1681], ['MewDP', 7, 288], ['zotc', 8, 313], ['limited-papertrail', 8, 185], ['-WPD-', 8, 156], ['Chintam', 8, 421], ['gordonpt8', 8, 6081], ['Godisdeadbutimnot', 8, 92], ['iltrof', 8, 109], ['TheFeathers', 9, 243], ['IAmNateHello', 9, 112], ['JackWaffles', 9, 119], ['tyjo99', 9, 115], ['18529630741', 9, 73], ['MarchingTrombonist', 9, 107], ['yodaisdancing', 9, 581], ['Jacriton', 9, 426], ['Antichess', 9, 356], ['Chiafriend12', 10, 572], ['pie3636', 10, 5023], ['Unknow3n', 10, 55], ['TheBravestFart', 10, 343], ['Hedix1', 10, 309], ['coool12121212', 10, 62], ['slugmaboy8', 10, 161], ['Tessaract2', 10, 131], ['VIOLENT_POOP', 11, 252], ['Aarex2104', 11, 320], ['Furyful_Fawful', 11, 232], ['TheRittyl', 11, 152], ['dariosteck', 11, 103], ['bag_of_chips_', 11, 251], ['kdiuro13', 11, 2655], ['torncolours', 12, 510], ['TheNitromeFan', 12, 15715], ['kawzeg', 12, 1283], ['origamimissile', 12, 959], ['ImmortalEcstasy', 12, 93], ['a368', 12, 102], ['piyushsharma301', 12, 917], ['shortroundfarm', 12, 207], ['DruidNick', 12, 161], ['pixiestar1', 12, 250], ['Sztormcia', 12, 160], ['[deleted]', 13, 2500], ['tkim32', 13, 104], ['supersammy00', 13, 511], ['JordanLadd', 13, 1847], ['Haxalicious', 13, 147], ['Dr_Mikhail_Arkov', 13, 98], ['SuperSeagull01', 13, 100], ['zhige', 14, 279], ['throwthrowawaytime', 14, 146], ['Ynax', 14, 411], ['poon-is-food', 14, 420], ['HELP_im_not_original', 14, 214], ['QuestoGuy', 14, 795], ['UnsuccessfulAtLife', 14, 135], ['SpaceCowX1', 14, 50], ['smarvin6689', 14, 6985], ['Jondom_', 14, 241], ['Aquillav', 14.5, 228], ['BoggleWogglez', 15, 202], ['albert471', 15, 68], ['qualw', 15, 1680], ['2muchcontext', 15.5, 142], ['cupofmilo', 16, 109], ['TOP_20', 16, 488], ['Yavoth', 16, 121], ['DjMidget', 16, 130], ['Thunderclanawe', 16, 50], ['randomredditor12345', 16.5, 98], ['Audict', 17, 131], ['RandomRedditorWithNo', 17, 1228], ['cob331', 17, 139], ['SolidGoldMagikarp', 17, 1699]],
            prev: [['rideride', 3, 376], ['boxofkangaroos', 3, 151], ['davidjl123', 3, 4838], ['Adinida', 3, 1374], ['Koraine', 3, 521], ['rschaosid', 4, 339], ['bluesolid', 4, 106], ['networksky', 4.5, 102], ['KingCaspianX', 5, 2176], ['Sharpeye468', 6, 3693], ['Smartstocks', 6, 3990], ['hackerboy777', 6, 260], ['Jzkqm', 6, 177], ['lazersmoke', 6, 135], ['co3_carbonate', 6, 402], ['username111112222233', 6, 726], ['xMeowzerz', 6, 328], ['NubCaeks', 6, 339], ['HarrisonFordFocus', 6, 72], ['alkazam', 6, 116], ['Elegance200', 7, 198], ['Robert_Schaosid', 7, 606], ['Sam5253', 7, 205], ['amazingpikachu_38', 7, 723], ['poltory', 7, 508], ['VitaminB16', 7, 1674], ['MewDP', 7, 257], ['zotc', 8, 313], ['limited-papertrail', 8, 185], ['-WPD-', 8, 156], ['Chintam', 8, 421], ['gordonpt8', 8, 6057], ['Godisdeadbutimnot', 8, 92], ['iltrof', 8, 109], ['yodaisdancing', 8.5, 552], ['TheFeathers', 9, 243], ['IAmNateHello', 9, 112], ['JackWaffles', 9, 119], ['tyjo99', 9, 115], ['18529630741', 9, 73], ['MarchingTrombonist', 9, 107], ['Jacriton', 9, 426], ['Chiafriend12', 10, 572], ['pie3636', 10, 4988], ['Unknow3n', 10, 55], ['TheBravestFart', 10, 343], ['Hedix1', 10, 309], ['coool12121212', 10, 62], ['slugmaboy8', 10, 161], ['Tessaract2', 10, 131], ['VIOLENT_POOP', 11, 252], ['Aarex2104', 11, 320], ['Furyful_Fawful', 11, 232], ['TheRittyl', 11, 152], ['dariosteck', 11, 103], ['a368', 11, 99], ['bag_of_chips_', 11, 251], ['kdiuro13', 11, 1736], ['torncolours', 12, 510], ['kawzeg', 12, 1283], ['origamimissile', 12, 959], ['ImmortalEcstasy', 12, 93], ['piyushsharma301', 12, 917], ['shortroundfarm', 12, 207], ['DruidNick', 12, 161], ['pixiestar1', 12, 250], ['Sztormcia', 12, 160], ['[deleted]', 13, 2499], ['tkim32', 13, 104], ['supersammy00', 13, 511], ['curtdammit', 13, 81], ['TheNitromeFan', 13, 13411], ['JordanLadd', 13, 1847], ['Haxalicious', 13, 147], ['Dr_Mikhail_Arkov', 13, 98], ['zhige', 14, 279], ['throwthrowawaytime', 14, 146], ['Ynax', 14, 411], ['poon-is-food', 14, 420], ['HELP_im_not_original', 14, 214], ['QuestoGuy', 14, 795], ['UnsuccessfulAtLife', 14, 135], ['SpaceCowX1', 14, 50], ['smarvin6689', 14, 6571], ['Jondom_', 14, 241], ['Aquillav', 14.5, 228], ['BoggleWogglez', 15, 202], ['albert471', 15, 68], ['2muchcontext', 15.5, 142], ['cupofmilo', 16, 109], ['TOP_20', 16, 488], ['Yavoth', 16, 121], ['DjMidget', 16, 130], ['Thunderclanawe', 16, 50], ['Audict', 17, 131], ['RandomRedditorWithNo', 17, 1228], ['cob331', 17, 139], ['SolidGoldMagikarp', 17, 1699], ['iSandpeople', 17, 225], ['4everNdeavor', 17, 241], ['StarmanPWN', 17.5, 50]]
        },
        speedScore: {
            cur: [['TheNitromeFan', 4359.22], ['davidjl123', 2579.02], ['gordonpt8', 1975.91], ['smarvin6689', 1783.98], ['Urbul', 1777.38], ['Smartstocks', 1530.23], ['Sharpeye468', 1426.39], ['pie3636', 1331.27], ['Adinida', 849.22], ['KingCaspianX', 824.17], ['randomusername123458', 792.75], ['kdiuro13', 766.64], ['[deleted]', 726.1], ['DemonBurritoCat', 707.04], ['xHOCKEYx12', 705.26], ['VitaminB16', 671.36], ['SolidGoldMagikarp', 480.7], ['Decap_', 448.58], ['qualw', 435.89], ['JordanLadd', 422.53], ['abplows', 370.14], ['kawzeg', 360.93], ['Koraine', 308.27], ['amazingpikachu_38', 306.53], ['RandomRedditorWithNo', 303.8], ['skizfrenik_syco', 294.8], ['origamimissile', 289.81], ['TehVulpez', 280.86], ['username111112222233', 260.23], ['piyushsharma301', 246.19], ['Saltbearer', 235.26], ['QuestoGuy', 225.08], ['Robert_Schaosid', 213.41], ['Pookah', 191.58], ['rideride', 179.83], ['yodaisdancing', 175.39], ['HermioneReynaChase', 171.63], ['Chiafriend12', 166.65], ['rschaosid', 160.01], ['torncolours', 154.72], ['poltory', 154.03], ['co3_carbonate', 146.48], ['CarbonSpectre', 143.53], ['NubCaeks', 134.65], ['Jacriton', 129.36], ['qwertylool', 128.73], ['supersammy00', 126.81], ['Chintam', 126.35], ['xMeowzerz', 122.35], ['TOP_20', 118.79], ['orangey10', 118.52], ['Removedpixel', 114.78], ['Antichess', 113.42], ['Ynax', 110.25], ['The_Nepenthe', 106.28], ['TheBravestFart', 106.21], ['poon-is-food', 104.11], ['empires-fall', 102.39], ['zotc', 100.52], ['False1512', 99.68], ['hackerboy777', 99.63], ['MewDP', 99.51], ['WellHeresMyFourthAcc', 96.67], ['Hedix1', 93.62], ['Aarex2104', 91.6], ['cfcgtyk', 90.53], ['Syrrim', 88.75], ['bobston314', 82.63], ['boxofkangaroos', 79.48], ['TheFeathers', 76.73], ['zhige', 76.11], ['Sam5253', 75.9], ['bag_of_chips_', 74.74], ['VIOLENT_POOP', 69.6], ['Chalupa_Dad', 69.44], ['PM_ME_STOCK_PICS', 69.02], ['Weekndr', 68.04], ['pixiestar1', 66.82], ['Of_Mango', 64.59], ['Furyful_Fawful', 63.67], ['Elegance200', 62.66], ['Jzkqm', 61.14], ['loriirubiio', 59.25], ['Jondom_', 58.38], ['curtdammit', 57.47], ['limited-papertrail', 56.49], ['a-username-for-me', 56.26], ['Aquillav', 56.06], ['4everNdeavor', 54.82], ['shortroundfarm', 54.49], ['Ghazgkull', 53.61], ['HELP_im_not_original', 52.01], ['-WPD-', 51.68], ['iSandpeople', 51.31], ['BoggleWogglez', 50.43], ['lazersmoke', 50.24], ['Gocountgrainsofsand', 46.71], ['SaraKmado', 46.34], ['slugmaboy8', 45.92], ['TheRittyl', 45.79], ['bluesolid', 44.92]],
            prev: [['TheNitromeFan', 3676.07], ['davidjl123', 2488.59], ['gordonpt8', 1970.15], ['smarvin6689', 1678.95], ['Urbul', 1661.03], ['Smartstocks', 1530.23], ['Sharpeye468', 1426.39], ['pie3636', 1320.38], ['Adinida', 849.22], ['KingCaspianX', 824.17], ['randomusername123458', 792.75], ['[deleted]', 726.06], ['DemonBurritoCat', 707.04], ['xHOCKEYx12', 705.26], ['VitaminB16', 670.79], ['kdiuro13', 517.91], ['SolidGoldMagikarp', 480.7], ['Decap_', 448.58], ['JordanLadd', 422.53], ['abplows', 365.76], ['kawzeg', 360.93], ['Koraine', 308.27], ['RandomRedditorWithNo', 303.8], ['skizfrenik_syco', 294.8], ['origamimissile', 289.81], ['TehVulpez', 269.34], ['username111112222233', 260.17], ['amazingpikachu_38', 258.07], ['piyushsharma301', 246.19], ['Saltbearer', 235.26], ['QuestoGuy', 225.08], ['Robert_Schaosid', 213.41], ['Pookah', 191.58], ['rideride', 179.83], ['yodaisdancing', 173.26], ['HermioneReynaChase', 171.63], ['Chiafriend12', 166.65], ['rschaosid', 160.01], ['torncolours', 154.72], ['poltory', 154.03], ['co3_carbonate', 146.48], ['CarbonSpectre', 143.32], ['NubCaeks', 134.65], ['Jacriton', 129.36], ['qwertylool', 128.73], ['supersammy00', 126.81], ['Chintam', 126.35], ['xMeowzerz', 122.35], ['TOP_20', 118.79], ['orangey10', 118.52], ['Removedpixel', 114.78], ['Ynax', 110.25], ['The_Nepenthe', 106.28], ['TheBravestFart', 106.21], ['poon-is-food', 104.11], ['empires-fall', 102.39], ['zotc', 100.52], ['False1512', 99.68], ['hackerboy777', 99.63], ['WellHeresMyFourthAcc', 96.67], ['Hedix1', 93.62], ['MewDP', 92.78], ['Aarex2104', 91.6], ['cfcgtyk', 90.53], ['Syrrim', 88.75], ['boxofkangaroos', 79.48], ['TheFeathers', 76.73], ['zhige', 76.11], ['Sam5253', 75.9], ['bag_of_chips_', 74.74], ['VIOLENT_POOP', 69.6], ['PM_ME_STOCK_PICS', 69.02], ['Weekndr', 68.04], ['pixiestar1', 66.82], ['Of_Mango', 64.59], ['Furyful_Fawful', 63.67], ['Elegance200', 62.66], ['Jzkqm', 61.14], ['loriirubiio', 59.25], ['Jondom_', 58.38], ['limited-papertrail', 56.49], ['a-username-for-me', 56.26], ['Aquillav', 56.06], ['4everNdeavor', 54.82], ['shortroundfarm', 54.49], ['Ghazgkull', 53.61], ['HELP_im_not_original', 52.01], ['-WPD-', 51.68], ['iSandpeople', 51.31], ['BoggleWogglez', 50.43], ['lazersmoke', 50.24], ['Gocountgrainsofsand', 46.71], ['SaraKmado', 46.34], ['slugmaboy8', 45.92], ['TheRittyl', 45.79], ['bluesolid', 44.92], ['networksky', 44.3], ['dylantherabbit2016', 43.44], ['alkazam', 43.37], ['DruidNick', 42.86], ['Nes370', 42.54]]
        }
    },
    top100: {
        cur: [['TheNitromeFan', 4359.22], ['davidjl123', 2579.02], ['gordonpt8', 1975.91], ['smarvin6689', 1783.98], ['Urbul', 1777.38], ['Smartstocks', 1530.23], ['Sharpeye468', 1426.39], ['pie3636', 1331.27], ['Adinida', 849.22], ['KingCaspianX', 824.17], ['randomusername123458', 792.75], ['kdiuro13', 766.64], ['[deleted]', 726.1], ['DemonBurritoCat', 707.04], ['xHOCKEYx12', 705.26], ['VitaminB16', 671.36], ['SolidGoldMagikarp', 480.7], ['Decap_', 448.58], ['qualw', 435.89], ['JordanLadd', 422.53], ['abplows', 370.14], ['kawzeg', 360.93], ['Koraine', 308.27], ['amazingpikachu_38', 306.53], ['RandomRedditorWithNo', 303.8], ['skizfrenik_syco', 294.8], ['origamimissile', 289.81], ['TehVulpez', 280.86], ['username111112222233', 260.23], ['piyushsharma301', 246.19], ['Saltbearer', 235.26], ['QuestoGuy', 225.08], ['Robert_Schaosid', 213.41], ['Pookah', 191.58], ['rideride', 179.83], ['yodaisdancing', 175.39], ['HermioneReynaChase', 171.63], ['Chiafriend12', 166.65], ['rschaosid', 160.01], ['torncolours', 154.72], ['poltory', 154.03], ['co3_carbonate', 146.48], ['CarbonSpectre', 143.53], ['NubCaeks', 134.65], ['Jacriton', 129.36], ['qwertylool', 128.73], ['supersammy00', 126.81], ['Chintam', 126.35], ['xMeowzerz', 122.35], ['TOP_20', 118.79], ['orangey10', 118.52], ['Removedpixel', 114.78], ['Antichess', 113.42], ['Ynax', 110.25], ['The_Nepenthe', 106.28], ['TheBravestFart', 106.21], ['poon-is-food', 104.11], ['empires-fall', 102.39], ['zotc', 100.52], ['False1512', 99.68], ['hackerboy777', 99.63], ['MewDP', 99.51], ['WellHeresMyFourthAcc', 96.67], ['Hedix1', 93.62], ['Aarex2104', 91.6], ['cfcgtyk', 90.53], ['Syrrim', 88.75], ['bobston314', 82.63], ['boxofkangaroos', 79.48], ['TheFeathers', 76.73], ['zhige', 76.11], ['Sam5253', 75.9], ['bag_of_chips_', 74.74], ['VIOLENT_POOP', 69.6], ['Chalupa_Dad', 69.44], ['PM_ME_STOCK_PICS', 69.02], ['Weekndr', 68.04], ['pixiestar1', 66.82], ['Of_Mango', 64.59], ['Furyful_Fawful', 63.67], ['Elegance200', 62.66], ['Jzkqm', 61.14], ['loriirubiio', 59.25], ['Jondom_', 58.38], ['curtdammit', 57.47], ['limited-papertrail', 56.49], ['a-username-for-me', 56.26], ['Aquillav', 56.06], ['4everNdeavor', 54.82], ['shortroundfarm', 54.49], ['Ghazgkull', 53.61], ['HELP_im_not_original', 52.01], ['-WPD-', 51.68], ['iSandpeople', 51.31], ['BoggleWogglez', 50.43], ['lazersmoke', 50.24], ['Gocountgrainsofsand', 46.71], ['SaraKmado', 46.34], ['slugmaboy8', 45.92], ['TheRittyl', 45.79], ['bluesolid', 44.92]],
        prev: [['TheNitromeFan', 13411], ['Urbul', 6593], ['smarvin6689', 6571], ['gordonpt8', 6057], ['pie3636', 4988], ['davidjl123', 4838], ['Smartstocks', 3990], ['Sharpeye468', 3693], ['DemonBurritoCat', 3583], ['xHOCKEYx12', 3474], ['randomusername123458', 3399], ['[deleted]', 2499], ['KingCaspianX', 2176], ['Decap_', 2061], ['JordanLadd', 1847], ['kdiuro13', 1736], ['SolidGoldMagikarp', 1699], ['VitaminB16', 1674], ['abplows', 1488], ['TehVulpez', 1378], ['Adinida', 1374], ['kawzeg', 1283], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['skizfrenik_syco', 1143], ['origamimissile', 959], ['Pookah', 930], ['piyushsharma301', 917], ['QuestoGuy', 795], ['HermioneReynaChase', 772], ['CarbonSpectre', 738], ['username111112222233', 726], ['amazingpikachu_38', 723], ['orangey10', 652], ['qwertylool', 619], ['Robert_Schaosid', 606], ['empires-fall', 600], ['Removedpixel', 579], ['Chiafriend12', 572], ['yodaisdancing', 552], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['False1512', 500], ['The_Nepenthe', 491], ['cfcgtyk', 490], ['TOP_20', 488], ['about929', 478], ['Syrrim', 436], ['Jacriton', 426], ['Chintam', 421], ['poon-is-food', 420], ['Ynax', 411], ['co3_carbonate', 402], ['WellHeresMyFourthAcc', 397], ['a-username-for-me', 394], ['rideride', 376], ['SaraKmado', 357], ['TheBravestFart', 343], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['Hedix1', 309], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['loriirubiio', 267], ['hackerboy777', 260], ['Nes370', 259], ['MewDP', 257], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['dylantherabbit2016', 247], ['TheFeathers', 243], ['4everNdeavor', 241], ['Jondom_', 241], ['Mindlesssavage', 235], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['Gocountgrainsofsand', 220], ['Omegamanthethird', 217], ['HELP_im_not_original', 214], ['VMorkva', 207], ['shortroundfarm', 207], ['Sam5253', 205], ['thatdometho', 202], ['BoggleWogglez', 202], ['Elegance200', 198], ['M_McFly', 196], ['TheSilentLink', 191], ['limited-papertrail', 185], ['ermahgerd_cats', 183], ['Jzkqm', 177]]
    },
    teams: {
        cur: [['Urbul and smarvin6689', 2620], ['Adinida and davidjl123', 2584], ['Sharpeye468 and randomusername123458', 2570], ['TheNitromeFan and Urbul', 2467], ['TheNitromeFan and pie3636', 2300], ['TheNitromeFan and gordonpt8', 2245], ['DemonBurritoCat and smarvin6689', 2174], ['VitaminB16 and pie3636', 1958], ['TheNitromeFan and qualw', 1914], ['TheNitromeFan and smarvin6689', 1673], ['Urbul and gordonpt8', 1342], ['Smartstocks and gordonpt8', 1284], ['TheNitromeFan and kdiuro13', 1156], ['KingCaspianX and Koraine', 1023], ['DemonBurritoCat and pie3636', 1003], ['pie3636 and smarvin6689', 946], ['TheNitromeFan and davidjl123', 936], ['DemonBurritoCat and kdiuro13', 875], ['TheNitromeFan and xHOCKEYx12', 784], ['Sharpeye468 and [deleted]', 780]],
        prev: [['Adinida and davidjl123', 2584], ['Sharpeye468 and randomusername123458', 2570], ['Urbul and smarvin6689', 2527], ['TheNitromeFan and pie3636', 2299], ['TheNitromeFan and Urbul', 2287], ['TheNitromeFan and gordonpt8', 2244], ['DemonBurritoCat and smarvin6689', 2174], ['VitaminB16 and pie3636', 1958], ['Urbul and gordonpt8', 1336], ['Smartstocks and gordonpt8', 1284], ['TheNitromeFan and smarvin6689', 1281], ['KingCaspianX and Koraine', 1023], ['DemonBurritoCat and pie3636', 1003], ['pie3636 and smarvin6689', 946], ['DemonBurritoCat and kdiuro13', 875], ['TheNitromeFan and davidjl123', 832], ['TheNitromeFan and xHOCKEYx12', 784], ['Sharpeye468 and [deleted]', 780], ['gordonpt8 and smarvin6689', 777], ['JordanLadd and Smartstocks', 721]]
    },
    deletedCounts: { cur: 538, prev: 535 },
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