import {
    HttpClient
} from "../HttpClient";

class AuctionPostsService extends HttpClient {
    constructor() {
        
        super("https://api.birjanews.az/api");

    }

    async getAll() {
        return await this.get('Advertisement?pageNumber=1&pageSize=10');
    }
    async getPaginated(page, pageSize) {
        return await this.get(`Advertisement?pageNumber=${page}&pageSize=${pageSize}`);
    }
    async getById(id) {
        return await this.get(`Advertisement/${id}`)
    }
    async getMostWatched() {
        // cok izelenn sliders hissesinde slice olunub data
        return await this.get('Advertisement?pageNumber=1&pageSize=10');
    }

}

export const auctionPostsService = new AuctionPostsService();