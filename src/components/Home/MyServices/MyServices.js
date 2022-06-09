import React from 'react';
import { DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap, DiMongodb, DiNodejs, DiGithub, DiVisualstudio, DiHeroku } from 'react-icons/di';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';


const MyServices = () => {
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-rose-600 text-center pt-6'>My Comfort Zone</h1>
            <section class="text-gray-700 body-font">
                <div class="container px-3 py-20 mx-auto">

                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-rose-700 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <h2 class="title-font font-medium text-3xl text-rose-600 p-10">Language</h2>
                                <div className='flex justify-center pb-6'>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiJavascript></DiJavascript></h1>
                                </div>

                                <p class="leading-relaxed text-black">Javascript</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-rose-700 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <h2 class="title-font font-medium text-3xl text-rose-600 p-10">Front-End</h2>
                                <div className='flex justify-center pb-6'>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiReact></DiReact></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiHtml5></DiHtml5></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiCss3></DiCss3></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiBootstrap></DiBootstrap></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><SiTailwindcss></SiTailwindcss></h1>
                                </div>

                                <div className='flex justify-center gap-1'>
                                    <p class="leading-relaxed text-black">React</p>
                                    <p class="leading-relaxed text-black">Html5</p>
                                    <p class="leading-relaxed text-black">CSS3</p>
                                    <p class="leading-relaxed text-black">Bootstrap</p>
                                    <p class="leading-relaxed text-black">Tailwind</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-rose-700 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <h2 class="title-font font-medium text-3xl text-rose-600 p-10">Back-End</h2>
                                <div className='flex justify-center pb-6'>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiMongodb></DiMongodb></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiNodejs></DiNodejs></h1>
                                </div>


                                <div className='flex justify-center gap-1'>
                                    <p class="leading-relaxed text-black">MongoDB</p>
                                    <p class="leading-relaxed text-black">Node JS</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-rose-700 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <h2 class="title-font font-medium text-3xl text-rose-600 p-10">Tools</h2>
                                <div className='flex justify-center pb-6'>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiGithub></DiGithub></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiVisualstudio></DiVisualstudio></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><SiFirebase></SiFirebase></h1>
                                    <h1 className='text-5xl font-bold place-content-center text-rose-600'><DiHeroku></DiHeroku></h1>
                                </div>

                                <div className='flex justify-center gap-1'>
                                    <p class="leading-relaxed text-black">Github</p>
                                    <p class="leading-relaxed text-black">VS</p>
                                    <p class="leading-relaxed text-black">Firebase</p>
                                    <p class="leading-relaxed text-black">Heroku</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyServices;