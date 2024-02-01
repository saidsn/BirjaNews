import { HttpClient } from "../HttpClient";

class HeaderCarouselService extends HttpClient {
    constructor() {
      
        super("https://api.birjanews.az/api");
        
    }

    async getAll() {
        return await this.get('Sliders');
    }
    
}

export const headerCarouselService = new HeaderCarouselService();