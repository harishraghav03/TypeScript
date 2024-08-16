import axios from 'axios';
import Remainder from '../models/remainder';

class ReminderService {
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    async getRemainders() {
        const response = await this.http.get<Remainder[]> ('/todos');
        return response.data;
    }

    async addRemainder(title: string) {
        const response = await this.http.post<Remainder>('/todos', { title });
        return response.data;
    }

    async removeRemainder(id: number) {
        const response = await this.http.delete('/todos/' + id);
        return response.data;
    }
}

export default new ReminderService();