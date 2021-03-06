import React, { useEffect } from 'react';
import { format } from "date-fns";
import { useState } from 'react';
import Services from '../Services/Services';
const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div className='mt-20'>
         <div>
            <p className='text-center text-secondary font-600'>Available Services on {format(date, "PP")}.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12'>
        {
            services.map(service => <Services key={service._id} service={service} ></Services>)
        }
        </div>
       </div>
    );
};

export default AvailableAppointment;