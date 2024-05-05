import React, { useState, useEffect } from 'react';
import { Button } from 'keep-react';
import step1 from './step-6.mp4';
import step2 from './step-5.mp4';
import step4 from './step-8.mp4';
import step3 from './step-9.mp4';

function VideoContainer() {
  const [currentStep, setCurrentStep] = useState(1);

  const videos = {
    1: step1,
    2: step2,
    3: step3,
    4: step4,
  };

  const handleClick = (step) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    const video = document.getElementById('videoPlayer');
    video.load();
    video.play();
  }, [currentStep]);

  useEffect(() => {
    const video = document.getElementById('videoPlayer');
    const handleEnded = () => {
      setCurrentStep(currentStep === 4 ? 1 : currentStep + 1);
    };
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentStep]);

  return (
    <div className="flex flex-col items-center gap-y-4 flex-wrap">
        <div className=' font-bold text-lg whitespace-pre-line p-10 pb-2'>Here's how it works <br/> Start A Free Trail</div>
        <div className='flex flex-row flex-wrap justify-center'>
          <div className=' flex flex-col justify-center gap-10 p-10 '>
              <Button id='button' onClick={() => handleClick(1)} className="mr-2 bg-gray-700 hover:bg-gray-300 hover:text-black">
                  Step1-Why to use
              </Button>
              <Button onClick={() => handleClick(2)} className=" mr-2 bg-gray-700 hover:bg-gray-300 hover:text-black ">
                  Step2-How to use
              </Button>
          </div>
          <div className='relative md:w-1/2 h-auto md:h-full p-2 '>
            <video id="videoPlayer" src={videos[currentStep]} controls className="mb-4 mt-2 autoplay outline rounded-lg" autoPlay muted />
          </div>
          <div className='flex flex-col flex-wrap justify-center gap-10 p-10 '>
            <Button onClick={() => handleClick(3)} className='mr-2 bg-gray-700 hover:bg-gray-300 hover:text-black'>
                Step3-Comfortable?
            </Button>
            <Button onClick={() => handleClick(4)} className="mr-2 bg-gray-700 hover:bg-gray-300 hover:text-black">
                Step4-Feasibile?
            </Button>
          </div>
        </div>
    </div>
  );
}

export default VideoContainer;
