"use strict";var w=function(v,u){return function(){try{return u||v((u={exports:{}}).exports,u),u.exports}catch(o){throw (u=0, o)}};};var j=w(function(T,d){
var _=require('@stdlib/strided-base-reinterpret-complex128/dist'),B=require('@stdlib/complex-float64-real/dist'),C=require('@stdlib/complex-float64-imag/dist'),D=require('@stdlib/blas-base-zcopy/dist').ndarray,f=5;function F(v,u,o,x,c,n,m,R){var a,i,t,s,r,e,p,z,y,q;if(v<=0)return n;if(t=B(u),s=C(u),t===0&&s===0)return D(v,o,x,c,n,m,R);if(a=_(o,0),i=_(n,0),r=c*2,e=R*2,p=x*2,z=m*2,x===1&&m===1){if(y=v%f,y>0)for(q=0;q<y;q++)i[e]=a[r]-t,i[e+1]=a[r+1]-s,r+=p,e+=z;if(v<f)return n;for(q=y;q<v;q+=f)i[e]=a[r]-t,i[e+1]=a[r+1]-s,i[e+2]=a[r+2]-t,i[e+3]=a[r+3]-s,i[e+4]=a[r+4]-t,i[e+5]=a[r+5]-s,i[e+6]=a[r+6]-t,i[e+7]=a[r+7]-s,i[e+8]=a[r+8]-t,i[e+9]=a[r+9]-s,r+=f*2,e+=f*2;return n}for(q=0;q<v;q++)i[e]=a[r]-t,i[e+1]=a[r+1]-s,r+=p,e+=z;return n}d.exports=F
});var M=w(function(U,E){
var g=require('@stdlib/strided-base-stride2offset/dist'),G=j();function H(v,u,o,x,c,n){return G(v,u,o,x,g(v,x),c,n,g(v,n))}E.exports=H
});var k=w(function(V,b){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=M(),J=j();I(O,"ndarray",J);b.exports=O
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=k(),l,A=L(K(__dirname,"./native.js"));P(A)?l=Q:l=A;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
