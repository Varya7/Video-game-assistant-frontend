import axios from 'axios';
import { ref } from 'vue';

const postData = ref('');
export const submitData = async () => {
    try {
        await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1').then(res=>{console.log(res.data)});
        // Handle successful response (e.g., show success message, clear form)
    } catch (error) {
        console.error('Error submitting data:', error);
        // Handle error (e.g., show error message)
    }
};