import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const BusGeolocation = () => {
    const [location, setlocation] = useState({
        loaded:false,
        coordinates:{lat:"",lng:""}
    });

    const onSuccess = location => {
        setlocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,
            }
        })
    }
    const onError = error => {
        setlocation({
            loaded:true,
            error,
        })
    }

    useEffect(() => {
        if(!("geoloation" in navigator)){
            onError({
                message: "Geolocation is not supported switch to the new broswer"
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

  return location;
}

export default BusGeolocation