import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar'

const data =
  [
    {
      "Year": "2019",
      "Spani": 61,
      "hot dogColor": "hsl(77, 70%, 50%)",
      "Italia": 58,
      "burgerColor": "hsl(341, 70%, 50%)",
      "France": 171,
      "sandwichColor": "hsl(8, 70%, 50%)",
      "Argntina": 185,
      "kebabColor": "hsl(245, 70%, 50%)",
      "Barazil": 144,
      "friesColor": "hsl(302, 70%, 50%)",
      "England": 60,
      "donutColor": "hsl(295, 70%, 50%)"
    },
    {
      "Year": "2020",
      "England": 63,
      "hot dogColor": "hsl(91, 70%, 50%)",
      "Argntina": 100,
      "burgerColor": "hsl(137, 70%, 50%)",
      "France": 150,
      "sandwichColor": "hsl(78, 70%, 50%)",
      "Barazil": 145,
      "kebabColor": "hsl(245, 70%, 50%)",
      "Spani": 176,
      "friesColor": "hsl(350, 70%, 50%)",
      "Italia": 22,
      "donutColor": "hsl(170, 70%, 50%)"
    },
    {
      "Year": "2021",
      "Italia": 146,
      "hot dogColor": "hsl(309, 70%, 50%)",
      "Spani": 30,
      "burgerColor": "hsl(104, 70%, 50%)",
      "Barazil": 135,
      "sandwichColor": "hsl(61, 70%, 50%)",
      "France": 81,
      "kebabColor": "hsl(97, 70%, 50%)",
      "Argntina": 149,
      "friesColor": "hsl(334, 70%, 50%)",
      "England": 200,
      "donutColor": "hsl(98, 70%, 50%)"
    },
    {
      "Year": "2022",
      "Italia": 137,
      "hot dogColor": "hsl(293, 70%, 50%)",
      "Spani": 90,
      "burgerColor": "hsl(61, 70%, 50%)",
      "Barazil": 128,
      "sandwichColor": "hsl(266, 70%, 50%)",
      "France": 60,
      "kebabColor": "hsl(207, 70%, 50%)",
      "Argntina": 80,
      "friesColor": "hsl(327, 70%, 50%)",
      "England": 50,
      "donutColor": "hsl(189, 70%, 50%)"
    },
    {
      "Year": "2023",
      "England": 164,
      "hot dogColor": "hsl(113, 70%, 50%)",
      "Argntina": 90,
      "burgerColor": "hsl(151, 70%, 50%)",
      "France": 92,
      "sandwichColor": "hsl(265, 70%, 50%)",
      "Barazil": 84,
      "kebabColor": "hsl(354, 70%, 50%)",
      "Spani": 52,
      "friesColor": "hsl(58, 70%, 50%)",
      "Italia": 198,
      "donutColor": "hsl(357, 70%, 50%)"
    },
    {
      "Year": "2024",
      "Barazil": 42,
      "hot dogColor": "hsl(277, 70%, 50%)",
      "France": 190,
      "burgerColor": "hsl(42, 70%, 50%)",
      "Italia": 80,
      "sandwichColor": "hsl(311, 70%, 50%)",
      "Spani": 181,
      "kebabColor": "hsl(63, 70%, 50%)",
      "England": 0,
      "friesColor": "hsl(221, 70%, 50%)",
      "Argntina": 70,
      "donutColor": "hsl(136, 70%, 50%)"
    }

  ]

export default function Bar({ IsDashboard = false }) {
  const theme = useTheme();

  return (
    <>
      {IsDashboard ? null : (
        <>
          <Typography sx={{ color: theme.palette.info.main, fontSize: 26, fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>Bar Chart</Typography>
          <Typography sx={{ fontSize: 13, mb: 0, letterSpacing: 1 }}>The Minimum Wage In Germany, France And Spain (EUR/Monthb)</Typography></>
      )}

      <Box sx={{ height: IsDashboard ? '350px' : '75vh' }}>
        <ResponsiveBar
          theme={
            {
              "text": {
                "fontSize": 11,
                "fill": '',
                "outlineWidth": 0,
                "outlineColor": "transparent"
              },
              "axis": {
                "domain": {
                  "line": {
                    "stroke": '',
                    "strokeWidth": 1
                  }
                },
                "legend": {
                  "text": {
                    "fontSize": 12,
                    "fill": '',
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                  }
                },
                "ticks": {
                  "line": {
                    "stroke": '',
                    "strokeWidth": 1
                  },
                  "text": {
                    "fontSize": 11,
                    "fill": '',
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
                    "fill": '',
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                  }
                },
                "text": {
                  "fontSize": 11,
                  "fill": '',
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                },
                "ticks": {
                  "line": {},
                  "text": {
                    "fontSize": 10,
                    "fill": '',
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                  }
                }
              },
              "annotations": {
                "text": {
                  "fontSize": 13,
                  "fill": '',
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
          keys={[
            'Spani',
            'England',
            'France',
            'Italia',
            'Argntina',
            'Barazil'
          ]}
          indexBy="Year"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
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
            }
          ]}
          fill={[
            {
              match: {
                id: 'fries'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'sandwich'
              },
              id: 'lines'
            }
          ]}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6
              ]
            ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: IsDashboard ? null : 'Year',
            legendPosition: 'middle',
            legendOffset: 37,
            truncateTickAt: 0
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: IsDashboard ? null : 'Salary / Month',
            legendPosition: 'middle',
            legendOffset: -50,
            truncateTickAt: 0
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6
              ]
            ]
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />
      </Box>
    </>
  )
}
