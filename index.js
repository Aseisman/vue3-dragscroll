import { dragscroll } from "./lib/dragscroll";

export default{
    install: (app)=>{
        app.directive('dragscroll',dragscroll)
    }
}