import SearchArticels from "./components/searchArticels";
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';


function App() {
  const [articels, setArticel] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const urlApi = async () => {
      try {
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${import.meta.env.VITE_ARTICEL_API_KEY}`
        );
        const dataArticels = await res.json()
        setArticel(dataArticels.response?.docs)
        setIsLoading(true);
      } catch (error) {
        console.error(error)
      }
    }


    urlApi()
  }, [search])

  return (

    <div className=" ">
      <SearchArticels searchText={(text) => setSearch(text)} />

      <div className="">
        {isLoading ? (

          articels?.map((itemArticels) => (
            <Card key={itemArticels._id} className="container mb-4 py-2 shadow-lg">
              <h1 className="">{itemArticels.headline.main}</h1>
              <hr />
              <h5 className="">{itemArticels.abstract}</h5>
              <Card.Body>
                <Card.Title>{itemArticels.source}</Card.Title>
                <Card.Text>
                  <h5>{itemArticels.section_name} </h5>
                  <p>{itemArticels.lead_paragraph}</p>
                  <p>{itemArticels.pub_date}</p>
                </Card.Text>
                <a href={itemArticels.web_url} target="_blank ">Website Articels</a>
              </Card.Body>
            </Card>
          ))

        ) : (
          <h4>Loading...</h4>
        )}
      </div>

    </div>

  )
}

export default App
