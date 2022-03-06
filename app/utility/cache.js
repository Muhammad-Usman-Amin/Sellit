import AsyncStorage from '@react-native-async-storage/async-storage';
// import moment from 'moment';  here we've to use dayjs instead because of size (280kb moment, 6kb dayjs)
import dayjs from 'dayjs';
// import uniqueId from 'lodash/uniqueId';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now(),
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (item) => {
    // const now = moment(Date.now());
    const now = dayjs();
    // const storedTime = moment(item.timestamp);
    const storedTime = dayjs(item.timestamp);
    // return now.diff(storedTime, 'minutes') > expiryInMinutes;
    return now.diff(storedTime, 'minute') > expiryInMinutes;
}

const get = async (key) => {
    try {
        // const value =await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(await AsyncStorage.getItem(prefix + key));
        // const item = JSON.parse(value);

        if (!item) return null;

        if (isExpired(item)) {
            // Command Query Separation (CQS)  => here we voilate this principle of programming which says that we should not mix command and query into a single function, command means to change some system configuration and query means to check some system configuration through query! ~~ ~~ here we conciously breaking this rule....
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return item.value;

    } catch (error) {
        console.log(error);
    }
}


export default { get, store };