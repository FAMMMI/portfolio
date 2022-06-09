import React from 'react';

const MyProjects = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-center text-rose-600 text-3xl font-extrabold'>My Recent Projects</h1>

            <div >
                <div>
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Box Office News!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Box Office News!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Box Office News!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-50 transform duration-500 hover:-translate-y-2 cursor-pointer group" >
                <div class="bg-rose-600 bg-opacity-40 min-h-50 px-10 flex flex-wrap flex-col pt-20 hover:bg-opacity-75 transform duration-300">
                    <div>
                        <img src="https://i.ibb.co/n7r3VZ4/Screenshot-155.png" alt="" />
                    </div>
                    <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        BNB Motor Parts                            </h1>
                    <div class="w-16 h-2 bg-blue-600 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <button class="btn btn-rounded m-5 bg-blue-600  opacity-0 text-white text-xl hover:bg-blue-700 group-hover:opacity-80 transform duration-500">
                        Details
                    </button>
                </div>
            </article>
        </div>
    );
};

export default MyProjects;