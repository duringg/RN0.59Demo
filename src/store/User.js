import {
    observable,
    action,
    runInAction,
    useStrict,
    toJS
} from 'mobx';

class UserStore {
    @observable userInfo = {
        username: 'Name',
    };
}

export default new UserStore();