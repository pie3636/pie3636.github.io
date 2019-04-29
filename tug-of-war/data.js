data = {
    lastData: "14 Apr 2019",
    lastUpdate: "29 Apr 2019",
    announcement: true,
    comment: "- The count has been relatively stable for a year and a half, with very few streaks outside of [-1000, 1000]\n\
              - The number 7 made its way into the top ten most counted numbers\n\
              - A new stalemate has been reached between 999 and 998\n\
              - We now have over 400 gets\n\
              - /u/GarlicoinAccount, /u/thephilsblogbar and /u/PaleRepresentative make their way into the top 20 counters. /u/TehVulpez also climbs up 15 places.\n\
              - We are still gaining ground on the main thread",
    counts: {
        total:       { cur: 211867, prev: 154747  },
        ofMain:      { cur: 211867/2529291*100, prev: 154747/2146864*100, precision: 2 },
        min:         { cur: -4043,  prev: -4043   },
        max:         { cur: 4084,   prev: 4084    },
        range:       { cur: 8127,   prev: 8127    },
        ofMaxRange:  { cur: 26.07,  prev: 19.04   },
        avg:         { cur: 75.83,  prev: 123.16  },
        med:         { cur: 18,     prev: 37      },
        mostCommon:  {
            cur:  [[0, 2560], [1, 1899], [-1, 1592], [2, 998], [3, 735], [-2, 612], [4, 563], [-1026, 550], [-1027, 533], [7, 455]],
            prev: [[0, 2147], [1, 1574], [-1, 1332], [2, 807], [3, 590], [-1026, 541], [-1027, 523], [-2, 489], [4, 443], [1066, 405]]
        },
        leastCommon: {
            cur:  [[-4043, 1], [4084, 1]],
            prev: [[-4043, 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 1255.05, prev: 939.07,  unit: "day"    },
        fastest: { cur: 1,      prev: 1,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.53,   prev: 8.74,   unit: "minute" },
        med:     { cur: 19,     prev: 16,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 114902, prev: 88041  },
        neg:           { cur: 94405,  prev: 64559  },
        posPercent:    { cur: 54.23,  prev: 56.89  },
        negPercent:    { cur: 44.56,  prev: 41.72  },
        zeros:         { cur: 2560,   prev: 2147   },
        ofZero:        { cur: 82.76,  prev: 72.08  },
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
        avgStreak:     { cur: 2.7988,   prev: 2.798,  precision: 4 },
        posNegAsym:    { cur: 0.0093, prev: -0.0104, precision: 4 }
    },
    gets: {
        count:      { cur: 419,    prev: 306   },
        avg:        { cur: -9.07,  prev: 26.08 },
        med:        { cur: 0,      prev: 0     },
        mostCommon: {
            cur:  [[0, 62], [200, 59], [-200, 44], [400, 38], [-400, 28]],
            prev: [[200, 45], [0, 43], [-200, 30], [400, 28], [-400, 18]]
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
        avgTime:    { cur: 72.03,  prev: 73.89, unit: "hour" },
        medTime:    { cur: 38.73,  prev: 42.5,  unit: "minute" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4284, prev: 4284 },
            begin: 200, end: 0
        },
        avgLen:     { cur: 505.65, prev: 505.71 },
        medLen:     { cur: 366,    prev: 356    },
        lastLen: 54.18
    },
    getSign: {
        pos:           { cur: 182,   prev: 141   },
        neg:           { cur: 175,   prev: 122   },
        posPercent:    { cur: 43.44, prev: 46.08 },
        negPercent:    { cur: 41.77, prev: 39.87 },
        zeros:         { cur: 62,    prev: 43    },
        ofZero:        { cur: 6.76,  prev: 7.72  },
        maxPosStreak:  { cur: 67,    prev: 67    },
        maxNegStreak:  { cur: 53,    prev: 53    },
        maxUpStreak:   {
            length:  { cur: 14, prev: 14  },
            begin: -2400, end: 400
        },
        maxDownStreak: {
            length:  { cur: 15, prev: 15 },
            begin: 400, end: -2600
        },
        avgStreak:     { cur: 3.2016, prev: 3.1895, precision: 4 },
        posNegAsym:    { cur: -0.0031, prev: 0.0381, precision: 4 }
    },
    oneStalemates: {
        cur:  [[-1026, 499], [-1027, 499], [978, 198], [-1563, 184], [-1564, 183], [-798, 182], [-799, 176], [-801, 163], [-802, 161], [-1731, 157]],
        prev: [[-1026, 499], [-1027, 499], [978, 198], [-1563, 184], [-1564, 183], [-798, 182], [-799, 176], [-801, 163], [-802, 161], [-1731, 157]]
    },
    twoStalemates: {
        cur:  [[-1026, -1027, 998], [-1563, -1564, 367], [-798, -799, 352], [-801, -802, 323], [-1731, -1730, 305], [1799, 1798, 290], [978, 977, 259], [-1, 0, 201], [3527, 3528, 191], [999, 998, 174]],
        prev: [[-1026, -1027, 998], [-1563, -1564, 367], [-798, -799, 352], [-801, -802, 323], [-1731, -1730, 305], [1799, 1798, 290], [978, 977, 259], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159]]
    },
    users: {
        count: { cur: 1895,  prev: 1559  },
        avg:   { cur: 111.8, prev: 99.26 },
        med:   { cur: 3,     prev: 3     },
        top20: {
            cur:  [['TheNitromeFan', 25227], ['Urbul', 12443], ['smarvin6689', 9257], ['GarlicoinAccount', 8934], ['TehVulpez', 7496], ['gordonpt8', 6108], ['davidjl123', 5211], ['thephilsblogbar', 5125], ['pie3636', 5073], ['[deleted]', 4105], ['Smartstocks', 3997], ['qualw', 3897], ['DemonBurritoCat', 3696], ['Sharpeye468', 3694], ['xHOCKEYx12', 3474], ['randomusername123458', 3399], ['kdiuro13', 2875], ['PaleRepresentative', 2369], ['KingCaspianX', 2176], ['SolidGoldMagikarp', 2145], ['Antichess', 2106]],
            prev: [['TheNitromeFan', 18496], ['Urbul', 8022], ['smarvin6689', 7979], ['gordonpt8', 6106], ['davidjl123', 5073], ['pie3636', 5069], ['Smartstocks', 3990], ['Sharpeye468', 3693], ['DemonBurritoCat', 3583], ['xHOCKEYx12', 3474], ['randomusername123458', 3399], ['[deleted]', 3065], ['kdiuro13', 2795], ['qualw', 2786], ['KingCaspianX', 2176], ['Decap_', 2061], ['JordanLadd', 1847], ['Antichess', 1738], ['SolidGoldMagikarp', 1707], ['VitaminB16', 1697], ['TehVulpez', 1615]]
        },
        topGets: {
            threshold: 2,
            cur: [['TheNitromeFan', 60], ['davidjl123', 25], ['Sharpeye468', 19], ['thephilsblogbar', 19], ['smarvin6689', 17], ['GarlicoinAccount', 16], ['TehVulpez', 12], ['Urbul', 11], ['pie3636', 11], ['PaleRepresentative', 10], ['DemonBurritoCat', 9], ['qualw', 9], ['xHOCKEYx12', 8], ['gordonpt8', 8], ['KingCaspianX', 7], ['randomusername123458', 7], ['Smartstocks', 7], ['kdiuro13', 6], ['kawzeg', 5], ['origamimissile', 5], ['Adinida', 5], ['Antichess', 5], ['Decap_', 4], ['JordanLadd', 4], ['KatyLawson', 4], ['skizfrenik_syco', 3], ['co3_carbonate', 3], ['HermioneReynaChase', 3], ['False1512', 3], ['cfcgtyk', 3], ['Robert_Schaosid', 2], ['hackerboy777', 2], ['lazersmoke', 2], ['[deleted]', 2], ['SolidGoldMagikarp', 2], ['UnsuccessfulAtLife', 2], ['qwertylool', 2], ['piyushsharma301', 2], ['Hedix1', 2], ['poltory', 2], ['VitaminB16', 2], ['TheSilentLink', 2], ['MewDP', 2], ['amazingpikachu_38', 2], ['Chalupa_Dad', 2], ['foxthechicken', 2], ['NeonTaterTots', 2], ['kongburrito', 2], ['LetsStartFlame', 2]],
            prev: [['TheNitromeFan', 43], ['davidjl123', 25], ['Sharpeye468', 19], ['smarvin6689', 14], ['pie3636', 11], ['DemonBurritoCat', 9], ['xHOCKEYx12', 8], ['gordonpt8', 8], ['Urbul', 8], ['KingCaspianX', 7], ['randomusername123458', 7], ['Smartstocks', 7], ['kawzeg', 5], ['origamimissile', 5], ['Adinida', 5], ['kdiuro13', 5], ['Antichess', 5], ['Decap_', 4], ['JordanLadd', 4], ['skizfrenik_syco', 3], ['co3_carbonate', 3], ['TehVulpez', 3], ['HermioneReynaChase', 3], ['False1512', 3], ['cfcgtyk', 3], ['qualw', 3], ['Robert_Schaosid', 2], ['hackerboy777', 2], ['lazersmoke', 2], ['SolidGoldMagikarp', 2], ['UnsuccessfulAtLife', 2], ['qwertylool', 2], ['piyushsharma301', 2], ['Hedix1', 2], ['poltory', 2], ['VitaminB16', 2], ['TheSilentLink', 2], ['MewDP', 2], ['amazingpikachu_38', 2], ['Chalupa_Dad', 2]]
        },
        topAssists: {
            threshold: 2,
            cur: [['TheNitromeFan', 74], ['smarvin6689', 19], ['Urbul', 19], ['davidjl123', 18], ['GarlicoinAccount', 16], ['randomusername123458', 12], ['thephilsblogbar', 12], ['gordonpt8', 11], ['Sharpeye468', 10], ['Smartstocks', 10], ['pie3636', 9], ['PaleRepresentative', 9], ['Adinida', 8], ['foxthechicken', 8], ['qualw', 7], ['RandomRedditorWithNo', 6], ['xHOCKEYx12', 6], ['SolidGoldMagikarp', 6], ['DemonBurritoCat', 6], ['VitaminB16', 6], ['kongburrito', 6], ['username111112222233', 5], ['HermioneReynaChase', 5], ['kdiuro13', 5], ['Antichess', 5], ['KingCaspianX', 4], ['abplows', 4], ['JordanLadd', 4], ['[deleted]', 4], ['piyushsharma301', 4], ['ThreeDomeHome', 4], ['a-username-for-me', 3], ['yodaisdancing', 3], ['TehVulpez', 3], ['tunatehfish', 3], ['supersammy00', 2], ['torncolours', 2], ['Saltbearer', 2], ['loriirubiio', 2], ['poon-is-food', 2], ['Robert_Schaosid', 2], ['4everNdeavor', 2], ['pixiestar1', 2], ['Jacriton', 2], ['xMeowzerz', 2], ['NubCaeks', 2], ['cfcgtyk', 2], ['amazingpikachu_38', 2], ['AlienApricot', 2], ['KatyLawson', 2]],
            prev: [['TheNitromeFan', 42], ['davidjl123', 18], ['smarvin6689', 18], ['Urbul', 13], ['randomusername123458', 12], ['gordonpt8', 11], ['Sharpeye468', 10], ['Smartstocks', 10], ['pie3636', 9], ['Adinida', 8], ['RandomRedditorWithNo', 6], ['xHOCKEYx12', 6], ['SolidGoldMagikarp', 6], ['DemonBurritoCat', 6], ['VitaminB16', 6], ['username111112222233', 5], ['HermioneReynaChase', 5], ['qualw', 5], ['KingCaspianX', 4], ['abplows', 4], ['JordanLadd', 4], ['piyushsharma301', 4], ['kdiuro13', 4], ['[deleted]', 3], ['yodaisdancing', 3], ['Antichess', 3], ['tunatehfish', 3], ['a-username-for-me', 2], ['supersammy00', 2], ['torncolours', 2], ['Saltbearer', 2], ['loriirubiio', 2], ['poon-is-food', 2], ['Robert_Schaosid', 2], ['4everNdeavor', 2], ['pixiestar1', 2], ['Jacriton', 2], ['xMeowzerz', 2], ['NubCaeks', 2], ['cfcgtyk', 2], ['amazingpikachu_38', 2]]
        },
        fastest: {
            threshold: 50,
            cur:  [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['wirer', 18.22, 64], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iamawesomeuknow', 24.51, 55], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['TheFeathers', 31.61, 243], ['Gavin1123', 32.24, 130], ['YSer03hatA', 34.57, 155], ['IAmNateHello', 34.63, 112], ['Audict', 37.15, 131], ['Tessaract2', 39.21, 131], ['MarchingTrombonist', 39.9, 107], ['fire_snyper', 42.82, 88], ['erskw', 43.23, 122], ['curtdammit', 46.08, 266], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['Diesel0307', 53.06, 206], ['InterdimensionalMan', 55.2, 66], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['Missour1', 62.79, 223], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 72.84, 221], ['rideride', 74.65, 376], ['ThreeDomeHome', 76.81, 1434], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['DjMidget', 88.65, 136], ['Thunderclanawe', 89.14, 50], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['Hedix1', 100.52, 508], ['mastersword83', 102.35, 66], ['Smartstocks', 103.3, 3997], ['StarmanPWN', 104.0, 50], ['PBnSpots', 105.39, 75], ['tkim32', 105.53, 104], ['TOP_20', 106.1, 488], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['BZW77', 109.55, 94], ['Furyful_Fawful', 116.25, 232], ['NobodyL0vesMe', 121.15, 137], ['a368', 123.28, 131], ['Zeusky', 124.43, 63], ['MewDP', 125.75, 288], ['Sharpeye468', 130.08, 3694], ['poon-is-food', 132.47, 420], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['VIOLENT_POOP', 141.62, 252], ['KatyLawson', 144.0, 817], ['Robert_Schaosid', 145.77, 606], ['SuperSeagull01', 145.89, 115], ['iSandpeople', 153.31, 225], ['youhavebeautifuleyes', 153.37, 167], ['limited-papertrail', 156.57, 185], ['PaleRepresentative', 157.52, 2369], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Sentenceh', 165.47, 68], ['Sam5253', 168.26, 205], ['WellHeresMyFourthAcc', 169.25, 397], ['Chiafriend12', 172.62, 574], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['skatterbug', 181.96, 71], ['temtemy', 182.06, 164], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['amazingpikachu_38', 195.28, 1057], ['tonyxyou', 196.32, 145], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['MegaUltraSonic', 204.15, 91], ['Imbc', 209.52, 95], ['tunatehfish', 210.75, 577], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['The_Necromancer10', 217.43, 443], ['davidjl123', 218.64, 5211]],
            prev: [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['Gavin1123', 19.94, 128], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['TheFeathers', 31.61, 243], ['IAmNateHello', 34.63, 112], ['DjMidget', 35.03, 130], ['Audict', 37.15, 131], ['Tessaract2', 39.21, 131], ['MarchingTrombonist', 39.9, 107], ['erskw', 43.23, 122], ['curtdammit', 46.08, 266], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['Hedix1', 49.17, 309], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['InterdimensionalMan', 55.63, 57], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 73.08, 220], ['rideride', 74.65, 376], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['Thunderclanawe', 89.14, 50], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['mastersword83', 101.5, 64], ['Smartstocks', 102.32, 3990], ['StarmanPWN', 104.0, 50], ['PBnSpots', 105.39, 75], ['tkim32', 105.53, 104], ['TOP_20', 106.1, 488], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['Furyful_Fawful', 116.25, 232], ['Zeusky', 124.43, 63], ['MewDP', 125.75, 288], ['a368', 127.45, 125], ['Sharpeye468', 129.57, 3693], ['poon-is-food', 132.47, 420], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['VIOLENT_POOP', 141.62, 252], ['Robert_Schaosid', 145.77, 606], ['SuperSeagull01', 145.89, 115], ['iSandpeople', 153.31, 225], ['limited-papertrail', 156.57, 185], ['thephilsblogbar', 160.5, 139], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Sentenceh', 165.47, 68], ['Sam5253', 168.26, 205], ['WellHeresMyFourthAcc', 169.25, 397], ['Chiafriend12', 172.62, 574], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['skatterbug', 181.96, 71], ['amazingpikachu_38', 185.29, 1008], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['davidjl123', 194.35, 5073], ['tonyxyou', 196.32, 145], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['MegaUltraSonic', 205.24, 90], ['Imbc', 209.52, 95], ['tunatehfish', 210.75, 577], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['[deleted]', 222.78, 3065], ['Jzkqm', 226.88, 177], ['BoggleWogglez', 232.61, 202], ['cupofmilo', 233.13, 109], ['YotasAndPolestars', 234.8, 138], ['yodaisdancing', 236.38, 581], ['Aldeberon', 236.65, 157], ['alkazam', 239.41, 116], ['xMeowzerz', 244.14, 328], ['padiwik', 248.16, 75], ['Franz_Mueller', 260.02, 53], ['DruidNick', 264.07, 161], ['pixiestar1', 268.61, 250]]
        },
        fastestMed: {
            threshold: 50,
            cur: [['rideride', 3, 376], ['boxofkangaroos', 3, 151], ['Adinida', 3, 1374], ['Koraine', 3, 521], ['rschaosid', 4, 339], ['bluesolid', 4, 106], ['davidjl123', 4, 5211], ['NobodyL0vesMe', 4, 137], ['networksky', 4.5, 102], ['KingCaspianX', 5, 2176], ['Sharpeye468', 6, 3694], ['Smartstocks', 6, 3997], ['hackerboy777', 6, 260], ['Jzkqm', 6, 177], ['lazersmoke', 6, 135], ['co3_carbonate', 6, 402], ['username111112222233', 6, 733], ['xMeowzerz', 6, 328], ['NubCaeks', 6, 339], ['HarrisonFordFocus', 6, 72], ['alkazam', 6, 116], ['Elegance200', 7, 198], ['Robert_Schaosid', 7, 606], ['Sam5253', 7, 205], ['poltory', 7, 508], ['VitaminB16', 7, 1722], ['MewDP', 7, 288], ['zotc', 8, 313], ['limited-papertrail', 8, 185], ['-WPD-', 8, 156], ['gordonpt8', 8, 6108], ['amazingpikachu_38', 8, 1057], ['Godisdeadbutimnot', 8, 92], ['TehDragonGuy', 8, 71], ['iltrof', 8, 109], ['TheFeathers', 9, 243], ['IAmNateHello', 9, 112], ['JackWaffles', 9, 119], ['tyjo99', 9, 115], ['18529630741', 9, 73], ['MarchingTrombonist', 9, 107], ['yodaisdancing', 9, 581], ['Jacriton', 9, 452], ['Gavin1123', 9, 130], ['Chiafriend12', 10, 574], ['Unknow3n', 10, 55], ['TheBravestFart', 10, 343], ['coool12121212', 10, 62], ['slugmaboy8', 10, 161], ['Tessaract2', 10, 131], ['wirer', 10, 64], ['VIOLENT_POOP', 11, 252], ['Aarex2104', 11, 320], ['pie3636', 11, 5073], ['Furyful_Fawful', 11, 232], ['TheRittyl', 11, 152], ['Chintam', 11, 503], ['dariosteck', 11, 103], ['bag_of_chips_', 11, 251], ['kdiuro13', 11, 2875], ['ThreeDomeHome', 11, 1434], ['YSer03hatA', 11, 155], ['torncolours', 12, 510], ['kawzeg', 12, 1283], ['origamimissile', 12, 959], ['ImmortalEcstasy', 12, 93], ['piyushsharma301', 12, 917], ['shortroundfarm', 12, 207], ['DruidNick', 12, 161], ['pixiestar1', 12, 250], ['Sztormcia', 12, 160], ['Antichess', 12, 2106], ['NonOffendingPedos', 12, 132], ['tkim32', 13, 104], ['supersammy00', 13, 511], ['JordanLadd', 13, 1847], ['Haxalicious', 13, 147], ['Dr_Mikhail_Arkov', 13, 98], ['qualw', 13, 3897], ['heeric', 13, 736], ['zhige', 14, 279], ['throwthrowawaytime', 14, 146], ['TheNitromeFan', 14, 25227], ['Ynax', 14, 411], ['poon-is-food', 14, 420], ['HELP_im_not_original', 14, 214], ['QuestoGuy', 14, 795], ['UnsuccessfulAtLife', 14, 135], ['SpaceCowX1', 14, 50], ['Jondom_', 14, 241], ['SuperSeagull01', 14, 115], ['tunatehfish', 14, 577], ['Missour1', 14, 223], ['Cyber-Gon', 14, 155], ['LetsStartFlame', 14, 151], ['Aquillav', 14.5, 228], ['[deleted]', 15, 4105], ['Hedix1', 15, 508], ['BoggleWogglez', 15, 202], ['albert471', 15, 68], ['a368', 15, 131]],
            prev: [['rideride', 3, 376], ['boxofkangaroos', 3, 151], ['davidjl123', 3, 5073], ['Adinida', 3, 1374], ['Koraine', 3, 521], ['rschaosid', 4, 339], ['bluesolid', 4, 106], ['networksky', 4.5, 102], ['KingCaspianX', 5, 2176], ['Sharpeye468', 6, 3693], ['Smartstocks', 6, 3990], ['hackerboy777', 6, 260], ['Jzkqm', 6, 177], ['lazersmoke', 6, 135], ['co3_carbonate', 6, 402], ['username111112222233', 6, 728], ['xMeowzerz', 6, 328], ['NubCaeks', 6, 339], ['HarrisonFordFocus', 6, 72], ['alkazam', 6, 116], ['Elegance200', 7, 198], ['Robert_Schaosid', 7, 606], ['Sam5253', 7, 205], ['amazingpikachu_38', 7, 1008], ['poltory', 7, 508], ['VitaminB16', 7, 1697], ['MewDP', 7, 288], ['zotc', 8, 313], ['limited-papertrail', 8, 185], ['-WPD-', 8, 156], ['gordonpt8', 8, 6106], ['Godisdeadbutimnot', 8, 92], ['iltrof', 8, 109], ['TheFeathers', 9, 243], ['IAmNateHello', 9, 112], ['JackWaffles', 9, 119], ['tyjo99', 9, 115], ['18529630741', 9, 73], ['MarchingTrombonist', 9, 107], ['yodaisdancing', 9, 581], ['Jacriton', 9, 451], ['Gavin1123', 9, 128], ['Chiafriend12', 10, 574], ['Unknow3n', 10, 55], ['TheBravestFart', 10, 343], ['Hedix1', 10, 309], ['coool12121212', 10, 62], ['slugmaboy8', 10, 161], ['Tessaract2', 10, 131], ['VIOLENT_POOP', 11, 252], ['Aarex2104', 11, 320], ['pie3636', 11, 5069], ['Furyful_Fawful', 11, 232], ['TheRittyl', 11, 152], ['Chintam', 11, 503], ['dariosteck', 11, 103], ['bag_of_chips_', 11, 251], ['kdiuro13', 11, 2795], ['Antichess', 11, 1738], ['torncolours', 12, 510], ['kawzeg', 12, 1283], ['origamimissile', 12, 959], ['ImmortalEcstasy', 12, 93], ['piyushsharma301', 12, 917], ['shortroundfarm', 12, 207], ['DruidNick', 12, 161], ['pixiestar1', 12, 250], ['Sztormcia', 12, 160], ['tkim32', 13, 104], ['supersammy00', 13, 511], ['TheNitromeFan', 13, 18496], ['JordanLadd', 13, 1847], ['Haxalicious', 13, 147], ['Dr_Mikhail_Arkov', 13, 98], ['zhige', 14, 279], ['[deleted]', 14, 3065], ['throwthrowawaytime', 14, 146], ['Ynax', 14, 411], ['poon-is-food', 14, 420], ['HELP_im_not_original', 14, 214], ['QuestoGuy', 14, 795], ['UnsuccessfulAtLife', 14, 135], ['SpaceCowX1', 14, 50], ['Jondom_', 14, 241], ['SuperSeagull01', 14, 115], ['qualw', 14, 2786], ['tunatehfish', 14, 577], ['Aquillav', 14.5, 228], ['BoggleWogglez', 15, 202], ['albert471', 15, 68], ['a368', 15, 125], ['smarvin6689', 15, 7979], ['2muchcontext', 15.5, 142], ['cupofmilo', 16, 109], ['TOP_20', 16, 488], ['Yavoth', 16, 121], ['DjMidget', 16, 130], ['Thunderclanawe', 16, 50], ['randomredditor12345', 16.5, 98], ['Audict', 17, 131], ['RandomRedditorWithNo', 17, 1228]]
        },
        speedScore: {
            cur: [['TheNitromeFan', 6758.53], ['Urbul', 2663.9], ['davidjl123', 2603.13], ['smarvin6689', 2314.93], ['gordonpt8', 1979.62], ['GarlicoinAccount', 1773.27], ['Smartstocks', 1530.91], ['Sharpeye468', 1426.41], ['pie3636', 1335.43], ['TehVulpez', 1313.31], ['[deleted]', 1124.14], ['qualw', 1069.29], ['Adinida', 849.22], ['KingCaspianX', 824.17], ['kdiuro13', 817.48], ['randomusername123458', 792.75], ['DemonBurritoCat', 718.14], ['xHOCKEYx12', 705.26], ['thephilsblogbar', 688.18], ['VitaminB16', 678.82], ['Antichess', 608.76], ['SolidGoldMagikarp', 535.45], ['Decap_', 448.58], ['PaleRepresentative', 446.5], ['ThreeDomeHome', 430.92], ['JordanLadd', 422.53], ['abplows', 374.7], ['kawzeg', 360.93], ['amazingpikachu_38', 351.09], ['Koraine', 308.27], ['RandomRedditorWithNo', 304.75], ['foxthechicken', 301.6], ['skizfrenik_syco', 294.8], ['origamimissile', 289.81], ['username111112222233', 261.02], ['kongburrito', 248.42], ['AlienApricot', 246.9], ['piyushsharma301', 246.19], ['Saltbearer', 235.26], ['a-username-for-me', 227.23], ['QuestoGuy', 225.08], ['Robert_Schaosid', 213.41], ['KatyLawson', 208.64], ['Pookah', 192.21], ['HermioneReynaChase', 183.27], ['rideride', 179.83], ['heeric', 175.64], ['yodaisdancing', 175.39], ['bobston314', 167.01], ['Chiafriend12', 166.71], ['rschaosid', 160.01], ['tunatehfish', 159.37], ['torncolours', 154.72], ['poltory', 154.03], ['co3_carbonate', 146.48], ['CarbonSpectre', 143.71], ['Chintam', 139.58], ['NubCaeks', 134.65], ['Hedix1', 132.98], ['Jacriton', 131.37], ['VMorkva', 131.28], ['Chalupa_Dad', 130.11], ['qwertylool', 128.73], ['supersammy00', 126.81], ['The_Nepenthe', 123.65], ['xMeowzerz', 122.35], ['TOP_20', 118.79], ['orangey10', 118.52], ['Bluestalker', 118.3], ['Removedpixel', 114.78], ['Ynax', 110.25], ['TheBravestFart', 106.21], ['poon-is-food', 104.11], ['empires-fall', 102.39], ['zotc', 100.52], ['False1512', 99.68], ['hackerboy777', 99.63], ['MewDP', 99.51], ['WellHeresMyFourthAcc', 96.67], ['Aarex2104', 91.6], ['The_Necromancer10', 91.11], ['cfcgtyk', 90.53], ['Syrrim', 88.76], ['llamasR5life', 84.89], ['boxofkangaroos', 79.48], ['TheFeathers', 76.73], ['zhige', 76.11], ['Sam5253', 75.9], ['NeonTaterTots', 75.13], ['bag_of_chips_', 74.74], ['VIOLENT_POOP', 69.6], ['PM_ME_STOCK_PICS', 69.02], ['Weekndr', 68.04], ['pixiestar1', 66.82], ['Of_Mango', 64.59], ['Furyful_Fawful', 63.67], ['Elegance200', 62.66], ['Jzkqm', 61.14], ['FuckTheKingTho', 60.93], ['NobodyL0vesMe', 59.41], ['loriirubiio', 59.25]],
            prev: [['TheNitromeFan', 5064.36], ['davidjl123', 2587.46], ['smarvin6689', 1984.84], ['gordonpt8', 1979.56], ['Urbul', 1917.63], ['Smartstocks', 1530.23], ['Sharpeye468', 1426.39], ['pie3636', 1335.28], ['[deleted]', 852.15], ['Adinida', 849.22], ['KingCaspianX', 824.17], ['kdiuro13', 800.25], ['randomusername123458', 792.75], ['qualw', 739.68], ['DemonBurritoCat', 707.04], ['xHOCKEYx12', 705.26], ['VitaminB16', 673.06], ['Antichess', 521.1], ['SolidGoldMagikarp', 481.5], ['Decap_', 448.58], ['JordanLadd', 422.53], ['abplows', 372.28], ['kawzeg', 360.93], ['amazingpikachu_38', 341.55], ['Koraine', 308.27], ['RandomRedditorWithNo', 303.8], ['TehVulpez', 301.36], ['skizfrenik_syco', 294.8], ['origamimissile', 289.81], ['username111112222233', 260.35], ['piyushsharma301', 246.19], ['Saltbearer', 235.26], ['QuestoGuy', 225.08], ['Robert_Schaosid', 213.41], ['Pookah', 191.83], ['rideride', 179.83], ['yodaisdancing', 175.39], ['HermioneReynaChase', 171.63], ['bobston314', 167.01], ['Chiafriend12', 166.71], ['rschaosid', 160.01], ['tunatehfish', 159.37], ['torncolours', 154.72], ['poltory', 154.03], ['co3_carbonate', 146.48], ['CarbonSpectre', 143.71], ['Chintam', 139.58], ['NubCaeks', 134.65], ['Jacriton', 131.23], ['qwertylool', 128.73], ['supersammy00', 126.81], ['The_Nepenthe', 123.65], ['xMeowzerz', 122.35], ['a-username-for-me', 119.71], ['TOP_20', 118.79], ['orangey10', 118.52], ['Removedpixel', 114.78], ['Ynax', 110.25], ['TheBravestFart', 106.21], ['poon-is-food', 104.11], ['empires-fall', 102.39], ['zotc', 100.52], ['False1512', 99.68], ['hackerboy777', 99.63], ['MewDP', 99.51], ['WellHeresMyFourthAcc', 96.67], ['Hedix1', 93.62], ['Aarex2104', 91.6], ['cfcgtyk', 90.53], ['Syrrim', 88.75], ['Chalupa_Dad', 84.87], ['boxofkangaroos', 79.48], ['TheFeathers', 76.73], ['zhige', 76.11], ['Sam5253', 75.9], ['bag_of_chips_', 74.74], ['VMorkva', 71.34], ['VIOLENT_POOP', 69.6], ['PM_ME_STOCK_PICS', 69.02], ['Weekndr', 68.04], ['pixiestar1', 66.82], ['Of_Mango', 64.59], ['Furyful_Fawful', 63.67], ['Elegance200', 62.66], ['Jzkqm', 61.14], ['loriirubiio', 59.25], ['Jondom_', 58.38], ['curtdammit', 57.47], ['limited-papertrail', 56.49], ['Aquillav', 56.06], ['4everNdeavor', 54.97], ['shortroundfarm', 54.49], ['Ghazgkull', 53.61], ['HELP_im_not_original', 52.01], ['-WPD-', 51.68], ['iSandpeople', 51.31], ['BoggleWogglez', 50.43], ['lazersmoke', 50.24], ['Gocountgrainsofsand', 46.71], ['SaraKmado', 46.34], ['slugmaboy8', 45.92]]
        }
    },
    top100: {
        cur: [['TheNitromeFan', 25227], ['Urbul', 12443], ['smarvin6689', 9257], ['GarlicoinAccount', 8934], ['TehVulpez', 7496], ['gordonpt8', 6108], ['davidjl123', 5211], ['thephilsblogbar', 5125], ['pie3636', 5073], ['[deleted]', 4105], ['Smartstocks', 3997], ['qualw', 3897], ['DemonBurritoCat', 3696], ['Sharpeye468', 3694], ['xHOCKEYx12', 3474], ['randomusername123458', 3399], ['kdiuro13', 2875], ['PaleRepresentative', 2369], ['KingCaspianX', 2176], ['SolidGoldMagikarp', 2145], ['Antichess', 2106], ['Decap_', 2061], ['a-username-for-me', 1908], ['JordanLadd', 1847], ['VitaminB16', 1722], ['AlienApricot', 1701], ['foxthechicken', 1582], ['abplows', 1550], ['ThreeDomeHome', 1434], ['Adinida', 1374], ['kawzeg', 1283], ['kongburrito', 1282], ['RandomRedditorWithNo', 1236], ['Saltbearer', 1224], ['skizfrenik_syco', 1143], ['amazingpikachu_38', 1057], ['origamimissile', 959], ['bobston314', 941], ['Pookah', 940], ['piyushsharma301', 917], ['HermioneReynaChase', 819], ['KatyLawson', 817], ['QuestoGuy', 795], ['Bluestalker', 757], ['CarbonSpectre', 748], ['heeric', 736], ['username111112222233', 733], ['Chalupa_Dad', 699], ['orangey10', 652], ['VMorkva', 619], ['qwertylool', 619], ['Robert_Schaosid', 606], ['NeonTaterTots', 602], ['empires-fall', 600], ['The_Nepenthe', 598], ['yodaisdancing', 581], ['llamasR5life', 580], ['Removedpixel', 579], ['tunatehfish', 577], ['Chiafriend12', 574], ['about929', 540], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['Hedix1', 508], ['poltory', 508], ['Chintam', 503], ['False1512', 500], ['cfcgtyk', 490], ['TOP_20', 488], ['Jacriton', 452], ['The_Necromancer10', 443], ['Syrrim', 437], ['FuckTheKingTho', 435], ['poon-is-food', 420], ['Ynax', 411], ['co3_carbonate', 402], ['WellHeresMyFourthAcc', 397], ['PrinceCrinkle', 386], ['rideride', 376], ['overturned-rock', 373], ['SaraKmado', 357], ['TheBravestFart', 343], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['NaShiqua', 307], ['MewDP', 288], ['Of_Mango', 285], ['JamesBCrazy', 280], ['zhige', 279], ['Ghazgkull', 275], ['mistyskye14', 275], ['dylantherabbit2016', 270], ['loriirubiio', 267], ['curtdammit', 266], ['hackerboy777', 260]],
        prev: [['TheNitromeFan', 18496], ['Urbul', 8022], ['smarvin6689', 7979], ['gordonpt8', 6106], ['davidjl123', 5073], ['pie3636', 5069], ['Smartstocks', 3990], ['Sharpeye468', 3693], ['DemonBurritoCat', 3583], ['xHOCKEYx12', 3474], ['randomusername123458', 3399], ['[deleted]', 3065], ['kdiuro13', 2795], ['qualw', 2786], ['KingCaspianX', 2176], ['Decap_', 2061], ['JordanLadd', 1847], ['Antichess', 1738], ['SolidGoldMagikarp', 1707], ['VitaminB16', 1697], ['TehVulpez', 1615], ['abplows', 1530], ['Adinida', 1374], ['kawzeg', 1283], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['skizfrenik_syco', 1143], ['amazingpikachu_38', 1008], ['origamimissile', 959], ['a-username-for-me', 949], ['bobston314', 941], ['Pookah', 933], ['piyushsharma301', 917], ['QuestoGuy', 795], ['HermioneReynaChase', 772], ['CarbonSpectre', 748], ['username111112222233', 728], ['orangey10', 652], ['qwertylool', 619], ['Robert_Schaosid', 606], ['empires-fall', 600], ['The_Nepenthe', 598], ['yodaisdancing', 581], ['Removedpixel', 579], ['tunatehfish', 577], ['Chiafriend12', 574], ['about929', 538], ['Chalupa_Dad', 533], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['Chintam', 503], ['False1512', 500], ['cfcgtyk', 490], ['TOP_20', 488], ['Jacriton', 451], ['Syrrim', 436], ['poon-is-food', 420], ['Ynax', 411], ['co3_carbonate', 402], ['WellHeresMyFourthAcc', 397], ['rideride', 376], ['SaraKmado', 357], ['TheBravestFart', 343], ['VMorkva', 342], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['Hedix1', 309], ['MewDP', 288], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['loriirubiio', 267], ['curtdammit', 266], ['dylantherabbit2016', 261], ['hackerboy777', 260], ['Nes370', 259], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['M_McFly', 248], ['PrinceCrinkle', 247], ['4everNdeavor', 245], ['TheFeathers', 243], ['Jondom_', 241], ['Omegamanthethird', 240], ['Mindlesssavage', 238], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['NotamsBumblebee', 222], ['Gocountgrainsofsand', 220], ['HELP_im_not_original', 214], ['FuckTheKingTho', 210]]
    },
    teams: {
        cur: [['TheNitromeFan and qualw', 4151], ['TheNitromeFan and Urbul', 3339], ['Urbul and smarvin6689', 3165], ['TheNitromeFan and smarvin6689', 2749], ['Adinida and davidjl123', 2584], ['Sharpeye468 and randomusername123458', 2570], ['TheNitromeFan and thephilsblogbar', 2525], ['GarlicoinAccount and TehVulpez', 2425], ['TheNitromeFan and pie3636', 2329], ['TheNitromeFan and gordonpt8', 2265], ['TehVulpez and TheNitromeFan', 2192], ['DemonBurritoCat and smarvin6689', 2176], ['GarlicoinAccount and Urbul', 1988], ['VitaminB16 and pie3636', 1958], ['GarlicoinAccount and TheNitromeFan', 1937], ['GarlicoinAccount and thephilsblogbar', 1842], ['TehVulpez and Urbul', 1697], ['TheNitromeFan and kdiuro13', 1385], ['Urbul and gordonpt8', 1350], ['Smartstocks and gordonpt8', 1284]],
        prev: [['TheNitromeFan and qualw', 3123], ['TheNitromeFan and Urbul', 2894], ['Urbul and smarvin6689', 2855], ['TheNitromeFan and smarvin6689', 2679], ['Adinida and davidjl123', 2584], ['Sharpeye468 and randomusername123458', 2570], ['TheNitromeFan and pie3636', 2329], ['TheNitromeFan and gordonpt8', 2265], ['DemonBurritoCat and smarvin6689', 2174], ['VitaminB16 and pie3636', 1958], ['TheNitromeFan and kdiuro13', 1364], ['Urbul and gordonpt8', 1347], ['Smartstocks and gordonpt8', 1284], ['KingCaspianX and Koraine', 1023], ['Antichess and tunatehfish', 1016], ['DemonBurritoCat and pie3636', 1003], ['TheNitromeFan and davidjl123', 974], ['pie3636 and smarvin6689', 949], ['DemonBurritoCat and kdiuro13', 875], ['TheNitromeFan and xHOCKEYx12', 784]]
    },
    deletedCounts: { cur: 556, prev: 555 },
    forks: {
        cur: 20,
        prev: 16,
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
            ["https://www.reddit.com/r/counting/comments/6r5367/tug_of_war_3200/dl44sxr/"],
            ["https://www.reddit.com/r/counting/comments/80qgs8/tug_of_war_0/dw506pn/"],
            ["https://www.reddit.com/r/counting/comments/8a36vx/tug_of_war_0/dx34bfm/"],
            ["https://www.reddit.com/r/counting/comments/9w5lky/tug_of_war_800/e9hxe25/"],
            ["https://www.reddit.com/r/counting/comments/aiaud6/tug_of_war_1000/eep4sor/"],
            ["https://www.reddit.com/r/counting/comments/as8ihx/tug_of_war_200/egtb2lj/"],
            ["https://www.reddit.com/r/counting/comments/b70axi/tug_of_war_0/ejue3xe/"]
        ]
    }
};
