md5=function(g,j,r){function o(d,b,a){b="";for(a=0;a<=3;)b+=(256|d>>a++*8&511).toString(g).slice(1);return b}function h(d,b){var a=(d&j)+(b&j);return(d>>g)+(b>>g)+(a>>g)<<g|a&j}for(var s=[],i=0,t=[7,12,17,22,5,9,14,20,4,11,g,23,6,10,15,21];i<64;)s[i]=~~(Math.abs(Math.sin(++i))*4294967296);return function(d){var b,a,e,c,k,j,i=0,f,l;e=unescape(encodeURIComponent(d));d=[];c=0;for(k=e[r];c<=k;)d[c>>2]|=(e.charCodeAt(c)||128)<<c++%4*8;d[(k+8>>6)*g+14]=k*8;for(var m=1732584193,n=-271733879,p=~m,q=~n;i<d[r];i+=g){b=m;a=n;e=p;c=q;for(f=0;f<64;f++)j=[a&e|~a&c,c&a|~c&e,a^e^c,e^(a|~c)][l=f>>4],k=c,c=e,e=a,b=h(h(b,j),h(s[f],d[[f,5*f+1,3*f+5,7*f][l]%g+i])),l=t[4*l+f%4],a=h(a,b<<l|b>>>32-l),b=k;m=h(m,b);n=h(n,a);p=h(p,e);q=h(q,c)}return o(m)+o(n)+o(p)+o(q)}}(16,65535,"length");
