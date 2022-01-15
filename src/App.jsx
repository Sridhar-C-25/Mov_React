import
{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import MovieInfo from "./routes/MovieInfo"

function App ()
{
  return (
    <div className="text-gray-700">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:type/:id" element={<MovieInfo />} />
      </Routes>
    </div>
  )
}

export default App
