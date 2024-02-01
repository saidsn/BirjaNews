import { HttpClient } from "../HttpClient";

class SettingsService extends HttpClient {
    constructor() {
        super(process.env.REACT_APP_API_URL);
    }

    async getAll() {
        return await this.get('settings');
    }
    
}

export const settingsService = new SettingsService();