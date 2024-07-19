import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo';
import { geo } from './world_countries';
import { Box, Typography, useTheme } from '@mui/material';



const data = [
    {
        "id": "AFG",
        "value": 966359
    },
    {
        "id": "AGO",
        "value": 728974
    },
    {
        "id": "ALB",
        "value": 873318
    },
    {
        "id": "ARE",
        "value": 259284
    },
    {
        "id": "ARG",
        "value": 984265
    },
    {
        "id": "ARM",
        "value": 179703
    },
    {
        "id": "ATA",
        "value": 544432
    },
    {
        "id": "ATF",
        "value": 641402
    },
    {
        "id": "AUT",
        "value": 773473
    },
    {
        "id": "AZE",
        "value": 427066
    },
    {
        "id": "BDI",
        "value": 459657
    },
    {
        "id": "BEL",
        "value": 223379
    },
    {
        "id": "BEN",
        "value": 394508
    },
    {
        "id": "BFA",
        "value": 393385
    },
    {
        "id": "BGD",
        "value": 851238
    },
    {
        "id": "BGR",
        "value": 912525
    },
    {
        "id": "BHS",
        "value": 831095
    },
    {
        "id": "BIH",
        "value": 306463
    },
    {
        "id": "BLR",
        "value": 496861
    },
    {
        "id": "BLZ",
        "value": 311089
    },
    {
        "id": "BOL",
        "value": 691567
    },
    {
        "id": "BRN",
        "value": 424360
    },
    {
        "id": "BTN",
        "value": 621405
    },
    {
        "id": "BWA",
        "value": 294436
    },
    {
        "id": "CAF",
        "value": 55503
    },
    {
        "id": "CAN",
        "value": 908893
    },
    {
        "id": "CHE",
        "value": 98293
    },
    {
        "id": "CHL",
        "value": 633295
    },
    {
        "id": "CHN",
        "value": 163628
    },
    {
        "id": "CIV",
        "value": 498370
    },
    {
        "id": "CMR",
        "value": 59324
    },
    {
        "id": "COG",
        "value": 509893
    },
    {
        "id": "COL",
        "value": 555212
    },
    {
        "id": "CRI",
        "value": 720125
    },
    {
        "id": "CUB",
        "value": 170727
    },
    {
        "id": "-99",
        "value": 523210
    },
    {
        "id": "CYP",
        "value": 875499
    },
    {
        "id": "CZE",
        "value": 498307
    },
    {
        "id": "DEU",
        "value": 182950
    },
    {
        "id": "DJI",
        "value": 20520
    },
    {
        "id": "DNK",
        "value": 560906
    },
    {
        "id": "DOM",
        "value": 535467
    },
    {
        "id": "DZA",
        "value": 395085
    },
    {
        "id": "ECU",
        "value": 967846
    },
    {
        "id": "EGY",
        "value": 250638
    },
    {
        "id": "ERI",
        "value": 112871
    },
    {
        "id": "ESP",
        "value": 397102
    },
    {
        "id": "EST",
        "value": 566967
    },
    {
        "id": "ETH",
        "value": 351650
    },
    {
        "id": "FIN",
        "value": 538644
    },
    {
        "id": "FJI",
        "value": 869906
    },
    {
        "id": "FLK",
        "value": 250754
    },
    {
        "id": "FRA",
        "value": 925658
    },
    {
        "id": "GAB",
        "value": 574814
    },
    {
        "id": "GBR",
        "value": 81384
    },
    {
        "id": "GEO",
        "value": 266082
    },
    {
        "id": "GHA",
        "value": 297101
    },
    {
        "id": "GIN",
        "value": 654545
    },
    {
        "id": "GMB",
        "value": 661773
    },
    {
        "id": "GNB",
        "value": 607802
    },
    {
        "id": "GNQ",
        "value": 151465
    },
    {
        "id": "GRC",
        "value": 538302
    },
    {
        "id": "GTM",
        "value": 297322
    },
    {
        "id": "GUY",
        "value": 822099
    },
    {
        "id": "HND",
        "value": 395596
    },
    {
        "id": "HRV",
        "value": 463308
    },
    {
        "id": "HTI",
        "value": 333604
    },
    {
        "id": "HUN",
        "value": 722216
    },
    {
        "id": "IDN",
        "value": 574246
    },
    {
        "id": "IND",
        "value": 774853
    },
    {
        "id": "IRL",
        "value": 53565
    },
    {
        "id": "IRN",
        "value": 737921
    },
    {
        "id": "IRQ",
        "value": 339501
    },
    {
        "id": "ISL",
        "value": 738512
    },
    {
        "id": "ISR",
        "value": 820159
    },
    {
        "id": "ITA",
        "value": 928674
    },
    {
        "id": "JAM",
        "value": 44694
    },
    {
        "id": "JOR",
        "value": 21744
    },
    {
        "id": "JPN",
        "value": 683812
    },
    {
        "id": "KAZ",
        "value": 632271
    },
    {
        "id": "KEN",
        "value": 229996
    },
    {
        "id": "KGZ",
        "value": 219330
    },
    {
        "id": "KHM",
        "value": 399152
    },
    {
        "id": "OSA",
        "value": 283277
    },
    {
        "id": "KWT",
        "value": 606100
    },
    {
        "id": "LAO",
        "value": 503933
    },
    {
        "id": "LBN",
        "value": 415054
    },
    {
        "id": "LBR",
        "value": 287661
    },
    {
        "id": "LBY",
        "value": 780012
    },
    {
        "id": "LKA",
        "value": 410148
    },
    {
        "id": "LSO",
        "value": 11820
    },
    {
        "id": "LTU",
        "value": 663692
    },
    {
        "id": "LUX",
        "value": 349317
    },
    {
        "id": "LVA",
        "value": 183522
    },
    {
        "id": "MAR",
        "value": 272463
    },
    {
        "id": "MDA",
        "value": 923773
    },
    {
        "id": "MDG",
        "value": 160783
    },
    {
        "id": "MEX",
        "value": 149785
    },
    {
        "id": "MKD",
        "value": 604123
    },
    {
        "id": "MLI",
        "value": 194201
    },
    {
        "id": "MMR",
        "value": 220276
    },
    {
        "id": "MNE",
        "value": 714264
    },
    {
        "id": "MNG",
        "value": 351796
    },
    {
        "id": "MOZ",
        "value": 485250
    },
    {
        "id": "MRT",
        "value": 132408
    },
    {
        "id": "MWI",
        "value": 115318
    },
    {
        "id": "MYS",
        "value": 176797
    },
    {
        "id": "NAM",
        "value": 728712
    },
    {
        "id": "NCL",
        "value": 835030
    },
    {
        "id": "NER",
        "value": 926085
    },
    {
        "id": "NGA",
        "value": 456463
    },
    {
        "id": "NIC",
        "value": 25053
    },
    {
        "id": "NLD",
        "value": 602468
    },
    {
        "id": "NOR",
        "value": 486063
    },
    {
        "id": "NPL",
        "value": 605140
    },
    {
        "id": "NZL",
        "value": 278604
    },
    {
        "id": "OMN",
        "value": 106800
    },
    {
        "id": "PAK",
        "value": 844034
    },
    {
        "id": "PAN",
        "value": 881985
    },
    {
        "id": "PER",
        "value": 646648
    },
    {
        "id": "PHL",
        "value": 599282
    },
    {
        "id": "PNG",
        "value": 922742
    },
    {
        "id": "POL",
        "value": 550162
    },
    {
        "id": "PRI",
        "value": 873024
    },
    {
        "id": "PRT",
        "value": 414705
    },
    {
        "id": "PRY",
        "value": 495729
    },
    {
        "id": "QAT",
        "value": 993092
    },
    {
        "id": "ROU",
        "value": 237367
    },
    {
        "id": "RUS",
        "value": 948018
    },
    {
        "id": "RWA",
        "value": 748236
    },
    {
        "id": "ESH",
        "value": 233458
    },
    {
        "id": "SAU",
        "value": 418156
    },
    {
        "id": "SDN",
        "value": 210994
    },
    {
        "id": "SDS",
        "value": 181564
    },
    {
        "id": "SEN",
        "value": 686505
    },
    {
        "id": "SLB",
        "value": 655282
    },
    {
        "id": "SLE",
        "value": 385790
    },
    {
        "id": "SLV",
        "value": 982233
    },
    {
        "id": "ABV",
        "value": 577162
    },
    {
        "id": "SOM",
        "value": 849803
    },
    {
        "id": "SRB",
        "value": 382501
    },
    {
        "id": "SUR",
        "value": 185832
    },
    {
        "id": "SVK",
        "value": 261577
    },
    {
        "id": "SVN",
        "value": 997309
    },
    {
        "id": "SWZ",
        "value": 709571
    },
    {
        "id": "SYR",
        "value": 239434
    },
    {
        "id": "TCD",
        "value": 735244
    },
    {
        "id": "TGO",
        "value": 841008
    },
    {
        "id": "THA",
        "value": 269614
    },
    {
        "id": "TJK",
        "value": 551044
    },
    {
        "id": "TKM",
        "value": 97732
    },
    {
        "id": "TLS",
        "value": 426738
    },
    {
        "id": "TTO",
        "value": 519132
    },
    {
        "id": "TUN",
        "value": 476423
    },
    {
        "id": "TUR",
        "value": 648194
    },
    {
        "id": "TWN",
        "value": 819343
    },
    {
        "id": "TZA",
        "value": 712548
    },
    {
        "id": "UGA",
        "value": 333071
    },
    {
        "id": "UKR",
        "value": 557319
    },
    {
        "id": "URY",
        "value": 949428
    },
    {
        "id": "USA",
        "value": 710894
    },
    {
        "id": "UZB",
        "value": 473880
    },
    {
        "id": "VEN",
        "value": 79869
    },
    {
        "id": "VNM",
        "value": 862518
    },
    {
        "id": "VUT",
        "value": 633806
    },
    {
        "id": "PSE",
        "value": 811180
    },
    {
        "id": "YEM",
        "value": 654676
    },
    {
        "id": "ZAF",
        "value": 429143
    },
    {
        "id": "ZMB",
        "value": 792408
    },
    {
        "id": "ZWE",
        "value": 692293
    },
    {
        "id": "KOR",
        "value": 428942
    }
]


export default function Geography({ IsDashboard = false }) {

    const theme = useTheme();


    return (
        <>
            {IsDashboard ? null : (
                <>
                    <Typography sx={{ color: theme.palette.info.main, fontSize: 26, fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>Geography</Typography>
                    <Typography sx={{ fontSize: 13, mb: 0, letterSpacing: 1 }}>Simple Geography Chart</Typography>
                </>
            )}
            <Box sx={{ height: IsDashboard ? '450px' : '75vh' }}>
                <ResponsiveChoropleth
                graticuleLineWidth={1}
                    theme={
                        {
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            },
                            "axis": {
                                "domain": {
                                    "line": {
                                        "stroke": theme.palette.text.primary,
                                        "strokeWidth": 1
                                    }
                                },
                                "legend": {
                                    "text": {
                                        "fontSize": 12,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "transparent"
                                    }
                                },
                                "ticks": {
                                    "line": {
                                        "stroke": theme.palette.text.primary,
                                        "strokeWidth": 1
                                    },
                                    "text": {
                                        "fontSize": 11,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "transparent"
                                    }
                                }
                            },
                            "grid": {
                                "line": {
                                    "stroke": "#dddddd",
                                    "strokeWidth": 1
                                }
                            },
                            "legends": {
                                "title": {
                                    "text": {
                                        "fontSize": 11,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "transparent"
                                    }
                                },
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                },
                                "ticks": {
                                    "line": {},
                                    "text": {
                                        "fontSize": 10,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "transparent"
                                    }
                                }
                            },
                            "annotations": {
                                "text": {
                                    "fontSize": 13,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "link": {
                                    "stroke": "#000000",
                                    "strokeWidth": 1,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "outline": {
                                    "stroke": "#000000",
                                    "strokeWidth": 2,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "symbol": {
                                    "fill": "#000000",
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                }
                            },
                            "tooltip": {
                                "wrapper": {},
                                "container": {
                                    "background": "black",
                                    "color": theme.palette.text.primary,
                                    "fontSize": 12
                                },
                                "basic": {},
                                "chip": {},
                                "table": {},
                                "tableCell": {},
                                "tableCellValue": {}
                            }
                        }
                    }
                    projectionScale={130}
                    data={data}
                    features={geo.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="spectral"
                    domain={[0, 1000000]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionTranslation={[0.5, 0.5]}
                    projectionRotation={[0, 0, 0]}
                    enableGraticule={false}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        },
                        {
                            id: 'gradient',
                            type: 'linearGradient',
                            colors: [
                                {
                                    offset: 0,
                                    color: '#000'
                                },
                                {
                                    offset: 100,
                                    color: 'inherit'
                                }
                            ]
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'CAN'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'CHN'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'ATA'
                            },
                            id: 'gradient'
                        }
                    ]}
                    legends={
                        IsDashboard ? [] :
                        [
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: theme.palette.text.primary,
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        // itemTextColor: '#000000',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </Box>
        </>
    )
}
