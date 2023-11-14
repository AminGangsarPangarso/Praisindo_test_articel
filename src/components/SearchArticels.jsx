import Carousel from 'react-bootstrap/Carousel';
// import Gambar1 from "../assets/Gambar1"
// import Gambar2 from "../assets/Gambar2"


const SearchArticels = () => {
  return (
    <>
    <div className="bg-articels mb-5 container">
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=''
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=''
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
    </>
  )
}

export default SearchArticels