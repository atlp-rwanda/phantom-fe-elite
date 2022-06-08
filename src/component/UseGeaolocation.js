import React, {useState, useEffect} from 'react';
import L from 'leaflet'


const UseGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: "", lng: ""},
    });

    const onSuccess = (location)=>{
        setLocation({
            loaded: true,
            coordinates:{
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
     
        console.log('your coordinate is: Lat:'+ location)
    };

    const onError =(error)=>{
        setLocation({
            loaded: true,
            error,
        });
    };

    useEffect(()=>{
        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geolocation not supported"
            });
        }
        setInterval(()=>{

            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        },5000);
       
    },[]);

  return location;
}

export default UseGeolocation
