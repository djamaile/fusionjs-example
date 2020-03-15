import App from 'fusion-react';
import Root from "./components/root";
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import TodosPlugin from './plugins/todos';


export default async function start() {
    const app = new App(Root);
    app.register(HelmetPlugin);
    if(__NODE__){
        app.middleware(require('koa-bodyparser')());
        app.middleware(TodosPlugin);
    }
    return app;
}