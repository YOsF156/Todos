// import User from '../../common/models/User';
// import { UserType } from '../../common/consts/enums';
import {
    makeAutoObservable,
    runInAction,
} from "mobx";
// import MainApi from "../Apis/AuthApi";


class MainStore {

    constructor() {
        makeAutoObservable(this);
    }
    user = {};
    todos = [{
        id: 1,
        title: "go shoping",
        details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
        exp: new Date(),
        done: false,
        repeat: "daily",
        preyority: "high"

    },
    {
        id: 2,
        title: "sfdgsfdgsfg",
        details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
        exp: new Date(),
        done: true,
        repeat: "daily",
        preyority: "high"

    },
    {
        id: 3,
        title: "go shddddoping",
        details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
        exp: new Date(),
        done: false,
        repeat: "daily",
        preyority: "high"

    }, {
        id: 4,
        title: "go shdscsdfsdfdbdoping",
        details: "ascdcdc asdcsdvsdv cxvsfgsrv vgwefsdv",
        exp: new Date(),
        done: true,
        repeat: "daily",
        preyority: "high"

    },
    ];
    auth = {};
    formData = {}
    formShow = false
    isLogin = true;

    hideForm = () => {
        runInAction(() => {
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

    setUser(token) {
        runInAction(() => {
        })
    }
    signUp = async (user) => {
        try {
            runInAction(async () => {

            })
        } catch (err) {
            runInAction(() => {

            })
        }
    };

    logOut = async () => {
        localStorage.clear()
        runInAction(() => { this.isLogin = false; })
    }

    login = async (body) => {
        try {
            // const succses = await MainApi.login(body);
            runInAction(() => {
                this.isLogin = true

            })
            // succses ? this.isLogin = true : this.isLogin = false;
        } catch (error) {

        }
    }





}

export default MainStore;
