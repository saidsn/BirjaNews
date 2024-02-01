import { HttpClient } from "../HttpClient";

class OrganizersService extends HttpClient {
    constructor() {
      
        super("https://api.birjanews.az/api");
    }

    async getAll() {
        return await this.get('Organizer');
    }
    async getPaginated(currentPage, pageSize){
        return await this.get(`Organizer?page=${currentPage}&pageSize=${pageSize}`)
    }
}

export const organizersService = new OrganizersService();