data = {
    lastData: "28 Sep 2017",
    lastUpdate: "28 Sep 2017",
    announcement: true,
    charts: {
        historical: "https://i.imgur.com/xD4uYLN.png",
        temporal: "https://i.imgur.com/6h2VWXh.png",
        frequency: "https://i.imgur.com/eljAYhm.png",
        getsLength: "https://i.imgur.com/mGzyiUu.png",
        weekly: "https://i.imgur.com/Iu3DkLq.png",
        replyTime: "https://i.imgur.com/PnbMREI.png"
    },
    comment: "- We have never stayed above zero for so long\n\
              - The count has gone below 1000 for the first time in three months and a half\n\
              - The count is still heading towards zero, with little to no resistance, after a fast but intense battle in the 1066 zone.\n\
              - We have reached 250 gets in total",
    counts: {
        total:       { cur: 119797, prev: 119015  },
        ofMain:      { cur: 119797/2006715*100, prev: 119015/2005464*100, precision: 2 },
        min:         { cur: -4043,  prev: -4043   },
        max:         { cur: 4084,   prev: 4084    },
        range:       { cur: 8127,   prev: 8127    },
        ofMaxRange:  { cur: 14.74,  prev: 14.74   },
        avg:         { cur: 153.8,  prev: 147.77  },
        med:         { cur: 73,     prev: 70      },
        mostCommon:  {
            cur:  [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]],
            prev: [[0, 1124], [-1, 784], [1, 712], [-1026, 539], [-1027, 517], [2, 365], [-2, 288], [3, 277], [7, 244], [6, 234]]
        },
        leastCommon: {
            cur:  [[-4043, 1], [4084, 1]],
            prev: [[-4043, 1], ["1084 and many numbers in the 1086-1599 range", 1], [4084, 1]]
        }
    },
    replyTime: {
        started: { cur: 692.47, prev: 690.85, unit: "day"    },
        fastest: { cur: 1,      prev: 1,      unit: "second" },
        slowest: { cur: 19.86,  prev: 19.86,  unit: "day"    },
        avg:     { cur: 8.32,   prev: 8.36,   unit: "minute" },
        med:     { cur: 14,     prev: 14,     unit: "second" }
    },
    countSign: {
        pos:           { cur: 70537,  prev: 69755  },
        neg:           { cur: 48136,  prev: 48136  },
        posPercent:    { cur: 58.88,  prev: 58.61  },
        negPercent:    { cur: 40.18,  prev: 40.48  },
        zeros:         { cur: 1124,   prev: 1124   },
        ofZero:        { cur: 106.58, prev: 105.89 },
        maxPosStreak:  { cur: 23343,  prev: 22561  },
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
        avgStreak:     { cur: 2.885,  prev: 2.9001, precision: 4 },
        posNegAsym:    { cur: 0.0483, prev: 0.0593, precision: 4 }
    },
    gets: {
        count:      { cur: 250,    prev: 249   },
        avg:        { cur: 44,     prev: 40.16 },
        med:        { cur: 0,      prev: 0     },
        mostCommon: {
            cur:  [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]],
            prev: [[200, 36], [0, 34], [400, 23], [-200, 21], [-400, 11]]
        },
        leastCommon: {
            cur:  [[-4000, 1], [4000, 1]],
            prev: [[1400, 1], [4000, 1]]
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
        avgTime:    { cur: 66.74,  prev: 66.86, unit: "hour" },
        medTime:    { cur: 28.63,  prev: 23.31, unit: "hour" },
        shortest:   { cur: 200,    prev: 200 },
        longest:    {
            length: { cur: 4144, prev: 4144 },
            begin: -200, end: 0
        },
        avgLen:     { cur: 479.18, prev: 477.97 },
        medLen:     { cur: 350,    prev: 350    },
    },
    getSign: {
        pos:           { cur: 120,   prev: 119   },
        neg:           { cur: 96,    prev: 96    },
        posPercent:    { cur: 48,    prev: 47.79 },
        negPercent:    { cur: 38.40, prev: 38.55 },
        zeros:         { cur: 34,    prev: 34    },
        ofZero:        { cur: 7.35,  prev: 7.32  },
        maxPosStreak:  { cur: 52,    prev: 51    },
        maxNegStreak:  { cur: 53,    prev: 53    },
        maxUpStreak:   {
            length:  { cur: 14, prev: 14  },
            begin: -2400, end: 400
        },
        maxDownStreak: {
            length:  { cur: 15, prev: 15 },
            begin: 400, end: -2600
        },
        avgStreak:     { cur: 3.1733, prev: 3.1733, precision: 4 },
        posNegAsym:    { cur: 0.3954, prev: 0.3954, precision: 4 }
    },
    oneStalemates: {
        cur:  [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1730, 152], [1799, 146], [1798, 145], [-1, 110], [3527, 101]],
        prev: [[-1026, 499], [-1027, 499], [-1563, 184], [-1564, 183], [-1731, 157], [-1730, 152], [1799, 146], [1798, 145], [-1, 110], [3527, 101]]
    },
    twoStalemates: {
        cur:  [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [1799, 1798, 290], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129]],
        prev: [[-1026, -1027, 998], [-1563, -1564, 367], [-1731, -1730, 305], [1799, 1798, 290], [-1, 0, 201], [3527, 3528, 191], [-10, -11, 159], [277, 276, 150], [156, "157 (order of the 157)", 142], [560, 561, 129]]
    },
    users: {
        count: { cur: 1292,  prev: 1286  },
        avg:   { cur: 92.72, prev: 92.55 },
        med:   { cur: 3,     prev: 3     },
        top20: {
            cur: [['TheNitromeFan', 10221], ['gordonpt8', 5776], ['smarvin6689', 5558], ['Urbul', 4948], ['davidjl123', 4805], ['pie3636', 4033], ['Smartstocks', 3976], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['DemonBurritoCat', 3401], ['randomusername123458', 3399], ['[deleted]', 2488], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1513], ['kdiuro13', 1382], ['Adinida', 1374], ['abplows', 1333], ['kawzeg', 1283]],
            prev: [['TheNitromeFan', 10062], ['gordonpt8', 5775], ['smarvin6689', 5553], ['davidjl123', 4804], ['Urbul', 4718], ['Smartstocks', 3976], ['pie3636', 3955], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['DemonBurritoCat', 3399], ['randomusername123458', 3399], ['[deleted]', 2488], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1513], ['Adinida', 1374], ['abplows', 1333], ['kawzeg', 1283], ['RandomRedditorWithNo', 1228]]
        },
        topGets: {
            threshold: 2,
            cur: [['TheNitromeFan', 30], ['davidjl123', 22], ['Sharpeye468', 19], ['DemonBurritoCat', 9], ['pie3636', 8], ['gordonpt8', 8], ['xHOCKEYx12', 8], ['smarvin6689', 8], ['KingCaspianX', 7], ['randomusername123458', 7], ['Smartstocks', 7], ['Urbul', 6], ['origamimissile', 5], ['kawzeg', 5], ['Adinida', 5], ['Decap_', 4], ['JordanLadd', 4], ['HermioneReynaChase', 3], ['kdiuro13', 3], ['co3_carbonate', 3], ['False1512', 3], ['cfcgtyk', 3], ['skizfrenik_syco', 3], ['Robert_Schaosid', 2], ['SolidGoldMagikarp', 2], ['hackerboy777', 2], ['TehVulpez', 2], ['VitaminB16', 2], ['UnsuccessfulAtLife', 2], ['qwertylool', 2], ['poltory', 2], ['Hedix1', 2], ['piyushsharma301', 2], ['lazersmoke', 2]],
            prev: [['TheNitromeFan', 29], ['davidjl123', 22], ['Sharpeye468', 19], ['DemonBurritoCat', 9], ['smarvin6689', 8], ['xHOCKEYx12', 8], ['pie3636', 8], ['gordonpt8', 8], ['KingCaspianX', 7], ['Smartstocks', 7], ['randomusername123458', 7], ['Urbul', 6], ['kawzeg', 5], ['Adinida', 5], ['origamimissile', 5], ['JordanLadd', 4], ['Decap_', 4], ['skizfrenik_syco', 3], ['HermioneReynaChase', 3], ['False1512', 3], ['kdiuro13', 3], ['co3_carbonate', 3], ['cfcgtyk', 3], ['lazersmoke', 2], ['hackerboy777', 2], ['TehVulpez', 2], ['piyushsharma301', 2], ['SolidGoldMagikarp', 2], ['UnsuccessfulAtLife', 2], ['Hedix1', 2], ['poltory', 2], ['qwertylool', 2], ['Robert_Schaosid', 2], ['VitaminB16', 2]]
        },
        topAssists: {
            threshold: 2,
            cur: [['TheNitromeFan', 22], ['davidjl123', 16], ['smarvin6689', 14], ['randomusername123458', 12], ['gordonpt8', 11], ['Sharpeye468', 10], ['Smartstocks', 10], ['Adinida', 8], ['Urbul', 8], ['SolidGoldMagikarp', 6], ['RandomRedditorWithNo', 6], ['pie3636', 6], ['DemonBurritoCat', 6], ['VitaminB16', 6], ['xHOCKEYx12', 6], ['username111112222233', 5], ['HermioneReynaChase', 5], ['KingCaspianX', 4], ['JordanLadd', 4], ['piyushsharma301', 4], ['abplows', 3], ['yodaisdancing', 3], ['[deleted]', 3], ['pixiestar1', 2], ['Robert_Schaosid', 2], ['Jacriton', 2], ['loriirubiio', 2], ['NubCaeks', 2], ['supersammy00', 2], ['torncolours', 2], ['Saltbearer', 2], ['poon-is-food', 2], ['4everNdeavor', 2], ['cfcgtyk', 2], ['xMeowzerz', 2]],
            prev: [['TheNitromeFan', 22], ['davidjl123', 16], ['smarvin6689', 14], ['randomusername123458', 12], ['gordonpt8', 11], ['Sharpeye468', 10], ['Smartstocks', 10], ['Adinida', 8], ['Urbul', 8], ['pie3636', 6], ['DemonBurritoCat', 6], ['SolidGoldMagikarp', 6], ['xHOCKEYx12', 6], ['RandomRedditorWithNo', 6], ['VitaminB16', 6], ['username111112222233', 5], ['HermioneReynaChase', 5], ['KingCaspianX', 4], ['piyushsharma301', 4], ['JordanLadd', 4], ['abplows', 3], ['yodaisdancing', 3], ['[deleted]', 3], ['supersammy00', 2], ['poon-is-food', 2], ['Jacriton', 2], ['pixiestar1', 2], ['torncolours', 2], ['Robert_Schaosid', 2], ['cfcgtyk', 2], ['4everNdeavor', 2], ['NubCaeks', 2], ['Saltbearer', 2], ['loriirubiio', 2], ['xMeowzerz', 2]]
        },
        fastest: {
            threshold: 50,
            cur: [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['curtdammit', 19.33, 81], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['a368', 31.11, 91], ['TheFeathers', 31.61, 243], ['IAmNateHello', 34.63, 112], ['DjMidget', 35.03, 130], ['Audict', 37.15, 131], ['MarchingTrombonist', 39.9, 107], ['erskw', 43.23, 122], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['Hedix1', 49.17, 309], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['InterdimensionalMan', 55.63, 57], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 67.92, 211], ['rideride', 74.65, 376], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['Thunderclanawe', 89.14, 50], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['mastersword83', 101.5, 64], ['Smartstocks', 102.58, 3976], ['StarmanPWN', 104.0, 50], ['tkim32', 105.53, 104], ['PBnSpots', 105.74, 74], ['TOP_20', 106.1, 488], ['yodaisdancing', 108.01, 541], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['Furyful_Fawful', 116.25, 232], ['amazingpikachu_38', 119.56, 163], ['Sharpeye468', 123.6, 3585], ['Zeusky', 124.43, 63], ['Jacriton', 131.36, 426], ['poon-is-food', 132.47, 420], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['VIOLENT_POOP', 141.62, 252], ['Robert_Schaosid', 145.77, 606], ['iSandpeople', 153.31, 225], ['limited-papertrail', 156.57, 185], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Chiafriend12', 164.33, 569], ['Sentenceh', 165.47, 68], ['WellHeresMyFourthAcc', 168.12, 376], ['Sam5253', 168.26, 205], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['davidjl123', 180.53, 4805], ['skatterbug', 181.96, 71], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['tonyxyou', 196.32, 145], ['MegaUltraSonic', 196.96, 82], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['Imbc', 209.52, 95], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['alkazam', 218.36, 114], ['[deleted]', 219.25, 2488], ['Jzkqm', 226.88, 177], ['BoggleWogglez', 232.61, 202], ['cupofmilo', 233.13, 109], ['Aldeberon', 236.65, 157], ['xMeowzerz', 244.14, 328], ['padiwik', 248.16, 75], ['Chintam', 254.78, 417], ['DruidNick', 264.07, 161], ['pixiestar1', 268.61, 250], ['linaeap', 268.84, 64], ['gordonpt8', 277.2, 5776], ['helpsupportreddit', 279.11, 63], ['Unknow3n', 281.49, 55], ['kdiuro13', 282.98, 1382], ['VitaminB16', 288.96, 1513]],
            prev: [['boxofkangaroos', 5.21, 151], ['Koraine', 6.71, 521], ['Godisdeadbutimnot', 12.61, 92], ['TheRittyl', 12.96, 152], ['networksky', 13.37, 102], ['hackerboy777', 16.39, 260], ['Dr_Mikhail_Arkov', 17.53, 98], ['curtdammit', 19.33, 81], ['lazersmoke', 21.0, 135], ['Haxalicious', 21.22, 147], ['coool12121212', 21.95, 62], ['iltrof', 25.56, 109], ['Adinida', 30.32, 1374], ['a368', 31.11, 91], ['TheFeathers', 31.61, 243], ['IAmNateHello', 34.63, 112], ['DjMidget', 35.03, 130], ['Audict', 37.15, 131], ['MarchingTrombonist', 39.9, 107], ['erskw', 43.23, 122], ['dariosteck', 46.89, 103], ['Lifeofchrome', 47.23, 64], ['bluejay___', 48.38, 80], ['TheBravestFart', 48.77, 343], ['Hedix1', 49.17, 309], ['rschaosid', 49.19, 339], ['Derpsilon_', 50.64, 50], ['InterdimensionalMan', 55.63, 57], ['NubCaeks', 57.22, 339], ['18529630741', 60.37, 73], ['co3_carbonate', 64.34, 402], ['Gocountgrainsofsand', 64.86, 202], ['rideride', 74.65, 376], ['2muchcontext', 82.17, 142], ['KJ_jk', 83.05, 73], ['ImmortalEcstasy', 83.69, 93], ['cob331', 84.15, 139], ['throwthrowawaytime', 85.13, 146], ['-WPD-', 85.37, 156], ['Smithman117', 85.62, 72], ['Huomenna', 87.59, 81], ['Thunderclanawe', 89.14, 50], ['Dix_Neuff', 94.25, 52], ['HELP_im_not_original', 100.16, 214], ['mastersword83', 101.5, 64], ['Smartstocks', 102.58, 3976], ['StarmanPWN', 104.0, 50], ['tkim32', 105.53, 104], ['PBnSpots', 105.74, 74], ['TOP_20', 106.1, 488], ['yodaisdancing', 108.01, 541], ['RedThoros', 109.06, 126], ['eamesa', 109.34, 86], ['Furyful_Fawful', 116.25, 232], ['amazingpikachu_38', 119.56, 163], ['Sharpeye468', 123.6, 3585], ['Zeusky', 124.43, 63], ['Jacriton', 131.36, 426], ['poon-is-food', 132.47, 420], ['SuperDuckMan', 137.68, 90], ['HarrisonFordFocus', 138.24, 72], ['VIOLENT_POOP', 141.62, 252], ['Robert_Schaosid', 145.77, 606], ['iSandpeople', 153.31, 225], ['limited-papertrail', 156.57, 185], ['zhige', 160.54, 279], ['slugmaboy8', 163.58, 161], ['Chiafriend12', 164.33, 569], ['Sentenceh', 165.47, 68], ['WellHeresMyFourthAcc', 168.12, 376], ['Sam5253', 168.26, 205], ['PM_ME_STOCK_PICS', 174.58, 318], ['Matthew_A', 180.12, 57], ['davidjl123', 180.56, 4804], ['skatterbug', 181.96, 71], ['Iacoizumi', 189.38, 63], ['mrpieface2', 190.24, 74], ['tonyxyou', 196.32, 145], ['MegaUltraSonic', 196.96, 82], ['Jondom_', 200.74, 241], ['loriirubiio', 203.9, 267], ['Imbc', 209.52, 95], ['Refia916', 215.14, 59], ['zotc', 215.61, 313], ['alkazam', 218.36, 114], ['[deleted]', 219.25, 2488], ['Jzkqm', 226.88, 177], ['BoggleWogglez', 232.61, 202], ['cupofmilo', 233.13, 109], ['Aldeberon', 236.65, 157], ['xMeowzerz', 244.14, 328], ['padiwik', 248.16, 75], ['Chintam', 254.78, 417], ['DruidNick', 264.07, 161], ['pixiestar1', 268.61, 250], ['linaeap', 268.84, 64], ['gordonpt8', 277.23, 5775], ['helpsupportreddit', 279.11, 63], ['Unknow3n', 281.49, 55], ['VitaminB16', 288.96, 1513], ['Aarex2104', 291.14, 320]]
        },
        fastestMed: {
            cur: [['Adinida', 3, 1374], ['rideride', 3, 376], ['boxofkangaroos', 3, 151], ['Koraine', 3, 521], ['davidjl123', 3, 4805], ['bluesolid', 4, 106], ['rschaosid', 4, 339], ['networksky', 4.5, 102], ['KingCaspianX', 5, 2174], ['co3_carbonate', 6, 402], ['Sharpeye468', 6, 3585], ['Smartstocks', 6, 3976], ['VitaminB16', 6, 1513], ['hackerboy777', 6, 260], ['lazersmoke', 6, 135], ['Jzkqm', 6, 177], ['NubCaeks', 6, 339], ['username111112222233', 6, 725], ['alkazam', 6, 114], ['xMeowzerz', 6, 328], ['HarrisonFordFocus', 6, 72], ['Robert_Schaosid', 7, 606], ['Sam5253', 7, 205], ['poltory', 7, 508], ['Elegance200', 7, 198], ['Godisdeadbutimnot', 8, 92], ['limited-papertrail', 8, 185], ['zotc', 8, 313], ['-WPD-', 8, 156], ['iltrof', 8, 109], ['yodaisdancing', 8, 541], ['Chintam', 8, 417], ['gordonpt8', 8, 5776], ['a368', 9, 91], ['tyjo99', 9, 115], ['Jacriton', 9, 426], ['TheFeathers', 9, 243], ['JackWaffles', 9, 119], ['18529630741', 9, 73], ['MarchingTrombonist', 9, 107], ['IAmNateHello', 9, 112], ['Chiafriend12', 10, 569], ['coool12121212', 10, 62], ['slugmaboy8', 10, 161], ['Hedix1', 10, 309], ['Unknow3n', 10, 55], ['TheBravestFart', 10, 343], ['Furyful_Fawful', 11, 232], ['dariosteck', 11, 103], ['pie3636', 11, 4033], ['TheRittyl', 11, 152], ['amazingpikachu_38', 11, 163], ['bag_of_chips_', 11, 251], ['VIOLENT_POOP', 11, 252], ['Aarex2104', 11, 320], ['kdiuro13', 11.5, 1382], ['Sztormcia', 12, 160], ['ImmortalEcstasy', 12, 93], ['origamimissile', 12, 953], ['pixiestar1', 12, 250], ['kawzeg', 12, 1283], ['DruidNick', 12, 161], ['smarvin6689', 12, 5558], ['torncolours', 12, 510], ['piyushsharma301', 12, 917], ['TheNitromeFan', 12, 10221], ['shortroundfarm', 12, 207], ['supersammy00', 13, 511], ['Dr_Mikhail_Arkov', 13, 98], ['curtdammit', 13, 81], ['[deleted]', 13, 2488], ['Haxalicious', 13, 147], ['JordanLadd', 13, 1847], ['tkim32', 13, 104], ['Jondom_', 14, 241], ['UnsuccessfulAtLife', 14, 135], ['zhige', 14, 279], ['QuestoGuy', 14, 795], ['Ynax', 14, 411], ['poon-is-food', 14, 420], ['SpaceCowX1', 14, 50], ['throwthrowawaytime', 14, 146], ['HELP_im_not_original', 14, 214], ['Aquillav', 14.5, 228], ['albert471', 15, 68], ['BoggleWogglez', 15, 202], ['2muchcontext', 15.5, 142], ['Thunderclanawe', 16, 50], ['cupofmilo', 16, 109], ['TOP_20', 16, 488], ['DjMidget', 16, 130], ['Yavoth', 16, 121], ['cob331', 17, 139], ['4everNdeavor', 17, 241], ['iSandpeople', 17, 225], ['Urbul', 17, 4948], ['RandomRedditorWithNo', 17, 1228], ['Audict', 17, 131], ['SolidGoldMagikarp', 17, 1698], ['StarmanPWN', 17.5, 50], ['The_Nepenthe', 18, 491]],
            prev: [['davidjl123', 3, 4804], ['boxofkangaroos', 3, 151], ['Koraine', 3, 521], ['rideride', 3, 376], ['Adinida', 3, 1374], ['rschaosid', 4, 339], ['bluesolid', 4, 106], ['networksky', 4.5, 102], ['KingCaspianX', 5, 2174], ['username111112222233', 6, 725], ['xMeowzerz', 6, 328], ['Smartstocks', 6, 3976], ['NubCaeks', 6, 339], ['co3_carbonate', 6, 402], ['Jzkqm', 6, 177], ['VitaminB16', 6, 1513], ['alkazam', 6, 114], ['lazersmoke', 6, 135], ['hackerboy777', 6, 260], ['HarrisonFordFocus', 6, 72], ['Sharpeye468', 6, 3585], ['Robert_Schaosid', 7, 606], ['poltory', 7, 508], ['Sam5253', 7, 205], ['Elegance200', 7, 198], ['limited-papertrail', 8, 185], ['yodaisdancing', 8, 541], ['-WPD-', 8, 156], ['Chintam', 8, 417], ['iltrof', 8, 109], ['zotc', 8, 313], ['Godisdeadbutimnot', 8, 92], ['gordonpt8', 8, 5775], ['TheFeathers', 9, 243], ['MarchingTrombonist', 9, 107], ['tyjo99', 9, 115], ['18529630741', 9, 73], ['Jacriton', 9, 426], ['a368', 9, 91], ['JackWaffles', 9, 119], ['IAmNateHello', 9, 112], ['Hedix1', 10, 309], ['slugmaboy8', 10, 161], ['TheBravestFart', 10, 343], ['coool12121212', 10, 62], ['Chiafriend12', 10, 569], ['Unknow3n', 10, 55], ['TheRittyl', 11, 152], ['VIOLENT_POOP', 11, 252], ['amazingpikachu_38', 11, 163], ['dariosteck', 11, 103], ['Furyful_Fawful', 11, 232], ['bag_of_chips_', 11, 251], ['pie3636', 11, 3955], ['Aarex2104', 11, 320], ['ImmortalEcstasy', 12, 93], ['piyushsharma301', 12, 917], ['pixiestar1', 12, 250], ['Sztormcia', 12, 160], ['kawzeg', 12, 1283], ['DruidNick', 12, 161], ['TheNitromeFan', 12, 10062], ['smarvin6689', 12, 5553], ['origamimissile', 12, 953], ['torncolours', 12, 510], ['shortroundfarm', 12, 207], ['JordanLadd', 13, 1847], ['Dr_Mikhail_Arkov', 13, 98], ['Haxalicious', 13, 147], ['curtdammit', 13, 81], ['[deleted]', 13, 2488], ['tkim32', 13, 104], ['kdiuro13', 13, 1210], ['supersammy00', 13, 511], ['UnsuccessfulAtLife', 14, 135], ['QuestoGuy', 14, 795], ['zhige', 14, 279], ['SpaceCowX1', 14, 50], ['HELP_im_not_original', 14, 214], ['Ynax', 14, 411], ['Jondom_', 14, 241], ['throwthrowawaytime', 14, 146], ['poon-is-food', 14, 420], ['Aquillav', 14.5, 228], ['albert471', 15, 68], ['BoggleWogglez', 15, 202], ['2muchcontext', 15.5, 142], ['Yavoth', 16, 121], ['TOP_20', 16, 488], ['cupofmilo', 16, 109], ['DjMidget', 16, 130], ['Thunderclanawe', 16, 50], ['Audict', 17, 131], ['iSandpeople', 17, 225], ['SolidGoldMagikarp', 17, 1698], ['4everNdeavor', 17, 241], ['RandomRedditorWithNo', 17, 1228], ['cob331', 17, 139], ['Urbul', 17, 4718], ['StarmanPWN', 17.5, 50], ['EinsteinReplica', 18, 168]]
        },
        speedScore: {
            cur: [['TheNitromeFan', 2790.61], ['davidjl123', 2485.29], ['gordonpt8', 1926.86], ['Smartstocks', 1524.47], ['smarvin6689', 1502.83], ['Sharpeye468', 1404.54], ['Urbul', 1367.33], ['pie3636', 1039.67], ['Adinida', 849.22], ['KingCaspianX', 824.01], ['randomusername123458', 792.75], ['[deleted]', 724.71], ['xHOCKEYx12', 705.23], ['DemonBurritoCat', 685.11], ['VitaminB16', 646.99], ['SolidGoldMagikarp', 480.58], ['Decap_', 448.58], ['JordanLadd', 422.53], ['kdiuro13', 396.98], ['kawzeg', 360.93], ['abplows', 317.87], ['Koraine', 308.27], ['RandomRedditorWithNo', 303.8], ['skizfrenik_syco', 294.8], ['origamimissile', 288.38], ['username111112222233', 260.14], ['piyushsharma301', 246.19], ['TehVulpez', 241.08], ['Saltbearer', 235.26], ['QuestoGuy', 225.08], ['Robert_Schaosid', 213.41], ['Pookah', 191.58], ['rideride', 179.83], ['yodaisdancing', 172.17], ['HermioneReynaChase', 171.63], ['Chiafriend12', 166.49], ['rschaosid', 160.01], ['torncolours', 154.72], ['poltory', 154.03], ['co3_carbonate', 146.48], ['NubCaeks', 134.65], ['CarbonSpectre', 129.65], ['Jacriton', 129.36], ['qwertylool', 128.73], ['supersammy00', 126.81], ['Chintam', 126.22], ['xMeowzerz', 122.35], ['TOP_20', 118.79], ['Removedpixel', 114.78], ['Ynax', 110.25], ['The_Nepenthe', 106.28], ['TheBravestFart', 106.21], ['poon-is-food', 104.11], ['zotc', 100.52], ['False1512', 99.68], ['hackerboy777', 99.63], ['WellHeresMyFourthAcc', 93.63], ['Hedix1', 93.62], ['Aarex2104', 91.6], ['Syrrim', 88.75], ['cfcgtyk', 79.67], ['boxofkangaroos', 79.48], ['TheFeathers', 76.73], ['zhige', 76.11], ['Sam5253', 75.9], ['bag_of_chips_', 74.74], ['VIOLENT_POOP', 69.6], ['PM_ME_STOCK_PICS', 69.02], ['Weekndr', 68.04], ['pixiestar1', 66.82], ['Of_Mango', 64.59], ['Furyful_Fawful', 63.67], ['Elegance200', 62.66], ['Jzkqm', 61.14], ['orangey10', 60.97], ['loriirubiio', 59.25], ['Jondom_', 58.38], ['limited-papertrail', 56.49], ['a-username-for-me', 56.26], ['Aquillav', 56.06], ['4everNdeavor', 54.82], ['shortroundfarm', 54.49], ['Ghazgkull', 53.61], ['HELP_im_not_original', 52.01], ['-WPD-', 51.68], ['iSandpeople', 51.31], ['BoggleWogglez', 50.43], ['lazersmoke', 50.24], ['amazingpikachu_38', 46.46], ['slugmaboy8', 45.92], ['TheRittyl', 45.79], ['Gocountgrainsofsand', 45.75], ['bluesolid', 44.92], ['networksky', 44.3], ['alkazam', 43.32], ['DruidNick', 42.86], ['Nes370', 42.54], ['Sztormcia', 41.33], ['EinsteinReplica', 41.27], ['throwthrowawaytime', 41.05], ['SaraKmado', 40.67]],
            prev: [['TheNitromeFan', 2745.93], ['davidjl123', 2485.03], ['gordonpt8', 1926.67], ['Smartstocks', 1524.46], ['smarvin6689', 1502.51], ['Sharpeye468', 1404.53], ['Urbul', 1302.81], ['pie3636', 1022.54], ['Adinida', 849.16], ['KingCaspianX', 823.9], ['randomusername123458', 792.74], ['[deleted]', 724.65], ['xHOCKEYx12', 705.2], ['DemonBurritoCat', 685.02], ['VitaminB16', 646.92], ['SolidGoldMagikarp', 480.55], ['Decap_', 448.51], ['JordanLadd', 422.52], ['kawzeg', 360.92], ['kdiuro13', 334.42], ['abplows', 317.86], ['Koraine', 308.13], ['RandomRedditorWithNo', 303.64], ['skizfrenik_syco', 294.52], ['origamimissile', 288.35], ['username111112222233', 260.11], ['piyushsharma301', 246.15], ['TehVulpez', 241.01], ['Saltbearer', 235.26], ['QuestoGuy', 225.06], ['Robert_Schaosid', 213.19], ['Pookah', 191.57], ['rideride', 179.79], ['yodaisdancing', 172.14], ['HermioneReynaChase', 171.55], ['Chiafriend12', 166.47], ['rschaosid', 159.9], ['torncolours', 154.7], ['poltory', 154.01], ['co3_carbonate', 146.43], ['NubCaeks', 134.52], ['CarbonSpectre', 129.45], ['Jacriton', 129.33], ['qwertylool', 128.71], ['supersammy00', 126.78], ['Chintam', 126.21], ['xMeowzerz', 122.18], ['TOP_20', 118.34], ['Removedpixel', 114.73], ['Ynax', 110.12], ['The_Nepenthe', 106.26], ['TheBravestFart', 105.93], ['poon-is-food', 104.08], ['zotc', 100.39], ['False1512', 99.65], ['hackerboy777', 99.56], ['WellHeresMyFourthAcc', 93.49], ['Hedix1', 93.37], ['Aarex2104', 91.51], ['Syrrim', 88.7], ['boxofkangaroos', 79.17], ['cfcgtyk', 78.41], ['TheFeathers', 76.63], ['zhige', 76.08], ['Sam5253', 75.81], ['bag_of_chips_', 74.69], ['VIOLENT_POOP', 69.29], ['PM_ME_STOCK_PICS', 68.97], ['Weekndr', 68.03], ['pixiestar1', 66.79], ['Of_Mango', 64.18], ['Furyful_Fawful', 63.65], ['Elegance200', 62.52], ['Jzkqm', 61.12], ['orangey10', 60.73], ['loriirubiio', 59.13], ['Jondom_', 58.19], ['limited-papertrail', 56.16], ['a-username-for-me', 55.99], ['Aquillav', 55.96], ['4everNdeavor', 54.75], ['shortroundfarm', 54.46], ['Ghazgkull', 53.55], ['HELP_im_not_original', 51.99], ['-WPD-', 51.54], ['iSandpeople', 51.03], ['BoggleWogglez', 50.41], ['lazersmoke', 50.19], ['amazingpikachu_38', 46.42], ['slugmaboy8', 45.84], ['TheRittyl', 45.62], ['bluesolid', 44.9], ['networksky', 44.26], ['Gocountgrainsofsand', 44.13], ['alkazam', 43.19], ['DruidNick', 42.85], ['Nes370', 42.48], ['Sztormcia', 41.29], ['EinsteinReplica', 41.19], ['throwthrowawaytime', 41.03], ['SaraKmado', 40.65]]
        }
    },
    top100: {
        cur: [['TheNitromeFan', 10221], ['gordonpt8', 5776], ['smarvin6689', 5558], ['Urbul', 4948], ['davidjl123', 4805], ['pie3636', 4033], ['Smartstocks', 3976], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['DemonBurritoCat', 3401], ['randomusername123458', 3399], ['[deleted]', 2488], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1513], ['kdiuro13', 1382], ['Adinida', 1374], ['abplows', 1333], ['kawzeg', 1283], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['skizfrenik_syco', 1143], ['TehVulpez', 1134], ['origamimissile', 953], ['Pookah', 930], ['piyushsharma301', 917], ['QuestoGuy', 795], ['HermioneReynaChase', 772], ['username111112222233', 725], ['CarbonSpectre', 640], ['qwertylool', 619], ['Robert_Schaosid', 606], ['Removedpixel', 579], ['Chiafriend12', 569], ['yodaisdancing', 541], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['False1512', 500], ['The_Nepenthe', 491], ['TOP_20', 488], ['Syrrim', 436], ['Jacriton', 426], ['poon-is-food', 420], ['Chintam', 417], ['cfcgtyk', 414], ['Ynax', 411], ['co3_carbonate', 402], ['a-username-for-me', 394], ['rideride', 376], ['WellHeresMyFourthAcc', 376], ['TheBravestFart', 343], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['orangey10', 313], ['Hedix1', 309], ['SaraKmado', 290], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['about929', 275], ['loriirubiio', 267], ['hackerboy777', 260], ['Nes370', 259], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['TheFeathers', 243], ['Jondom_', 241], ['4everNdeavor', 241], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['Omegamanthethird', 217], ['HELP_im_not_original', 214], ['Mindlesssavage', 212], ['Gocountgrainsofsand', 211], ['shortroundfarm', 207], ['Sam5253', 205], ['thatdometho', 202], ['BoggleWogglez', 202], ['VMorkva', 200], ['Elegance200', 198], ['M_McFly', 193], ['limited-papertrail', 185], ['ermahgerd_cats', 183], ['Jzkqm', 177], ['enceladus47', 174], ['EinsteinReplica', 168], ['Lucwousin', 167], ['amazingpikachu_38', 163], ['slugmaboy8', 161]],
        prev: [['TheNitromeFan', 10062], ['gordonpt8', 5775], ['smarvin6689', 5553], ['davidjl123', 4804], ['Urbul', 4718], ['Smartstocks', 3976], ['pie3636', 3955], ['Sharpeye468', 3585], ['xHOCKEYx12', 3473], ['DemonBurritoCat', 3399], ['randomusername123458', 3399], ['[deleted]', 2488], ['KingCaspianX', 2174], ['Decap_', 2061], ['JordanLadd', 1847], ['SolidGoldMagikarp', 1698], ['VitaminB16', 1513], ['Adinida', 1374], ['abplows', 1333], ['kawzeg', 1283], ['RandomRedditorWithNo', 1228], ['Saltbearer', 1224], ['kdiuro13', 1210], ['skizfrenik_syco', 1143], ['TehVulpez', 1134], ['origamimissile', 953], ['Pookah', 930], ['piyushsharma301', 917], ['QuestoGuy', 795], ['HermioneReynaChase', 772], ['username111112222233', 725], ['CarbonSpectre', 640], ['qwertylool', 619], ['Robert_Schaosid', 606], ['Removedpixel', 579], ['Chiafriend12', 569], ['yodaisdancing', 541], ['Koraine', 521], ['supersammy00', 511], ['torncolours', 510], ['poltory', 508], ['False1512', 500], ['The_Nepenthe', 491], ['TOP_20', 488], ['Syrrim', 436], ['Jacriton', 426], ['poon-is-food', 420], ['Chintam', 417], ['Ynax', 411], ['cfcgtyk', 408], ['co3_carbonate', 402], ['a-username-for-me', 394], ['rideride', 376], ['WellHeresMyFourthAcc', 376], ['TheBravestFart', 343], ['Weekndr', 340], ['rschaosid', 339], ['NubCaeks', 339], ['xMeowzerz', 328], ['Aarex2104', 320], ['PM_ME_STOCK_PICS', 318], ['zotc', 313], ['orangey10', 313], ['Hedix1', 309], ['SaraKmado', 290], ['Of_Mango', 285], ['zhige', 279], ['Ghazgkull', 275], ['about929', 275], ['loriirubiio', 267], ['hackerboy777', 260], ['Nes370', 259], ['VIOLENT_POOP', 252], ['bag_of_chips_', 251], ['pixiestar1', 250], ['TheFeathers', 243], ['4everNdeavor', 241], ['Jondom_', 241], ['Furyful_Fawful', 232], ['lawnmowerparades', 231], ['Aquillav', 228], ['iSandpeople', 225], ['Omegamanthethird', 217], ['HELP_im_not_original', 214], ['Mindlesssavage', 212], ['shortroundfarm', 207], ['Sam5253', 205], ['Gocountgrainsofsand', 202], ['thatdometho', 202], ['BoggleWogglez', 202], ['VMorkva', 200], ['Elegance200', 198], ['M_McFly', 193], ['limited-papertrail', 185], ['ermahgerd_cats', 183], ['Jzkqm', 177], ['enceladus47', 174], ['EinsteinReplica', 168], ['Lucwousin', 167], ['amazingpikachu_38', 163], ['slugmaboy8', 161]]
    },
    deletedCounts: { cur: 535, prev: 535 },
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
