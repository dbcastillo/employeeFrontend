import axios from 'axios';

export const getEmployees = () => {
    return axios.get('http://localhost:8081/api/v1/employees')
        .then(response => { return response.data})
        .catch(error => {
        console.error('Error fetching employees:', error);
        throw error;
        });
}