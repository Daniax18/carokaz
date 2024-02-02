import { Carousel } from "primereact/carousel";

function MyCarroussel(props){

    const {annonce} = props
    
    const productTemplate = (imgSrc) => (
      <img className="w-100 h-100" src={`img/${imgSrc}`} alt="Image" />
    );
  
    return (
        <div className="col-lg-5 pb-5">
            <Carousel
                value={annonce.voiture.img}
                numVisible={1}
                numScroll={1}
                responsiveOptions={[
                {
                    breakpoint: '1024px',
                    numVisible: 1,
                    numScroll: 1,
                },
                {
                    breakpoint: '768px',
                    numVisible: 1,
                    numScroll: 1,
                },
                ]}
                className="custom-carousel"
                circular
                autoplayInterval={3000}
                itemTemplate={productTemplate}
            />
      </div>
    );
  };
  
  export default MyCarroussel;