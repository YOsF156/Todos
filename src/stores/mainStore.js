// import User from '../../common/models/User';
// import { UserType } from '../../common/consts/enums';
import {
    makeAutoObservable,
    runInAction,
} from "mobx";
import MainApi from "./api/MainApi";


class MainStore {

    constructor() {
        makeAutoObservable(this);
    }
    user = {};
    todos;
    auth = {};
    formData = {}
    formShow = false
    isLogin = true;

    hideForm = () => {
        runInAction(() => {
            this.formData = {}
            this.formShow = false;
        })
    }
    openForm = (data) => {
        console.log("🚀 ~ file: mainStore.js ~ line 27 ~ MainStore ~ data", data)
        runInAction(() => {
            this.formData = { ...data };
            this.formShow = true
        })
    }

    async setTodos() {
        try {
            const Todos = await MainApi.getAllTasks()
            console.log("🚀 ~ file: mainStore.js ~ line 39 ~ MainStore ~ setTodos ~ Todos", Todos)
            // runInAction(() => {
            //     this.todos = Todos.data

            // })
            return Todos.data
        } catch (error) {
            console.log({ error })
        }
    }
    // signUp = async (user) => {
    //     try {
    //         runInAction(async () => {

    //         })
    //     } catch (err) {
    //         runInAction(() => {

    //         })
    //     }
    // };

    // logOut = async () => {
    //     localStorage.clear()
    //     runInAction(() => { this.isLogin = false; })
    // }

    // login = async (body) => {
    //     try {
    //         // const succses = await MainApi.login(body);
    //         runInAction(() => {
    //             this.isLogin = true

    //         })
    //         // succses ? this.isLogin = true : this.isLogin = false;
    //     } catch (error) {

    //     }
    // }
}






export default MainStore;
