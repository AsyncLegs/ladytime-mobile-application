import {Alert, AsyncStorage} from "react-native";


export default class AsyncStorageService {
    async set(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            Alert.alert('Error during saving to async storage: ' + error.message)
        }
    }
}
