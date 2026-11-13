import{r as _m,g as Iy,R as d1,a as xt,j as Le,c as p1}from"./index-hFnWlrCX.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="167",m1={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},g1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zy=0,jp=1,By=2,v1=3,Fy=0,Fh=1,bl=2,Vi=3,Ls=0,Xn=1,ki=2,Ds=0,nr=1,Kp=2,Jp=3,Qp=4,Hy=5,oa=100,Vy=101,Gy=102,ky=103,Wy=104,Xy=200,qy=201,Yy=202,Zy=203,th=204,eh=205,jy=206,Ky=207,Jy=208,Qy=209,$y=210,tx=211,ex=212,nx=213,ix=214,sx=0,ax=1,rx=2,Pl=3,ox=4,lx=5,cx=6,ux=7,sc=0,hx=1,fx=2,ss=0,dx=1,px=2,mx=3,ym=4,gx=5,vx=6,_x=7,$p="attached",yx="detached",Hh=300,Ns=301,ca=302,Ol=303,Il=304,Co=306,zl=1e3,Ri=1001,Bl=1002,yn=1003,xm=1004,_1=1004,po=1005,y1=1005,hn=1006,El=1007,x1=1007,ns=1008,S1=1008,Wi=1009,Sm=1010,Mm=1011,So=1012,Vh=1013,Ps=1014,ti=1015,Ro=1016,Gh=1017,kh=1018,or=1020,bm=35902,Em=1021,Am=1022,On=1023,Tm=1024,wm=1025,ir=1026,lr=1027,Wh=1028,ac=1029,Cm=1030,Xh=1031,M1=1032,qh=1033,Al=33776,Tl=33777,wl=33778,Cl=33779,nh=35840,ih=35841,sh=35842,ah=35843,rh=36196,oh=37492,lh=37496,ch=37808,uh=37809,hh=37810,fh=37811,dh=37812,ph=37813,mh=37814,gh=37815,vh=37816,_h=37817,yh=37818,xh=37819,Sh=37820,Mh=37821,Rl=36492,bh=36494,Eh=36495,Rm=36283,Ah=36284,Th=36285,wh=36286,xx=2200,Sx=2201,Mx=2202,Fl=2300,Ch=2301,Ku=2302,Qa=2400,$a=2401,Hl=2402,Yh=2500,Um=2501,b1=0,E1=1,A1=2,bx=3200,Ex=3201,T1=3202,w1=3203,ha=0,Ax=1,Cs="",$n="srgb",os="srgb-linear",Zh="display-p3",rc="display-p3-linear",Vl="linear",Ve="srgb",Gl="rec709",kl="p3",C1=0,ja=7680,R1=7681,U1=7682,D1=7683,L1=34055,N1=34056,P1=5386,O1=512,I1=513,z1=514,B1=515,F1=516,H1=517,V1=518,tm=519,Tx=512,wx=513,Cx=514,Dm=515,Rx=516,Ux=517,Dx=518,Lx=519,Wl=35044,G1=35048,k1=35040,W1=35045,X1=35049,q1=35041,Y1=35046,Z1=35050,j1=35042,K1="100",em="300 es",is=2e3,Xl=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,l=i.length;o<l;o++)i[o].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cv=1234567;const sr=Math.PI/180,Mo=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function en(s,t,e){return Math.max(t,Math.min(e,s))}function Lm(s,t){return(s%t+t)%t}function J1(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Q1(s,t,e){return s!==t?(e-s)/(t-s):0}function Ul(s,t,e){return(1-e)*s+e*t}function $1(s,t,e,n){return Ul(s,t,1-Math.exp(-e*n))}function tE(s,t=1){return t-Math.abs(Lm(s,t*2)-t)}function eE(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function nE(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function iE(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sE(s,t){return s+Math.random()*(t-s)}function aE(s){return s*(.5-Math.random())}function rE(s){s!==void 0&&(Cv=s);let t=Cv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function oE(s){return s*sr}function lE(s){return s*Mo}function cE(s){return(s&s-1)===0&&s!==0}function uE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fE(s,t,e,n,i){const o=Math.cos,l=Math.sin,c=o(e/2),h=l(e/2),f=o((t+n)/2),p=l((t+n)/2),m=o((t-n)/2),g=l((t-n)/2),v=o((n-t)/2),x=l((n-t)/2);switch(i){case"XYX":s.set(c*p,h*m,h*g,c*f);break;case"YZY":s.set(h*g,c*p,h*m,c*f);break;case"ZXZ":s.set(h*m,h*g,c*p,c*f);break;case"XZX":s.set(c*p,h*x,h*v,c*f);break;case"YXY":s.set(h*v,c*p,h*x,c*f);break;case"ZYZ":s.set(h*x,h*v,c*p,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ql={DEG2RAD:sr,RAD2DEG:Mo,generateUUID:_i,clamp:en,euclideanModulo:Lm,mapLinear:J1,inverseLerp:Q1,lerp:Ul,damp:$1,pingpong:tE,smoothstep:eE,smootherstep:nE,randInt:iE,randFloat:sE,randFloatSpread:aE,seededRandom:rE,degToRad:oE,radToDeg:lE,isPowerOfTwo:cE,ceilPowerOfTwo:uE,floorPowerOfTwo:hE,setQuaternionFromProperEuler:fE,normalize:fe,denormalize:Wn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*n-l*i+t.x,this.y=o*i+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,i,o,l,c,h,f){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,l,c,h,f)}set(t,e,n,i,o,l,c,h,f){const p=this.elements;return p[0]=t,p[1]=i,p[2]=c,p[3]=e,p[4]=o,p[5]=h,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,l=n[0],c=n[3],h=n[6],f=n[1],p=n[4],m=n[7],g=n[2],v=n[5],x=n[8],M=i[0],S=i[3],y=i[6],A=i[1],E=i[4],T=i[7],z=i[2],R=i[5],N=i[8];return o[0]=l*M+c*A+h*z,o[3]=l*S+c*E+h*R,o[6]=l*y+c*T+h*N,o[1]=f*M+p*A+m*z,o[4]=f*S+p*E+m*R,o[7]=f*y+p*T+m*N,o[2]=g*M+v*A+x*z,o[5]=g*S+v*E+x*R,o[8]=g*y+v*T+x*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],l=t[4],c=t[5],h=t[6],f=t[7],p=t[8];return e*l*p-e*c*f-n*o*p+n*c*h+i*o*f-i*l*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],l=t[4],c=t[5],h=t[6],f=t[7],p=t[8],m=p*l-c*f,g=c*h-p*o,v=f*o-l*h,x=e*m+n*g+i*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=m*M,t[1]=(i*f-p*n)*M,t[2]=(c*n-i*l)*M,t[3]=g*M,t[4]=(p*e-i*h)*M,t[5]=(i*o-c*e)*M,t[6]=v*M,t[7]=(n*h-f*e)*M,t[8]=(l*e-n*o)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,l,c){const h=Math.cos(o),f=Math.sin(o);return this.set(n*h,n*f,-n*(h*l+f*c)+l+t,-i*f,i*h,-i*(-f*l+h*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Gd.makeScale(t,e)),this}rotate(t){return this.premultiply(Gd.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new he;function Nx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const dE={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function mo(s,t){return new dE[s](t)}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Px(){const s=Yl("canvas");return s.style.display="block",s}const Rv={};function yo(s){s in Rv||(Rv[s]=!0,console.warn(s))}function pE(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Uv=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dv=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ll={[os]:{transfer:Vl,primaries:Gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[$n]:{transfer:Ve,primaries:Gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rc]:{transfer:Vl,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Dv),fromReference:s=>s.applyMatrix3(Uv)},[Zh]:{transfer:Ve,primaries:kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dv),fromReference:s=>s.applyMatrix3(Uv).convertLinearToSRGB()}},mE=new Set([os,rc]),we={enabled:!0,_workingColorSpace:os,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!mE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ll[t].toReference,i=ll[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ll[s].primaries},getTransfer:function(s){return s===Cs?Vl:ll[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(ll[t].luminanceCoefficients)}};function xo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function kd(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let kr;class Ox{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kr===void 0&&(kr=Yl("canvas")),kr.width=t.width,kr.height=t.height;const n=kr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let l=0;l<o.length;l++)o[l]=xo(o[l]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xo(e[n]/255)*255):e[n]=xo(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gE=0;class tr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?o.push(Wd(i[l].image)):o.push(Wd(i[l]))}else o=Wd(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ox.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vE=0;class nn extends Is{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Ri,i=Ri,o=hn,l=ns,c=On,h=Wi,f=nn.DEFAULT_ANISOTROPY,p=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=_i(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zl:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zl:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Hh;nn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,i=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*i+l[12]*o,this.y=l[1]*e+l[5]*n+l[9]*i+l[13]*o,this.z=l[2]*e+l[6]*n+l[10]*i+l[14]*o,this.w=l[3]*e+l[7]*n+l[11]*i+l[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const h=t.elements,f=h[0],p=h[4],m=h[8],g=h[1],v=h[5],x=h[9],M=h[2],S=h[6],y=h[10];if(Math.abs(p-g)<.01&&Math.abs(m-M)<.01&&Math.abs(x-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+M)<.1&&Math.abs(x+S)<.1&&Math.abs(f+v+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(f+1)/2,T=(v+1)/2,z=(y+1)/2,R=(p+g)/4,N=(m+M)/4,H=(x+S)/4;return E>T&&E>z?E<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(E),i=R/n,o=N/n):T>z?T<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(T),n=R/i,o=H/i):z<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(z),n=N/o,i=H/o),this.set(n,i,o,e),this}let A=Math.sqrt((S-x)*(S-x)+(m-M)*(m-M)+(g-p)*(g-p));return Math.abs(A)<.001&&(A=1),this.x=(S-x)/A,this.y=(m-M)/A,this.z=(g-p)/A,this.w=Math.acos((f+v+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ix extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Ix{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jh extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _E extends Xi{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new jh(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Nm extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yE extends Xi{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Nm(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class ei{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,l,c){let h=n[i+0],f=n[i+1],p=n[i+2],m=n[i+3];const g=o[l+0],v=o[l+1],x=o[l+2],M=o[l+3];if(c===0){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=m;return}if(c===1){t[e+0]=g,t[e+1]=v,t[e+2]=x,t[e+3]=M;return}if(m!==M||h!==g||f!==v||p!==x){let S=1-c;const y=h*g+f*v+p*x+m*M,A=y>=0?1:-1,E=1-y*y;if(E>Number.EPSILON){const z=Math.sqrt(E),R=Math.atan2(z,y*A);S=Math.sin(S*R)/z,c=Math.sin(c*R)/z}const T=c*A;if(h=h*S+g*T,f=f*S+v*T,p=p*S+x*T,m=m*S+M*T,S===1-c){const z=1/Math.sqrt(h*h+f*f+p*p+m*m);h*=z,f*=z,p*=z,m*=z}}t[e]=h,t[e+1]=f,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,i,o,l){const c=n[i],h=n[i+1],f=n[i+2],p=n[i+3],m=o[l],g=o[l+1],v=o[l+2],x=o[l+3];return t[e]=c*x+p*m+h*v-f*g,t[e+1]=h*x+p*g+f*m-c*v,t[e+2]=f*x+p*v+c*g-h*m,t[e+3]=p*x-c*m-h*g-f*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,l=t._order,c=Math.cos,h=Math.sin,f=c(n/2),p=c(i/2),m=c(o/2),g=h(n/2),v=h(i/2),x=h(o/2);switch(l){case"XYZ":this._x=g*p*m+f*v*x,this._y=f*v*m-g*p*x,this._z=f*p*x+g*v*m,this._w=f*p*m-g*v*x;break;case"YXZ":this._x=g*p*m+f*v*x,this._y=f*v*m-g*p*x,this._z=f*p*x-g*v*m,this._w=f*p*m+g*v*x;break;case"ZXY":this._x=g*p*m-f*v*x,this._y=f*v*m+g*p*x,this._z=f*p*x+g*v*m,this._w=f*p*m-g*v*x;break;case"ZYX":this._x=g*p*m-f*v*x,this._y=f*v*m+g*p*x,this._z=f*p*x-g*v*m,this._w=f*p*m+g*v*x;break;case"YZX":this._x=g*p*m+f*v*x,this._y=f*v*m+g*p*x,this._z=f*p*x-g*v*m,this._w=f*p*m-g*v*x;break;case"XZY":this._x=g*p*m-f*v*x,this._y=f*v*m-g*p*x,this._z=f*p*x+g*v*m,this._w=f*p*m+g*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],l=e[1],c=e[5],h=e[9],f=e[2],p=e[6],m=e[10],g=n+c+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-h)*v,this._y=(o-f)*v,this._z=(l-i)*v}else if(n>c&&n>m){const v=2*Math.sqrt(1+n-c-m);this._w=(p-h)/v,this._x=.25*v,this._y=(i+l)/v,this._z=(o+f)/v}else if(c>m){const v=2*Math.sqrt(1+c-n-m);this._w=(o-f)/v,this._x=(i+l)/v,this._y=.25*v,this._z=(h+p)/v}else{const v=2*Math.sqrt(1+m-n-c);this._w=(l-i)/v,this._x=(o+f)/v,this._y=(h+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,l=t._w,c=e._x,h=e._y,f=e._z,p=e._w;return this._x=n*p+l*c+i*f-o*h,this._y=i*p+l*h+o*c-n*f,this._z=o*p+l*f+n*h-i*c,this._w=l*p-n*c-i*h-o*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,l=this._w;let c=l*t._w+n*t._x+i*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=n,this._y=i,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const v=1-e;return this._w=v*l+e*this._w,this._x=v*n+e*this._x,this._y=v*i+e*this._y,this._z=v*o+e*this._z,this.normalize(),this}const f=Math.sqrt(h),p=Math.atan2(f,c),m=Math.sin((1-e)*p)/f,g=Math.sin(e*p)/f;return this._w=l*m+this._w*g,this._x=n*m+this._x*g,this._y=i*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,l=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*l,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*l,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,l=t.y,c=t.z,h=t.w,f=2*(l*i-c*n),p=2*(c*e-o*i),m=2*(o*n-l*e);return this.x=e+h*f+l*m-c*p,this.y=n+h*p+c*f-o*m,this.z=i+h*m+o*p-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,l=e.x,c=e.y,h=e.z;return this.x=i*h-o*c,this.y=o*l-n*h,this.z=n*c-i*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xd.copy(this).projectOnVector(t),this.sub(Xd)}reflect(t){return this.sub(Xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new O,Lv=new ei;class xn{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,Bi):Bi.fromBufferAttribute(o,l),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$c.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$c.copy(n.boundingBox)),$c.applyMatrix4(t.matrixWorld),this.union($c)}const i=t.children;for(let o=0,l=i.length;o<l;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cl),tu.subVectors(this.max,cl),Wr.subVectors(t.a,cl),Xr.subVectors(t.b,cl),qr.subVectors(t.c,cl),Qs.subVectors(Xr,Wr),$s.subVectors(qr,Xr),za.subVectors(Wr,qr);let e=[0,-Qs.z,Qs.y,0,-$s.z,$s.y,0,-za.z,za.y,Qs.z,0,-Qs.x,$s.z,0,-$s.x,za.z,0,-za.x,-Qs.y,Qs.x,0,-$s.y,$s.x,0,-za.y,za.x,0];return!qd(e,Wr,Xr,qr,tu)||(e=[1,0,0,0,1,0,0,0,1],!qd(e,Wr,Xr,qr,tu))?!1:(eu.crossVectors(Qs,$s),e=[eu.x,eu.y,eu.z],qd(e,Wr,Xr,qr,tu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ss=[new O,new O,new O,new O,new O,new O,new O,new O],Bi=new O,$c=new xn,Wr=new O,Xr=new O,qr=new O,Qs=new O,$s=new O,za=new O,cl=new O,tu=new O,eu=new O,Ba=new O;function qd(s,t,e,n,i){for(let o=0,l=s.length-3;o<=l;o+=3){Ba.fromArray(s,o);const c=i.x*Math.abs(Ba.x)+i.y*Math.abs(Ba.y)+i.z*Math.abs(Ba.z),h=t.dot(Ba),f=e.dot(Ba),p=n.dot(Ba);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>c)return!1}return!0}const xE=new xn,ul=new O,Yd=new O;class Sn{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xE.setFromPoints(t).getCenter(n);let i=0;for(let o=0,l=t.length;o<l;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ul.subVectors(t,this.center);const e=ul.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ul,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ul.copy(t.center).add(Yd)),this.expandByPoint(ul.copy(t.center).sub(Yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ms=new O,Zd=new O,nu=new O,ta=new O,jd=new O,iu=new O,Kd=new O;class Uo{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ms)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ms.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ms.copy(this.origin).addScaledVector(this.direction,e),Ms.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zd.copy(t).add(e).multiplyScalar(.5),nu.copy(e).sub(t).normalize(),ta.copy(this.origin).sub(Zd);const o=t.distanceTo(e)*.5,l=-this.direction.dot(nu),c=ta.dot(this.direction),h=-ta.dot(nu),f=ta.lengthSq(),p=Math.abs(1-l*l);let m,g,v,x;if(p>0)if(m=l*h-c,g=l*c-h,x=o*p,m>=0)if(g>=-x)if(g<=x){const M=1/p;m*=M,g*=M,v=m*(m+l*g+2*c)+g*(l*m+g+2*h)+f}else g=o,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*h)+f;else g=-o,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*h)+f;else g<=-x?(m=Math.max(0,-(-l*o+c)),g=m>0?-o:Math.min(Math.max(-o,-h),o),v=-m*m+g*(g+2*h)+f):g<=x?(m=0,g=Math.min(Math.max(-o,-h),o),v=g*(g+2*h)+f):(m=Math.max(0,-(l*o+c)),g=m>0?o:Math.min(Math.max(-o,-h),o),v=-m*m+g*(g+2*h)+f);else g=l>0?-o:o,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(Zd).addScaledVector(nu,g),v}intersectSphere(t,e){Ms.subVectors(t.center,this.origin);const n=Ms.dot(this.direction),i=Ms.dot(Ms)-n*n,o=t.radius*t.radius;if(i>o)return null;const l=Math.sqrt(o-i),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,l,c,h;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(n=(t.min.x-g.x)*f,i=(t.max.x-g.x)*f):(n=(t.max.x-g.x)*f,i=(t.min.x-g.x)*f),p>=0?(o=(t.min.y-g.y)*p,l=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,l=(t.min.y-g.y)*p),n>l||o>i||((o>n||isNaN(n))&&(n=o),(l<i||isNaN(i))&&(i=l),m>=0?(c=(t.min.z-g.z)*m,h=(t.max.z-g.z)*m):(c=(t.max.z-g.z)*m,h=(t.min.z-g.z)*m),n>h||c>i)||((c>n||n!==n)&&(n=c),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ms)!==null}intersectTriangle(t,e,n,i,o){jd.subVectors(e,t),iu.subVectors(n,t),Kd.crossVectors(jd,iu);let l=this.direction.dot(Kd),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;ta.subVectors(this.origin,t);const h=c*this.direction.dot(iu.crossVectors(ta,iu));if(h<0)return null;const f=c*this.direction.dot(jd.cross(ta));if(f<0||h+f>l)return null;const p=-c*ta.dot(Kd);return p<0?null:this.at(p/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,o,l,c,h,f,p,m,g,v,x,M,S){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,l,c,h,f,p,m,g,v,x,M,S)}set(t,e,n,i,o,l,c,h,f,p,m,g,v,x,M,S){const y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=o,y[5]=l,y[9]=c,y[13]=h,y[2]=f,y[6]=p,y[10]=m,y[14]=g,y[3]=v,y[7]=x,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Yr.setFromMatrixColumn(t,0).length(),o=1/Yr.setFromMatrixColumn(t,1).length(),l=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(i),f=Math.sin(i),p=Math.cos(o),m=Math.sin(o);if(t.order==="XYZ"){const g=l*p,v=l*m,x=c*p,M=c*m;e[0]=h*p,e[4]=-h*m,e[8]=f,e[1]=v+x*f,e[5]=g-M*f,e[9]=-c*h,e[2]=M-g*f,e[6]=x+v*f,e[10]=l*h}else if(t.order==="YXZ"){const g=h*p,v=h*m,x=f*p,M=f*m;e[0]=g+M*c,e[4]=x*c-v,e[8]=l*f,e[1]=l*m,e[5]=l*p,e[9]=-c,e[2]=v*c-x,e[6]=M+g*c,e[10]=l*h}else if(t.order==="ZXY"){const g=h*p,v=h*m,x=f*p,M=f*m;e[0]=g-M*c,e[4]=-l*m,e[8]=x+v*c,e[1]=v+x*c,e[5]=l*p,e[9]=M-g*c,e[2]=-l*f,e[6]=c,e[10]=l*h}else if(t.order==="ZYX"){const g=l*p,v=l*m,x=c*p,M=c*m;e[0]=h*p,e[4]=x*f-v,e[8]=g*f+M,e[1]=h*m,e[5]=M*f+g,e[9]=v*f-x,e[2]=-f,e[6]=c*h,e[10]=l*h}else if(t.order==="YZX"){const g=l*h,v=l*f,x=c*h,M=c*f;e[0]=h*p,e[4]=M-g*m,e[8]=x*m+v,e[1]=m,e[5]=l*p,e[9]=-c*p,e[2]=-f*p,e[6]=v*m+x,e[10]=g-M*m}else if(t.order==="XZY"){const g=l*h,v=l*f,x=c*h,M=c*f;e[0]=h*p,e[4]=-m,e[8]=f*p,e[1]=g*m+M,e[5]=l*p,e[9]=v*m-x,e[2]=x*m-v,e[6]=c*p,e[10]=M*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SE,t,ME)}lookAt(t,e,n){const i=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),ea.crossVectors(n,pi),ea.lengthSq()===0&&(Math.abs(n.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),ea.crossVectors(n,pi)),ea.normalize(),su.crossVectors(pi,ea),i[0]=ea.x,i[4]=su.x,i[8]=pi.x,i[1]=ea.y,i[5]=su.y,i[9]=pi.y,i[2]=ea.z,i[6]=su.z,i[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,l=n[0],c=n[4],h=n[8],f=n[12],p=n[1],m=n[5],g=n[9],v=n[13],x=n[2],M=n[6],S=n[10],y=n[14],A=n[3],E=n[7],T=n[11],z=n[15],R=i[0],N=i[4],H=i[8],C=i[12],w=i[1],B=i[5],Q=i[9],W=i[13],K=i[2],et=i[6],I=i[10],k=i[14],G=i[3],at=i[7],rt=i[11],ft=i[15];return o[0]=l*R+c*w+h*K+f*G,o[4]=l*N+c*B+h*et+f*at,o[8]=l*H+c*Q+h*I+f*rt,o[12]=l*C+c*W+h*k+f*ft,o[1]=p*R+m*w+g*K+v*G,o[5]=p*N+m*B+g*et+v*at,o[9]=p*H+m*Q+g*I+v*rt,o[13]=p*C+m*W+g*k+v*ft,o[2]=x*R+M*w+S*K+y*G,o[6]=x*N+M*B+S*et+y*at,o[10]=x*H+M*Q+S*I+y*rt,o[14]=x*C+M*W+S*k+y*ft,o[3]=A*R+E*w+T*K+z*G,o[7]=A*N+E*B+T*et+z*at,o[11]=A*H+E*Q+T*I+z*rt,o[15]=A*C+E*W+T*k+z*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],l=t[1],c=t[5],h=t[9],f=t[13],p=t[2],m=t[6],g=t[10],v=t[14],x=t[3],M=t[7],S=t[11],y=t[15];return x*(+o*h*m-i*f*m-o*c*g+n*f*g+i*c*v-n*h*v)+M*(+e*h*v-e*f*g+o*l*g-i*l*v+i*f*p-o*h*p)+S*(+e*f*m-e*c*v-o*l*m+n*l*v+o*c*p-n*f*p)+y*(-i*c*p-e*h*m+e*c*g+i*l*m-n*l*g+n*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],l=t[4],c=t[5],h=t[6],f=t[7],p=t[8],m=t[9],g=t[10],v=t[11],x=t[12],M=t[13],S=t[14],y=t[15],A=m*S*f-M*g*f+M*h*v-c*S*v-m*h*y+c*g*y,E=x*g*f-p*S*f-x*h*v+l*S*v+p*h*y-l*g*y,T=p*M*f-x*m*f+x*c*v-l*M*v-p*c*y+l*m*y,z=x*m*h-p*M*h-x*c*g+l*M*g+p*c*S-l*m*S,R=e*A+n*E+i*T+o*z;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return t[0]=A*N,t[1]=(M*g*o-m*S*o-M*i*v+n*S*v+m*i*y-n*g*y)*N,t[2]=(c*S*o-M*h*o+M*i*f-n*S*f-c*i*y+n*h*y)*N,t[3]=(m*h*o-c*g*o-m*i*f+n*g*f+c*i*v-n*h*v)*N,t[4]=E*N,t[5]=(p*S*o-x*g*o+x*i*v-e*S*v-p*i*y+e*g*y)*N,t[6]=(x*h*o-l*S*o-x*i*f+e*S*f+l*i*y-e*h*y)*N,t[7]=(l*g*o-p*h*o+p*i*f-e*g*f-l*i*v+e*h*v)*N,t[8]=T*N,t[9]=(x*m*o-p*M*o-x*n*v+e*M*v+p*n*y-e*m*y)*N,t[10]=(l*M*o-x*c*o+x*n*f-e*M*f-l*n*y+e*c*y)*N,t[11]=(p*c*o-l*m*o-p*n*f+e*m*f+l*n*v-e*c*v)*N,t[12]=z*N,t[13]=(p*M*i-x*m*i+x*n*g-e*M*g-p*n*S+e*m*S)*N,t[14]=(x*c*i-l*M*i-x*n*h+e*M*h+l*n*S-e*c*S)*N,t[15]=(l*m*i-p*c*i+p*n*h-e*m*h-l*n*g+e*c*g)*N,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,l=t.x,c=t.y,h=t.z,f=o*l,p=o*c;return this.set(f*l+n,f*c-i*h,f*h+i*c,0,f*c+i*h,p*c+n,p*h-i*l,0,f*h-i*c,p*h+i*l,o*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,l){return this.set(1,n,o,0,t,1,l,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,l=e._y,c=e._z,h=e._w,f=o+o,p=l+l,m=c+c,g=o*f,v=o*p,x=o*m,M=l*p,S=l*m,y=c*m,A=h*f,E=h*p,T=h*m,z=n.x,R=n.y,N=n.z;return i[0]=(1-(M+y))*z,i[1]=(v+T)*z,i[2]=(x-E)*z,i[3]=0,i[4]=(v-T)*R,i[5]=(1-(g+y))*R,i[6]=(S+A)*R,i[7]=0,i[8]=(x+E)*N,i[9]=(S-A)*N,i[10]=(1-(g+M))*N,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Yr.set(i[0],i[1],i[2]).length();const l=Yr.set(i[4],i[5],i[6]).length(),c=Yr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Fi.copy(this);const f=1/o,p=1/l,m=1/c;return Fi.elements[0]*=f,Fi.elements[1]*=f,Fi.elements[2]*=f,Fi.elements[4]*=p,Fi.elements[5]*=p,Fi.elements[6]*=p,Fi.elements[8]*=m,Fi.elements[9]*=m,Fi.elements[10]*=m,e.setFromRotationMatrix(Fi),n.x=o,n.y=l,n.z=c,this}makePerspective(t,e,n,i,o,l,c=is){const h=this.elements,f=2*o/(e-t),p=2*o/(n-i),m=(e+t)/(e-t),g=(n+i)/(n-i);let v,x;if(c===is)v=-(l+o)/(l-o),x=-2*l*o/(l-o);else if(c===Xl)v=-l/(l-o),x=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,o,l,c=is){const h=this.elements,f=1/(e-t),p=1/(n-i),m=1/(l-o),g=(e+t)*f,v=(n+i)*p;let x,M;if(c===is)x=(l+o)*m,M=-2*m;else if(c===Xl)x=o*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=M,h[14]=-x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yr=new O,Fi=new ie,SE=new O(0,0,0),ME=new O(1,1,1),ea=new O,su=new O,pi=new O,Nv=new ie,Pv=new ei;class yi{constructor(t=0,e=0,n=0,i=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],l=i[4],c=i[8],h=i[1],f=i[5],p=i[9],m=i[2],g=i[6],v=i[10];switch(e){case"XYZ":this._y=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(en(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-en(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nv,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bE=0;const Ov=new O,Zr=new ei,bs=new ie,au=new O,hl=new O,EE=new O,AE=new ei,Iv=new O(1,0,0),zv=new O(0,1,0),Bv=new O(0,0,1),Fv={type:"added"},TE={type:"removed"},jr={type:"childadded",child:null},Jd={type:"childremoved",child:null};class Ce extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new O,e=new yi,n=new ei,i=new O(1,1,1);function o(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new he}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.premultiply(Zr),this}rotateX(t){return this.rotateOnAxis(Iv,t)}rotateY(t){return this.rotateOnAxis(zv,t)}rotateZ(t){return this.rotateOnAxis(Bv,t)}translateOnAxis(t,e){return Ov.copy(t).applyQuaternion(this.quaternion),this.position.add(Ov.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Iv,t)}translateY(t){return this.translateOnAxis(zv,t)}translateZ(t){return this.translateOnAxis(Bv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?au.copy(t):au.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(hl,au,this.up):bs.lookAt(au,hl,this.up),this.quaternion.setFromRotationMatrix(bs),i&&(bs.extractRotation(i.matrixWorld),Zr.setFromRotationMatrix(bs),this.quaternion.premultiply(Zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fv),jr.child=t,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(TE),Jd.child=t,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fv),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,l=i.length;o<l;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,t,EE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,AE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,l=i.length;o<l;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const m=h[f];o(t.shapes,m)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(o(t.materials,this.material[h]));i.material=c}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];i.animations.push(o(t.animations,h))}}if(e){const c=l(t.geometries),h=l(t.materials),f=l(t.textures),p=l(t.images),m=l(t.shapes),g=l(t.skeletons),v=l(t.animations),x=l(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=i,n;function l(c){const h=[];for(const f in c){const p=c[f];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ce.DEFAULT_UP=new O(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new O,Es=new O,Qd=new O,As=new O,Kr=new O,Jr=new O,Hv=new O,$d=new O,tp=new O,ep=new O;class gi{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hi.subVectors(t,e),i.cross(Hi);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Hi.subVectors(i,e),Es.subVectors(n,e),Qd.subVectors(t,e);const l=Hi.dot(Hi),c=Hi.dot(Es),h=Hi.dot(Qd),f=Es.dot(Es),p=Es.dot(Qd),m=l*f-c*c;if(m===0)return o.set(0,0,0),null;const g=1/m,v=(f*h-c*p)*g,x=(l*p-c*h)*g;return o.set(1-v-x,x,v)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getInterpolation(t,e,n,i,o,l,c,h){return this.getBarycoord(t,e,n,i,As)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,As.x),h.addScaledVector(l,As.y),h.addScaledVector(c,As.z),h)}static isFrontFacing(t,e,n,i){return Hi.subVectors(n,e),Es.subVectors(t,e),Hi.cross(Es).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Hi.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return gi.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let l,c;Kr.subVectors(i,n),Jr.subVectors(o,n),$d.subVectors(t,n);const h=Kr.dot($d),f=Jr.dot($d);if(h<=0&&f<=0)return e.copy(n);tp.subVectors(t,i);const p=Kr.dot(tp),m=Jr.dot(tp);if(p>=0&&m<=p)return e.copy(i);const g=h*m-p*f;if(g<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(Kr,l);ep.subVectors(t,o);const v=Kr.dot(ep),x=Jr.dot(ep);if(x>=0&&v<=x)return e.copy(o);const M=v*f-h*x;if(M<=0&&f>=0&&x<=0)return c=f/(f-x),e.copy(n).addScaledVector(Jr,c);const S=p*x-v*m;if(S<=0&&m-p>=0&&v-x>=0)return Hv.subVectors(o,i),c=(m-p)/(m-p+(v-x)),e.copy(i).addScaledVector(Hv,c);const y=1/(S+M+g);return l=M*y,c=g*y,e.copy(n).addScaledVector(Kr,l).addScaledVector(Jr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},na={h:0,s:0,l:0},ru={h:0,s:0,l:0};function np(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=we.workingColorSpace){if(t=Lm(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,l=2*n-o;this.r=np(l,o,t+1/3),this.g=np(l,o,t),this.b=np(l,o,t-1/3)}return we.toWorkingColorSpace(this,i),this}setStyle(t,e=$n){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){const n=zx[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}copyLinearToSRGB(t){return this.r=kd(t.r),this.g=kd(t.g),this.b=kd(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return we.fromWorkingColorSpace(Nn.copy(this),t),Math.round(en(Nn.r*255,0,255))*65536+Math.round(en(Nn.g*255,0,255))*256+Math.round(en(Nn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(Nn.copy(this),e);const n=Nn.r,i=Nn.g,o=Nn.b,l=Math.max(n,i,o),c=Math.min(n,i,o);let h,f;const p=(c+l)/2;if(c===l)h=0,f=0;else{const m=l-c;switch(f=p<=.5?m/(l+c):m/(2-l-c),l){case n:h=(i-o)/m+(i<o?6:0);break;case i:h=(o-n)/m+2;break;case o:h=(n-i)/m+4;break}h/=6}return t.h=h,t.s=f,t.l=p,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=$n){we.fromWorkingColorSpace(Nn.copy(this),t);const e=Nn.r,n=Nn.g,i=Nn.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(na),this.setHSL(na.h+t,na.s+e,na.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(na),t.getHSL(ru);const n=Ul(na.h,ru.h,e),i=Ul(na.s,ru.s,e),o=Ul(na.l,ru.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Bt;Bt.NAMES=zx;let wE=0;class In extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=nr,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=oa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Ls&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==th&&(n.blendSrc=this.blendSrc),this.blendDst!==eh&&(n.blendDst=this.blendDst),this.blendEquation!==oa&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ja&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ja&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ja&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}if(e){const o=i(t.textures),l=i(t.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class fa extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rs=CE();function CE(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let h=0;h<256;++h){const f=h-127;f<-27?(n[h]=0,n[h|256]=32768,i[h]=24,i[h|256]=24):f<-14?(n[h]=1024>>-f-14,n[h|256]=1024>>-f-14|32768,i[h]=-f-1,i[h|256]=-f-1):f<=15?(n[h]=f+15<<10,n[h|256]=f+15<<10|32768,i[h]=13,i[h|256]=13):f<128?(n[h]=31744,n[h|256]=64512,i[h]=24,i[h|256]=24):(n[h]=31744,n[h|256]=64512,i[h]=13,i[h|256]=13)}const o=new Uint32Array(2048),l=new Uint32Array(64),c=new Uint32Array(64);for(let h=1;h<1024;++h){let f=h<<13,p=0;for(;(f&8388608)===0;)f<<=1,p-=8388608;f&=-8388609,p+=947912704,o[h]=f|p}for(let h=1024;h<2048;++h)o[h]=939524096+(h-1024<<13);for(let h=1;h<31;++h)l[h]=h<<23;l[31]=1199570944,l[32]=2147483648;for(let h=33;h<63;++h)l[h]=2147483648+(h-32<<23);l[63]=3347054592;for(let h=1;h<64;++h)h!==32&&(c[h]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:o,exponentTable:l,offsetTable:c}}function Jn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=en(s,-65504,65504),Rs.floatView[0]=s;const t=Rs.uint32View[0],e=t>>23&511;return Rs.baseTable[e]+((t&8388607)>>Rs.shiftTable[e])}function Sl(s){const t=s>>10;return Rs.uint32View[0]=Rs.mantissaTable[Rs.offsetTable[t]+(s&1023)]+Rs.exponentTable[t],Rs.floatView[0]}const RE={toHalfFloat:Jn,fromHalfFloat:Sl},cn=new O,ou=new ht;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return yo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ou.fromBufferAttribute(this,e),ou.applyMatrix3(t),this.setXY(e,ou.x,ou.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix3(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),o=fe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}}class UE extends ze{constructor(t,e,n){super(new Int8Array(t),e,n)}}class DE extends ze{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class LE extends ze{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class NE extends ze{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Pm extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class PE extends ze{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Om extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class OE extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Sl(this.array[t*this.itemSize]);return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=Jn(e),this}getY(t){let e=Sl(this.array[t*this.itemSize+1]);return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=Jn(e),this}getZ(t){let e=Sl(this.array[t*this.itemSize+2]);return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=Jn(e),this}getW(t){let e=Sl(this.array[t*this.itemSize+3]);return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=Jn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=Jn(e),this.array[t+1]=Jn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=Jn(e),this.array[t+1]=Jn(n),this.array[t+2]=Jn(i),this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),o=fe(o,this.array)),this.array[t+0]=Jn(e),this.array[t+1]=Jn(n),this.array[t+2]=Jn(i),this.array[t+3]=Jn(o),this}}class Yt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let IE=0;const Ci=new ie,ip=new Ce,Qr=new O,mi=new xn,fl=new xn,_n=new O;class pe extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nx(t)?Om:Pm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new he().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,e,n){return Ci.makeTranslation(t,e,n),this.applyMatrix4(Ci),this}scale(t,e,n){return Ci.makeScale(t,e,n),this.applyMatrix4(Ci),this}lookAt(t){return ip.lookAt(t),ip.updateMatrix(),this.applyMatrix4(ip.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const c=e[o];fl.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(mi.min,fl.min),mi.expandByPoint(_n),_n.addVectors(mi.max,fl.max),mi.expandByPoint(_n)):(mi.expandByPoint(fl.min),mi.expandByPoint(fl.max))}mi.getCenter(n);let i=0;for(let o=0,l=t.count;o<l;o++)_n.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(_n));if(e)for(let o=0,l=e.length;o<l;o++){const c=e[o],h=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)_n.fromBufferAttribute(c,f),h&&(Qr.fromBufferAttribute(t,f),_n.add(Qr)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let H=0;H<n.count;H++)c[H]=new O,h[H]=new O;const f=new O,p=new O,m=new O,g=new ht,v=new ht,x=new ht,M=new O,S=new O;function y(H,C,w){f.fromBufferAttribute(n,H),p.fromBufferAttribute(n,C),m.fromBufferAttribute(n,w),g.fromBufferAttribute(o,H),v.fromBufferAttribute(o,C),x.fromBufferAttribute(o,w),p.sub(f),m.sub(f),v.sub(g),x.sub(g);const B=1/(v.x*x.y-x.x*v.y);isFinite(B)&&(M.copy(p).multiplyScalar(x.y).addScaledVector(m,-v.y).multiplyScalar(B),S.copy(m).multiplyScalar(v.x).addScaledVector(p,-x.x).multiplyScalar(B),c[H].add(M),c[C].add(M),c[w].add(M),h[H].add(S),h[C].add(S),h[w].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let H=0,C=A.length;H<C;++H){const w=A[H],B=w.start,Q=w.count;for(let W=B,K=B+Q;W<K;W+=3)y(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const E=new O,T=new O,z=new O,R=new O;function N(H){z.fromBufferAttribute(i,H),R.copy(z);const C=c[H];E.copy(C),E.sub(z.multiplyScalar(z.dot(C))).normalize(),T.crossVectors(R,C);const B=T.dot(h[H])<0?-1:1;l.setXYZW(H,E.x,E.y,E.z,B)}for(let H=0,C=A.length;H<C;++H){const w=A[H],B=w.start,Q=w.count;for(let W=B,K=B+Q;W<K;W+=3)N(t.getX(W+0)),N(t.getX(W+1)),N(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const i=new O,o=new O,l=new O,c=new O,h=new O,f=new O,p=new O,m=new O;if(t)for(let g=0,v=t.count;g<v;g+=3){const x=t.getX(g+0),M=t.getX(g+1),S=t.getX(g+2);i.fromBufferAttribute(e,x),o.fromBufferAttribute(e,M),l.fromBufferAttribute(e,S),p.subVectors(l,o),m.subVectors(i,o),p.cross(m),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),c.add(p),h.add(p),f.add(p),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let g=0,v=e.count;g<v;g+=3)i.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),l.fromBufferAttribute(e,g+2),p.subVectors(l,o),m.subVectors(i,o),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(c,h){const f=c.array,p=c.itemSize,m=c.normalized,g=new f.constructor(h.length*p);let v=0,x=0;for(let M=0,S=h.length;M<S;M++){c.isInterleavedBufferAttribute?v=h[M]*c.data.stride+c.offset:v=h[M]*p;for(let y=0;y<p;y++)g[x++]=f[v++]}return new ze(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const c in i){const h=i[c],f=t(h,n);e.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const h=[],f=o[c];for(let p=0,m=f.length;p<m;p++){const g=f[p],v=t(g,n);h.push(v)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const f=n[h];t.data.attributes[h]=f.toJSON(t.data)}const i={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let m=0,g=f.length;m<g;m++){const v=f[m];p.push(v.toJSON(t.data))}p.length>0&&(i[h]=p,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const f in i){const p=i[f];this.setAttribute(f,p.clone(e))}const o=t.morphAttributes;for(const f in o){const p=[],m=o[f];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,p=l.length;f<p;f++){const m=l[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vv=new ie,Fa=new Uo,lu=new Sn,Gv=new O,$r=new O,to=new O,eo=new O,sp=new O,cu=new O,uu=new ht,hu=new ht,fu=new ht,kv=new O,Wv=new O,Xv=new O,du=new O,pu=new O;class an extends Ce{constructor(t=new pe,e=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const c=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const c=this.morphTargetInfluences;if(o&&c){cu.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const p=c[h],m=o[h];p!==0&&(sp.fromBufferAttribute(m,t),l?cu.addScaledVector(sp,p):cu.addScaledVector(sp.sub(e),p))}e.add(cu)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lu.copy(n.boundingSphere),lu.applyMatrix4(o),Fa.copy(t.ray).recast(t.near),!(lu.containsPoint(Fa.origin)===!1&&(Fa.intersectSphere(lu,Gv)===null||Fa.origin.distanceToSquared(Gv)>(t.far-t.near)**2))&&(Vv.copy(o).invert(),Fa.copy(t.ray).applyMatrix4(Vv),!(n.boundingBox!==null&&Fa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fa)))}_computeIntersections(t,e,n){let i;const o=this.geometry,l=this.material,c=o.index,h=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,v=o.drawRange;if(c!==null)if(Array.isArray(l))for(let x=0,M=g.length;x<M;x++){const S=g[x],y=l[S.materialIndex],A=Math.max(S.start,v.start),E=Math.min(c.count,Math.min(S.start+S.count,v.start+v.count));for(let T=A,z=E;T<z;T+=3){const R=c.getX(T),N=c.getX(T+1),H=c.getX(T+2);i=mu(this,y,t,n,f,p,m,R,N,H),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,e.push(i))}}else{const x=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let S=x,y=M;S<y;S+=3){const A=c.getX(S),E=c.getX(S+1),T=c.getX(S+2);i=mu(this,l,t,n,f,p,m,A,E,T),i&&(i.faceIndex=Math.floor(S/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(l))for(let x=0,M=g.length;x<M;x++){const S=g[x],y=l[S.materialIndex],A=Math.max(S.start,v.start),E=Math.min(h.count,Math.min(S.start+S.count,v.start+v.count));for(let T=A,z=E;T<z;T+=3){const R=T,N=T+1,H=T+2;i=mu(this,y,t,n,f,p,m,R,N,H),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,e.push(i))}}else{const x=Math.max(0,v.start),M=Math.min(h.count,v.start+v.count);for(let S=x,y=M;S<y;S+=3){const A=S,E=S+1,T=S+2;i=mu(this,l,t,n,f,p,m,A,E,T),i&&(i.faceIndex=Math.floor(S/3),e.push(i))}}}}function zE(s,t,e,n,i,o,l,c){let h;if(t.side===Xn?h=n.intersectTriangle(l,o,i,!0,c):h=n.intersectTriangle(i,o,l,t.side===Ls,c),h===null)return null;pu.copy(c),pu.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(pu);return f<e.near||f>e.far?null:{distance:f,point:pu.clone(),object:s}}function mu(s,t,e,n,i,o,l,c,h,f){s.getVertexPosition(c,$r),s.getVertexPosition(h,to),s.getVertexPosition(f,eo);const p=zE(s,t,e,n,$r,to,eo,du);if(p){i&&(uu.fromBufferAttribute(i,c),hu.fromBufferAttribute(i,h),fu.fromBufferAttribute(i,f),p.uv=gi.getInterpolation(du,$r,to,eo,uu,hu,fu,new ht)),o&&(uu.fromBufferAttribute(o,c),hu.fromBufferAttribute(o,h),fu.fromBufferAttribute(o,f),p.uv1=gi.getInterpolation(du,$r,to,eo,uu,hu,fu,new ht)),l&&(kv.fromBufferAttribute(l,c),Wv.fromBufferAttribute(l,h),Xv.fromBufferAttribute(l,f),p.normal=gi.getInterpolation(du,$r,to,eo,kv,Wv,Xv,new O),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:h,c:f,normal:new O,materialIndex:0};gi.getNormal($r,to,eo,m.normal),p.face=m}return p}class hr extends pe{constructor(t=1,e=1,n=1,i=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:l};const c=this;i=Math.floor(i),o=Math.floor(o),l=Math.floor(l);const h=[],f=[],p=[],m=[];let g=0,v=0;x("z","y","x",-1,-1,n,e,t,l,o,0),x("z","y","x",1,-1,n,e,-t,l,o,1),x("x","z","y",1,1,t,n,e,i,l,2),x("x","z","y",1,-1,t,n,-e,i,l,3),x("x","y","z",1,-1,t,e,n,i,o,4),x("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(h),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(m,2));function x(M,S,y,A,E,T,z,R,N,H,C){const w=T/N,B=z/H,Q=T/2,W=z/2,K=R/2,et=N+1,I=H+1;let k=0,G=0;const at=new O;for(let rt=0;rt<I;rt++){const ft=rt*B-W;for(let Ct=0;Ct<et;Ct++){const Wt=Ct*w-Q;at[M]=Wt*A,at[S]=ft*E,at[y]=K,f.push(at.x,at.y,at.z),at[M]=0,at[S]=0,at[y]=R>0?1:-1,p.push(at.x,at.y,at.z),m.push(Ct/N),m.push(1-rt/H),k+=1}}for(let rt=0;rt<H;rt++)for(let ft=0;ft<N;ft++){const Ct=g+ft+et*rt,Wt=g+ft+et*(rt+1),J=g+(ft+1)+et*(rt+1),ct=g+(ft+1)+et*rt;h.push(Ct,Wt,ct),h.push(Wt,J,ct),G+=6}c.addGroup(v,G,C),v+=G,g+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function kn(s){const t={};for(let e=0;e<s.length;e++){const n=Eo(s[e]);for(const i in n)t[i]=n[i]}return t}function BE(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Rh={clone:Eo,merge:kn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=HE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=BE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?e.uniforms[i]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[i]={type:"m4",value:l.toArray()}:e.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=is}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ia=new O,qv=new ht,Yv=new ht;class un extends Kh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ia.x,ia.y).multiplyScalar(-t/ia.z),ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ia.x,ia.y).multiplyScalar(-t/ia.z)}getViewSize(t,e){return this.getViewBounds(t,qv,Yv),e.subVectors(Yv,qv)}setViewOffset(t,e,n,i,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;o+=l.offsetX*i/h,e-=l.offsetY*n/f,i*=l.width/h,n*=l.height/f}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const no=-90,io=1;class Fx extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(no,io,t,e);i.layers=this.layers,this.add(i);const o=new un(no,io,t,e);o.layers=this.layers,this.add(o);const l=new un(no,io,t,e);l.layers=this.layers,this.add(l);const c=new un(no,io,t,e);c.layers=this.layers,this.add(c);const h=new un(no,io,t,e);h.layers=this.layers,this.add(h);const f=new un(no,io,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,l,c,h]=e;for(const f of e)this.remove(f);if(t===is)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Xl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,h,f,p]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,l),t.setRenderTarget(n,2,i),t.render(e,c),t.setRenderTarget(n,3,i),t.render(e,h),t.setRenderTarget(n,4,i),t.render(e,f),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,p),t.setRenderTarget(m,g,v),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class oc extends nn{constructor(t,e,n,i,o,l,c,h,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,i,o,l,c,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hx extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new oc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hr(5,5,5),o=new Ui({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:Ds});o.uniforms.tEquirect.value=e;const l=new an(i,o),c=e.minFilter;return e.minFilter===ns&&(e.minFilter=hn),new Fx(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,i);t.setRenderTarget(o)}}const ap=new O,VE=new O,GE=new he;class ra{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ap.subVectors(n,e).cross(VE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ap),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||GE.getNormalMatrix(t),i=this.coplanarPoint(ap).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ha=new Sn,gu=new O;class lc{constructor(t=new ra,e=new ra,n=new ra,i=new ra,o=new ra,l=new ra){this.planes=[t,e,n,i,o,l]}set(t,e,n,i,o,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(i),c[4].copy(o),c[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=is){const n=this.planes,i=t.elements,o=i[0],l=i[1],c=i[2],h=i[3],f=i[4],p=i[5],m=i[6],g=i[7],v=i[8],x=i[9],M=i[10],S=i[11],y=i[12],A=i[13],E=i[14],T=i[15];if(n[0].setComponents(h-o,g-f,S-v,T-y).normalize(),n[1].setComponents(h+o,g+f,S+v,T+y).normalize(),n[2].setComponents(h+l,g+p,S+x,T+A).normalize(),n[3].setComponents(h-l,g-p,S-x,T-A).normalize(),n[4].setComponents(h-c,g-m,S-M,T-E).normalize(),e===is)n[5].setComponents(h+c,g+m,S+M,T+E).normalize();else if(e===Xl)n[5].setComponents(c,m,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ha.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ha.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ha)}intersectsSprite(t){return Ha.center.set(0,0,0),Ha.radius=.7071067811865476,Ha.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ha)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(gu.x=i.normal.x>0?t.max.x:t.min.x,gu.y=i.normal.y>0?t.max.y:t.min.y,gu.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gu)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vx(){let s=null,t=!1,e=null,n=null;function i(o,l){e(o,l),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function kE(s){const t=new WeakMap;function e(c,h){const f=c.array,p=c.usage,m=f.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,f,p),c.onUploadCallback();let v;if(f instanceof Float32Array)v=s.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=s.SHORT;else if(f instanceof Uint32Array)v=s.UNSIGNED_INT;else if(f instanceof Int32Array)v=s.INT;else if(f instanceof Int8Array)v=s.BYTE;else if(f instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,h,f){const p=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(f,c),m.count===-1&&g.length===0&&s.bufferSubData(f,0,p),g.length!==0){for(let v=0,x=g.length;v<x;v++){const M=g[v];s.bufferSubData(f,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}h.clearUpdateRanges()}m.count!==-1&&(s.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count),m.count=-1),h.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=t.get(c);h&&(s.deleteBuffer(h.buffer),t.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=t.get(c);(!p||p.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:i,remove:o,update:l}}class Do extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,l=e/2,c=Math.floor(n),h=Math.floor(i),f=c+1,p=h+1,m=t/c,g=e/h,v=[],x=[],M=[],S=[];for(let y=0;y<p;y++){const A=y*g-l;for(let E=0;E<f;E++){const T=E*m-o;x.push(T,-A,0),M.push(0,0,1),S.push(E/c),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let A=0;A<c;A++){const E=A+f*y,T=A+f*(y+1),z=A+1+f*(y+1),R=A+1+f*y;v.push(E,T,R),v.push(T,z,R)}this.setIndex(v),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.width,t.height,t.widthSegments,t.heightSegments)}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xA="gl_FragColor = linearToOutputTexel( gl_FragColor );",SA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$A=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ET=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:WE,alphahash_pars_fragment:XE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:ZE,alphatest_pars_fragment:jE,aomap_fragment:KE,aomap_pars_fragment:JE,batching_pars_vertex:QE,batching_vertex:$E,begin_vertex:tA,beginnormal_vertex:eA,bsdfs:nA,iridescence_fragment:iA,bumpmap_pars_fragment:sA,clipping_planes_fragment:aA,clipping_planes_pars_fragment:rA,clipping_planes_pars_vertex:oA,clipping_planes_vertex:lA,color_fragment:cA,color_pars_fragment:uA,color_pars_vertex:hA,color_vertex:fA,common:dA,cube_uv_reflection_fragment:pA,defaultnormal_vertex:mA,displacementmap_pars_vertex:gA,displacementmap_vertex:vA,emissivemap_fragment:_A,emissivemap_pars_fragment:yA,colorspace_fragment:xA,colorspace_pars_fragment:SA,envmap_fragment:MA,envmap_common_pars_fragment:bA,envmap_pars_fragment:EA,envmap_pars_vertex:AA,envmap_physical_pars_fragment:IA,envmap_vertex:TA,fog_vertex:wA,fog_pars_vertex:CA,fog_fragment:RA,fog_pars_fragment:UA,gradientmap_pars_fragment:DA,lightmap_pars_fragment:LA,lights_lambert_fragment:NA,lights_lambert_pars_fragment:PA,lights_pars_begin:OA,lights_toon_fragment:zA,lights_toon_pars_fragment:BA,lights_phong_fragment:FA,lights_phong_pars_fragment:HA,lights_physical_fragment:VA,lights_physical_pars_fragment:GA,lights_fragment_begin:kA,lights_fragment_maps:WA,lights_fragment_end:XA,logdepthbuf_fragment:qA,logdepthbuf_pars_fragment:YA,logdepthbuf_pars_vertex:ZA,logdepthbuf_vertex:jA,map_fragment:KA,map_pars_fragment:JA,map_particle_fragment:QA,map_particle_pars_fragment:$A,metalnessmap_fragment:tT,metalnessmap_pars_fragment:eT,morphinstance_vertex:nT,morphcolor_vertex:iT,morphnormal_vertex:sT,morphtarget_pars_vertex:aT,morphtarget_vertex:rT,normal_fragment_begin:oT,normal_fragment_maps:lT,normal_pars_fragment:cT,normal_pars_vertex:uT,normal_vertex:hT,normalmap_pars_fragment:fT,clearcoat_normal_fragment_begin:dT,clearcoat_normal_fragment_maps:pT,clearcoat_pars_fragment:mT,iridescence_pars_fragment:gT,opaque_fragment:vT,packing:_T,premultiplied_alpha_fragment:yT,project_vertex:xT,dithering_fragment:ST,dithering_pars_fragment:MT,roughnessmap_fragment:bT,roughnessmap_pars_fragment:ET,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:TT,shadowmap_vertex:wT,shadowmask_pars_fragment:CT,skinbase_vertex:RT,skinning_pars_vertex:UT,skinning_vertex:DT,skinnormal_vertex:LT,specularmap_fragment:NT,specularmap_pars_fragment:PT,tonemapping_fragment:OT,tonemapping_pars_fragment:IT,transmission_fragment:zT,transmission_pars_fragment:BT,uv_pars_fragment:FT,uv_pars_vertex:HT,uv_vertex:VT,worldpos_vertex:GT,background_vert:kT,background_frag:WT,backgroundCube_vert:XT,backgroundCube_frag:qT,cube_vert:YT,cube_frag:ZT,depth_vert:jT,depth_frag:KT,distanceRGBA_vert:JT,distanceRGBA_frag:QT,equirect_vert:$T,equirect_frag:tw,linedashed_vert:ew,linedashed_frag:nw,meshbasic_vert:iw,meshbasic_frag:sw,meshlambert_vert:aw,meshlambert_frag:rw,meshmatcap_vert:ow,meshmatcap_frag:lw,meshnormal_vert:cw,meshnormal_frag:uw,meshphong_vert:hw,meshphong_frag:fw,meshphysical_vert:dw,meshphysical_frag:pw,meshtoon_vert:mw,meshtoon_frag:gw,points_vert:vw,points_frag:_w,shadow_vert:yw,shadow_frag:xw,sprite_vert:Sw,sprite_frag:Mw},Lt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Gi={basic:{uniforms:kn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:kn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:kn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:kn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:kn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:kn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:kn([Lt.points,Lt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:kn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:kn([Lt.common,Lt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:kn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:kn([Lt.sprite,Lt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:kn([Lt.common,Lt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:kn([Lt.lights,Lt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Gi.physical={uniforms:kn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const vu={r:0,b:0,g:0},Va=new yi,bw=new ie;function Ew(s,t,e,n,i,o,l){const c=new Bt(0);let h=o===!0?0:1,f,p,m=null,g=0,v=null;function x(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function M(A){let E=!1;const T=x(A);T===null?y(c,h):T&&T.isColor&&(y(T,1),E=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(A,E){const T=x(E);T&&(T.isCubeTexture||T.mapping===Co)?(p===void 0&&(p=new an(new hr(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Eo(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),Va.copy(E.backgroundRotation),Va.x*=-1,Va.y*=-1,Va.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Va.y*=-1,Va.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(bw.makeRotationFromEuler(Va)),p.material.toneMapped=we.getTransfer(T.colorSpace)!==Ve,(m!==T||g!==T.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,m=T,g=T.version,v=s.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new an(new Do(2,2),new Ui({name:"BackgroundMaterial",uniforms:Eo(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.toneMapped=we.getTransfer(T.colorSpace)!==Ve,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(m!==T||g!==T.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,m=T,g=T.version,v=s.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function y(A,E){A.getRGB(vu,Bx(s)),n.buffers.color.setClear(vu.r,vu.g,vu.b,E,l)}return{getClearColor:function(){return c},setClearColor:function(A,E=1){c.set(A),h=E,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,y(c,h)},render:M,addToRenderList:S}}function Aw(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=g(null);let o=i,l=!1;function c(w,B,Q,W,K){let et=!1;const I=m(W,Q,B);o!==I&&(o=I,f(o.object)),et=v(w,W,Q,K),et&&x(w,W,Q,K),K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(et||l)&&(l=!1,T(w,B,Q,W),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return s.createVertexArray()}function f(w){return s.bindVertexArray(w)}function p(w){return s.deleteVertexArray(w)}function m(w,B,Q){const W=Q.wireframe===!0;let K=n[w.id];K===void 0&&(K={},n[w.id]=K);let et=K[B.id];et===void 0&&(et={},K[B.id]=et);let I=et[W];return I===void 0&&(I=g(h()),et[W]=I),I}function g(w){const B=[],Q=[],W=[];for(let K=0;K<e;K++)B[K]=0,Q[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:W,object:w,attributes:{},index:null}}function v(w,B,Q,W){const K=o.attributes,et=B.attributes;let I=0;const k=Q.getAttributes();for(const G in k)if(k[G].location>=0){const rt=K[G];let ft=et[G];if(ft===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;I++}return o.attributesNum!==I||o.index!==W}function x(w,B,Q,W){const K={},et=B.attributes;let I=0;const k=Q.getAttributes();for(const G in k)if(k[G].location>=0){let rt=et[G];rt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(rt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(rt=w.instanceColor));const ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),K[G]=ft,I++}o.attributes=K,o.attributesNum=I,o.index=W}function M(){const w=o.newAttributes;for(let B=0,Q=w.length;B<Q;B++)w[B]=0}function S(w){y(w,0)}function y(w,B){const Q=o.newAttributes,W=o.enabledAttributes,K=o.attributeDivisors;Q[w]=1,W[w]===0&&(s.enableVertexAttribArray(w),W[w]=1),K[w]!==B&&(s.vertexAttribDivisor(w,B),K[w]=B)}function A(){const w=o.newAttributes,B=o.enabledAttributes;for(let Q=0,W=B.length;Q<W;Q++)B[Q]!==w[Q]&&(s.disableVertexAttribArray(Q),B[Q]=0)}function E(w,B,Q,W,K,et,I){I===!0?s.vertexAttribIPointer(w,B,Q,K,et):s.vertexAttribPointer(w,B,Q,W,K,et)}function T(w,B,Q,W){M();const K=W.attributes,et=Q.getAttributes(),I=B.defaultAttributeValues;for(const k in et){const G=et[k];if(G.location>=0){let at=K[k];if(at===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(at=w.instanceColor)),at!==void 0){const rt=at.normalized,ft=at.itemSize,Ct=t.get(at);if(Ct===void 0)continue;const Wt=Ct.buffer,J=Ct.type,ct=Ct.bytesPerElement,Nt=J===s.INT||J===s.UNSIGNED_INT||at.gpuType===Vh;if(at.isInterleavedBufferAttribute){const Ut=at.data,Zt=Ut.stride,re=at.offset;if(Ut.isInstancedInterleavedBuffer){for(let qt=0;qt<G.locationSize;qt++)y(G.location+qt,Ut.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let qt=0;qt<G.locationSize;qt++)S(G.location+qt);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let qt=0;qt<G.locationSize;qt++)E(G.location+qt,ft/G.locationSize,J,rt,Zt*ct,(re+ft/G.locationSize*qt)*ct,Nt)}else{if(at.isInstancedBufferAttribute){for(let Ut=0;Ut<G.locationSize;Ut++)y(G.location+Ut,at.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<G.locationSize;Ut++)S(G.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let Ut=0;Ut<G.locationSize;Ut++)E(G.location+Ut,ft/G.locationSize,J,rt,ft*ct,ft/G.locationSize*Ut*ct,Nt)}}else if(I!==void 0){const rt=I[k];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(G.location,rt);break;case 3:s.vertexAttrib3fv(G.location,rt);break;case 4:s.vertexAttrib4fv(G.location,rt);break;default:s.vertexAttrib1fv(G.location,rt)}}}}A()}function z(){H();for(const w in n){const B=n[w];for(const Q in B){const W=B[Q];for(const K in W)p(W[K].object),delete W[K];delete B[Q]}delete n[w]}}function R(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const Q in B){const W=B[Q];for(const K in W)p(W[K].object),delete W[K];delete B[Q]}delete n[w.id]}function N(w){for(const B in n){const Q=n[B];if(Q[w.id]===void 0)continue;const W=Q[w.id];for(const K in W)p(W[K].object),delete W[K];delete Q[w.id]}}function H(){C(),l=!0,o!==i&&(o=i,f(o.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:H,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:A}}function Tw(s,t,e){let n;function i(f){n=f}function o(f,p){s.drawArrays(n,f,p),e.update(p,n,1)}function l(f,p,m){m!==0&&(s.drawArraysInstanced(n,f,p,m),e.update(p,n,m))}function c(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,m);let v=0;for(let x=0;x<m;x++)v+=p[x];e.update(v,n,1)}function h(f,p,m,g){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<f.length;x++)l(f[x],p[x],g[x]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,p,0,g,0,m);let x=0;for(let M=0;M<m;M++)x+=p[M];for(let M=0;M<g.length;M++)e.update(x,n,g[M])}}this.setMode=i,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function ww(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(R){return!(R!==On&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const N=R===Ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Wi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!N)}function h(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=h(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=e.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:T,maxSamples:z}}function Cw(s){const t=this;let e=null,n=0,i=!1,o=!1;const l=new ra,c=new he,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||i;return i=g,n=m.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){e=p(m,g,0)},this.setState=function(m,g,v){const x=m.clippingPlanes,M=m.clipIntersection,S=m.clipShadows,y=s.get(m);if(!i||x===null||x.length===0||o&&!S)o?p(null):f();else{const A=o?0:n,E=A*4;let T=y.clippingState||null;h.value=T,T=p(x,g,E,v);for(let z=0;z!==E;++z)T[z]=e[z];y.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(m,g,v,x){const M=m!==null?m.length:0;let S=null;if(M!==0){if(S=h.value,x!==!0||S===null){const y=v+M*4,A=g.matrixWorldInverse;c.getNormalMatrix(A),(S===null||S.length<y)&&(S=new Float32Array(y));for(let E=0,T=v;E!==M;++E,T+=4)l.copy(m[E]).applyMatrix4(A,c),l.normal.toArray(S,T),S[T+3]=l.constant}h.value=S,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function Rw(s){let t=new WeakMap;function e(l,c){return c===Ol?l.mapping=Ns:c===Il&&(l.mapping=ca),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Ol||c===Il)if(t.has(l)){const h=t.get(l).texture;return e(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new Hx(h.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",i),e(f.texture,l.mapping)}else return null}}return l}function i(l){const c=l.target;c.removeEventListener("dispose",i);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class fr extends Kh{constructor(t=-1,e=1,n=1,i=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,l=n+t,c=i+e,h=i-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const go=4,Zv=[.125,.215,.35,.446,.526,.582],Ja=20,rp=new fr,jv=new Bt;let op=null,lp=0,cp=0,up=!1;const Ka=(1+Math.sqrt(5))/2,so=1/Ka,Kv=[new O(-Ka,so,0),new O(Ka,so,0),new O(-so,0,Ka),new O(so,0,Ka),new O(0,Ka,-so),new O(0,Ka,so),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class nm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(op,lp,cp),this._renderer.xr.enabled=up,t.scissorTest=!1,_u(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===ca?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ro,format:On,colorSpace:os,depthBuffer:!1},i=Jv(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uw(o)),this._blurMaterial=Dw(o,t,e)}return i}_compileMaterial(t){const e=new an(this._lodPlanes[0],t);this._renderer.compile(e,rp)}_sceneToCubeUV(t,e,n,i){const c=new un(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(jv),p.toneMapping=ss,p.autoClear=!1;const v=new fa({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),x=new an(new hr,v);let M=!1;const S=t.background;S?S.isColor&&(v.color.copy(S),t.background=null,M=!0):(v.color.copy(jv),M=!0);for(let y=0;y<6;y++){const A=y%3;A===0?(c.up.set(0,h[y],0),c.lookAt(f[y],0,0)):A===1?(c.up.set(0,0,h[y]),c.lookAt(0,f[y],0)):(c.up.set(0,h[y],0),c.lookAt(0,0,f[y]));const E=this._cubeSize;_u(i,A*E,y>2?E:0,E,E),p.setRenderTarget(i),M&&p.render(x,c),p.render(t,c)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=g,p.autoClear=m,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ns||t.mapping===ca;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const o=i?this._cubemapMaterial:this._equirectMaterial,l=new an(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;const h=this._cubeSize;_u(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(l,rp)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=Kv[(i-o-1)%Kv.length];this._blur(t,o-1,o,l,c)}e.autoClear=n}_blur(t,e,n,i,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,i,"latitudinal",o),this._halfBlur(l,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new an(this._lodPlanes[i],f),g=f.uniforms,v=this._sizeLods[n]-1,x=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Ja-1),M=o/x,S=isFinite(o)?1+Math.floor(p*M):Ja;S>Ja&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ja}`);const y=[];let A=0;for(let N=0;N<Ja;++N){const H=N/M,C=Math.exp(-H*H/2);y.push(C),N===0?A+=C:N<S&&(A+=2*C)}for(let N=0;N<y.length;N++)y[N]=y[N]/A;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:E}=this;g.dTheta.value=x,g.mipInt.value=E-n;const T=this._sizeLods[i],z=3*T*(i>E-go?i-E+go:0),R=4*(this._cubeSize-T);_u(e,z,R,3*T,2*T),h.setRenderTarget(e),h.render(m,rp)}}function Uw(s){const t=[],e=[],n=[];let i=s;const o=s-go+1+Zv.length;for(let l=0;l<o;l++){const c=Math.pow(2,i);e.push(c);let h=1/c;l>s-go?h=Zv[l-s+go-1]:l===0&&(h=0),n.push(h);const f=1/(c-2),p=-f,m=1+f,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,x=6,M=3,S=2,y=1,A=new Float32Array(M*x*v),E=new Float32Array(S*x*v),T=new Float32Array(y*x*v);for(let R=0;R<v;R++){const N=R%3*2/3-1,H=R>2?0:-1,C=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];A.set(C,M*x*R),E.set(g,S*x*R);const w=[R,R,R,R,R,R];T.set(w,y*x*R)}const z=new pe;z.setAttribute("position",new ze(A,M)),z.setAttribute("uv",new ze(E,S)),z.setAttribute("faceIndex",new ze(T,y)),t.push(z),i>go&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jv(s,t,e){const n=new Xi(s,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _u(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Dw(s,t,e){const n=new Float32Array(Ja),i=new O(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Qv(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function $v(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Im(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lw(s){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===Ol||h===Il,p=h===Ns||h===ca;if(f||p){let m=t.get(c);const g=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return e===null&&(e=new nm(s)),m=f?e.fromEquirectangular(c,m):e.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return f&&v&&v.height>0||p&&v&&i(v)?(e===null&&(e=new nm(s)),m=f?e.fromEquirectangular(c):e.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),c.addEventListener("dispose",o),m.texture):null}}}return c}function i(c){let h=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&h++;return h===f}function o(c){const h=c.target;h.removeEventListener("dispose",o);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function Nw(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&yo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pw(s,t,e,n){const i={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const x in g.attributes)t.remove(g.attributes[x]);for(const x in g.morphAttributes){const M=g.morphAttributes[x];for(let S=0,y=M.length;S<y;S++)t.remove(M[S])}g.removeEventListener("dispose",l),delete i[g.id];const v=o.get(g);v&&(t.remove(v),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(m,g){return i[g.id]===!0||(g.addEventListener("dispose",l),i[g.id]=!0,e.memory.geometries++),g}function h(m){const g=m.attributes;for(const x in g)t.update(g[x],s.ARRAY_BUFFER);const v=m.morphAttributes;for(const x in v){const M=v[x];for(let S=0,y=M.length;S<y;S++)t.update(M[S],s.ARRAY_BUFFER)}}function f(m){const g=[],v=m.index,x=m.attributes.position;let M=0;if(v!==null){const A=v.array;M=v.version;for(let E=0,T=A.length;E<T;E+=3){const z=A[E+0],R=A[E+1],N=A[E+2];g.push(z,R,R,N,N,z)}}else if(x!==void 0){const A=x.array;M=x.version;for(let E=0,T=A.length/3-1;E<T;E+=3){const z=E+0,R=E+1,N=E+2;g.push(z,R,R,N,N,z)}}else return;const S=new(Nx(g)?Om:Pm)(g,1);S.version=M;const y=o.get(m);y&&t.remove(y),o.set(m,S)}function p(m){const g=o.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&f(m)}else f(m);return o.get(m)}return{get:c,update:h,getWireframeAttribute:p}}function Ow(s,t,e){let n;function i(g){n=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function h(g,v){s.drawElements(n,v,o,g*l),e.update(v,n,1)}function f(g,v,x){x!==0&&(s.drawElementsInstanced(n,v,o,g*l,x),e.update(v,n,x))}function p(g,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,o,g,0,x);let S=0;for(let y=0;y<x;y++)S+=v[y];e.update(S,n,1)}function m(g,v,x,M){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)f(g[y]/l,v[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(n,v,0,o,g,0,M,0,x);let y=0;for(let A=0;A<x;A++)y+=v[A];for(let A=0;A<M.length;A++)e.update(y,n,M[A])}}this.setMode=i,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Iw(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,c){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=c*(o/3);break;case s.LINES:e.lines+=c*(o/2);break;case s.LINE_STRIP:e.lines+=c*(o-1);break;case s.LINE_LOOP:e.lines+=c*o;break;case s.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zw(s,t,e){const n=new WeakMap,i=new Se;function o(l,c,h){const f=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==m){let C=function(){N.dispose(),n.delete(c),c.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let E=0;v===!0&&(E=1),x===!0&&(E=2),M===!0&&(E=3);let T=c.attributes.position.count*E,z=1;T>t.maxTextureSize&&(z=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*z*4*m),N=new jh(R,T,z,m);N.type=ti,N.needsUpdate=!0;const H=E*4;for(let w=0;w<m;w++){const B=S[w],Q=y[w],W=A[w],K=T*z*4*w;for(let et=0;et<B.count;et++){const I=et*H;v===!0&&(i.fromBufferAttribute(B,et),R[K+I+0]=i.x,R[K+I+1]=i.y,R[K+I+2]=i.z,R[K+I+3]=0),x===!0&&(i.fromBufferAttribute(Q,et),R[K+I+4]=i.x,R[K+I+5]=i.y,R[K+I+6]=i.z,R[K+I+7]=0),M===!0&&(i.fromBufferAttribute(W,et),R[K+I+8]=i.x,R[K+I+9]=i.y,R[K+I+10]=i.z,R[K+I+11]=W.itemSize===4?i.w:1)}}g={count:m,texture:N,size:new ht(T,z)},n.set(c,g),c.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let v=0;for(let M=0;M<f.length;M++)v+=f[M];const x=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",f)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:o}}function Bw(s,t,e,n){let i=new WeakMap;function o(h){const f=n.render.frame,p=h.geometry,m=t.get(h,p);if(i.get(m)!==f&&(t.update(m),i.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),i.get(h)!==f&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),i.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;i.get(g)!==f&&(g.update(),i.set(g,f))}return m}function l(){i=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:l}}class zm extends nn{constructor(t,e,n,i,o,l,c,h,f,p=ir){if(p!==ir&&p!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===ir&&(n=Ps),n===void 0&&p===lr&&(n=or),super(null,i,o,l,c,h,p,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:yn,this.minFilter=h!==void 0?h:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gx=new nn,t_=new zm(1,1),kx=new jh,Wx=new Nm,Xx=new oc,e_=[],n_=[],i_=new Float32Array(16),s_=new Float32Array(9),a_=new Float32Array(4);function Lo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=e_[i];if(o===void 0&&(o=new Float32Array(i),e_[i]=o),t!==0){n.toArray(o,0);for(let l=1,c=0;l!==t;++l)c+=e,s[l].toArray(o,c)}return o}function dn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Jh(s,t){let e=n_[t];e===void 0&&(e=new Int32Array(t),n_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Fw(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2fv(this.addr,t),pn(e,t)}}function Vw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;s.uniform3fv(this.addr,t),pn(e,t)}}function Gw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4fv(this.addr,t),pn(e,t)}}function kw(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;a_.set(n),s.uniformMatrix2fv(this.addr,!1,a_),pn(e,n)}}function Ww(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;s_.set(n),s.uniformMatrix3fv(this.addr,!1,s_),pn(e,n)}}function Xw(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;i_.set(n),s.uniformMatrix4fv(this.addr,!1,i_),pn(e,n)}}function qw(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Yw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2iv(this.addr,t),pn(e,t)}}function Zw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;s.uniform3iv(this.addr,t),pn(e,t)}}function jw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4iv(this.addr,t),pn(e,t)}}function Kw(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2uiv(this.addr,t),pn(e,t)}}function Qw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;s.uniform3uiv(this.addr,t),pn(e,t)}}function $w(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4uiv(this.addr,t),pn(e,t)}}function tC(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(t_.compareFunction=Dm,o=t_):o=Gx,e.setTexture2D(t||o,i)}function eC(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wx,i)}function nC(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xx,i)}function iC(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||kx,i)}function sC(s){switch(s){case 5126:return Fw;case 35664:return Hw;case 35665:return Vw;case 35666:return Gw;case 35674:return kw;case 35675:return Ww;case 35676:return Xw;case 5124:case 35670:return qw;case 35667:case 35671:return Yw;case 35668:case 35672:return Zw;case 35669:case 35673:return jw;case 5125:return Kw;case 36294:return Jw;case 36295:return Qw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function aC(s,t){s.uniform1fv(this.addr,t)}function rC(s,t){const e=Lo(t,this.size,2);s.uniform2fv(this.addr,e)}function oC(s,t){const e=Lo(t,this.size,3);s.uniform3fv(this.addr,e)}function lC(s,t){const e=Lo(t,this.size,4);s.uniform4fv(this.addr,e)}function cC(s,t){const e=Lo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function uC(s,t){const e=Lo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hC(s,t){const e=Lo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function fC(s,t){s.uniform1iv(this.addr,t)}function dC(s,t){s.uniform2iv(this.addr,t)}function pC(s,t){s.uniform3iv(this.addr,t)}function mC(s,t){s.uniform4iv(this.addr,t)}function gC(s,t){s.uniform1uiv(this.addr,t)}function vC(s,t){s.uniform2uiv(this.addr,t)}function _C(s,t){s.uniform3uiv(this.addr,t)}function yC(s,t){s.uniform4uiv(this.addr,t)}function xC(s,t,e){const n=this.cache,i=t.length,o=Jh(e,i);dn(n,o)||(s.uniform1iv(this.addr,o),pn(n,o));for(let l=0;l!==i;++l)e.setTexture2D(t[l]||Gx,o[l])}function SC(s,t,e){const n=this.cache,i=t.length,o=Jh(e,i);dn(n,o)||(s.uniform1iv(this.addr,o),pn(n,o));for(let l=0;l!==i;++l)e.setTexture3D(t[l]||Wx,o[l])}function MC(s,t,e){const n=this.cache,i=t.length,o=Jh(e,i);dn(n,o)||(s.uniform1iv(this.addr,o),pn(n,o));for(let l=0;l!==i;++l)e.setTextureCube(t[l]||Xx,o[l])}function bC(s,t,e){const n=this.cache,i=t.length,o=Jh(e,i);dn(n,o)||(s.uniform1iv(this.addr,o),pn(n,o));for(let l=0;l!==i;++l)e.setTexture2DArray(t[l]||kx,o[l])}function EC(s){switch(s){case 5126:return aC;case 35664:return rC;case 35665:return oC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return hC;case 5124:case 35670:return fC;case 35667:case 35671:return dC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return vC;case 36295:return _C;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return bC}}class AC{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sC(e.type)}}class TC{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=EC(e.type)}}class wC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,l=i.length;o!==l;++o){const c=i[o];c.setValue(t,e[c.id],n)}}}const hp=/(\w+)(\])?(\[|\.)?/g;function r_(s,t){s.seq.push(t),s.map[t.id]=t}function CC(s,t,e){const n=s.name,i=n.length;for(hp.lastIndex=0;;){const o=hp.exec(n),l=hp.lastIndex;let c=o[1];const h=o[2]==="]",f=o[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===i){r_(e,f===void 0?new AC(c,s,t):new TC(c,s,t));break}else{let m=e.map[c];m===void 0&&(m=new wC(c),r_(e,m)),e=m}}}class Ju{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),l=t.getUniformLocation(e,o.name);CC(o,l,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,l=e.length;o!==l;++o){const c=e[o],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const l=t[i];l.id in e&&n.push(l)}return n}}function o_(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const RC=37297;let UC=0;function DC(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=i;l<o;l++){const c=l+1;n.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return n.join(`
`)}function LC(s){const t=we.getPrimaries(we.workingColorSpace),e=we.getPrimaries(s);let n;switch(t===e?n="":t===kl&&e===Gl?n="LinearDisplayP3ToLinearSRGB":t===Gl&&e===kl&&(n="LinearSRGBToLinearDisplayP3"),s){case os:case rc:return[n,"LinearTransferOETF"];case $n:case Zh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function l_(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+DC(s.getShaderSource(t),l)}else return i}function NC(s,t){const e=LC(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function PC(s,t){let e;switch(t){case dx:e="Linear";break;case px:e="Reinhard";break;case mx:e="OptimizedCineon";break;case ym:e="ACESFilmic";break;case vx:e="AgX";break;case _x:e="Neutral";break;case gx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yu=new O;function OC(){we.getLuminanceCoefficients(yu);const s=yu.x.toFixed(4),t=yu.y.toFixed(4),e=yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function zC(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function BC(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),l=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),e[l]={type:o.type,location:s.getAttribLocation(t,l),locationSize:c}}return e}function Ml(s){return s!==""}function c_(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function u_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function im(s){return s.replace(FC,VC)}const HC=new Map;function VC(s,t){let e=de[t];if(e===void 0){const n=HC.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return im(e)}const GC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(s){return s.replace(GC,kC)}function kC(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function f_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WC(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function XC(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case ca:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qC(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ca:t="ENVMAP_MODE_REFRACTION";break}return t}function YC(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sc:t="ENVMAP_BLENDING_MULTIPLY";break;case hx:t="ENVMAP_BLENDING_MIX";break;case fx:t="ENVMAP_BLENDING_ADD";break}return t}function ZC(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jC(s,t,e,n){const i=s.getContext(),o=e.defines;let l=e.vertexShader,c=e.fragmentShader;const h=WC(e),f=XC(e),p=qC(e),m=YC(e),g=ZC(e),v=IC(e),x=zC(o),M=i.createProgram();let S,y,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ml).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ml).join(`
`),y.length>0&&(y+=`
`)):(S=[f_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),y=[f_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ss?"#define TONE_MAPPING":"",e.toneMapping!==ss?de.tonemapping_pars_fragment:"",e.toneMapping!==ss?PC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,NC("linearToOutputTexel",e.outputColorSpace),OC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ml).join(`
`)),l=im(l),l=c_(l,e),l=u_(l,e),c=im(c),c=c_(c,e),c=u_(c,e),l=h_(l),c=h_(c),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",e.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=A+S+l,T=A+y+c,z=o_(i,i.VERTEX_SHADER,E),R=o_(i,i.FRAGMENT_SHADER,T);i.attachShader(M,z),i.attachShader(M,R),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function N(B){if(s.debug.checkShaderErrors){const Q=i.getProgramInfoLog(M).trim(),W=i.getShaderInfoLog(z).trim(),K=i.getShaderInfoLog(R).trim();let et=!0,I=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(et=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,z,R);else{const k=l_(i,z,"vertex"),G=l_(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Q+`
`+k+`
`+G)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(W===""||K==="")&&(I=!1);I&&(B.diagnostics={runnable:et,programLog:Q,vertexShader:{log:W,prefix:S},fragmentShader:{log:K,prefix:y}})}i.deleteShader(z),i.deleteShader(R),H=new Ju(i,M),C=BC(i,M)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(M,RC)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UC++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=R,this}let KC=0;class JC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new QC(t),e.set(t,n)),n}}class QC{constructor(t){this.id=KC++,this.code=t,this.usedTimes=0}}function $C(s,t,e,n,i,o,l){const c=new bo,h=new JC,f=new Set,p=[],m=i.logarithmicDepthBuffer,g=i.vertexTextures;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return f.add(C),C===0?"uv":`uv${C}`}function S(C,w,B,Q,W){const K=Q.fog,et=W.geometry,I=C.isMeshStandardMaterial?Q.environment:null,k=(C.isMeshStandardMaterial?e:t).get(C.envMap||I),G=k&&k.mapping===Co?k.image.height:null,at=x[C.type];C.precision!==null&&(v=i.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const rt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ft=rt!==void 0?rt.length:0;let Ct=0;et.morphAttributes.position!==void 0&&(Ct=1),et.morphAttributes.normal!==void 0&&(Ct=2),et.morphAttributes.color!==void 0&&(Ct=3);let Wt,J,ct,Nt;if(at){const xe=Gi[at];Wt=xe.vertexShader,J=xe.fragmentShader}else Wt=C.vertexShader,J=C.fragmentShader,h.update(C),ct=h.getVertexShaderID(C),Nt=h.getFragmentShaderID(C);const Ut=s.getRenderTarget(),Zt=W.isInstancedMesh===!0,re=W.isBatchedMesh===!0,qt=!!C.map,Xt=!!C.matcap,P=!!k,_t=!!C.aoMap,gt=!!C.lightMap,wt=!!C.bumpMap,lt=!!C.normalMap,Ht=!!C.displacementMap,Dt=!!C.emissiveMap,Pt=!!C.metalnessMap,F=!!C.roughnessMap,U=C.anisotropy>0,nt=C.clearcoat>0,vt=C.dispersion>0,mt=C.iridescence>0,pt=C.sheen>0,Kt=C.transmission>0,At=U&&!!C.anisotropyMap,Vt=nt&&!!C.clearcoatMap,oe=nt&&!!C.clearcoatNormalMap,bt=nt&&!!C.clearcoatRoughnessMap,It=mt&&!!C.iridescenceMap,ge=mt&&!!C.iridescenceThicknessMap,te=pt&&!!C.sheenColorMap,zt=pt&&!!C.sheenRoughnessMap,se=!!C.specularMap,ce=!!C.specularColorMap,Ne=!!C.specularIntensityMap,X=Kt&&!!C.transmissionMap,Tt=Kt&&!!C.thicknessMap,ut=!!C.gradientMap,dt=!!C.alphaMap,Rt=C.alphaTest>0,ee=!!C.alphaHash,ye=!!C.extensions;let Xe=ss;C.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const Ke={shaderID:at,shaderType:C.type,shaderName:C.name,vertexShader:Wt,fragmentShader:J,defines:C.defines,customVertexShaderID:ct,customFragmentShaderID:Nt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:re,batchingColor:re&&W._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&W.instanceColor!==null,instancingMorph:Zt&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ut===null?s.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:os,alphaToCoverage:!!C.alphaToCoverage,map:qt,matcap:Xt,envMap:P,envMapMode:P&&k.mapping,envMapCubeUVHeight:G,aoMap:_t,lightMap:gt,bumpMap:wt,normalMap:lt,displacementMap:g&&Ht,emissiveMap:Dt,normalMapObjectSpace:lt&&C.normalMapType===Ax,normalMapTangentSpace:lt&&C.normalMapType===ha,metalnessMap:Pt,roughnessMap:F,anisotropy:U,anisotropyMap:At,clearcoat:nt,clearcoatMap:Vt,clearcoatNormalMap:oe,clearcoatRoughnessMap:bt,dispersion:vt,iridescence:mt,iridescenceMap:It,iridescenceThicknessMap:ge,sheen:pt,sheenColorMap:te,sheenRoughnessMap:zt,specularMap:se,specularColorMap:ce,specularIntensityMap:Ne,transmission:Kt,transmissionMap:X,thicknessMap:Tt,gradientMap:ut,opaque:C.transparent===!1&&C.blending===nr&&C.alphaToCoverage===!1,alphaMap:dt,alphaTest:Rt,alphaHash:ee,combine:C.combine,mapUv:qt&&M(C.map.channel),aoMapUv:_t&&M(C.aoMap.channel),lightMapUv:gt&&M(C.lightMap.channel),bumpMapUv:wt&&M(C.bumpMap.channel),normalMapUv:lt&&M(C.normalMap.channel),displacementMapUv:Ht&&M(C.displacementMap.channel),emissiveMapUv:Dt&&M(C.emissiveMap.channel),metalnessMapUv:Pt&&M(C.metalnessMap.channel),roughnessMapUv:F&&M(C.roughnessMap.channel),anisotropyMapUv:At&&M(C.anisotropyMap.channel),clearcoatMapUv:Vt&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:oe&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:te&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:zt&&M(C.sheenRoughnessMap.channel),specularMapUv:se&&M(C.specularMap.channel),specularColorMapUv:ce&&M(C.specularColorMap.channel),specularIntensityMapUv:Ne&&M(C.specularIntensityMap.channel),transmissionMapUv:X&&M(C.transmissionMap.channel),thicknessMapUv:Tt&&M(C.thicknessMap.channel),alphaMapUv:dt&&M(C.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(lt||U),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!et.attributes.uv&&(qt||dt),fog:!!K,useFog:C.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:W.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ct,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:qt&&C.map.isVideoTexture===!0&&we.getTransfer(C.map.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ki,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ye&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&C.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ke.vertexUv1s=f.has(1),Ke.vertexUv2s=f.has(2),Ke.vertexUv3s=f.has(3),f.clear(),Ke}function y(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)w.push(B),w.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(A(w,C),E(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function A(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function E(C,w){c.disableAll(),w.supportsVertexTextures&&c.enable(0),w.instancing&&c.enable(1),w.instancingColor&&c.enable(2),w.instancingMorph&&c.enable(3),w.matcap&&c.enable(4),w.envMap&&c.enable(5),w.normalMapObjectSpace&&c.enable(6),w.normalMapTangentSpace&&c.enable(7),w.clearcoat&&c.enable(8),w.iridescence&&c.enable(9),w.alphaTest&&c.enable(10),w.vertexColors&&c.enable(11),w.vertexAlphas&&c.enable(12),w.vertexUv1s&&c.enable(13),w.vertexUv2s&&c.enable(14),w.vertexUv3s&&c.enable(15),w.vertexTangents&&c.enable(16),w.anisotropy&&c.enable(17),w.alphaHash&&c.enable(18),w.batching&&c.enable(19),w.dispersion&&c.enable(20),w.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.skinning&&c.enable(4),w.morphTargets&&c.enable(5),w.morphNormals&&c.enable(6),w.morphColors&&c.enable(7),w.premultipliedAlpha&&c.enable(8),w.shadowMapEnabled&&c.enable(9),w.doubleSided&&c.enable(10),w.flipSided&&c.enable(11),w.useDepthPacking&&c.enable(12),w.dithering&&c.enable(13),w.transmission&&c.enable(14),w.sheen&&c.enable(15),w.opaque&&c.enable(16),w.pointsUvs&&c.enable(17),w.decodeVideoTexture&&c.enable(18),w.alphaToCoverage&&c.enable(19),C.push(c.mask)}function T(C){const w=x[C.type];let B;if(w){const Q=Gi[w];B=Rh.clone(Q.uniforms)}else B=C.uniforms;return B}function z(C,w){let B;for(let Q=0,W=p.length;Q<W;Q++){const K=p[Q];if(K.cacheKey===w){B=K,++B.usedTimes;break}}return B===void 0&&(B=new jC(s,w,C,o),p.push(B)),B}function R(C){if(--C.usedTimes===0){const w=p.indexOf(C);p[w]=p[p.length-1],p.pop(),C.destroy()}}function N(C){h.remove(C)}function H(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:T,acquireProgram:z,releaseProgram:R,releaseShaderCache:N,programs:p,dispose:H}}function t2(){let s=new WeakMap;function t(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function e(o){s.delete(o)}function n(o,l,c){s.get(o)[l]=c}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function e2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function d_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function p_(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function l(m,g,v,x,M,S){let y=s[t];return y===void 0?(y={id:m.id,object:m,geometry:g,material:v,groupOrder:x,renderOrder:m.renderOrder,z:M,group:S},s[t]=y):(y.id=m.id,y.object=m,y.geometry=g,y.material=v,y.groupOrder=x,y.renderOrder=m.renderOrder,y.z=M,y.group=S),t++,y}function c(m,g,v,x,M,S){const y=l(m,g,v,x,M,S);v.transmission>0?n.push(y):v.transparent===!0?i.push(y):e.push(y)}function h(m,g,v,x,M,S){const y=l(m,g,v,x,M,S);v.transmission>0?n.unshift(y):v.transparent===!0?i.unshift(y):e.unshift(y)}function f(m,g){e.length>1&&e.sort(m||e2),n.length>1&&n.sort(g||d_),i.length>1&&i.sort(g||d_)}function p(){for(let m=t,g=s.length;m<g;m++){const v=s[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:c,unshift:h,finish:p,sort:f}}function n2(){let s=new WeakMap;function t(n,i){const o=s.get(n);let l;return o===void 0?(l=new p_,s.set(n,[l])):i>=o.length?(l=new p_,o.push(l)):l=o[i],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function i2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Bt};break;case"SpotLight":e={position:new O,direction:new O,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function s2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let a2=0;function r2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function o2(s){const t=new i2,e=s2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new O);const i=new O,o=new ie,l=new ie;function c(f){let p=0,m=0,g=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,x=0,M=0,S=0,y=0,A=0,E=0,T=0,z=0,R=0,N=0;f.sort(r2);for(let C=0,w=f.length;C<w;C++){const B=f[C],Q=B.color,W=B.intensity,K=B.distance,et=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=Q.r*W,m+=Q.g*W,g+=Q.b*W;else if(B.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(B.sh.coefficients[I],W);N++}else if(B.isDirectionalLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const k=B.shadow,G=e.get(B);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.directionalShadow[v]=G,n.directionalShadowMap[v]=et,n.directionalShadowMatrix[v]=B.shadow.matrix,A++}n.directional[v]=I,v++}else if(B.isSpotLight){const I=t.get(B);I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy(Q).multiplyScalar(W),I.distance=K,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,n.spot[M]=I;const k=B.shadow;if(B.map&&(n.spotLightMap[z]=B.map,z++,k.updateMatrices(B),B.castShadow&&R++),n.spotLightMatrix[M]=k.matrix,B.castShadow){const G=e.get(B);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=et,T++}M++}else if(B.isRectAreaLight){const I=t.get(B);I.color.copy(Q).multiplyScalar(W),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),n.rectArea[S]=I,S++}else if(B.isPointLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),I.distance=B.distance,I.decay=B.decay,B.castShadow){const k=B.shadow,G=e.get(B);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,G.shadowCameraNear=k.camera.near,G.shadowCameraFar=k.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=et,n.pointShadowMatrix[x]=B.shadow.matrix,E++}n.point[x]=I,x++}else if(B.isHemisphereLight){const I=t.get(B);I.skyColor.copy(B.color).multiplyScalar(W),I.groundColor.copy(B.groundColor).multiplyScalar(W),n.hemi[y]=I,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const H=n.hash;(H.directionalLength!==v||H.pointLength!==x||H.spotLength!==M||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==A||H.numPointShadows!==E||H.numSpotShadows!==T||H.numSpotMaps!==z||H.numLightProbes!==N)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=S,n.point.length=x,n.hemi.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=T+z-R,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=N,H.directionalLength=v,H.pointLength=x,H.spotLength=M,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=A,H.numPointShadows=E,H.numSpotShadows=T,H.numSpotMaps=z,H.numLightProbes=N,n.version=a2++)}function h(f,p){let m=0,g=0,v=0,x=0,M=0;const S=p.matrixWorldInverse;for(let y=0,A=f.length;y<A;y++){const E=f[y];if(E.isDirectionalLight){const T=n.directional[m];T.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(S),m++}else if(E.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(S),v++}else if(E.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(S),l.identity(),o.copy(E.matrixWorld),o.premultiply(S),l.extractRotation(o),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),x++}else if(E.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(S),g++}else if(E.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(S),M++}}}return{setup:c,setupView:h,state:n}}function m_(s){const t=new o2(s),e=[],n=[];function i(p){f.camera=p,e.length=0,n.length=0}function o(p){e.push(p)}function l(p){n.push(p)}function c(){t.setup(e)}function h(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:l}}function l2(s){let t=new WeakMap;function e(i,o=0){const l=t.get(i);let c;return l===void 0?(c=new m_(s),t.set(i,[c])):o>=l.length?(c=new m_(s),l.push(c)):c=l[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}class Bm extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fm extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h2(s,t,e){let n=new lc;const i=new ht,o=new ht,l=new Se,c=new Bm({depthPacking:Ex}),h=new Fm,f={},p=e.maxTextureSize,m={[Ls]:Xn,[Xn]:Ls,[ki]:ki},g=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:c2,fragmentShader:u2}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const x=new pe;x.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new an(x,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let y=this.type;this.render=function(R,N,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||R.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(Ds),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const W=y!==Vi&&this.type===Vi,K=y===Vi&&this.type!==Vi;for(let et=0,I=R.length;et<I;et++){const k=R[et],G=k.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const at=G.getFrameExtents();if(i.multiply(at),o.copy(G.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(o.x=Math.floor(p/at.x),i.x=o.x*at.x,G.mapSize.x=o.x),i.y>p&&(o.y=Math.floor(p/at.y),i.y=o.y*at.y,G.mapSize.y=o.y)),G.map===null||W===!0||K===!0){const ft=this.type!==Vi?{minFilter:yn,magFilter:yn}:{};G.map!==null&&G.map.dispose(),G.map=new Xi(i.x,i.y,ft),G.map.texture.name=k.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const rt=G.getViewportCount();for(let ft=0;ft<rt;ft++){const Ct=G.getViewport(ft);l.set(o.x*Ct.x,o.y*Ct.y,o.x*Ct.z,o.y*Ct.w),Q.viewport(l),G.updateMatrices(k,ft),n=G.getFrustum(),T(N,H,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===Vi&&A(G,H),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,B)};function A(R,N){const H=t.update(M);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(i.x,i.y)),g.uniforms.shadow_pass.value=R.map.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(N,null,H,g,M,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(N,null,H,v,M,null)}function E(R,N,H,C){let w=null;const B=H.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)w=B;else if(w=H.isPointLight===!0?h:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const Q=w.uuid,W=N.uuid;let K=f[Q];K===void 0&&(K={},f[Q]=K);let et=K[W];et===void 0&&(et=w.clone(),K[W]=et,N.addEventListener("dispose",z)),w=et}if(w.visible=N.visible,w.wireframe=N.wireframe,C===Vi?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:m[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=s.properties.get(w);Q.light=H}return w}function T(R,N,H,C,w){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Vi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld);const W=t.update(R),K=R.material;if(Array.isArray(K)){const et=W.groups;for(let I=0,k=et.length;I<k;I++){const G=et[I],at=K[G.materialIndex];if(at&&at.visible){const rt=E(R,at,C,w);R.onBeforeShadow(s,R,N,H,W,rt,G),s.renderBufferDirect(H,null,W,rt,R,G),R.onAfterShadow(s,R,N,H,W,rt,G)}}}else if(K.visible){const et=E(R,K,C,w);R.onBeforeShadow(s,R,N,H,W,et,null),s.renderBufferDirect(H,null,W,et,R,null),R.onAfterShadow(s,R,N,H,W,et,null)}}const Q=R.children;for(let W=0,K=Q.length;W<K;W++)T(Q[W],N,H,C,w)}function z(R){R.target.removeEventListener("dispose",z);for(const H in f){const C=f[H],w=R.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}function f2(s){function t(){let X=!1;const Tt=new Se;let ut=null;const dt=new Se(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!X&&(s.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){X=Rt},setClear:function(Rt,ee,ye,Xe,Ke){Ke===!0&&(Rt*=Xe,ee*=Xe,ye*=Xe),Tt.set(Rt,ee,ye,Xe),dt.equals(Tt)===!1&&(s.clearColor(Rt,ee,ye,Xe),dt.copy(Tt))},reset:function(){X=!1,ut=null,dt.set(-1,0,0,0)}}}function e(){let X=!1,Tt=null,ut=null,dt=null;return{setTest:function(Rt){Rt?Nt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Rt){Tt!==Rt&&!X&&(s.depthMask(Rt),Tt=Rt)},setFunc:function(Rt){if(ut!==Rt){switch(Rt){case sx:s.depthFunc(s.NEVER);break;case ax:s.depthFunc(s.ALWAYS);break;case rx:s.depthFunc(s.LESS);break;case Pl:s.depthFunc(s.LEQUAL);break;case ox:s.depthFunc(s.EQUAL);break;case lx:s.depthFunc(s.GEQUAL);break;case cx:s.depthFunc(s.GREATER);break;case ux:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=Rt}},setLocked:function(Rt){X=Rt},setClear:function(Rt){dt!==Rt&&(s.clearDepth(Rt),dt=Rt)},reset:function(){X=!1,Tt=null,ut=null,dt=null}}}function n(){let X=!1,Tt=null,ut=null,dt=null,Rt=null,ee=null,ye=null,Xe=null,Ke=null;return{setTest:function(xe){X||(xe?Nt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(xe){Tt!==xe&&!X&&(s.stencilMask(xe),Tt=xe)},setFunc:function(xe,Yn,ii){(ut!==xe||dt!==Yn||Rt!==ii)&&(s.stencilFunc(xe,Yn,ii),ut=xe,dt=Yn,Rt=ii)},setOp:function(xe,Yn,ii){(ee!==xe||ye!==Yn||Xe!==ii)&&(s.stencilOp(xe,Yn,ii),ee=xe,ye=Yn,Xe=ii)},setLocked:function(xe){X=xe},setClear:function(xe){Ke!==xe&&(s.clearStencil(xe),Ke=xe)},reset:function(){X=!1,Tt=null,ut=null,dt=null,Rt=null,ee=null,ye=null,Xe=null,Ke=null}}}const i=new t,o=new e,l=new n,c=new WeakMap,h=new WeakMap;let f={},p={},m=new WeakMap,g=[],v=null,x=!1,M=null,S=null,y=null,A=null,E=null,T=null,z=null,R=new Bt(0,0,0),N=0,H=!1,C=null,w=null,B=null,Q=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,I=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(k)[1]),et=I>=1):k.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),et=I>=2);let G=null,at={};const rt=s.getParameter(s.SCISSOR_BOX),ft=s.getParameter(s.VIEWPORT),Ct=new Se().fromArray(rt),Wt=new Se().fromArray(ft);function J(X,Tt,ut,dt){const Rt=new Uint8Array(4),ee=s.createTexture();s.bindTexture(X,ee),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<ut;ye++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Tt+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return ee}const ct={};ct[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Nt(s.DEPTH_TEST),o.setFunc(Pl),wt(!1),lt(jp),Nt(s.CULL_FACE),_t(Ds);function Nt(X){f[X]!==!0&&(s.enable(X),f[X]=!0)}function Ut(X){f[X]!==!1&&(s.disable(X),f[X]=!1)}function Zt(X,Tt){return p[X]!==Tt?(s.bindFramebuffer(X,Tt),p[X]=Tt,X===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Tt),X===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function re(X,Tt){let ut=g,dt=!1;if(X){ut=m.get(Tt),ut===void 0&&(ut=[],m.set(Tt,ut));const Rt=X.textures;if(ut.length!==Rt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,ye=Rt.length;ee<ye;ee++)ut[ee]=s.COLOR_ATTACHMENT0+ee;ut.length=Rt.length,dt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,dt=!0);dt&&s.drawBuffers(ut)}function qt(X){return v!==X?(s.useProgram(X),v=X,!0):!1}const Xt={[oa]:s.FUNC_ADD,[Vy]:s.FUNC_SUBTRACT,[Gy]:s.FUNC_REVERSE_SUBTRACT};Xt[ky]=s.MIN,Xt[Wy]=s.MAX;const P={[Xy]:s.ZERO,[qy]:s.ONE,[Yy]:s.SRC_COLOR,[th]:s.SRC_ALPHA,[$y]:s.SRC_ALPHA_SATURATE,[Jy]:s.DST_COLOR,[jy]:s.DST_ALPHA,[Zy]:s.ONE_MINUS_SRC_COLOR,[eh]:s.ONE_MINUS_SRC_ALPHA,[Qy]:s.ONE_MINUS_DST_COLOR,[Ky]:s.ONE_MINUS_DST_ALPHA,[tx]:s.CONSTANT_COLOR,[ex]:s.ONE_MINUS_CONSTANT_COLOR,[nx]:s.CONSTANT_ALPHA,[ix]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(X,Tt,ut,dt,Rt,ee,ye,Xe,Ke,xe){if(X===Ds){x===!0&&(Ut(s.BLEND),x=!1);return}if(x===!1&&(Nt(s.BLEND),x=!0),X!==Hy){if(X!==M||xe!==H){if((S!==oa||E!==oa)&&(s.blendEquation(s.FUNC_ADD),S=oa,E=oa),xe)switch(X){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kp:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,A=null,T=null,z=null,R.set(0,0,0),N=0,M=X,H=xe}return}Rt=Rt||Tt,ee=ee||ut,ye=ye||dt,(Tt!==S||Rt!==E)&&(s.blendEquationSeparate(Xt[Tt],Xt[Rt]),S=Tt,E=Rt),(ut!==y||dt!==A||ee!==T||ye!==z)&&(s.blendFuncSeparate(P[ut],P[dt],P[ee],P[ye]),y=ut,A=dt,T=ee,z=ye),(Xe.equals(R)===!1||Ke!==N)&&(s.blendColor(Xe.r,Xe.g,Xe.b,Ke),R.copy(Xe),N=Ke),M=X,H=!1}function gt(X,Tt){X.side===ki?Ut(s.CULL_FACE):Nt(s.CULL_FACE);let ut=X.side===Xn;Tt&&(ut=!ut),wt(ut),X.blending===nr&&X.transparent===!1?_t(Ds):_t(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),i.setMask(X.colorWrite);const dt=X.stencilWrite;l.setTest(dt),dt&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Dt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Nt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(X){C!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),C=X)}function lt(X){X!==zy?(Nt(s.CULL_FACE),X!==w&&(X===jp?s.cullFace(s.BACK):X===By?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),w=X}function Ht(X){X!==B&&(et&&s.lineWidth(X),B=X)}function Dt(X,Tt,ut){X?(Nt(s.POLYGON_OFFSET_FILL),(Q!==Tt||W!==ut)&&(s.polygonOffset(Tt,ut),Q=Tt,W=ut)):Ut(s.POLYGON_OFFSET_FILL)}function Pt(X){X?Nt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function F(X){X===void 0&&(X=s.TEXTURE0+K-1),G!==X&&(s.activeTexture(X),G=X)}function U(X,Tt,ut){ut===void 0&&(G===null?ut=s.TEXTURE0+K-1:ut=G);let dt=at[ut];dt===void 0&&(dt={type:void 0,texture:void 0},at[ut]=dt),(dt.type!==X||dt.texture!==Tt)&&(G!==ut&&(s.activeTexture(ut),G=ut),s.bindTexture(X,Tt||ct[X]),dt.type=X,dt.texture=Tt)}function nt(){const X=at[G];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(X){Ct.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ct.copy(X))}function zt(X){Wt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Wt.copy(X))}function se(X,Tt){let ut=h.get(Tt);ut===void 0&&(ut=new WeakMap,h.set(Tt,ut));let dt=ut.get(X);dt===void 0&&(dt=s.getUniformBlockIndex(Tt,X.name),ut.set(X,dt))}function ce(X,Tt){const dt=h.get(Tt).get(X);c.get(Tt)!==dt&&(s.uniformBlockBinding(Tt,dt,X.__bindingPointIndex),c.set(Tt,dt))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},G=null,at={},p={},m=new WeakMap,g=[],v=null,x=!1,M=null,S=null,y=null,A=null,E=null,T=null,z=null,R=new Bt(0,0,0),N=0,H=!1,C=null,w=null,B=null,Q=null,W=null,Ct.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),o.reset(),l.reset()}return{buffers:{color:i,depth:o,stencil:l},enable:Nt,disable:Ut,bindFramebuffer:Zt,drawBuffers:re,useProgram:qt,setBlending:_t,setMaterial:gt,setFlipSided:wt,setCullFace:lt,setLineWidth:Ht,setPolygonOffset:Dt,setScissorTest:Pt,activeTexture:F,bindTexture:U,unbindTexture:nt,compressedTexImage2D:vt,compressedTexImage3D:mt,texImage2D:It,texImage3D:ge,updateUBOMapping:se,uniformBlockBinding:ce,texStorage2D:oe,texStorage3D:bt,texSubImage2D:pt,texSubImage3D:Kt,compressedTexSubImage2D:At,compressedTexSubImage3D:Vt,scissor:te,viewport:zt,reset:Ne}}function d2(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function p2(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function m2(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function sm(s,t,e,n){const i=g2(n);switch(e){case Em:return s*t;case Tm:return s*t;case wm:return s*t*2;case Wh:return s*t/i.components*i.byteLength;case ac:return s*t/i.components*i.byteLength;case Cm:return s*t*2/i.components*i.byteLength;case Xh:return s*t*2/i.components*i.byteLength;case Am:return s*t*3/i.components*i.byteLength;case On:return s*t*4/i.components*i.byteLength;case qh:return s*t*4/i.components*i.byteLength;case Al:case Tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wl:case Cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ih:case ah:return Math.max(s,16)*Math.max(t,8)/4;case nh:case sh:return Math.max(s,8)*Math.max(t,8)/2;case rh:case oh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ph:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case mh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Rl:case bh:case Eh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rm:case Ah:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Th:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g2(s){switch(s){case Wi:case Sm:return{byteLength:1,components:1};case So:case Mm:case Ro:return{byteLength:2,components:1};case Gh:case kh:return{byteLength:2,components:4};case Ps:case Vh:case ti:return{byteLength:4,components:1};case bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const v2={contain:d2,cover:p2,fill:m2,getByteLength:sm};function _2(s,t,e,n,i,o,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ht,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,U){return v?new OffscreenCanvas(F,U):Yl("canvas")}function M(F,U,nt){let vt=1;const mt=Pt(F);if((mt.width>nt||mt.height>nt)&&(vt=nt/Math.max(mt.width,mt.height)),vt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const pt=Math.floor(vt*mt.width),Kt=Math.floor(vt*mt.height);m===void 0&&(m=x(pt,Kt));const At=U?x(pt,Kt):m;return At.width=pt,At.height=Kt,At.getContext("2d").drawImage(F,0,0,pt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+pt+"x"+Kt+")."),At}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),F;return F}function S(F){return F.generateMipmaps&&F.minFilter!==yn&&F.minFilter!==hn}function y(F){s.generateMipmap(F)}function A(F,U,nt,vt,mt=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pt=U;if(U===s.RED&&(nt===s.FLOAT&&(pt=s.R32F),nt===s.HALF_FLOAT&&(pt=s.R16F),nt===s.UNSIGNED_BYTE&&(pt=s.R8)),U===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.R8UI),nt===s.UNSIGNED_SHORT&&(pt=s.R16UI),nt===s.UNSIGNED_INT&&(pt=s.R32UI),nt===s.BYTE&&(pt=s.R8I),nt===s.SHORT&&(pt=s.R16I),nt===s.INT&&(pt=s.R32I)),U===s.RG&&(nt===s.FLOAT&&(pt=s.RG32F),nt===s.HALF_FLOAT&&(pt=s.RG16F),nt===s.UNSIGNED_BYTE&&(pt=s.RG8)),U===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RG8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RG16UI),nt===s.UNSIGNED_INT&&(pt=s.RG32UI),nt===s.BYTE&&(pt=s.RG8I),nt===s.SHORT&&(pt=s.RG16I),nt===s.INT&&(pt=s.RG32I)),U===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),U===s.RGBA){const Kt=mt?Vl:we.getTransfer(vt);nt===s.FLOAT&&(pt=s.RGBA32F),nt===s.HALF_FLOAT&&(pt=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(pt=Kt===Ve?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function E(F,U){let nt;return F?U===null||U===Ps||U===or?nt=s.DEPTH24_STENCIL8:U===ti?nt=s.DEPTH32F_STENCIL8:U===So&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===Ps||U===or?nt=s.DEPTH_COMPONENT24:U===ti?nt=s.DEPTH_COMPONENT32F:U===So&&(nt=s.DEPTH_COMPONENT16),nt}function T(F,U){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==yn&&F.minFilter!==hn?Math.log2(Math.max(U.width,U.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?U.mipmaps.length:1}function z(F){const U=F.target;U.removeEventListener("dispose",z),N(U),U.isVideoTexture&&p.delete(U)}function R(F){const U=F.target;U.removeEventListener("dispose",R),C(U)}function N(F){const U=n.get(F);if(U.__webglInit===void 0)return;const nt=F.source,vt=g.get(nt);if(vt){const mt=vt[U.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&H(F),Object.keys(vt).length===0&&g.delete(nt)}n.remove(F)}function H(F){const U=n.get(F);s.deleteTexture(U.__webglTexture);const nt=F.source,vt=g.get(nt);delete vt[U.__cacheKey],l.memory.textures--}function C(F){const U=n.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(U.__webglFramebuffer[vt]))for(let mt=0;mt<U.__webglFramebuffer[vt].length;mt++)s.deleteFramebuffer(U.__webglFramebuffer[vt][mt]);else s.deleteFramebuffer(U.__webglFramebuffer[vt]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[vt])}else{if(Array.isArray(U.__webglFramebuffer))for(let vt=0;vt<U.__webglFramebuffer.length;vt++)s.deleteFramebuffer(U.__webglFramebuffer[vt]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let vt=0;vt<U.__webglColorRenderbuffer.length;vt++)U.__webglColorRenderbuffer[vt]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[vt]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const nt=F.textures;for(let vt=0,mt=nt.length;vt<mt;vt++){const pt=n.get(nt[vt]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),l.memory.textures--),n.remove(nt[vt])}n.remove(F)}let w=0;function B(){w=0}function Q(){const F=w;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),w+=1,F}function W(F){const U=[];return U.push(F.wrapS),U.push(F.wrapT),U.push(F.wrapR||0),U.push(F.magFilter),U.push(F.minFilter),U.push(F.anisotropy),U.push(F.internalFormat),U.push(F.format),U.push(F.type),U.push(F.generateMipmaps),U.push(F.premultiplyAlpha),U.push(F.flipY),U.push(F.unpackAlignment),U.push(F.colorSpace),U.join()}function K(F,U){const nt=n.get(F);if(F.isVideoTexture&&Ht(F),F.isRenderTargetTexture===!1&&F.version>0&&nt.__version!==F.version){const vt=F.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(nt,F,U);return}}e.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+U)}function et(F,U){const nt=n.get(F);if(F.version>0&&nt.__version!==F.version){Wt(nt,F,U);return}e.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+U)}function I(F,U){const nt=n.get(F);if(F.version>0&&nt.__version!==F.version){Wt(nt,F,U);return}e.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+U)}function k(F,U){const nt=n.get(F);if(F.version>0&&nt.__version!==F.version){J(nt,F,U);return}e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+U)}const G={[zl]:s.REPEAT,[Ri]:s.CLAMP_TO_EDGE,[Bl]:s.MIRRORED_REPEAT},at={[yn]:s.NEAREST,[xm]:s.NEAREST_MIPMAP_NEAREST,[po]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[El]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},rt={[Tx]:s.NEVER,[Lx]:s.ALWAYS,[wx]:s.LESS,[Dm]:s.LEQUAL,[Cx]:s.EQUAL,[Dx]:s.GEQUAL,[Rx]:s.GREATER,[Ux]:s.NOTEQUAL};function ft(F,U){if(U.type===ti&&t.has("OES_texture_float_linear")===!1&&(U.magFilter===hn||U.magFilter===El||U.magFilter===po||U.magFilter===ns||U.minFilter===hn||U.minFilter===El||U.minFilter===po||U.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,G[U.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,G[U.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,G[U.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,at[U.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,at[U.minFilter]),U.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,rt[U.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===yn||U.minFilter!==po&&U.minFilter!==ns||U.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||n.get(U).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,i.getMaxAnisotropy())),n.get(U).__currentAnisotropy=U.anisotropy}}}function Ct(F,U){let nt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,U.addEventListener("dispose",z));const vt=U.source;let mt=g.get(vt);mt===void 0&&(mt={},g.set(vt,mt));const pt=W(U);if(pt!==F.__cacheKey){mt[pt]===void 0&&(mt[pt]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,nt=!0),mt[pt].usedTimes++;const Kt=mt[F.__cacheKey];Kt!==void 0&&(mt[F.__cacheKey].usedTimes--,Kt.usedTimes===0&&H(U)),F.__cacheKey=pt,F.__webglTexture=mt[pt].texture}return nt}function Wt(F,U,nt){let vt=s.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),U.isData3DTexture&&(vt=s.TEXTURE_3D);const mt=Ct(F,U),pt=U.source;e.bindTexture(vt,F.__webglTexture,s.TEXTURE0+nt);const Kt=n.get(pt);if(pt.version!==Kt.__version||mt===!0){e.activeTexture(s.TEXTURE0+nt);const At=we.getPrimaries(we.workingColorSpace),Vt=U.colorSpace===Cs?null:we.getPrimaries(U.colorSpace),oe=U.colorSpace===Cs||At===Vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let bt=M(U.image,!1,i.maxTextureSize);bt=Dt(U,bt);const It=o.convert(U.format,U.colorSpace),ge=o.convert(U.type);let te=A(U.internalFormat,It,ge,U.colorSpace,U.isVideoTexture);ft(vt,U);let zt;const se=U.mipmaps,ce=U.isVideoTexture!==!0,Ne=Kt.__version===void 0||mt===!0,X=pt.dataReady,Tt=T(U,bt);if(U.isDepthTexture)te=E(U.format===lr,U.type),Ne&&(ce?e.texStorage2D(s.TEXTURE_2D,1,te,bt.width,bt.height):e.texImage2D(s.TEXTURE_2D,0,te,bt.width,bt.height,0,It,ge,null));else if(U.isDataTexture)if(se.length>0){ce&&Ne&&e.texStorage2D(s.TEXTURE_2D,Tt,te,se[0].width,se[0].height);for(let ut=0,dt=se.length;ut<dt;ut++)zt=se[ut],ce?X&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,zt.width,zt.height,It,ge,zt.data):e.texImage2D(s.TEXTURE_2D,ut,te,zt.width,zt.height,0,It,ge,zt.data);U.generateMipmaps=!1}else ce?(Ne&&e.texStorage2D(s.TEXTURE_2D,Tt,te,bt.width,bt.height),X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,It,ge,bt.data)):e.texImage2D(s.TEXTURE_2D,0,te,bt.width,bt.height,0,It,ge,bt.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){ce&&Ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,te,se[0].width,se[0].height,bt.depth);for(let ut=0,dt=se.length;ut<dt;ut++)if(zt=se[ut],U.format!==On)if(It!==null)if(ce){if(X)if(U.layerUpdates.size>0){const Rt=sm(zt.width,zt.height,U.format,U.type);for(const ee of U.layerUpdates){const ye=zt.data.subarray(ee*Rt/zt.data.BYTES_PER_ELEMENT,(ee+1)*Rt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,ee,zt.width,zt.height,1,It,ye,0,0)}U.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,zt.width,zt.height,bt.depth,It,zt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,te,zt.width,zt.height,bt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?X&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,zt.width,zt.height,bt.depth,It,ge,zt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,te,zt.width,zt.height,bt.depth,0,It,ge,zt.data)}else{ce&&Ne&&e.texStorage2D(s.TEXTURE_2D,Tt,te,se[0].width,se[0].height);for(let ut=0,dt=se.length;ut<dt;ut++)zt=se[ut],U.format!==On?It!==null?ce?X&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,zt.width,zt.height,It,zt.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,te,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?X&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,zt.width,zt.height,It,ge,zt.data):e.texImage2D(s.TEXTURE_2D,ut,te,zt.width,zt.height,0,It,ge,zt.data)}else if(U.isDataArrayTexture)if(ce){if(Ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,te,bt.width,bt.height,bt.depth),X)if(U.layerUpdates.size>0){const ut=sm(bt.width,bt.height,U.format,U.type);for(const dt of U.layerUpdates){const Rt=bt.data.subarray(dt*ut/bt.data.BYTES_PER_ELEMENT,(dt+1)*ut/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,bt.width,bt.height,1,It,ge,Rt)}U.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,It,ge,bt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,te,bt.width,bt.height,bt.depth,0,It,ge,bt.data);else if(U.isData3DTexture)ce?(Ne&&e.texStorage3D(s.TEXTURE_3D,Tt,te,bt.width,bt.height,bt.depth),X&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,It,ge,bt.data)):e.texImage3D(s.TEXTURE_3D,0,te,bt.width,bt.height,bt.depth,0,It,ge,bt.data);else if(U.isFramebufferTexture){if(Ne)if(ce)e.texStorage2D(s.TEXTURE_2D,Tt,te,bt.width,bt.height);else{let ut=bt.width,dt=bt.height;for(let Rt=0;Rt<Tt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,te,ut,dt,0,It,ge,null),ut>>=1,dt>>=1}}else if(se.length>0){if(ce&&Ne){const ut=Pt(se[0]);e.texStorage2D(s.TEXTURE_2D,Tt,te,ut.width,ut.height)}for(let ut=0,dt=se.length;ut<dt;ut++)zt=se[ut],ce?X&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,It,ge,zt):e.texImage2D(s.TEXTURE_2D,ut,te,It,ge,zt);U.generateMipmaps=!1}else if(ce){if(Ne){const ut=Pt(bt);e.texStorage2D(s.TEXTURE_2D,Tt,te,ut.width,ut.height)}X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,It,ge,bt)}else e.texImage2D(s.TEXTURE_2D,0,te,It,ge,bt);S(U)&&y(vt),Kt.__version=pt.version,U.onUpdate&&U.onUpdate(U)}F.__version=U.version}function J(F,U,nt){if(U.image.length!==6)return;const vt=Ct(F,U),mt=U.source;e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+nt);const pt=n.get(mt);if(mt.version!==pt.__version||vt===!0){e.activeTexture(s.TEXTURE0+nt);const Kt=we.getPrimaries(we.workingColorSpace),At=U.colorSpace===Cs?null:we.getPrimaries(U.colorSpace),Vt=U.colorSpace===Cs||Kt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const oe=U.isCompressedTexture||U.image[0].isCompressedTexture,bt=U.image[0]&&U.image[0].isDataTexture,It=[];for(let dt=0;dt<6;dt++)!oe&&!bt?It[dt]=M(U.image[dt],!0,i.maxCubemapSize):It[dt]=bt?U.image[dt].image:U.image[dt],It[dt]=Dt(U,It[dt]);const ge=It[0],te=o.convert(U.format,U.colorSpace),zt=o.convert(U.type),se=A(U.internalFormat,te,zt,U.colorSpace),ce=U.isVideoTexture!==!0,Ne=pt.__version===void 0||vt===!0,X=mt.dataReady;let Tt=T(U,ge);ft(s.TEXTURE_CUBE_MAP,U);let ut;if(oe){ce&&Ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,se,ge.width,ge.height);for(let dt=0;dt<6;dt++){ut=It[dt].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const ee=ut[Rt];U.format!==On?te!==null?ce?X&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,0,0,ee.width,ee.height,te,ee.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,se,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,0,0,ee.width,ee.height,te,zt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt,se,ee.width,ee.height,0,te,zt,ee.data)}}}else{if(ut=U.mipmaps,ce&&Ne){ut.length>0&&Tt++;const dt=Pt(It[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,se,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(bt){ce?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,It[dt].width,It[dt].height,te,zt,It[dt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,se,It[dt].width,It[dt].height,0,te,zt,It[dt].data);for(let Rt=0;Rt<ut.length;Rt++){const ye=ut[Rt].image[dt].image;ce?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,0,0,ye.width,ye.height,te,zt,ye.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,se,ye.width,ye.height,0,te,zt,ye.data)}}else{ce?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,te,zt,It[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,se,te,zt,It[dt]);for(let Rt=0;Rt<ut.length;Rt++){const ee=ut[Rt];ce?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,0,0,te,zt,ee.image[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt+1,se,te,zt,ee.image[dt])}}}S(U)&&y(s.TEXTURE_CUBE_MAP),pt.__version=mt.version,U.onUpdate&&U.onUpdate(U)}F.__version=U.version}function ct(F,U,nt,vt,mt,pt){const Kt=o.convert(nt.format,nt.colorSpace),At=o.convert(nt.type),Vt=A(nt.internalFormat,Kt,At,nt.colorSpace);if(!n.get(U).__hasExternalTextures){const bt=Math.max(1,U.width>>pt),It=Math.max(1,U.height>>pt);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,pt,Vt,bt,It,U.depth,0,Kt,At,null):e.texImage2D(mt,pt,Vt,bt,It,0,Kt,At,null)}e.bindFramebuffer(s.FRAMEBUFFER,F),lt(U)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,mt,n.get(nt).__webglTexture,0,wt(U)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,mt,n.get(nt).__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(F,U,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,F),U.depthBuffer){const vt=U.depthTexture,mt=vt&&vt.isDepthTexture?vt.type:null,pt=E(U.stencilBuffer,mt),Kt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=wt(U);lt(U)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,pt,U.width,U.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,pt,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,pt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,F)}else{const vt=U.textures;for(let mt=0;mt<vt.length;mt++){const pt=vt[mt],Kt=o.convert(pt.format,pt.colorSpace),At=o.convert(pt.type),Vt=A(pt.internalFormat,Kt,At,pt.colorSpace),oe=wt(U);nt&&lt(U)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,Vt,U.width,U.height):lt(U)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,Vt,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,Vt,U.width,U.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(F,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,F),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(U.depthTexture).__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),K(U.depthTexture,0);const vt=n.get(U.depthTexture).__webglTexture,mt=wt(U);if(U.depthTexture.format===ir)lt(U)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(U.depthTexture.format===lr)lt(U)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Zt(F){const U=n.get(F),nt=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!U.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ut(U.__webglFramebuffer,F)}else if(nt){U.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer[vt]),U.__webglDepthbuffer[vt]=s.createRenderbuffer(),Nt(U.__webglDepthbuffer[vt],F,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer=s.createRenderbuffer(),Nt(U.__webglDepthbuffer,F,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(F,U,nt){const vt=n.get(F);U!==void 0&&ct(vt.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&Zt(F)}function qt(F){const U=F.texture,nt=n.get(F),vt=n.get(U);F.addEventListener("dispose",R);const mt=F.textures,pt=F.isWebGLCubeRenderTarget===!0,Kt=mt.length>1;if(Kt||(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=U.version,l.memory.textures++),pt){nt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(U.mipmaps&&U.mipmaps.length>0){nt.__webglFramebuffer[At]=[];for(let Vt=0;Vt<U.mipmaps.length;Vt++)nt.__webglFramebuffer[At][Vt]=s.createFramebuffer()}else nt.__webglFramebuffer[At]=s.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){nt.__webglFramebuffer=[];for(let At=0;At<U.mipmaps.length;At++)nt.__webglFramebuffer[At]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let At=0,Vt=mt.length;At<Vt;At++){const oe=n.get(mt[At]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),l.memory.textures++)}if(F.samples>0&&lt(F)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let At=0;At<mt.length;At++){const Vt=mt[At];nt.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[At]);const oe=o.convert(Vt.format,Vt.colorSpace),bt=o.convert(Vt.type),It=A(Vt.internalFormat,oe,bt,Vt.colorSpace,F.isXRRenderTarget===!0),ge=wt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,It,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,nt.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(nt.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),ft(s.TEXTURE_CUBE_MAP,U);for(let At=0;At<6;At++)if(U.mipmaps&&U.mipmaps.length>0)for(let Vt=0;Vt<U.mipmaps.length;Vt++)ct(nt.__webglFramebuffer[At][Vt],F,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Vt);else ct(nt.__webglFramebuffer[At],F,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(U)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Kt){for(let At=0,Vt=mt.length;At<Vt;At++){const oe=mt[At],bt=n.get(oe);e.bindTexture(s.TEXTURE_2D,bt.__webglTexture),ft(s.TEXTURE_2D,oe),ct(nt.__webglFramebuffer,F,oe,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),S(oe)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let At=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(At=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(At,vt.__webglTexture),ft(At,U),U.mipmaps&&U.mipmaps.length>0)for(let Vt=0;Vt<U.mipmaps.length;Vt++)ct(nt.__webglFramebuffer[Vt],F,U,s.COLOR_ATTACHMENT0,At,Vt);else ct(nt.__webglFramebuffer,F,U,s.COLOR_ATTACHMENT0,At,0);S(U)&&y(At),e.unbindTexture()}F.depthBuffer&&Zt(F)}function Xt(F){const U=F.textures;for(let nt=0,vt=U.length;nt<vt;nt++){const mt=U[nt];if(S(mt)){const pt=F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Kt=n.get(mt).__webglTexture;e.bindTexture(pt,Kt),y(pt),e.unbindTexture()}}}const P=[],_t=[];function gt(F){if(F.samples>0){if(lt(F)===!1){const U=F.textures,nt=F.width,vt=F.height;let mt=s.COLOR_BUFFER_BIT;const pt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=n.get(F),At=U.length>1;if(At)for(let Vt=0;Vt<U.length;Vt++)e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Vt=0;Vt<U.length;Vt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Vt]);const oe=n.get(U[Vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,nt,vt,0,0,nt,vt,mt,s.NEAREST),h===!0&&(P.length=0,_t.length=0,P.push(s.COLOR_ATTACHMENT0+Vt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(P.push(pt),_t.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Vt=0;Vt<U.length;Vt++){e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Vt]);const oe=n.get(U[Vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,oe,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const U=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[U])}}}function wt(F){return Math.min(i.maxSamples,F.samples)}function lt(F){const U=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function Ht(F){const U=l.render.frame;p.get(F)!==U&&(p.set(F,U),F.update())}function Dt(F,U){const nt=F.colorSpace,vt=F.format,mt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||nt!==os&&nt!==Cs&&(we.getTransfer(nt)===Ve?(vt!==On||mt!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),U}function Pt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=Q,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=et,this.setTexture3D=I,this.setTextureCube=k,this.rebindTextures=re,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=lt}function qx(s,t){function e(n,i=Cs){let o;const l=we.getTransfer(i);if(n===Wi)return s.UNSIGNED_BYTE;if(n===Gh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===kh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sm)return s.BYTE;if(n===Mm)return s.SHORT;if(n===So)return s.UNSIGNED_SHORT;if(n===Vh)return s.INT;if(n===Ps)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===Ro)return s.HALF_FLOAT;if(n===Em)return s.ALPHA;if(n===Am)return s.RGB;if(n===On)return s.RGBA;if(n===Tm)return s.LUMINANCE;if(n===wm)return s.LUMINANCE_ALPHA;if(n===ir)return s.DEPTH_COMPONENT;if(n===lr)return s.DEPTH_STENCIL;if(n===Wh)return s.RED;if(n===ac)return s.RED_INTEGER;if(n===Cm)return s.RG;if(n===Xh)return s.RG_INTEGER;if(n===qh)return s.RGBA_INTEGER;if(n===Al||n===Tl||n===wl||n===Cl)if(l===Ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Al)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Al)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nh||n===ih||n===sh||n===ah)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===nh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ih)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ah)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===oh||n===lh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===rh||n===oh)return l===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===lh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ch||n===uh||n===hh||n===fh||n===dh||n===ph||n===mh||n===gh||n===vh||n===_h||n===yh||n===xh||n===Sh||n===Mh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ch)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ph)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_h)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===bh||n===Eh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Rl)return l===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rm||n===Ah||n===Th||n===wh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Rl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ah)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Th)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Yx extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vo extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y2={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const M of t.hand.values()){const S=e.getJointPose(M,n),y=this._getHandJoint(f,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,x=.005;f.inputState.pinching&&g>v+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=v-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(y2)))}return c!==null&&(c.visible=i!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const x2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new nn,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ui({vertexShader:x2,fragmentShader:S2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new an(new Do(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b2 extends Is{constructor(t,e){super();const n=this;let i=null,o=1,l=null,c="local-floor",h=1,f=null,p=null,m=null,g=null,v=null,x=null;const M=new M2,S=e.getContextAttributes();let y=null,A=null;const E=[],T=[],z=new ht;let R=null;const N=new un;N.layers.enable(1),N.viewport=new Se;const H=new un;H.layers.enable(2),H.viewport=new Se;const C=[N,H],w=new Yx;w.layers.enable(1),w.layers.enable(2);let B=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ct=E[J];return ct===void 0&&(ct=new fp,E[J]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(J){let ct=E[J];return ct===void 0&&(ct=new fp,E[J]=ct),ct.getGripSpace()},this.getHand=function(J){let ct=E[J];return ct===void 0&&(ct=new fp,E[J]=ct),ct.getHandSpace()};function W(J){const ct=T.indexOf(J.inputSource);if(ct===-1)return;const Nt=E[ct];Nt!==void 0&&(Nt.update(J.inputSource,J.frame,f||l),Nt.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",et);for(let J=0;J<E.length;J++){const ct=T[J];ct!==null&&(T[J]=null,E[J].disconnect(ct))}B=null,Q=null,M.reset(),t.setRenderTarget(y),v=null,g=null,m=null,i=null,A=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){c=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(J){f=J},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",K),i.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(z),i.renderState.layers===void 0){const ct={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new Xi(v.framebufferWidth,v.framebufferHeight,{format:On,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let ct=null,Nt=null,Ut=null;S.depth&&(Ut=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=S.stencil?lr:ir,Nt=S.stencil?or:Ps);const Zt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:o};m=new XRWebGLBinding(i,e),g=m.createProjectionLayer(Zt),i.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),A=new Xi(g.textureWidth,g.textureHeight,{format:On,type:Wi,depthTexture:new zm(g.textureWidth,g.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await i.requestReferenceSpace(c),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function et(J){for(let ct=0;ct<J.removed.length;ct++){const Nt=J.removed[ct],Ut=T.indexOf(Nt);Ut>=0&&(T[Ut]=null,E[Ut].disconnect(Nt))}for(let ct=0;ct<J.added.length;ct++){const Nt=J.added[ct];let Ut=T.indexOf(Nt);if(Ut===-1){for(let re=0;re<E.length;re++)if(re>=T.length){T.push(Nt),Ut=re;break}else if(T[re]===null){T[re]=Nt,Ut=re;break}if(Ut===-1)break}const Zt=E[Ut];Zt&&Zt.connect(Nt)}}const I=new O,k=new O;function G(J,ct,Nt){I.setFromMatrixPosition(ct.matrixWorld),k.setFromMatrixPosition(Nt.matrixWorld);const Ut=I.distanceTo(k),Zt=ct.projectionMatrix.elements,re=Nt.projectionMatrix.elements,qt=Zt[14]/(Zt[10]-1),Xt=Zt[14]/(Zt[10]+1),P=(Zt[9]+1)/Zt[5],_t=(Zt[9]-1)/Zt[5],gt=(Zt[8]-1)/Zt[0],wt=(re[8]+1)/re[0],lt=qt*gt,Ht=qt*wt,Dt=Ut/(-gt+wt),Pt=Dt*-gt;ct.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(Dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const F=qt+Dt,U=Xt+Dt,nt=lt-Pt,vt=Ht+(Ut-Pt),mt=P*Xt/U*F,pt=_t*Xt/U*F;J.projectionMatrix.makePerspective(nt,vt,mt,pt,F,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function at(J,ct){ct===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ct.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;M.texture!==null&&(J.near=M.depthNear,J.far=M.depthFar),w.near=H.near=N.near=J.near,w.far=H.far=N.far=J.far,(B!==w.near||Q!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,Q=w.far,N.near=B,N.far=Q,H.near=B,H.far=Q,N.updateProjectionMatrix(),H.updateProjectionMatrix(),J.updateProjectionMatrix());const ct=J.parent,Nt=w.cameras;at(w,ct);for(let Ut=0;Ut<Nt.length;Ut++)at(Nt[Ut],ct);Nt.length===2?G(w,N,H):w.projectionMatrix.copy(N.projectionMatrix),rt(J,w,ct)};function rt(J,ct,Nt){Nt===null?J.matrix.copy(ct.matrixWorld):(J.matrix.copy(Nt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ct.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ct.projectionMatrix),J.projectionMatrixInverse.copy(ct.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Mo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&v===null))return h},this.setFoveation=function(J){h=J,g!==null&&(g.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)};let ft=null;function Ct(J,ct){if(p=ct.getViewerPose(f||l),x=ct,p!==null){const Nt=p.views;v!==null&&(t.setRenderTargetFramebuffer(A,v.framebuffer),t.setRenderTarget(A));let Ut=!1;Nt.length!==w.cameras.length&&(w.cameras.length=0,Ut=!0);for(let re=0;re<Nt.length;re++){const qt=Nt[re];let Xt=null;if(v!==null)Xt=v.getViewport(qt);else{const _t=m.getViewSubImage(g,qt);Xt=_t.viewport,re===0&&(t.setRenderTargetTextures(A,_t.colorTexture,g.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(A))}let P=C[re];P===void 0&&(P=new un,P.layers.enable(re),P.viewport=new Se,C[re]=P),P.matrix.fromArray(qt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(qt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),re===0&&(w.matrix.copy(P.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ut===!0&&w.cameras.push(P)}const Zt=i.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")){const re=m.getDepthInformation(Nt[0]);re&&re.isValid&&re.texture&&M.init(t,re,i.renderState)}}for(let Nt=0;Nt<E.length;Nt++){const Ut=T[Nt],Zt=E[Nt];Ut!==null&&Zt!==void 0&&Zt.update(Ut,ct,f||l)}ft&&ft(J,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),x=null}const Wt=new Vx;Wt.setAnimationLoop(Ct),this.setAnimationLoop=function(J){ft=J},this.dispose=function(){}}}const Ga=new yi,E2=new ie;function A2(s,t){function e(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function n(S,y){y.color.getRGB(S.fogColor.value,Bx(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function i(S,y,A,E,T){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(S,y):y.isMeshToonMaterial?(o(S,y),m(S,y)):y.isMeshPhongMaterial?(o(S,y),p(S,y)):y.isMeshStandardMaterial?(o(S,y),g(S,y),y.isMeshPhysicalMaterial&&v(S,y,T)):y.isMeshMatcapMaterial?(o(S,y),x(S,y)):y.isMeshDepthMaterial?o(S,y):y.isMeshDistanceMaterial?(o(S,y),M(S,y)):y.isMeshNormalMaterial?o(S,y):y.isLineBasicMaterial?(l(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?h(S,y,A,E):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,e(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Xn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,e(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Xn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,e(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,e(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const A=t.get(y),E=A.envMap,T=A.envMapRotation;E&&(S.envMap.value=E,Ga.copy(T),Ga.x*=-1,Ga.y*=-1,Ga.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ga.y*=-1,Ga.z*=-1),S.envMapRotation.value.setFromMatrix4(E2.makeRotationFromEuler(Ga)),S.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,S.aoMapTransform))}function l(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,A,E){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*A,S.scale.value=E*.5,y.map&&(S.map.value=y.map,e(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function m(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function v(S,y,A){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const A=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function T2(s,t,e,n){let i={},o={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,E){const T=E.program;n.uniformBlockBinding(A,T)}function f(A,E){let T=i[A.id];T===void 0&&(x(A),T=p(A),i[A.id]=T,A.addEventListener("dispose",S));const z=E.program;n.updateUBOMapping(A,z);const R=t.render.frame;o[A.id]!==R&&(g(A),o[A.id]=R)}function p(A){const E=m();A.__bindingPointIndex=E;const T=s.createBuffer(),z=A.__size,R=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,z,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,T),T}function m(){for(let A=0;A<c;A++)if(l.indexOf(A)===-1)return l.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const E=i[A.id],T=A.uniforms,z=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let R=0,N=T.length;R<N;R++){const H=Array.isArray(T[R])?T[R]:[T[R]];for(let C=0,w=H.length;C<w;C++){const B=H[C];if(v(B,R,C,z)===!0){const Q=B.__offset,W=Array.isArray(B.value)?B.value:[B.value];let K=0;for(let et=0;et<W.length;et++){const I=W[et],k=M(I);typeof I=="number"||typeof I=="boolean"?(B.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,Q+K,B.__data)):I.isMatrix3?(B.__data[0]=I.elements[0],B.__data[1]=I.elements[1],B.__data[2]=I.elements[2],B.__data[3]=0,B.__data[4]=I.elements[3],B.__data[5]=I.elements[4],B.__data[6]=I.elements[5],B.__data[7]=0,B.__data[8]=I.elements[6],B.__data[9]=I.elements[7],B.__data[10]=I.elements[8],B.__data[11]=0):(I.toArray(B.__data,K),K+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(A,E,T,z){const R=A.value,N=E+"_"+T;if(z[N]===void 0)return typeof R=="number"||typeof R=="boolean"?z[N]=R:z[N]=R.clone(),!0;{const H=z[N];if(typeof R=="number"||typeof R=="boolean"){if(H!==R)return z[N]=R,!0}else if(H.equals(R)===!1)return H.copy(R),!0}return!1}function x(A){const E=A.uniforms;let T=0;const z=16;for(let N=0,H=E.length;N<H;N++){const C=Array.isArray(E[N])?E[N]:[E[N]];for(let w=0,B=C.length;w<B;w++){const Q=C[w],W=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,et=W.length;K<et;K++){const I=W[K],k=M(I),G=T%z,at=G%k.boundary,rt=G+at;T+=at,rt!==0&&z-rt<k.storage&&(T+=z-rt),Q.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=k.storage}}}const R=T%z;return R>0&&(T+=z-R),A.__size=T,A.__cache={},this}function M(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function S(A){const E=A.target;E.removeEventListener("dispose",S);const T=l.indexOf(E.__bindingPointIndex);l.splice(T,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete o[E.id]}function y(){for(const A in i)s.deleteBuffer(i[A]);l=[],i={},o={}}return{bind:h,update:f,dispose:y}}class Zx{constructor(t={}){const{canvas:e=Px(),context:n=null,depth:i=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=l;const v=new Uint32Array(4),x=new Int32Array(4);let M=null,S=null;const y=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=ss,this.toneMappingExposure=1;const E=this;let T=!1,z=0,R=0,N=null,H=-1,C=null;const w=new Se,B=new Se;let Q=null;const W=new Bt(0);let K=0,et=e.width,I=e.height,k=1,G=null,at=null;const rt=new Se(0,0,et,I),ft=new Se(0,0,et,I);let Ct=!1;const Wt=new lc;let J=!1,ct=!1;const Nt=new ie,Ut=new O,Zt=new Se,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Xt(){return N===null?k:1}let P=n;function _t(L,q){return e.getContext(L,q)}try{const L={alpha:!0,depth:i,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ic}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),P===null){const q="webgl2";if(P=_t(q,L),P===null)throw _t(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let gt,wt,lt,Ht,Dt,Pt,F,U,nt,vt,mt,pt,Kt,At,Vt,oe,bt,It,ge,te,zt,se,ce,Ne;function X(){gt=new Nw(P),gt.init(),se=new qx(P,gt),wt=new ww(P,gt,t,se),lt=new f2(P),Ht=new Iw(P),Dt=new t2,Pt=new _2(P,gt,lt,Dt,wt,se,Ht),F=new Rw(E),U=new Lw(E),nt=new kE(P),ce=new Aw(P,nt),vt=new Pw(P,nt,Ht,ce),mt=new Bw(P,vt,nt,Ht),ge=new zw(P,wt,Pt),oe=new Cw(Dt),pt=new $C(E,F,U,gt,wt,ce,oe),Kt=new A2(E,Dt),At=new n2,Vt=new l2(gt),It=new Ew(E,F,U,lt,mt,g,h),bt=new h2(E,mt,wt),Ne=new T2(P,Ht,wt,lt),te=new Tw(P,gt,Ht),zt=new Ow(P,gt,Ht),Ht.programs=pt.programs,E.capabilities=wt,E.extensions=gt,E.properties=Dt,E.renderLists=At,E.shadowMap=bt,E.state=lt,E.info=Ht}X();const Tt=new b2(E,P);this.xr=Tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const L=gt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=gt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(L){L!==void 0&&(k=L,this.setSize(et,I,!1))},this.getSize=function(L){return L.set(et,I)},this.setSize=function(L,q,tt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=L,I=q,e.width=Math.floor(L*k),e.height=Math.floor(q*k),tt===!0&&(e.style.width=L+"px",e.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(et*k,I*k).floor()},this.setDrawingBufferSize=function(L,q,tt){et=L,I=q,k=tt,e.width=Math.floor(L*tt),e.height=Math.floor(q*tt),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(rt)},this.setViewport=function(L,q,tt,it){L.isVector4?rt.set(L.x,L.y,L.z,L.w):rt.set(L,q,tt,it),lt.viewport(w.copy(rt).multiplyScalar(k).round())},this.getScissor=function(L){return L.copy(ft)},this.setScissor=function(L,q,tt,it){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,q,tt,it),lt.scissor(B.copy(ft).multiplyScalar(k).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(L){lt.setScissorTest(Ct=L)},this.setOpaqueSort=function(L){G=L},this.setTransparentSort=function(L){at=L},this.getClearColor=function(L){return L.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(L=!0,q=!0,tt=!0){let it=0;if(L){let Z=!1;if(N!==null){const yt=N.texture.format;Z=yt===qh||yt===Xh||yt===ac}if(Z){const yt=N.texture.type,Mt=yt===Wi||yt===Ps||yt===So||yt===or||yt===Gh||yt===kh,Gt=It.getClearColor(),kt=It.getClearAlpha(),ne=Gt.r,Jt=Gt.g,Qt=Gt.b;Mt?(v[0]=ne,v[1]=Jt,v[2]=Qt,v[3]=kt,P.clearBufferuiv(P.COLOR,0,v)):(x[0]=ne,x[1]=Jt,x[2]=Qt,x[3]=kt,P.clearBufferiv(P.COLOR,0,x))}else it|=P.COLOR_BUFFER_BIT}q&&(it|=P.DEPTH_BUFFER_BIT),tt&&(it|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),At.dispose(),Vt.dispose(),Dt.dispose(),F.dispose(),U.dispose(),mt.dispose(),ce.dispose(),Ne.dispose(),pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ii),Tt.removeEventListener("sessionend",Oo),Zi.stop()};function ut(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const L=Ht.autoReset,q=bt.enabled,tt=bt.autoUpdate,it=bt.needsUpdate,Z=bt.type;X(),Ht.autoReset=L,bt.enabled=q,bt.autoUpdate=tt,bt.needsUpdate=it,bt.type=Z}function Rt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ee(L){const q=L.target;q.removeEventListener("dispose",ee),ye(q)}function ye(L){Xe(L),Dt.remove(L)}function Xe(L){const q=Dt.get(L).programs;q!==void 0&&(q.forEach(function(tt){pt.releaseProgram(tt)}),L.isShaderMaterial&&pt.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,tt,it,Z,yt){q===null&&(q=re);const Mt=Z.isMesh&&Z.matrixWorld.determinant()<0,Gt=Io(L,q,tt,it,Z);lt.setMaterial(it,Mt);let kt=tt.index,ne=1;if(it.wireframe===!0){if(kt=vt.getWireframeAttribute(tt),kt===void 0)return;ne=2}const Jt=tt.drawRange,Qt=tt.attributes.position;let Me=Jt.start*ne,Be=(Jt.start+Jt.count)*ne;yt!==null&&(Me=Math.max(Me,yt.start*ne),Be=Math.min(Be,(yt.start+yt.count)*ne)),kt!==null?(Me=Math.max(Me,0),Be=Math.min(Be,kt.count)):Qt!=null&&(Me=Math.max(Me,0),Be=Math.min(Be,Qt.count));const Ge=Be-Me;if(Ge<0||Ge===1/0)return;ce.setup(Z,it,Gt,tt,kt);let wn,Ee=te;if(kt!==null&&(wn=nt.get(kt),Ee=zt,Ee.setIndex(wn)),Z.isMesh)it.wireframe===!0?(lt.setLineWidth(it.wireframeLinewidth*Xt()),Ee.setMode(P.LINES)):Ee.setMode(P.TRIANGLES);else if(Z.isLine){let jt=it.linewidth;jt===void 0&&(jt=1),lt.setLineWidth(jt*Xt()),Z.isLineSegments?Ee.setMode(P.LINES):Z.isLineLoop?Ee.setMode(P.LINE_LOOP):Ee.setMode(P.LINE_STRIP)}else Z.isPoints?Ee.setMode(P.POINTS):Z.isSprite&&Ee.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ee.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,rn=Z._multiDrawCounts,Ae=Z._multiDrawCount,zn=kt?nt.get(kt).bytesPerElement:1,cs=Dt.get(it).currentProgram.getUniforms();for(let Bn=0;Bn<Ae;Bn++)cs.setValue(P,"_gl_DrawID",Bn),Ee.render(jt[Bn]/zn,rn[Bn])}else if(Z.isInstancedMesh)Ee.renderInstances(Me,Ge,Z.count);else if(tt.isInstancedBufferGeometry){const jt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,rn=Math.min(tt.instanceCount,jt);Ee.renderInstances(Me,Ge,rn)}else Ee.render(Me,Ge)};function Ke(L,q,tt){L.transparent===!0&&L.side===ki&&L.forceSinglePass===!1?(L.side=Xn,L.needsUpdate=!0,Zn(L,q,tt),L.side=Ls,L.needsUpdate=!0,Zn(L,q,tt),L.side=ki):Zn(L,q,tt)}this.compile=function(L,q,tt=null){tt===null&&(tt=L),S=Vt.get(tt),S.init(q),A.push(S),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),L!==tt&&L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights();const it=new Set;return L.traverse(function(Z){const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Mt=0;Mt<yt.length;Mt++){const Gt=yt[Mt];Ke(Gt,tt,Z),it.add(Gt)}else Ke(yt,tt,Z),it.add(yt)}),A.pop(),S=null,it},this.compileAsync=function(L,q,tt=null){const it=this.compile(L,q,tt);return new Promise(Z=>{function yt(){if(it.forEach(function(Mt){Dt.get(Mt).currentProgram.isReady()&&it.delete(Mt)}),it.size===0){Z(L);return}setTimeout(yt,10)}gt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let xe=null;function Yn(L){xe&&xe(L)}function ii(){Zi.stop()}function Oo(){Zi.start()}const Zi=new Vx;Zi.setAnimationLoop(Yn),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(L){xe=L,Tt.setAnimationLoop(L),L===null?Zi.stop():Zi.start()},Tt.addEventListener("sessionstart",ii),Tt.addEventListener("sessionend",Oo),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(q),q=Tt.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,q,N),S=Vt.get(L,A.length),S.init(q),A.push(S),Nt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Wt.setFromProjectionMatrix(Nt),ct=this.localClippingEnabled,J=oe.init(this.clippingPlanes,ct),M=At.get(L,y.length),M.init(),y.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const yt=E.xr.getDepthSensingMesh();yt!==null&&ma(yt,q,-1/0,E.sortObjects)}ma(L,q,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(G,at),qt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,qt&&It.addToRenderList(M,L),this.info.render.frame++,J===!0&&oe.beginShadows();const tt=S.state.shadowsArray;bt.render(tt,L,q),J===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=M.opaque,Z=M.transmissive;if(S.setupLights(),q.isArrayCamera){const yt=q.cameras;if(Z.length>0)for(let Mt=0,Gt=yt.length;Mt<Gt;Mt++){const kt=yt[Mt];Di(it,Z,L,kt)}qt&&It.render(L);for(let Mt=0,Gt=yt.length;Mt<Gt;Mt++){const kt=yt[Mt];mr(M,L,kt,kt.viewport)}}else Z.length>0&&Di(it,Z,L,q),qt&&It.render(L),mr(M,L,q);N!==null&&(Pt.updateMultisampleRenderTarget(N),Pt.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(E,L,q),ce.resetDefaultState(),H=-1,C=null,A.pop(),A.length>0?(S=A[A.length-1],J===!0&&oe.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?M=y[y.length-1]:M=null};function ma(L,q,tt,it){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)tt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Wt.intersectsSprite(L)){it&&Zt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Nt);const Mt=mt.update(L),Gt=L.material;Gt.visible&&M.push(L,Mt,Gt,tt,Zt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Wt.intersectsObject(L))){const Mt=mt.update(L),Gt=L.material;if(it&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Zt.copy(L.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Zt.copy(Mt.boundingSphere.center)),Zt.applyMatrix4(L.matrixWorld).applyMatrix4(Nt)),Array.isArray(Gt)){const kt=Mt.groups;for(let ne=0,Jt=kt.length;ne<Jt;ne++){const Qt=kt[ne],Me=Gt[Qt.materialIndex];Me&&Me.visible&&M.push(L,Mt,Me,tt,Zt.z,Qt)}}else Gt.visible&&M.push(L,Mt,Gt,tt,Zt.z,null)}}const yt=L.children;for(let Mt=0,Gt=yt.length;Mt<Gt;Mt++)ma(yt[Mt],q,tt,it)}function mr(L,q,tt,it){const Z=L.opaque,yt=L.transmissive,Mt=L.transparent;S.setupLightsView(tt),J===!0&&oe.setGlobalState(E.clippingPlanes,tt),it&&lt.viewport(w.copy(it)),Z.length>0&&ga(Z,q,tt),yt.length>0&&ga(yt,q,tt),Mt.length>0&&ga(Mt,q,tt),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Di(L,q,tt,it){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[it.id]===void 0&&(S.state.transmissionRenderTarget[it.id]=new Xi(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ro:Wi,minFilter:ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const yt=S.state.transmissionRenderTarget[it.id],Mt=it.viewport||w;yt.setSize(Mt.z,Mt.w);const Gt=E.getRenderTarget();E.setRenderTarget(yt),E.getClearColor(W),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),qt&&It.render(tt);const kt=E.toneMapping;E.toneMapping=ss;const ne=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),S.setupLightsView(it),J===!0&&oe.setGlobalState(E.clippingPlanes,it),ga(L,tt,it),Pt.updateMultisampleRenderTarget(yt),Pt.updateRenderTargetMipmap(yt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Qt=0,Me=q.length;Qt<Me;Qt++){const Be=q[Qt],Ge=Be.object,wn=Be.geometry,Ee=Be.material,jt=Be.group;if(Ee.side===ki&&Ge.layers.test(it.layers)){const rn=Ee.side;Ee.side=Xn,Ee.needsUpdate=!0,Li(Ge,tt,it,wn,Ee,jt),Ee.side=rn,Ee.needsUpdate=!0,Jt=!0}}Jt===!0&&(Pt.updateMultisampleRenderTarget(yt),Pt.updateRenderTargetMipmap(yt))}E.setRenderTarget(Gt),E.setClearColor(W,K),ne!==void 0&&(it.viewport=ne),E.toneMapping=kt}function ga(L,q,tt){const it=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,yt=L.length;Z<yt;Z++){const Mt=L[Z],Gt=Mt.object,kt=Mt.geometry,ne=it===null?Mt.material:it,Jt=Mt.group;Gt.layers.test(tt.layers)&&Li(Gt,q,tt,kt,ne,Jt)}}function Li(L,q,tt,it,Z,yt){L.onBeforeRender(E,q,tt,it,Z,yt),L.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Z.transparent===!0&&Z.side===ki&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,E.renderBufferDirect(tt,q,it,Z,L,yt),Z.side=Ls,Z.needsUpdate=!0,E.renderBufferDirect(tt,q,it,Z,L,yt),Z.side=ki):E.renderBufferDirect(tt,q,it,Z,L,yt),L.onAfterRender(E,q,tt,it,Z,yt)}function Zn(L,q,tt){q.isScene!==!0&&(q=re);const it=Dt.get(L),Z=S.state.lights,yt=S.state.shadowsArray,Mt=Z.state.version,Gt=pt.getParameters(L,Z.state,yt,q,tt),kt=pt.getProgramCacheKey(Gt);let ne=it.programs;it.environment=L.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(L.isMeshStandardMaterial?U:F).get(L.envMap||it.environment),it.envMapRotation=it.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,ne===void 0&&(L.addEventListener("dispose",ee),ne=new Map,it.programs=ne);let Jt=ne.get(kt);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===Mt)return We(L,Gt),Jt}else Gt.uniforms=pt.getUniforms(L),L.onBeforeCompile(Gt,E),Jt=pt.acquireProgram(Gt,kt),ne.set(kt,Jt),it.uniforms=Gt.uniforms;const Qt=it.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qt.clippingPlanes=oe.uniform),We(L,Gt),it.needsLights=gc(L),it.lightsStateVersion=Mt,it.needsLights&&(Qt.ambientLightColor.value=Z.state.ambient,Qt.lightProbe.value=Z.state.probe,Qt.directionalLights.value=Z.state.directional,Qt.directionalLightShadows.value=Z.state.directionalShadow,Qt.spotLights.value=Z.state.spot,Qt.spotLightShadows.value=Z.state.spotShadow,Qt.rectAreaLights.value=Z.state.rectArea,Qt.ltc_1.value=Z.state.rectAreaLTC1,Qt.ltc_2.value=Z.state.rectAreaLTC2,Qt.pointLights.value=Z.state.point,Qt.pointLightShadows.value=Z.state.pointShadow,Qt.hemisphereLights.value=Z.state.hemi,Qt.directionalShadowMap.value=Z.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qt.spotShadowMap.value=Z.state.spotShadowMap,Qt.spotLightMatrix.value=Z.state.spotLightMatrix,Qt.spotLightMap.value=Z.state.spotLightMap,Qt.pointShadowMap.value=Z.state.pointShadowMap,Qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function va(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=Ju.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function We(L,q){const tt=Dt.get(L);tt.outputColorSpace=q.outputColorSpace,tt.batching=q.batching,tt.batchingColor=q.batchingColor,tt.instancing=q.instancing,tt.instancingColor=q.instancingColor,tt.instancingMorph=q.instancingMorph,tt.skinning=q.skinning,tt.morphTargets=q.morphTargets,tt.morphNormals=q.morphNormals,tt.morphColors=q.morphColors,tt.morphTargetsCount=q.morphTargetsCount,tt.numClippingPlanes=q.numClippingPlanes,tt.numIntersection=q.numClipIntersection,tt.vertexAlphas=q.vertexAlphas,tt.vertexTangents=q.vertexTangents,tt.toneMapping=q.toneMapping}function Io(L,q,tt,it,Z){q.isScene!==!0&&(q=re),Pt.resetTextureUnits();const yt=q.fog,Mt=it.isMeshStandardMaterial?q.environment:null,Gt=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:os,kt=(it.isMeshStandardMaterial?U:F).get(it.envMap||Mt),ne=it.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Jt=!!tt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Qt=!!tt.morphAttributes.position,Me=!!tt.morphAttributes.normal,Be=!!tt.morphAttributes.color;let Ge=ss;it.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ge=E.toneMapping);const wn=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ee=wn!==void 0?wn.length:0,jt=Dt.get(it),rn=S.state.lights;if(J===!0&&(ct===!0||L!==C)){const Fn=L===C&&it.id===H;oe.setState(it,L,Fn)}let Ae=!1;it.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==rn.state.version||jt.outputColorSpace!==Gt||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==kt||it.fog===!0&&jt.fog!==yt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==oe.numPlanes||jt.numIntersection!==oe.numIntersection)||jt.vertexAlphas!==ne||jt.vertexTangents!==Jt||jt.morphTargets!==Qt||jt.morphNormals!==Me||jt.morphColors!==Be||jt.toneMapping!==Ge||jt.morphTargetsCount!==Ee)&&(Ae=!0):(Ae=!0,jt.__version=it.version);let zn=jt.currentProgram;Ae===!0&&(zn=Zn(it,q,Z));let cs=!1,Bn=!1,gr=!1;const qe=zn.getUniforms(),Ni=jt.uniforms;if(lt.useProgram(zn.program)&&(cs=!0,Bn=!0,gr=!0),it.id!==H&&(H=it.id,Bn=!0),cs||C!==L){qe.setValue(P,"projectionMatrix",L.projectionMatrix),qe.setValue(P,"viewMatrix",L.matrixWorldInverse);const Fn=qe.map.cameraPosition;Fn!==void 0&&Fn.setValue(P,Ut.setFromMatrixPosition(L.matrixWorld)),wt.logarithmicDepthBuffer&&qe.setValue(P,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&qe.setValue(P,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,Bn=!0,gr=!0)}if(Z.isSkinnedMesh){qe.setOptional(P,Z,"bindMatrix"),qe.setOptional(P,Z,"bindMatrixInverse");const Fn=Z.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),qe.setValue(P,"boneTexture",Fn.boneTexture,Pt))}Z.isBatchedMesh&&(qe.setOptional(P,Z,"batchingTexture"),qe.setValue(P,"batchingTexture",Z._matricesTexture,Pt),qe.setOptional(P,Z,"batchingIdTexture"),qe.setValue(P,"batchingIdTexture",Z._indirectTexture,Pt),qe.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&qe.setValue(P,"batchingColorTexture",Z._colorsTexture,Pt));const _a=tt.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&ge.update(Z,tt,zn),(Bn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,qe.setValue(P,"receiveShadow",Z.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Ni.envMap.value=kt,Ni.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(Ni.envMapIntensity.value=q.environmentIntensity),Bn&&(qe.setValue(P,"toneMappingExposure",E.toneMappingExposure),jt.needsLights&&zo(Ni,gr),yt&&it.fog===!0&&Kt.refreshFogUniforms(Ni,yt),Kt.refreshMaterialUniforms(Ni,it,k,I,S.state.transmissionRenderTarget[L.id]),Ju.upload(P,va(jt),Ni,Pt)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Ju.upload(P,va(jt),Ni,Pt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&qe.setValue(P,"center",Z.center),qe.setValue(P,"modelViewMatrix",Z.modelViewMatrix),qe.setValue(P,"normalMatrix",Z.normalMatrix),qe.setValue(P,"modelMatrix",Z.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Fn=it.uniformsGroups;for(let vr=0,vc=Fn.length;vr<vc;vr++){const Bo=Fn[vr];Ne.update(Bo,zn),Ne.bind(Bo,zn)}}return zn}function zo(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function gc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,q,tt){Dt.get(L.texture).__webglTexture=q,Dt.get(L.depthTexture).__webglTexture=tt;const it=Dt.get(L);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=tt===void 0,it.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){const tt=Dt.get(L);tt.__webglFramebuffer=q,tt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,tt=0){N=L,z=q,R=tt;let it=!0,Z=null,yt=!1,Mt=!1;if(L){const kt=Dt.get(L);kt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(P.FRAMEBUFFER,null),it=!1):kt.__webglFramebuffer===void 0?Pt.setupRenderTarget(L):kt.__hasExternalTextures&&Pt.rebindTextures(L,Dt.get(L.texture).__webglTexture,Dt.get(L.depthTexture).__webglTexture);const ne=L.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Mt=!0);const Jt=Dt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Jt[q])?Z=Jt[q][tt]:Z=Jt[q],yt=!0):L.samples>0&&Pt.useMultisampledRTT(L)===!1?Z=Dt.get(L).__webglMultisampledFramebuffer:Array.isArray(Jt)?Z=Jt[tt]:Z=Jt,w.copy(L.viewport),B.copy(L.scissor),Q=L.scissorTest}else w.copy(rt).multiplyScalar(k).floor(),B.copy(ft).multiplyScalar(k).floor(),Q=Ct;if(lt.bindFramebuffer(P.FRAMEBUFFER,Z)&&it&&lt.drawBuffers(L,Z),lt.viewport(w),lt.scissor(B),lt.setScissorTest(Q),yt){const kt=Dt.get(L.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,kt.__webglTexture,tt)}else if(Mt){const kt=Dt.get(L.texture),ne=q||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,tt||0,ne)}H=-1},this.readRenderTargetPixels=function(L,q,tt,it,Z,yt,Mt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Mt!==void 0&&(Gt=Gt[Mt]),Gt){lt.bindFramebuffer(P.FRAMEBUFFER,Gt);try{const kt=L.texture,ne=kt.format,Jt=kt.type;if(!wt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-it&&tt>=0&&tt<=L.height-Z&&P.readPixels(q,tt,it,Z,se.convert(ne),se.convert(Jt),yt)}finally{const kt=N!==null?Dt.get(N).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(L,q,tt,it,Z,yt,Mt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Mt!==void 0&&(Gt=Gt[Mt]),Gt){lt.bindFramebuffer(P.FRAMEBUFFER,Gt);try{const kt=L.texture,ne=kt.format,Jt=kt.type;if(!wt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=L.width-it&&tt>=0&&tt<=L.height-Z){const Qt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qt),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(q,tt,it,Z,se.convert(ne),se.convert(Jt),0),P.flush();const Me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await pE(P,Me,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Qt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt)}finally{P.deleteBuffer(Qt),P.deleteSync(Me)}return yt}}finally{const kt=N!==null?Dt.get(N).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(L,q=null,tt=0){L.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,L=arguments[1]);const it=Math.pow(2,-tt),Z=Math.floor(L.image.width*it),yt=Math.floor(L.image.height*it),Mt=q!==null?q.x:0,Gt=q!==null?q.y:0;Pt.setTexture2D(L,0),P.copyTexSubImage2D(P.TEXTURE_2D,tt,0,0,Mt,Gt,Z,yt),lt.unbindTexture()},this.copyTextureToTexture=function(L,q,tt=null,it=null,Z=0){L.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,L=arguments[1],q=arguments[2],Z=arguments[3]||0,tt=null);let yt,Mt,Gt,kt,ne,Jt;tt!==null?(yt=tt.max.x-tt.min.x,Mt=tt.max.y-tt.min.y,Gt=tt.min.x,kt=tt.min.y):(yt=L.image.width,Mt=L.image.height,Gt=0,kt=0),it!==null?(ne=it.x,Jt=it.y):(ne=0,Jt=0);const Qt=se.convert(q.format),Me=se.convert(q.type);Pt.setTexture2D(q,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const Be=P.getParameter(P.UNPACK_ROW_LENGTH),Ge=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ee=P.getParameter(P.UNPACK_SKIP_ROWS),jt=P.getParameter(P.UNPACK_SKIP_IMAGES),rn=L.isCompressedTexture?L.mipmaps[Z]:L.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,rn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,kt),L.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Z,ne,Jt,yt,Mt,Qt,Me,rn.data):L.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Z,ne,Jt,rn.width,rn.height,Qt,rn.data):P.texSubImage2D(P.TEXTURE_2D,Z,ne,Jt,yt,Mt,Qt,Me,rn),P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ge),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ee),P.pixelStorei(P.UNPACK_SKIP_IMAGES,jt),Z===0&&q.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),lt.unbindTexture()},this.copyTextureToTexture3D=function(L,q,tt=null,it=null,Z=0){L.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,it=arguments[1]||null,L=arguments[2],q=arguments[3],Z=arguments[4]||0);let yt,Mt,Gt,kt,ne,Jt,Qt,Me,Be;const Ge=L.isCompressedTexture?L.mipmaps[Z]:L.image;tt!==null?(yt=tt.max.x-tt.min.x,Mt=tt.max.y-tt.min.y,Gt=tt.max.z-tt.min.z,kt=tt.min.x,ne=tt.min.y,Jt=tt.min.z):(yt=Ge.width,Mt=Ge.height,Gt=Ge.depth,kt=0,ne=0,Jt=0),it!==null?(Qt=it.x,Me=it.y,Be=it.z):(Qt=0,Me=0,Be=0);const wn=se.convert(q.format),Ee=se.convert(q.type);let jt;if(q.isData3DTexture)Pt.setTexture3D(q,0),jt=P.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)Pt.setTexture2DArray(q,0),jt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const rn=P.getParameter(P.UNPACK_ROW_LENGTH),Ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),zn=P.getParameter(P.UNPACK_SKIP_PIXELS),cs=P.getParameter(P.UNPACK_SKIP_ROWS),Bn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,kt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt),L.isDataTexture||L.isData3DTexture?P.texSubImage3D(jt,Z,Qt,Me,Be,yt,Mt,Gt,wn,Ee,Ge.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(jt,Z,Qt,Me,Be,yt,Mt,Gt,wn,Ge.data):P.texSubImage3D(jt,Z,Qt,Me,Be,yt,Mt,Gt,wn,Ee,Ge),P.pixelStorei(P.UNPACK_ROW_LENGTH,rn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zn),P.pixelStorei(P.UNPACK_SKIP_ROWS,cs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bn),Z===0&&q.generateMipmaps&&P.generateMipmap(jt),lt.unbindTexture()},this.initRenderTarget=function(L){Dt.get(L).__webglFramebuffer===void 0&&Pt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Pt.setTextureCube(L,0):L.isData3DTexture?Pt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Pt.setTexture2DArray(L,0):Pt.setTexture2D(L,0),lt.unbindTexture()},this.resetState=function(){z=0,R=0,N=null,lt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zh?"display-p3":"srgb",e.unpackColorSpace=we.workingColorSpace===rc?"display-p3":"srgb"}}class Qh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $h{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new $h(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hm extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return yo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new O;class vi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyMatrix4(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyNormalMatrix(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.transformDirection(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),o=fe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vm extends In{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ao;const dl=new O,ro=new O,oo=new O,lo=new ht,pl=new ht,jx=new ie,xu=new O,ml=new O,Su=new O,g_=new ht,dp=new ht,v_=new ht;class Kx extends Ce{constructor(t=new Vm){if(super(),this.isSprite=!0,this.type="Sprite",ao===void 0){ao=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tf(e,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new vi(n,3,0,!1)),ao.setAttribute("uv",new vi(n,2,3,!1))}this.geometry=ao,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),jx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),oo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-oo.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const l=this.center;Mu(xu.set(-.5,-.5,0),oo,l,ro,i,o),Mu(ml.set(.5,-.5,0),oo,l,ro,i,o),Mu(Su.set(.5,.5,0),oo,l,ro,i,o),g_.set(0,0),dp.set(1,0),v_.set(1,1);let c=t.ray.intersectTriangle(xu,ml,Su,!1,dl);if(c===null&&(Mu(ml.set(-.5,.5,0),oo,l,ro,i,o),dp.set(0,1),c=t.ray.intersectTriangle(xu,Su,ml,!1,dl),c===null))return;const h=t.ray.origin.distanceTo(dl);h<t.near||h>t.far||e.push({distance:h,point:dl.clone(),uv:gi.getInterpolation(dl,xu,ml,Su,g_,dp,v_,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mu(s,t,e,n,i,o){lo.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(pl.x=o*lo.x-i*lo.y,pl.y=i*lo.x+o*lo.y):pl.copy(lo),s.copy(t),s.x+=pl.x,s.y+=pl.y,s.applyMatrix4(jx)}const bu=new O,__=new O;class Jx extends Ce{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const o=e[n];this.addLevel(o.object.clone(),o.distance,o.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let o;for(o=0;o<i.length&&!(e<i[o].distance);o++);return i.splice(o,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let o=e[n].distance;if(e[n].object.visible&&(o-=o*e[n].hysteresis),t<o)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){bu.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(bu);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){bu.setFromMatrixPosition(t.matrixWorld),__.setFromMatrixPosition(this.matrixWorld);const n=bu.distanceTo(__)/t.zoom;e[0].object.visible=!0;let i,o;for(i=1,o=e.length;i<o;i++){let l=e[i].distance;if(e[i].object.visible&&(l-=l*e[i].hysteresis),n>=l)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<o;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,o=n.length;i<o;i++){const l=n[i];e.object.levels.push({object:l.object.uuid,distance:l.distance,hysteresis:l.hysteresis})}return e}}const y_=new O,x_=new Se,S_=new Se,w2=new O,M_=new ie,Eu=new O,pp=new Sn,b_=new ie,mp=new Uo;class Qx extends an{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$p,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Eu),this.boundingBox.expandByPoint(Eu)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Eu),this.boundingSphere.expandByPoint(Eu)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pp.copy(this.boundingSphere),pp.applyMatrix4(i),t.ray.intersectsSphere(pp)!==!1&&(b_.copy(i).invert(),mp.copy(t.ray).applyMatrix4(b_),!(this.boundingBox!==null&&mp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,mp)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===$p?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;x_.fromBufferAttribute(i.attributes.skinIndex,t),S_.fromBufferAttribute(i.attributes.skinWeight,t),y_.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const l=S_.getComponent(o);if(l!==0){const c=x_.getComponent(o);M_.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),e.addScaledVector(w2.copy(y_).applyMatrix4(M_),l)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Gm extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}}class as extends nn{constructor(t=null,e=1,n=1,i,o,l,c,h,f=yn,p=yn,m,g){super(null,l,c,h,f,p,i,o,m,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const E_=new ie,C2=new ie;class ef{constructor(t=[],e=[]){this.uuid=_i(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,l=t.length;o<l;o++){const c=t[o]?t[o].matrixWorld:C2;E_.multiplyMatrices(c,e[o]),E_.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ef(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new as(e,t,t,On,ti);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const o=t.bones[n];let l=e[o];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),l=new Gm),this.bones.push(l),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,o=e.length;i<o;i++){const l=e[i];t.bones.push(l.uuid);const c=n[i];t.boneInverses.push(c.toArray())}return t}}class Ao extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const co=new ie,A_=new ie,Au=[],T_=new xn,R2=new ie,gl=new an,vl=new Sn;class $x extends an{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,R2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),T_.copy(t.boundingBox).applyMatrix4(co),this.boundingBox.union(T_)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,co),vl.copy(t.boundingSphere).applyMatrix4(co),this.boundingSphere.union(vl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,l=t*o+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(gl.geometry=this.geometry,gl.material=this.material,gl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(n),t.ray.intersectsSphere(vl)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,co),A_.multiplyMatrices(n,co),gl.matrixWorld=A_,gl.raycast(t,Au);for(let l=0,c=Au.length;l<c;l++){const h=Au[l];h.instanceId=o,h.object=this,e.push(h)}Au.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(i*this.count),i,this.count,Wh,ti));const o=this.morphTexture.source.data.data;let l=0;for(let f=0;f<n.length;f++)l+=n[f];const c=this.geometry.morphTargetsRelative?1:1-l,h=i*t;o[h]=c,o.set(n,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function U2(s,t){return s.z-t.z}function D2(s,t){return t.z-s.z}class L2{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const i=this.pool,o=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const l=i[this.index];o.push(l),this.index++,l.start=t.start,l.count=t.count,l.z=e,l.index=n}reset(){this.list.length=0,this.index=0}}const sa=new ie,gp=new ie,N2=new ie,P2=new Bt(1,1,1),w_=new ie,vp=new lc,Tu=new xn,ka=new Sn,_l=new O,C_=new O,O2=new O,_p=new L2,Pn=new an,wu=[];function I2(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let o=0;o<i;o++)for(let l=0;l<n;l++)t.setComponent(o+e,l,s.getComponent(o,l))}else t.array.set(s.array,e*n);t.needsUpdate=!0}class tS extends an{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,i){super(new pe,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new as(e,t,t,On,ti);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new as(e,t,t,ac,Ps);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxIndexCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new as(e,t,t,On,ti);n.colorSpace=we.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in t.attributes){const l=t.getAttribute(o),{array:c,itemSize:h,normalized:f}=l,p=new c.constructor(n*h),m=new ze(p,h,f);e.setAttribute(o,m)}if(t.getIndex()!==null){const o=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new ze(o,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),o=e.getAttribute(n);if(i.itemSize!==o.itemSize||i.normalized!==o.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this._geometryCount,e=this.boundingBox,n=this._drawInfo;e.makeEmpty();for(let i=0;i<t;i++){if(n[i].active===!1)continue;const o=n[i].geometryIndex;this.getMatrixAt(i,sa),this.getBoundingBoxAt(o,Tu).applyMatrix4(sa),e.union(Tu)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const o=e[n].geometryIndex;this.getMatrixAt(n,sa),this.getBoundingSphereAt(o,ka).applyMatrix4(sa),t.union(ka)}}addInstance(t){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:t});const e=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;N2.toArray(i,e*16),n.needsUpdate=!0;const o=this._colorsTexture;return o&&(P2.toArray(o.image.data,e*4),o.needsUpdate=!0),e}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let o=null;const l=this._reservedRanges,c=this._drawRanges,h=this._bounds;this._geometryCount!==0&&(o=l[l.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,o===null?i.vertexStart=0:i.vertexStart=o.vertexStart+o.vertexCount;const f=t.getIndex(),p=f!==null;if(p&&(n===-1?i.indexCount=f.count:i.indexCount=n,o===null?i.indexStart=0:i.indexStart=o.indexStart+o.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const m=this._geometryCount;return this._geometryCount++,l.push(i),c.push({start:p?i.indexStart:i.vertexStart,count:-1}),h.push({boxInitialized:!1,box:new xn,sphereInitialized:!1,sphere:new Sn}),this.setGeometryAt(m,t),m}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,o=n.getIndex(),l=e.getIndex(),c=this._reservedRanges[t];if(i&&l.count>c.indexCount||e.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const h=c.vertexStart,f=c.vertexCount;for(const v in n.attributes){const x=e.getAttribute(v),M=n.getAttribute(v);I2(x,M,h);const S=x.itemSize;for(let y=x.count,A=f;y<A;y++){const E=h+y;for(let T=0;T<S;T++)M.setComponent(E,T,0)}M.needsUpdate=!0,M.addUpdateRange(h*S,f*S)}if(i){const v=c.indexStart;for(let x=0;x<l.count;x++)o.setX(v+x,h+l.getX(x));for(let x=l.count,M=c.indexCount;x<M;x++)o.setX(v+x,h);o.needsUpdate=!0,o.addUpdateRange(v,c.indexCount)}const p=this._bounds[t];e.boundingBox!==null?(p.box.copy(e.boundingBox),p.boxInitialized=!0):p.boxInitialized=!1,e.boundingSphere!==null?(p.sphere.copy(e.boundingSphere),p.sphereInitialized=!0):p.sphereInitialized=!1;const m=this._drawRanges[t],g=e.getAttribute("position");return m.count=i?l.count:g.count,this._visibilityChanged=!0,t}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.box,o=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const l=o.index,c=o.attributes.position,h=this._drawRanges[t];for(let f=h.start,p=h.start+h.count;f<p;f++){let m=f;l&&(m=l.getX(m)),i.expandByPoint(_l.fromBufferAttribute(c,m))}n.boxInitialized=!0}return e.copy(i),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.sphere,o=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(t,Tu),Tu.getCenter(i.center);const l=o.index,c=o.attributes.position,h=this._drawRanges[t];let f=0;for(let p=h.start,m=h.start+h.count;p<m;p++){let g=p;l&&(g=l.getX(g)),_l.fromBufferAttribute(c,g),f=Math.max(f,i.center.distanceToSquared(_l))}i.radius=Math.sqrt(f),n.sphereInitialized=!0}return e.copy(i),e}setMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture,o=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(o,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,o=this._drawInfo;return t>=o.length||o[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,i=this._drawInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}raycast(t,e){const n=this._drawInfo,i=this._drawRanges,o=this.matrixWorld,l=this.geometry;Pn.material=this.material,Pn.geometry.index=l.index,Pn.geometry.attributes=l.attributes,Pn.geometry.boundingBox===null&&(Pn.geometry.boundingBox=new xn),Pn.geometry.boundingSphere===null&&(Pn.geometry.boundingSphere=new Sn);for(let c=0,h=n.length;c<h;c++){if(!n[c].visible||!n[c].active)continue;const f=n[c].geometryIndex,p=i[f];Pn.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(c,Pn.matrixWorld).premultiply(o),this.getBoundingBoxAt(f,Pn.geometry.boundingBox),this.getBoundingSphereAt(f,Pn.geometry.boundingSphere),Pn.raycast(t,wu);for(let m=0,g=wu.length;m<g;m++){const v=wu[m];v.object=this,v.batchId=c,e.push(v)}wu.length=0}Pn.material=null,Pn.geometry.index=null,Pn.geometry.attributes={},Pn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,o){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const l=i.getIndex(),c=l===null?1:l.array.BYTES_PER_ELEMENT,h=this._drawInfo,f=this._multiDrawStarts,p=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled,v=this._indirectTexture,x=v.image.data;g&&(w_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vp.setFromProjectionMatrix(w_,t.coordinateSystem));let M=0;if(this.sortObjects){gp.copy(this.matrixWorld).invert(),_l.setFromMatrixPosition(n.matrixWorld).applyMatrix4(gp),C_.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(gp);for(let A=0,E=h.length;A<E;A++)if(h[A].visible&&h[A].active){const T=h[A].geometryIndex;this.getMatrixAt(A,sa),this.getBoundingSphereAt(T,ka).applyMatrix4(sa);let z=!1;if(g&&(z=!vp.intersectsSphere(ka)),!z){const R=O2.subVectors(ka.center,_l).dot(C_);_p.push(m[T],R,A)}}const S=_p.list,y=this.customSort;y===null?S.sort(o.transparent?D2:U2):y.call(this,S,n);for(let A=0,E=S.length;A<E;A++){const T=S[A];f[M]=T.start*c,p[M]=T.count,x[M]=T.index,M++}_p.reset()}else for(let S=0,y=h.length;S<y;S++)if(h[S].visible&&h[S].active){const A=h[S].geometryIndex;let E=!1;if(g&&(this.getMatrixAt(S,sa),this.getBoundingSphereAt(A,ka).applyMatrix4(sa),E=!vp.intersectsSphere(ka)),!E){const T=m[A];f[M]=T.start*c,p[M]=T.count,x[M]=S,M++}}v.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,o,l){this.onBeforeRender(t,null,i,o,l)}}class qn extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Uh=new O,Dh=new O,R_=new ie,yl=new Uo,Cu=new Sn,yp=new O,U_=new O;let ua=class extends Ce{constructor(t=new pe,e=new qn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Uh.fromBufferAttribute(e,i-1),Dh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Uh.distanceTo(Dh);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cu.copy(n.boundingSphere),Cu.applyMatrix4(i),Cu.radius+=o,t.ray.intersectsSphere(Cu)===!1)return;R_.copy(i).invert(),yl.copy(t.ray).applyMatrix4(R_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const v=Math.max(0,l.start),x=Math.min(p.count,l.start+l.count);for(let M=v,S=x-1;M<S;M+=f){const y=p.getX(M),A=p.getX(M+1),E=Ru(this,t,yl,h,y,A);E&&e.push(E)}if(this.isLineLoop){const M=p.getX(x-1),S=p.getX(v),y=Ru(this,t,yl,h,M,S);y&&e.push(y)}}else{const v=Math.max(0,l.start),x=Math.min(g.count,l.start+l.count);for(let M=v,S=x-1;M<S;M+=f){const y=Ru(this,t,yl,h,M,M+1);y&&e.push(y)}if(this.isLineLoop){const M=Ru(this,t,yl,h,x-1,v);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const c=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}};function Ru(s,t,e,n,i,o){const l=s.geometry.attributes.position;if(Uh.fromBufferAttribute(l,i),Dh.fromBufferAttribute(l,o),e.distanceSqToSegment(Uh,Dh,yp,U_)>n)return;yp.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(yp);if(!(h<t.near||h>t.far))return{distance:h,point:U_.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const D_=new O,L_=new O;class ls extends ua{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)D_.fromBufferAttribute(e,i),L_.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+D_.distanceTo(L_);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eS extends ua{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class km extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const N_=new ie,am=new Uo,Uu=new Sn,Du=new O;class nS extends Ce{constructor(t=new pe,e=new km){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uu.copy(n.boundingSphere),Uu.applyMatrix4(i),Uu.radius+=o,t.ray.intersectsSphere(Uu)===!1)return;N_.copy(i).invert(),am.copy(t.ray).applyMatrix4(N_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,l.start),v=Math.min(f.count,l.start+l.count);for(let x=g,M=v;x<M;x++){const S=f.getX(x);Du.fromBufferAttribute(m,S),P_(Du,S,h,i,t,e,this)}}else{const g=Math.max(0,l.start),v=Math.min(m.count,l.start+l.count);for(let x=g,M=v;x<M;x++)Du.fromBufferAttribute(m,x),P_(Du,x,h,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const c=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function P_(s,t,e,n,i,o,l){const c=am.distanceSqToPoint(s);if(c<e){const h=new O;am.closestPointToPoint(s,h),h.applyMatrix4(n);const f=i.ray.origin.distanceTo(h);if(f<i.near||f>i.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:t,face:null,object:l})}}class z2 extends nn{constructor(t,e,n,i,o,l,c,h,f){super(t,e,n,i,o,l,c,h,f),this.isVideoTexture=!0,this.minFilter=l!==void 0?l:hn,this.magFilter=o!==void 0?o:hn,this.generateMipmaps=!1;const p=this;function m(){p.needsUpdate=!0,t.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class B2 extends nn{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=yn,this.minFilter=yn,this.generateMipmaps=!1,this.needsUpdate=!0}}class nf extends nn{constructor(t,e,n,i,o,l,c,h,f,p,m,g){super(null,l,c,h,f,p,i,o,m,g),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class F2 extends nf{constructor(t,e,n,i,o,l){super(t,e,n,o,l),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ri,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class H2 extends nf{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Ns),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class V2 extends nn{constructor(t,e,n,i,o,l,c,h,f){super(t,e,n,i,o,l,c,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let l=1;l<=t;l++)n=this.getPoint(l/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let l;e?l=e:l=t*n[o-1];let c=0,h=o-1,f;for(;c<=h;)if(i=Math.floor(c+(h-c)/2),f=n[i]-l,f<0)c=i+1;else if(f>0)h=i-1;else{h=i;break}if(i=h,n[i]===l)return i/(o-1);const p=n[i],g=n[i+1]-p,v=(l-p)/g;return(i+v)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const l=this.getPoint(i),c=this.getPoint(o),h=e||(l.isVector2?new ht:new O);return h.copy(c).sub(l).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],o=[],l=[],c=new O,h=new ie;for(let v=0;v<=t;v++){const x=v/t;i[v]=this.getTangentAt(x,new O)}o[0]=new O,l[0]=new O;let f=Number.MAX_VALUE;const p=Math.abs(i[0].x),m=Math.abs(i[0].y),g=Math.abs(i[0].z);p<=f&&(f=p,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),g<=f&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],c),l[0].crossVectors(i[0],o[0]);for(let v=1;v<=t;v++){if(o[v]=o[v-1].clone(),l[v]=l[v-1].clone(),c.crossVectors(i[v-1],i[v]),c.length()>Number.EPSILON){c.normalize();const x=Math.acos(en(i[v-1].dot(i[v]),-1,1));o[v].applyMatrix4(h.makeRotationAxis(c,x))}l[v].crossVectors(i[v],o[v])}if(e===!0){let v=Math.acos(en(o[0].dot(o[t]),-1,1));v/=t,i[0].dot(c.crossVectors(o[0],o[t]))>0&&(v=-v);for(let x=1;x<=t;x++)o[x].applyMatrix4(h.makeRotationAxis(i[x],v*x)),l[x].crossVectors(i[x],o[x])}return{tangents:i,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sf extends qi{constructor(t=0,e=0,n=1,i=1,o=0,l=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=c,this.aRotation=h}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(l?o=0:o=i),this.aClockwise===!0&&!l&&(o===i?o=-i:o=o-i);const c=this.aStartAngle+t*o;let h=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=h-this.aX,v=f-this.aY;h=g*p-v*m+this.aX,f=g*m+v*p+this.aY}return n.set(h,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class iS extends sf{constructor(t,e,n,i,o,l){super(t,e,n,n,i,o,l),this.isArcCurve=!0,this.type="ArcCurve"}}function Wm(){let s=0,t=0,e=0,n=0;function i(o,l,c,h){s=o,t=c,e=-3*o+3*l-2*c-h,n=2*o-2*l+c+h}return{initCatmullRom:function(o,l,c,h,f){i(l,c,f*(c-o),f*(h-l))},initNonuniformCatmullRom:function(o,l,c,h,f,p,m){let g=(l-o)/f-(c-o)/(f+p)+(c-l)/p,v=(c-l)/p-(h-l)/(p+m)+(h-c)/m;g*=p,v*=p,i(l,c,g,v)},calc:function(o){const l=o*o,c=l*o;return s+t*o+e*l+n*c}}}const Lu=new O,xp=new Wm,Sp=new Wm,Mp=new Wm;class sS extends qi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,o=i.length,l=(o-(this.closed?0:1))*t;let c=Math.floor(l),h=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:h===0&&c===o-1&&(c=o-2,h=1);let f,p;this.closed||c>0?f=i[(c-1)%o]:(Lu.subVectors(i[0],i[1]).add(i[0]),f=Lu);const m=i[c%o],g=i[(c+1)%o];if(this.closed||c+2<o?p=i[(c+2)%o]:(Lu.subVectors(i[o-1],i[o-2]).add(i[o-1]),p=Lu),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let x=Math.pow(f.distanceToSquared(m),v),M=Math.pow(m.distanceToSquared(g),v),S=Math.pow(g.distanceToSquared(p),v);M<1e-4&&(M=1),x<1e-4&&(x=M),S<1e-4&&(S=M),xp.initNonuniformCatmullRom(f.x,m.x,g.x,p.x,x,M,S),Sp.initNonuniformCatmullRom(f.y,m.y,g.y,p.y,x,M,S),Mp.initNonuniformCatmullRom(f.z,m.z,g.z,p.z,x,M,S)}else this.curveType==="catmullrom"&&(xp.initCatmullRom(f.x,m.x,g.x,p.x,this.tension),Sp.initCatmullRom(f.y,m.y,g.y,p.y,this.tension),Mp.initCatmullRom(f.z,m.z,g.z,p.z,this.tension));return n.set(xp.calc(h),Sp.calc(h),Mp.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function O_(s,t,e,n,i){const o=(n-t)*.5,l=(i-e)*.5,c=s*s,h=s*c;return(2*e-2*n+o+l)*h+(-3*e+3*n-2*o-l)*c+o*s+e}function G2(s,t){const e=1-s;return e*e*t}function k2(s,t){return 2*(1-s)*s*t}function W2(s,t){return s*s*t}function Dl(s,t,e,n){return G2(s,t)+k2(s,e)+W2(s,n)}function X2(s,t){const e=1-s;return e*e*e*t}function q2(s,t){const e=1-s;return 3*e*e*s*t}function Y2(s,t){return 3*(1-s)*s*s*t}function Z2(s,t){return s*s*s*t}function Ll(s,t,e,n,i){return X2(s,t)+q2(s,e)+Y2(s,n)+Z2(s,i)}class Xm extends qi{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,o=this.v1,l=this.v2,c=this.v3;return n.set(Ll(t,i.x,o.x,l.x,c.x),Ll(t,i.y,o.y,l.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class aS extends qi{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,o=this.v1,l=this.v2,c=this.v3;return n.set(Ll(t,i.x,o.x,l.x,c.x),Ll(t,i.y,o.y,l.y,c.y),Ll(t,i.z,o.z,l.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qm extends qi{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rS extends qi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends qi{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,o=this.v1,l=this.v2;return n.set(Dl(t,i.x,o.x,l.x),Dl(t,i.y,o.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zm extends qi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,o=this.v1,l=this.v2;return n.set(Dl(t,i.x,o.x,l.x),Dl(t,i.y,o.y,l.y),Dl(t,i.z,o.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jm extends qi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,o=(i.length-1)*t,l=Math.floor(o),c=o-l,h=i[l===0?l:l-1],f=i[l],p=i[l>i.length-2?i.length-1:l+1],m=i[l>i.length-3?i.length-1:l+2];return n.set(O_(c,h.x,f.x,p.x,m.x),O_(c,h.y,f.y,p.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Lh=Object.freeze({__proto__:null,ArcCurve:iS,CatmullRomCurve3:sS,CubicBezierCurve:Xm,CubicBezierCurve3:aS,EllipseCurve:sf,LineCurve:qm,LineCurve3:rS,QuadraticBezierCurve:Ym,QuadraticBezierCurve3:Zm,SplineCurve:jm});class oS extends qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const l=i[o]-n,c=this.curves[o],h=c.getLength(),f=h===0?0:1-l/h;return c.getPointAt(f,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const l=o[i],c=l.isEllipseCurve?t*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?t*l.points.length:t,h=l.getPoints(c);for(let f=0;f<h.length;f++){const p=h[f];n&&n.equals(p)||(e.push(p),n=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Lh[i.type]().fromJSON(i))}return this}}class Zl extends oS{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qm(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Ym(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,l){const c=new Xm(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(o,l));return this.curves.push(c),this.currentPoint.set(o,l),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new jm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+c,e+h,n,i,o,l),this}absarc(t,e,n,i,o,l){return this.absellipse(t,e,n,n,i,o,l),this}ellipse(t,e,n,i,o,l,c,h){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+f,e+p,n,i,o,l,c,h),this}absellipse(t,e,n,i,o,l,c,h){const f=new sf(t,e,n,i,o,l,c,h);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const p=f.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cc extends pe{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=en(i,0,Math.PI*2);const o=[],l=[],c=[],h=[],f=[],p=1/e,m=new O,g=new ht,v=new O,x=new O,M=new O;let S=0,y=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:S=t[A+1].x-t[A].x,y=t[A+1].y-t[A].y,v.x=y*1,v.y=-S,v.z=y*0,M.copy(v),v.normalize(),h.push(v.x,v.y,v.z);break;case t.length-1:h.push(M.x,M.y,M.z);break;default:S=t[A+1].x-t[A].x,y=t[A+1].y-t[A].y,v.x=y*1,v.y=-S,v.z=y*0,x.copy(v),v.x+=M.x,v.y+=M.y,v.z+=M.z,v.normalize(),h.push(v.x,v.y,v.z),M.copy(x)}for(let A=0;A<=e;A++){const E=n+A*p*i,T=Math.sin(E),z=Math.cos(E);for(let R=0;R<=t.length-1;R++){m.x=t[R].x*T,m.y=t[R].y,m.z=t[R].x*z,l.push(m.x,m.y,m.z),g.x=A/e,g.y=R/(t.length-1),c.push(g.x,g.y);const N=h[3*R+0]*T,H=h[3*R+1],C=h[3*R+0]*z;f.push(N,H,C)}}for(let A=0;A<e;A++)for(let E=0;E<t.length-1;E++){const T=E+A*t.length,z=T,R=T+t.length,N=T+t.length+1,H=T+1;o.push(z,R,H),o.push(N,H,R)}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2)),this.setAttribute("normal",new Yt(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.points,t.segments,t.phiStart,t.phiLength)}}class af extends cc{constructor(t=1,e=1,n=4,i=8){const o=new Zl;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new af(t.radius,t.length,t.capSegments,t.radialSegments)}}class rf extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],l=[],c=[],h=[],f=new O,p=new ht;l.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let m=0,g=3;m<=e;m++,g+=3){const v=n+m/e*i;f.x=t*Math.cos(v),f.y=t*Math.sin(v),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(l[g]/t+1)/2,p.y=(l[g+1]/t+1)/2,h.push(p.x,p.y)}for(let m=1;m<=e;m++)o.push(m,m+1,0);this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class No extends pe{constructor(t=1,e=1,n=1,i=32,o=1,l=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:h};const f=this;i=Math.floor(i),o=Math.floor(o);const p=[],m=[],g=[],v=[];let x=0;const M=[],S=n/2;let y=0;A(),l===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(v,2));function A(){const T=new O,z=new O;let R=0;const N=(e-t)/n;for(let H=0;H<=o;H++){const C=[],w=H/o,B=w*(e-t)+t;for(let Q=0;Q<=i;Q++){const W=Q/i,K=W*h+c,et=Math.sin(K),I=Math.cos(K);z.x=B*et,z.y=-w*n+S,z.z=B*I,m.push(z.x,z.y,z.z),T.set(et,N,I).normalize(),g.push(T.x,T.y,T.z),v.push(W,1-w),C.push(x++)}M.push(C)}for(let H=0;H<i;H++)for(let C=0;C<o;C++){const w=M[C][H],B=M[C+1][H],Q=M[C+1][H+1],W=M[C][H+1];p.push(w,B,W),p.push(B,Q,W),R+=6}f.addGroup(y,R,0),y+=R}function E(T){const z=x,R=new ht,N=new O;let H=0;const C=T===!0?t:e,w=T===!0?1:-1;for(let Q=1;Q<=i;Q++)m.push(0,S*w,0),g.push(0,w,0),v.push(.5,.5),x++;const B=x;for(let Q=0;Q<=i;Q++){const K=Q/i*h+c,et=Math.cos(K),I=Math.sin(K);N.x=C*I,N.y=S*w,N.z=C*et,m.push(N.x,N.y,N.z),g.push(0,w,0),R.x=et*.5+.5,R.y=I*.5*w+.5,v.push(R.x,R.y),x++}for(let Q=0;Q<i;Q++){const W=z+Q,K=B+Q;T===!0?p.push(K,K+1,W):p.push(K+1,K,W),H+=3}f.addGroup(y,H,T===!0?1:2),y+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class of extends No{constructor(t=1,e=1,n=32,i=1,o=!1,l=0,c=Math.PI*2){super(0,t,e,n,i,o,l,c),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:l,thetaLength:c}}static fromJSON(t){return new of(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],l=[];c(i),f(n),p(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(A){const E=new O,T=new O,z=new O;for(let R=0;R<e.length;R+=3)v(e[R+0],E),v(e[R+1],T),v(e[R+2],z),h(E,T,z,A)}function h(A,E,T,z){const R=z+1,N=[];for(let H=0;H<=R;H++){N[H]=[];const C=A.clone().lerp(T,H/R),w=E.clone().lerp(T,H/R),B=R-H;for(let Q=0;Q<=B;Q++)Q===0&&H===R?N[H][Q]=C:N[H][Q]=C.clone().lerp(w,Q/B)}for(let H=0;H<R;H++)for(let C=0;C<2*(R-H)-1;C++){const w=Math.floor(C/2);C%2===0?(g(N[H][w+1]),g(N[H+1][w]),g(N[H][w])):(g(N[H][w+1]),g(N[H+1][w+1]),g(N[H+1][w]))}}function f(A){const E=new O;for(let T=0;T<o.length;T+=3)E.x=o[T+0],E.y=o[T+1],E.z=o[T+2],E.normalize().multiplyScalar(A),o[T+0]=E.x,o[T+1]=E.y,o[T+2]=E.z}function p(){const A=new O;for(let E=0;E<o.length;E+=3){A.x=o[E+0],A.y=o[E+1],A.z=o[E+2];const T=S(A)/2/Math.PI+.5,z=y(A)/Math.PI+.5;l.push(T,1-z)}x(),m()}function m(){for(let A=0;A<l.length;A+=6){const E=l[A+0],T=l[A+2],z=l[A+4],R=Math.max(E,T,z),N=Math.min(E,T,z);R>.9&&N<.1&&(E<.2&&(l[A+0]+=1),T<.2&&(l[A+2]+=1),z<.2&&(l[A+4]+=1))}}function g(A){o.push(A.x,A.y,A.z)}function v(A,E){const T=A*3;E.x=t[T+0],E.y=t[T+1],E.z=t[T+2]}function x(){const A=new O,E=new O,T=new O,z=new O,R=new ht,N=new ht,H=new ht;for(let C=0,w=0;C<o.length;C+=9,w+=6){A.set(o[C+0],o[C+1],o[C+2]),E.set(o[C+3],o[C+4],o[C+5]),T.set(o[C+6],o[C+7],o[C+8]),R.set(l[w+0],l[w+1]),N.set(l[w+2],l[w+3]),H.set(l[w+4],l[w+5]),z.copy(A).add(E).add(T).divideScalar(3);const B=S(z);M(R,w+0,A,B),M(N,w+2,E,B),M(H,w+4,T,B)}}function M(A,E,T,z){z<0&&A.x===1&&(l[E]=A.x-1),T.x===0&&T.z===0&&(l[E]=z/2/Math.PI+.5)}function S(A){return Math.atan2(A.z,-A.x)}function y(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.vertices,t.indices,t.radius,t.details)}}class lf extends da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,l,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lf(t.radius,t.detail)}}const Nu=new O,Pu=new O,bp=new O,Ou=new gi;class Km extends pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),o=Math.cos(sr*e),l=t.getIndex(),c=t.getAttribute("position"),h=l?l.count:c.count,f=[0,0,0],p=["a","b","c"],m=new Array(3),g={},v=[];for(let x=0;x<h;x+=3){l?(f[0]=l.getX(x),f[1]=l.getX(x+1),f[2]=l.getX(x+2)):(f[0]=x,f[1]=x+1,f[2]=x+2);const{a:M,b:S,c:y}=Ou;if(M.fromBufferAttribute(c,f[0]),S.fromBufferAttribute(c,f[1]),y.fromBufferAttribute(c,f[2]),Ou.getNormal(bp),m[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,m[1]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,m[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let A=0;A<3;A++){const E=(A+1)%3,T=m[A],z=m[E],R=Ou[p[A]],N=Ou[p[E]],H=`${T}_${z}`,C=`${z}_${T}`;C in g&&g[C]?(bp.dot(g[C].normal)<=o&&(v.push(R.x,R.y,R.z),v.push(N.x,N.y,N.z)),g[C]=null):H in g||(g[H]={index0:f[A],index1:f[E],normal:bp.clone()})}}for(const x in g)if(g[x]){const{index0:M,index1:S}=g[x];Nu.fromBufferAttribute(c,M),Pu.fromBufferAttribute(c,S),v.push(Nu.x,Nu.y,Nu.z),v.push(Pu.x,Pu.y,Pu.z)}this.setAttribute("position",new Yt(v,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ar extends Zl{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Zl().fromJSON(i))}return this}}const j2={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=lS(s,0,i,e,!0);const l=[];if(!o||o.next===o.prev)return l;let c,h,f,p,m,g,v;if(n&&(o=tR(s,t,o,e)),s.length>80*e){c=f=s[0],h=p=s[1];for(let x=e;x<i;x+=e)m=s[x],g=s[x+1],m<c&&(c=m),g<h&&(h=g),m>f&&(f=m),g>p&&(p=g);v=Math.max(f-c,p-h),v=v!==0?32767/v:0}return jl(o,l,e,c,h,v,0),l}};function lS(s,t,e,n,i){let o,l;if(i===hR(s,t,e,n)>0)for(o=t;o<e;o+=n)l=I_(o,s[o],s[o+1],l);else for(o=e-n;o>=t;o-=n)l=I_(o,s[o],s[o+1],l);return l&&cf(l,l.next)&&(Jl(l),l=l.next),l}function cr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(cf(e,e.next)||je(e.prev,e,e.next)===0)){if(Jl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jl(s,t,e,n,i,o,l){if(!s)return;!l&&o&&aR(s,n,i,o);let c=s,h,f;for(;s.prev!==s.next;){if(h=s.prev,f=s.next,o?J2(s,n,i,o):K2(s)){t.push(h.i/e|0),t.push(s.i/e|0),t.push(f.i/e|0),Jl(s),s=f.next,c=f.next;continue}if(s=f,s===c){l?l===1?(s=Q2(cr(s),t,e),jl(s,t,e,n,i,o,2)):l===2&&$2(s,t,e,n,i,o):jl(cr(s),t,e,n,i,o,1);break}}}function K2(s){const t=s.prev,e=s,n=s.next;if(je(t,e,n)>=0)return!1;const i=t.x,o=e.x,l=n.x,c=t.y,h=e.y,f=n.y,p=i<o?i<l?i:l:o<l?o:l,m=c<h?c<f?c:f:h<f?h:f,g=i>o?i>l?i:l:o>l?o:l,v=c>h?c>f?c:f:h>f?h:f;let x=n.next;for(;x!==t;){if(x.x>=p&&x.x<=g&&x.y>=m&&x.y<=v&&_o(i,c,o,h,l,f,x.x,x.y)&&je(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function J2(s,t,e,n){const i=s.prev,o=s,l=s.next;if(je(i,o,l)>=0)return!1;const c=i.x,h=o.x,f=l.x,p=i.y,m=o.y,g=l.y,v=c<h?c<f?c:f:h<f?h:f,x=p<m?p<g?p:g:m<g?m:g,M=c>h?c>f?c:f:h>f?h:f,S=p>m?p>g?p:g:m>g?m:g,y=rm(v,x,t,e,n),A=rm(M,S,t,e,n);let E=s.prevZ,T=s.nextZ;for(;E&&E.z>=y&&T&&T.z<=A;){if(E.x>=v&&E.x<=M&&E.y>=x&&E.y<=S&&E!==i&&E!==l&&_o(c,p,h,m,f,g,E.x,E.y)&&je(E.prev,E,E.next)>=0||(E=E.prevZ,T.x>=v&&T.x<=M&&T.y>=x&&T.y<=S&&T!==i&&T!==l&&_o(c,p,h,m,f,g,T.x,T.y)&&je(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;E&&E.z>=y;){if(E.x>=v&&E.x<=M&&E.y>=x&&E.y<=S&&E!==i&&E!==l&&_o(c,p,h,m,f,g,E.x,E.y)&&je(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;T&&T.z<=A;){if(T.x>=v&&T.x<=M&&T.y>=x&&T.y<=S&&T!==i&&T!==l&&_o(c,p,h,m,f,g,T.x,T.y)&&je(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Q2(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!cf(i,o)&&cS(i,n,n.next,o)&&Kl(i,o)&&Kl(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Jl(n),Jl(n.next),n=s=o),n=n.next}while(n!==s);return cr(n)}function $2(s,t,e,n,i,o){let l=s;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&lR(l,c)){let h=uS(l,c);l=cr(l,l.next),h=cr(h,h.next),jl(l,t,e,n,i,o,0),jl(h,t,e,n,i,o,0);return}c=c.next}l=l.next}while(l!==s)}function tR(s,t,e,n){const i=[];let o,l,c,h,f;for(o=0,l=t.length;o<l;o++)c=t[o]*n,h=o<l-1?t[o+1]*n:s.length,f=lS(s,c,h,n,!1),f===f.next&&(f.steiner=!0),i.push(oR(f));for(i.sort(eR),o=0;o<i.length;o++)e=nR(i[o],e);return e}function eR(s,t){return s.x-t.x}function nR(s,t){const e=iR(s,t);if(!e)return t;const n=uS(e,s);return cr(n,n.next),cr(e,e.next)}function iR(s,t){let e=t,n=-1/0,i;const o=s.x,l=s.y;do{if(l<=e.y&&l>=e.next.y&&e.next.y!==e.y){const g=e.x+(l-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=o&&g>n&&(n=g,i=e.x<e.next.x?e:e.next,g===o))return i}e=e.next}while(e!==t);if(!i)return null;const c=i,h=i.x,f=i.y;let p=1/0,m;e=i;do o>=e.x&&e.x>=h&&o!==e.x&&_o(l<f?o:n,l,h,f,l<f?n:o,l,e.x,e.y)&&(m=Math.abs(l-e.y)/(o-e.x),Kl(e,s)&&(m<p||m===p&&(e.x>i.x||e.x===i.x&&sR(i,e)))&&(i=e,p=m)),e=e.next;while(e!==c);return i}function sR(s,t){return je(s.prev,s,t.prev)<0&&je(t.next,s,s.next)<0}function aR(s,t,e,n){let i=s;do i.z===0&&(i.z=rm(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rR(i)}function rR(s){let t,e,n,i,o,l,c,h,f=1;do{for(e=s,s=null,o=null,l=0;e;){for(l++,n=e,c=0,t=0;t<f&&(c++,n=n.nextZ,!!n);t++);for(h=f;c>0||h>0&&n;)c!==0&&(h===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,c--):(i=n,n=n.nextZ,h--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,f*=2}while(l>1);return s}function rm(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function oR(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _o(s,t,e,n,i,o,l,c){return(i-l)*(t-c)>=(s-l)*(o-c)&&(s-l)*(n-c)>=(e-l)*(t-c)&&(e-l)*(o-c)>=(i-l)*(n-c)}function lR(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cR(s,t)&&(Kl(s,t)&&Kl(t,s)&&uR(s,t)&&(je(s.prev,s,t.prev)||je(s,t.prev,t))||cf(s,t)&&je(s.prev,s,s.next)>0&&je(t.prev,t,t.next)>0)}function je(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function cf(s,t){return s.x===t.x&&s.y===t.y}function cS(s,t,e,n){const i=zu(je(s,t,e)),o=zu(je(s,t,n)),l=zu(je(e,n,s)),c=zu(je(e,n,t));return!!(i!==o&&l!==c||i===0&&Iu(s,e,t)||o===0&&Iu(s,n,t)||l===0&&Iu(e,s,n)||c===0&&Iu(e,t,n))}function Iu(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function zu(s){return s>0?1:s<0?-1:0}function cR(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&cS(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Kl(s,t){return je(s.prev,s,s.next)<0?je(s,t,s.next)>=0&&je(s,s.prev,t)>=0:je(s,t,s.prev)<0||je(s,s.next,t)<0}function uR(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function uS(s,t){const e=new om(s.i,s.x,s.y),n=new om(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function I_(s,t,e,n){const i=new om(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Jl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function om(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hR(s,t,e,n){let i=0;for(let o=t,l=e-n;o<e;o+=n)i+=(s[l]-s[o])*(s[o+1]+s[l+1]),l=o;return i}class rs{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return rs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];z_(t),B_(n,t);let l=t.length;e.forEach(z_);for(let h=0;h<e.length;h++)i.push(l),l+=e[h].length,B_(n,e[h]);const c=j2.triangulate(n,i);for(let h=0;h<c.length;h+=3)o.push(c.slice(h,h+3));return o}}function z_(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function B_(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class uf extends pe{constructor(t=new ar([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let c=0,h=t.length;c<h;c++){const f=t[c];l(f)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(o,2)),this.computeVertexNormals();function l(c){const h=[],f=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1;let g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,v=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:v-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,S=e.bevelSegments!==void 0?e.bevelSegments:3;const y=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:fR;let E,T=!1,z,R,N,H;y&&(E=y.getSpacedPoints(p),T=!0,g=!1,z=y.computeFrenetFrames(p,!1),R=new O,N=new O,H=new O),g||(S=0,v=0,x=0,M=0);const C=c.extractPoints(f);let w=C.shape;const B=C.holes;if(!rs.isClockWise(w)){w=w.reverse();for(let P=0,_t=B.length;P<_t;P++){const gt=B[P];rs.isClockWise(gt)&&(B[P]=gt.reverse())}}const W=rs.triangulateShape(w,B),K=w;for(let P=0,_t=B.length;P<_t;P++){const gt=B[P];w=w.concat(gt)}function et(P,_t,gt){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(_t,gt)}const I=w.length,k=W.length;function G(P,_t,gt){let wt,lt,Ht;const Dt=P.x-_t.x,Pt=P.y-_t.y,F=gt.x-P.x,U=gt.y-P.y,nt=Dt*Dt+Pt*Pt,vt=Dt*U-Pt*F;if(Math.abs(vt)>Number.EPSILON){const mt=Math.sqrt(nt),pt=Math.sqrt(F*F+U*U),Kt=_t.x-Pt/mt,At=_t.y+Dt/mt,Vt=gt.x-U/pt,oe=gt.y+F/pt,bt=((Vt-Kt)*U-(oe-At)*F)/(Dt*U-Pt*F);wt=Kt+Dt*bt-P.x,lt=At+Pt*bt-P.y;const It=wt*wt+lt*lt;if(It<=2)return new ht(wt,lt);Ht=Math.sqrt(It/2)}else{let mt=!1;Dt>Number.EPSILON?F>Number.EPSILON&&(mt=!0):Dt<-Number.EPSILON?F<-Number.EPSILON&&(mt=!0):Math.sign(Pt)===Math.sign(U)&&(mt=!0),mt?(wt=-Pt,lt=Dt,Ht=Math.sqrt(nt)):(wt=Dt,lt=Pt,Ht=Math.sqrt(nt/2))}return new ht(wt/Ht,lt/Ht)}const at=[];for(let P=0,_t=K.length,gt=_t-1,wt=P+1;P<_t;P++,gt++,wt++)gt===_t&&(gt=0),wt===_t&&(wt=0),at[P]=G(K[P],K[gt],K[wt]);const rt=[];let ft,Ct=at.concat();for(let P=0,_t=B.length;P<_t;P++){const gt=B[P];ft=[];for(let wt=0,lt=gt.length,Ht=lt-1,Dt=wt+1;wt<lt;wt++,Ht++,Dt++)Ht===lt&&(Ht=0),Dt===lt&&(Dt=0),ft[wt]=G(gt[wt],gt[Ht],gt[Dt]);rt.push(ft),Ct=Ct.concat(ft)}for(let P=0;P<S;P++){const _t=P/S,gt=v*Math.cos(_t*Math.PI/2),wt=x*Math.sin(_t*Math.PI/2)+M;for(let lt=0,Ht=K.length;lt<Ht;lt++){const Dt=et(K[lt],at[lt],wt);Ut(Dt.x,Dt.y,-gt)}for(let lt=0,Ht=B.length;lt<Ht;lt++){const Dt=B[lt];ft=rt[lt];for(let Pt=0,F=Dt.length;Pt<F;Pt++){const U=et(Dt[Pt],ft[Pt],wt);Ut(U.x,U.y,-gt)}}}const Wt=x+M;for(let P=0;P<I;P++){const _t=g?et(w[P],Ct[P],Wt):w[P];T?(N.copy(z.normals[0]).multiplyScalar(_t.x),R.copy(z.binormals[0]).multiplyScalar(_t.y),H.copy(E[0]).add(N).add(R),Ut(H.x,H.y,H.z)):Ut(_t.x,_t.y,0)}for(let P=1;P<=p;P++)for(let _t=0;_t<I;_t++){const gt=g?et(w[_t],Ct[_t],Wt):w[_t];T?(N.copy(z.normals[P]).multiplyScalar(gt.x),R.copy(z.binormals[P]).multiplyScalar(gt.y),H.copy(E[P]).add(N).add(R),Ut(H.x,H.y,H.z)):Ut(gt.x,gt.y,m/p*P)}for(let P=S-1;P>=0;P--){const _t=P/S,gt=v*Math.cos(_t*Math.PI/2),wt=x*Math.sin(_t*Math.PI/2)+M;for(let lt=0,Ht=K.length;lt<Ht;lt++){const Dt=et(K[lt],at[lt],wt);Ut(Dt.x,Dt.y,m+gt)}for(let lt=0,Ht=B.length;lt<Ht;lt++){const Dt=B[lt];ft=rt[lt];for(let Pt=0,F=Dt.length;Pt<F;Pt++){const U=et(Dt[Pt],ft[Pt],wt);T?Ut(U.x,U.y+E[p-1].y,E[p-1].x+gt):Ut(U.x,U.y,m+gt)}}}J(),ct();function J(){const P=i.length/3;if(g){let _t=0,gt=I*_t;for(let wt=0;wt<k;wt++){const lt=W[wt];Zt(lt[2]+gt,lt[1]+gt,lt[0]+gt)}_t=p+S*2,gt=I*_t;for(let wt=0;wt<k;wt++){const lt=W[wt];Zt(lt[0]+gt,lt[1]+gt,lt[2]+gt)}}else{for(let _t=0;_t<k;_t++){const gt=W[_t];Zt(gt[2],gt[1],gt[0])}for(let _t=0;_t<k;_t++){const gt=W[_t];Zt(gt[0]+I*p,gt[1]+I*p,gt[2]+I*p)}}n.addGroup(P,i.length/3-P,0)}function ct(){const P=i.length/3;let _t=0;Nt(K,_t),_t+=K.length;for(let gt=0,wt=B.length;gt<wt;gt++){const lt=B[gt];Nt(lt,_t),_t+=lt.length}n.addGroup(P,i.length/3-P,1)}function Nt(P,_t){let gt=P.length;for(;--gt>=0;){const wt=gt;let lt=gt-1;lt<0&&(lt=P.length-1);for(let Ht=0,Dt=p+S*2;Ht<Dt;Ht++){const Pt=I*Ht,F=I*(Ht+1),U=_t+wt+Pt,nt=_t+lt+Pt,vt=_t+lt+F,mt=_t+wt+F;re(U,nt,vt,mt)}}}function Ut(P,_t,gt){h.push(P),h.push(_t),h.push(gt)}function Zt(P,_t,gt){qt(P),qt(_t),qt(gt);const wt=i.length/3,lt=A.generateTopUV(n,i,wt-3,wt-2,wt-1);Xt(lt[0]),Xt(lt[1]),Xt(lt[2])}function re(P,_t,gt,wt){qt(P),qt(_t),qt(wt),qt(_t),qt(gt),qt(wt);const lt=i.length/3,Ht=A.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Xt(Ht[0]),Xt(Ht[1]),Xt(Ht[3]),Xt(Ht[1]),Xt(Ht[2]),Xt(Ht[3])}function qt(P){i.push(h[P*3+0]),i.push(h[P*3+1]),i.push(h[P*3+2])}function Xt(P){o.push(P.x),o.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dR(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,l=t.shapes.length;o<l;o++){const c=e[t.shapes[o]];n.push(c)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Lh[i.type]().fromJSON(i)),new uf(n,t.options)}}const fR={generateTopUV:function(s,t,e,n,i){const o=t[e*3],l=t[e*3+1],c=t[n*3],h=t[n*3+1],f=t[i*3],p=t[i*3+1];return[new ht(o,l),new ht(c,h),new ht(f,p)]},generateSideWallUV:function(s,t,e,n,i,o){const l=t[e*3],c=t[e*3+1],h=t[e*3+2],f=t[n*3],p=t[n*3+1],m=t[n*3+2],g=t[i*3],v=t[i*3+1],x=t[i*3+2],M=t[o*3],S=t[o*3+1],y=t[o*3+2];return Math.abs(c-p)<Math.abs(l-f)?[new ht(l,1-h),new ht(f,1-m),new ht(g,1-x),new ht(M,1-y)]:[new ht(c,1-h),new ht(p,1-m),new ht(v,1-x),new ht(S,1-y)]}};function dR(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hf extends da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hf(t.radius,t.detail)}}class uc extends da{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uc(t.radius,t.detail)}}class ff extends pe{constructor(t=.5,e=1,n=32,i=1,o=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const c=[],h=[],f=[],p=[];let m=t;const g=(e-t)/i,v=new O,x=new ht;for(let M=0;M<=i;M++){for(let S=0;S<=n;S++){const y=o+S/n*l;v.x=m*Math.cos(y),v.y=m*Math.sin(y),h.push(v.x,v.y,v.z),f.push(0,0,1),x.x=(v.x/e+1)/2,x.y=(v.y/e+1)/2,p.push(x.x,x.y)}m+=g}for(let M=0;M<i;M++){const S=M*(n+1);for(let y=0;y<n;y++){const A=y+S,E=A,T=A+n+1,z=A+n+2,R=A+1;c.push(E,T,R),c.push(T,z,R)}}this.setIndex(c),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ff(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class df extends pe{constructor(t=new ar([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],l=[];let c=0,h=0;if(Array.isArray(t)===!1)f(t);else for(let p=0;p<t.length;p++)f(t[p]),this.addGroup(c,h,p),c+=h,h=0;this.setIndex(n),this.setAttribute("position",new Yt(i,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2));function f(p){const m=i.length/3,g=p.extractPoints(e);let v=g.shape;const x=g.holes;rs.isClockWise(v)===!1&&(v=v.reverse());for(let S=0,y=x.length;S<y;S++){const A=x[S];rs.isClockWise(A)===!0&&(x[S]=A.reverse())}const M=rs.triangulateShape(v,x);for(let S=0,y=x.length;S<y;S++){const A=x[S];v=v.concat(A)}for(let S=0,y=v.length;S<y;S++){const A=v[S];i.push(A.x,A.y,0),o.push(0,0,1),l.push(A.x,A.y)}for(let S=0,y=M.length;S<y;S++){const A=M[S],E=A[0]+m,T=A[1]+m,z=A[2]+m;n.push(E,T,z),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return pR(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const l=e[t.shapes[i]];n.push(l)}return new df(n,t.curveSegments)}}function pR(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class hc extends pe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(l+c,Math.PI);let f=0;const p=[],m=new O,g=new O,v=[],x=[],M=[],S=[];for(let y=0;y<=n;y++){const A=[],E=y/n;let T=0;y===0&&l===0?T=.5/e:y===n&&h===Math.PI&&(T=-.5/e);for(let z=0;z<=e;z++){const R=z/e;m.x=-t*Math.cos(i+R*o)*Math.sin(l+E*c),m.y=t*Math.cos(l+E*c),m.z=t*Math.sin(i+R*o)*Math.sin(l+E*c),x.push(m.x,m.y,m.z),g.copy(m).normalize(),M.push(g.x,g.y,g.z),S.push(R+T,1-E),A.push(f++)}p.push(A)}for(let y=0;y<n;y++)for(let A=0;A<e;A++){const E=p[y][A+1],T=p[y][A],z=p[y+1][A],R=p[y+1][A+1];(y!==0||l>0)&&v.push(E,T,R),(y!==n-1||h<Math.PI)&&v.push(T,z,R)}this.setIndex(v),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pf extends da{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pf(t.radius,t.detail)}}class mf extends pe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],p=new O,m=new O,g=new O;for(let v=0;v<=n;v++)for(let x=0;x<=i;x++){const M=x/i*o,S=v/n*Math.PI*2;m.x=(t+e*Math.cos(S))*Math.cos(M),m.y=(t+e*Math.cos(S))*Math.sin(M),m.z=e*Math.sin(S),c.push(m.x,m.y,m.z),p.x=t*Math.cos(M),p.y=t*Math.sin(M),g.subVectors(m,p).normalize(),h.push(g.x,g.y,g.z),f.push(x/i),f.push(v/n)}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){const M=(i+1)*v+x-1,S=(i+1)*(v-1)+x-1,y=(i+1)*(v-1)+x,A=(i+1)*v+x;l.push(M,S,A),l.push(S,y,A)}this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gf extends pe{constructor(t=1,e=.4,n=64,i=8,o=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:o,q:l},n=Math.floor(n),i=Math.floor(i);const c=[],h=[],f=[],p=[],m=new O,g=new O,v=new O,x=new O,M=new O,S=new O,y=new O;for(let E=0;E<=n;++E){const T=E/n*o*Math.PI*2;A(T,o,l,t,v),A(T+.01,o,l,t,x),S.subVectors(x,v),y.addVectors(x,v),M.crossVectors(S,y),y.crossVectors(M,S),M.normalize(),y.normalize();for(let z=0;z<=i;++z){const R=z/i*Math.PI*2,N=-e*Math.cos(R),H=e*Math.sin(R);m.x=v.x+(N*y.x+H*M.x),m.y=v.y+(N*y.y+H*M.y),m.z=v.z+(N*y.z+H*M.z),h.push(m.x,m.y,m.z),g.subVectors(m,v).normalize(),f.push(g.x,g.y,g.z),p.push(E/n),p.push(z/i)}}for(let E=1;E<=n;E++)for(let T=1;T<=i;T++){const z=(i+1)*(E-1)+(T-1),R=(i+1)*E+(T-1),N=(i+1)*E+T,H=(i+1)*(E-1)+T;c.push(z,R,H),c.push(R,N,H)}this.setIndex(c),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(p,2));function A(E,T,z,R,N){const H=Math.cos(E),C=Math.sin(E),w=z/T*E,B=Math.cos(w);N.x=R*(2+B)*.5*H,N.y=R*(2+B)*C*.5,N.z=R*Math.sin(w)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gf(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class vf extends pe{constructor(t=new Zm(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const l=t.computeFrenetFrames(e,o);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new O,h=new O,f=new ht;let p=new O;const m=[],g=[],v=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(v,2));function M(){for(let E=0;E<e;E++)S(E);S(o===!1?e:0),A(),y()}function S(E){p=t.getPointAt(E/e,p);const T=l.normals[E],z=l.binormals[E];for(let R=0;R<=i;R++){const N=R/i*Math.PI*2,H=Math.sin(N),C=-Math.cos(N);h.x=C*T.x+H*z.x,h.y=C*T.y+H*z.y,h.z=C*T.z+H*z.z,h.normalize(),g.push(h.x,h.y,h.z),c.x=p.x+n*h.x,c.y=p.y+n*h.y,c.z=p.z+n*h.z,m.push(c.x,c.y,c.z)}}function y(){for(let E=1;E<=e;E++)for(let T=1;T<=i;T++){const z=(i+1)*(E-1)+(T-1),R=(i+1)*E+(T-1),N=(i+1)*E+T,H=(i+1)*(E-1)+T;x.push(z,R,H),x.push(R,N,H)}}function A(){for(let E=0;E<=e;E++)for(let T=0;T<=i;T++)f.x=E/e,f.y=T/i,v.push(f.x,f.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vf(new Lh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jm extends pe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new O,o=new O;if(t.index!==null){const l=t.attributes.position,c=t.index;let h=t.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let f=0,p=h.length;f<p;++f){const m=h[f],g=m.start,v=m.count;for(let x=g,M=g+v;x<M;x+=3)for(let S=0;S<3;S++){const y=c.getX(x+S),A=c.getX(x+(S+1)%3);i.fromBufferAttribute(l,y),o.fromBufferAttribute(l,A),F_(i,o,n)===!0&&(e.push(i.x,i.y,i.z),e.push(o.x,o.y,o.z))}}}else{const l=t.attributes.position;for(let c=0,h=l.count/3;c<h;c++)for(let f=0;f<3;f++){const p=3*c+f,m=3*c+(f+1)%3;i.fromBufferAttribute(l,p),o.fromBufferAttribute(l,m),F_(i,o,n)===!0&&(e.push(i.x,i.y,i.z),e.push(o.x,o.y,o.z))}}this.setAttribute("position",new Yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function F_(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var H_=Object.freeze({__proto__:null,BoxGeometry:hr,CapsuleGeometry:af,CircleGeometry:rf,ConeGeometry:of,CylinderGeometry:No,DodecahedronGeometry:lf,EdgesGeometry:Km,ExtrudeGeometry:uf,IcosahedronGeometry:hf,LatheGeometry:cc,OctahedronGeometry:uc,PlaneGeometry:Do,PolyhedronGeometry:da,RingGeometry:ff,ShapeGeometry:df,SphereGeometry:hc,TetrahedronGeometry:pf,TorusGeometry:mf,TorusKnotGeometry:gf,TubeGeometry:vf,WireframeGeometry:Jm});class hS extends In{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Bt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class fS extends Ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qm extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dS extends Qm{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class pS extends In{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mS extends In{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class gS extends In{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class vS extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _S extends In{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Bt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yS extends qn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function er(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function SS(s){function t(i,o){return s[i]-s[o]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function lm(s,t,e){const n=s.length,i=new s.constructor(n);for(let o=0,l=0;l!==n;++o){const c=e[o]*t;for(let h=0;h!==t;++h)i[l++]=s[c+h]}return i}function $m(s,t,e,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(t.push(o.time),e.push.apply(e,l)),o=s[i++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(t.push(o.time),l.toArray(e,e.length)),o=s[i++];while(o!==void 0);else do l=o[n],l!==void 0&&(t.push(o.time),e.push(l)),o=s[i++];while(o!==void 0)}function mR(s,t,e,n,i=30){const o=s.clone();o.name=t;const l=[];for(let h=0;h<o.tracks.length;++h){const f=o.tracks[h],p=f.getValueSize(),m=[],g=[];for(let v=0;v<f.times.length;++v){const x=f.times[v]*i;if(!(x<e||x>=n)){m.push(f.times[v]);for(let M=0;M<p;++M)g.push(f.values[v*p+M])}}m.length!==0&&(f.times=er(m,f.times.constructor),f.values=er(g,f.values.constructor),l.push(f))}o.tracks=l;let c=1/0;for(let h=0;h<o.tracks.length;++h)c>o.tracks[h].times[0]&&(c=o.tracks[h].times[0]);for(let h=0;h<o.tracks.length;++h)o.tracks[h].shift(-1*c);return o.resetDuration(),o}function gR(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,o=t/n;for(let l=0;l<i;++l){const c=e.tracks[l],h=c.ValueTypeName;if(h==="bool"||h==="string")continue;const f=s.tracks.find(function(y){return y.name===c.name&&y.ValueTypeName===h});if(f===void 0)continue;let p=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=m/3);let g=0;const v=f.getValueSize();f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(g=v/3);const x=c.times.length-1;let M;if(o<=c.times[0]){const y=p,A=m-p;M=c.values.slice(y,A)}else if(o>=c.times[x]){const y=x*m+p,A=y+m-p;M=c.values.slice(y,A)}else{const y=c.createInterpolant(),A=p,E=m-p;y.evaluate(o),M=y.resultBuffer.slice(A,E)}h==="quaternion"&&new ei().fromArray(M).normalize().conjugate().toArray(M);const S=f.times.length;for(let y=0;y<S;++y){const A=y*v+g;if(h==="quaternion")ei.multiplyQuaternionsFlat(f.values,A,M,0,f.values,A);else{const E=v-g*2;for(let T=0;T<E;++T)f.values[A+T]-=M[T]}}}return s.blendMode=Um,s}const vR={convertArray:er,isTypedArray:xS,getKeyframeOrder:SS,sortedArray:lm,flattenJSON:$m,subclip:mR,makeClipAdditive:gR};class fc{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],o=e[n-1];t:{e:{let l;n:{i:if(!(t<i)){for(let c=n+2;;){if(i===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=i,i=e[++n],t<i)break e}l=e.length;break n}if(!(t>=o)){const c=e[1];t<c&&(n=2,o=c);for(let h=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(i=o,o=e[--n-1],t>=o)break e}l=n,n=0;break n}break t}for(;n<l;){const c=n+l>>>1;t<e[c]?l=c:n=c+1}if(i=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i;for(let l=0;l!==i;++l)e[l]=n[o+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class MS extends fc{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qa,endingEnd:Qa}}intervalChanged_(t,e,n){const i=this.parameterPositions;let o=t-2,l=t+1,c=i[o],h=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case $a:o=t,c=2*e-n;break;case Hl:o=i.length-2,c=e+i[o]-i[o+1];break;default:o=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case $a:l=t,h=2*n-e;break;case Hl:l=1,h=n+i[1]-i[0];break;default:l=t-1,h=e}const f=(n-e)*.5,p=this.valueSize;this._weightPrev=f/(e-c),this._weightNext=f/(h-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(t,e,n,i){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,f=h-c,p=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,x=(n-e)/(i-e),M=x*x,S=M*x,y=-g*S+2*g*M-g*x,A=(1+g)*S+(-1.5-2*g)*M+(-.5+g)*x+1,E=(-1-v)*S+(1.5+v)*M+.5*x,T=v*S-v*M;for(let z=0;z!==c;++z)o[z]=y*l[p+z]+A*l[f+z]+E*l[h+z]+T*l[m+z];return o}}class tg extends fc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,f=h-c,p=(n-e)/(i-e),m=1-p;for(let g=0;g!==c;++g)o[g]=l[f+g]*m+l[h+g]*p;return o}}class bS extends fc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Yi{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=er(e,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:er(t.times,Array),values:er(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bS(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new MS(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fl:e=this.InterpolantFactoryMethodDiscrete;break;case Ch:e=this.InterpolantFactoryMethodLinear;break;case Ku:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fl;case this.InterpolantFactoryMethodLinear:return Ch;case this.InterpolantFactoryMethodSmooth:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let o=0,l=i-1;for(;o!==i&&n[o]<t;)++o;for(;l!==-1&&n[l]>e;)--l;if(++l,o!==0||l!==i){o>=l&&(l=Math.max(l,1),o=l-1);const c=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let c=0;c!==o;c++){const h=n[c];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(l!==null&&l>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,h,l),t=!1;break}l=h}if(i!==void 0&&xS(i))for(let c=0,h=i.length;c!==h;++c){const f=i[c];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,f),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ku,o=t.length-1;let l=1;for(let c=1;c<o;++c){let h=!1;const f=t[c],p=t[c+1];if(f!==p&&(c!==1||f!==t[0]))if(i)h=!0;else{const m=c*n,g=m-n,v=m+n;for(let x=0;x!==n;++x){const M=e[m+x];if(M!==e[g+x]||M!==e[v+x]){h=!0;break}}}if(h){if(c!==l){t[l]=t[c];const m=c*n,g=l*n;for(let v=0;v!==n;++v)e[g+v]=e[m+v]}++l}}if(o>0){t[l]=t[o];for(let c=o*n,h=l*n,f=0;f!==n;++f)e[h+f]=e[c+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=Ch;class dr extends Yi{constructor(t,e,n){super(t,e,n)}}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Fl;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class eg extends Yi{}eg.prototype.ValueTypeName="color";class Ql extends Yi{}Ql.prototype.ValueTypeName="number";class ES extends fc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=(n-e)/(i-e);let f=t*c;for(let p=f+c;f!==p;f+=4)ei.slerpFlat(o,0,l,f-c,l,f,h);return o}}class dc extends Yi{InterpolantFactoryMethodLinear(t){return new ES(this.times,this.values,this.getValueSize(),t)}}dc.prototype.ValueTypeName="quaternion";dc.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Yi{constructor(t,e,n){super(t,e,n)}}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Fl;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class $l extends Yi{}$l.prototype.ValueTypeName="vector";class tc{constructor(t="",e=-1,n=[],i=Yh){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let l=0,c=n.length;l!==c;++l)e.push(yR(n[l]).scale(i));const o=new this(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,l=n.length;o!==l;++o)e.push(Yi.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const o=e.length,l=[];for(let c=0;c<o;c++){let h=[],f=[];h.push((c+o-1)%o,c,(c+1)%o),f.push(0,1,0);const p=SS(h);h=lm(h,1,p),f=lm(f,1,p),!i&&h[0]===0&&(h.push(o),f.push(f[0])),l.push(new Ql(".morphTargetInfluences["+e[c].name+"]",h,f).scale(1/n))}return new this(t,-1,l)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,h=t.length;c<h;c++){const f=t[c],p=f.name.match(o);if(p&&p.length>1){const m=p[1];let g=i[m];g||(i[m]=g=[]),g.push(f)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],e,n));return l}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,g,v,x,M){if(v.length!==0){const S=[],y=[];$m(v,S,y,x),S.length!==0&&M.push(new m(g,S,y))}},i=[],o=t.name||"default",l=t.fps||30,c=t.blendMode;let h=t.length||-1;const f=t.hierarchy||[];for(let m=0;m<f.length;m++){const g=f[m].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let x;for(x=0;x<g.length;x++)if(g[x].morphTargets)for(let M=0;M<g[x].morphTargets.length;M++)v[g[x].morphTargets[M]]=-1;for(const M in v){const S=[],y=[];for(let A=0;A!==g[x].morphTargets.length;++A){const E=g[x];S.push(E.time),y.push(E.morphTarget===M?1:0)}i.push(new Ql(".morphTargetInfluence["+M+"]",S,y))}h=v.length*l}else{const v=".bones["+e[m].name+"]";n($l,v+".position",g,"pos",i),n(dc,v+".quaternion",g,"rot",i),n($l,v+".scale",g,"scl",i)}}return i.length===0?null:new this(o,h,i,c)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const o=this.tracks[n];e=Math.max(e,o.times[o.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _R(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ql;case"vector":case"vector2":case"vector3":case"vector4":return $l;case"color":return eg;case"quaternion":return dc;case"bool":case"boolean":return dr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yR(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=_R(s.type);if(s.times===void 0){const e=[],n=[];$m(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Us={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ng{constructor(t,e,n){const i=this;let o=!1,l=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(p){c++,o===!1&&i.onStart!==void 0&&i.onStart(p,l,c),o=!0},this.itemEnd=function(p){l++,i.onProgress!==void 0&&i.onProgress(p,l,c),l===c&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=f.length;m<g;m+=2){const v=f[m],x=f[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return x}return null}}}const AS=new ng;class ni{constructor(t){this.manager=t!==void 0?t:AS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ts={};class xR extends Error{constructor(t,e){super(t),this.response=e}}class Os extends ni{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Us.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Ts[t]!==void 0){Ts[t].push({onLoad:e,onProgress:n,onError:i});return}Ts[t]=[],Ts[t].push({onLoad:e,onProgress:n,onError:i});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,h=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=Ts[t],m=f.body.getReader(),g=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),v=g?parseInt(g):0,x=v!==0;let M=0;const S=new ReadableStream({start(y){A();function A(){m.read().then(({done:E,value:T})=>{if(E)y.close();else{M+=T.byteLength;const z=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:v});for(let R=0,N=p.length;R<N;R++){const H=p[R];H.onProgress&&H.onProgress(z)}y.enqueue(T),A()}},E=>{y.error(E)})}}});return new Response(S)}else throw new xR(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return f.json();default:if(c===void 0)return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),g=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(g);return f.arrayBuffer().then(x=>v.decode(x))}}}).then(f=>{Us.add(t,f);const p=Ts[t];delete Ts[t];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onLoad&&v.onLoad(f)}}).catch(f=>{const p=Ts[t];if(p===void 0)throw this.manager.itemError(t),f;delete Ts[t];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onError&&v.onError(f)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class SR extends ni{constructor(t){super(t)}load(t,e,n,i){const o=this,l=new Os(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{e(o.parse(JSON.parse(c)))}catch(h){i?i(h):console.error(h),o.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=tc.parse(t[n]);e.push(i)}return e}}class MR extends ni{constructor(t){super(t)}load(t,e,n,i){const o=this,l=[],c=new nf,h=new Os(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(o.withCredentials);let f=0;function p(m){h.load(t[m],function(g){const v=o.parse(g,!0);l[m]={width:v.width,height:v.height,format:v.format,mipmaps:v.mipmaps},f+=1,f===6&&(v.mipmapCount===1&&(c.minFilter=hn),c.image=l,c.format=v.format,c.needsUpdate=!0,e&&e(c))},n,i)}if(Array.isArray(t))for(let m=0,g=t.length;m<g;++m)p(m);else h.load(t,function(m){const g=o.parse(m,!0);if(g.isCubemap){const v=g.mipmaps.length/g.mipmapCount;for(let x=0;x<v;x++){l[x]={mipmaps:[]};for(let M=0;M<g.mipmapCount;M++)l[x].mipmaps.push(g.mipmaps[x*g.mipmapCount+M]),l[x].format=g.format,l[x].width=g.width,l[x].height=g.height}c.image=l}else c.image.width=g.width,c.image.height=g.height,c.mipmaps=g.mipmaps;g.mipmapCount===1&&(c.minFilter=hn),c.format=g.format,c.needsUpdate=!0,e&&e(c)},n,i);return c}}class ec extends ni{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=Us.get(t);if(l!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0),l;const c=Yl("img");function h(){p(),Us.add(t,this),e&&e(this),o.manager.itemEnd(t)}function f(m){p(),i&&i(m),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(t),c.src=t,c}}class bR extends ni{constructor(t){super(t)}load(t,e,n,i){const o=new oc;o.colorSpace=$n;const l=new ec(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function h(f){l.load(t[f],function(p){o.images[f]=p,c++,c===6&&(o.needsUpdate=!0,e&&e(o))},void 0,i)}for(let f=0;f<t.length;++f)h(f);return o}}class ER extends ni{constructor(t){super(t)}load(t,e,n,i){const o=this,l=new as,c=new Os(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(o.withCredentials),c.load(t,function(h){let f;try{f=o.parse(h)}catch(p){if(i!==void 0)i(p);else{console.error(p);return}}f.image!==void 0?l.image=f.image:f.data!==void 0&&(l.image.width=f.width,l.image.height=f.height,l.image.data=f.data),l.wrapS=f.wrapS!==void 0?f.wrapS:Ri,l.wrapT=f.wrapT!==void 0?f.wrapT:Ri,l.magFilter=f.magFilter!==void 0?f.magFilter:hn,l.minFilter=f.minFilter!==void 0?f.minFilter:hn,l.anisotropy=f.anisotropy!==void 0?f.anisotropy:1,f.colorSpace!==void 0&&(l.colorSpace=f.colorSpace),f.flipY!==void 0&&(l.flipY=f.flipY),f.format!==void 0&&(l.format=f.format),f.type!==void 0&&(l.type=f.type),f.mipmaps!==void 0&&(l.mipmaps=f.mipmaps,l.minFilter=ns),f.mipmapCount===1&&(l.minFilter=hn),f.generateMipmaps!==void 0&&(l.generateMipmaps=f.generateMipmaps),l.needsUpdate=!0,e&&e(l,f)},n,i),l}}class AR extends ni{constructor(t){super(t)}load(t,e,n,i){const o=new nn,l=new ec(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(c){o.image=c,o.needsUpdate=!0,e!==void 0&&e(o)},n,i),o}}class pa extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class TS extends pa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ep=new ie,V_=new O,G_=new O;class ig{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;V_.setFromMatrixPosition(t.matrixWorld),e.position.copy(V_),G_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(G_),e.updateMatrixWorld(),Ep.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ep),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ep)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class TR extends ig{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Mo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class wS extends pa{constructor(t,e,n=0,i=Math.PI/3,o=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new TR}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const k_=new ie,xl=new O,Ap=new O;class wR extends ig{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),xl.setFromMatrixPosition(t.matrixWorld),n.position.copy(xl),Ap.copy(n.position),Ap.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ap),n.updateMatrixWorld(),i.makeTranslation(-xl.x,-xl.y,-xl.z),k_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(k_)}}class CS extends pa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wR}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class CR extends ig{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RS extends pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new CR}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class US extends pa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class DS extends pa{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class LS{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new O)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,o=t.z,l=this.coefficients;return e.copy(l[0]).multiplyScalar(.282095),e.addScaledVector(l[1],.488603*i),e.addScaledVector(l[2],.488603*o),e.addScaledVector(l[3],.488603*n),e.addScaledVector(l[4],1.092548*(n*i)),e.addScaledVector(l[5],1.092548*(i*o)),e.addScaledVector(l[6],.315392*(3*o*o-1)),e.addScaledVector(l[7],1.092548*(n*o)),e.addScaledVector(l[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,o=t.z,l=this.coefficients;return e.copy(l[0]).multiplyScalar(.886227),e.addScaledVector(l[1],2*.511664*i),e.addScaledVector(l[2],2*.511664*o),e.addScaledVector(l[3],2*.511664*n),e.addScaledVector(l[4],2*.429043*n*i),e.addScaledVector(l[5],2*.429043*i*o),e.addScaledVector(l[6],.743125*o*o-.247708),e.addScaledVector(l[7],2*.429043*n*o),e.addScaledVector(l[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,o=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*o,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*o,e[6]=.315392*(3*o*o-1),e[7]=1.092548*n*o,e[8]=.546274*(n*n-i*i)}}class NS extends pa{constructor(t=new LS,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class _f extends ni{constructor(t){super(t),this.textures={}}load(t,e,n,i){const o=this,l=new Os(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(t,function(c){try{e(o.parse(JSON.parse(c)))}catch(h){i?i(h):console.error(h),o.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(o){return e[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),e[o]}const i=_f.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const o in t.uniforms){const l=t.uniforms[o];switch(i.uniforms[o]={},l.type){case"t":i.uniforms[o].value=n(l.value);break;case"c":i.uniforms[o].value=new Bt().setHex(l.value);break;case"v2":i.uniforms[o].value=new ht().fromArray(l.value);break;case"v3":i.uniforms[o].value=new O().fromArray(l.value);break;case"v4":i.uniforms[o].value=new Se().fromArray(l.value);break;case"m3":i.uniforms[o].value=new he().fromArray(l.value);break;case"m4":i.uniforms[o].value=new ie().fromArray(l.value);break;default:i.uniforms[o].value=l.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const o in t.extensions)i.extensions[o]=t.extensions[o];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let o=t.normalScale;Array.isArray(o)===!1&&(o=[o,o]),i.normalScale=new ht().fromArray(o)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:hS,SpriteMaterial:Vm,RawShaderMaterial:fS,ShaderMaterial:Ui,PointsMaterial:km,MeshPhysicalMaterial:dS,MeshStandardMaterial:Qm,MeshPhongMaterial:pS,MeshToonMaterial:mS,MeshNormalMaterial:gS,MeshLambertMaterial:vS,MeshDepthMaterial:Bm,MeshDistanceMaterial:Fm,MeshBasicMaterial:fa,MeshMatcapMaterial:_S,LineDashedMaterial:yS,LineBasicMaterial:qn,Material:In};return new e[t]}}class cm{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class sg extends pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class PS extends ni{constructor(t){super(t)}load(t,e,n,i){const o=this,l=new Os(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(t,function(c){try{e(o.parse(JSON.parse(c)))}catch(h){i?i(h):console.error(h),o.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(v,x){if(e[x]!==void 0)return e[x];const S=v.interleavedBuffers[x],y=o(v,S.buffer),A=mo(S.type,y),E=new tf(A,S.stride);return E.uuid=S.uuid,e[x]=E,E}function o(v,x){if(n[x]!==void 0)return n[x];const S=v.arrayBuffers[x],y=new Uint32Array(S).buffer;return n[x]=y,y}const l=t.isInstancedBufferGeometry?new sg:new pe,c=t.data.index;if(c!==void 0){const v=mo(c.type,c.array);l.setIndex(new ze(v,1))}const h=t.data.attributes;for(const v in h){const x=h[v];let M;if(x.isInterleavedBufferAttribute){const S=i(t.data,x.data);M=new vi(S,x.itemSize,x.offset,x.normalized)}else{const S=mo(x.type,x.array),y=x.isInstancedBufferAttribute?Ao:ze;M=new y(S,x.itemSize,x.normalized)}x.name!==void 0&&(M.name=x.name),x.usage!==void 0&&M.setUsage(x.usage),l.setAttribute(v,M)}const f=t.data.morphAttributes;if(f)for(const v in f){const x=f[v],M=[];for(let S=0,y=x.length;S<y;S++){const A=x[S];let E;if(A.isInterleavedBufferAttribute){const T=i(t.data,A.data);E=new vi(T,A.itemSize,A.offset,A.normalized)}else{const T=mo(A.type,A.array);E=new ze(T,A.itemSize,A.normalized)}A.name!==void 0&&(E.name=A.name),M.push(E)}l.morphAttributes[v]=M}t.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const m=t.data.groups||t.data.drawcalls||t.data.offsets;if(m!==void 0)for(let v=0,x=m.length;v!==x;++v){const M=m[v];l.addGroup(M.start,M.count,M.materialIndex)}const g=t.data.boundingSphere;if(g!==void 0){const v=new O;g.center!==void 0&&v.fromArray(g.center),l.boundingSphere=new Sn(v,g.radius)}return t.name&&(l.name=t.name),t.userData&&(l.userData=t.userData),l}}class RR extends ni{constructor(t){super(t)}load(t,e,n,i){const o=this,l=this.path===""?cm.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||l;const c=new Os(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){let f=null;try{f=JSON.parse(h)}catch(m){i!==void 0&&i(m),console.error("THREE:ObjectLoader: Can't parse "+t+".",m.message);return}const p=f.metadata;if(p===void 0||p.type===void 0||p.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}o.parse(f,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?cm.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const o=new Os(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials);const l=await o.loadAsync(t,e),c=JSON.parse(l),h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(c)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),o=this.parseGeometries(t.geometries,i),l=this.parseImages(t.images,function(){e!==void 0&&e(f)}),c=this.parseTextures(t.textures,l),h=this.parseMaterials(t.materials,c),f=this.parseObject(t.object,o,h,c,n),p=this.parseSkeletons(t.skeletons,f);if(this.bindSkeletons(f,p),this.bindLightTargets(f),e!==void 0){let m=!1;for(const g in l)if(l[g].data instanceof HTMLImageElement){m=!0;break}m===!1&&e(f)}return f}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),o=await this.parseImagesAsync(t.images),l=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,l),h=this.parseObject(t.object,i,c,l,e),f=this.parseSkeletons(t.skeletons,h);return this.bindSkeletons(h,f),this.bindLightTargets(h),h}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const o=new ar().fromJSON(t[n]);e[o.uuid]=o}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(o){o.isBone&&(i[o.uuid]=o)}),t!==void 0)for(let o=0,l=t.length;o<l;o++){const c=new ef().fromJSON(t[o],i);n[c.uuid]=c}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new PS;for(let o=0,l=t.length;o<l;o++){let c;const h=t[o];switch(h.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(h);break;default:h.type in H_?c=H_[h.type].fromJSON(h,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${h.type}"`)}c.uuid=h.uuid,h.name!==void 0&&(c.name=h.name),h.userData!==void 0&&(c.userData=h.userData),n[h.uuid]=c}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const o=new _f;o.setTextures(e);for(let l=0,c=t.length;l<c;l++){const h=t[l];n[h.uuid]===void 0&&(n[h.uuid]=o.parse(h)),i[h.uuid]=n[h.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],o=tc.parse(i);e[o.uuid]=o}return e}parseImages(t,e){const n=this,i={};let o;function l(h){return n.manager.itemStart(h),o.load(h,function(){n.manager.itemEnd(h)},void 0,function(){n.manager.itemError(h),n.manager.itemEnd(h)})}function c(h){if(typeof h=="string"){const f=h,p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;return l(p)}else return h.data?{data:mo(h.type,h.data),width:h.width,height:h.height}:null}if(t!==void 0&&t.length>0){const h=new ng(e);o=new ec(h),o.setCrossOrigin(this.crossOrigin);for(let f=0,p=t.length;f<p;f++){const m=t[f],g=m.url;if(Array.isArray(g)){const v=[];for(let x=0,M=g.length;x<M;x++){const S=g[x],y=c(S);y!==null&&(y instanceof HTMLImageElement?v.push(y):v.push(new as(y.data,y.width,y.height)))}i[m.uuid]=new tr(v)}else{const v=c(m.url);i[m.uuid]=new tr(v)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:e.resourcePath+c;return await i.loadAsync(h)}else return l.data?{data:mo(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){i=new ec(this.manager),i.setCrossOrigin(this.crossOrigin);for(let l=0,c=t.length;l<c;l++){const h=t[l],f=h.url;if(Array.isArray(f)){const p=[];for(let m=0,g=f.length;m<g;m++){const v=f[m],x=await o(v);x!==null&&(x instanceof HTMLImageElement?p.push(x):p.push(new as(x.data,x.width,x.height)))}n[h.uuid]=new tr(p)}else{const p=await o(h.url);n[h.uuid]=new tr(p)}}}return n}parseTextures(t,e){function n(o,l){return typeof o=="number"?o:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",o),l[o])}const i={};if(t!==void 0)for(let o=0,l=t.length;o<l;o++){const c=t[o];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),e[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const h=e[c.image],f=h.data;let p;Array.isArray(f)?(p=new oc,f.length===6&&(p.needsUpdate=!0)):(f&&f.data?p=new as:p=new nn,f&&(p.needsUpdate=!0)),p.source=h,p.uuid=c.uuid,c.name!==void 0&&(p.name=c.name),c.mapping!==void 0&&(p.mapping=n(c.mapping,UR)),c.channel!==void 0&&(p.channel=c.channel),c.offset!==void 0&&p.offset.fromArray(c.offset),c.repeat!==void 0&&p.repeat.fromArray(c.repeat),c.center!==void 0&&p.center.fromArray(c.center),c.rotation!==void 0&&(p.rotation=c.rotation),c.wrap!==void 0&&(p.wrapS=n(c.wrap[0],W_),p.wrapT=n(c.wrap[1],W_)),c.format!==void 0&&(p.format=c.format),c.internalFormat!==void 0&&(p.internalFormat=c.internalFormat),c.type!==void 0&&(p.type=c.type),c.colorSpace!==void 0&&(p.colorSpace=c.colorSpace),c.minFilter!==void 0&&(p.minFilter=n(c.minFilter,X_)),c.magFilter!==void 0&&(p.magFilter=n(c.magFilter,X_)),c.anisotropy!==void 0&&(p.anisotropy=c.anisotropy),c.flipY!==void 0&&(p.flipY=c.flipY),c.generateMipmaps!==void 0&&(p.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(p.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(p.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(p.compareFunction=c.compareFunction),c.userData!==void 0&&(p.userData=c.userData),i[c.uuid]=p}return i}parseObject(t,e,n,i,o){let l;function c(g){return e[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",g),e[g]}function h(g){if(g!==void 0){if(Array.isArray(g)){const v=[];for(let x=0,M=g.length;x<M;x++){const S=g[x];n[S]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",S),v.push(n[S])}return v}return n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),n[g]}}function f(g){return i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",g),i[g]}let p,m;switch(t.type){case"Scene":l=new Hm,t.background!==void 0&&(Number.isInteger(t.background)?l.background=new Bt(t.background):l.background=f(t.background)),t.environment!==void 0&&(l.environment=f(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?l.fog=new $h(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(l.fog=new Qh(t.fog.color,t.fog.density)),t.fog.name!==""&&(l.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(l.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(l.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&l.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(l.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&l.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":l=new un(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(l.focus=t.focus),t.zoom!==void 0&&(l.zoom=t.zoom),t.filmGauge!==void 0&&(l.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(l.filmOffset=t.filmOffset),t.view!==void 0&&(l.view=Object.assign({},t.view));break;case"OrthographicCamera":l=new fr(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(l.zoom=t.zoom),t.view!==void 0&&(l.view=Object.assign({},t.view));break;case"AmbientLight":l=new US(t.color,t.intensity);break;case"DirectionalLight":l=new RS(t.color,t.intensity),l.target=t.target||"";break;case"PointLight":l=new CS(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":l=new DS(t.color,t.intensity,t.width,t.height);break;case"SpotLight":l=new wS(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),l.target=t.target||"";break;case"HemisphereLight":l=new TS(t.color,t.groundColor,t.intensity);break;case"LightProbe":l=new NS().fromJSON(t);break;case"SkinnedMesh":p=c(t.geometry),m=h(t.material),l=new Qx(p,m),t.bindMode!==void 0&&(l.bindMode=t.bindMode),t.bindMatrix!==void 0&&l.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(l.skeleton=t.skeleton);break;case"Mesh":p=c(t.geometry),m=h(t.material),l=new an(p,m);break;case"InstancedMesh":p=c(t.geometry),m=h(t.material);const g=t.count,v=t.instanceMatrix,x=t.instanceColor;l=new $x(p,m,g),l.instanceMatrix=new Ao(new Float32Array(v.array),16),x!==void 0&&(l.instanceColor=new Ao(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":p=c(t.geometry),m=h(t.material),l=new tS(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,m),l.geometry=p,l.perObjectFrustumCulled=t.perObjectFrustumCulled,l.sortObjects=t.sortObjects,l._drawRanges=t.drawRanges,l._reservedRanges=t.reservedRanges,l._visibility=t.visibility,l._active=t.active,l._bounds=t.bounds.map(M=>{const S=new xn;S.min.fromArray(M.boxMin),S.max.fromArray(M.boxMax);const y=new Sn;return y.radius=M.sphereRadius,y.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:S,sphereInitialized:M.sphereInitialized,sphere:y}}),l._maxInstanceCount=t.maxInstanceCount,l._maxVertexCount=t.maxVertexCount,l._maxIndexCount=t.maxIndexCount,l._geometryInitialized=t.geometryInitialized,l._geometryCount=t.geometryCount,l._matricesTexture=f(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(l._colorsTexture=f(t.colorsTexture.uuid));break;case"LOD":l=new Jx;break;case"Line":l=new ua(c(t.geometry),h(t.material));break;case"LineLoop":l=new eS(c(t.geometry),h(t.material));break;case"LineSegments":l=new ls(c(t.geometry),h(t.material));break;case"PointCloud":case"Points":l=new nS(c(t.geometry),h(t.material));break;case"Sprite":l=new Kx(h(t.material));break;case"Group":l=new vo;break;case"Bone":l=new Gm;break;default:l=new Ce}if(l.uuid=t.uuid,t.name!==void 0&&(l.name=t.name),t.matrix!==void 0?(l.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(l.matrixAutoUpdate=t.matrixAutoUpdate),l.matrixAutoUpdate&&l.matrix.decompose(l.position,l.quaternion,l.scale)):(t.position!==void 0&&l.position.fromArray(t.position),t.rotation!==void 0&&l.rotation.fromArray(t.rotation),t.quaternion!==void 0&&l.quaternion.fromArray(t.quaternion),t.scale!==void 0&&l.scale.fromArray(t.scale)),t.up!==void 0&&l.up.fromArray(t.up),t.castShadow!==void 0&&(l.castShadow=t.castShadow),t.receiveShadow!==void 0&&(l.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(l.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(l.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(l.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(l.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&l.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(l.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(l.visible=t.visible),t.frustumCulled!==void 0&&(l.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(l.renderOrder=t.renderOrder),t.userData!==void 0&&(l.userData=t.userData),t.layers!==void 0&&(l.layers.mask=t.layers),t.children!==void 0){const g=t.children;for(let v=0;v<g.length;v++)l.add(this.parseObject(g[v],e,n,i,o))}if(t.animations!==void 0){const g=t.animations;for(let v=0;v<g.length;v++){const x=g[v];l.animations.push(o[x])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(l.autoUpdate=t.autoUpdate);const g=t.levels;for(let v=0;v<g.length;v++){const x=g[v],M=l.getObjectByProperty("uuid",x.object);M!==void 0&&l.addLevel(M,x.distance,x.hysteresis)}}return l}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new Ce}})}}const UR={UVMapping:Hh,CubeReflectionMapping:Ns,CubeRefractionMapping:ca,EquirectangularReflectionMapping:Ol,EquirectangularRefractionMapping:Il,CubeUVReflectionMapping:Co},W_={RepeatWrapping:zl,ClampToEdgeWrapping:Ri,MirroredRepeatWrapping:Bl},X_={NearestFilter:yn,NearestMipmapNearestFilter:xm,NearestMipmapLinearFilter:po,LinearFilter:hn,LinearMipmapNearestFilter:El,LinearMipmapLinearFilter:ns};class DR extends ni{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=Us.get(t);if(l!==void 0){if(o.manager.itemStart(t),l.then){l.then(f=>{e&&e(f),o.manager.itemEnd(t)}).catch(f=>{i&&i(f)});return}return setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const h=fetch(t,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){return Us.add(t,f),e&&e(f),o.manager.itemEnd(t),f}).catch(function(f){i&&i(f),Us.remove(t),o.manager.itemError(t),o.manager.itemEnd(t)});Us.add(t,h),o.manager.itemStart(t)}}let Bu;class ag{static getContext(){return Bu===void 0&&(Bu=new(window.AudioContext||window.webkitAudioContext)),Bu}static setContext(t){Bu=t}}class LR extends ni{constructor(t){super(t)}load(t,e,n,i){const o=this,l=new Os(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{const f=h.slice(0);ag.getContext().decodeAudioData(f,function(m){e(m)}).catch(c)}catch(f){c(f)}},n,i);function c(h){i?i(h):console.error(h),o.manager.itemError(t)}}}const q_=new ie,Y_=new ie,Wa=new ie;class NR{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new un,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new un,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Wa.copy(t.projectionMatrix);const i=e.eyeSep/2,o=i*e.near/e.focus,l=e.near*Math.tan(sr*e.fov*.5)/e.zoom;let c,h;Y_.elements[12]=-i,q_.elements[12]=i,c=-l*e.aspect+o,h=l*e.aspect+o,Wa.elements[0]=2*e.near/(h-c),Wa.elements[8]=(h+c)/(h-c),this.cameraL.projectionMatrix.copy(Wa),c=-l*e.aspect-o,h=l*e.aspect-o,Wa.elements[0]=2*e.near/(h-c),Wa.elements[8]=(h+c)/(h-c),this.cameraR.projectionMatrix.copy(Wa)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Y_),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(q_)}}class rg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Z_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Z_();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Z_(){return(typeof performance>"u"?Date:performance).now()}const Xa=new O,j_=new ei,PR=new O,qa=new O;class OR extends Ce{constructor(){super(),this.type="AudioListener",this.context=ag.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new rg}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Xa,j_,PR),qa.set(0,0,-1).applyQuaternion(j_),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Xa.x,i),e.positionY.linearRampToValueAtTime(Xa.y,i),e.positionZ.linearRampToValueAtTime(Xa.z,i),e.forwardX.linearRampToValueAtTime(qa.x,i),e.forwardY.linearRampToValueAtTime(qa.y,i),e.forwardZ.linearRampToValueAtTime(qa.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Xa.x,Xa.y,Xa.z),e.setOrientation(qa.x,qa.y,qa.z,n.x,n.y,n.z)}}class OS extends Ce{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Ya=new O,K_=new ei,IR=new O,Za=new O;class zR extends OS{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ya,K_,IR),Za.set(0,0,1).applyQuaternion(K_);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ya.x,n),e.positionY.linearRampToValueAtTime(Ya.y,n),e.positionZ.linearRampToValueAtTime(Ya.z,n),e.orientationX.linearRampToValueAtTime(Za.x,n),e.orientationY.linearRampToValueAtTime(Za.y,n),e.orientationZ.linearRampToValueAtTime(Za.z,n)}else e.setPosition(Ya.x,Ya.y,Ya.z),e.setOrientation(Za.x,Za.y,Za.z)}}class BR{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class IS{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,o,l;switch(e){case"quaternion":i=this._slerp,o=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,o=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,o=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=o,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,o=t*i+i;let l=this.cumulativeWeight;if(l===0){for(let c=0;c!==i;++c)n[o+c]=n[c];l=e}else{l+=e;const c=e/l;this._mixBufferRegion(n,o,0,c,i)}this.cumulativeWeight=l}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,o=this.cumulativeWeight,l=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const h=e*this._origIndex;this._mixBufferRegion(n,i,h,1-o,e)}l>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let h=e,f=e+e;h!==f;++h)if(n[h]!==n[h+e]){c.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let o=n,l=i;o!==l;++o)e[o]=e[i+o%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,o){if(i>=.5)for(let l=0;l!==o;++l)t[e+l]=t[n+l]}_slerp(t,e,n,i){ei.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,o){const l=this._workIndex*o;ei.multiplyQuaternionsFlat(t,l,t,e,t,n),ei.slerpFlat(t,e,t,e,t,l,i)}_lerp(t,e,n,i,o){const l=1-i;for(let c=0;c!==o;++c){const h=e+c;t[h]=t[h]*l+t[n+c]*i}}_lerpAdditive(t,e,n,i,o){for(let l=0;l!==o;++l){const c=e+l;t[c]=t[c]+t[n+l]*i}}}const og="\\[\\]\\.:\\/",FR=new RegExp("["+og+"]","g"),lg="[^"+og+"]",HR="[^"+og.replace("\\.","")+"]",VR=/((?:WC+[\/:])*)/.source.replace("WC",lg),GR=/(WCOD+)?/.source.replace("WCOD",HR),kR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lg),WR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lg),XR=new RegExp("^"+VR+GR+kR+WR+"$"),qR=["material","materials","bones","map"];class YR{constructor(t,e,n){const i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(FR,"")}static parseTrackName(t){const e=XR.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);qR.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let l=0;l<o.length;l++){const c=o[l];if(c.name===e||c.uuid===e)return c;const h=n(c.children);if(h)return h}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let o=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}const l=t[i];if(l===void 0){const f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=YR;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ZR{constructor(){this.isAnimationObjectGroup=!0,this.uuid=_i(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,o=this._bindings,l=o.length;let c,h=t.length,f=this.nCachedObjects_;for(let p=0,m=arguments.length;p!==m;++p){const g=arguments[p],v=g.uuid;let x=e[v];if(x===void 0){x=h++,e[v]=x,t.push(g);for(let M=0,S=l;M!==S;++M)o[M].push(new Te(g,n[M],i[M]))}else if(x<f){c=t[x];const M=--f,S=t[M];e[S.uuid]=x,t[x]=S,e[v]=M,t[M]=g;for(let y=0,A=l;y!==A;++y){const E=o[y],T=E[M];let z=E[x];E[x]=T,z===void 0&&(z=new Te(g,n[y],i[y])),E[M]=z}}else t[x]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=f}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let o=this.nCachedObjects_;for(let l=0,c=arguments.length;l!==c;++l){const h=arguments[l],f=h.uuid,p=e[f];if(p!==void 0&&p>=o){const m=o++,g=t[m];e[g.uuid]=p,t[p]=g,e[f]=m,t[m]=h;for(let v=0,x=i;v!==x;++v){const M=n[v],S=M[m],y=M[p];M[p]=S,M[m]=y}}}this.nCachedObjects_=o}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let o=this.nCachedObjects_,l=t.length;for(let c=0,h=arguments.length;c!==h;++c){const f=arguments[c],p=f.uuid,m=e[p];if(m!==void 0)if(delete e[p],m<o){const g=--o,v=t[g],x=--l,M=t[x];e[v.uuid]=m,t[m]=v,e[M.uuid]=g,t[g]=M,t.pop();for(let S=0,y=i;S!==y;++S){const A=n[S],E=A[g],T=A[x];A[m]=E,A[g]=T,A.pop()}}else{const g=--l,v=t[g];g>0&&(e[v.uuid]=m),t[m]=v,t.pop();for(let x=0,M=i;x!==M;++x){const S=n[x];S[m]=S[g],S.pop()}}}this.nCachedObjects_=o}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const o=this._bindings;if(i!==void 0)return o[i];const l=this._paths,c=this._parsedPaths,h=this._objects,f=h.length,p=this.nCachedObjects_,m=new Array(f);i=o.length,n[t]=i,l.push(t),c.push(e),o.push(m);for(let g=p,v=h.length;g!==v;++g){const x=h[g];m[g]=new Te(x,t,e)}return m}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,o=this._parsedPaths,l=this._bindings,c=l.length-1,h=l[c],f=t[c];e[f]=n,l[n]=h,l.pop(),o[n]=o[c],o.pop(),i[n]=i[c],i.pop()}}}class zS{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const o=e.tracks,l=o.length,c=new Array(l),h={endingStart:Qa,endingEnd:Qa};for(let f=0;f!==l;++f){const p=o[f].createInterpolant(null);c[f]=p,p.settings=h}this._interpolantSettings=h,this._interpolants=c,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Sx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,o=t._clip.duration,l=o/i,c=i/o;t.warp(1,l,e),this.warp(c,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,o=i.time,l=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const h=c.parameterPositions,f=c.sampleValues;return h[0]=o,h[1]=o+n,f[0]=t/l,f[1]=e/l,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const o=this._startTime;if(o!==null){const h=(t-o)*n;h<0||n===0?e=0:(this._startTime=null,e=n*h)}e*=this._updateTimeScale(t);const l=this._updateTime(e),c=this._updateWeight(t);if(c>0){const h=this._interpolants,f=this._propertyBindings;switch(this.blendMode){case Um:for(let p=0,m=h.length;p!==m;++p)h[p].evaluate(l),f[p].accumulateAdditive(c);break;case Yh:default:for(let p=0,m=h.length;p!==m;++p)h[p].evaluate(l),f[p].accumulate(i,c)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,o=this._loopCount;const l=n===Mx;if(t===0)return o===-1?i:l&&(o&1)===1?e-i:i;if(n===xx){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(o===-1&&(t>=0?(o=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),i>=e||i<0){const c=Math.floor(i/e);i-=e*c,o+=Math.abs(c);const h=this.repetitions-o;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(h===1){const f=t<0;this._setEndings(f,!f,l)}else this._setEndings(!1,!1,l);this._loopCount=o,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(l&&(o&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=$a,i.endingEnd=$a):(t?i.endingStart=this.zeroSlopeAtStart?$a:Qa:i.endingStart=Hl,e?i.endingEnd=this.zeroSlopeAtEnd?$a:Qa:i.endingEnd=Hl)}_scheduleFading(t,e,n){const i=this._mixer,o=i.time;let l=this._weightInterpolant;l===null&&(l=i._lendControlInterpolant(),this._weightInterpolant=l);const c=l.parameterPositions,h=l.sampleValues;return c[0]=o,h[0]=e,c[1]=o+t,h[1]=n,this}}const jR=new Float32Array(1);class KR extends Is{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,o=i.length,l=t._propertyBindings,c=t._interpolants,h=n.uuid,f=this._bindingsByRootAndName;let p=f[h];p===void 0&&(p={},f[h]=p);for(let m=0;m!==o;++m){const g=i[m],v=g.name;let x=p[v];if(x!==void 0)++x.referenceCount,l[m]=x;else{if(x=l[m],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,h,v));continue}const M=e&&e._propertyBindings[m].binding.parsedPath;x=new IS(Te.create(n,v,M),g.ValueTypeName,g.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,h,v),l[m]=x}c[m].resultBuffer=x.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,o=this._actionsByClip[i];this._bindAction(t,o&&o.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,o=this._actionsByClip;let l=o[e];if(l===void 0)l={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,o[e]=l;else{const c=l.knownActions;t._byClipCacheIndex=c.length,c.push(t)}t._cacheIndex=i.length,i.push(t),l.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const o=t._clip.uuid,l=this._actionsByClip,c=l[o],h=c.knownActions,f=h[h.length-1],p=t._byClipCacheIndex;f._byClipCacheIndex=p,h[p]=f,h.pop(),t._byClipCacheIndex=null;const m=c.actionByRoot,g=(t._localRoot||this._root).uuid;delete m[g],h.length===0&&delete l[o],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,o=this._bindings;let l=i[e];l===void 0&&(l={},i[e]=l),l[n]=t,t._cacheIndex=o.length,o.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,o=n.path,l=this._bindingsByRootAndName,c=l[i],h=e[e.length-1],f=t._cacheIndex;h._cacheIndex=f,e[f]=h,e.pop(),delete c[o],Object.keys(c).length===0&&delete l[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new tg(new Float32Array(2),new Float32Array(2),1,jR),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,o=e[i];t.__cacheIndex=i,e[i]=t,o.__cacheIndex=n,e[n]=o}clipAction(t,e,n){const i=e||this._root,o=i.uuid;let l=typeof t=="string"?tc.findByName(i,t):t;const c=l!==null?l.uuid:t,h=this._actionsByClip[c];let f=null;if(n===void 0&&(l!==null?n=l.blendMode:n=Yh),h!==void 0){const m=h.actionByRoot[o];if(m!==void 0&&m.blendMode===n)return m;f=h.knownActions[0],l===null&&(l=f._clip)}if(l===null)return null;const p=new zS(this,l,e,n);return this._bindAction(p,f),this._addInactiveAction(p,c,o),p}existingAction(t,e){const n=e||this._root,i=n.uuid,o=typeof t=="string"?tc.findByName(n,t):t,l=o?o.uuid:t,c=this._actionsByClip[l];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,o=Math.sign(t),l=this._accuIndex^=1;for(let f=0;f!==n;++f)e[f]._update(i,t,o,l);const c=this._bindings,h=this._nActiveBindings;for(let f=0;f!==h;++f)c[f].apply(l);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,o=i[n];if(o!==void 0){const l=o.knownActions;for(let c=0,h=l.length;c!==h;++c){const f=l[c];this._deactivateAction(f);const p=f._cacheIndex,m=e[e.length-1];f._cacheIndex=null,f._byClipCacheIndex=null,m._cacheIndex=p,e[p]=m,e.pop(),this._removeInactiveBindingsForAction(f)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const l in n){const c=n[l].actionByRoot,h=c[e];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}const i=this._bindingsByRootAndName,o=i[e];if(o!==void 0)for(const l in o){const c=o[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class cg{constructor(t){this.value=t}clone(){return new cg(this.value.clone===void 0?this.value:this.value.clone())}}let JR=0;class QR extends Is{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:JR++}),this.name="",this.usage=Wl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const o=Array.isArray(e[n])?e[n]:[e[n]];for(let l=0;l<o.length;l++)this.uniforms.push(o[l].clone())}return this}clone(){return new this.constructor().copy(this)}}class Nh extends tf{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class $R{constructor(t,e,n,i,o){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const J_=new ie;class BS{constructor(t,e,n=0,i=1/0){this.ray=new Uo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return J_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J_),this}intersectObject(t,e=!0,n=[]){return um(t,this,n,e),n.sort(Q_),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)um(t[i],this,n,e);return n.sort(Q_),n}}function Q_(s,t){return s.distance-t.distance}function um(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let l=0,c=o.length;l<c;l++)um(o[l],t,e,!0)}}class t3{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class e3{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class ug{constructor(t,e,n,i){ug.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=i,this}}const $_=new ht;class n3{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$_.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$_).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ty=new O,Fu=new O;class FS{constructor(t=new O,e=new O){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ty.subVectors(t,this.start),Fu.subVectors(this.end,this.start);const n=Fu.dot(Fu);let o=Fu.dot(ty)/n;return e&&(o=en(o,0,1)),o}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const ey=new O;class i3 extends Ce{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new pe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,h=32;l<h;l++,c++){const f=l/h*Math.PI*2,p=c/h*Math.PI*2;i.push(Math.cos(f),Math.sin(f),1,Math.cos(p),Math.sin(p),1)}n.setAttribute("position",new Yt(i,3));const o=new qn({fog:!1,toneMapped:!1});this.cone=new ls(n,o),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),ey.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ey),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const aa=new O,Hu=new ie,Tp=new ie;class s3 extends ls{constructor(t){const e=HS(t),n=new pe,i=[],o=[],l=new Bt(0,0,1),c=new Bt(0,1,0);for(let f=0;f<e.length;f++){const p=e[f];p.parent&&p.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),o.push(l.r,l.g,l.b),o.push(c.r,c.g,c.b))}n.setAttribute("position",new Yt(i,3)),n.setAttribute("color",new Yt(o,3));const h=new qn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,h),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Tp.copy(this.root.matrixWorld).invert();for(let o=0,l=0;o<e.length;o++){const c=e[o];c.parent&&c.parent.isBone&&(Hu.multiplyMatrices(Tp,c.matrixWorld),aa.setFromMatrixPosition(Hu),i.setXYZ(l,aa.x,aa.y,aa.z),Hu.multiplyMatrices(Tp,c.parent.matrixWorld),aa.setFromMatrixPosition(Hu),i.setXYZ(l+1,aa.x,aa.y,aa.z),l+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function HS(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,HS(s.children[e]));return t}class a3 extends an{constructor(t,e,n){const i=new hc(e,4,2),o=new fa({wireframe:!0,fog:!1,toneMapped:!1});super(i,o),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const r3=new O,ny=new Bt,iy=new Bt;class o3 extends Ce{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new uc(e);i.rotateY(Math.PI*.5),this.material=new fa({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const o=i.getAttribute("position"),l=new Float32Array(o.count*3);i.setAttribute("color",new ze(l,3)),this.add(new an(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");ny.copy(this.light.color),iy.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const o=n<i/2?ny:iy;e.setXYZ(n,o.r,o.g,o.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(r3.setFromMatrixPosition(this.light.matrixWorld).negate())}}class l3 extends ls{constructor(t=10,e=10,n=4473924,i=8947848){n=new Bt(n),i=new Bt(i);const o=e/2,l=t/e,c=t/2,h=[],f=[];for(let g=0,v=0,x=-c;g<=e;g++,x+=l){h.push(-c,0,x,c,0,x),h.push(x,0,-c,x,0,c);const M=g===o?n:i;M.toArray(f,v),v+=3,M.toArray(f,v),v+=3,M.toArray(f,v),v+=3,M.toArray(f,v),v+=3}const p=new pe;p.setAttribute("position",new Yt(h,3)),p.setAttribute("color",new Yt(f,3));const m=new qn({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class c3 extends ls{constructor(t=10,e=16,n=8,i=64,o=4473924,l=8947848){o=new Bt(o),l=new Bt(l);const c=[],h=[];if(e>1)for(let m=0;m<e;m++){const g=m/e*(Math.PI*2),v=Math.sin(g)*t,x=Math.cos(g)*t;c.push(0,0,0),c.push(v,0,x);const M=m&1?o:l;h.push(M.r,M.g,M.b),h.push(M.r,M.g,M.b)}for(let m=0;m<n;m++){const g=m&1?o:l,v=t-t/n*m;for(let x=0;x<i;x++){let M=x/i*(Math.PI*2),S=Math.sin(M)*v,y=Math.cos(M)*v;c.push(S,0,y),h.push(g.r,g.g,g.b),M=(x+1)/i*(Math.PI*2),S=Math.sin(M)*v,y=Math.cos(M)*v,c.push(S,0,y),h.push(g.r,g.g,g.b)}}const f=new pe;f.setAttribute("position",new Yt(c,3)),f.setAttribute("color",new Yt(h,3));const p=new qn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const sy=new O,Vu=new O,ay=new O;class u3 extends Ce{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new pe;i.setAttribute("position",new Yt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const o=new qn({fog:!1,toneMapped:!1});this.lightPlane=new ua(i,o),this.add(this.lightPlane),i=new pe,i.setAttribute("position",new Yt([0,0,0,0,0,1],3)),this.targetLine=new ua(i,o),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),sy.setFromMatrixPosition(this.light.matrixWorld),Vu.setFromMatrixPosition(this.light.target.matrixWorld),ay.subVectors(Vu,sy),this.lightPlane.lookAt(Vu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Vu),this.targetLine.scale.z=ay.length()}}const Gu=new O,tn=new Kh;class h3 extends ls{constructor(t){const e=new pe,n=new qn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],o=[],l={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(x,M){h(x),h(M)}function h(x){i.push(0,0,0),o.push(0,0,0),l[x]===void 0&&(l[x]=[]),l[x].push(i.length/3-1)}e.setAttribute("position",new Yt(i,3)),e.setAttribute("color",new Yt(o,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const f=new Bt(16755200),p=new Bt(16711680),m=new Bt(43775),g=new Bt(16777215),v=new Bt(3355443);this.setColors(f,p,m,g,v)}setColors(t,e,n,i,o){const c=this.geometry.getAttribute("color");c.setXYZ(0,t.r,t.g,t.b),c.setXYZ(1,t.r,t.g,t.b),c.setXYZ(2,t.r,t.g,t.b),c.setXYZ(3,t.r,t.g,t.b),c.setXYZ(4,t.r,t.g,t.b),c.setXYZ(5,t.r,t.g,t.b),c.setXYZ(6,t.r,t.g,t.b),c.setXYZ(7,t.r,t.g,t.b),c.setXYZ(8,t.r,t.g,t.b),c.setXYZ(9,t.r,t.g,t.b),c.setXYZ(10,t.r,t.g,t.b),c.setXYZ(11,t.r,t.g,t.b),c.setXYZ(12,t.r,t.g,t.b),c.setXYZ(13,t.r,t.g,t.b),c.setXYZ(14,t.r,t.g,t.b),c.setXYZ(15,t.r,t.g,t.b),c.setXYZ(16,t.r,t.g,t.b),c.setXYZ(17,t.r,t.g,t.b),c.setXYZ(18,t.r,t.g,t.b),c.setXYZ(19,t.r,t.g,t.b),c.setXYZ(20,t.r,t.g,t.b),c.setXYZ(21,t.r,t.g,t.b),c.setXYZ(22,t.r,t.g,t.b),c.setXYZ(23,t.r,t.g,t.b),c.setXYZ(24,e.r,e.g,e.b),c.setXYZ(25,e.r,e.g,e.b),c.setXYZ(26,e.r,e.g,e.b),c.setXYZ(27,e.r,e.g,e.b),c.setXYZ(28,e.r,e.g,e.b),c.setXYZ(29,e.r,e.g,e.b),c.setXYZ(30,e.r,e.g,e.b),c.setXYZ(31,e.r,e.g,e.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,o.r,o.g,o.b),c.setXYZ(41,o.r,o.g,o.b),c.setXYZ(42,o.r,o.g,o.b),c.setXYZ(43,o.r,o.g,o.b),c.setXYZ(44,o.r,o.g,o.b),c.setXYZ(45,o.r,o.g,o.b),c.setXYZ(46,o.r,o.g,o.b),c.setXYZ(47,o.r,o.g,o.b),c.setXYZ(48,o.r,o.g,o.b),c.setXYZ(49,o.r,o.g,o.b),c.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;tn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),sn("c",e,t,tn,0,0,-1),sn("t",e,t,tn,0,0,1),sn("n1",e,t,tn,-1,-1,-1),sn("n2",e,t,tn,n,-1,-1),sn("n3",e,t,tn,-1,i,-1),sn("n4",e,t,tn,n,i,-1),sn("f1",e,t,tn,-1,-1,1),sn("f2",e,t,tn,n,-1,1),sn("f3",e,t,tn,-1,i,1),sn("f4",e,t,tn,n,i,1),sn("u1",e,t,tn,n*.7,i*1.1,-1),sn("u2",e,t,tn,-1*.7,i*1.1,-1),sn("u3",e,t,tn,0,i*2,-1),sn("cf1",e,t,tn,-1,0,1),sn("cf2",e,t,tn,n,0,1),sn("cf3",e,t,tn,0,-1,1),sn("cf4",e,t,tn,0,i,1),sn("cn1",e,t,tn,-1,0,-1),sn("cn2",e,t,tn,n,0,-1),sn("cn3",e,t,tn,0,-1,-1),sn("cn4",e,t,tn,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function sn(s,t,e,n,i,o,l){Gu.set(i,o,l).unproject(n);const c=t[s];if(c!==void 0){const h=e.getAttribute("position");for(let f=0,p=c.length;f<p;f++)h.setXYZ(c[f],Gu.x,Gu.y,Gu.z)}}const ku=new xn;class f3 extends ls{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),o=new pe;o.setIndex(new ze(n,1)),o.setAttribute("position",new ze(i,3)),super(o,new qn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ku.setFromObject(this.object),ku.isEmpty())return;const e=ku.min,n=ku.max,i=this.geometry.attributes.position,o=i.array;o[0]=n.x,o[1]=n.y,o[2]=n.z,o[3]=e.x,o[4]=n.y,o[5]=n.z,o[6]=e.x,o[7]=e.y,o[8]=n.z,o[9]=n.x,o[10]=e.y,o[11]=n.z,o[12]=n.x,o[13]=n.y,o[14]=e.z,o[15]=e.x,o[16]=n.y,o[17]=e.z,o[18]=e.x,o[19]=e.y,o[20]=e.z,o[21]=n.x,o[22]=e.y,o[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class d3 extends ls{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],o=new pe;o.setIndex(new ze(n,1)),o.setAttribute("position",new Yt(i,3)),super(o,new qn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class p3 extends ua{constructor(t,e=1,n=16776960){const i=n,o=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],l=new pe;l.setAttribute("position",new Yt(o,3)),l.computeBoundingSphere(),super(l,new qn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],h=new pe;h.setAttribute("position",new Yt(c,3)),h.computeBoundingSphere(),this.add(new an(h,new fa({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ry=new O;let Wu,wp;class m3 extends Ce{constructor(t=new O(0,0,1),e=new O(0,0,0),n=1,i=16776960,o=n*.2,l=o*.2){super(),this.type="ArrowHelper",Wu===void 0&&(Wu=new pe,Wu.setAttribute("position",new Yt([0,0,0,0,1,0],3)),wp=new No(0,.5,1,5,1),wp.translate(0,-.5,0)),this.position.copy(e),this.line=new ua(Wu,new qn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new an(wp,new fa({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,o,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ry.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ry,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class g3 extends ls{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new pe;i.setAttribute("position",new Yt(e,3)),i.setAttribute("color",new Yt(n,3));const o=new qn({vertexColors:!0,toneMapped:!1});super(i,o),this.type="AxesHelper"}setColors(t,e,n){const i=new Bt,o=this.geometry.attributes.color.array;return i.set(t),i.toArray(o,0),i.toArray(o,3),i.set(e),i.toArray(o,6),i.toArray(o,9),i.set(n),i.toArray(o,12),i.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class v3{constructor(){this.type="ShapePath",this.color=new Bt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Zl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,o,l){return this.currentPath.bezierCurveTo(t,e,n,i,o,l),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(y){const A=[];for(let E=0,T=y.length;E<T;E++){const z=y[E],R=new ar;R.curves=z.curves,A.push(R)}return A}function n(y,A){const E=A.length;let T=!1;for(let z=E-1,R=0;R<E;z=R++){let N=A[z],H=A[R],C=H.x-N.x,w=H.y-N.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(N=A[R],C=-C,H=A[z],w=-w),y.y<N.y||y.y>H.y)continue;if(y.y===N.y){if(y.x===N.x)return!0}else{const B=w*(y.x-N.x)-C*(y.y-N.y);if(B===0)return!0;if(B<0)continue;T=!T}}else{if(y.y!==N.y)continue;if(H.x<=y.x&&y.x<=N.x||N.x<=y.x&&y.x<=H.x)return!0}}return T}const i=rs.isClockWise,o=this.subPaths;if(o.length===0)return[];let l,c,h;const f=[];if(o.length===1)return c=o[0],h=new ar,h.curves=c.curves,f.push(h),f;let p=!i(o[0].getPoints());p=t?!p:p;const m=[],g=[];let v=[],x=0,M;g[x]=void 0,v[x]=[];for(let y=0,A=o.length;y<A;y++)c=o[y],M=c.getPoints(),l=i(M),l=t?!l:l,l?(!p&&g[x]&&x++,g[x]={s:new ar,p:M},g[x].s.curves=c.curves,p&&x++,v[x]=[]):v[x].push({h:c,p:M[0]});if(!g[0])return e(o);if(g.length>1){let y=!1,A=0;for(let E=0,T=g.length;E<T;E++)m[E]=[];for(let E=0,T=g.length;E<T;E++){const z=v[E];for(let R=0;R<z.length;R++){const N=z[R];let H=!0;for(let C=0;C<g.length;C++)n(N.p,g[C].p)&&(E!==C&&A++,H?(H=!1,m[C].push(N)):y=!0);H&&m[E].push(N)}}A>0&&y===!1&&(v=m)}let S;for(let y=0,A=g.length;y<A;y++){h=g[y].s,f.push(h),S=v[y];for(let E=0,T=S.length;E<T;E++)h.holes.push(S[E].h)}return f}}class _3 extends Xi{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const y3=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ym,AddEquation:oa,AddOperation:fx,AdditiveAnimationBlendMode:Um,AdditiveBlending:Kp,AgXToneMapping:vx,AlphaFormat:Em,AlwaysCompare:Lx,AlwaysDepth:ax,AlwaysStencilFunc:tm,AmbientLight:US,AnimationAction:zS,AnimationClip:tc,AnimationLoader:SR,AnimationMixer:KR,AnimationObjectGroup:ZR,AnimationUtils:vR,ArcCurve:iS,ArrayCamera:Yx,ArrowHelper:m3,AttachedBindMode:$p,Audio:OS,AudioAnalyser:BR,AudioContext:ag,AudioListener:OR,AudioLoader:LR,AxesHelper:g3,BackSide:Xn,BasicDepthPacking:bx,BasicShadowMap:Fy,BatchedMesh:tS,Bone:Gm,BooleanKeyframeTrack:dr,Box2:n3,Box3:xn,Box3Helper:d3,BoxGeometry:hr,BoxHelper:f3,BufferAttribute:ze,BufferGeometry:pe,BufferGeometryLoader:PS,ByteType:Sm,Cache:Us,Camera:Kh,CameraHelper:h3,CanvasTexture:V2,CapsuleGeometry:af,CatmullRomCurve3:sS,CineonToneMapping:mx,CircleGeometry:rf,ClampToEdgeWrapping:Ri,Clock:rg,Color:Bt,ColorKeyframeTrack:eg,ColorManagement:we,CompressedArrayTexture:F2,CompressedCubeTexture:H2,CompressedTexture:nf,CompressedTextureLoader:MR,ConeGeometry:of,ConstantAlphaFactor:nx,ConstantColorFactor:tx,CubeCamera:Fx,CubeReflectionMapping:Ns,CubeRefractionMapping:ca,CubeTexture:oc,CubeTextureLoader:bR,CubeUVReflectionMapping:Co,CubicBezierCurve:Xm,CubicBezierCurve3:aS,CubicInterpolant:MS,CullFaceBack:jp,CullFaceFront:By,CullFaceFrontBack:v1,CullFaceNone:zy,Curve:qi,CurvePath:oS,CustomBlending:Hy,CustomToneMapping:gx,CylinderGeometry:No,Cylindrical:e3,Data3DTexture:Nm,DataArrayTexture:jh,DataTexture:as,DataTextureLoader:ER,DataUtils:RE,DecrementStencilOp:D1,DecrementWrapStencilOp:N1,DefaultLoadingManager:AS,DepthFormat:ir,DepthStencilFormat:lr,DepthTexture:zm,DetachedBindMode:yx,DirectionalLight:RS,DirectionalLightHelper:u3,DiscreteInterpolant:bS,DisplayP3ColorSpace:Zh,DodecahedronGeometry:lf,DoubleSide:ki,DstAlphaFactor:jy,DstColorFactor:Jy,DynamicCopyUsage:Z1,DynamicDrawUsage:G1,DynamicReadUsage:X1,EdgesGeometry:Km,EllipseCurve:sf,EqualCompare:Cx,EqualDepth:ox,EqualStencilFunc:z1,EquirectangularReflectionMapping:Ol,EquirectangularRefractionMapping:Il,Euler:yi,EventDispatcher:Is,ExtrudeGeometry:uf,FileLoader:Os,Float16BufferAttribute:OE,Float32BufferAttribute:Yt,FloatType:ti,Fog:$h,FogExp2:Qh,FramebufferTexture:B2,FrontSide:Ls,Frustum:lc,GLBufferAttribute:$R,GLSL1:K1,GLSL3:em,GreaterCompare:Rx,GreaterDepth:cx,GreaterEqualCompare:Dx,GreaterEqualDepth:lx,GreaterEqualStencilFunc:V1,GreaterStencilFunc:F1,GridHelper:l3,Group:vo,HalfFloatType:Ro,HemisphereLight:TS,HemisphereLightHelper:o3,IcosahedronGeometry:hf,ImageBitmapLoader:DR,ImageLoader:ec,ImageUtils:Ox,IncrementStencilOp:U1,IncrementWrapStencilOp:L1,InstancedBufferAttribute:Ao,InstancedBufferGeometry:sg,InstancedInterleavedBuffer:Nh,InstancedMesh:$x,Int16BufferAttribute:NE,Int32BufferAttribute:PE,Int8BufferAttribute:UE,IntType:Vh,InterleavedBuffer:tf,InterleavedBufferAttribute:vi,Interpolant:fc,InterpolateDiscrete:Fl,InterpolateLinear:Ch,InterpolateSmooth:Ku,InvertStencilOp:P1,KeepStencilOp:ja,KeyframeTrack:Yi,LOD:Jx,LatheGeometry:cc,Layers:bo,LessCompare:wx,LessDepth:rx,LessEqualCompare:Dm,LessEqualDepth:Pl,LessEqualStencilFunc:B1,LessStencilFunc:I1,Light:pa,LightProbe:NS,Line:ua,Line3:FS,LineBasicMaterial:qn,LineCurve:qm,LineCurve3:rS,LineDashedMaterial:yS,LineLoop:eS,LineSegments:ls,LinearDisplayP3ColorSpace:rc,LinearFilter:hn,LinearInterpolant:tg,LinearMipMapLinearFilter:S1,LinearMipMapNearestFilter:x1,LinearMipmapLinearFilter:ns,LinearMipmapNearestFilter:El,LinearSRGBColorSpace:os,LinearToneMapping:dx,LinearTransfer:Vl,Loader:ni,LoaderUtils:cm,LoadingManager:ng,LoopOnce:xx,LoopPingPong:Mx,LoopRepeat:Sx,LuminanceAlphaFormat:wm,LuminanceFormat:Tm,MOUSE:m1,Material:In,MaterialLoader:_f,MathUtils:ql,Matrix2:ug,Matrix3:he,Matrix4:ie,MaxEquation:Wy,Mesh:an,MeshBasicMaterial:fa,MeshDepthMaterial:Bm,MeshDistanceMaterial:Fm,MeshLambertMaterial:vS,MeshMatcapMaterial:_S,MeshNormalMaterial:gS,MeshPhongMaterial:pS,MeshPhysicalMaterial:dS,MeshStandardMaterial:Qm,MeshToonMaterial:mS,MinEquation:ky,MirroredRepeatWrapping:Bl,MixOperation:hx,MultiplyBlending:Qp,MultiplyOperation:sc,NearestFilter:yn,NearestMipMapLinearFilter:y1,NearestMipMapNearestFilter:_1,NearestMipmapLinearFilter:po,NearestMipmapNearestFilter:xm,NeutralToneMapping:_x,NeverCompare:Tx,NeverDepth:sx,NeverStencilFunc:O1,NoBlending:Ds,NoColorSpace:Cs,NoToneMapping:ss,NormalAnimationBlendMode:Yh,NormalBlending:nr,NotEqualCompare:Ux,NotEqualDepth:ux,NotEqualStencilFunc:H1,NumberKeyframeTrack:Ql,Object3D:Ce,ObjectLoader:RR,ObjectSpaceNormalMap:Ax,OctahedronGeometry:uc,OneFactor:qy,OneMinusConstantAlphaFactor:ix,OneMinusConstantColorFactor:ex,OneMinusDstAlphaFactor:Ky,OneMinusDstColorFactor:Qy,OneMinusSrcAlphaFactor:eh,OneMinusSrcColorFactor:Zy,OrthographicCamera:fr,P3Primaries:kl,PCFShadowMap:Fh,PCFSoftShadowMap:bl,PMREMGenerator:nm,Path:Zl,PerspectiveCamera:un,Plane:ra,PlaneGeometry:Do,PlaneHelper:p3,PointLight:CS,PointLightHelper:a3,Points:nS,PointsMaterial:km,PolarGridHelper:c3,PolyhedronGeometry:da,PositionalAudio:zR,PropertyBinding:Te,PropertyMixer:IS,QuadraticBezierCurve:Ym,QuadraticBezierCurve3:Zm,Quaternion:ei,QuaternionKeyframeTrack:dc,QuaternionLinearInterpolant:ES,RED_GREEN_RGTC2_Format:Th,RED_RGTC1_Format:Rm,REVISION:ic,RGBADepthPacking:Ex,RGBAFormat:On,RGBAIntegerFormat:qh,RGBA_ASTC_10x10_Format:xh,RGBA_ASTC_10x5_Format:vh,RGBA_ASTC_10x6_Format:_h,RGBA_ASTC_10x8_Format:yh,RGBA_ASTC_12x10_Format:Sh,RGBA_ASTC_12x12_Format:Mh,RGBA_ASTC_4x4_Format:ch,RGBA_ASTC_5x4_Format:uh,RGBA_ASTC_5x5_Format:hh,RGBA_ASTC_6x5_Format:fh,RGBA_ASTC_6x6_Format:dh,RGBA_ASTC_8x5_Format:ph,RGBA_ASTC_8x6_Format:mh,RGBA_ASTC_8x8_Format:gh,RGBA_BPTC_Format:Rl,RGBA_ETC2_EAC_Format:lh,RGBA_PVRTC_2BPPV1_Format:ah,RGBA_PVRTC_4BPPV1_Format:sh,RGBA_S3TC_DXT1_Format:Tl,RGBA_S3TC_DXT3_Format:wl,RGBA_S3TC_DXT5_Format:Cl,RGBDepthPacking:T1,RGBFormat:Am,RGBIntegerFormat:M1,RGB_BPTC_SIGNED_Format:bh,RGB_BPTC_UNSIGNED_Format:Eh,RGB_ETC1_Format:rh,RGB_ETC2_Format:oh,RGB_PVRTC_2BPPV1_Format:ih,RGB_PVRTC_4BPPV1_Format:nh,RGB_S3TC_DXT1_Format:Al,RGDepthPacking:w1,RGFormat:Cm,RGIntegerFormat:Xh,RawShaderMaterial:fS,Ray:Uo,Raycaster:BS,Rec709Primaries:Gl,RectAreaLight:DS,RedFormat:Wh,RedIntegerFormat:ac,ReinhardToneMapping:px,RenderTarget:Ix,RepeatWrapping:zl,ReplaceStencilOp:R1,ReverseSubtractEquation:Gy,RingGeometry:ff,SIGNED_RED_GREEN_RGTC2_Format:wh,SIGNED_RED_RGTC1_Format:Ah,SRGBColorSpace:$n,SRGBTransfer:Ve,Scene:Hm,ShaderChunk:de,ShaderLib:Gi,ShaderMaterial:Ui,ShadowMaterial:hS,Shape:ar,ShapeGeometry:df,ShapePath:v3,ShapeUtils:rs,ShortType:Mm,Skeleton:ef,SkeletonHelper:s3,SkinnedMesh:Qx,Source:tr,Sphere:Sn,SphereGeometry:hc,Spherical:t3,SphericalHarmonics3:LS,SplineCurve:jm,SpotLight:wS,SpotLightHelper:i3,Sprite:Kx,SpriteMaterial:Vm,SrcAlphaFactor:th,SrcAlphaSaturateFactor:$y,SrcColorFactor:Yy,StaticCopyUsage:Y1,StaticDrawUsage:Wl,StaticReadUsage:W1,StereoCamera:NR,StreamCopyUsage:j1,StreamDrawUsage:k1,StreamReadUsage:q1,StringKeyframeTrack:pr,SubtractEquation:Vy,SubtractiveBlending:Jp,TOUCH:g1,TangentSpaceNormalMap:ha,TetrahedronGeometry:pf,Texture:nn,TextureLoader:AR,TextureUtils:v2,TorusGeometry:mf,TorusKnotGeometry:gf,Triangle:gi,TriangleFanDrawMode:A1,TriangleStripDrawMode:E1,TrianglesDrawMode:b1,TubeGeometry:vf,UVMapping:Hh,Uint16BufferAttribute:Pm,Uint32BufferAttribute:Om,Uint8BufferAttribute:DE,Uint8ClampedBufferAttribute:LE,Uniform:cg,UniformsGroup:QR,UniformsLib:Lt,UniformsUtils:Rh,UnsignedByteType:Wi,UnsignedInt248Type:or,UnsignedInt5999Type:bm,UnsignedIntType:Ps,UnsignedShort4444Type:Gh,UnsignedShort5551Type:kh,UnsignedShortType:So,VSMShadowMap:Vi,Vector2:ht,Vector3:O,Vector4:Se,VectorKeyframeTrack:$l,VideoTexture:z2,WebGL3DRenderTarget:yE,WebGLArrayRenderTarget:_E,WebGLCoordinateSystem:is,WebGLCubeRenderTarget:Hx,WebGLMultipleRenderTargets:_3,WebGLRenderTarget:Xi,WebGLRenderer:Zx,WebGLUtils:qx,WebGPUCoordinateSystem:Xl,WireframeGeometry:Jm,WrapAroundEnding:Hl,ZeroCurvatureEnding:Qa,ZeroFactor:Xy,ZeroSlopeEnding:$a,ZeroStencilOp:C1,createCanvasElement:Px},Symbol.toStringTag,{value:"Module"}));var Cp={exports:{}},ws={};/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function x3(){return oy||(oy=1,ws.ConcurrentRoot=1,ws.ContinuousEventPriority=8,ws.DefaultEventPriority=32,ws.DiscreteEventPriority=2,ws.IdleEventPriority=268435456,ws.LegacyRoot=0,ws.NoEventPriority=0),ws}var ly;function S3(){return ly||(ly=1,Cp.exports=x3()),Cp.exports}var Qu=S3(),Rp={exports:{}},Up={},Dp={exports:{}},Lp={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function M3(){if(cy)return Lp;cy=1;var s=_m();function t(m,g){return m===g&&(m!==0||1/m===1/g)||m!==m&&g!==g}var e=typeof Object.is=="function"?Object.is:t,n=s.useState,i=s.useEffect,o=s.useLayoutEffect,l=s.useDebugValue;function c(m,g){var v=g(),x=n({inst:{value:v,getSnapshot:g}}),M=x[0].inst,S=x[1];return o(function(){M.value=v,M.getSnapshot=g,h(M)&&S({inst:M})},[m,v,g]),i(function(){return h(M)&&S({inst:M}),m(function(){h(M)&&S({inst:M})})},[m]),l(v),v}function h(m){var g=m.getSnapshot;m=m.value;try{var v=g();return!e(m,v)}catch{return!0}}function f(m,g){return g()}var p=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:c;return Lp.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:p,Lp}var uy;function b3(){return uy||(uy=1,Dp.exports=M3()),Dp.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function E3(){if(hy)return Up;hy=1;var s=_m(),t=b3();function e(f,p){return f===p&&(f!==0||1/f===1/p)||f!==f&&p!==p}var n=typeof Object.is=="function"?Object.is:e,i=t.useSyncExternalStore,o=s.useRef,l=s.useEffect,c=s.useMemo,h=s.useDebugValue;return Up.useSyncExternalStoreWithSelector=function(f,p,m,g,v){var x=o(null);if(x.current===null){var M={hasValue:!1,value:null};x.current=M}else M=x.current;x=c(function(){function y(R){if(!A){if(A=!0,E=R,R=g(R),v!==void 0&&M.hasValue){var N=M.value;if(v(N,R))return T=N}return T=R}if(N=T,n(E,R))return N;var H=g(R);return v!==void 0&&v(N,H)?(E=R,N):(E=R,T=H)}var A=!1,E,T,z=m===void 0?null:m;return[function(){return y(p())},z===null?void 0:function(){return y(z())}]},[p,m,g,v]);var S=i(f,x[0],x[1]);return l(function(){M.hasValue=!0,M.value=S},[S]),h(S),S},Up}var fy;function A3(){return fy||(fy=1,Rp.exports=E3()),Rp.exports}var T3=A3();const w3=Iy(T3),dy=s=>{let t;const e=new Set,n=(f,p)=>{const m=typeof f=="function"?f(t):f;if(!Object.is(m,t)){const g=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),e.forEach(v=>v(t,g))}},i=()=>t,c={setState:n,getState:i,getInitialState:()=>h,subscribe:f=>(e.add(f),()=>e.delete(f))},h=t=s(n,i,c);return c},C3=s=>s?dy(s):dy,{useSyncExternalStoreWithSelector:R3}=w3,U3=s=>s;function D3(s,t=U3,e){const n=R3(s.subscribe,s.getState,s.getInitialState,t,e);return d1.useDebugValue(n),n}const py=(s,t)=>{const e=C3(s),n=(i,o=t)=>D3(e,i,o);return Object.assign(n,e),n},L3=(s,t)=>s?py(s,t):py;var Np={exports:{}},Pp={exports:{}},Op={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function N3(){return my||(my=1,function(s){function t(I,k){var G=I.length;I.push(k);t:for(;0<G;){var at=G-1>>>1,rt=I[at];if(0<i(rt,k))I[at]=k,I[G]=rt,G=at;else break t}}function e(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var k=I[0],G=I.pop();if(G!==k){I[0]=G;t:for(var at=0,rt=I.length,ft=rt>>>1;at<ft;){var Ct=2*(at+1)-1,Wt=I[Ct],J=Ct+1,ct=I[J];if(0>i(Wt,G))J<rt&&0>i(ct,Wt)?(I[at]=ct,I[J]=G,at=J):(I[at]=Wt,I[Ct]=G,at=Ct);else if(J<rt&&0>i(ct,G))I[at]=ct,I[J]=G,at=J;else break t}}return k}function i(I,k){var G=I.sortIndex-k.sortIndex;return G!==0?G:I.id-k.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var h=[],f=[],p=1,m=null,g=3,v=!1,x=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function E(I){for(var k=e(f);k!==null;){if(k.callback===null)n(f);else if(k.startTime<=I)n(f),k.sortIndex=k.expirationTime,t(h,k);else break;k=e(f)}}function T(I){if(M=!1,E(I),!x)if(e(h)!==null)x=!0,K();else{var k=e(f);k!==null&&et(T,k.startTime-I)}}var z=!1,R=-1,N=5,H=-1;function C(){return!(s.unstable_now()-H<N)}function w(){if(z){var I=s.unstable_now();H=I;var k=!0;try{t:{x=!1,M&&(M=!1,y(R),R=-1),v=!0;var G=g;try{e:{for(E(I),m=e(h);m!==null&&!(m.expirationTime>I&&C());){var at=m.callback;if(typeof at=="function"){m.callback=null,g=m.priorityLevel;var rt=at(m.expirationTime<=I);if(I=s.unstable_now(),typeof rt=="function"){m.callback=rt,E(I),k=!0;break e}m===e(h)&&n(h),E(I)}else n(h);m=e(h)}if(m!==null)k=!0;else{var ft=e(f);ft!==null&&et(T,ft.startTime-I),k=!1}}break t}finally{m=null,g=G,v=!1}k=void 0}}finally{k?B():z=!1}}}var B;if(typeof A=="function")B=function(){A(w)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,W=Q.port2;Q.port1.onmessage=w,B=function(){W.postMessage(null)}}else B=function(){S(w,0)};function K(){z||(z=!0,B())}function et(I,k){R=S(function(){I(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_continueExecution=function(){x||v||(x=!0,K())},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return e(h)},s.unstable_next=function(I){switch(g){case 1:case 2:case 3:var k=3;break;default:k=g}var G=g;g=k;try{return I()}finally{g=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=g;g=I;try{return k()}finally{g=G}},s.unstable_scheduleCallback=function(I,k,G){var at=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?at+G:at):G=at,I){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=G+rt,I={id:p++,callback:k,priorityLevel:I,startTime:G,expirationTime:rt,sortIndex:-1},G>at?(I.sortIndex=G,t(f,I),e(h)===null&&I===e(f)&&(M?(y(R),R=-1):M=!0,et(T,G-at))):(I.sortIndex=rt,t(h,I),x||v||(x=!0,K())),I},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(I){var k=g;return function(){var G=g;g=k;try{return I.apply(this,arguments)}finally{g=G}}}}(Ip)),Ip}var gy;function P3(){return gy||(gy=1,Op.exports=N3()),Op.exports}/**
 * @license React
 * react-reconciler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function O3(){return vy||(vy=1,function(s){s.exports=function(t){function e(a,r,u,d){return new UM(a,r,u,d)}function n(){}function i(a){var r="https://react.dev/errors/"+a;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)r+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+a+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(a){return a===null||typeof a!="object"?null:(a=Z0&&a[Z0]||a["@@iterator"],typeof a=="function"?a:null)}function l(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===IM?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case Er:return"Fragment";case br:return"Portal";case cd:return"Profiler";case X0:return"StrictMode";case hd:return"Suspense";case fd:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case Gs:return(a.displayName||"Context")+".Provider";case q0:return(a._context.displayName||"Context")+".Consumer";case ud:var r=a.render;return a=a.displayName,a||(a=r.displayName||r.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case dd:return r=a.displayName||null,r!==null?r:l(a.type)||"Memo";case ks:r=a._payload,a=a._init;try{return l(a(r))}catch{}}return null}function c(a){if(pd===void 0)try{throw Error()}catch(u){var r=u.stack.trim().match(/\n( *(at )?)/);pd=r&&r[1]||"",j0=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pd+a+j0}function h(a,r){if(!a||md)return"";md=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var d={DetermineComponentFrameRoot:function(){try{if(r){var Ot=function(){throw Error()};if(Object.defineProperty(Ot.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ot,[])}catch(ue){var Ft=ue}Reflect.construct(a,[],Ot)}else{try{Ot.call()}catch(ue){Ft=ue}a.call(Ot.prototype)}}else{try{throw Error()}catch(ue){Ft=ue}(Ot=a())&&typeof Ot.catch=="function"&&Ot.catch(function(){})}}catch(ue){if(ue&&Ft&&typeof ue.stack=="string")return[ue.stack,Ft.stack]}return[null,null]}};d.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var _=Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot,"name");_&&_.configurable&&Object.defineProperty(d.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=d.DetermineComponentFrameRoot(),D=b[0],V=b[1];if(D&&V){var j=D.split(`
`),ot=V.split(`
`);for(_=d=0;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;for(;_<ot.length&&!ot[_].includes("DetermineComponentFrameRoot");)_++;if(d===j.length||_===ot.length)for(d=j.length-1,_=ot.length-1;1<=d&&0<=_&&j[d]!==ot[_];)_--;for(;1<=d&&0<=_;d--,_--)if(j[d]!==ot[_]){if(d!==1||_!==1)do if(d--,_--,0>_||j[d]!==ot[_]){var Et=`
`+j[d].replace(" at new "," at ");return a.displayName&&Et.includes("<anonymous>")&&(Et=Et.replace("<anonymous>",a.displayName)),Et}while(1<=d&&0<=_);break}}}finally{md=!1,Error.prepareStackTrace=u}return(u=a?a.displayName||a.name:"")?c(u):""}function f(a){switch(a.tag){case 26:case 27:case 5:return c(a.type);case 16:return c("Lazy");case 13:return c("Suspense");case 19:return c("SuspenseList");case 0:case 15:return a=h(a.type,!1),a;case 11:return a=h(a.type.render,!1),a;case 1:return a=h(a.type,!0),a;default:return""}}function p(a){try{var r="";do r+=f(a),a=a.return;while(a);return r}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}function m(a){var r=a,u=a;if(a.alternate)for(;r.return;)r=r.return;else{a=r;do r=a,(r.flags&4098)!==0&&(u=r.return),a=r.return;while(a)}return r.tag===3?u:null}function g(a){if(m(a)!==a)throw Error(i(188))}function v(a){var r=a.alternate;if(!r){if(r=m(a),r===null)throw Error(i(188));return r!==a?null:a}for(var u=a,d=r;;){var _=u.return;if(_===null)break;var b=_.alternate;if(b===null){if(d=_.return,d!==null){u=d;continue}break}if(_.child===b.child){for(b=_.child;b;){if(b===u)return g(_),a;if(b===d)return g(_),r;b=b.sibling}throw Error(i(188))}if(u.return!==d.return)u=_,d=b;else{for(var D=!1,V=_.child;V;){if(V===u){D=!0,u=_,d=b;break}if(V===d){D=!0,d=_,u=b;break}V=V.sibling}if(!D){for(V=b.child;V;){if(V===u){D=!0,u=b,d=_;break}if(V===d){D=!0,d=b,u=_;break}V=V.sibling}if(!D)throw Error(i(189))}}if(u.alternate!==d)throw Error(i(190))}if(u.tag!==3)throw Error(i(188));return u.stateNode.current===u?a:r}function x(a){var r=a.tag;if(r===5||r===26||r===27||r===6)return a;for(a=a.child;a!==null;){if(r=x(a),r!==null)return r;a=a.sibling}return null}function M(a){var r=a.tag;if(r===5||r===26||r===27||r===6)return a;for(a=a.child;a!==null;){if(a.tag!==4&&(r=M(a),r!==null))return r;a=a.sibling}return null}function S(a){return{current:a}}function y(a){0>Tr||(a.current=Sd[Tr],Sd[Tr]=null,Tr--)}function A(a,r){Tr++,Sd[Tr]=a.current,a.current=r}function E(a){return a>>>=0,a===0?32:31-(Jb(a)/Qb|0)|0}function T(a){var r=a&42;if(r!==0)return r;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function z(a,r){var u=a.pendingLanes;if(u===0)return 0;var d=0,_=a.suspendedLanes,b=a.pingedLanes,D=a.warmLanes;a=a.finishedLanes!==0;var V=u&134217727;return V!==0?(u=V&~_,u!==0?d=T(u):(b&=V,b!==0?d=T(b):a||(D=V&~D,D!==0&&(d=T(D))))):(V=u&~_,V!==0?d=T(V):b!==0?d=T(b):a||(D=u&~D,D!==0&&(d=T(D)))),d===0?0:r!==0&&r!==d&&(r&_)===0&&(_=d&-d,D=r&-r,_>=D||_===32&&(D&4194176)!==0)?r:d}function R(a,r){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&r)===0}function N(a,r){switch(a){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H(){var a=Nc;return Nc<<=1,(Nc&4194176)===0&&(Nc=128),a}function C(){var a=Pc;return Pc<<=1,(Pc&62914560)===0&&(Pc=4194304),a}function w(a){for(var r=[],u=0;31>u;u++)r.push(a);return r}function B(a,r){a.pendingLanes|=r,r!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function Q(a,r,u,d,_,b){var D=a.pendingLanes;a.pendingLanes=u,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=u,a.entangledLanes&=u,a.errorRecoveryDisabledLanes&=u,a.shellSuspendCounter=0;var V=a.entanglements,j=a.expirationTimes,ot=a.hiddenUpdates;for(u=D&~u;0<u;){var Et=31-ci(u),Ot=1<<Et;V[Et]=0,j[Et]=-1;var Ft=ot[Et];if(Ft!==null)for(ot[Et]=null,Et=0;Et<Ft.length;Et++){var ue=Ft[Et];ue!==null&&(ue.lane&=-536870913)}u&=~Ot}d!==0&&W(a,d,0),b!==0&&_===0&&a.tag!==0&&(a.suspendedLanes|=b&~(D&~r))}function W(a,r,u){a.pendingLanes|=r,a.suspendedLanes&=~r;var d=31-ci(r);a.entangledLanes|=r,a.entanglements[d]=a.entanglements[d]|1073741824|u&4194218}function K(a,r){var u=a.entangledLanes|=r;for(a=a.entanglements;u;){var d=31-ci(u),_=1<<d;_&r|a[d]&r&&(a[d]|=r),u&=~_}}function et(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function I(a){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Ko,a,void 0,(a.current.flags&128)===128)}catch{}}function k(a){if(typeof i1=="function"&&s1(a),ui&&typeof ui.setStrictMode=="function")try{ui.setStrictMode(Ko,a)}catch{}}function G(a,r){return a===r&&(a!==0||1/a===1/r)||a!==a&&r!==r}function at(a,r){if(typeof a=="object"&&a!==null){var u=Sv.get(a);return u!==void 0?u:(r={value:a,source:r,stack:p(r)},Sv.set(a,r),r)}return{value:a,source:r,stack:p(r)}}function rt(a,r){Cr[Rr++]=zc,Cr[Rr++]=Ic,Ic=a,zc=r}function ft(a,r,u){Mi[bi++]=ms,Mi[bi++]=gs,Mi[bi++]=wa,wa=a;var d=ms;a=gs;var _=32-ci(d)-1;d&=~(1<<_),u+=1;var b=32-ci(r)+_;if(30<b){var D=_-_%5;b=(d&(1<<D)-1).toString(32),d>>=D,_-=D,ms=1<<32-ci(r)+_|u<<_|d,gs=b+a}else ms=1<<b|u<<_|d,gs=a}function Ct(a){a.return!==null&&(rt(a,1),ft(a,1,0))}function Wt(a){for(;a===Ic;)Ic=Cr[--Rr],Cr[Rr]=null,zc=Cr[--Rr],Cr[Rr]=null;for(;a===wa;)wa=Mi[--bi],Mi[bi]=null,gs=Mi[--bi],Mi[bi]=null,ms=Mi[--bi],Mi[bi]=null}function J(a,r){A(Xs,r),A(Jo,a),A(bn,null),a=FM(r),y(bn),A(bn,a)}function ct(){y(bn),y(Jo),y(Xs)}function Nt(a){a.memoizedState!==null&&A(Bc,a);var r=bn.current,u=HM(r,a.type);r!==u&&(A(Jo,a),A(bn,u))}function Ut(a){Jo.current===a&&(y(bn),y(Jo)),Bc.current===a&&(y(Bc),ps?Ta._currentValue=Ar:Ta._currentValue2=Ar)}function Zt(a){var r=Error(i(418,""));throw _t(at(r,a)),Ed}function re(a,r){if(!xi)throw Error(i(175));Nb(a.stateNode,a.type,a.memoizedProps,r,a)||Zt(a)}function qt(a){for(Vn=a.return;Vn;)switch(Vn.tag){case 3:case 27:ji=!0;return;case 5:case 13:ji=!1;return;default:Vn=Vn.return}}function Xt(a){if(!xi||a!==Vn)return!1;if(!Re)return qt(a),Re=!0,!1;var r=!1;if(Un?a.tag!==3&&a.tag!==27&&(a.tag!==5||uv(a.type)&&!Lc(a.type,a.memoizedProps))&&(r=!0):a.tag!==3&&(a.tag!==5||uv(a.type)&&!Lc(a.type,a.memoizedProps))&&(r=!0),r&&Dn&&Zt(a),qt(a),a.tag===13){if(!xi)throw Error(i(316));if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));Dn=Ib(a)}else Dn=Vn?lv(a.stateNode):null;return!0}function P(){xi&&(Dn=Vn=null,Re=!1)}function _t(a){Ii===null?Ii=[a]:Ii.push(a)}function gt(){for(var a=Ur,r=Ad=Ur=0;r<a;){var u=Ei[r];Ei[r++]=null;var d=Ei[r];Ei[r++]=null;var _=Ei[r];Ei[r++]=null;var b=Ei[r];if(Ei[r++]=null,d!==null&&_!==null){var D=d.pending;D===null?_.next=_:(_.next=D.next,D.next=_),d.pending=_}b!==0&&Dt(u,_,b)}}function wt(a,r,u,d){Ei[Ur++]=a,Ei[Ur++]=r,Ei[Ur++]=u,Ei[Ur++]=d,Ad|=d,a.lanes|=d,a=a.alternate,a!==null&&(a.lanes|=d)}function lt(a,r,u,d){return wt(a,r,u,d),Pt(a)}function Ht(a,r){return wt(a,null,null,r),Pt(a)}function Dt(a,r,u){a.lanes|=u;var d=a.alternate;d!==null&&(d.lanes|=u);for(var _=!1,b=a.return;b!==null;)b.childLanes|=u,d=b.alternate,d!==null&&(d.childLanes|=u),b.tag===22&&(a=b.stateNode,a===null||a._visibility&1||(_=!0)),a=b,b=b.return;_&&r!==null&&a.tag===3&&(b=a.stateNode,_=31-ci(u),b=b.hiddenUpdates,a=b[_],a===null?b[_]=[r]:a.push(r),r.lane=u|536870912)}function Pt(a){if(50<rl)throw rl=0,Vd=null,Error(i(185));for(var r=a.return;r!==null;)a=r,r=a.return;return a.tag===3?a.stateNode:null}function F(a){a!==Dr&&a.next===null&&(Dr===null?Fc=Dr=a:Dr=Dr.next=a),Hc=!0,Td||(Td=!0,Kt(nt))}function U(a,r){if(!wd&&Hc){wd=!0;do for(var u=!1,d=Fc;d!==null;){if(a!==0){var _=d.pendingLanes;if(_===0)var b=0;else{var D=d.suspendedLanes,V=d.pingedLanes;b=(1<<31-ci(42|a)+1)-1,b&=_&~(D&~V),b=b&201326677?b&201326677|1:b?b|2:0}b!==0&&(u=!0,pt(d,b))}else b=be,b=z(d,d===Fe?b:0),(b&3)===0||R(d,b)||(u=!0,pt(d,b));d=d.next}while(u);wd=!1}}function nt(){Hc=Td=!1;var a=0;Lr!==0&&(ZM()&&(a=Lr),Lr=0);for(var r=Oi(),u=null,d=Fc;d!==null;){var _=d.next,b=vt(d,r);b===0?(d.next=null,u===null?Fc=_:u.next=_,_===null&&(Dr=u)):(u=d,(a!==0||(b&3)!==0)&&(Hc=!0)),d=_}U(a)}function vt(a,r){for(var u=a.suspendedLanes,d=a.pingedLanes,_=a.expirationTimes,b=a.pendingLanes&-62914561;0<b;){var D=31-ci(b),V=1<<D,j=_[D];j===-1?((V&u)===0||(V&d)!==0)&&(_[D]=N(V,r)):j<=r&&(a.expiredLanes|=V),b&=~V}if(r=Fe,u=be,u=z(a,a===r?u:0),d=a.callbackNode,u===0||a===r&&He===2||a.cancelPendingCommit!==null)return d!==null&&d!==null&&Md(d),a.callbackNode=null,a.callbackPriority=0;if((u&3)===0||R(a,u)){if(r=u&-u,r===a.callbackPriority)return r;switch(d!==null&&Md(d),et(u)){case 2:case 8:u=e1;break;case 32:u=bd;break;case 268435456:u=n1;break;default:u=bd}return d=mt.bind(null,a),u=Oc(u,d),a.callbackPriority=r,a.callbackNode=u,r}return d!==null&&d!==null&&Md(d),a.callbackPriority=2,a.callbackNode=null,2}function mt(a,r){var u=a.callbackNode;if(ba()&&a.callbackNode!==u)return null;var d=be;return d=z(a,a===Fe?d:0),d===0?null:(E0(a,d,r),vt(a,Oi()),a.callbackNode!=null&&a.callbackNode===u?mt.bind(null,a):null)}function pt(a,r){if(ba())return null;E0(a,r,!0)}function Kt(a){tb?eb(function(){(Ie&6)!==0?Oc(xv,a):a()}):Oc(xv,a)}function At(){return Lr===0&&(Lr=H()),Lr}function Vt(a,r){if(Qo===null){var u=Qo=[];Cd=0,Nr=At(),Pr={status:"pending",value:void 0,then:function(d){u.push(d)}}}return Cd++,r.then(oe,oe),r}function oe(){if(--Cd===0&&Qo!==null){Pr!==null&&(Pr.status="fulfilled");var a=Qo;Qo=null,Nr=0,Pr=null;for(var r=0;r<a.length;r++)(0,a[r])()}}function bt(a,r){var u=[],d={status:"pending",value:null,reason:null,then:function(_){u.push(_)}};return a.then(function(){d.status="fulfilled",d.value=r;for(var _=0;_<u.length;_++)(0,u[_])(r)},function(_){for(d.status="rejected",d.reason=_,_=0;_<u.length;_++)(0,u[_])(void 0)}),d}function It(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ge(a,r){a=a.updateQueue,r.updateQueue===a&&(r.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function te(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function zt(a,r,u){var d=a.updateQueue;if(d===null)return null;if(d=d.shared,(Ie&2)!==0){var _=d.pending;return _===null?r.next=r:(r.next=_.next,_.next=r),d.pending=r,r=Pt(a),Dt(a,null,u),r}return wt(a,d,r,u),Pt(a)}function se(a,r,u){if(r=r.updateQueue,r!==null&&(r=r.shared,(u&4194176)!==0)){var d=r.lanes;d&=a.pendingLanes,u|=d,r.lanes=u,K(a,u)}}function ce(a,r){var u=a.updateQueue,d=a.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var _=null,b=null;if(u=u.firstBaseUpdate,u!==null){do{var D={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};b===null?_=b=D:b=b.next=D,u=u.next}while(u!==null);b===null?_=b=r:b=b.next=r}else _=b=r;u={baseState:d.baseState,firstBaseUpdate:_,lastBaseUpdate:b,shared:d.shared,callbacks:d.callbacks},a.updateQueue=u;return}a=u.lastBaseUpdate,a===null?u.firstBaseUpdate=r:a.next=r,u.lastBaseUpdate=r}function Ne(){if(Rd){var a=Pr;if(a!==null)throw a}}function X(a,r,u,d){Rd=!1;var _=a.updateQueue;qs=!1;var b=_.firstBaseUpdate,D=_.lastBaseUpdate,V=_.shared.pending;if(V!==null){_.shared.pending=null;var j=V,ot=j.next;j.next=null,D===null?b=ot:D.next=ot,D=j;var Et=a.alternate;Et!==null&&(Et=Et.updateQueue,V=Et.lastBaseUpdate,V!==D&&(V===null?Et.firstBaseUpdate=ot:V.next=ot,Et.lastBaseUpdate=j))}if(b!==null){var Ot=_.baseState;D=0,Et=ot=j=null,V=b;do{var Ft=V.lane&-536870913,ue=Ft!==V.lane;if(ue?(be&Ft)===Ft:(d&Ft)===Ft){Ft!==0&&Ft===Nr&&(Rd=!0),Et!==null&&(Et=Et.next={lane:0,tag:V.tag,payload:V.payload,callback:null,next:null});t:{var wi=a,ol=V;Ft=r;var Ia=u;switch(ol.tag){case 1:if(wi=ol.payload,typeof wi=="function"){Ot=wi.call(Ia,Ot,Ft);break t}Ot=wi;break t;case 3:wi.flags=wi.flags&-65537|128;case 0:if(wi=ol.payload,Ft=typeof wi=="function"?wi.call(Ia,Ot,Ft):wi,Ft==null)break t;Ot=ld({},Ot,Ft);break t;case 2:qs=!0}}Ft=V.callback,Ft!==null&&(a.flags|=64,ue&&(a.flags|=8192),ue=_.callbacks,ue===null?_.callbacks=[Ft]:ue.push(Ft))}else ue={lane:Ft,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Et===null?(ot=Et=ue,j=Ot):Et=Et.next=ue,D|=Ft;if(V=V.next,V===null){if(V=_.shared.pending,V===null)break;ue=V,V=ue.next,ue.next=null,_.lastBaseUpdate=ue,_.shared.pending=null}}while(!0);Et===null&&(j=Ot),_.baseState=j,_.firstBaseUpdate=ot,_.lastBaseUpdate=Et,b===null&&(_.shared.lanes=0),js|=D,a.lanes=D,a.memoizedState=Ot}}function Tt(a,r){if(typeof a!="function")throw Error(i(191,a));a.call(r)}function ut(a,r){var u=a.callbacks;if(u!==null)for(a.callbacks=null,a=0;a<u.length;a++)Tt(u[a],r)}function dt(a,r){if(hi(a,r))return!0;if(typeof a!="object"||a===null||typeof r!="object"||r===null)return!1;var u=Object.keys(a),d=Object.keys(r);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var _=u[d];if(!a1.call(r,_)||!hi(a[_],r[_]))return!1}return!0}function Rt(a){return a=a.status,a==="fulfilled"||a==="rejected"}function ee(){}function ye(a,r,u){switch(u=a[u],u===void 0?a.push(r):u!==r&&(r.then(ee,ee),r=u),r.status){case"fulfilled":return r.value;case"rejected":throw a=r.reason,a===$o?Error(i(483)):a;default:if(typeof r.status=="string")r.then(ee,ee);else{if(a=Fe,a!==null&&100<a.shellSuspendCounter)throw Error(i(482));a=r,a.status="pending",a.then(function(d){if(r.status==="pending"){var _=r;_.status="fulfilled",_.value=d}},function(d){if(r.status==="pending"){var _=r;_.status="rejected",_.reason=d}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw a=r.reason,a===$o?Error(i(483)):a}throw Or=r,$o}}function Xe(){if(Or===null)throw Error(i(459));var a=Or;return Or=null,a}function Ke(a){var r=tl;return tl+=1,Ir===null&&(Ir=[]),ye(Ir,a,r)}function xe(a,r){r=r.props.ref,a.ref=r!==void 0?r:null}function Yn(a,r){throw r.$$typeof===NM?Error(i(525)):(a=Object.prototype.toString.call(r),Error(i(31,a==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":a)))}function ii(a){var r=a._init;return r(a._payload)}function Oo(a){function r($,Y){if(a){var st=$.deletions;st===null?($.deletions=[Y],$.flags|=16):st.push(Y)}}function u($,Y){if(!a)return null;for(;Y!==null;)r($,Y),Y=Y.sibling;return null}function d($){for(var Y=new Map;$!==null;)$.key!==null?Y.set($.key,$):Y.set($.index,$),$=$.sibling;return Y}function _($,Y){return $=Vs($,Y),$.index=0,$.sibling=null,$}function b($,Y,st){return $.index=st,a?(st=$.alternate,st!==null?(st=st.index,st<Y?($.flags|=33554434,Y):st):($.flags|=33554434,Y)):($.flags|=1048576,Y)}function D($){return a&&$.alternate===null&&($.flags|=33554434),$}function V($,Y,st,St){return Y===null||Y.tag!==6?(Y=ad(st,$.mode,St),Y.return=$,Y):(Y=_(Y,st),Y.return=$,Y)}function j($,Y,st,St){var $t=st.type;return $t===Er?Et($,Y,st.props.children,St,st.key):Y!==null&&(Y.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===ks&&ii($t)===Y.type)?(Y=_(Y,st.props),xe(Y,st),Y.return=$,Y):(Y=Rc(st.type,st.key,st.props,null,$.mode,St),xe(Y,st),Y.return=$,Y)}function ot($,Y,st,St){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==st.containerInfo||Y.stateNode.implementation!==st.implementation?(Y=rd(st,$.mode,St),Y.return=$,Y):(Y=_(Y,st.children||[]),Y.return=$,Y)}function Et($,Y,st,St,$t){return Y===null||Y.tag!==7?(Y=Ea(st,$.mode,St,$t),Y.return=$,Y):(Y=_(Y,st),Y.return=$,Y)}function Ot($,Y,st){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=ad(""+Y,$.mode,st),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Uc:return st=Rc(Y.type,Y.key,Y.props,null,$.mode,st),xe(st,Y),st.return=$,st;case br:return Y=rd(Y,$.mode,st),Y.return=$,Y;case ks:var St=Y._init;return Y=St(Y._payload),Ot($,Y,st)}if(Dc(Y)||o(Y))return Y=Ea(Y,$.mode,st,null),Y.return=$,Y;if(typeof Y.then=="function")return Ot($,Ke(Y),st);if(Y.$$typeof===Gs)return Ot($,bc($,Y),st);Yn($,Y)}return null}function Ft($,Y,st,St){var $t=Y!==null?Y.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return $t!==null?null:V($,Y,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case Uc:return st.key===$t?j($,Y,st,St):null;case br:return st.key===$t?ot($,Y,st,St):null;case ks:return $t=st._init,st=$t(st._payload),Ft($,Y,st,St)}if(Dc(st)||o(st))return $t!==null?null:Et($,Y,st,St,null);if(typeof st.then=="function")return Ft($,Y,Ke(st),St);if(st.$$typeof===Gs)return Ft($,Y,bc($,st),St);Yn($,st)}return null}function ue($,Y,st,St,$t){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(st)||null,V(Y,$,""+St,$t);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case Uc:return $=$.get(St.key===null?st:St.key)||null,j(Y,$,St,$t);case br:return $=$.get(St.key===null?st:St.key)||null,ot(Y,$,St,$t);case ks:var ke=St._init;return St=ke(St._payload),ue($,Y,st,St,$t)}if(Dc(St)||o(St))return $=$.get(st)||null,Et(Y,$,St,$t,null);if(typeof St.then=="function")return ue($,Y,st,Ke(St),$t);if(St.$$typeof===Gs)return ue($,Y,st,bc(Y,St),$t);Yn(Y,St)}return null}function wi($,Y,st,St){for(var $t=null,ke=null,ae=Y,Ue=Y=0,vn=null;ae!==null&&Ue<st.length;Ue++){ae.index>Ue?(vn=ae,ae=null):vn=ae.sibling;var De=Ft($,ae,st[Ue],St);if(De===null){ae===null&&(ae=vn);break}a&&ae&&De.alternate===null&&r($,ae),Y=b(De,Y,Ue),ke===null?$t=De:ke.sibling=De,ke=De,ae=vn}if(Ue===st.length)return u($,ae),Re&&rt($,Ue),$t;if(ae===null){for(;Ue<st.length;Ue++)ae=Ot($,st[Ue],St),ae!==null&&(Y=b(ae,Y,Ue),ke===null?$t=ae:ke.sibling=ae,ke=ae);return Re&&rt($,Ue),$t}for(ae=d(ae);Ue<st.length;Ue++)vn=ue(ae,$,Ue,st[Ue],St),vn!==null&&(a&&vn.alternate!==null&&ae.delete(vn.key===null?Ue:vn.key),Y=b(vn,Y,Ue),ke===null?$t=vn:ke.sibling=vn,ke=vn);return a&&ae.forEach(function(Js){return r($,Js)}),Re&&rt($,Ue),$t}function ol($,Y,st,St){if(st==null)throw Error(i(151));for(var $t=null,ke=null,ae=Y,Ue=Y=0,vn=null,De=st.next();ae!==null&&!De.done;Ue++,De=st.next()){ae.index>Ue?(vn=ae,ae=null):vn=ae.sibling;var Js=Ft($,ae,De.value,St);if(Js===null){ae===null&&(ae=vn);break}a&&ae&&Js.alternate===null&&r($,ae),Y=b(Js,Y,Ue),ke===null?$t=Js:ke.sibling=Js,ke=Js,ae=vn}if(De.done)return u($,ae),Re&&rt($,Ue),$t;if(ae===null){for(;!De.done;Ue++,De=st.next())De=Ot($,De.value,St),De!==null&&(Y=b(De,Y,Ue),ke===null?$t=De:ke.sibling=De,ke=De);return Re&&rt($,Ue),$t}for(ae=d(ae);!De.done;Ue++,De=st.next())De=ue(ae,$,Ue,De.value,St),De!==null&&(a&&De.alternate!==null&&ae.delete(De.key===null?Ue:De.key),Y=b(De,Y,Ue),ke===null?$t=De:ke.sibling=De,ke=De);return a&&ae.forEach(function(f1){return r($,f1)}),Re&&rt($,Ue),$t}function Ia($,Y,st,St){if(typeof st=="object"&&st!==null&&st.type===Er&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case Uc:t:{for(var $t=st.key;Y!==null;){if(Y.key===$t){if($t=st.type,$t===Er){if(Y.tag===7){u($,Y.sibling),St=_(Y,st.props.children),St.return=$,$=St;break t}}else if(Y.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===ks&&ii($t)===Y.type){u($,Y.sibling),St=_(Y,st.props),xe(St,st),St.return=$,$=St;break t}u($,Y);break}else r($,Y);Y=Y.sibling}st.type===Er?(St=Ea(st.props.children,$.mode,St,st.key),St.return=$,$=St):(St=Rc(st.type,st.key,st.props,null,$.mode,St),xe(St,st),St.return=$,$=St)}return D($);case br:t:{for($t=st.key;Y!==null;){if(Y.key===$t)if(Y.tag===4&&Y.stateNode.containerInfo===st.containerInfo&&Y.stateNode.implementation===st.implementation){u($,Y.sibling),St=_(Y,st.children||[]),St.return=$,$=St;break t}else{u($,Y);break}else r($,Y);Y=Y.sibling}St=rd(st,$.mode,St),St.return=$,$=St}return D($);case ks:return $t=st._init,st=$t(st._payload),Ia($,Y,st,St)}if(Dc(st))return wi($,Y,st,St);if(o(st)){if($t=o(st),typeof $t!="function")throw Error(i(150));return st=$t.call(st),ol($,Y,st,St)}if(typeof st.then=="function")return Ia($,Y,Ke(st),St);if(st.$$typeof===Gs)return Ia($,Y,bc($,st),St);Yn($,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,Y!==null&&Y.tag===6?(u($,Y.sibling),St=_(Y,st),St.return=$,$=St):(u($,Y),St=ad(st,$.mode,St),St.return=$,$=St),D($)):u($,Y)}return function($,Y,st,St){try{tl=0;var $t=Ia($,Y,st,St);return Ir=null,$t}catch(ae){if(ae===$o)throw ae;var ke=e(29,ae,null,$.mode);return ke.lanes=St,ke.return=$,ke}finally{}}}function Zi(a,r){a=xs,A(Gc,a),A(zr,r),xs=a|r.baseLanes}function ma(){A(Gc,xs),A(zr,zr.current)}function mr(){xs=Gc.current,y(zr),y(Gc)}function Di(a){var r=a.alternate;A(fn,fn.current&1),A(Ai,a),Ki===null&&(r===null||zr.current!==null||r.memoizedState!==null)&&(Ki=a)}function ga(a){if(a.tag===22){if(A(fn,fn.current),A(Ai,a),Ki===null){var r=a.alternate;r!==null&&r.memoizedState!==null&&(Ki=a)}}else Li()}function Li(){A(fn,fn.current),A(Ai,Ai.current)}function Zn(a){y(Ai),Ki===a&&(Ki=null),y(fn)}function va(a){for(var r=a;r!==null;){if(r.tag===13){var u=r.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||_d(u)||yd(u)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break;for(;r.sibling===null;){if(r.return===null||r.return===a)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function We(){throw Error(i(321))}function Io(a,r){if(r===null)return!1;for(var u=0;u<r.length&&u<a.length;u++)if(!hi(a[u],r[u]))return!1;return!0}function zo(a,r,u,d,_,b){return Ys=b,me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,le.H=a===null||a.memoizedState===null?Ua:Zs,Ra=!1,b=u(d,_),Ra=!1,Br&&(b=L(r,u,d,_)),gc(a),b}function gc(a){le.H=Ji;var r=Oe!==null&&Oe.next!==null;if(Ys=0,on=Oe=me=null,kc=!1,el=0,Fr=null,r)throw Error(i(300));a===null||mn||(a=a.dependencies,a!==null&&Mc(a)&&(mn=!0))}function L(a,r,u,d){me=a;var _=0;do{if(Br&&(Fr=null),el=0,Br=!1,25<=_)throw Error(i(301));if(_+=1,on=Oe=null,a.updateQueue!=null){var b=a.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}le.H=Da,b=r(u,d)}while(Br);return b}function q(){var a=le.H,r=a.useState()[0];return r=typeof r.then=="function"?Gt(r):r,a=a.useState()[0],(Oe!==null?Oe.memoizedState:null)!==a&&(me.flags|=1024),r}function tt(){var a=Wc!==0;return Wc=0,a}function it(a,r,u){r.updateQueue=a.updateQueue,r.flags&=-2053,a.lanes&=~u}function Z(a){if(kc){for(a=a.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}kc=!1}Ys=0,on=Oe=me=null,Br=!1,el=Wc=0,Fr=null}function yt(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?me.memoizedState=on=a:on=on.next=a,on}function Mt(){if(Oe===null){var a=me.alternate;a=a!==null?a.memoizedState:null}else a=Oe.next;var r=on===null?me.memoizedState:on.next;if(r!==null)on=r,Oe=a;else{if(a===null)throw me.alternate===null?Error(i(467)):Error(i(310));Oe=a,a={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},on===null?me.memoizedState=on=a:on=on.next=a}return on}function Gt(a){var r=el;return el+=1,Fr===null&&(Fr=[]),a=ye(Fr,a,r),r=me,(on===null?r.memoizedState:on.next)===null&&(r=r.alternate,le.H=r===null||r.memoizedState===null?Ua:Zs),a}function kt(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return Gt(a);if(a.$$typeof===Gs)return Cn(a)}throw Error(i(438,String(a)))}function ne(a){var r=null,u=me.updateQueue;if(u!==null&&(r=u.memoCache),r==null){var d=me.alternate;d!==null&&(d=d.updateQueue,d!==null&&(d=d.memoCache,d!=null&&(r={data:d.data.map(function(_){return _.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),u===null&&(u=Dd(),me.updateQueue=u),u.memoCache=r,u=r.data[r.index],u===void 0)for(u=r.data[r.index]=Array(a),d=0;d<a;d++)u[d]=OM;return r.index++,u}function Jt(a,r){return typeof r=="function"?r(a):r}function Qt(a){var r=Mt();return Me(r,Oe,a)}function Me(a,r,u){var d=a.queue;if(d===null)throw Error(i(311));d.lastRenderedReducer=u;var _=a.baseQueue,b=d.pending;if(b!==null){if(_!==null){var D=_.next;_.next=b.next,b.next=D}r.baseQueue=_=b,d.pending=null}if(b=a.baseState,_===null)a.memoizedState=b;else{r=_.next;var V=D=null,j=null,ot=r,Et=!1;do{var Ot=ot.lane&-536870913;if(Ot!==ot.lane?(be&Ot)===Ot:(Ys&Ot)===Ot){var Ft=ot.revertLane;if(Ft===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),Ot===Nr&&(Et=!0);else if((Ys&Ft)===Ft){ot=ot.next,Ft===Nr&&(Et=!0);continue}else Ot={lane:0,revertLane:ot.revertLane,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},j===null?(V=j=Ot,D=b):j=j.next=Ot,me.lanes|=Ft,js|=Ft;Ot=ot.action,Ra&&u(b,Ot),b=ot.hasEagerState?ot.eagerState:u(b,Ot)}else Ft={lane:Ot,revertLane:ot.revertLane,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},j===null?(V=j=Ft,D=b):j=j.next=Ft,me.lanes|=Ot,js|=Ot;ot=ot.next}while(ot!==null&&ot!==r);if(j===null?D=b:j.next=V,!hi(b,a.memoizedState)&&(mn=!0,Et&&(u=Pr,u!==null)))throw u;a.memoizedState=b,a.baseState=D,a.baseQueue=j,d.lastRenderedState=b}return _===null&&(d.lanes=0),[a.memoizedState,d.dispatch]}function Be(a){var r=Mt(),u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=a;var d=u.dispatch,_=u.pending,b=r.memoizedState;if(_!==null){u.pending=null;var D=_=_.next;do b=a(b,D.action),D=D.next;while(D!==_);hi(b,r.memoizedState)||(mn=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),u.lastRenderedState=b}return[b,d]}function Ge(a,r,u){var d=me,_=Mt(),b=Re;if(b){if(u===void 0)throw Error(i(407));u=u()}else u=r();var D=!hi((Oe||_).memoizedState,u);if(D&&(_.memoizedState=u,mn=!0),_=_.queue,Sf(jt.bind(null,d,_,a),[a]),_.getSnapshot!==r||D||on!==null&&on.memoizedState.tag&1){if(d.flags|=2048,_r(9,Ee.bind(null,d,_,u,r),{destroy:void 0},null),Fe===null)throw Error(i(349));b||(Ys&60)!==0||wn(d,r,u)}return u}function wn(a,r,u){a.flags|=16384,a={getSnapshot:r,value:u},r=me.updateQueue,r===null?(r=Dd(),me.updateQueue=r,r.stores=[a]):(u=r.stores,u===null?r.stores=[a]:u.push(a))}function Ee(a,r,u,d){r.value=u,r.getSnapshot=d,rn(r)&&Ae(a)}function jt(a,r,u){return u(function(){rn(r)&&Ae(a)})}function rn(a){var r=a.getSnapshot;a=a.value;try{var u=r();return!hi(a,u)}catch{return!0}}function Ae(a){var r=Ht(a,2);r!==null&&Hn(r,a,2)}function zn(a){var r=yt();if(typeof a=="function"){var u=a;if(a=u(),Ra){k(!0);try{u()}finally{k(!1)}}}return r.memoizedState=r.baseState=a,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:a},r}function cs(a,r,u,d){return a.baseState=u,Me(a,Oe,typeof d=="function"?d:Jt)}function Bn(a,r,u,d,_){if(xc(a))throw Error(i(485));if(a=r.action,a!==null){var b={payload:_,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(D){b.listeners.push(D)}};le.T!==null?u(!0):b.isTransition=!1,d(b),u=r.pending,u===null?(b.next=r.pending=b,gr(r,b)):(b.next=u.next,r.pending=u.next=b)}}function gr(a,r){var u=r.action,d=r.payload,_=a.state;if(r.isTransition){var b=le.T,D={};le.T=D;try{var V=u(_,d),j=le.S;j!==null&&j(D,V),qe(a,r,V)}catch(ot){_a(a,r,ot)}finally{le.T=b}}else try{b=u(_,d),qe(a,r,b)}catch(ot){_a(a,r,ot)}}function qe(a,r,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(d){Ni(a,r,d)},function(d){return _a(a,r,d)}):Ni(a,r,u)}function Ni(a,r,u){r.status="fulfilled",r.value=u,Fn(r),a.state=u,r=a.pending,r!==null&&(u=r.next,u===r?a.pending=null:(u=u.next,r.next=u,gr(a,u)))}function _a(a,r,u){var d=a.pending;if(a.pending=null,d!==null){d=d.next;do r.status="rejected",r.reason=u,Fn(r),r=r.next;while(r!==d)}a.action=null}function Fn(a){a=a.listeners;for(var r=0;r<a.length;r++)(0,a[r])()}function vr(a,r){return r}function vc(a,r){if(Re){var u=Fe.formState;if(u!==null){t:{var d=me;if(Re){if(Dn){var _=Tb(Dn,ji);if(_){Dn=lv(_),d=wb(_);break t}}Zt(d)}d=!1}d&&(r=u[0])}}u=yt(),u.memoizedState=u.baseState=r,d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:r},u.queue=d,u=Ng.bind(null,me,d),d.dispatch=u,d=zn(!1);var b=Af.bind(null,me,!1,d.queue);return d=yt(),_={state:r,dispatch:null,action:a,pending:null},d.queue=_,u=Bn.bind(null,me,_,b,u),_.dispatch=u,d.memoizedState=a,[r,u,!1]}function Bo(a){var r=Mt();return _g(r,Oe,a)}function _g(a,r,u){r=Me(a,r,vr)[0],a=Qt(Jt)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Gt(r):r;var d=Mt(),_=d.queue,b=_.dispatch;return u!==d.memoizedState&&(me.flags|=2048,_r(9,fM.bind(null,_,u),{destroy:void 0},null)),[r,b,a]}function fM(a,r){a.action=r}function yg(a){var r=Mt(),u=Oe;if(u!==null)return _g(r,u,a);Mt(),r=r.memoizedState,u=Mt();var d=u.queue.dispatch;return u.memoizedState=a,[r,d,!1]}function _r(a,r,u,d){return a={tag:a,create:r,inst:u,deps:d,next:null},r=me.updateQueue,r===null&&(r=Dd(),me.updateQueue=r),u=r.lastEffect,u===null?r.lastEffect=a.next=a:(d=u.next,u.next=a,a.next=d,r.lastEffect=a),a}function xg(){return Mt().memoizedState}function _c(a,r,u,d){var _=yt();me.flags|=a,_.memoizedState=_r(1|r,u,{destroy:void 0},d===void 0?null:d)}function yc(a,r,u,d){var _=Mt();d=d===void 0?null:d;var b=_.memoizedState.inst;Oe!==null&&d!==null&&Io(d,Oe.memoizedState.deps)?_.memoizedState=_r(r,u,b,d):(me.flags|=a,_.memoizedState=_r(1|r,u,b,d))}function Sg(a,r){_c(8390656,8,a,r)}function Sf(a,r){yc(2048,8,a,r)}function Mg(a,r){return yc(4,2,a,r)}function bg(a,r){return yc(4,4,a,r)}function Eg(a,r){if(typeof r=="function"){a=a();var u=r(a);return function(){typeof u=="function"?u():r(null)}}if(r!=null)return a=a(),r.current=a,function(){r.current=null}}function Ag(a,r,u){u=u!=null?u.concat([a]):null,yc(4,4,Eg.bind(null,r,a),u)}function Mf(){}function Tg(a,r){var u=Mt();r=r===void 0?null:r;var d=u.memoizedState;return r!==null&&Io(r,d[1])?d[0]:(u.memoizedState=[a,r],a)}function wg(a,r){var u=Mt();r=r===void 0?null:r;var d=u.memoizedState;if(r!==null&&Io(r,d[1]))return d[0];if(d=a(),Ra){k(!0);try{a()}finally{k(!1)}}return u.memoizedState=[d,r],d}function bf(a,r,u){return u===void 0||(Ys&1073741824)!==0?a.memoizedState=r:(a.memoizedState=u,a=b0(),me.lanes|=a,js|=a,u)}function Cg(a,r,u,d){return hi(u,r)?u:zr.current!==null?(a=bf(a,u,d),hi(a,r)||(mn=!0),a):(Ys&42)===0?(mn=!0,a.memoizedState=u):(a=b0(),me.lanes|=a,js|=a,r)}function Rg(a,r,u,d,_){var b=Aa();Kn(b!==0&&8>b?b:8);var D=le.T,V={};le.T=V,Af(a,!1,r,u);try{var j=_(),ot=le.S;if(ot!==null&&ot(V,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Et=bt(j,d);Fo(a,r,Et,oi(a))}else Fo(a,r,d,oi(a))}catch(Ot){Fo(a,r,{then:function(){},status:"rejected",reason:Ot},oi())}finally{Kn(b),le.T=D}}function Ug(a){var r=a.memoizedState;if(r!==null)return r;r={memoizedState:Ar,baseState:Ar,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:Ar},next:null};var u={};return r.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:u},next:null},a.memoizedState=r,a=a.alternate,a!==null&&(a.memoizedState=r),r}function Ef(){return Cn(Ta)}function Dg(){return Mt().memoizedState}function Lg(){return Mt().memoizedState}function dM(a){for(var r=a.return;r!==null;){switch(r.tag){case 24:case 3:var u=oi();a=te(u);var d=zt(r,a,u);d!==null&&(Hn(d,r,u),se(d,r,u)),r={cache:Bf()},a.payload=r;return}r=r.return}}function pM(a,r,u){var d=oi();u={lane:d,revertLane:0,action:u,hasEagerState:!1,eagerState:null,next:null},xc(a)?Pg(r,u):(u=lt(a,r,u,d),u!==null&&(Hn(u,a,d),Og(u,r,d)))}function Ng(a,r,u){var d=oi();Fo(a,r,u,d)}function Fo(a,r,u,d){var _={lane:d,revertLane:0,action:u,hasEagerState:!1,eagerState:null,next:null};if(xc(a))Pg(r,_);else{var b=a.alternate;if(a.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null))try{var D=r.lastRenderedState,V=b(D,u);if(_.hasEagerState=!0,_.eagerState=V,hi(V,D))return wt(a,r,_,0),Fe===null&&gt(),!1}catch{}finally{}if(u=lt(a,r,_,d),u!==null)return Hn(u,a,d),Og(u,r,d),!0}return!1}function Af(a,r,u,d){if(d={lane:2,revertLane:At(),action:d,hasEagerState:!1,eagerState:null,next:null},xc(a)){if(r)throw Error(i(479))}else r=lt(a,u,d,2),r!==null&&Hn(r,a,2)}function xc(a){var r=a.alternate;return a===me||r!==null&&r===me}function Pg(a,r){Br=kc=!0;var u=a.pending;u===null?r.next=r:(r.next=u.next,u.next=r),a.pending=r}function Og(a,r,u){if((u&4194176)!==0){var d=r.lanes;d&=a.pendingLanes,u|=d,r.lanes=u,K(a,u)}}function Tf(a,r,u,d){r=a.memoizedState,u=u(d,r),u=u==null?r:ld({},r,u),a.memoizedState=u,a.lanes===0&&(a.updateQueue.baseState=u)}function Ig(a,r,u,d,_,b,D){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(d,b,D):r.prototype&&r.prototype.isPureReactComponent?!dt(u,d)||!dt(_,b):!0}function zg(a,r,u,d){a=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(u,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(u,d),r.state!==a&&Ld.enqueueReplaceState(r,r.state,null)}function ya(a,r){var u=r;if("ref"in r){u={};for(var d in r)d!=="ref"&&(u[d]=r[d])}if(a=a.defaultProps){u===r&&(u=ld({},u));for(var _ in a)u[_]===void 0&&(u[_]=a[_])}return u}function Sc(a,r){try{var u=a.onUncaughtError;u(r.value,{componentStack:r.stack})}catch(d){setTimeout(function(){throw d})}}function Bg(a,r,u){try{var d=a.onCaughtError;d(u.value,{componentStack:u.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(_){setTimeout(function(){throw _})}}function wf(a,r,u){return u=te(u),u.tag=3,u.payload={element:null},u.callback=function(){Sc(a,r)},u}function Fg(a){return a=te(a),a.tag=3,a}function Hg(a,r,u,d){var _=u.type.getDerivedStateFromError;if(typeof _=="function"){var b=d.value;a.payload=function(){return _(b)},a.callback=function(){Bg(r,u,d)}}var D=u.stateNode;D!==null&&typeof D.componentDidCatch=="function"&&(a.callback=function(){Bg(r,u,d),typeof _!="function"&&(Ks===null?Ks=new Set([this]):Ks.add(this));var V=d.stack;this.componentDidCatch(d.value,{componentStack:V!==null?V:""})})}function mM(a,r,u,d,_){if(u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){if(r=u.alternate,r!==null&&Vo(r,u,_,!0),u=Ai.current,u!==null){switch(u.tag){case 13:return Ki===null?ed():u.alternate===null&&$e===0&&($e=3),u.flags&=-257,u.flags|=65536,u.lanes=_,d===Vc?u.flags|=16384:(r=u.updateQueue,r===null?u.updateQueue=new Set([d]):r.add(d),id(a,d,_)),!1;case 22:return u.flags|=65536,d===Vc?u.flags|=16384:(r=u.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([d])},u.updateQueue=r):(u=r.retryQueue,u===null?r.retryQueue=new Set([d]):u.add(d)),id(a,d,_)),!1}throw Error(i(435,u.tag))}return id(a,d,_),ed(),!1}if(Re)return r=Ai.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=_,d!==Ed&&(a=Error(i(422),{cause:d}),_t(at(a,u)))):(d!==Ed&&(r=Error(i(423),{cause:d}),_t(at(r,u))),a=a.current.alternate,a.flags|=65536,_&=-_,a.lanes|=_,d=at(d,u),_=wf(a.stateNode,d,_),ce(a,_),$e!==4&&($e=2)),!1;var b=Error(i(520),{cause:d});if(b=at(b,u),il===null?il=[b]:il.push(b),$e!==4&&($e=2),r===null)return!0;d=at(d,u),u=r;do{switch(u.tag){case 3:return u.flags|=65536,a=_&-_,u.lanes|=a,a=wf(u.stateNode,d,a),ce(u,a),!1;case 1:if(r=u.type,b=u.stateNode,(u.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ks===null||!Ks.has(b))))return u.flags|=65536,_&=-_,u.lanes|=_,_=Fg(_),Hg(_,a,u,d),ce(u,_),!1}u=u.return}while(u!==null);return!1}function Mn(a,r,u,d){r.child=a===null?Mv(r,null,u,d):Ca(r,a.child,u,d)}function Vg(a,r,u,d,_){u=u.render;var b=r.ref;if("ref"in d){var D={};for(var V in d)V!=="ref"&&(D[V]=d[V])}else D=d;return xa(r),d=zo(a,r,u,D,b,_),V=tt(),a!==null&&!mn?(it(a,r,_),us(a,r,_)):(Re&&V&&Ct(r),r.flags|=1,Mn(a,r,d,_),r.child)}function Gg(a,r,u,d,_){if(a===null){var b=u.type;return typeof b=="function"&&!sd(b)&&b.defaultProps===void 0&&u.compare===null?(r.tag=15,r.type=b,kg(a,r,b,d,_)):(a=Rc(u.type,null,d,r,r.mode,_),a.ref=r.ref,a.return=r,r.child=a)}if(b=a.child,!Of(a,_)){var D=b.memoizedProps;if(u=u.compare,u=u!==null?u:dt,u(D,d)&&a.ref===r.ref)return us(a,r,_)}return r.flags|=1,a=Vs(b,d),a.ref=r.ref,a.return=r,r.child=a}function kg(a,r,u,d,_){if(a!==null){var b=a.memoizedProps;if(dt(b,d)&&a.ref===r.ref)if(mn=!1,r.pendingProps=d=b,Of(a,_))(a.flags&131072)!==0&&(mn=!0);else return r.lanes=a.lanes,us(a,r,_)}return Cf(a,r,u,d,_)}function Wg(a,r,u){var d=r.pendingProps,_=d.children,b=(r.stateNode._pendingVisibility&2)!==0,D=a!==null?a.memoizedState:null;if(Ho(a,r),d.mode==="hidden"||b){if((r.flags&128)!==0){if(d=D!==null?D.baseLanes|u:u,a!==null){for(_=r.child=a.child,b=0;_!==null;)b=b|_.lanes|_.childLanes,_=_.sibling;r.childLanes=b&~d}else r.childLanes=0,r.child=null;return Xg(a,r,d,u)}if((u&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},a!==null&&Ec(r,D!==null?D.cachePool:null),D!==null?Zi(r,D):ma(),ga(r);else return r.lanes=r.childLanes=536870912,Xg(a,r,D!==null?D.baseLanes|u:u,u)}else D!==null?(Ec(r,D.cachePool),Zi(r,D),Li(),r.memoizedState=null):(a!==null&&Ec(r,null),ma(),Li());return Mn(a,r,_,u),r.child}function Xg(a,r,u,d){var _=Ff();return _=_===null?null:{parent:ps?Je._currentValue:Je._currentValue2,pool:_},r.memoizedState={baseLanes:u,cachePool:_},a!==null&&Ec(r,null),ma(),ga(r),a!==null&&Vo(a,r,d,!0),null}function Ho(a,r){var u=r.ref;if(u===null)a!==null&&a.ref!==null&&(r.flags|=2097664);else{if(typeof u!="function"&&typeof u!="object")throw Error(i(284));(a===null||a.ref!==u)&&(r.flags|=2097664)}}function Cf(a,r,u,d,_){return xa(r),u=zo(a,r,u,d,void 0,_),d=tt(),a!==null&&!mn?(it(a,r,_),us(a,r,_)):(Re&&d&&Ct(r),r.flags|=1,Mn(a,r,u,_),r.child)}function qg(a,r,u,d,_,b){return xa(r),r.updateQueue=null,u=L(r,d,u,_),gc(a),d=tt(),a!==null&&!mn?(it(a,r,b),us(a,r,b)):(Re&&d&&Ct(r),r.flags|=1,Mn(a,r,u,b),r.child)}function Yg(a,r,u,d,_){if(xa(r),r.stateNode===null){var b=wr,D=u.contextType;typeof D=="object"&&D!==null&&(b=Cn(D)),b=new u(d,b),r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=Ld,r.stateNode=b,b._reactInternals=r,b=r.stateNode,b.props=d,b.state=r.memoizedState,b.refs={},It(r),D=u.contextType,b.context=typeof D=="object"&&D!==null?Cn(D):wr,b.state=r.memoizedState,D=u.getDerivedStateFromProps,typeof D=="function"&&(Tf(r,u,D,d),b.state=r.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(D=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),D!==b.state&&Ld.enqueueReplaceState(b,b.state,null),X(r,d,b,_),Ne(),b.state=r.memoizedState),typeof b.componentDidMount=="function"&&(r.flags|=4194308),d=!0}else if(a===null){b=r.stateNode;var V=r.memoizedProps,j=ya(u,V);b.props=j;var ot=b.context,Et=u.contextType;D=wr,typeof Et=="object"&&Et!==null&&(D=Cn(Et));var Ot=u.getDerivedStateFromProps;Et=typeof Ot=="function"||typeof b.getSnapshotBeforeUpdate=="function",V=r.pendingProps!==V,Et||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V||ot!==D)&&zg(r,b,d,D),qs=!1;var Ft=r.memoizedState;b.state=Ft,X(r,d,b,_),Ne(),ot=r.memoizedState,V||Ft!==ot||qs?(typeof Ot=="function"&&(Tf(r,u,Ot,d),ot=r.memoizedState),(j=qs||Ig(r,u,j,d,Ft,ot,D))?(Et||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=ot),b.props=d,b.state=ot,b.context=D,d=j):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{b=r.stateNode,ge(a,r),D=r.memoizedProps,Et=ya(u,D),b.props=Et,Ot=r.pendingProps,Ft=b.context,ot=u.contextType,j=wr,typeof ot=="object"&&ot!==null&&(j=Cn(ot)),V=u.getDerivedStateFromProps,(ot=typeof V=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(D!==Ot||Ft!==j)&&zg(r,b,d,j),qs=!1,Ft=r.memoizedState,b.state=Ft,X(r,d,b,_),Ne();var ue=r.memoizedState;D!==Ot||Ft!==ue||qs||a!==null&&a.dependencies!==null&&Mc(a.dependencies)?(typeof V=="function"&&(Tf(r,u,V,d),ue=r.memoizedState),(Et=qs||Ig(r,u,Et,d,Ft,ue,j)||a!==null&&a.dependencies!==null&&Mc(a.dependencies))?(ot||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,ue,j),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,ue,j)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||D===a.memoizedProps&&Ft===a.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||D===a.memoizedProps&&Ft===a.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=ue),b.props=d,b.state=ue,b.context=j,d=Et):(typeof b.componentDidUpdate!="function"||D===a.memoizedProps&&Ft===a.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||D===a.memoizedProps&&Ft===a.memoizedState||(r.flags|=1024),d=!1)}return b=d,Ho(a,r),d=(r.flags&128)!==0,b||d?(b=r.stateNode,u=d&&typeof u.getDerivedStateFromError!="function"?null:b.render(),r.flags|=1,a!==null&&d?(r.child=Ca(r,a.child,null,_),r.child=Ca(r,null,u,_)):Mn(a,r,u,_),r.memoizedState=b.state,a=r.child):a=us(a,r,_),a}function Zg(a,r,u,d){return P(),r.flags|=256,Mn(a,r,u,d),r.child}function Rf(a){return{baseLanes:a,cachePool:t0()}}function Uf(a,r,u){return a=a!==null?a.childLanes&~u:0,r&&(a|=Ti),a}function jg(a,r,u){var d=r.pendingProps,_=!1,b=(r.flags&128)!==0,D;if((D=b)||(D=a!==null&&a.memoizedState===null?!1:(fn.current&2)!==0),D&&(_=!0,r.flags&=-129),D=(r.flags&32)!==0,r.flags&=-33,a===null){if(Re){if(_?Di(r):Li(),Re){var V=Dn,j;(j=V)&&(V=Lb(V,ji),V!==null?(r.memoizedState={dehydrated:V,treeContext:wa!==null?{id:ms,overflow:gs}:null,retryLane:536870912},j=e(18,null,null,0),j.stateNode=V,j.return=r,r.child=j,Vn=r,Dn=null,j=!0):j=!1),j||Zt(r)}if(V=r.memoizedState,V!==null&&(V=V.dehydrated,V!==null))return yd(V)?r.lanes=16:r.lanes=536870912,null;Zn(r)}return V=d.children,d=d.fallback,_?(Li(),_=r.mode,V=Lf({mode:"hidden",children:V},_),d=Ea(d,_,u,null),V.return=r,d.return=r,V.sibling=d,r.child=V,_=r.child,_.memoizedState=Rf(u),_.childLanes=Uf(a,D,u),r.memoizedState=Nd,d):(Di(r),Df(r,V))}if(j=a.memoizedState,j!==null&&(V=j.dehydrated,V!==null)){if(b)r.flags&256?(Di(r),r.flags&=-257,r=Nf(a,r,u)):r.memoizedState!==null?(Li(),r.child=a.child,r.flags|=128,r=null):(Li(),_=d.fallback,V=r.mode,d=Lf({mode:"visible",children:d.children},V),_=Ea(_,V,u,null),_.flags|=2,d.return=r,_.return=r,d.sibling=_,r.child=d,Ca(r,a.child,null,u),d=r.child,d.memoizedState=Rf(u),d.childLanes=Uf(a,D,u),r.memoizedState=Nd,r=_);else if(Di(r),yd(V))D=Eb(V).digest,d=Error(i(419)),d.stack="",d.digest=D,_t({value:d,source:null,stack:null}),r=Nf(a,r,u);else if(mn||Vo(a,r,u,!1),D=(u&a.childLanes)!==0,mn||D){if(D=Fe,D!==null){if(d=u&-u,(d&42)!==0)d=1;else switch(d){case 2:d=1;break;case 8:d=4;break;case 32:d=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:d=64;break;case 268435456:d=134217728;break;default:d=0}if(d=(d&(D.suspendedLanes|u))!==0?0:d,d!==0&&d!==j.retryLane)throw j.retryLane=d,Ht(a,d),Hn(D,a,d),Ev}_d(V)||ed(),r=Nf(a,r,u)}else _d(V)?(r.flags|=128,r.child=a.child,r=wM.bind(null,a),Ab(V,r),r=null):(a=j.treeContext,xi&&(Dn=Rb(V),Vn=r,Re=!0,Ii=null,ji=!1,a!==null&&(Mi[bi++]=ms,Mi[bi++]=gs,Mi[bi++]=wa,ms=a.id,gs=a.overflow,wa=r)),r=Df(r,d.children),r.flags|=4096);return r}return _?(Li(),_=d.fallback,V=r.mode,j=a.child,b=j.sibling,d=Vs(j,{mode:"hidden",children:d.children}),d.subtreeFlags=j.subtreeFlags&31457280,b!==null?_=Vs(b,_):(_=Ea(_,V,u,null),_.flags|=2),_.return=r,d.return=r,d.sibling=_,r.child=d,d=_,_=r.child,V=a.child.memoizedState,V===null?V=Rf(u):(j=V.cachePool,j!==null?(b=ps?Je._currentValue:Je._currentValue2,j=j.parent!==b?{parent:b,pool:b}:j):j=t0(),V={baseLanes:V.baseLanes|u,cachePool:j}),_.memoizedState=V,_.childLanes=Uf(a,D,u),r.memoizedState=Nd,d):(Di(r),u=a.child,a=u.sibling,u=Vs(u,{mode:"visible",children:d.children}),u.return=r,u.sibling=null,a!==null&&(D=r.deletions,D===null?(r.deletions=[a],r.flags|=16):D.push(a)),r.child=u,r.memoizedState=null,u)}function Df(a,r){return r=Lf({mode:"visible",children:r},a.mode),r.return=a,a.child=r}function Lf(a,r){return F0(a,r,0,null)}function Nf(a,r,u){return Ca(r,a.child,null,u),a=Df(r,r.pendingProps.children),a.flags|=2,r.memoizedState=null,a}function Kg(a,r,u){a.lanes|=r;var d=a.alternate;d!==null&&(d.lanes|=r),If(a.return,r,u)}function Pf(a,r,u,d,_){var b=a.memoizedState;b===null?a.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:_}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=d,b.tail=u,b.tailMode=_)}function Jg(a,r,u){var d=r.pendingProps,_=d.revealOrder,b=d.tail;if(Mn(a,r,d.children,u),d=fn.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(a!==null&&(a.flags&128)!==0)t:for(a=r.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Kg(a,u,r);else if(a.tag===19)Kg(a,u,r);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break t;for(;a.sibling===null;){if(a.return===null||a.return===r)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}d&=1}switch(A(fn,d),_){case"forwards":for(u=r.child,_=null;u!==null;)a=u.alternate,a!==null&&va(a)===null&&(_=u),u=u.sibling;u=_,u===null?(_=r.child,r.child=null):(_=u.sibling,u.sibling=null),Pf(r,!1,_,u,b);break;case"backwards":for(u=null,_=r.child,r.child=null;_!==null;){if(a=_.alternate,a!==null&&va(a)===null){r.child=_;break}a=_.sibling,_.sibling=u,u=_,_=a}Pf(r,!0,u,null,b);break;case"together":Pf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function us(a,r,u){if(a!==null&&(r.dependencies=a.dependencies),js|=r.lanes,(u&r.childLanes)===0)if(a!==null){if(Vo(a,r,u,!1),(u&r.childLanes)===0)return null}else return null;if(a!==null&&r.child!==a.child)throw Error(i(153));if(r.child!==null){for(a=r.child,u=Vs(a,a.pendingProps),r.child=u,u.return=r;a.sibling!==null;)a=a.sibling,u=u.sibling=Vs(a,a.pendingProps),u.return=r;u.sibling=null}return r.child}function Of(a,r){return(a.lanes&r)!==0?!0:(a=a.dependencies,!!(a!==null&&Mc(a)))}function gM(a,r,u){switch(r.tag){case 3:J(r,r.stateNode.containerInfo),zs(r,Je,a.memoizedState.cache),P();break;case 27:case 5:Nt(r);break;case 4:J(r,r.stateNode.containerInfo);break;case 10:zs(r,r.type,r.memoizedProps.value);break;case 13:var d=r.memoizedState;if(d!==null)return d.dehydrated!==null?(Di(r),r.flags|=128,null):(u&r.child.childLanes)!==0?jg(a,r,u):(Di(r),a=us(a,r,u),a!==null?a.sibling:null);Di(r);break;case 19:var _=(a.flags&128)!==0;if(d=(u&r.childLanes)!==0,d||(Vo(a,r,u,!1),d=(u&r.childLanes)!==0),_){if(d)return Jg(a,r,u);r.flags|=128}if(_=r.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),A(fn,fn.current),d)break;return null;case 22:case 23:return r.lanes=0,Wg(a,r,u);case 24:zs(r,Je,a.memoizedState.cache)}return us(a,r,u)}function Qg(a,r,u){if(a!==null)if(a.memoizedProps!==r.pendingProps)mn=!0;else{if(!Of(a,u)&&(r.flags&128)===0)return mn=!1,gM(a,r,u);mn=(a.flags&131072)!==0}else mn=!1,Re&&(r.flags&1048576)!==0&&ft(r,zc,r.index);switch(r.lanes=0,r.tag){case 16:t:{a=r.pendingProps;var d=r.elementType,_=d._init;if(d=_(d._payload),r.type=d,typeof d=="function")sd(d)?(a=ya(d,a),r.tag=1,r=Yg(null,r,d,a,u)):(r.tag=0,r=Cf(null,r,d,a,u));else{if(d!=null){if(_=d.$$typeof,_===ud){r.tag=11,r=Vg(null,r,d,a,u);break t}else if(_===dd){r.tag=14,r=Gg(null,r,d,a,u);break t}}throw r=l(d)||d,Error(i(306,r,""))}}return r;case 0:return Cf(a,r,r.type,r.pendingProps,u);case 1:return d=r.type,_=ya(d,r.pendingProps),Yg(a,r,d,_,u);case 3:t:{if(J(r,r.stateNode.containerInfo),a===null)throw Error(i(387));var b=r.pendingProps;_=r.memoizedState,d=_.element,ge(a,r),X(r,b,null,u);var D=r.memoizedState;if(b=D.cache,zs(r,Je,b),b!==_.cache&&zf(r,[Je],u,!0),Ne(),b=D.element,xi&&_.isDehydrated)if(_={element:b,isDehydrated:!1,cache:D.cache},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){r=Zg(a,r,b,u);break t}else if(b!==d){d=at(Error(i(424)),r),_t(d),r=Zg(a,r,b,u);break t}else for(xi&&(Dn=Cb(r.stateNode.containerInfo),Vn=r,Re=!0,Ii=null,ji=!0),u=Mv(r,null,b,u),r.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(P(),b===d){r=us(a,r,u);break t}Mn(a,r,b,u)}r=r.child}return r;case 26:if(Si)return Ho(a,r),a===null?(u=fv(r.type,null,r.pendingProps,null))?r.memoizedState=u:Re||(r.stateNode=Wb(r.type,r.pendingProps,Xs.current,r)):r.memoizedState=fv(r.type,a.memoizedProps,r.pendingProps,a.memoizedState),null;case 27:if(Un)return Nt(r),a===null&&Un&&Re&&(d=r.stateNode=_v(r.type,r.pendingProps,Xs.current,bn.current,!1),Vn=r,ji=!0,Dn=cv(d)),d=r.pendingProps.children,a!==null||Re?Mn(a,r,d,u):r.child=Ca(r,null,d,u),Ho(a,r),r.child;case 5:return a===null&&Re&&(Vb(r.type,r.pendingProps,bn.current),(_=d=Dn)&&(d=Ub(d,r.type,r.pendingProps,ji),d!==null?(r.stateNode=d,Vn=r,Dn=cv(d),ji=!1,_=!0):_=!1),_||Zt(r)),Nt(r),_=r.type,b=r.pendingProps,D=a!==null?a.memoizedProps:null,d=b.children,Lc(_,b)?d=null:D!==null&&Lc(_,D)&&(r.flags|=32),r.memoizedState!==null&&(_=zo(a,r,q,null,null,u),ps?Ta._currentValue=_:Ta._currentValue2=_),Ho(a,r),Mn(a,r,d,u),r.child;case 6:return a===null&&Re&&(Gb(r.pendingProps,bn.current),(a=u=Dn)&&(u=Db(u,r.pendingProps,ji),u!==null?(r.stateNode=u,Vn=r,Dn=null,a=!0):a=!1),a||Zt(r)),null;case 13:return jg(a,r,u);case 4:return J(r,r.stateNode.containerInfo),d=r.pendingProps,a===null?r.child=Ca(r,null,d,u):Mn(a,r,d,u),r.child;case 11:return Vg(a,r,r.type,r.pendingProps,u);case 7:return Mn(a,r,r.pendingProps,u),r.child;case 8:return Mn(a,r,r.pendingProps.children,u),r.child;case 12:return Mn(a,r,r.pendingProps.children,u),r.child;case 10:return d=r.pendingProps,zs(r,r.type,d.value),Mn(a,r,d.children,u),r.child;case 9:return _=r.type._context,d=r.pendingProps.children,xa(r),_=Cn(_),d=d(_),r.flags|=1,Mn(a,r,d,u),r.child;case 14:return Gg(a,r,r.type,r.pendingProps,u);case 15:return kg(a,r,r.type,r.pendingProps,u);case 19:return Jg(a,r,u);case 22:return Wg(a,r,u);case 24:return xa(r),d=Cn(Je),a===null?(_=Ff(),_===null&&(_=Fe,b=Bf(),_.pooledCache=b,b.refCount++,b!==null&&(_.pooledCacheLanes|=u),_=b),r.memoizedState={parent:d,cache:_},It(r),zs(r,Je,_)):((a.lanes&u)!==0&&(ge(a,r),X(r,null,null,u),Ne()),_=a.memoizedState,b=r.memoizedState,_.parent!==d?(_={parent:d,cache:d},r.memoizedState=_,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=_),zs(r,Je,d)):(d=b.cache,zs(r,Je,d),d!==_.cache&&zf(r,[Je],u,!0))),Mn(a,r,r.pendingProps.children,u),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function zs(a,r,u){ps?(A(Xc,r._currentValue),r._currentValue=u):(A(Xc,r._currentValue2),r._currentValue2=u)}function hs(a){var r=Xc.current;ps?a._currentValue=r:a._currentValue2=r,y(Xc)}function If(a,r,u){for(;a!==null;){var d=a.alternate;if((a.childLanes&r)!==r?(a.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),a===u)break;a=a.return}}function zf(a,r,u,d){var _=a.child;for(_!==null&&(_.return=a);_!==null;){var b=_.dependencies;if(b!==null){var D=_.child;b=b.firstContext;t:for(;b!==null;){var V=b;b=_;for(var j=0;j<r.length;j++)if(V.context===r[j]){b.lanes|=u,V=b.alternate,V!==null&&(V.lanes|=u),If(b.return,u,a),d||(D=null);break t}b=V.next}}else if(_.tag===18){if(D=_.return,D===null)throw Error(i(341));D.lanes|=u,b=D.alternate,b!==null&&(b.lanes|=u),If(D,u,a),D=null}else D=_.child;if(D!==null)D.return=_;else for(D=_;D!==null;){if(D===a){D=null;break}if(_=D.sibling,_!==null){_.return=D.return,D=_;break}D=D.return}_=D}}function Vo(a,r,u,d){a=null;for(var _=r,b=!1;_!==null;){if(!b){if((_.flags&524288)!==0)b=!0;else if((_.flags&262144)!==0)break}if(_.tag===10){var D=_.alternate;if(D===null)throw Error(i(387));if(D=D.memoizedProps,D!==null){var V=_.type;hi(_.pendingProps.value,D.value)||(a!==null?a.push(V):a=[V])}}else if(_===Bc.current){if(D=_.alternate,D===null)throw Error(i(387));D.memoizedState.memoizedState!==_.memoizedState.memoizedState&&(a!==null?a.push(Ta):a=[Ta])}_=_.return}a!==null&&zf(r,a,u,d),r.flags|=262144}function Mc(a){for(a=a.firstContext;a!==null;){var r=a.context;if(!hi(ps?r._currentValue:r._currentValue2,a.memoizedValue))return!0;a=a.next}return!1}function xa(a){La=a,vs=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Cn(a){return $g(La,a)}function bc(a,r){return La===null&&xa(a),$g(a,r)}function $g(a,r){var u=ps?r._currentValue:r._currentValue2;if(r={context:r,memoizedValue:u,next:null},vs===null){if(a===null)throw Error(i(308));vs=r,a.dependencies={lanes:0,firstContext:r},a.flags|=524288}else vs=vs.next=r;return u}function Bf(){return{controller:new o1,data:new Map,refCount:0}}function Go(a){a.refCount--,a.refCount===0&&l1(c1,function(){a.controller.abort()})}function Ff(){var a=Na.current;return a!==null?a:Fe.pooledCache}function Ec(a,r){r===null?A(Na,Na.current):A(Na,r.pool)}function t0(){var a=Ff();return a===null?null:{parent:ps?Je._currentValue:Je._currentValue2,pool:a}}function si(a){a.flags|=4}function e0(a,r){if(a!==null&&a.child===r.child)return!1;if((r.flags&16)!==0)return!0;for(a=r.child;a!==null;){if((a.flags&13878)!==0||(a.subtreeFlags&13878)!==0)return!0;a=a.sibling}return!1}function Hf(a,r,u,d){if(Rn)for(u=r.child;u!==null;){if(u.tag===5||u.tag===6)gd(a,u.stateNode);else if(!(u.tag===4||Un&&u.tag===27)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===r)break;for(;u.sibling===null;){if(u.return===null||u.return===r)return;u=u.return}u.sibling.return=u.return,u=u.sibling}else if(Ws)for(var _=r.child;_!==null;){if(_.tag===5){var b=_.stateNode;u&&d&&(b=rv(b,_.type,_.memoizedProps)),gd(a,b)}else if(_.tag===6)b=_.stateNode,u&&d&&(b=ov(b,_.memoizedProps)),gd(a,b);else if(_.tag!==4){if(_.tag===22&&_.memoizedState!==null)b=_.child,b!==null&&(b.return=_),Hf(a,_,!0,!0);else if(_.child!==null){_.child.return=_,_=_.child;continue}}if(_===r)break;for(;_.sibling===null;){if(_.return===null||_.return===r)return;_=_.return}_.sibling.return=_.return,_=_.sibling}}function n0(a,r,u,d){if(Ws)for(var _=r.child;_!==null;){if(_.tag===5){var b=_.stateNode;u&&d&&(b=rv(b,_.type,_.memoizedProps)),sv(a,b)}else if(_.tag===6)b=_.stateNode,u&&d&&(b=ov(b,_.memoizedProps)),sv(a,b);else if(_.tag!==4){if(_.tag===22&&_.memoizedState!==null)b=_.child,b!==null&&(b.return=_),n0(a,_,!(_.memoizedProps!==null&&_.memoizedProps.mode==="manual"),!0);else if(_.child!==null){_.child.return=_,_=_.child;continue}}if(_===r)break;for(;_.sibling===null;){if(_.return===null||_.return===r)return;_=_.return}_.sibling.return=_.return,_=_.sibling}}function i0(a,r){if(Ws&&e0(a,r)){a=r.stateNode;var u=a.containerInfo,d=iv();n0(d,r,!1,!1),a.pendingChildren=d,si(r),bb(u,d)}}function Vf(a,r,u,d){if(Rn)a.memoizedProps!==d&&si(r);else if(Ws){var _=a.stateNode,b=a.memoizedProps;if((a=e0(a,r))||b!==d){var D=bn.current;b=Mb(_,u,b,d,!a,null),b===_?r.stateNode=_:(J0(b,u,d,D)&&si(r),r.stateNode=b,a?Hf(b,r,!1,!1):si(r))}else r.stateNode=_}}function Gf(a,r,u){if(KM(r,u)){if(a.flags|=16777216,!tv(r,u))if(C0())a.flags|=8192;else throw Or=Vc,Ud}else a.flags&=-16777217}function s0(a,r){if(qb(r)){if(a.flags|=16777216,!vv(r))if(C0())a.flags|=8192;else throw Or=Vc,Ud}else a.flags&=-16777217}function Ac(a,r){r!==null&&(a.flags|=4),a.flags&16384&&(r=a.tag!==22?C():536870912,a.lanes|=r,Gr|=r)}function ko(a,r){if(!Re)switch(a.tailMode){case"hidden":r=a.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?a.tail=null:u.sibling=null;break;case"collapsed":u=a.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?r||a.tail===null?a.tail=null:a.tail.sibling=null:d.sibling=null}}function Ye(a){var r=a.alternate!==null&&a.alternate.child===a.child,u=0,d=0;if(r)for(var _=a.child;_!==null;)u|=_.lanes|_.childLanes,d|=_.subtreeFlags&31457280,d|=_.flags&31457280,_.return=a,_=_.sibling;else for(_=a.child;_!==null;)u|=_.lanes|_.childLanes,d|=_.subtreeFlags,d|=_.flags,_.return=a,_=_.sibling;return a.subtreeFlags|=d,a.childLanes=u,r}function vM(a,r,u){var d=r.pendingProps;switch(Wt(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(r),null;case 1:return Ye(r),null;case 3:return u=r.stateNode,d=null,a!==null&&(d=a.memoizedState.cache),r.memoizedState.cache!==d&&(r.flags|=2048),hs(Je),ct(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(a===null||a.child===null)&&(Xt(r)?si(r):a===null||a.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ii!==null&&($f(Ii),Ii=null))),i0(a,r),Ye(r),null;case 26:if(Si){u=r.type;var _=r.memoizedState;return a===null?(si(r),_!==null?(Ye(r),s0(r,_)):(Ye(r),Gf(r,u,d))):_?_!==a.memoizedState?(si(r),Ye(r),s0(r,_)):(Ye(r),r.flags&=-16777217):(Rn?a.memoizedProps!==d&&si(r):Vf(a,r,u,d),Ye(r),Gf(r,u,d)),null}case 27:if(Un){if(Ut(r),u=Xs.current,_=r.type,a!==null&&r.stateNode!=null)Rn?a.memoizedProps!==d&&si(r):Vf(a,r,_,d);else{if(!d){if(r.stateNode===null)throw Error(i(166));return Ye(r),null}a=bn.current,Xt(r)?re(r,a):(a=_v(_,d,u,a,!0),r.stateNode=a,si(r))}return Ye(r),null}case 5:if(Ut(r),u=r.type,a!==null&&r.stateNode!=null)Vf(a,r,u,d);else{if(!d){if(r.stateNode===null)throw Error(i(166));return Ye(r),null}a=bn.current,Xt(r)?re(r,a):(_=kM(u,d,Xs.current,a,r),Hf(_,r,!1,!1),r.stateNode=_,J0(_,u,d,a)&&si(r))}return Ye(r),Gf(r,r.type,r.pendingProps),null;case 6:if(a&&r.stateNode!=null)u=a.memoizedProps,Rn?u!==d&&si(r):Ws&&(u!==d?(r.stateNode=Q0(d,Xs.current,bn.current,r),si(r)):r.stateNode=a.stateNode);else{if(typeof d!="string"&&r.stateNode===null)throw Error(i(166));if(a=Xs.current,u=bn.current,Xt(r)){if(!xi)throw Error(i(176));if(a=r.stateNode,u=r.memoizedProps,d=null,_=Vn,_!==null)switch(_.tag){case 27:case 5:d=_.memoizedProps}Pb(a,u,r,d)||Zt(r)}else r.stateNode=Q0(d,a,u,r)}return Ye(r),null;case 13:if(d=r.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(_=Xt(r),d!==null&&d.dehydrated!==null){if(a===null){if(!_)throw Error(i(318));if(!xi)throw Error(i(344));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(i(317));Ob(_,r)}else P(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ye(r),_=!1}else Ii!==null&&($f(Ii),Ii=null),_=!0;if(!_)return r.flags&256?(Zn(r),r):(Zn(r),null)}if(Zn(r),(r.flags&128)!==0)return r.lanes=u,r;if(u=d!==null,a=a!==null&&a.memoizedState!==null,u){d=r.child,_=null,d.alternate!==null&&d.alternate.memoizedState!==null&&d.alternate.memoizedState.cachePool!==null&&(_=d.alternate.memoizedState.cachePool.pool);var b=null;d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(b=d.memoizedState.cachePool.pool),b!==_&&(d.flags|=2048)}return u!==a&&u&&(r.child.flags|=8192),Ac(r,r.updateQueue),Ye(r),null;case 4:return ct(),i0(a,r),a===null&&qM(r.stateNode.containerInfo),Ye(r),null;case 10:return hs(r.type),Ye(r),null;case 19:if(y(fn),_=r.memoizedState,_===null)return Ye(r),null;if(d=(r.flags&128)!==0,b=_.rendering,b===null)if(d)ko(_,!1);else{if($e!==0||a!==null&&(a.flags&128)!==0)for(a=r.child;a!==null;){if(b=va(a),b!==null){for(r.flags|=128,ko(_,!1),a=b.updateQueue,r.updateQueue=a,Ac(r,a),r.subtreeFlags=0,a=u,u=r.child;u!==null;)B0(u,a),u=u.sibling;return A(fn,fn.current&1|2),r.child}a=a.sibling}_.tail!==null&&Oi()>sl&&(r.flags|=128,d=!0,ko(_,!1),r.lanes=4194304)}else{if(!d)if(a=va(b),a!==null){if(r.flags|=128,d=!0,a=a.updateQueue,r.updateQueue=a,Ac(r,a),ko(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!Re)return Ye(r),null}else 2*Oi()-_.renderingStartTime>sl&&u!==536870912&&(r.flags|=128,d=!0,ko(_,!1),r.lanes=4194304);_.isBackwards?(b.sibling=r.child,r.child=b):(a=_.last,a!==null?a.sibling=b:r.child=b,_.last=b)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Oi(),r.sibling=null,a=fn.current,A(fn,d?a&1|2:a&1),r):(Ye(r),null);case 22:case 23:return Zn(r),mr(),d=r.memoizedState!==null,a!==null?a.memoizedState!==null!==d&&(r.flags|=8192):d&&(r.flags|=8192),d?(u&536870912)!==0&&(r.flags&128)===0&&(Ye(r),r.subtreeFlags&6&&(r.flags|=8192)):Ye(r),u=r.updateQueue,u!==null&&Ac(r,u.retryQueue),u=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==u&&(r.flags|=2048),a!==null&&y(Na),null;case 24:return u=null,a!==null&&(u=a.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),hs(Je),Ye(r),null;case 25:return null}throw Error(i(156,r.tag))}function _M(a,r){switch(Wt(r),r.tag){case 1:return a=r.flags,a&65536?(r.flags=a&-65537|128,r):null;case 3:return hs(Je),ct(),a=r.flags,(a&65536)!==0&&(a&128)===0?(r.flags=a&-65537|128,r):null;case 26:case 27:case 5:return Ut(r),null;case 13:if(Zn(r),a=r.memoizedState,a!==null&&a.dehydrated!==null){if(r.alternate===null)throw Error(i(340));P()}return a=r.flags,a&65536?(r.flags=a&-65537|128,r):null;case 19:return y(fn),null;case 4:return ct(),null;case 10:return hs(r.type),null;case 22:case 23:return Zn(r),mr(),a!==null&&y(Na),a=r.flags,a&65536?(r.flags=a&-65537|128,r):null;case 24:return hs(Je),null;case 25:return null;default:return null}}function a0(a,r){switch(Wt(r),r.tag){case 3:hs(Je),ct();break;case 26:case 27:case 5:Ut(r);break;case 4:ct();break;case 13:Zn(r);break;case 19:y(fn);break;case 10:hs(r.type);break;case 22:case 23:Zn(r),mr(),a!==null&&y(Na);break;case 24:hs(Je)}}function Wo(a,r){try{var u=r.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var _=d.next;u=_;do{if((u.tag&a)===a){d=void 0;var b=u.create,D=u.inst;d=b(),D.destroy=d}u=u.next}while(u!==_)}}catch(V){Pe(r,r.return,V)}}function Bs(a,r,u){try{var d=r.updateQueue,_=d!==null?d.lastEffect:null;if(_!==null){var b=_.next;d=b;do{if((d.tag&a)===a){var D=d.inst,V=D.destroy;if(V!==void 0){D.destroy=void 0,_=r;var j=u;try{V()}catch(ot){Pe(_,j,ot)}}}d=d.next}while(d!==b)}}catch(ot){Pe(r,r.return,ot)}}function r0(a){var r=a.updateQueue;if(r!==null){var u=a.stateNode;try{ut(r,u)}catch(d){Pe(a,a.return,d)}}}function o0(a,r,u){u.props=ya(a.type,a.memoizedProps),u.state=a.memoizedState;try{u.componentWillUnmount()}catch(d){Pe(a,r,d)}}function Sa(a,r){try{var u=a.ref;if(u!==null){var d=a.stateNode;switch(a.tag){case 26:case 27:case 5:var _=Yo(d);break;default:_=d}typeof u=="function"?a.refCleanup=u(_):u.current=_}}catch(b){Pe(a,r,b)}}function ai(a,r){var u=a.ref,d=a.refCleanup;if(u!==null)if(typeof d=="function")try{d()}catch(_){Pe(a,r,_)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(_){Pe(a,r,_)}else u.current=null}function l0(a){var r=a.type,u=a.memoizedProps,d=a.stateNode;try{hb(d,r,u,a)}catch(_){Pe(a,a.return,_)}}function c0(a,r,u){try{fb(a.stateNode,a.type,u,r,a)}catch(d){Pe(a,a.return,d)}}function u0(a){return a.tag===5||a.tag===3||(Si?a.tag===26:!1)||(Un?a.tag===27:!1)||a.tag===4}function kf(a){t:for(;;){for(;a.sibling===null;){if(a.return===null||u0(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&(!Un||a.tag!==27)&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue t;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Wf(a,r,u){var d=a.tag;if(d===5||d===6)a=a.stateNode,r?pb(u,a,r):cb(u,a);else if(!(d===4||Un&&d===27)&&(a=a.child,a!==null))for(Wf(a,r,u),a=a.sibling;a!==null;)Wf(a,r,u),a=a.sibling}function Tc(a,r,u){var d=a.tag;if(d===5||d===6)a=a.stateNode,r?db(u,a,r):lb(u,a);else if(!(d===4||Un&&d===27)&&(a=a.child,a!==null))for(Tc(a,r,u),a=a.sibling;a!==null;)Tc(a,r,u),a=a.sibling}function h0(a,r,u){a=a.containerInfo;try{av(a,u)}catch(d){Pe(r,r.return,d)}}function yM(a,r){for(VM(a.containerInfo),gn=r;gn!==null;)if(a=gn,r=a.child,(a.subtreeFlags&1028)!==0&&r!==null)r.return=a,gn=r;else for(;gn!==null;){a=gn;var u=a.alternate;switch(r=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&u!==null){r=void 0;var d=a,_=u.memoizedProps;u=u.memoizedState;var b=d.stateNode;try{var D=ya(d.type,_,d.elementType===d.type);r=b.getSnapshotBeforeUpdate(D,u),b.__reactInternalSnapshotBeforeUpdate=r}catch(V){Pe(d,d.return,V)}}break;case 3:(r&1024)!==0&&Rn&&Sb(a.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=a.sibling,r!==null){r.return=a.return,gn=r;break}gn=a.return}return D=wv,wv=!1,D}function f0(a,r,u){var d=u.flags;switch(u.tag){case 0:case 11:case 15:fs(a,u),d&4&&Wo(5,u);break;case 1:if(fs(a,u),d&4)if(a=u.stateNode,r===null)try{a.componentDidMount()}catch(V){Pe(u,u.return,V)}else{var _=ya(u.type,r.memoizedProps);r=r.memoizedState;try{a.componentDidUpdate(_,r,a.__reactInternalSnapshotBeforeUpdate)}catch(V){Pe(u,u.return,V)}}d&64&&r0(u),d&512&&Sa(u,u.return);break;case 3:if(fs(a,u),d&64&&(d=u.updateQueue,d!==null)){if(a=null,u.child!==null)switch(u.child.tag){case 27:case 5:a=Yo(u.child.stateNode);break;case 1:a=u.child.stateNode}try{ut(d,a)}catch(V){Pe(u,u.return,V)}}break;case 26:if(Si){fs(a,u),d&512&&Sa(u,u.return);break}case 27:case 5:fs(a,u),r===null&&d&4&&l0(u),d&512&&Sa(u,u.return);break;case 12:fs(a,u);break;case 13:fs(a,u),d&4&&p0(a,u);break;case 22:if(_=u.memoizedState!==null||_s,!_){r=r!==null&&r.memoizedState!==null||Qe;var b=_s,D=Qe;_s=_,(Qe=r)&&!D?Fs(a,u,(u.subtreeFlags&8772)!==0):fs(a,u),_s=b,Qe=D}d&512&&(u.memoizedProps.mode==="manual"?Sa(u,u.return):ai(u,u.return));break;default:fs(a,u)}}function d0(a){var r=a.alternate;r!==null&&(a.alternate=null,d0(r)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(r=a.stateNode,r!==null&&jM(r)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Pi(a,r,u){for(u=u.child;u!==null;)Xf(a,r,u),u=u.sibling}function Xf(a,r,u){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Ko,u)}catch{}switch(u.tag){case 26:if(Si){Qe||ai(u,r),Pi(a,r,u),u.memoizedState?pv(u.memoizedState):u.stateNode&&gv(u.stateNode);break}case 27:if(Un){Qe||ai(u,r);var d=ln,_=fi;ln=u.stateNode,Pi(a,r,u),Kb(u.stateNode),ln=d,fi=_;break}case 5:Qe||ai(u,r);case 6:if(Rn){if(d=ln,_=fi,ln=null,Pi(a,r,u),ln=d,fi=_,ln!==null)if(fi)try{gb(ln,u.stateNode)}catch(b){Pe(u,r,b)}else try{mb(ln,u.stateNode)}catch(b){Pe(u,r,b)}}else Pi(a,r,u);break;case 18:Rn&&ln!==null&&(fi?Hb(ln,u.stateNode):Fb(ln,u.stateNode));break;case 4:Rn?(d=ln,_=fi,ln=u.stateNode.containerInfo,fi=!0,Pi(a,r,u),ln=d,fi=_):(Ws&&h0(u.stateNode,u,iv()),Pi(a,r,u));break;case 0:case 11:case 14:case 15:Qe||Bs(2,u,r),Qe||Bs(4,u,r),Pi(a,r,u);break;case 1:Qe||(ai(u,r),d=u.stateNode,typeof d.componentWillUnmount=="function"&&o0(u,r,d)),Pi(a,r,u);break;case 21:Pi(a,r,u);break;case 22:Qe||ai(u,r),Qe=(d=Qe)||u.memoizedState!==null,Pi(a,r,u),Qe=d;break;default:Pi(a,r,u)}}function p0(a,r){if(xi&&r.memoizedState===null&&(a=r.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Bb(a)}catch(u){Pe(r,r.return,u)}}function xM(a){switch(a.tag){case 13:case 19:var r=a.stateNode;return r===null&&(r=a.stateNode=new Tv),r;case 22:return a=a.stateNode,r=a._retryCache,r===null&&(r=a._retryCache=new Tv),r;default:throw Error(i(435,a.tag))}}function qf(a,r){var u=xM(a);r.forEach(function(d){var _=CM.bind(null,a,d);u.has(d)||(u.add(d),d.then(_,_))})}function jn(a,r){var u=r.deletions;if(u!==null)for(var d=0;d<u.length;d++){var _=u[d],b=a,D=r;if(Rn){var V=D;t:for(;V!==null;){switch(V.tag){case 27:case 5:ln=V.stateNode,fi=!1;break t;case 3:ln=V.stateNode.containerInfo,fi=!0;break t;case 4:ln=V.stateNode.containerInfo,fi=!0;break t}V=V.return}if(ln===null)throw Error(i(160));Xf(b,D,_),ln=null,fi=!1}else Xf(b,D,_);b=_.alternate,b!==null&&(b.return=null),_.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)m0(r,a),r=r.sibling}function m0(a,r){var u=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:jn(r,a),ri(a),d&4&&(Bs(3,a,a.return),Wo(3,a),Bs(5,a,a.return));break;case 1:jn(r,a),ri(a),d&512&&(Qe||u===null||ai(u,u.return)),d&64&&_s&&(a=a.updateQueue,a!==null&&(d=a.callbacks,d!==null&&(u=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=u===null?d:u.concat(d))));break;case 26:if(Si){var _=zi;jn(r,a),ri(a),d&512&&(Qe||u===null||ai(u,u.return)),d&4&&(d=u!==null?u.memoizedState:null,r=a.memoizedState,u===null?r===null?a.stateNode===null?a.stateNode=kb(_,a.type,a.memoizedProps,a):mv(_,a.type,a.stateNode):a.stateNode=dv(_,r,a.memoizedProps):d!==r?(d===null?u.stateNode!==null&&gv(u.stateNode):pv(d),r===null?mv(_,a.type,a.stateNode):dv(_,r,a.memoizedProps)):r===null&&a.stateNode!==null&&c0(a,a.memoizedProps,u.memoizedProps));break}case 27:if(Un&&d&4&&a.alternate===null){_=a.stateNode;var b=a.memoizedProps;try{Zb(_),jb(a.type,b,_,a)}catch(Et){Pe(a,a.return,Et)}}case 5:if(jn(r,a),ri(a),d&512&&(Qe||u===null||ai(u,u.return)),Rn){if(a.flags&32){r=a.stateNode;try{nv(r)}catch(Et){Pe(a,a.return,Et)}}d&4&&a.stateNode!=null&&(r=a.memoizedProps,c0(a,r,u!==null?u.memoizedProps:r)),d&1024&&(Pd=!0)}break;case 6:if(jn(r,a),ri(a),d&4&&Rn){if(a.stateNode===null)throw Error(i(162));d=a.memoizedProps,u=u!==null?u.memoizedProps:d,r=a.stateNode;try{ub(r,u,d)}catch(Et){Pe(a,a.return,Et)}}break;case 3:if(Si?(Xb(),_=zi,zi=xd(r.containerInfo),jn(r,a),zi=_):jn(r,a),ri(a),d&4){if(Rn&&xi&&u!==null&&u.memoizedState.isDehydrated)try{zb(r.containerInfo)}catch(Et){Pe(a,a.return,Et)}if(Ws){d=r.containerInfo,u=r.pendingChildren;try{av(d,u)}catch(Et){Pe(a,a.return,Et)}}}Pd&&(Pd=!1,g0(a));break;case 4:Si?(u=zi,zi=xd(a.stateNode.containerInfo),jn(r,a),ri(a),zi=u):(jn(r,a),ri(a)),d&4&&Ws&&h0(a.stateNode,a,a.stateNode.pendingChildren);break;case 12:jn(r,a),ri(a);break;case 13:jn(r,a),ri(a),a.child.flags&8192&&a.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(Bd=Oi()),d&4&&(d=a.updateQueue,d!==null&&(a.updateQueue=null,qf(a,d)));break;case 22:d&512&&(Qe||u===null||ai(u,u.return)),_=a.memoizedState!==null;var D=u!==null&&u.memoizedState!==null,V=_s,j=Qe;if(_s=V||_,Qe=j||D,jn(r,a),Qe=j,_s=V,ri(a),r=a.stateNode,r._current=a,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,d&8192&&(r._visibility=_?r._visibility&-2:r._visibility|1,_&&(r=_s||Qe,u===null||D||r||yr(a)),Rn&&(a.memoizedProps===null||a.memoizedProps.mode!=="manual"))){t:if(u=null,Rn)for(r=a;;){if(r.tag===5||Si&&r.tag===26||Un&&r.tag===27){if(u===null){D=u=r;try{b=D.stateNode,_?vb(b):yb(D.stateNode,D.memoizedProps)}catch(Et){Pe(D,D.return,Et)}}}else if(r.tag===6){if(u===null){D=r;try{var ot=D.stateNode;_?_b(ot):xb(ot,D.memoizedProps)}catch(Et){Pe(D,D.return,Et)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===a)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break t;for(;r.sibling===null;){if(r.return===null||r.return===a)break t;u===r&&(u=null),r=r.return}u===r&&(u=null),r.sibling.return=r.return,r=r.sibling}}d&4&&(d=a.updateQueue,d!==null&&(u=d.retryQueue,u!==null&&(d.retryQueue=null,qf(a,u))));break;case 19:jn(r,a),ri(a),d&4&&(d=a.updateQueue,d!==null&&(a.updateQueue=null,qf(a,d)));break;case 21:break;default:jn(r,a),ri(a)}}function ri(a){var r=a.flags;if(r&2){try{if(Rn&&(!Un||a.tag!==27)){t:{for(var u=a.return;u!==null;){if(u0(u)){var d=u;break t}u=u.return}throw Error(i(160))}switch(d.tag){case 27:if(Un){var _=d.stateNode,b=kf(a);Tc(a,b,_);break}case 5:var D=d.stateNode;d.flags&32&&(nv(D),d.flags&=-33);var V=kf(a);Tc(a,V,D);break;case 3:case 4:var j=d.stateNode.containerInfo,ot=kf(a);Wf(a,ot,j);break;default:throw Error(i(161))}}}catch(Et){Pe(a,a.return,Et)}a.flags&=-3}r&4096&&(a.flags&=-4097)}function g0(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var r=a;g0(r),r.tag===5&&r.flags&1024&&$M(r.stateNode),a=a.sibling}}function fs(a,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)f0(a,r.alternate,r),r=r.sibling}function yr(a){for(a=a.child;a!==null;){var r=a;switch(r.tag){case 0:case 11:case 14:case 15:Bs(4,r,r.return),yr(r);break;case 1:ai(r,r.return);var u=r.stateNode;typeof u.componentWillUnmount=="function"&&o0(r,r.return,u),yr(r);break;case 26:case 27:case 5:ai(r,r.return),yr(r);break;case 22:ai(r,r.return),r.memoizedState===null&&yr(r);break;default:yr(r)}a=a.sibling}}function Fs(a,r,u){for(u=u&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var d=r.alternate,_=a,b=r,D=b.flags;switch(b.tag){case 0:case 11:case 15:Fs(_,b,u),Wo(4,b);break;case 1:if(Fs(_,b,u),d=b,_=d.stateNode,typeof _.componentDidMount=="function")try{_.componentDidMount()}catch(ot){Pe(d,d.return,ot)}if(d=b,_=d.updateQueue,_!==null){var V=d.stateNode;try{var j=_.shared.hiddenCallbacks;if(j!==null)for(_.shared.hiddenCallbacks=null,_=0;_<j.length;_++)Tt(j[_],V)}catch(ot){Pe(d,d.return,ot)}}u&&D&64&&r0(b),Sa(b,b.return);break;case 26:case 27:case 5:Fs(_,b,u),u&&d===null&&D&4&&l0(b),Sa(b,b.return);break;case 12:Fs(_,b,u);break;case 13:Fs(_,b,u),u&&D&4&&p0(_,b);break;case 22:b.memoizedState===null&&Fs(_,b,u),Sa(b,b.return);break;default:Fs(_,b,u)}r=r.sibling}}function Yf(a,r){var u=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==u&&(a!=null&&a.refCount++,u!=null&&Go(u))}function Zf(a,r){a=null,r.alternate!==null&&(a=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==a&&(r.refCount++,a!=null&&Go(a))}function Hs(a,r,u,d){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)v0(a,r,u,d),r=r.sibling}function v0(a,r,u,d){var _=r.flags;switch(r.tag){case 0:case 11:case 15:Hs(a,r,u,d),_&2048&&Wo(9,r);break;case 3:Hs(a,r,u,d),_&2048&&(a=null,r.alternate!==null&&(a=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==a&&(r.refCount++,a!=null&&Go(a)));break;case 12:if(_&2048){Hs(a,r,u,d),a=r.stateNode;try{var b=r.memoizedProps,D=b.id,V=b.onPostCommit;typeof V=="function"&&V(D,r.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(j){Pe(r,r.return,j)}}else Hs(a,r,u,d);break;case 23:break;case 22:b=r.stateNode,r.memoizedState!==null?b._visibility&4?Hs(a,r,u,d):Xo(a,r):b._visibility&4?Hs(a,r,u,d):(b._visibility|=4,xr(a,r,u,d,(r.subtreeFlags&10256)!==0)),_&2048&&Yf(r.alternate,r);break;case 24:Hs(a,r,u,d),_&2048&&Zf(r.alternate,r);break;default:Hs(a,r,u,d)}}function xr(a,r,u,d,_){for(_=_&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var b=a,D=r,V=u,j=d,ot=D.flags;switch(D.tag){case 0:case 11:case 15:xr(b,D,V,j,_),Wo(8,D);break;case 23:break;case 22:var Et=D.stateNode;D.memoizedState!==null?Et._visibility&4?xr(b,D,V,j,_):Xo(b,D):(Et._visibility|=4,xr(b,D,V,j,_)),_&&ot&2048&&Yf(D.alternate,D);break;case 24:xr(b,D,V,j,_),_&&ot&2048&&Zf(D.alternate,D);break;default:xr(b,D,V,j,_)}r=r.sibling}}function Xo(a,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var u=a,d=r,_=d.flags;switch(d.tag){case 22:Xo(u,d),_&2048&&Yf(d.alternate,d);break;case 24:Xo(u,d),_&2048&&Zf(d.alternate,d);break;default:Xo(u,d)}r=r.sibling}}function Ma(a){if(a.subtreeFlags&Hr)for(a=a.child;a!==null;)_0(a),a=a.sibling}function _0(a){switch(a.tag){case 26:Ma(a),a.flags&Hr&&(a.memoizedState!==null?Yb(zi,a.memoizedState,a.memoizedProps):ev(a.type,a.memoizedProps));break;case 5:Ma(a),a.flags&Hr&&ev(a.type,a.memoizedProps);break;case 3:case 4:if(Si){var r=zi;zi=xd(a.stateNode.containerInfo),Ma(a),zi=r}else Ma(a);break;case 22:a.memoizedState===null&&(r=a.alternate,r!==null&&r.memoizedState!==null?(r=Hr,Hr=16777216,Ma(a),Hr=r):Ma(a));break;default:Ma(a)}}function y0(a){var r=a.alternate;if(r!==null&&(a=r.child,a!==null)){r.child=null;do r=a.sibling,a.sibling=null,a=r;while(a!==null)}}function qo(a){var r=a.deletions;if((a.flags&16)!==0){if(r!==null)for(var u=0;u<r.length;u++){var d=r[u];gn=d,S0(d,a)}y0(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)x0(a),a=a.sibling}function x0(a){switch(a.tag){case 0:case 11:case 15:qo(a),a.flags&2048&&Bs(9,a,a.return);break;case 3:qo(a);break;case 12:qo(a);break;case 22:var r=a.stateNode;a.memoizedState!==null&&r._visibility&4&&(a.return===null||a.return.tag!==13)?(r._visibility&=-5,wc(a)):qo(a);break;default:qo(a)}}function wc(a){var r=a.deletions;if((a.flags&16)!==0){if(r!==null)for(var u=0;u<r.length;u++){var d=r[u];gn=d,S0(d,a)}y0(a)}for(a=a.child;a!==null;){switch(r=a,r.tag){case 0:case 11:case 15:Bs(8,r,r.return),wc(r);break;case 22:u=r.stateNode,u._visibility&4&&(u._visibility&=-5,wc(r));break;default:wc(r)}a=a.sibling}}function S0(a,r){for(;gn!==null;){var u=gn;switch(u.tag){case 0:case 11:case 15:Bs(8,u,r);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var d=u.memoizedState.cachePool.pool;d!=null&&d.refCount++}break;case 24:Go(u.memoizedState.cache)}if(d=u.child,d!==null)d.return=u,gn=d;else t:for(u=a;gn!==null;){d=gn;var _=d.sibling,b=d.return;if(d0(d),d===u){gn=null;break t}if(_!==null){_.return=b,gn=_;break t}gn=b}}}function jf(a){var r=$0(a);if(r!=null){if(typeof r.memoizedProps["data-testname"]!="string")throw Error(i(364));return r}if(a=nb(a),a===null)throw Error(i(362));return a.stateNode.current}function Kf(a,r){var u=a.tag;switch(r.$$typeof){case qc:if(a.type===r.value)return!0;break;case Yc:t:{for(r=r.value,a=[a,0],u=0;u<a.length;){var d=a[u++],_=d.tag,b=a[u++],D=r[b];if(_!==5&&_!==26&&_!==27||!jo(d)){for(;D!=null&&Kf(d,D);)b++,D=r[b];if(b===r.length){r=!0;break t}else for(d=d.child;d!==null;)a.push(d,b),d=d.sibling}}r=!1}return r;case Zc:if((u===5||u===26||u===27)&&ab(a.stateNode,r.value))return!0;break;case Kc:if((u===5||u===6||u===26||u===27)&&(a=sb(a),a!==null&&0<=a.indexOf(r.value)))return!0;break;case jc:if((u===5||u===26||u===27)&&(a=a.memoizedProps["data-testname"],typeof a=="string"&&a.toLowerCase()===r.value.toLowerCase()))return!0;break;default:throw Error(i(365))}return!1}function Jf(a){switch(a.$$typeof){case qc:return"<"+(l(a.value)||"Unknown")+">";case Yc:return":has("+(Jf(a)||"")+")";case Zc:return'[role="'+a.value+'"]';case Kc:return'"'+a.value+'"';case jc:return'[data-testname="'+a.value+'"]';default:throw Error(i(365))}}function M0(a,r){var u=[];a=[a,0];for(var d=0;d<a.length;){var _=a[d++],b=_.tag,D=a[d++],V=r[D];if(b!==5&&b!==26&&b!==27||!jo(_)){for(;V!=null&&Kf(_,V);)D++,V=r[D];if(D===r.length)u.push(_);else for(_=_.child;_!==null;)a.push(_,D),_=_.sibling}}return u}function Qf(a,r){if(!Zo)throw Error(i(363));a=jf(a),a=M0(a,r),r=[],a=Array.from(a);for(var u=0;u<a.length;){var d=a[u++],_=d.tag;if(_===5||_===26||_===27)jo(d)||r.push(d.stateNode);else for(d=d.child;d!==null;)a.push(d),d=d.sibling}return r}function oi(){if((Ie&2)!==0&&be!==0)return be&-be;if(le.T!==null){var a=Nr;return a!==0?a:At()}return YM()}function b0(){Ti===0&&(Ti=(be&536870912)===0||Re?H():536870912);var a=Ai.current;return a!==null&&(a.flags|=32),Ti}function Hn(a,r,u){(a===Fe&&He===2||a.cancelPendingCommit!==null)&&(Sr(a,0),ds(a,be,Ti,!1)),B(a,u),((Ie&2)===0||a!==Fe)&&(a===Fe&&((Ie&2)===0&&(Pa|=u),$e===4&&ds(a,be,Ti,!1)),F(a))}function E0(a,r,u){if((Ie&6)!==0)throw Error(i(327));var d=!u&&(r&60)===0&&(r&a.expiredLanes)===0||R(a,r),_=d?bM(a,r):nd(a,r,!0),b=d;do{if(_===0){Vr&&!d&&ds(a,r,0,!1);break}else if(_===6)ds(a,r,0,!ys);else{if(u=a.current.alternate,b&&!SM(u)){_=nd(a,r,!1),b=!1;continue}if(_===2){if(b=r,a.errorRecoveryDisabledLanes&b)var D=0;else D=a.pendingLanes&-536870913,D=D!==0?D:D&536870912?536870912:0;if(D!==0){r=D;t:{var V=a;_=il;var j=xi&&V.current.memoizedState.isDehydrated;if(j&&(Sr(V,D).flags|=256),D=nd(V,D,!1),D!==2){if(Od&&!j){V.errorRecoveryDisabledLanes|=b,Pa|=b,_=4;break t}b=Qi,Qi=_,b!==null&&$f(b)}_=D}if(b=!1,_!==2)continue}}if(_===1){Sr(a,0),ds(a,r,0,!0);break}t:{switch(d=a,_){case 0:case 1:throw Error(i(345));case 4:if((r&4194176)===r){ds(d,r,Ti,!ys);break t}break;case 2:Qi=null;break;case 3:case 5:break;default:throw Error(i(329))}if(d.finishedWork=u,d.finishedLanes=r,(r&62914560)===r&&(b=Bd+300-Oi(),10<b)){if(ds(d,r,Ti,!ys),z(d,0)!==0)break t;d.timeoutHandle=WM(A0.bind(null,d,u,Qi,Jc,zd,r,Ti,Pa,Gr,ys,2,-0,0),b);break t}A0(d,u,Qi,Jc,zd,r,Ti,Pa,Gr,ys,0,-0,0)}}break}while(!0);F(a)}function $f(a){Qi===null?Qi=a:Qi.push.apply(Qi,a)}function A0(a,r,u,d,_,b,D,V,j,ot,Et,Ot,Ft){var ue=r.subtreeFlags;if((ue&8192||(ue&16785408)===16785408)&&(JM(),_0(r),r=QM(),r!==null)){a.cancelPendingCommit=r(P0.bind(null,a,u,d,_,D,V,j,1,Ot,Ft)),ds(a,b,D,!ot);return}P0(a,u,d,_,D,V,j,Et,Ot,Ft)}function SM(a){for(var r=a;;){var u=r.tag;if((u===0||u===11||u===15)&&r.flags&16384&&(u=r.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var d=0;d<u.length;d++){var _=u[d],b=_.getSnapshot;_=_.value;try{if(!hi(b(),_))return!1}catch{return!1}}if(u=r.child,r.subtreeFlags&16384&&u!==null)u.return=r,r=u;else{if(r===a)break;for(;r.sibling===null;){if(r.return===null||r.return===a)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ds(a,r,u,d){r&=~Id,r&=~Pa,a.suspendedLanes|=r,a.pingedLanes&=~r,d&&(a.warmLanes|=r),d=a.expirationTimes;for(var _=r;0<_;){var b=31-ci(_),D=1<<b;d[b]=-1,_&=~D}u!==0&&W(a,u,r)}function T0(){return(Ie&6)===0?(U(0),!1):!0}function td(){if(_e!==null){if(He===0)var a=_e.return;else a=_e,vs=La=null,Z(a),Ir=null,tl=0,a=_e;for(;a!==null;)a0(a.alternate,a),a=a.return;_e=null}}function Sr(a,r){a.finishedWork=null,a.finishedLanes=0;var u=a.timeoutHandle;u!==vd&&(a.timeoutHandle=vd,XM(u)),u=a.cancelPendingCommit,u!==null&&(a.cancelPendingCommit=null,u()),td(),Fe=a,_e=u=Vs(a.current,null),be=r,He=0,di=null,ys=!1,Vr=R(a,r),Od=!1,Gr=Ti=Id=Pa=js=$e=0,Qi=il=null,zd=!1,(r&8)!==0&&(r|=r&32);var d=a.entangledLanes;if(d!==0)for(a=a.entanglements,d&=r;0<d;){var _=31-ci(d),b=1<<_;r|=a[_],d&=~b}return xs=r,gt(),u}function w0(a,r){me=null,le.H=Ji,r===$o?(r=Xe(),He=3):r===Ud?(r=Xe(),He=4):He=r===Ev?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,di=r,_e===null&&($e=1,Sc(a,at(r,a.current)))}function C0(){var a=Ai.current;return a===null?!0:(be&4194176)===be?Ki===null:(be&62914560)===be||(be&536870912)!==0?a===Ki:!1}function R0(){var a=le.H;return le.H=Ji,a===null?Ji:a}function U0(){var a=le.A;return le.A=u1,a}function ed(){$e=4,ys||(be&4194176)!==be&&Ai.current!==null||(Vr=!0),(js&134217727)===0&&(Pa&134217727)===0||Fe===null||ds(Fe,be,Ti,!1)}function nd(a,r,u){var d=Ie;Ie|=2;var _=R0(),b=U0();(Fe!==a||be!==r)&&(Jc=null,Sr(a,r)),r=!1;var D=$e;t:do try{if(He!==0&&_e!==null){var V=_e,j=di;switch(He){case 8:td(),D=6;break t;case 3:case 2:case 6:Ai.current===null&&(r=!0);var ot=He;if(He=0,di=null,Mr(a,V,j,ot),u&&Vr){D=0;break t}break;default:ot=He,He=0,di=null,Mr(a,V,j,ot)}}MM(),D=$e;break}catch(Et){w0(a,Et)}while(!0);return r&&a.shellSuspendCounter++,vs=La=null,Ie=d,le.H=_,le.A=b,_e===null&&(Fe=null,be=0,gt()),D}function MM(){for(;_e!==null;)D0(_e)}function bM(a,r){var u=Ie;Ie|=2;var d=R0(),_=U0();Fe!==a||be!==r?(Jc=null,sl=Oi()+500,Sr(a,r)):Vr=R(a,r);t:do try{if(He!==0&&_e!==null){r=_e;var b=di;e:switch(He){case 1:He=0,di=null,Mr(a,r,b,1);break;case 2:if(Rt(b)){He=0,di=null,L0(r);break}r=function(){He===2&&Fe===a&&(He=7),F(a)},b.then(r,r);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Rt(b)?(He=0,di=null,L0(r)):(He=0,di=null,Mr(a,r,b,7));break;case 5:var D=null;switch(_e.tag){case 26:D=_e.memoizedState;case 5:case 27:var V=_e,j=V.type,ot=V.pendingProps;if(D?vv(D):tv(j,ot)){He=0,di=null;var Et=V.sibling;if(Et!==null)_e=Et;else{var Ot=V.return;Ot!==null?(_e=Ot,Cc(Ot)):_e=null}break e}}He=0,di=null,Mr(a,r,b,5);break;case 6:He=0,di=null,Mr(a,r,b,6);break;case 8:td(),$e=6;break t;default:throw Error(i(462))}}EM();break}catch(Ft){w0(a,Ft)}while(!0);return vs=La=null,le.H=d,le.A=_,Ie=u,_e!==null?0:(Fe=null,be=0,gt(),$e)}function EM(){for(;_e!==null&&!$b();)D0(_e)}function D0(a){var r=Qg(a.alternate,a,xs);a.memoizedProps=a.pendingProps,r===null?Cc(a):_e=r}function L0(a){var r=a,u=r.alternate;switch(r.tag){case 15:case 0:r=qg(u,r,r.pendingProps,r.type,void 0,be);break;case 11:r=qg(u,r,r.pendingProps,r.type.render,r.ref,be);break;case 5:Z(r);default:a0(u,r),r=_e=B0(r,xs),r=Qg(u,r,xs)}a.memoizedProps=a.pendingProps,r===null?Cc(a):_e=r}function Mr(a,r,u,d){vs=La=null,Z(r),Ir=null,tl=0;var _=r.return;try{if(mM(a,_,r,u,be)){$e=1,Sc(a,at(u,a.current)),_e=null;return}}catch(b){if(_!==null)throw _e=_,b;$e=1,Sc(a,at(u,a.current)),_e=null;return}r.flags&32768?(Re||d===1?a=!0:Vr||(be&536870912)!==0?a=!1:(ys=a=!0,(d===2||d===3||d===6)&&(d=Ai.current,d!==null&&d.tag===13&&(d.flags|=16384))),N0(r,a)):Cc(r)}function Cc(a){var r=a;do{if((r.flags&32768)!==0){N0(r,ys);return}a=r.return;var u=vM(r.alternate,r,xs);if(u!==null){_e=u;return}if(r=r.sibling,r!==null){_e=r;return}_e=r=a}while(r!==null);$e===0&&($e=5)}function N0(a,r){do{var u=_M(a.alternate,a);if(u!==null){u.flags&=32767,_e=u;return}if(u=a.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!r&&(a=a.sibling,a!==null)){_e=a;return}_e=a=u}while(a!==null);$e=6,_e=null}function P0(a,r,u,d,_,b,D,V,j,ot){var Et=le.T,Ot=Aa();try{Kn(2),le.T=null,AM(a,r,u,d,Ot,_,b,D,V,j,ot)}finally{le.T=Et,Kn(Ot)}}function AM(a,r,u,d,_,b,D,V){do ba();while(Oa!==null);if((Ie&6)!==0)throw Error(i(327));var j=a.finishedWork;if(d=a.finishedLanes,j===null)return null;if(a.finishedWork=null,a.finishedLanes=0,j===a.current)throw Error(i(177));a.callbackNode=null,a.callbackPriority=0,a.cancelPendingCommit=null;var ot=j.lanes|j.childLanes;if(ot|=Ad,Q(a,d,ot,b,D,V),a===Fe&&(_e=Fe=null,be=0),(j.subtreeFlags&10256)===0&&(j.flags&10256)===0||Qc||(Qc=!0,Fd=ot,Hd=u,RM(bd,function(){return ba(),null})),u=(j.flags&15990)!==0,(j.subtreeFlags&15990)!==0||u?(u=le.T,le.T=null,b=Aa(),Kn(2),D=Ie,Ie|=4,yM(a,j),m0(j,a),GM(a.containerInfo),a.current=j,f0(a,j.alternate,j),t1(),Ie=D,Kn(b),le.T=u):a.current=j,Qc?(Qc=!1,Oa=a,al=d):O0(a,ot),ot=a.pendingLanes,ot===0&&(Ks=null),I(j.stateNode),F(a),r!==null)for(_=a.onRecoverableError,j=0;j<r.length;j++)ot=r[j],_(ot.value,{componentStack:ot.stack});return(al&3)!==0&&ba(),ot=a.pendingLanes,(d&4194218)!==0&&(ot&42)!==0?a===Vd?rl++:(rl=0,Vd=a):rl=0,U(0),null}function O0(a,r){(a.pooledCacheLanes&=r)===0&&(r=a.pooledCache,r!=null&&(a.pooledCache=null,Go(r)))}function ba(){if(Oa!==null){var a=Oa,r=Fd;Fd=0;var u=et(al),d=32>u?32:u;u=le.T;var _=Aa();try{if(Kn(d),le.T=null,Oa===null)var b=!1;else{d=Hd,Hd=null;var D=Oa,V=al;if(Oa=null,al=0,(Ie&6)!==0)throw Error(i(331));var j=Ie;if(Ie|=4,x0(D.current),v0(D,D.current,V,d),Ie=j,U(0,!1),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Ko,D)}catch{}b=!0}return b}finally{Kn(_),le.T=u,O0(a,r)}}return!1}function I0(a,r,u){r=at(u,r),r=wf(a.stateNode,r,2),a=zt(a,r,2),a!==null&&(B(a,2),F(a))}function Pe(a,r,u){if(a.tag===3)I0(a,a,u);else for(;r!==null;){if(r.tag===3){I0(r,a,u);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ks===null||!Ks.has(d))){a=at(u,a),u=Fg(2),d=zt(r,u,2),d!==null&&(Hg(u,d,r,a),B(d,2),F(d));break}}r=r.return}}function id(a,r,u){var d=a.pingCache;if(d===null){d=a.pingCache=new h1;var _=new Set;d.set(r,_)}else _=d.get(r),_===void 0&&(_=new Set,d.set(r,_));_.has(u)||(Od=!0,_.add(u),a=TM.bind(null,a,r,u),r.then(a,a))}function TM(a,r,u){var d=a.pingCache;d!==null&&d.delete(r),a.pingedLanes|=a.suspendedLanes&u,a.warmLanes&=~u,Fe===a&&(be&u)===u&&($e===4||$e===3&&(be&62914560)===be&&300>Oi()-Bd?(Ie&2)===0&&Sr(a,0):Id|=u,Gr===be&&(Gr=0)),F(a)}function z0(a,r){r===0&&(r=C()),a=Ht(a,r),a!==null&&(B(a,r),F(a))}function wM(a){var r=a.memoizedState,u=0;r!==null&&(u=r.retryLane),z0(a,u)}function CM(a,r){var u=0;switch(a.tag){case 13:var d=a.stateNode,_=a.memoizedState;_!==null&&(u=_.retryLane);break;case 19:d=a.stateNode;break;case 22:d=a.stateNode._retryCache;break;default:throw Error(i(314))}d!==null&&d.delete(r),z0(a,u)}function RM(a,r){return Oc(a,r)}function UM(a,r,u,d){this.tag=a,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sd(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Vs(a,r){var u=a.alternate;return u===null?(u=e(a.tag,r,a.key,a.mode),u.elementType=a.elementType,u.type=a.type,u.stateNode=a.stateNode,u.alternate=a,a.alternate=u):(u.pendingProps=r,u.type=a.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=a.flags&31457280,u.childLanes=a.childLanes,u.lanes=a.lanes,u.child=a.child,u.memoizedProps=a.memoizedProps,u.memoizedState=a.memoizedState,u.updateQueue=a.updateQueue,r=a.dependencies,u.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},u.sibling=a.sibling,u.index=a.index,u.ref=a.ref,u.refCleanup=a.refCleanup,u}function B0(a,r){a.flags&=31457282;var u=a.alternate;return u===null?(a.childLanes=0,a.lanes=r,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,r=u.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a}function Rc(a,r,u,d,_,b){var D=0;if(d=a,typeof a=="function")sd(a)&&(D=1);else if(typeof a=="string")D=Si&&Un?hv(a,u,bn.current)?26:yv(a)?27:5:Si?hv(a,u,bn.current)?26:5:Un&&yv(a)?27:5;else t:switch(a){case Er:return Ea(u.children,_,b,r);case X0:D=8,_|=24;break;case cd:return a=e(12,u,r,_|2),a.elementType=cd,a.lanes=b,a;case hd:return a=e(13,u,r,_),a.elementType=hd,a.lanes=b,a;case fd:return a=e(19,u,r,_),a.elementType=fd,a.lanes=b,a;case Y0:return F0(u,_,b,r);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case PM:case Gs:D=10;break t;case q0:D=9;break t;case ud:D=11;break t;case dd:D=14;break t;case ks:D=16,d=null;break t}D=29,u=Error(i(130,a===null?"null":typeof a,"")),d=null}return r=e(D,u,r,_),r.elementType=a,r.type=d,r.lanes=b,r}function Ea(a,r,u,d){return a=e(7,a,d,r),a.lanes=u,a}function F0(a,r,u,d){a=e(22,a,d,r),a.elementType=Y0,a.lanes=u;var _={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var b=_._current;if(b===null)throw Error(i(456));if((_._pendingVisibility&2)===0){var D=Ht(b,2);D!==null&&(_._pendingVisibility|=2,Hn(D,b,2))}},attach:function(){var b=_._current;if(b===null)throw Error(i(456));if((_._pendingVisibility&2)!==0){var D=Ht(b,2);D!==null&&(_._pendingVisibility&=-3,Hn(D,b,2))}}};return a.stateNode=_,a}function ad(a,r,u){return a=e(6,a,null,r),a.lanes=u,a}function rd(a,r,u){return r=e(4,a.children!==null?a.children:[],a.key,r),r.lanes=u,r.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},r}function DM(a,r,u,d,_,b,D,V){this.tag=1,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=vd,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=w(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=w(0),this.hiddenUpdates=w(null),this.identifierPrefix=d,this.onUncaughtError=_,this.onCaughtError=b,this.onRecoverableError=D,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function H0(a,r,u,d,_,b,D,V,j,ot,Et,Ot){return a=new DM(a,r,u,D,V,j,ot,Ot),r=1,b===!0&&(r|=24),b=e(3,null,null,r),a.current=b,b.stateNode=a,r=Bf(),r.refCount++,a.pooledCache=r,r.refCount++,b.memoizedState={element:d,isDehydrated:u,cache:r},It(b),a}function V0(a){return a?(a=wr,a):wr}function G0(a){var r=a._reactInternals;if(r===void 0)throw typeof a.render=="function"?Error(i(188)):(a=Object.keys(a).join(","),Error(i(268,a)));return a=v(r),a=a!==null?x(a):null,a===null?null:Yo(a.stateNode)}function k0(a,r,u,d,_,b){_=V0(_),d.context===null?d.context=_:d.pendingContext=_,d=te(r),d.payload={element:u},b=b===void 0?null:b,b!==null&&(d.callback=b),u=zt(a,d,r),u!==null&&(Hn(u,a,r),se(u,a,r))}function W0(a,r){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var u=a.retryLane;a.retryLane=u!==0&&u<r?u:r}}function od(a,r){W0(a,r),(a=a.alternate)&&W0(a,r)}var ve={},LM=_m(),li=P3(),ld=Object.assign,NM=Symbol.for("react.element"),Uc=Symbol.for("react.transitional.element"),br=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),PM=Symbol.for("react.provider"),q0=Symbol.for("react.consumer"),Gs=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),ks=Symbol.for("react.lazy"),Y0=Symbol.for("react.offscreen"),OM=Symbol.for("react.memo_cache_sentinel"),Z0=Symbol.iterator,IM=Symbol.for("react.client.reference"),le=LM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pd,j0,md=!1,Dc=Array.isArray,zM=t.rendererVersion,BM=t.rendererPackageName,K0=t.extraDevToolsConfig,Yo=t.getPublicInstance,FM=t.getRootHostContext,HM=t.getChildHostContext,VM=t.prepareForCommit,GM=t.resetAfterCommit,kM=t.createInstance,gd=t.appendInitialChild,J0=t.finalizeInitialChildren,Lc=t.shouldSetTextContent,Q0=t.createTextInstance,WM=t.scheduleTimeout,XM=t.cancelTimeout,vd=t.noTimeout,ps=t.isPrimaryRenderer;t.warnsIfNotActing;var Rn=t.supportsMutation,Ws=t.supportsPersistence,xi=t.supportsHydration,$0=t.getInstanceFromNode;t.beforeActiveInstanceBlur,t.afterActiveInstanceBlur;var qM=t.preparePortalMount;t.prepareScopeUpdate,t.getInstanceFromScope;var Kn=t.setCurrentUpdatePriority,Aa=t.getCurrentUpdatePriority,YM=t.resolveUpdatePriority;t.resolveEventType,t.resolveEventTimeStamp;var ZM=t.shouldAttemptEagerTransition,jM=t.detachDeletedInstance;t.requestPostPaintCallback;var KM=t.maySuspendCommit,tv=t.preloadInstance,JM=t.startSuspendingCommit,ev=t.suspendInstance,QM=t.waitForCommitToBeReady,Ar=t.NotPendingTransition,Ta=t.HostTransitionContext,$M=t.resetFormInstance;t.bindToConsole;var tb=t.supportsMicrotasks,eb=t.scheduleMicrotask,Zo=t.supportsTestSelectors,nb=t.findFiberRoot,ib=t.getBoundingRect,sb=t.getTextContent,jo=t.isHiddenSubtree,ab=t.matchAccessibilityRole,rb=t.setFocusIfFocusable,ob=t.setupIntersectionObserver,lb=t.appendChild,cb=t.appendChildToContainer,ub=t.commitTextUpdate,hb=t.commitMount,fb=t.commitUpdate,db=t.insertBefore,pb=t.insertInContainerBefore,mb=t.removeChild,gb=t.removeChildFromContainer,nv=t.resetTextContent,vb=t.hideInstance,_b=t.hideTextInstance,yb=t.unhideInstance,xb=t.unhideTextInstance,Sb=t.clearContainer,Mb=t.cloneInstance,iv=t.createContainerChildSet,sv=t.appendChildToContainerChildSet,bb=t.finalizeContainerChildren,av=t.replaceContainerChildren,rv=t.cloneHiddenInstance,ov=t.cloneHiddenTextInstance,_d=t.isSuspenseInstancePending,yd=t.isSuspenseInstanceFallback,Eb=t.getSuspenseInstanceFallbackErrorDetails,Ab=t.registerSuspenseInstanceRetry,Tb=t.canHydrateFormStateMarker,wb=t.isFormStateMarkerMatching,lv=t.getNextHydratableSibling,cv=t.getFirstHydratableChild,Cb=t.getFirstHydratableChildWithinContainer,Rb=t.getFirstHydratableChildWithinSuspenseInstance,Ub=t.canHydrateInstance,Db=t.canHydrateTextInstance,Lb=t.canHydrateSuspenseInstance,Nb=t.hydrateInstance,Pb=t.hydrateTextInstance,Ob=t.hydrateSuspenseInstance,Ib=t.getNextHydratableInstanceAfterSuspenseInstance,zb=t.commitHydratedContainer,Bb=t.commitHydratedSuspenseInstance,Fb=t.clearSuspenseBoundary,Hb=t.clearSuspenseBoundaryFromContainer,uv=t.shouldDeleteUnhydratedTailInstances;t.diffHydratedPropsForDevWarnings,t.diffHydratedTextForDevWarnings,t.describeHydratableInstanceForDevWarnings;var Vb=t.validateHydratableInstance,Gb=t.validateHydratableTextInstance,Si=t.supportsResources,hv=t.isHostHoistableType,xd=t.getHoistableRoot,fv=t.getResource,dv=t.acquireResource,pv=t.releaseResource,kb=t.hydrateHoistable,mv=t.mountHoistable,gv=t.unmountHoistable,Wb=t.createHoistableInstance,Xb=t.prepareToCommitHoistables,qb=t.mayResourceSuspendCommit,vv=t.preloadResource,Yb=t.suspendResource,Un=t.supportsSingletons,_v=t.resolveSingletonInstance,Zb=t.clearSingleton,jb=t.acquireSingletonInstance,Kb=t.releaseSingletonInstance,yv=t.isHostSingletonType,Sd=[],Tr=-1,wr={},ci=Math.clz32?Math.clz32:E,Jb=Math.log,Qb=Math.LN2,Nc=128,Pc=4194304,Oc=li.unstable_scheduleCallback,Md=li.unstable_cancelCallback,$b=li.unstable_shouldYield,t1=li.unstable_requestPaint,Oi=li.unstable_now,xv=li.unstable_ImmediatePriority,e1=li.unstable_UserBlockingPriority,bd=li.unstable_NormalPriority,n1=li.unstable_IdlePriority,i1=li.log,s1=li.unstable_setDisableYieldValue,Ko=null,ui=null,hi=typeof Object.is=="function"?Object.is:G,Sv=new WeakMap,Cr=[],Rr=0,Ic=null,zc=0,Mi=[],bi=0,wa=null,ms=1,gs="",bn=S(null),Jo=S(null),Xs=S(null),Bc=S(null),Vn=null,Dn=null,Re=!1,Ii=null,ji=!1,Ed=Error(i(519)),Ei=[],Ur=0,Ad=0,Fc=null,Dr=null,Td=!1,Hc=!1,wd=!1,Lr=0,Qo=null,Cd=0,Nr=0,Pr=null,qs=!1,Rd=!1,a1=Object.prototype.hasOwnProperty,$o=Error(i(460)),Ud=Error(i(474)),Vc={then:function(){}},Or=null,Ir=null,tl=0,Ca=Oo(!0),Mv=Oo(!1),zr=S(null),Gc=S(0),Ai=S(null),Ki=null,fn=S(0),Ys=0,me=null,Oe=null,on=null,kc=!1,Br=!1,Ra=!1,Wc=0,el=0,Fr=null,r1=0,Dd=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}},Ji={readContext:Cn,use:kt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We};Ji.useCacheRefresh=We,Ji.useMemoCache=We,Ji.useHostTransitionStatus=We,Ji.useFormState=We,Ji.useActionState=We,Ji.useOptimistic=We;var Ua={readContext:Cn,use:kt,useCallback:function(a,r){return yt().memoizedState=[a,r===void 0?null:r],a},useContext:Cn,useEffect:Sg,useImperativeHandle:function(a,r,u){u=u!=null?u.concat([a]):null,_c(4194308,4,Eg.bind(null,r,a),u)},useLayoutEffect:function(a,r){return _c(4194308,4,a,r)},useInsertionEffect:function(a,r){_c(4,2,a,r)},useMemo:function(a,r){var u=yt();r=r===void 0?null:r;var d=a();if(Ra){k(!0);try{a()}finally{k(!1)}}return u.memoizedState=[d,r],d},useReducer:function(a,r,u){var d=yt();if(u!==void 0){var _=u(r);if(Ra){k(!0);try{u(r)}finally{k(!1)}}}else _=r;return d.memoizedState=d.baseState=_,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:_},d.queue=a,a=a.dispatch=pM.bind(null,me,a),[d.memoizedState,a]},useRef:function(a){var r=yt();return a={current:a},r.memoizedState=a},useState:function(a){a=zn(a);var r=a.queue,u=Ng.bind(null,me,r);return r.dispatch=u,[a.memoizedState,u]},useDebugValue:Mf,useDeferredValue:function(a,r){var u=yt();return bf(u,a,r)},useTransition:function(){var a=zn(!1);return a=Rg.bind(null,me,a.queue,!0,!1),yt().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,r,u){var d=me,_=yt();if(Re){if(u===void 0)throw Error(i(407));u=u()}else{if(u=r(),Fe===null)throw Error(i(349));(be&60)!==0||wn(d,r,u)}_.memoizedState=u;var b={value:u,getSnapshot:r};return _.queue=b,Sg(jt.bind(null,d,b,a),[a]),d.flags|=2048,_r(9,Ee.bind(null,d,b,u,r),{destroy:void 0},null),u},useId:function(){var a=yt(),r=Fe.identifierPrefix;if(Re){var u=gs,d=ms;u=(d&~(1<<32-ci(d)-1)).toString(32)+u,r=":"+r+"R"+u,u=Wc++,0<u&&(r+="H"+u.toString(32)),r+=":"}else u=r1++,r=":"+r+"r"+u.toString(32)+":";return a.memoizedState=r},useCacheRefresh:function(){return yt().memoizedState=dM.bind(null,me)}};Ua.useMemoCache=ne,Ua.useHostTransitionStatus=Ef,Ua.useFormState=vc,Ua.useActionState=vc,Ua.useOptimistic=function(a){var r=yt();r.memoizedState=r.baseState=a;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=u,r=Af.bind(null,me,!0,u),u.dispatch=r,[a,r]};var Zs={readContext:Cn,use:kt,useCallback:Tg,useContext:Cn,useEffect:Sf,useImperativeHandle:Ag,useInsertionEffect:Mg,useLayoutEffect:bg,useMemo:wg,useReducer:Qt,useRef:xg,useState:function(){return Qt(Jt)},useDebugValue:Mf,useDeferredValue:function(a,r){var u=Mt();return Cg(u,Oe.memoizedState,a,r)},useTransition:function(){var a=Qt(Jt)[0],r=Mt().memoizedState;return[typeof a=="boolean"?a:Gt(a),r]},useSyncExternalStore:Ge,useId:Dg};Zs.useCacheRefresh=Lg,Zs.useMemoCache=ne,Zs.useHostTransitionStatus=Ef,Zs.useFormState=Bo,Zs.useActionState=Bo,Zs.useOptimistic=function(a,r){var u=Mt();return cs(u,Oe,a,r)};var Da={readContext:Cn,use:kt,useCallback:Tg,useContext:Cn,useEffect:Sf,useImperativeHandle:Ag,useInsertionEffect:Mg,useLayoutEffect:bg,useMemo:wg,useReducer:Be,useRef:xg,useState:function(){return Be(Jt)},useDebugValue:Mf,useDeferredValue:function(a,r){var u=Mt();return Oe===null?bf(u,a,r):Cg(u,Oe.memoizedState,a,r)},useTransition:function(){var a=Be(Jt)[0],r=Mt().memoizedState;return[typeof a=="boolean"?a:Gt(a),r]},useSyncExternalStore:Ge,useId:Dg};Da.useCacheRefresh=Lg,Da.useMemoCache=ne,Da.useHostTransitionStatus=Ef,Da.useFormState=yg,Da.useActionState=yg,Da.useOptimistic=function(a,r){var u=Mt();return Oe!==null?cs(u,Oe,a,r):(u.baseState=a,[a,u.queue.dispatch])};var Ld={isMounted:function(a){return(a=a._reactInternals)?m(a)===a:!1},enqueueSetState:function(a,r,u){a=a._reactInternals;var d=oi(),_=te(d);_.payload=r,u!=null&&(_.callback=u),r=zt(a,_,d),r!==null&&(Hn(r,a,d),se(r,a,d))},enqueueReplaceState:function(a,r,u){a=a._reactInternals;var d=oi(),_=te(d);_.tag=1,_.payload=r,u!=null&&(_.callback=u),r=zt(a,_,d),r!==null&&(Hn(r,a,d),se(r,a,d))},enqueueForceUpdate:function(a,r){a=a._reactInternals;var u=oi(),d=te(u);d.tag=2,r!=null&&(d.callback=r),r=zt(a,d,u),r!==null&&(Hn(r,a,u),se(r,a,u))}},bv=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Ev=Error(i(461)),mn=!1,Nd={dehydrated:null,treeContext:null,retryLane:0},Xc=S(null),La=null,vs=null,o1=typeof AbortController<"u"?AbortController:function(){var a=[],r=this.signal={aborted:!1,addEventListener:function(u,d){a.push(d)}};this.abort=function(){r.aborted=!0,a.forEach(function(u){return u()})}},l1=li.unstable_scheduleCallback,c1=li.unstable_NormalPriority,Je={$$typeof:Gs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Av=le.S;le.S=function(a,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Vt(a,r),Av!==null&&Av(a,r)};var Na=S(null),_s=!1,Qe=!1,Pd=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,gn=null,wv=!1,ln=null,fi=!1,zi=null,Hr=8192,u1={getCacheForType:function(a){var r=Cn(Je),u=r.data.get(a);return u===void 0&&(u=a(),r.data.set(a,u)),u}},qc=0,Yc=1,Zc=2,jc=3,Kc=4;if(typeof Symbol=="function"&&Symbol.for){var nl=Symbol.for;qc=nl("selector.component"),Yc=nl("selector.has_pseudo_class"),Zc=nl("selector.role"),jc=nl("selector.test_id"),Kc=nl("selector.text")}var h1=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Fe=null,_e=null,be=0,He=0,di=null,ys=!1,Vr=!1,Od=!1,xs=0,$e=0,js=0,Pa=0,Id=0,Ti=0,Gr=0,il=null,Qi=null,zd=!1,Bd=0,sl=1/0,Jc=null,Ks=null,Qc=!1,Oa=null,al=0,Fd=0,Hd=null,rl=0,Vd=null;return ve.attemptContinuousHydration=function(a){if(a.tag===13){var r=Ht(a,67108864);r!==null&&Hn(r,a,67108864),od(a,67108864)}},ve.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var r=oi(),u=Ht(a,r);u!==null&&Hn(u,a,r),od(a,r)}},ve.attemptSynchronousHydration=function(a){switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=T(a.pendingLanes);if(r!==0){for(a.pendingLanes|=2,a.entangledLanes|=2;r;){var u=1<<31-ci(r);a.entanglements[1]|=u,r&=~u}F(a),(Ie&6)===0&&(sl=Oi()+500,U(0))}}break;case 13:r=Ht(a,2),r!==null&&Hn(r,a,2),T0(),od(a,2)}},ve.batchedUpdates=function(a,r){return a(r)},ve.createComponentSelector=function(a){return{$$typeof:qc,value:a}},ve.createContainer=function(a,r,u,d,_,b,D,V,j,ot){return H0(a,r,!1,null,u,d,b,D,V,j,ot,null)},ve.createHasPseudoClassSelector=function(a){return{$$typeof:Yc,value:a}},ve.createHydrationContainer=function(a,r,u,d,_,b,D,V,j,ot,Et,Ot,Ft){return a=H0(u,d,!0,a,_,b,V,j,ot,Et,Ot,Ft),a.context=V0(null),u=a.current,d=oi(),_=te(d),_.callback=r??null,zt(u,_,d),a.current.lanes=d,B(a,d),F(a),a},ve.createPortal=function(a,r,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:d==null?null:""+d,children:a,containerInfo:r,implementation:u}},ve.createRoleSelector=function(a){return{$$typeof:Zc,value:a}},ve.createTestNameSelector=function(a){return{$$typeof:jc,value:a}},ve.createTextSelector=function(a){return{$$typeof:Kc,value:a}},ve.defaultOnCaughtError=function(a){console.error(a)},ve.defaultOnRecoverableError=function(a){bv(a)},ve.defaultOnUncaughtError=function(a){bv(a)},ve.deferredUpdates=function(a){var r=le.T,u=Aa();try{return Kn(32),le.T=null,a()}finally{Kn(u),le.T=r}},ve.discreteUpdates=function(a,r,u,d,_){var b=le.T,D=Aa();try{return Kn(2),le.T=null,a(r,u,d,_)}finally{Kn(D),le.T=b,Ie===0&&(sl=Oi()+500)}},ve.findAllNodes=Qf,ve.findBoundingRects=function(a,r){if(!Zo)throw Error(i(363));r=Qf(a,r),a=[];for(var u=0;u<r.length;u++)a.push(ib(r[u]));for(r=a.length-1;0<r;r--){u=a[r];for(var d=u.x,_=d+u.width,b=u.y,D=b+u.height,V=r-1;0<=V;V--)if(r!==V){var j=a[V],ot=j.x,Et=ot+j.width,Ot=j.y,Ft=Ot+j.height;if(d>=ot&&b>=Ot&&_<=Et&&D<=Ft){a.splice(r,1);break}else if(d!==ot||u.width!==j.width||Ft<b||Ot>D){if(!(b!==Ot||u.height!==j.height||Et<d||ot>_)){ot>d&&(j.width+=ot-d,j.x=d),Et<_&&(j.width=_-ot),a.splice(r,1);break}}else{Ot>b&&(j.height+=Ot-b,j.y=b),Ft<D&&(j.height=D-Ot),a.splice(r,1);break}}}return a},ve.findHostInstance=G0,ve.findHostInstanceWithNoPortals=function(a){return a=v(a),a=a!==null?M(a):null,a===null?null:Yo(a.stateNode)},ve.findHostInstanceWithWarning=function(a){return G0(a)},ve.flushPassiveEffects=ba,ve.flushSyncFromReconciler=function(a){var r=Ie;Ie|=1;var u=le.T,d=Aa();try{if(Kn(2),le.T=null,a)return a()}finally{Kn(d),le.T=u,Ie=r,(Ie&6)===0&&U(0)}},ve.flushSyncWork=T0,ve.focusWithin=function(a,r){if(!Zo)throw Error(i(363));for(a=jf(a),r=M0(a,r),r=Array.from(r),a=0;a<r.length;){var u=r[a++],d=u.tag;if(!jo(u)){if((d===5||d===26||d===27)&&rb(u.stateNode))return!0;for(u=u.child;u!==null;)r.push(u),u=u.sibling}}return!1},ve.getFindAllNodesFailureDescription=function(a,r){if(!Zo)throw Error(i(363));var u=0,d=[];a=[jf(a),0];for(var _=0;_<a.length;){var b=a[_++],D=b.tag,V=a[_++],j=r[V];if((D!==5&&D!==26&&D!==27||!jo(b))&&(Kf(b,j)&&(d.push(Jf(j)),V++,V>u&&(u=V)),V<r.length))for(b=b.child;b!==null;)a.push(b,V),b=b.sibling}if(u<r.length){for(a=[];u<r.length;u++)a.push(Jf(r[u]));return`findAllNodes was able to match part of the selector:
  `+(d.join(" > ")+`

No matching component was found for:
  `)+a.join(" > ")}return null},ve.getPublicRootInstance=function(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 27:case 5:return Yo(a.child.stateNode);default:return a.child.stateNode}},ve.injectIntoDevTools=function(){var a={bundleType:0,version:zM,rendererPackageName:BM,currentDispatcherRef:le,findFiberByHostInstance:$0,reconcilerVersion:"19.0.0"};if(K0!==null&&(a.rendererConfig=K0),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(r.isDisabled||!r.supportsFiber)a=!0;else{try{Ko=r.inject(a),ui=r}catch{}a=!!r.checkDCE}}return a},ve.isAlreadyRendering=function(){return!1},ve.observeVisibleRects=function(a,r,u,d){if(!Zo)throw Error(i(363));a=Qf(a,r);var _=ob(a,u,d).disconnect;return{disconnect:function(){_()}}},ve.shouldError=function(){return null},ve.shouldSuspend=function(){return!1},ve.startHostTransition=function(a,r,u,d){if(a.tag!==5)throw Error(i(476));var _=Ug(a).queue;Rg(a,_,r,Ar,u===null?n:function(){var b=Ug(a).next.queue;return Fo(a,b,{},oi()),u(d)})},ve.updateContainer=function(a,r,u,d){var _=r.current,b=oi();return k0(_,b,a,r,u,d),b},ve.updateContainerSync=function(a,r,u,d){return r.tag===0&&ba(),k0(r.current,2,a,r,u,d),2},ve},s.exports.default=s.exports,Object.defineProperty(s.exports,"__esModule",{value:!0})}(Pp)),Pp.exports}var _y;function I3(){return _y||(_y=1,Np.exports=O3()),Np.exports}var z3=I3();const B3=Iy(z3);var zp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function F3(){return yy||(yy=1,function(s){function t(I,k){var G=I.length;I.push(k);t:for(;0<G;){var at=G-1>>>1,rt=I[at];if(0<i(rt,k))I[at]=k,I[G]=rt,G=at;else break t}}function e(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var k=I[0],G=I.pop();if(G!==k){I[0]=G;t:for(var at=0,rt=I.length,ft=rt>>>1;at<ft;){var Ct=2*(at+1)-1,Wt=I[Ct],J=Ct+1,ct=I[J];if(0>i(Wt,G))J<rt&&0>i(ct,Wt)?(I[at]=ct,I[J]=G,at=J):(I[at]=Wt,I[Ct]=G,at=Ct);else if(J<rt&&0>i(ct,G))I[at]=ct,I[J]=G,at=J;else break t}}return k}function i(I,k){var G=I.sortIndex-k.sortIndex;return G!==0?G:I.id-k.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var h=[],f=[],p=1,m=null,g=3,v=!1,x=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function E(I){for(var k=e(f);k!==null;){if(k.callback===null)n(f);else if(k.startTime<=I)n(f),k.sortIndex=k.expirationTime,t(h,k);else break;k=e(f)}}function T(I){if(M=!1,E(I),!x)if(e(h)!==null)x=!0,K();else{var k=e(f);k!==null&&et(T,k.startTime-I)}}var z=!1,R=-1,N=5,H=-1;function C(){return!(s.unstable_now()-H<N)}function w(){if(z){var I=s.unstable_now();H=I;var k=!0;try{t:{x=!1,M&&(M=!1,y(R),R=-1),v=!0;var G=g;try{e:{for(E(I),m=e(h);m!==null&&!(m.expirationTime>I&&C());){var at=m.callback;if(typeof at=="function"){m.callback=null,g=m.priorityLevel;var rt=at(m.expirationTime<=I);if(I=s.unstable_now(),typeof rt=="function"){m.callback=rt,E(I),k=!0;break e}m===e(h)&&n(h),E(I)}else n(h);m=e(h)}if(m!==null)k=!0;else{var ft=e(f);ft!==null&&et(T,ft.startTime-I),k=!1}}break t}finally{m=null,g=G,v=!1}k=void 0}}finally{k?B():z=!1}}}var B;if(typeof A=="function")B=function(){A(w)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,W=Q.port2;Q.port1.onmessage=w,B=function(){W.postMessage(null)}}else B=function(){S(w,0)};function K(){z||(z=!0,B())}function et(I,k){R=S(function(){I(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_continueExecution=function(){x||v||(x=!0,K())},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return e(h)},s.unstable_next=function(I){switch(g){case 1:case 2:case 3:var k=3;break;default:k=g}var G=g;g=k;try{return I()}finally{g=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=g;g=I;try{return k()}finally{g=G}},s.unstable_scheduleCallback=function(I,k,G){var at=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?at+G:at):G=at,I){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=G+rt,I={id:p++,callback:k,priorityLevel:I,startTime:G,expirationTime:rt,sortIndex:-1},G>at?(I.sortIndex=G,t(f,I),e(h)===null&&I===e(f)&&(M?(y(R),R=-1):M=!0,et(T,G-at))):(I.sortIndex=rt,t(h,I),x||v||(x=!0,K())),I},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(I){var k=g;return function(){var G=g;g=k;try{return I.apply(this,arguments)}finally{g=G}}}}(Bp)),Bp}var xy;function H3(){return xy||(xy=1,zp.exports=F3()),zp.exports}var Sy=H3();function hg(s,t,e){if(!s)return;if(e(s)===!0)return s;let n=t?s.return:s.child;for(;n;){const i=hg(n,t,e);if(i)return i;n=t?null:n.sibling}}function VS(s){try{return Object.defineProperties(s,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return s}}const fg=VS(xt.createContext(null));class GS extends xt.Component{render(){return xt.createElement(fg.Provider,{value:this._reactInternals},this.props.children)}}function kS(){const s=xt.useContext(fg);if(s===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const t=xt.useId();return xt.useMemo(()=>{for(const e of[s,s==null?void 0:s.alternate]){if(!e)continue;const n=hg(e,!1,i=>{let o=i.memoizedState;for(;o;){if(o.memoizedState===t)return!0;o=o.next}});if(n)return n}},[s,t])}const V3=Symbol.for("react.context"),G3=s=>s!==null&&typeof s=="object"&&"$$typeof"in s&&s.$$typeof===V3;function k3(){const s=kS(),[t]=xt.useState(()=>new Map);t.clear();let e=s;for(;e;){const n=e.type;G3(n)&&n!==fg&&!t.has(n)&&t.set(n,xt.use(VS(n))),e=e.return}return t}function W3(){const s=k3();return xt.useMemo(()=>Array.from(s.keys()).reduce((t,e)=>n=>xt.createElement(t,null,xt.createElement(e.Provider,{...n,value:s.get(e)})),t=>xt.createElement(GS,{...t})),[s])}function WS(s){let t=s.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}const XS=s=>s&&s.isOrthographicCamera,X3=s=>s&&s.hasOwnProperty("current"),q3=s=>s!=null&&(typeof s=="string"||typeof s=="number"||s.isColor),pc=((s,t)=>typeof window<"u"&&(((s=window.document)==null?void 0:s.createElement)||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))()?xt.useLayoutEffect:xt.useEffect;function qS(s){const t=xt.useRef(s);return pc(()=>void(t.current=s),[s]),t}function Y3(){const s=kS(),t=W3();return xt.useMemo(()=>({children:e})=>{const i=!!hg(s,!0,o=>o.type===xt.StrictMode)?xt.StrictMode:xt.Fragment;return Le.jsx(i,{children:Le.jsx(t,{children:e})})},[s,t])}function Z3({set:s}){return pc(()=>(s(new Promise(()=>null)),()=>s(!1)),[s]),null}const j3=(s=>(s=class extends xt.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}},s.getDerivedStateFromError=()=>({error:!0}),s))();function YS(s){var t;const e=typeof window<"u"?(t=window.devicePixelRatio)!=null?t:2:1;return Array.isArray(s)?Math.min(Math.max(s[0],e),s[1]):s}function uo(s){var t;return(t=s.__r3f)==null?void 0:t.root.getState()}const Ze={obj:s=>s===Object(s)&&!Ze.arr(s)&&typeof s!="function",fun:s=>typeof s=="function",str:s=>typeof s=="string",num:s=>typeof s=="number",boo:s=>typeof s=="boolean",und:s=>s===void 0,nul:s=>s===null,arr:s=>Array.isArray(s),equ(s,t,{arrays:e="shallow",objects:n="reference",strict:i=!0}={}){if(typeof s!=typeof t||!!s!=!!t)return!1;if(Ze.str(s)||Ze.num(s)||Ze.boo(s))return s===t;const o=Ze.obj(s);if(o&&n==="reference")return s===t;const l=Ze.arr(s);if(l&&e==="reference")return s===t;if((l||o)&&s===t)return!0;let c;for(c in s)if(!(c in t))return!1;if(o&&e==="shallow"&&n==="shallow"){for(c in i?t:s)if(!Ze.equ(s[c],t[c],{strict:i,objects:"reference"}))return!1}else for(c in i?t:s)if(s[c]!==t[c])return!1;if(Ze.und(c)){if(l&&s.length===0&&t.length===0||o&&Object.keys(s).length===0&&Object.keys(t).length===0)return!0;if(s!==t)return!1}return!0}};function K3(s){s.type!=="Scene"&&(s.dispose==null||s.dispose());for(const t in s){const e=s[t];(e==null?void 0:e.type)!=="Scene"&&(e==null||e.dispose==null||e.dispose())}}const ZS=["children","key","ref"];function J3(s){const t={};for(const e in s)ZS.includes(e)||(t[e]=s[e]);return t}function Ph(s,t,e,n){const i=s;let o=i==null?void 0:i.__r3f;return o||(o={root:t,type:e,parent:null,children:[],props:J3(n),object:i,eventCount:0,handlers:{},isHidden:!1},i&&(i.__r3f=o)),o}function nc(s,t){let e=s[t];if(!t.includes("-"))return{root:s,key:t,target:e};e=s;for(const i of t.split("-")){var n;t=i,s=e,e=(n=e)==null?void 0:n[t]}return{root:s,key:t,target:e}}const My=/-\d+$/;function Oh(s,t){if(Ze.str(t.props.attach)){if(My.test(t.props.attach)){const i=t.props.attach.replace(My,""),{root:o,key:l}=nc(s.object,i);Array.isArray(o[l])||(o[l]=[])}const{root:e,key:n}=nc(s.object,t.props.attach);t.previousAttach=e[n],e[n]=t.object}else Ze.fun(t.props.attach)&&(t.previousAttach=t.props.attach(s.object,t.object))}function Ih(s,t){if(Ze.str(t.props.attach)){const{root:e,key:n}=nc(s.object,t.props.attach),i=t.previousAttach;i===void 0?delete e[n]:e[n]=i}else t.previousAttach==null||t.previousAttach(s.object,t.object);delete t.previousAttach}const hm=[...ZS,"args","dispose","attach","object","onUpdate","dispose"],by=new Map;function Q3(s){let t=by.get(s.constructor);try{t||(t=new s.constructor,by.set(s.constructor,t))}catch{}return t}function $3(s,t){const e={};for(const n in t)if(!hm.includes(n)&&!Ze.equ(t[n],s.props[n])){e[n]=t[n];for(const i in t)i.startsWith(`${n}-`)&&(e[i]=t[i])}for(const n in s.props){if(hm.includes(n)||t.hasOwnProperty(n))continue;const{root:i,key:o}=nc(s.object,n);if(i.constructor&&i.constructor.length===0){const l=Q3(i);Ze.und(l)||(e[o]=l[o])}else e[o]=0}return e}const tU=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],eU=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function la(s,t){var e;const n=s.__r3f,i=n&&WS(n).getState(),o=n==null?void 0:n.eventCount;for(const c in t){let h=t[c];if(hm.includes(c))continue;if(n&&eU.test(c)){typeof h=="function"?n.handlers[c]=h:delete n.handlers[c],n.eventCount=Object.keys(n.handlers).length;continue}if(h===void 0)continue;let{root:f,key:p,target:m}=nc(s,c);if(m instanceof bo&&h instanceof bo)m.mask=h.mask;else if(m instanceof Bt&&q3(h))m.set(h);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof m.copy=="function"&&h!=null&&h.constructor&&m.constructor===h.constructor)m.copy(h);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&Array.isArray(h))typeof m.fromArray=="function"?m.fromArray(h):m.set(...h);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof h=="number")typeof m.setScalar=="function"?m.setScalar(h):m.set(h);else{var l;f[p]=h,i&&!i.linear&&tU.includes(p)&&(l=f[p])!=null&&l.isTexture&&f[p].format===On&&f[p].type===Wi&&(f[p].colorSpace=$n)}}if(n!=null&&n.parent&&i!=null&&i.internal&&(e=n.object)!=null&&e.isObject3D&&o!==n.eventCount){const c=n.object,h=i.internal.interaction.indexOf(c);h>-1&&i.internal.interaction.splice(h,1),n.eventCount&&c.raycast!==null&&i.internal.interaction.push(c)}return n&&n.props.attach===void 0&&(n.object.isBufferGeometry?n.props.attach="geometry":n.object.isMaterial&&(n.props.attach="material")),n&&Po(n),s}function Po(s){var t;if(!s.parent)return;s.props.onUpdate==null||s.props.onUpdate(s.object);const e=(t=s.root)==null||t.getState==null?void 0:t.getState();e&&e.internal.frames===0&&e.invalidate()}function nU(s,t){s.manual||(XS(s)?(s.left=t.width/-2,s.right=t.width/2,s.top=t.height/2,s.bottom=t.height/-2):s.aspect=t.width/t.height,s.updateProjectionMatrix())}const Qn=s=>s==null?void 0:s.isObject3D;function Xu(s){return(s.eventObject||s.object).uuid+"/"+s.index+s.instanceId}function jS(s,t,e,n){const i=e.get(t);i&&(e.delete(t),e.size===0&&(s.delete(n),i.target.releasePointerCapture(n)))}function iU(s,t){const{internal:e}=s.getState();e.interaction=e.interaction.filter(n=>n!==t),e.initialHits=e.initialHits.filter(n=>n!==t),e.hovered.forEach((n,i)=>{(n.eventObject===t||n.object===t)&&e.hovered.delete(i)}),e.capturedMap.forEach((n,i)=>{jS(e.capturedMap,t,n,i)})}function sU(s){function t(h){const{internal:f}=s.getState(),p=h.offsetX-f.initialClick[0],m=h.offsetY-f.initialClick[1];return Math.round(Math.sqrt(p*p+m*m))}function e(h){return h.filter(f=>["Move","Over","Enter","Out","Leave"].some(p=>{var m;return(m=f.__r3f)==null?void 0:m.handlers["onPointer"+p]}))}function n(h,f){const p=s.getState(),m=new Set,g=[],v=f?f(p.internal.interaction):p.internal.interaction;for(let y=0;y<v.length;y++){const A=uo(v[y]);A&&(A.raycaster.camera=void 0)}p.previousRoot||p.events.compute==null||p.events.compute(h,p);function x(y){const A=uo(y);if(!A||!A.events.enabled||A.raycaster.camera===null)return[];if(A.raycaster.camera===void 0){var E;A.events.compute==null||A.events.compute(h,A,(E=A.previousRoot)==null?void 0:E.getState()),A.raycaster.camera===void 0&&(A.raycaster.camera=null)}return A.raycaster.camera?A.raycaster.intersectObject(y,!0):[]}let M=v.flatMap(x).sort((y,A)=>{const E=uo(y.object),T=uo(A.object);return!E||!T?y.distance-A.distance:T.events.priority-E.events.priority||y.distance-A.distance}).filter(y=>{const A=Xu(y);return m.has(A)?!1:(m.add(A),!0)});p.events.filter&&(M=p.events.filter(M,p));for(const y of M){let A=y.object;for(;A;){var S;(S=A.__r3f)!=null&&S.eventCount&&g.push({...y,eventObject:A}),A=A.parent}}if("pointerId"in h&&p.internal.capturedMap.has(h.pointerId))for(let y of p.internal.capturedMap.get(h.pointerId).values())m.has(Xu(y.intersection))||g.push(y.intersection);return g}function i(h,f,p,m){if(h.length){const g={stopped:!1};for(const v of h){let x=uo(v.object);if(x||v.object.traverseAncestors(M=>{const S=uo(M);if(S)return x=S,!1}),x){const{raycaster:M,pointer:S,camera:y,internal:A}=x,E=new O(S.x,S.y,0).unproject(y),T=C=>{var w,B;return(w=(B=A.capturedMap.get(C))==null?void 0:B.has(v.eventObject))!=null?w:!1},z=C=>{const w={intersection:v,target:f.target};A.capturedMap.has(C)?A.capturedMap.get(C).set(v.eventObject,w):A.capturedMap.set(C,new Map([[v.eventObject,w]])),f.target.setPointerCapture(C)},R=C=>{const w=A.capturedMap.get(C);w&&jS(A.capturedMap,v.eventObject,w,C)};let N={};for(let C in f){let w=f[C];typeof w!="function"&&(N[C]=w)}let H={...v,...N,pointer:S,intersections:h,stopped:g.stopped,delta:p,unprojectedPoint:E,ray:M.ray,camera:y,stopPropagation(){const C="pointerId"in f&&A.capturedMap.get(f.pointerId);if((!C||C.has(v.eventObject))&&(H.stopped=g.stopped=!0,A.hovered.size&&Array.from(A.hovered.values()).find(w=>w.eventObject===v.eventObject))){const w=h.slice(0,h.indexOf(v));o([...w,v])}},target:{hasPointerCapture:T,setPointerCapture:z,releasePointerCapture:R},currentTarget:{hasPointerCapture:T,setPointerCapture:z,releasePointerCapture:R},nativeEvent:f};if(m(H),g.stopped===!0)break}}}return h}function o(h){const{internal:f}=s.getState();for(const p of f.hovered.values())if(!h.length||!h.find(m=>m.object===p.object&&m.index===p.index&&m.instanceId===p.instanceId)){const g=p.eventObject.__r3f;if(f.hovered.delete(Xu(p)),g!=null&&g.eventCount){const v=g.handlers,x={...p,intersections:h};v.onPointerOut==null||v.onPointerOut(x),v.onPointerLeave==null||v.onPointerLeave(x)}}}function l(h,f){for(let p=0;p<f.length;p++){const m=f[p].__r3f;m==null||m.handlers.onPointerMissed==null||m.handlers.onPointerMissed(h)}}function c(h){switch(h){case"onPointerLeave":case"onPointerCancel":return()=>o([]);case"onLostPointerCapture":return f=>{const{internal:p}=s.getState();"pointerId"in f&&p.capturedMap.has(f.pointerId)&&requestAnimationFrame(()=>{p.capturedMap.has(f.pointerId)&&(p.capturedMap.delete(f.pointerId),o([]))})}}return function(p){const{onPointerMissed:m,internal:g}=s.getState();g.lastEvent.current=p;const v=h==="onPointerMove",x=h==="onClick"||h==="onContextMenu"||h==="onDoubleClick",S=n(p,v?e:void 0),y=x?t(p):0;h==="onPointerDown"&&(g.initialClick=[p.offsetX,p.offsetY],g.initialHits=S.map(E=>E.eventObject)),x&&!S.length&&y<=2&&(l(p,g.interaction),m&&m(p)),v&&o(S);function A(E){const T=E.eventObject,z=T.__r3f;if(!(z!=null&&z.eventCount))return;const R=z.handlers;if(v){if(R.onPointerOver||R.onPointerEnter||R.onPointerOut||R.onPointerLeave){const N=Xu(E),H=g.hovered.get(N);H?H.stopped&&E.stopPropagation():(g.hovered.set(N,E),R.onPointerOver==null||R.onPointerOver(E),R.onPointerEnter==null||R.onPointerEnter(E))}R.onPointerMove==null||R.onPointerMove(E)}else{const N=R[h];N?(!x||g.initialHits.includes(T))&&(l(p,g.interaction.filter(H=>!g.initialHits.includes(H))),N(E)):x&&g.initialHits.includes(T)&&l(p,g.interaction.filter(H=>!g.initialHits.includes(H)))}}i(S,p,y,A)}}return{handlePointer:c}}const Ey=s=>!!(s!=null&&s.render),KS=xt.createContext(null),aU=(s,t)=>{const e=L3((c,h)=>{const f=new O,p=new O,m=new O;function g(y=h().camera,A=p,E=h().size){const{width:T,height:z,top:R,left:N}=E,H=T/z;A.isVector3?m.copy(A):m.set(...A);const C=y.getWorldPosition(f).distanceTo(m);if(XS(y))return{width:T/y.zoom,height:z/y.zoom,top:R,left:N,factor:1,distance:C,aspect:H};{const w=y.fov*Math.PI/180,B=2*Math.tan(w/2)*C,Q=B*(T/z);return{width:Q,height:B,top:R,left:N,factor:T/Q,distance:C,aspect:H}}}let v;const x=y=>c(A=>({performance:{...A.performance,current:y}})),M=new ht;return{set:c,get:h,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(y=1)=>s(h(),y),advance:(y,A)=>t(y,A,h()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new rg,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const y=h();v&&clearTimeout(v),y.performance.current!==y.performance.min&&x(y.performance.min),v=setTimeout(()=>x(h().performance.max),y.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:g},setEvents:y=>c(A=>({...A,events:{...A.events,...y}})),setSize:(y,A,E=0,T=0)=>{const z=h().camera,R={width:y,height:A,top:E,left:T};c(N=>({size:R,viewport:{...N.viewport,...g(z,p,R)}}))},setDpr:y=>c(A=>{const E=YS(y);return{viewport:{...A.viewport,dpr:E,initialDpr:A.viewport.initialDpr||E}}}),setFrameloop:(y="always")=>{const A=h().clock;A.stop(),A.elapsedTime=0,y!=="never"&&(A.start(),A.elapsedTime=0),c(()=>({frameloop:y}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:xt.createRef(),active:!1,frames:0,priority:0,subscribe:(y,A,E)=>{const T=h().internal;return T.priority=T.priority+(A>0?1:0),T.subscribers.push({ref:y,priority:A,store:E}),T.subscribers=T.subscribers.sort((z,R)=>z.priority-R.priority),()=>{const z=h().internal;z!=null&&z.subscribers&&(z.priority=z.priority-(A>0?1:0),z.subscribers=z.subscribers.filter(R=>R.ref!==y))}}}}}),n=e.getState();let i=n.size,o=n.viewport.dpr,l=n.camera;return e.subscribe(()=>{const{camera:c,size:h,viewport:f,gl:p,set:m}=e.getState();if(h.width!==i.width||h.height!==i.height||f.dpr!==o){i=h,o=f.dpr,nU(c,h),f.dpr>0&&p.setPixelRatio(f.dpr);const g=typeof HTMLCanvasElement<"u"&&p.domElement instanceof HTMLCanvasElement;p.setSize(h.width,h.height,g)}c!==l&&(l=c,m(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),e.subscribe(c=>s(c)),e};function JS(){const s=xt.useContext(KS);if(!s)throw new Error("R3F: Hooks can only be used within the Canvas component!");return s}function dg(s=e=>e,t){return JS()(s,t)}function yf(s,t=0){const e=JS(),n=e.getState().internal.subscribe,i=qS(s);return pc(()=>n(i,t,e),[t,n,e]),null}function rU(s){const t=B3(s);return t.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:xt.version}),t}const QS=0,To={},oU=/^three(?=[A-Z])/,xf=s=>`${s[0].toUpperCase()}${s.slice(1)}`;let lU=0;const cU=s=>typeof s=="function";function uU(s){if(cU(s)){const t=`${lU++}`;return To[t]=s,t}else Object.assign(To,s)}function $S(s,t){const e=xf(s),n=To[e];if(s!=="primitive"&&!n)throw new Error(`R3F: ${e} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(s==="primitive"&&!t.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(t.args!==void 0&&!Array.isArray(t.args))throw new Error("R3F: The args prop must be an array!")}function hU(s,t,e){var n;return s=xf(s)in To?s:s.replace(oU,""),$S(s,t),s==="primitive"&&(n=t.object)!=null&&n.__r3f&&delete t.object.__r3f,Ph(t.object,e,s,t)}function fU(s){if(!s.isHidden){var t;s.props.attach&&(t=s.parent)!=null&&t.object?Ih(s.parent,s):Qn(s.object)&&(s.object.visible=!1),s.isHidden=!0,Po(s)}}function tM(s){if(s.isHidden){var t;s.props.attach&&(t=s.parent)!=null&&t.object?Oh(s.parent,s):Qn(s.object)&&s.props.visible!==!1&&(s.object.visible=!0),s.isHidden=!1,Po(s)}}function pg(s,t,e){const n=t.root.getState();if(!(!s.parent&&s.object!==n.scene)){if(!t.object){var i,o;const l=To[xf(t.type)];t.object=(i=t.props.object)!=null?i:new l(...(o=t.props.args)!=null?o:[]),t.object.__r3f=t}if(la(t.object,t.props),t.props.attach)Oh(s,t);else if(Qn(t.object)&&Qn(s.object)){const l=s.object.children.indexOf(e==null?void 0:e.object);if(e&&l!==-1){const c=s.object.children.indexOf(t.object);if(c!==-1){s.object.children.splice(c,1);const h=c<l?l-1:l;s.object.children.splice(h,0,t.object)}else t.object.parent=s.object,s.object.children.splice(l,0,t.object),t.object.dispatchEvent({type:"added"}),s.object.dispatchEvent({type:"childadded",child:t.object})}else s.object.add(t.object)}for(const l of t.children)pg(t,l);Po(t)}}function Fp(s,t){t&&(t.parent=s,s.children.push(t),pg(s,t))}function Ay(s,t,e){if(!t||!e)return;t.parent=s;const n=s.children.indexOf(e);n!==-1?s.children.splice(n,0,t):s.children.push(t),pg(s,t,e)}function eM(s){if(typeof s.dispose=="function"){const t=()=>{try{s.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?t():Sy.unstable_scheduleCallback(Sy.unstable_IdlePriority,t)}}function fm(s,t,e){if(!t)return;t.parent=null;const n=s.children.indexOf(t);n!==-1&&s.children.splice(n,1),t.props.attach?Ih(s,t):Qn(t.object)&&Qn(s.object)&&(s.object.remove(t.object),iU(WS(t),t.object));const i=t.props.dispose!==null&&e!==!1;for(let o=t.children.length-1;o>=0;o--){const l=t.children[o];fm(t,l,i)}t.children.length=0,delete t.object.__r3f,i&&t.type!=="primitive"&&t.object.type!=="Scene"&&eM(t.object),e===void 0&&Po(t)}function dU(s,t){for(const e of[s,s.alternate])if(e!==null)if(typeof e.ref=="function"){e.refCleanup==null||e.refCleanup();const n=e.ref(t);typeof n=="function"&&(e.refCleanup=n)}else e.ref&&(e.ref.current=t)}const $u=[];function pU(){for(const[e]of $u){const n=e.parent;if(n){e.props.attach?Ih(n,e):Qn(e.object)&&Qn(n.object)&&n.object.remove(e.object);for(const i of e.children)i.props.attach?Ih(e,i):Qn(i.object)&&Qn(e.object)&&e.object.remove(i.object)}e.isHidden&&tM(e),e.object.__r3f&&delete e.object.__r3f,e.type!=="primitive"&&eM(e.object)}for(const[e,n,i]of $u){e.props=n;const o=e.parent;if(o){var s,t;const l=To[xf(e.type)];e.object=(s=e.props.object)!=null?s:new l(...(t=e.props.args)!=null?t:[]),e.object.__r3f=e,dU(i,e.object),la(e.object,e.props),e.props.attach?Oh(o,e):Qn(e.object)&&Qn(o.object)&&o.object.add(e.object);for(const c of e.children)c.props.attach?Oh(e,c):Qn(c.object)&&Qn(e.object)&&e.object.add(c.object);Po(e)}}$u.length=0}const Hp=()=>{},Ty={};let qu=QS;const mU=0,gU=4,dm=rU({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:hU,removeChild:fm,appendChild:Fp,appendInitialChild:Fp,insertBefore:Ay,appendChildToContainer(s,t){const e=s.getState().scene.__r3f;!t||!e||Fp(e,t)},removeChildFromContainer(s,t){const e=s.getState().scene.__r3f;!t||!e||fm(e,t)},insertInContainerBefore(s,t,e){const n=s.getState().scene.__r3f;!t||!e||!n||Ay(n,t,e)},getRootHostContext:()=>Ty,getChildHostContext:()=>Ty,commitUpdate(s,t,e,n,i){var o,l,c;$S(t,n);let h=!1;if((s.type==="primitive"&&e.object!==n.object||((o=n.args)==null?void 0:o.length)!==((l=e.args)==null?void 0:l.length)||(c=n.args)!=null&&c.some((p,m)=>{var g;return p!==((g=e.args)==null?void 0:g[m])}))&&(h=!0),h)$u.push([s,{...n},i]);else{const p=$3(s,n);Object.keys(p).length&&(Object.assign(s.props,p),la(s.object,p))}(i.sibling===null||(i.flags&gU)===mU)&&pU()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:s=>s==null?void 0:s.object,prepareForCommit:()=>null,preparePortalMount:s=>Ph(s.getState().scene,s,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:fU,unhideInstance:tM,createTextInstance:Hp,hideTextInstance:Hp,unhideTextInstance:Hp,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:xt.createContext(null),setCurrentUpdatePriority(s){qu=s},getCurrentUpdatePriority(){return qu},resolveUpdatePriority(){var s;if(qu!==QS)return qu;switch(typeof window<"u"&&((s=window.event)==null?void 0:s.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Qu.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Qu.ContinuousEventPriority;default:return Qu.DefaultEventPriority}},resetFormInstance(){}}),ur=new Map,ho={objects:"shallow",strict:!1};function vU(s,t){if(!t&&typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&s.parentElement){const{width:e,height:n,top:i,left:o}=s.parentElement.getBoundingClientRect();return{width:e,height:n,top:i,left:o}}else if(!t&&typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas)return{width:s.width,height:s.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...t}}function _U(s){const t=ur.get(s),e=t==null?void 0:t.fiber,n=t==null?void 0:t.store;t&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,o=n||aU(gm,Cy),l=e||dm.createContainer(o,Qu.ConcurrentRoot,null,!1,null,"",i,i,i,null);t||ur.set(s,{fiber:l,store:o});let c,h,f=!1,p=null;return{async configure(m={}){let g;p=new Promise(ft=>g=ft);let{gl:v,size:x,scene:M,events:S,onCreated:y,shadows:A=!1,linear:E=!1,flat:T=!1,legacy:z=!1,orthographic:R=!1,frameloop:N="always",dpr:H=[1,2],performance:C,raycaster:w,camera:B,onPointerMissed:Q}=m,W=o.getState(),K=W.gl;if(!W.gl){const ft={canvas:s,powerPreference:"high-performance",antialias:!0,alpha:!0},Ct=typeof v=="function"?await v(ft):v;Ey(Ct)?K=Ct:K=new Zx({...ft,...v}),W.set({gl:K})}let et=W.raycaster;et||W.set({raycaster:et=new BS});const{params:I,...k}=w||{};if(Ze.equ(k,et,ho)||la(et,{...k}),Ze.equ(I,et.params,ho)||la(et,{params:{...et.params,...I}}),!W.camera||W.camera===h&&!Ze.equ(h,B,ho)){h=B;const ft=B==null?void 0:B.isCamera,Ct=ft?B:R?new fr(0,0,0,0,.1,1e3):new un(75,0,.1,1e3);ft||(Ct.position.z=5,B&&(la(Ct,B),Ct.manual||("aspect"in B||"left"in B||"right"in B||"bottom"in B||"top"in B)&&(Ct.manual=!0,Ct.updateProjectionMatrix())),!W.camera&&!(B!=null&&B.rotation)&&Ct.lookAt(0,0,0)),W.set({camera:Ct}),et.camera=Ct}if(!W.scene){let ft;M!=null&&M.isScene?(ft=M,Ph(ft,o,"",{})):(ft=new Hm,Ph(ft,o,"",{}),M&&la(ft,M)),W.set({scene:ft})}S&&!W.events.handlers&&W.set({events:S(o)});const G=vU(s,x);if(Ze.equ(G,W.size,ho)||W.setSize(G.width,G.height,G.top,G.left),H&&W.viewport.dpr!==YS(H)&&W.setDpr(H),W.frameloop!==N&&W.setFrameloop(N),W.onPointerMissed||W.set({onPointerMissed:Q}),C&&!Ze.equ(C,W.performance,ho)&&W.set(ft=>({performance:{...ft.performance,...C}})),!W.xr){var at;const ft=(J,ct)=>{const Nt=o.getState();Nt.frameloop!=="never"&&Cy(J,!0,Nt,ct)},Ct=()=>{const J=o.getState();J.gl.xr.enabled=J.gl.xr.isPresenting,J.gl.xr.setAnimationLoop(J.gl.xr.isPresenting?ft:null),J.gl.xr.isPresenting||gm(J)},Wt={connect(){const J=o.getState().gl;J.xr.addEventListener("sessionstart",Ct),J.xr.addEventListener("sessionend",Ct)},disconnect(){const J=o.getState().gl;J.xr.removeEventListener("sessionstart",Ct),J.xr.removeEventListener("sessionend",Ct)}};typeof((at=K.xr)==null?void 0:at.addEventListener)=="function"&&Wt.connect(),W.set({xr:Wt})}if(K.shadowMap){const ft=K.shadowMap.enabled,Ct=K.shadowMap.type;if(K.shadowMap.enabled=!!A,Ze.boo(A))K.shadowMap.type=bl;else if(Ze.str(A)){var rt;const Wt={basic:Fy,percentage:Fh,soft:bl,variance:Vi};K.shadowMap.type=(rt=Wt[A])!=null?rt:bl}else Ze.obj(A)&&Object.assign(K.shadowMap,A);(ft!==K.shadowMap.enabled||Ct!==K.shadowMap.type)&&(K.shadowMap.needsUpdate=!0)}return we.enabled=!z,f||(K.outputColorSpace=E?os:$n,K.toneMapping=T?ss:ym),W.legacy!==z&&W.set(()=>({legacy:z})),W.linear!==E&&W.set(()=>({linear:E})),W.flat!==T&&W.set(()=>({flat:T})),v&&!Ze.fun(v)&&!Ey(v)&&!Ze.equ(v,K,ho)&&la(K,v),c=y,f=!0,g(),this},render(m){return!f&&!p&&this.configure(),p.then(()=>{dm.updateContainer(Le.jsx(yU,{store:o,children:m,onCreated:c,rootElement:s}),l,null,()=>{})}),o},unmount(){nM(s)}}}function yU({store:s,children:t,onCreated:e,rootElement:n}){return pc(()=>{const i=s.getState();i.set(o=>({internal:{...o.internal,active:!0}})),e&&e(i),s.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Le.jsx(KS.Provider,{value:s,children:t})}function nM(s,t){const e=ur.get(s),n=e==null?void 0:e.fiber;if(n){const i=e==null?void 0:e.store.getState();i&&(i.internal.active=!1),dm.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var o,l,c,h;i.events.disconnect==null||i.events.disconnect(),(o=i.gl)==null||(l=o.renderLists)==null||l.dispose==null||l.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(h=i.gl)!=null&&h.xr&&i.xr.disconnect(),K3(i.scene),ur.delete(s)}catch{}},500)})}}const xU=new Set,SU=new Set,MU=new Set;function Vp(s,t){if(s.size)for(const{callback:e}of s.values())e(t)}function Nl(s,t){switch(s){case"before":return Vp(xU,t);case"after":return Vp(SU,t);case"tail":return Vp(MU,t)}}let Gp,kp;function pm(s,t,e){let n=t.clock.getDelta();t.frameloop==="never"&&typeof s=="number"&&(n=s-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=s),Gp=t.internal.subscribers;for(let i=0;i<Gp.length;i++)kp=Gp[i],kp.ref.current(kp.store.getState(),n,e);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),t.frameloop==="always"?1:t.internal.frames}let zh=!1,mm=!1,Wp,wy,fo;function iM(s){wy=requestAnimationFrame(iM),zh=!0,Wp=0,Nl("before",s),mm=!0;for(const e of ur.values()){var t;fo=e.store.getState(),fo.internal.active&&(fo.frameloop==="always"||fo.internal.frames>0)&&!((t=fo.gl.xr)!=null&&t.isPresenting)&&(Wp+=pm(s,fo))}if(mm=!1,Nl("after",s),Wp===0)return Nl("tail",s),zh=!1,cancelAnimationFrame(wy)}function gm(s,t=1){var e;if(!s)return ur.forEach(n=>gm(n.store.getState(),t));(e=s.gl.xr)!=null&&e.isPresenting||!s.internal.active||s.frameloop==="never"||(t>1?s.internal.frames=Math.min(60,s.internal.frames+t):mm?s.internal.frames=2:s.internal.frames=1,zh||(zh=!0,requestAnimationFrame(iM)))}function Cy(s,t=!0,e,n){if(t&&Nl("before",s),e)pm(s,e,n);else for(const i of ur.values())pm(s,i.store.getState());t&&Nl("after",s)}const Xp={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function bU(s){const{handlePointer:t}=sU(s);return{priority:1,enabled:!0,compute(e,n,i){n.pointer.set(e.offsetX/n.size.width*2-1,-(e.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Xp).reduce((e,n)=>({...e,[n]:t(n)}),{}),update:()=>{var e;const{events:n,internal:i}=s.getState();(e=i.lastEvent)!=null&&e.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:e=>{const{set:n,events:i}=s.getState();if(i.disconnect==null||i.disconnect(),n(o=>({events:{...o.events,connected:e}})),i.handlers)for(const o in i.handlers){const l=i.handlers[o],[c,h]=Xp[o];e.addEventListener(c,l,{passive:h})}},disconnect:()=>{const{set:e,events:n}=s.getState();if(n.connected){if(n.handlers)for(const i in n.handlers){const o=n.handlers[i],[l]=Xp[i];n.connected.removeEventListener(l,o)}e(i=>({events:{...i.events,connected:void 0}}))}}}}function Ry(s,t){let e;return(...n)=>{window.clearTimeout(e),e=window.setTimeout(()=>s(...n),t)}}function EU({debounce:s,scroll:t,polyfill:e,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=e||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,l]=xt.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=xt.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o,orientationHandler:null}),h=s?typeof s=="number"?s:s.scroll:null,f=s?typeof s=="number"?s:s.resize:null,p=xt.useRef(!1);xt.useEffect(()=>(p.current=!0,()=>void(p.current=!1)));const[m,g,v]=xt.useMemo(()=>{const y=()=>{if(!c.current.element)return;const{left:A,top:E,width:T,height:z,bottom:R,right:N,x:H,y:C}=c.current.element.getBoundingClientRect(),w={left:A,top:E,width:T,height:z,bottom:R,right:N,x:H,y:C};c.current.element instanceof HTMLElement&&n&&(w.height=c.current.element.offsetHeight,w.width=c.current.element.offsetWidth),Object.freeze(w),p.current&&!CU(c.current.lastBounds,w)&&l(c.current.lastBounds=w)};return[y,f?Ry(y,f):y,h?Ry(y,h):y]},[l,n,h,f]);function x(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(y=>y.removeEventListener("scroll",v,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(v),c.current.resizeObserver.observe(c.current.element),t&&c.current.scrollContainers&&c.current.scrollContainers.forEach(y=>y.addEventListener("scroll",v,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{v()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const S=y=>{!y||y===c.current.element||(x(),c.current.element=y,c.current.scrollContainers=sM(y),M())};return TU(v,!!t),AU(g),xt.useEffect(()=>{x(),M()},[t,v,g]),xt.useEffect(()=>x,[]),[S,o,m]}function AU(s){xt.useEffect(()=>{const t=s;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[s])}function TU(s,t){xt.useEffect(()=>{if(t){const e=s;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",e,!0)}},[s,t])}function sM(s){const t=[];if(!s||s===document.body)return t;const{overflow:e,overflowX:n,overflowY:i}=window.getComputedStyle(s);return[e,n,i].some(o=>o==="auto"||o==="scroll")&&t.push(s),[...t,...sM(s.parentElement)]}const wU=["x","y","top","bottom","left","right","width","height"],CU=(s,t)=>wU.every(e=>s[e]===t[e]);function RU({ref:s,children:t,fallback:e,resize:n,style:i,gl:o,events:l=bU,eventSource:c,eventPrefix:h,shadows:f,linear:p,flat:m,legacy:g,orthographic:v,frameloop:x,dpr:M,performance:S,raycaster:y,camera:A,scene:E,onPointerMissed:T,onCreated:z,...R}){xt.useMemo(()=>uU(y3),[]);const N=Y3(),[H,C]=EU({scroll:!0,debounce:{scroll:50,resize:0},...n}),w=xt.useRef(null),B=xt.useRef(null);xt.useImperativeHandle(s,()=>w.current);const Q=qS(T),[W,K]=xt.useState(!1),[et,I]=xt.useState(!1);if(W)throw W;if(et)throw et;const k=xt.useRef(null);pc(()=>{const at=w.current;if(C.width>0&&C.height>0&&at){k.current||(k.current=_U(at));async function rt(){await k.current.configure({gl:o,scene:E,events:l,shadows:f,linear:p,flat:m,legacy:g,orthographic:v,frameloop:x,dpr:M,performance:S,raycaster:y,camera:A,size:C,onPointerMissed:(...ft)=>Q.current==null?void 0:Q.current(...ft),onCreated:ft=>{ft.events.connect==null||ft.events.connect(c?X3(c)?c.current:c:B.current),h&&ft.setEvents({compute:(Ct,Wt)=>{const J=Ct[h+"X"],ct=Ct[h+"Y"];Wt.pointer.set(J/Wt.size.width*2-1,-(ct/Wt.size.height)*2+1),Wt.raycaster.setFromCamera(Wt.pointer,Wt.camera)}}),z==null||z(ft)}}),k.current.render(Le.jsx(N,{children:Le.jsx(j3,{set:I,children:Le.jsx(xt.Suspense,{fallback:Le.jsx(Z3,{set:K}),children:t??null})})}))}rt()}}),xt.useEffect(()=>{const at=w.current;if(at)return()=>nM(at)},[]);const G=c?"none":"auto";return Le.jsx("div",{ref:B,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:G,...i},...R,children:Le.jsx("div",{ref:H,style:{width:"100%",height:"100%"},children:Le.jsx("canvas",{ref:w,style:{display:"block"},children:e})})})}function UU(s){return Le.jsx(GS,{children:Le.jsx(RU,{...s})})}function wo(){return wo=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)({}).hasOwnProperty.call(e,n)&&(s[n]=e[n])}return s},wo.apply(null,arguments)}const mc=new O,mg=new O,DU=new O,Uy=new ht;function LU(s,t,e){const n=mc.setFromMatrixPosition(s.matrixWorld);n.project(t);const i=e.width/2,o=e.height/2;return[n.x*i+i,-(n.y*o)+o]}function NU(s,t){const e=mc.setFromMatrixPosition(s.matrixWorld),n=mg.setFromMatrixPosition(t.matrixWorld),i=e.sub(n),o=t.getWorldDirection(DU);return i.angleTo(o)>Math.PI/2}function PU(s,t,e,n){const i=mc.setFromMatrixPosition(s.matrixWorld),o=i.clone();o.project(t),Uy.set(o.x,o.y),e.setFromCamera(Uy,t);const l=e.intersectObjects(n,!0);if(l.length){const c=l[0].distance;return i.distanceTo(e.ray.origin)<c}return!0}function OU(s,t){if(t instanceof fr)return t.zoom;if(t instanceof un){const e=mc.setFromMatrixPosition(s.matrixWorld),n=mg.setFromMatrixPosition(t.matrixWorld),i=t.fov*Math.PI/180,o=e.distanceTo(n);return 1/(2*Math.tan(i/2)*o)}else return 1}function IU(s,t,e){if(t instanceof un||t instanceof fr){const n=mc.setFromMatrixPosition(s.matrixWorld),i=mg.setFromMatrixPosition(t.matrixWorld),o=n.distanceTo(i),l=(e[1]-e[0])/(t.far-t.near),c=e[1]-l*t.far;return Math.round(l*o+c)}}const vm=s=>Math.abs(s)<1e-10?0:s;function aM(s,t,e=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=vm(t[i]*s.elements[i])+(i!==15?",":")");return e+n}const zU=(s=>t=>aM(t,s))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),BU=(s=>(t,e)=>aM(t,s(e),"translate(-50%,-50%)"))(s=>[1/s,1/s,1/s,1,-1/s,-1/s,-1/s,-1,1/s,1/s,1/s,1,1,1,1,1]);function FU(s){return s&&typeof s=="object"&&"current"in s}const HU=xt.forwardRef(({children:s,eps:t=.001,style:e,className:n,prepend:i,center:o,fullscreen:l,portal:c,distanceFactor:h,sprite:f=!1,transform:p=!1,occlude:m,onOcclude:g,castShadow:v,receiveShadow:x,material:M,geometry:S,zIndexRange:y=[16777271,0],calculatePosition:A=LU,as:E="div",wrapperClass:T,pointerEvents:z="auto",...R},N)=>{const{gl:H,camera:C,scene:w,size:B,raycaster:Q,events:W,viewport:K}=dg(),[et]=xt.useState(()=>document.createElement(E)),I=xt.useRef(null),k=xt.useRef(null),G=xt.useRef(0),at=xt.useRef([0,0]),rt=xt.useRef(null),ft=xt.useRef(null),Ct=(c==null?void 0:c.current)||W.connected||H.domElement.parentNode,Wt=xt.useRef(null),J=xt.useRef(!1),ct=xt.useMemo(()=>m&&m!=="blending"||Array.isArray(m)&&m.length&&FU(m[0]),[m]);xt.useLayoutEffect(()=>{const qt=H.domElement;m&&m==="blending"?(qt.style.zIndex=`${Math.floor(y[0]/2)}`,qt.style.position="absolute",qt.style.pointerEvents="none"):(qt.style.zIndex=null,qt.style.position=null,qt.style.pointerEvents=null)},[m]),xt.useLayoutEffect(()=>{if(k.current){const qt=I.current=p1.createRoot(et);if(w.updateMatrixWorld(),p)et.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const Xt=A(k.current,C,B);et.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${Xt[0]}px,${Xt[1]}px,0);transform-origin:0 0;`}return Ct&&(i?Ct.prepend(et):Ct.appendChild(et)),()=>{Ct&&Ct.removeChild(et),qt.unmount()}}},[Ct,p]),xt.useLayoutEffect(()=>{T&&(et.className=T)},[T]);const Nt=xt.useMemo(()=>p?{position:"absolute",top:0,left:0,width:B.width,height:B.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:o?"translate3d(-50%,-50%,0)":"none",...l&&{top:-B.height/2,left:-B.width/2,width:B.width,height:B.height},...e},[e,o,l,B,p]),Ut=xt.useMemo(()=>({position:"absolute",pointerEvents:z}),[z]);xt.useLayoutEffect(()=>{if(J.current=!1,p){var qt;(qt=I.current)==null||qt.render(xt.createElement("div",{ref:rt,style:Nt},xt.createElement("div",{ref:ft,style:Ut},xt.createElement("div",{ref:N,className:n,style:e,children:s}))))}else{var Xt;(Xt=I.current)==null||Xt.render(xt.createElement("div",{ref:N,style:Nt,className:n,children:s}))}});const Zt=xt.useRef(!0);yf(qt=>{if(k.current){C.updateMatrixWorld(),k.current.updateWorldMatrix(!0,!1);const Xt=p?at.current:A(k.current,C,B);if(p||Math.abs(G.current-C.zoom)>t||Math.abs(at.current[0]-Xt[0])>t||Math.abs(at.current[1]-Xt[1])>t){const P=NU(k.current,C);let _t=!1;ct&&(Array.isArray(m)?_t=m.map(Ht=>Ht.current):m!=="blending"&&(_t=[w]));const gt=Zt.current;if(_t){const Ht=PU(k.current,C,Q,_t);Zt.current=Ht&&!P}else Zt.current=!P;gt!==Zt.current&&(g?g(!Zt.current):et.style.display=Zt.current?"block":"none");const wt=Math.floor(y[0]/2),lt=m?ct?[y[0],wt]:[wt-1,0]:y;if(et.style.zIndex=`${IU(k.current,C,lt)}`,p){const[Ht,Dt]=[B.width/2,B.height/2],Pt=C.projectionMatrix.elements[5]*Dt,{isOrthographicCamera:F,top:U,left:nt,bottom:vt,right:mt}=C,pt=zU(C.matrixWorldInverse),Kt=F?`scale(${Pt})translate(${vm(-(mt+nt)/2)}px,${vm((U+vt)/2)}px)`:`translateZ(${Pt}px)`;let At=k.current.matrixWorld;f&&(At=C.matrixWorldInverse.clone().transpose().copyPosition(At).scale(k.current.scale),At.elements[3]=At.elements[7]=At.elements[11]=0,At.elements[15]=1),et.style.width=B.width+"px",et.style.height=B.height+"px",et.style.perspective=F?"":`${Pt}px`,rt.current&&ft.current&&(rt.current.style.transform=`${Kt}${pt}translate(${Ht}px,${Dt}px)`,ft.current.style.transform=BU(At,1/((h||10)/400)))}else{const Ht=h===void 0?1:OU(k.current,C)*h;et.style.transform=`translate3d(${Xt[0]}px,${Xt[1]}px,0) scale(${Ht})`}at.current=Xt,G.current=C.zoom}}if(!ct&&Wt.current&&!J.current)if(p){if(rt.current){const Xt=rt.current.children[0];if(Xt!=null&&Xt.clientWidth&&Xt!=null&&Xt.clientHeight){const{isOrthographicCamera:P}=C;if(P||S)R.scale&&(Array.isArray(R.scale)?R.scale instanceof O?Wt.current.scale.copy(R.scale.clone().divideScalar(1)):Wt.current.scale.set(1/R.scale[0],1/R.scale[1],1/R.scale[2]):Wt.current.scale.setScalar(1/R.scale));else{const _t=(h||10)/400,gt=Xt.clientWidth*_t,wt=Xt.clientHeight*_t;Wt.current.scale.set(gt,wt,1)}J.current=!0}}}else{const Xt=et.children[0];if(Xt!=null&&Xt.clientWidth&&Xt!=null&&Xt.clientHeight){const P=1/K.factor,_t=Xt.clientWidth*P,gt=Xt.clientHeight*P;Wt.current.scale.set(_t,gt,1),J.current=!0}Wt.current.lookAt(qt.camera.position)}});const re=xt.useMemo(()=>({vertexShader:p?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[p]);return xt.createElement("group",wo({},R,{ref:k}),m&&!ct&&xt.createElement("mesh",{castShadow:v,receiveShadow:x,ref:Wt},S||xt.createElement("planeGeometry",null),M||xt.createElement("shaderMaterial",{side:ki,vertexShader:re.vertexShader,fragmentShader:re.fragmentShader})))}),rM=parseInt(ic.replace(/\D+/g,"")),oM=rM>=125?"uv1":"uv2",Dy=new xn,Yu=new O;class gg extends sg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Yt(t,3)),this.setAttribute("uv",new Yt(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Nh(e,6,1);return this.setAttribute("instanceStart",new vi(n,3,0)),this.setAttribute("instanceEnd",new vi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,e=3){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const i=new Nh(n,e*2,1);return this.setAttribute("instanceColorStart",new vi(i,e,0)),this.setAttribute("instanceColorEnd",new vi(i,e,e)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Jm(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Dy.setFromBufferAttribute(e),this.boundingBox.union(Dy))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let o=0,l=t.count;o<l;o++)Yu.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Yu)),Yu.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(Yu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class lM extends gg{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t,e=3){const n=t.length-e,i=new Float32Array(2*n);if(e===3)for(let o=0;o<n;o+=e)i[2*o]=t[o],i[2*o+1]=t[o+1],i[2*o+2]=t[o+2],i[2*o+3]=t[o+3],i[2*o+4]=t[o+4],i[2*o+5]=t[o+5];else for(let o=0;o<n;o+=e)i[2*o]=t[o],i[2*o+1]=t[o+1],i[2*o+2]=t[o+2],i[2*o+3]=t[o+3],i[2*o+4]=t[o+4],i[2*o+5]=t[o+5],i[2*o+6]=t[o+6],i[2*o+7]=t[o+7];return super.setColors(i,e),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class vg extends Ui{constructor(t){super({type:"LineMaterial",uniforms:Rh.clone(Rh.merge([Lt.common,Lt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${rM>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const qp=new Se,Ly=new O,Ny=new O,En=new Se,An=new Se,$i=new Se,Yp=new O,Zp=new ie,Tn=new FS,Py=new O,Zu=new xn,ju=new Sn,ts=new Se;let es,rr;function Oy(s,t,e){return ts.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),ts.multiplyScalar(1/ts.w),ts.x=rr/e.width,ts.y=rr/e.height,ts.applyMatrix4(s.projectionMatrixInverse),ts.multiplyScalar(1/ts.w),Math.abs(Math.max(ts.x,ts.y))}function VU(s,t){const e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,o=n.attributes.instanceEnd,l=Math.min(n.instanceCount,i.count);for(let c=0,h=l;c<h;c++){Tn.start.fromBufferAttribute(i,c),Tn.end.fromBufferAttribute(o,c),Tn.applyMatrix4(e);const f=new O,p=new O;es.distanceSqToSegment(Tn.start,Tn.end,p,f),p.distanceTo(f)<rr*.5&&t.push({point:p,pointOnLine:f,distance:es.origin.distanceTo(p),object:s,face:null,faceIndex:c,uv:null,[oM]:null})}}function GU(s,t,e){const n=t.projectionMatrix,o=s.material.resolution,l=s.matrixWorld,c=s.geometry,h=c.attributes.instanceStart,f=c.attributes.instanceEnd,p=Math.min(c.instanceCount,h.count),m=-t.near;es.at(1,$i),$i.w=1,$i.applyMatrix4(t.matrixWorldInverse),$i.applyMatrix4(n),$i.multiplyScalar(1/$i.w),$i.x*=o.x/2,$i.y*=o.y/2,$i.z=0,Yp.copy($i),Zp.multiplyMatrices(t.matrixWorldInverse,l);for(let g=0,v=p;g<v;g++){if(En.fromBufferAttribute(h,g),An.fromBufferAttribute(f,g),En.w=1,An.w=1,En.applyMatrix4(Zp),An.applyMatrix4(Zp),En.z>m&&An.z>m)continue;if(En.z>m){const E=En.z-An.z,T=(En.z-m)/E;En.lerp(An,T)}else if(An.z>m){const E=An.z-En.z,T=(An.z-m)/E;An.lerp(En,T)}En.applyMatrix4(n),An.applyMatrix4(n),En.multiplyScalar(1/En.w),An.multiplyScalar(1/An.w),En.x*=o.x/2,En.y*=o.y/2,An.x*=o.x/2,An.y*=o.y/2,Tn.start.copy(En),Tn.start.z=0,Tn.end.copy(An),Tn.end.z=0;const M=Tn.closestPointToPointParameter(Yp,!0);Tn.at(M,Py);const S=ql.lerp(En.z,An.z,M),y=S>=-1&&S<=1,A=Yp.distanceTo(Py)<rr*.5;if(y&&A){Tn.start.fromBufferAttribute(h,g),Tn.end.fromBufferAttribute(f,g),Tn.start.applyMatrix4(l),Tn.end.applyMatrix4(l);const E=new O,T=new O;es.distanceSqToSegment(Tn.start,Tn.end,T,E),e.push({point:T,pointOnLine:E,distance:es.origin.distanceTo(T),object:s,face:null,faceIndex:g,uv:null,[oM]:null})}}}class cM extends an{constructor(t=new gg,e=new vg({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let l=0,c=0,h=e.count;l<h;l++,c+=2)Ly.fromBufferAttribute(e,l),Ny.fromBufferAttribute(n,l),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+Ly.distanceTo(Ny);const o=new Nh(i,2,1);return t.setAttribute("instanceDistanceStart",new vi(o,1,0)),t.setAttribute("instanceDistanceEnd",new vi(o,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;es=t.ray;const l=this.matrixWorld,c=this.geometry,h=this.material;rr=h.linewidth+o,c.boundingSphere===null&&c.computeBoundingSphere(),ju.copy(c.boundingSphere).applyMatrix4(l);let f;if(n)f=rr*.5;else{const m=Math.max(i.near,ju.distanceToPoint(es.origin));f=Oy(i,m,h.resolution)}if(ju.radius+=f,es.intersectsSphere(ju)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Zu.copy(c.boundingBox).applyMatrix4(l);let p;if(n)p=rr*.5;else{const m=Math.max(i.near,Zu.distanceToPoint(es.origin));p=Oy(i,m,h.resolution)}Zu.expandByScalar(p),es.intersectsBox(Zu)!==!1&&(n?VU(this,e):GU(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(qp),this.material.uniforms.resolution.value.set(qp.z,qp.w))}}class kU extends cM{constructor(t=new lM,e=new vg({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const WU=xt.forwardRef(function({points:t,color:e=16777215,vertexColors:n,linewidth:i,lineWidth:o,segments:l,dashed:c,...h},f){var p,m;const g=dg(y=>y.size),v=xt.useMemo(()=>l?new cM:new kU,[l]),[x]=xt.useState(()=>new vg),M=(n==null||(p=n[0])==null?void 0:p.length)===4?4:3,S=xt.useMemo(()=>{const y=l?new gg:new lM,A=t.map(E=>{const T=Array.isArray(E);return E instanceof O||E instanceof Se?[E.x,E.y,E.z]:E instanceof ht?[E.x,E.y,0]:T&&E.length===3?[E[0],E[1],E[2]]:T&&E.length===2?[E[0],E[1],0]:E});if(y.setPositions(A.flat()),n){e=16777215;const E=n.map(T=>T instanceof Bt?T.toArray():T);y.setColors(E.flat(),M)}return y},[t,l,n,M]);return xt.useLayoutEffect(()=>{v.computeLineDistances()},[t,v]),xt.useLayoutEffect(()=>{c?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[c,x]),xt.useEffect(()=>()=>{S.dispose(),x.dispose()},[S]),xt.createElement("primitive",wo({object:v,ref:f},h),xt.createElement("primitive",{object:S,attach:"geometry"}),xt.createElement("primitive",wo({object:x,attach:"material",color:e,vertexColors:!!n,resolution:[g.width,g.height],linewidth:(m=i??o)!==null&&m!==void 0?m:1,dashed:c,transparent:M===4},h)))}),XU=xt.forwardRef(({threshold:s=15,geometry:t,...e},n)=>{const i=xt.useRef(null);xt.useImperativeHandle(n,()=>i.current,[]);const o=xt.useMemo(()=>[0,0,0,1,0,0],[]),l=xt.useRef(null),c=xt.useRef(null);return xt.useLayoutEffect(()=>{const h=i.current.parent,f=t??(h==null?void 0:h.geometry);if(!f||l.current===f&&c.current===s)return;l.current=f,c.current=s;const m=new Km(f,s).attributes.position.array;i.current.geometry.setPositions(m),i.current.geometry.attributes.instanceStart.needsUpdate=!0,i.current.geometry.attributes.instanceEnd.needsUpdate=!0,i.current.computeLineDistances()}),xt.createElement(WU,wo({segments:!0,points:o,ref:i,raycast:()=>null},e))}),uM=["Route","Middleware","Controller","Model","View"],hM=.9,Bh=(uM.length-1)*hM/2+.3,qU=()=>{const s=getComputedStyle(document.documentElement),t=e=>s.getPropertyValue(e).trim();return{brand:t("--brand"),surface:t("--surface"),muted:t("--muted"),ink:t("--ink")}},YU=({label:s,index:t,active:e,onHover:n,colors:i})=>{const o=xt.useRef(),l=Bh-.3-t*hM;return yf((c,h)=>{o.current.position.y=ql.damp(o.current.position.y,l+(e?.2:0),6,h)}),Le.jsxs("group",{ref:o,position:[0,l,0],children:[Le.jsxs("mesh",{onPointerOver:c=>{c.stopPropagation(),n(t)},onPointerOut:()=>n(null),children:[Le.jsx("boxGeometry",{args:[3.2,.18,3.2]}),Le.jsx("meshBasicMaterial",{color:e?i.brand:i.surface,transparent:!0,opacity:e?.9:.6,depthWrite:!1}),Le.jsx(XU,{color:e?i.brand:i.muted})]}),Le.jsx(HU,{position:[1.7,.4,1.7],style:{pointerEvents:"none"},children:Le.jsx("span",{className:`font-mono text-xs ${e?"text-brand":"text-muted"}`,children:s})})]})},ZU=({color:s})=>{const t=xt.useRef();return yf(({clock:e})=>{t.current.position.y=Bh-e.elapsedTime*.6%1*Bh*2}),Le.jsxs("mesh",{ref:t,children:[Le.jsx("sphereGeometry",{args:[.1,16,16]}),Le.jsx("meshBasicMaterial",{color:s})]})},jU=()=>{const s=xt.useRef(),[t,e]=xt.useState(null),n=xt.useMemo(qU,[]),o=dg(l=>l.size).width<640?.68:1;return yf(({pointer:l,clock:c},h)=>{const f=-.6+Math.sin(c.elapsedTime*.5)*.12+l.x*.4;s.current.rotation.y=ql.damp(s.current.rotation.y,f,4,h),s.current.rotation.x=ql.damp(s.current.rotation.x,-l.y*.15,4,h)}),Le.jsxs("group",{ref:s,scale:o,children:[Le.jsxs("mesh",{children:[Le.jsx("cylinderGeometry",{args:[.012,.012,Bh*2,8]}),Le.jsx("meshBasicMaterial",{color:n.brand})]}),Le.jsx(ZU,{color:n.brand}),uM.map((l,c)=>Le.jsx(YU,{label:l,index:c,active:t===c,onHover:e,colors:n},l))]})},$U=()=>Le.jsx(UU,{dpr:[1,2],camera:{position:[5,3.4,7],fov:35},style:{touchAction:"pan-y"},onCreated:({camera:s})=>s.lookAt(0,0,0),children:Le.jsx(jU,{})});export{$U as default};
