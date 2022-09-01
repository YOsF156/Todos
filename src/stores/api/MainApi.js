import { api } from "./api";

class AuthApi {

    getAllTasks = async () => {
        try {
            const allTasks = await api.get("/todo");
            return allTasks

        } catch (error) {
            return error
        }

    }
}

export default new AuthApi();