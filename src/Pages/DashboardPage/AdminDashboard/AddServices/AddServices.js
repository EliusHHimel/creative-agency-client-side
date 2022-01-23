import React from 'react';

const AddServices = () => {
    return (
        <div>
            <form>
                <div className='flex'>
                    <div className='text-left'>
                        <label className='font-bold' htmlFor='service-title'>Service Title</label>
                        <input id='service-title' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Service Title" />
                    </div>
                    <div className='my-4 mt-8 w-full'>
                        <label className="shadow border rounded py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline" htmlFor="file"><i className="fas fa-cloud-upload-alt"></i> Select Service Image</label>
                        <input className="hidden w-full" type="file" id='file' />
                    </div>
                </div>
                <div className='text-left'>
                    <label className='font-bold' htmlFor="service-desc">Service Description</label>
                    <textarea id='service-desc' className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" rows={5} placeholder="Enter Service Description" />
                </div>
                <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddServices;