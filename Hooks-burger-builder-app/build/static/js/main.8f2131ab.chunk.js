(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,,function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,a){e.exports={Modal:"Model_Modal__1xK1z"}},function(e,t,a){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},,,function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,a){e.exports={Order:"Order_Order__3kYZJ"}},,function(e,t,a){e.exports=a(84)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(38),o=a.n(l),i=(a(61),a(1)),c=a(2),s=a(4),u=a(3),d=function(e){return e.children},m=a(39),p=a.n(m),h=a(21),g=a.n(h),v=a(40),f=a.n(v),b=a(41),_=a.n(b),E=function(e){return r.a.createElement("div",{className:_.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:f.a,alt:"MyBurger"}))},y=a(42),C=a.n(y),k=a(14),O=a(23),j=a.n(O),S=function(e){return r.a.createElement("li",{className:j.a.NavigationItem},r.a.createElement(k.b,{to:e.link,exact:e.exact,activeClassName:j.a.active},e.children))},w=function(){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(S,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(S,{link:"/orders"},"Orders"))},N=a(45),B=a.n(N),I=function(e){return r.a.createElement("div",{className:B.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(I,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(w,null)))},T=a(15),D=a.n(T),L=a(46),H=a.n(L),M=function(e){return e.show?r.a.createElement("div",{className:H.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[D.a.SideDrawer,D.a.Close];return e.open&&(t=[D.a.SideDrawer,D.a.Open]),r.a.createElement(d,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:D.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(w,null))))},A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(x,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),a}(n.Component),F=a(9),U=a(55),q=a(47),z=a.n(q),R=a(11),V=a.n(R),K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:V.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:V.a.BreadTop},r.a.createElement("div",{className:V.a.Seeds1}),r.a.createElement("div",{className:V.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:V.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:V.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:V.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:V.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),W=function(e){console.log(e);var t=Object.keys(e.ingredients).map((function(t){return Object(U.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(K,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please Start Adding ingredients!")),r.a.createElement("div",{className:z.a.Burger},r.a.createElement(K,{type:"bread-top"}),t,r.a.createElement(K,{type:"bread-bottom"}))},Y=a(26),X=a.n(Y),J=a(18),$=a.n(J),Z=function(e){return r.a.createElement("div",{className:$.a.BuildControl},r.a.createElement("div",{className:$.a.Label},e.label),r.a.createElement("button",{className:$.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:$.a.More,onClick:e.added},"More"))},Q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],G=function(e){return r.a.createElement("div",{className:X.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),Q.map((function(t){return r.a.createElement(Z,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:X.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ee=a(48),te=a.n(ee),ae=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component),ne=a(27),re=a.n(ne),le=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},oe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),a}(n.Component),ie=a(49),ce=a.n(ie),se=function(){return r.a.createElement("div",{className:ce.a.Loader},"Loading...")},ue=function(e,t){return function(a){Object(s.a)(l,a);var n=Object(u.a)(l);function l(){var e;Object(i.a)(this,l);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(c.a)(l,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(ae,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),l}(n.Component)},de=a(50),me=a.n(de).a.create({baseURL:"https://react-my-burger-70359.firebaseio.com/"}),pe={salad:.5,cheese:.4,meat:1.3,bacon:.7},he=ue(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(F.a)({},e.state.ingredients);n[t]=a;var r=pe[t],l=e.state.totalPrice+r;e.setState({totalPrice:l,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(F.a)({},e.state.ingredients);r[t]=n;var l=pe[t],o=e.state.totalPrice-l;e.setState({totalPrice:o,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){var t=[];for(var a in e.state.ingredients)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e.state.ingredients[a]));t.push("price="+e.state.totalPrice);var n=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+n})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),me.get("https://react-my-burger-70359.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(F.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(se,null);return this.state.ingredients&&(n=r.a.createElement(d,null,r.a.createElement(W,{ingredients:this.state.ingredients}),r.a.createElement(G,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})),a=r.a.createElement(oe,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),this.state.loading&&(a=r.a.createElement(se,null)),r.a.createElement(d,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),n)}}]),a}(n.Component),me),ge=a(51),ve=a(52),fe=a.n(ve),be=function(e){return r.a.createElement("div",{className:fe.a.CheckoutSummary},r.a.createElement("h1",null,"We Hope it Tastes Well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(W,{ingredients:e.ingredients})),r.a.createElement(le,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},_e=a(12),Ee=a(53),ye=a.n(Ee),Ce=a(19),ke=a.n(Ce),Oe=function(e){var t=null,a=[ke.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(ke.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:ke.a.Input},r.a.createElement("label",{className:ke.a.Label},e.label),t)},je=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1,loading:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ingredients,price:e.props.price,orderData:a};me.post("/orders.json",r).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})}))},e.inputChangedHandler=function(t,a){var n=Object(F.a)({},e.state.orderForm),r=Object(F.a)({},n[a]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,n[a]=r;var l=!0;for(var o in n)l=n[o].valid&&l;e.setState({orderForm:n,formIsValid:l})},e}return Object(c.a)(a,[{key:"checkValidity",value:function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(Oe,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),r.a.createElement(le,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.state.loading&&(n=r.a.createElement(se,null)),r.a.createElement("div",{className:ye.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),a}(n.Component),Se=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,price:0},e.checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),a={},n=0,r=Object(ge.a)(t.entries());try{for(r.s();!(e=r.n()).done;){var l=e.value;"price"===l[0]?n=l[1]:a[l[0]]=+l[1]}}catch(o){r.e(o)}finally{r.f()}this.setState({ingredients:a,totalPrice:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(be,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(_e.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(je,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),a}(n.Component),we=a(54),Ne=a.n(we),Be=function(e){var t=[];for(var a in e.ingredients)t.push({name:a,amount:e.ingredients[a]});var n=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:Ne.a.Order},r.a.createElement("p",null,"Ingredients: ",n),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},Ie=ue(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;me.get("/orders.json").then((function(t){var a=[];for(var n in t.data)a.push(Object(F.a)(Object(F.a)({},t.data[n]),{},{id:n}));e.setState({loading:!1,orders:a})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(Be,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),a}(n.Component),me),xe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(_e.c,null,r.a.createElement(_e.a,{path:"/checkout",component:Se}),r.a.createElement(_e.a,{path:"/orders",component:Ie}),r.a.createElement(_e.a,{path:"/",exact:!0,component:he}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=r.a.createElement(k.a,null,r.a.createElement(xe,null));o.a.render(Te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[56,1,2]]]);
//# sourceMappingURL=main.8f2131ab.chunk.js.map