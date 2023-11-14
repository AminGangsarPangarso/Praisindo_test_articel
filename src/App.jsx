import SearchArticels from "./components/searchArticels";
import { useState, useEffect } from "react"
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  const [articels, setArticel] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const urlApi = async () => {
      try {
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${import.meta.env.VITE_ARTICEL_API_KEY}`
        );
        const dataArticels = await res.json()
        console.log(dataArticels.response?.docs);
        setArticel(dataArticels.response?.docs)
        // setIsLoading(false);
      } catch (error) {
        console.error(error)
      }
    }


    urlApi()
  }, [])

  return (
   
    <div className="">
   <SearchArticels/>
   {articels ?.map((itemArticels) => (
  <Card key={itemArticels._id} className="container mb-4 py-2">
    <h3 className="">{itemArticels.main}</h3>
    <h3 className="">{itemArticels.abstract}</h3>
    <Card.Body>
      <Card.Title>{itemArticels.source}</Card.Title>
      <Card.Text>
        <h5>{itemArticels.section_name}</h5>
        <p>{itemArticels.lead_paragraph}</p>
      </Card.Text>
    <a href={itemArticels.web_url}target="_blank ">Website Articels</a>
    </Card.Body>
  </Card>
))}


</div>
  )
}

export default App
