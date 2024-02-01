import React from 'react'
import { BirjaElani } from '../../Components/Common/BirjaElanlari/BirjaElani'
import { Helmet } from 'react-helmet'

function BirjaYenilikleri() {
  return (
    <div>
       <Helmet>
        <title>Birja Yenilikləri</title>
      </Helmet>
      <BirjaElani/>
    </div>
  )
}

export default BirjaYenilikleri
