import { useEffect, useState } from "react";
import * as Location from 'expo-location';

export default useLocation = () => {

    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            // const { granted } = await Location.requestPermissionsAsync();
            const { granted } = await Location.useBackgroundPermissions();
            if (!granted) return; //simply optional value for location
            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude });
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLocation();
    }, []);

    return location;
}