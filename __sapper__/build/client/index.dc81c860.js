import{S as t,i as s,s as e,e as n,a as l,t as a,b as o,f as r,c,g as i,d as h,k as f,h as u,j as p,l as g,n as d,m as v,o as m,p as $,r as x,u as j,v as E,q as b,w as y,x as B,y as I}from"./client.8a5c68f0.js";function k(t){let s,e,v,m,$,x,j,E,b,y,B=t[0].title+"",I=t[0].description+"";return{c(){s=n("div"),e=n("img"),v=l(),m=n("div"),$=n("a"),x=a(B),E=l(),b=n("p"),y=a(I),this.h()},l(t){s=o(t,"DIV",{class:!0});var n=r(s);e=o(n,"IMG",{class:!0}),v=c(n),m=o(n,"DIV",{class:!0});var l=r(m);$=o(l,"A",{rel:!0,href:!0,class:!0});var a=r($);x=i(a,B),a.forEach(h),E=c(l),b=o(l,"P",{class:!0});var f=r(b);y=i(f,I),f.forEach(h),l.forEach(h),n.forEach(h),this.h()},h(){f(e,"class","svelte-ju8x2r"),f($,"rel","prefetch"),f($,"href",j="blog/"+t[0].slug),f($,"class","svelte-ju8x2r"),f(b,"class","svelte-ju8x2r"),f(m,"class","text"),f(s,"class","post svelte-ju8x2r")},m(t,n){u(t,s,n),p(s,e),p(s,v),p(s,m),p(m,$),p($,x),p(m,E),p(m,b),p(b,y)},p(t,[s]){1&s&&B!==(B=t[0].title+"")&&g(x,B),1&s&&j!==(j="blog/"+t[0].slug)&&f($,"href",j),1&s&&I!==(I=t[0].description+"")&&g(y,I)},i:d,o:d,d(t){t&&h(s)}}}function D(t,s,e){let{content:n}=s;return console.log(n),t.$set=t=>{"content"in t&&e(0,n=t.content)},[n]}class G extends t{constructor(t){super(),s(this,t,D,k,e,{content:0})}}function V(t,s,e){const n=t.slice();return n[1]=s[e],n}function q(t){let s,e;return s=new G({props:{content:t[1]}}),{c(){v(s.$$.fragment)},l(t){m(s.$$.fragment,t)},m(t,n){$(s,t,n),e=!0},p(t,e){const n={};1&e&&(n.content=t[1]),s.$set(n)},i(t){e||(x(s.$$.fragment,t),e=!0)},o(t){j(s.$$.fragment,t),e=!1},d(t){E(s,t)}}}function w(t){let s,e,g,d,v,m,$=t[0],E=[];for(let s=0;s<$.length;s+=1)E[s]=q(V(t,$,s));const k=t=>j(E[t],1,1,()=>{E[t]=null});return{c(){s=l(),e=n("h1"),g=a("BLOG"),d=l(),v=n("div");for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){b('[data-svelte="svelte-1rye1oe"]',document.head).forEach(h),s=c(t),e=o(t,"H1",{});var n=r(e);g=i(n,"BLOG"),n.forEach(h),d=c(t),v=o(t,"DIV",{id:!0,class:!0});var l=r(v);for(let t=0;t<E.length;t+=1)E[t].l(l);l.forEach(h),this.h()},h(){document.title="Blog - Nersan Teknik",f(v,"id","container"),f(v,"class","svelte-oh34y6")},m(t,n){u(t,s,n),u(t,e,n),p(e,g),u(t,d,n),u(t,v,n);for(let t=0;t<E.length;t+=1)E[t].m(v,null);m=!0},p(t,[s]){if(1&s){let e;for($=t[0],e=0;e<$.length;e+=1){const n=V(t,$,e);E[e]?(E[e].p(n,s),x(E[e],1)):(E[e]=q(n),E[e].c(),x(E[e],1),E[e].m(v,null))}for(I(),e=$.length;e<E.length;e+=1)k(e);y()}},i(t){if(!m){for(let t=0;t<$.length;t+=1)x(E[t]);m=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)j(E[t]);m=!1},d(t){t&&h(s),t&&h(e),t&&h(d),t&&h(v),B(E,t)}}}function L({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function O(t,s,e){let{posts:n}=s;return t.$set=t=>{"posts"in t&&e(0,n=t.posts)},[n]}export default class extends t{constructor(t){super(),s(this,t,O,w,e,{posts:0})}}export{L as preload};
