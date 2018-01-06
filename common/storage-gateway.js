import {
	AsyncStorage
} from 'react-native';

export default class StorageGateway {

	static async set(key, value) {

		//debugger;

		try {
			AsyncStorage.setItem('@MySuperStore:key', value);
		}
		catch(ex) {
			console.log(ex);
		}

	}

	static async get(key) {
		return await AsyncStorage.getItem(key);
	}

}
