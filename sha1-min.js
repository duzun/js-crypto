sha1=function(b){function k(c,b,a){b="";for(a=8;a--;)b+=(c>>>a*4&15).toString(16);return b}return function(c){var r=0,a=0,j=[],l=1732584193,m=4023233417,n=2562383102,o=271733878,p=3285377520,d,e,g,h,i,s,f,q=[],c=unescape(encodeURIComponent(c));for(d=c.length;a<=d;)q[a>>2]|=(c.charCodeAt(a)||128)<<8*(3-a++%4);for(c=d>>2;c++%16!=14;);q[c-1]=d>>>29;for(q[c++]=d<<3&b;r<c;r+=16){for(a=-1;++a<80;)f=j[a-3]^j[a-8]^j[a-14]^j[a-16],j[a]=a<16?~~q[r+a]:f<<1|f>>>31;d=l;e=m;g=n;h=o;i=p;for(a=0;a<80;)f=d<<5|d>>>27,i=i+j[a]+1518500249,f=[f+(e&g|~e&h)+i,s=f+(e^g^h)+i+341275144,f+(e&g|e&h|g&h)+i+882459459,s+1535694389][0|a++/20],i=h,h=g,g=e<<30|e>>>2,e=d,d=f&b;l=l+d&b;m=m+e&b;n=n+g&b;o=o+h&b;p=p+i&b}return k(l)+k(m)+k(n)+k(o)+k(p)}}(4294967295);
