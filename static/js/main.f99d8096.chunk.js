(this["webpackJsonpreact-redux-capstone"]=this["webpackJsonpreact-redux-capstone"]||[]).push([[0],{46:function(e,t,a){e.exports={flex:"BottomNav_flex__A6PLB"}},55:function(e,t,a){e.exports={bar:"SearchBar_bar__31-Xm"}},61:function(e,t,a){e.exports={flex:"AppBar_flex__W2P2d"}},73:function(e,t,a){e.exports=a(86)},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(10),l=a.n(n),o=a(31),c=a(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82),a(83);var y=a(27),s=a(12),u=a(123);var h=function(e){var t=e.title,a=e.year,r=Object(s.h)();return i.a.createElement(y.b,{to:"".concat(r.url,"/title")},i.a.createElement(u.a,{variant:"contained",color:"default"},i.a.createElement("div",null,t),i.a.createElement("div",null,a)))},m=a(134),d=a(135),f=a(55),E=a.n(f),g=function(e){var t=e.items,a=e.changeFilter;return i.a.createElement(d.a,{className:E.a.bar,onInputChange:function(e,t){""===t&&a("All")},onChange:function(e,t){return t?a(t.title):"ALL"},options:t,getOptionLabel:function(e){return e.title},renderInput:function(e){return i.a.createElement(m.a,Object.assign({},e,{label:"Filter Results",variant:"outlined"}))}})},p=a(64),v=a(129),T=a(130),b=a(59),S=a.n(b),L=a(58),A=a.n(L),w=a(60),I=a.n(w),k=a(46),O=a.n(k);function x(){var e=i.a.useState(0),t=Object(p.a)(e,2),a=t[0],r=t[1];return i.a.createElement(v.a,{className:O.a.flex,value:a,onChange:function(e,t){r(t)},showLabels:!0},i.a.createElement(T.a,{className:O.a.flex,label:"Like",icon:i.a.createElement(A.a,null)}),i.a.createElement(T.a,{label:"Favourite",icon:i.a.createElement(S.a,null)}),i.a.createElement(T.a,{label:"Share",icon:i.a.createElement(I.a,null)}))}var B=function(){var e=Object(s.g)().itemId;return i.a.createElement("div",null,i.a.createElement("div",null,e),i.a.createElement(x,null))},R=function(e){return{type:"CHANGE_FILTER",category:e}},P=function(){var e=Object(o.c)((function(e){return e.items})),t=Object(o.c)((function(e){return e.category})),a=Object(o.b)(),r=("All"===t?e:e.filter((function(e){return e.title===t}))).map((function(e){return i.a.createElement(h,{title:e.title,year:e.year,key:e.title})})),n=Object(s.h)();return i.a.createElement("div",null,i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"".concat(n.path,"/:itemId")},i.a.createElement(B,null)),i.a.createElement(s.b,{path:n.path},i.a.createElement("div",null,i.a.createElement(g,{items:e,changeFilter:function(e){return a(R(e))}}),r))))},D=a(131),F=a(132),G=a(133),C=a(128),M=a(62),W=a.n(M),N=a(63),_=a.n(N),j=a(61),K=a.n(j);function H(){return i.a.createElement(D.a,{position:"static"},i.a.createElement(F.a,{className:K.a.flex},i.a.createElement(C.a,{edge:"start",color:"inherit","aria-label":"menu",href:"/react-redux"},i.a.createElement(W.a,null)),i.a.createElement(G.a,{variant:"h6"},"API"),i.a.createElement(C.a,{edge:"end",color:"inherit","aria-label":"menu",href:"/react-redux"},i.a.createElement(_.a,null))))}function U(){return i.a.createElement("div",null,i.a.createElement(H,null),i.a.createElement(y.a,null,i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"/itemList"},i.a.createElement(P,null)),i.a.createElement(s.b,{path:"/"},i.a.createElement(s.a,{to:"/itemList"})))))}var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_FILTER"===t.type?"".concat(t.category):e},V=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ITEMS":return[t.item];default:return e}},q=Object(c.b)({items:X,category:J}),z=Object(c.c)(q);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,{store:z},i.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.f99d8096.chunk.js.map