import React from 'react'
import Carousel from '../Carousel'

function MobileTeamCollage() {

    const sampleImages = [
        '/sample/Rectangle 122.png',
        '/sample/Rectangle 122.png',
        '/sample/Rectangle 122.png',
        '/sample/Rectangle 122.png',
      ];

  return (
    <section>
        <div className="">
            <div className='team-collage'>
                <h2 className="text-title title font-[600]">Escape Rooms</h2>
                <Carousel images={sampleImages}/>
            </div>
        </div>
    </section>
  )
}

export default MobileTeamCollage