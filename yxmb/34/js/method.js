function sortNumber(a,b){return a - b;}
function sortNumber_desc(a,b){return b - a;}
Array.prototype.unique2 = function(){var n = {},r=[]; for(var i = 0; i < this.length; i++) 
{if (!n[this[i]]) {n[this[i]] = true; r.push(this[i]); }}return r;}
Array.prototype.unique4 = function(){this.sort(sortNumber);var re=[this[0]];
for(var i = 1; i < this.length; i++){if( this[i] !== re[re.length-1]){re.push(this[i]);}}return re;}
function sortArr2(arr, arr2){var len = arr.length;var arr0=new Array(len);var arr1=new Array(len);var arr20 = new Array(len);
for(var i=0;i<len;i++){arr0[i]=arr[i]; arr20[i]=arr2[i]; }
arr.sort(sortNumber_desc); for(var i=0;i<len;i++){arr1[i]=arr[i];}
for(var i=0; i<len; i++){var v=arr0[i];for(var j=0;j<len;j++){if(arr1[j]==null) continue;
if(v==arr1[j]){arr2[j]=arr20[i];arr1[j]=null;break;}}}}
Array.prototype.bubbleSort_Array = function(){ 
var i = 0, len = this.length, j, d, a1,a2,v1,v2;  
for(; i<len; i++){  for(j=0; j<len; j++){a1 = this[i];a2 = this[j];v1 = a1[1];v2 = a2[1];
if(v1 < v2){d = this[j];  this[j] = this[i];  this[i] = d;  }}  } }
var exchange = function(a,b){var n = a.next(), p = b.prev();b.insertBefore(n);a.insertAfter(p);};