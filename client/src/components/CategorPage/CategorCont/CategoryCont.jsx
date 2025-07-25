import Products from "..//../Products/Products"


import useFetch from "../../../hooks/useFetch";

const CategorCont = ({categoryId}) => {
   let {data} = useFetch(`/api/products?populate=*&filters[categories][id]=${categoryId}`);
   return <div className="Single-Product-main-content">
        <div className="layout">
            <Products products = {data}/>
        </div>
    </div>;
};

export default CategorCont;
