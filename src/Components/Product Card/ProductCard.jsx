import React from 'react'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './ProductCard.css'
function ProductCard(props) {
  const { ref, inView } = useInView({
    rootMargin:"100px 0px -90% 0px ",
    // delay:2000,
   threshold:1, 
    triggerOnce:true,
  // root:document.getElementsByClassName("product__cards")[0],
  });
  return (
    
    <div ref={ref} className='product-card' id={props.id}>

     <Link style={{textDecoration:'none',color:'black'}}to={'/desc/Water Filtration/'+props.id}>
     {inView?
     <>
      <img className='product-card__image'src={'products/'+props.image+'.svg'} alt="" />
      <a className='product-card__heading'>{props.type}<sup>&#174;</sup></a>
      <a className='product-card__desc'>{props.name}</a>
      <a className='product-card__loc'>{props.code}</a>
      <a className='product-card__price'>${props.price}</a></>
      :null} 
      </Link>
  </div>

  )
}

export default ProductCard;
