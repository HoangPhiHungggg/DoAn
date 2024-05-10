import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div style={{ width: '100%', background: '#efefef', height: '100%' }}>
      <div style={{ width: '1270px', height: '100%', margin: '0 auto' }} >
        <h5 class="breadcrumb" style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }} ><span onClick={() => { navigate('/') }}>Trang chủ</span> - <span class="current">Chi tiết sản phẩm</span></h5>
        <ProductDetailsComponent idProduct={id} />
      </div>
    </div>
  )
}

export default ProductDetailsPage