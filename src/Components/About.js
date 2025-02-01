import React from 'react'
import Card from './Card'
import Data from './Apidata'
const About = () => {
  return (
    <>
    <div className='container'>
      <div className="row my-4 d-flex align-items-center">
        <div className='col-xs-12 col-md-6'>
          <p>  ments must have an alt prop, either with meaningful text, or an empty string for decorative </p>
          <p> Lorem25 ring for decorative images  jsx-a11y/alt-text
          Line 17:13:  img elements must have an alt prop, either with meaningful text, or an empty string for de</p>
        </div>
        <div className="col-xs-12 col-md-6">
        <img src="https://picsum.photos/300/200?random=1"/>
        </div>
      </div>

    </div>
    {/*meet our team*/}
    <h1 className='text-center text-info'>Meet our Team</h1>
    <div className="container">
        <div className="row">
          {Data.map((values) => {
            return (
              <>
                <Card title={values.title} image={values.images} />
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default About