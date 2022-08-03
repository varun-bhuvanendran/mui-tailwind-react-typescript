import { useState } from "react"
import Button from "@mui/material/Button"
import { Slider, Typography } from "@mui/material"
import "./App.css"

function App() {
  const [value, setValue] = useState<number>(50)
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  return (
    <>
      <div className="grid grid-cols-2">
        <h2>MUI</h2>

        <h2 className="ml-4">MUI + Tailwind</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* MUI */}
        <div>
          <Button
            variant="contained"
            onClick={() => {
              alert("clicked mui button")
            }}
          >
            Clickable + Contained
          </Button>
          <div>
            <code>
              <code>
                &lt;Button variant="contained"&gt; Clickable + Contained
                &lt;/Button&gt;
              </code>
            </code>
          </div>
        </div>
        {/* MUI + Tailwind */}
        <div>
          <Button
            variant="contained"
            onClick={() => {
              alert("clicked mui button styled with tailwind!")
            }}
            className="bg-red-700 text-white w-full hover:bg-red-300"
          >
            Clickable + Contained + Red + full width!
          </Button>
          <div>
            <code>
              &lt;Button variant="contained" className="bg-red-700 text-white
              w-full hover:bg-red-300"&gt; Clickable + Contained + Red + full
              width! &lt;/Button&gt;
            </code>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* MUI */}
        <div>
          <div>
            <Typography variant="h6">Default Slider</Typography>
            <Slider
              aria-label="MUI Slider"
              value={value}
              onChange={handleChange}
            />
            <Typography variant="h6">{value}</Typography>
          </div>
          <div>
            <pre className="overflow-x-auto">
              {`<Slider
              aria-label="MUI Slider"
              value={value}
              onChange={handleChange}
            />`}
            </pre>
          </div>
        </div>
        {/* MUI + Tailwind */}
        <div>
          <div>
            <Typography variant="h6">
              MUI Slider styled with custom color from config file!
            </Typography>
            <Slider
              aria-label="MUI Tailwind Slider"
              value={value}
              onChange={handleChange}
              componentsProps={{
                thumb: {
                  className: "bg-thames-orange",
                },
                root: {
                  className: "w-full relative inline-block h-2 cursor-pointer",
                },
                rail: {
                  className:
                    "bg-thames-orange dark:bg-thames-orange h-2 w-full rounded-full block absolute",
                },
                track: {
                  className:
                    "bg-thames-orange dark:bg-thames-orange h-2 absolute rounded-full",
                },
              }}
            />
            <Typography variant="h6">{value}</Typography>
          </div>
          <div>
            <pre className="overflow-x-auto">
              {`<Slider aria-label="MUI Tailwind Slider"
              value={value}
              onChange={handleChange}
              componentsProps={{
                thumb: {
                  className: "bg-thames-orange",
                },
                root: {
                  className: "w-full relative inline-block h-2 cursor-pointer",
                },
                rail: {
                  className:
                    "bg-thames-orange dark:bg-thames-orange h-2 w-full rounded-full block absolute",
                },
                track: {
                  className:
                    "bg-thames-orange dark:bg-thames-orange h-2 absolute rounded-full",
                },
              }}
            />`}
            </pre>
            <Typography variant="body2">
              The <span className="text-thames-orange">'thames-orange'</span> is
              a custom color defined in the 'tailwind.config.js' file.
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
