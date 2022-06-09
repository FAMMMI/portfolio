import React from 'react';

const MyProjects = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-center text-rose-600 text-3xl font-extrabold'>My Recent Projects</h1>

            <div className='mx-10 my-14'>
                <div className='my-10'>
                    <div class="hero min-h-screen bg-rose-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/Qj1F428/Screenshot-163.png" class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">My-cro Center</h1>
                                <p class="py-6">1.Users can select any product to purchase. <br></br>
                                    2.The System can recommend anyone from the selected products of the user.<br></br>
                                    3.Users can remove all products from the cart.<br></br>
                                    <b>Technology used: </b>Bootstrap, React Bootstrap, React Router.
                                </p>
                                <div>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://my-cro-center-by-fami.netlify.app/">Live site</a>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://github.com/FAMMMI/micro-center">Github Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div class="hero min-h-screen bg-rose-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/VL45wHq/Screenshot-164.png" class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">BNB Motor Parts</h1>
                                <p class="py-6">1.User and admin section added, both can sign in or sign up using email id or Gmail. <br></br>
                                    2.Purchasing product added, cart added and payment system added using cards.<br></br>
                                    3.Admin can add products, update a product, delete products, can make another user admin, and also can remove them from the administration.<br></br>
                                    <b>Technology used:</b> Tailwind, Daisy Ui, React js, Firebase authentication, Stripe, Img bb, React router, Toastify, React form, React Query, React Icons, Date fns, JWT token.
                                </p>
                                <div>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://assignment-12-5df58.web.app/">Live site</a>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://github.com/FAMMMI/final-one-client">Github client Link</a>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://github.com/FAMMMI/final-server">Github server Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div class="hero min-h-screen bg-rose-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/9qzKQBs/Screenshot-162.png" class="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 class="text-5xl font-bold">Massive Lift-up</h1>
                                <p class="py-6">1.Users can add their products and also restock and deliver their products.<br></br>
                                    2.Users can add items to the inventory, in the meantime, the database will be updated.<br></br>
                                    3.Users can only see their added items in the My Items Section.<br></br>
                                    <b>Technology used:</b> React Router, React Bootstrap, React Firebase Hooks, Toastify, Express JS, MongoDB.</p>
                                <div>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://assignment-11-acf59.web.app/">Live site</a>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://github.com/FAMMMI/massive-lift-client">Github client Link</a>
                                    <a className='btn btn-rounded bg-rose-600 text-white border-0 m-4' href="https://github.com/FAMMMI/massive-lift-server">Github server Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;