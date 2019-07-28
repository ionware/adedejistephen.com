import React from 'react'
import Meta from '../components/Metadata'
import Header from '../components/Header';

export default () => {
  return (
   <React.Fragment>
     <Meta>
        <body className="body-light" />
     </Meta>
     <Header showAvatar={true} />
     <div className="flex justify-content-center align-content-center h-50">
       <div className="text-center">
        <h1 
          style={{fontSize: '4.5em'}} 
          className="mb-0">
            404
        </h1>
        <h4 className="mt-0">
          I don't have what you asked for.
        </h4>
       </div>
     </div>
   </React.Fragment>
  )
}