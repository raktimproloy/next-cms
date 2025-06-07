'use client'
// components/GoogleMap.tsx
import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { clientSettingStore, setting } from '@/store/storage/clientSettingStore';

const libraries: any = ['maps', 'marker'];

const GoogleMapComponent: React.FC = () => {
  const [hostName, setHostName] = useState("")
  useEffect(() => {
    if (typeof window !== 'undefined') {
    // Your code that uses the `window` object goes here
    setHostName(window.location.host)
    }
  }, []);
  const [settingData, setSettingData] = useState({
    map_lat: "0",
    map_lng: "0",
    uk_map_lat: "0",
    uk_map_lng: "0",
  })
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0
  });

  const initializeData = async () => {
    const settingPromise = clientSettingStore();

    // Wait for all promises to resolve
    await Promise.all([settingPromise]);

    // Update state variables
    setSettingData(setting);
};

  useEffect(() => {
    // Use an IIFE to allow the use of async in useEffect
    (async () => {
      await initializeData();
    })();
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (settingData) {
      let newCenter;
      if(hostName.includes("nextctl.co.uk")){
        newCenter = {
          lat: parseFloat(settingData?.uk_map_lat),
          lng: parseFloat(settingData?.uk_map_lng)
        };
      }else{
        newCenter = {
          lat: parseFloat(settingData?.map_lat),
          lng: parseFloat(settingData?.map_lng)
        };
      }

      setCenter(newCenter);
    }
  }, [settingData]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD3HFSbOho7i3bmPB2VplMNwve01hY3hvI' || '', // Add your API key here
    libraries
  });

  const zoom = 15;

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map</div>;

  return (
    <GoogleMap center={center} zoom={zoom} mapContainerStyle={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}>
      <Marker position={center} title="My location" />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
