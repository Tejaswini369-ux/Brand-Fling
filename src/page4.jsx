
"use client";
import { Tabs } from "keep-react";
import { Button } from "keep-react";
import step1 from './step-6.mp4';
import step2 from './step-5.mp4';
import step4 from './step-8.mp4';
import step3 from './step-9.mp4';

export const TabsComponent = () => {
    const videos = {
    1: step1,
    2: step2,
    3: step3,
    4: step4,
  };

  return (
    <div className="flex justify-center flex-wrap ">
        <div className="gap-10 p-10 ">
            <Tabs activeLabel="one" className="felx flex-col justify-center flex-wrap">
                <div className=" md:w flex justify-center flex-wrap">
                    <Tabs.List>
                        <Tabs.Item label="one" >Tab-1</Tabs.Item>
                        <Tabs.Item label="two" >Tab-2</Tabs.Item>
                        <Tabs.Item label="three" >Tab-3</Tabs.Item>
                        <Tabs.Item label="four" >Tab-4</Tabs.Item>
                    </Tabs.List>
                </div>
                <div>
                    <Tabs.Content label="one">
                        <div className="flex flex-row justify-center flex-wrap gap-10">
                            <div className="relative md:w-1/2 h-auto md:h-full p-2 pb-0 ">
                                <video id="videoPlayer" src={videos[1]} controls className="mb-4 mt-2 autoplay outline whitespace-pre-line  rounded-lg" autoPlay muted />
                            </div>
                            <div className="flex flex-col justify-center flex-wrap">
                                <Button className=" mr-2  outline">Get started</Button>
                            </div>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content label="two">
                        <div className="flex flex-row justify-center flex-wrap gap-10">
                            <div className="relative md:w-1/2 h-auto md:h-full p-2  pb-0 ">
                                <video id="videoPlayer" src={videos[2]} controls className="mb-4 mt-2 autoplay outline whitespace-pre-line  rounded-lg" autoPlay muted />
                            </div>
                            <div className="flex flex-col justify-center flex-wrap">
                                <Button className=" mr-2  outline">Lets get started</Button>
                            </div>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content label="three">
                        <div className="flex flex-row justify-center flex-wrap gap-10">
                            <div className="relative md:w-1/2 h-auto md:h-full p-2  pb-0 ">
                                <video id="videoPlayer" src={videos[3]} controls className="mb-4 mt-2 autoplay outline whitespace-pre-line  rounded-lg" autoPlay muted />
                            </div>
                            <div className="flex flex-col justify-center flex-wrap">
                                <Button className=" mr-2  outline">Lets get started</Button>
                            </div>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content label="four">
                        <div className="flex flex-row justify-center flex-wrap gap-10">
                            <div className="relative md:w-1/2 h-auto md:h-full p-2  pb-0 ">
                                <video id="videoPlayer" src={videos[4]} controls className="mb-4 mt-2 autoplay outline whitespace-pre-line  rounded-lg" autoPlay muted />
                            </div>
                            <div className="flex flex-col justify-center flex-wrap">
                                <Button size="sm" className=' bg-gray-700 hover:bg-gray-300 hover:text-black'>Lets get started</Button>
                            </div>
                        </div>
                    </Tabs.Content>
                </div>
            </Tabs>
        </div>
    </div>
  )
}
