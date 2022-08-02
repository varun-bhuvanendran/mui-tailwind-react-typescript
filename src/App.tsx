import Button from "@mui/material/Button"

function App() {
  return (
    <>
      <div className="grid grid-cols-2 justify-items-center">
        <h2>MUI</h2>

        <h2>MUI + Tailwind</h2>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-6">
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
                &lt;Button variant="contained"&gt; Clickable + Contained &lt;/Button&gt;
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
              w-full hover:bg-red-300"&gt; Clickable + Contained + Red + full width! &lt;/Button&gt;
            </code>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
