(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var i=a(11),n=a(12),s=a(8),o=a(14),c=a(13),r=a(0),p=a.n(r),m=a(29),l=a.n(m),d=a(32),k=a(31),h=a(30),u=(a(39),a(40),a(41)),C=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={recipes:[{link:"https://katie-matt-recipes.s3.amazonaws.com/Barbacoa+(Instant+Pot).md",description:"Barbacoa (Instant Pot)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Basic+Pan+Sauce.md",description:"Basic Pan Sauce"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Beer+Battered+Fish+Tacos.md",description:"Beer Battered Fish Tacos"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Carnitas+(Instant+Pot).md",description:"Carnitas (Instant Pot)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Chicken+Breast+Chili+(Slow+Cooker).md",description:"Chicken Breast Chili (Slow Cooker)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Chicken+Noodle+Soup+(Instant+Pot).md",description:"Chicken Noodle Soup (Instant Pot)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Chicken%2C+Veggie%2C+and+Farro+Soup+(Instant+Pot).md",description:"Chicken, Veggie, and Farro Soup (Instant Pot)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Chorizo+Chickpea+Stew+with+Greens.md",description:"Chorizo Chickpea Stew with Greens"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Cinnamon+Pumpkin+Cookies.md",description:"Cinnamon Pumpkin Cookies"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Dill+Pickle+Pasta+Salad.md",description:"Dill Pickle Pasta Salad"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Ground+Beef+and+Broccoli+Fried+Rice.md",description:"Ground Beef and Broccoli Fried Rice"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Ground+Turkey+Sweet+Potato+Stuffed+Peppers.md",description:"Ground Turkey Sweet Potato Stuffed Peppers"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Jalape%C3%B1o+Lime+Chicken+Soup.md",description:"Jalape\xf1o Lime Chicken Soup"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Mexican+Cole+Slaw.md",description:"Mexican Cole Slaw"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Penne+Alla+Vodka.md",description:"Penne Alla Vodka"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Pickled+Red+Cabbage.md",description:"Pickled Red Cabbage"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Roasted+Cauliflower.md",description:"Roasted Cauliflower"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Ropa+Vieja+(Instant+Pot).md",description:"Ropa Vieja (Instant Pot)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Sausage%2C+Arugula%2C+Lemon%2C+and+Parmesan+Soup.md",description:"Sausage, Arugula, Lemon, and Parmesan Soup"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Spanish+Chickpeas+and+Rice+with+Chicken.md",description:"Spanish Chickpeas and Rice with Chicken"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Tacos+al+Pastor+(Instant+Pot).md",description:"Tacos al Pastor (Instant Pot)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Thai+Red+Curry+Noodle+Soup.md",description:"Thai Red Curry Noodle Soup"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Turkey+Chili+(Slow+Cooker).md",description:"Turkey Chili (Slow Cooker)"},{link:"https://katie-matt-recipes.s3.amazonaws.com/Tuscan+Sausage+and+White+Bean+Soup.md",description:"Tuscan Sausage and White Bean Soup"},{link:"https://katie-matt-recipes.s3.amazonaws.com/White+Bean+Chicken+Chili.md",description:"White Bean Chicken Chili"}],recipe_index:null,show_links:!0},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(n.a)(a,[{key:"handleClick",value:function(e){this.setState({recipe_index:e}),this.setState({show_links:!1})}},{key:"render",value:function(){var e=this;if(this.state.show_links){var t=this.state.recipes.map((function(t,a){return p.a.createElement(w,{onClick:e.handleClick,key:a,index:a,description:t.description})}));return p.a.createElement(h.a,{fluid:!0},t)}return p.a.createElement(S,{link:this.state.recipes[this.state.recipe_index].link})}}]),a}(p.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(n.a)(a,[{key:"handleClick",value:function(){this.props.onClick(this.props.index)}},{key:"render",value:function(){return p.a.createElement(k.a,null,p.a.createElement(d.a,{variant:"primary",size:"sm",className:"Button btn-block",onClick:this.handleClick},this.props.description))}}]),a}(p.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={recipe_text:""},n}return Object(n.a)(a,[{key:"render",value:function(){return p.a.createElement(u,{source:this.state.recipe_text,className:"Recipe"})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.link;fetch(t).then((function(e){return e.blob()})).then((function(e){return e.text()})).then((function(t){return e.setState({recipe_text:t})}))}}]),a}(p.a.Component);l.a.render(p.a.createElement(C,null),document.getElementById("root"))},39:function(e,t,a){}},[[33,1,2]]]);
//# sourceMappingURL=main.c43de445.chunk.js.map