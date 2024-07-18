import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';


const data = [
  {
    "id": "japan",
    "color": "hsl(262, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 5
      },
      {
        "x": "helicopter",
        "y": 173
      },
      {
        "x": "boat",
        "y": 66
      },
      {
        "x": "train",
        "y": 89
      },
      {
        "x": "subway",
        "y": 134
      },
      {
        "x": "bus",
        "y": 56
      },
      {
        "x": "car",
        "y": 242
      },
      {
        "x": "moto",
        "y": 185
      },
      {
        "x": "bicycle",
        "y": 142
      },
      {
        "x": "horse",
        "y": 48
      },
      {
        "x": "skateboard",
        "y": 227
      },
      {
        "x": "others",
        "y": 126
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(90, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 208
      },
      {
        "x": "helicopter",
        "y": 52
      },
      {
        "x": "boat",
        "y": 254
      },
      {
        "x": "train",
        "y": 290
      },
      {
        "x": "subway",
        "y": 24
      },
      {
        "x": "bus",
        "y": 132
      },
      {
        "x": "car",
        "y": 270
      },
      {
        "x": "moto",
        "y": 249
      },
      {
        "x": "bicycle",
        "y": 42
      },
      {
        "x": "horse",
        "y": 115
      },
      {
        "x": "skateboard",
        "y": 20
      },
      {
        "x": "others",
        "y": 123
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(91, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 187
      },
      {
        "x": "helicopter",
        "y": 94
      },
      {
        "x": "boat",
        "y": 100
      },
      {
        "x": "train",
        "y": 113
      },
      {
        "x": "subway",
        "y": 150
      },
      {
        "x": "bus",
        "y": 216
      },
      {
        "x": "car",
        "y": 254
      },
      {
        "x": "moto",
        "y": 214
      },
      {
        "x": "bicycle",
        "y": 261
      },
      {
        "x": "horse",
        "y": 81
      },
      {
        "x": "skateboard",
        "y": 93
      },
      {
        "x": "others",
        "y": 231
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(213, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 167
      },
      {
        "x": "helicopter",
        "y": 149
      },
      {
        "x": "boat",
        "y": 200
      },
      {
        "x": "train",
        "y": 100
      },
      {
        "x": "subway",
        "y": 263
      },
      {
        "x": "bus",
        "y": 200
      },
      {
        "x": "car",
        "y": 173
      },
      {
        "x": "moto",
        "y": 255
      },
      {
        "x": "bicycle",
        "y": 100
      },
      {
        "x": "horse",
        "y": 250
      },
      {
        "x": "skateboard",
        "y": 300
      },
      {
        "x": "others",
        "y": 120
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(59, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 100
      },
      {
        "x": "helicopter",
        "y": 200
      },
      {
        "x": "boat",
        "y": 200
      },
      {
        "x": "train",
        "y": 200
      },
      {
        "x": "subway",
        "y": 200
      },
      {
        "x": "bus",
        "y": 200
      },
      {
        "x": "car",
        "y": 180
      },
      {
        "x": "moto",
        "y": 200
      },
      {
        "x": "bicycle",
        "y": 200
      },
      {
        "x": "horse",
        "y": 200
      },
      {
        "x": "skateboard",
        "y": 300
      },
      {
        "x": "others",
        "y": 150
      }
    ]
  }
]

export default function Line({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <>
      {isDashboard ? null : (
        <>
          <Typography
            sx={{
              color: theme.palette.info.main,
              fontSize: 26,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              mb: 0.5,
            }}
          >
            Line Chart
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              mb: 0,
              letterSpacing: 1,
            }}
          >
            Simple Line Chart
          </Typography>
        </>
      ) }

      <Box sx={{ height: isDashboard ? '350px' : '75vh' }}>
        <ResponsiveLine
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
                  "outlineColor": '',
                  "outlineOpacity": 1
                },
                "link": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "outlineWidth": 2,
                  "outlineColor": '',
                  "outlineOpacity": 1
                },
                "outline": {
                  "stroke": "#000000",
                  "strokeWidth": 2,
                  "outlineWidth": 2,
                  "outlineColor": '',
                  "outlineOpacity": 1
                },
                "symbol": {
                  "fill": "#000000",
                  "outlineWidth": 2,
                  "outlineColor": '',
                  "outlineOpacity": 1
                }
              },
              "tooltip": {
                "wrapper": {},
                "container": {
                  "background": '',
                  "color": '',
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
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null :  'transportation',
            legendOffset: 40,
            legendPosition: 'middle',
            truncateTickAt: 0
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null :  'count',
            legendOffset: -50,
            legendPosition: 'middle',
            truncateTickAt: 0
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
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
