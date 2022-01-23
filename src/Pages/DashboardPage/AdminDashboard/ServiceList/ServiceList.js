import React, { useEffect } from 'react';

const ServiceList = () => {
    const [services, setServices] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">S.L.</th>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Description</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((service, index) => {
                            return (
                                <tr key={service._id}>
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{service.title}</td>
                                    <td className="px-4 py-2 border">{service.description}</td>
                                    <td className="px-4 py-2 border">{service.price}</td>
                                    <td className="px-4 py-2 border"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceList;