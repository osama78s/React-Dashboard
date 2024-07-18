import React from 'react'
import { Paper, Stack, Typography, Box, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie';


const data = [
    {
        "id": "php",
        "label": "php",
        "value": 489,
        "color": "hsl(107, 70%, 50%)"
    },
    {
        "id": "hack",
        "label": "hack",
        "value": 177,
        "color": "hsl(181, 70%, 50%)"
    },
    {
        "id": "scala",
        "label": "scala",
        "value": 547,
        "color": "hsl(36, 70%, 50%)"
    },
    {
        "id": "ruby",
        "label": "ruby",
        "value": 150,
        "color": "hsl(140, 70%, 50%)"
    },
    {
        "id": "erlang",
        "label": "erlang",
        "value": 200,
        "color": "hsl(209, 70%, 50%)"
    }
]
export const Card = ({ icon, title, subtitle, increase, scheme }) => {
    const theme = useTheme();

    return (
        <>
            <Paper sx={{ minWidth: '333px', p: 1.5, display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>

                <Stack direction={'column'} gap={1} justifyContent={'center'}>
                    {icon}
                    <Typography sx={{ fontSize: 13 }}>{title}</Typography>
                    <Typography sx={{ fontSize: 14, letterSpacing: 1 }}>{subtitle}</Typography>
                </Stack>

                <Stack alignItems={'center'}>
                    <Box height={'70px'} width={'70px'}>
                        <ResponsivePie
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
                                            "background": 'black',
                                            "color": '#fff',
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
                            data={data}
                            margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            enableArcLabels={false}
                            enableArcLinkLabels={false}
                            cornerRadius={3}
                            colors={{ scheme: scheme }}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        0.2
                                    ]
                                ]
                            }}

                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                        />
                    </Box>
                    <Typography sx={{ fontSize: 13 }}>{increase}</Typography>
                </Stack>

            </Paper>
        </>
    )
}
