import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
  return (
    <div>
        <Meta title={"Our Store"}/>
      <BreadCrumb title=" Our Store" />
      <div className="store-wrapper py"></div>
    </div>
  );
}

export default OurStore
