import axios from "axios";

const getUserData = async (cellphone) => {

    const rest = await axios.get(`https://jsonplaceholder.typicode.com/users?phone=${cellphone}`);

    return rest.data;

}

export default getUserData