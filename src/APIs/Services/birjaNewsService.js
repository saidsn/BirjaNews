import { HttpClient } from "../HttpClient";

class BirjaNews extends HttpClient {
    constructor() {
        
        super("https://api.birjanews.az/api");
    
    }

   
    async getById(id) {
        return await this.get(`News/${id}`);
    }
    async getPaginated(currentPage, pageSize){
        return await this.get(`News?pageNumber=${currentPage}&pageSize=${pageSize}`)
    }
     async getLatestNews(){
        return await this.get('News')
    }
}

export const birjaNewsService = new BirjaNews();