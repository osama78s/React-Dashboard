import React from 'react'
import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'

const data = [
  {
    "id": "Tailwind",
    "label": "Tailwind",
    "value": 151,
    "color": "hsl(235, 70%, 50%)"
  },
  {
    "id": "React",
    "label": "React",
    "value": 416,
    "color": "hsl(51, 70%, 50%)"
  },
  {
    "id": "TypeScript",
    "label": "TypeScript",
    "value": 278,
    "color": "hsl(200, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 176,
    "color": "hsl(219, 70%, 50%)"
  },
  
  {
    "id": "JavaScript",
    "label": "JavaScript",
    "value": 127,
    "color": "hsl(120, 70%, 50%)"
  }
]


export default function Pie({ IsDashboard = false }) {
  const theme = useTheme()

  return (
    <>
      <Box sx={{ height: IsDashboard ? '250px' : '75vh', mt: IsDashboard ? 8 : 0 }}>
        <ResponsivePie
              theme={
                {
                  "text": {
                    "fontSize": 11,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                  },
                  "axis": {
                    "domain": {
                      "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                      }
                    },
                    "legend": {
                      "text": {
                        "fontSize": 12,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                      }
                    },
                    "ticks": {
                      "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                      },
                      "text": {
                        "fontSize": 11,
                        "fill": "#333333",
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
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                      }
                    },
                    "text": {
                      "fontSize": 11,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                    },
                    "ticks": {
                      "line": {},
                      "text": {
                        "fontSize": 10,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                      }
                    }
                  },
                  "annotations": {
                    "text": {
                      "fontSize": 13,
                      "fill": "#333333",
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
                      "background": "#ffffff",
                      "color": "#333333",
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
          margin={ IsDashboard ? { top:10, right: 0, bottom: 10, left: 0 }  : { top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={ IsDashboard ? 0.8 : 0.5}
          padAngle={0.7}
          cornerRadius={3}
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
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor= {theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          enableArcLabels={ IsDashboard ? false : true }
          enableArcLinkLabels={ IsDashboard ? false : true }
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                2
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
          fill={[
            {
              match: {
                id: 'ruby'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'c'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'go'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'python'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'scala'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'lisp'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'elixir'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'javascript'
              },
              id: 'lines'
            }
          ]}
          legends={
            IsDashboard ? [] :
            [
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: theme.palette.text.primary,
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: theme.palette.text.primary
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
