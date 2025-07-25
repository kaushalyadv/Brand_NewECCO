import Products from "..//../Products/Products"
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({productId, categoryId}) => {
    const {data} = useFetch(`/api/products?populate=*&[filters][id][$ne]=${productId}&filters
    [categories][id]=${categoryId}&paginnation[start]=0&pagination[limit]=4`)  // using pagination gives the 4
    return <div className="related-products">
        <Products headingText="Related Products" products = {data}/>
    </div>;
};

export default RelatedProducts;


