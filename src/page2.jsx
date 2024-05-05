import React from 'react';
import { Button } from 'keep-react';
import tampons from './tampons.jpg'

function MyComponent() {
  return (
      <div className="flex ">
        {/* Left division */}
        <div className="w-1/2 flex flex-col justify-center outline">
          <div className='bg-white text-white p-10'> HI</div>
          <div className='flex flex-row justify-center gap-5 flex-wrap p-10'>
             <Button className="bg-gray-700 text-left hover:bg-gray-300 hover:text-black text-white font-bold py-2 px-4 rounded-lg whitespace-pre-line">
              Continue <br/>
               with user 1 --
            </Button>
             <Button className="bg-gray-700 text-left hover:bg-gray-300 hover:text-black text-white font-bold py-2 px-4 rounded-lg whitespace-pre-line">
              Continue <br/>
               with user 2 --
            </Button>
          </div>
          </div>
        
        {/* Right division */}
        <div className="w-1/2 p-4 outline">
          <img src={tampons} alt="Image" className="w-full h-full" />
        </div>
      </div>
  );
}

export default MyComponent;
