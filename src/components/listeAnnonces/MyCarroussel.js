import { Carousel } from "primereact/carousel";

function MyCarroussel(props){

    const {imgArray} = props
    
    const productTemplate = (imgSrc) => (
      <img className="w-100 h-100" src={imgSrc} alt="Image" />
    );
  
    return (
        
            <Carousel
                value={imgArray}
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
      
    );
  };
  
  export default MyCarroussel;