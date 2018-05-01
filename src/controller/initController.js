/**
 * Created by flp on 2018/4/12.
 */
import index from './indexController'
const controllerInit={
    init(app,router) {
        app.use(router(_=> {
            _.get('/', index.index());
            _.get('/index/initnum', index.initnum());
            _.get('/index/addition', index.addition());
        }));
    }
};

export default controllerInit;