import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "c01a51a6d59240df9f8c2c6d535cb75c"
    }
})