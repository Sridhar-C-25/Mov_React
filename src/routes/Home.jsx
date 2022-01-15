import Hero from "../components/Hero"
import Movies from "../components/Movies"
import Search from "../components/Search"
import Footer from "../components/Footer/Footer.jsx"
const Home = () =>
{
   return (
      <div>
         <Hero />
         <div className="px-3">
            <br />
            <Movies section="Popular" />
            <br /><br />
            <Movies section="Trending" />
            <br />
            <br />
            <Search />
         </div>
         <Footer />
      </div>
   )
}

export default Home
