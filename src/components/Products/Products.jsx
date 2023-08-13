import "./Products.scss";
import Product from "./Product/Product";
import prod from "../../assets/products/earbuds-prod-1.webp"
import prod1 from "../../assets/products/earbuds-prod-2.webp"
import prod2 from "../../assets/products/earbuds-prod-3.webp"
import prod3 from "../../assets/products/earbuds-prod-4.webp"
import prod4 from "../../assets/products/earbuds-prod-5.webp"
import prod5 from "../../assets/products/headphone-prod-1.webp"
import prod6 from "../../assets/products/headphone-prod-2.webp"
import prod7 from "../../assets/products/headphone-prod-3.webp"
import prod8 from "../../assets/products/headphone-prod-4.webp"
import prod9 from "../../assets/products/headphone-prod-5.webp"
import prod10 from "../../assets/products/headphone-prod-6.webp"


const Products = ({innerPage, headingText}) => {
    return (
    <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
        <Product image={prod}/>
        <Product image={prod1}/>
        <Product image={prod2}/>
        <Product image={prod3}/>
        <Product image={prod4}/>
        <Product image={prod5}/>
        <Product image={prod6}/>
        <Product image={prod7}/>
       
        </div>
    </div>
    );
};

export default Products;
