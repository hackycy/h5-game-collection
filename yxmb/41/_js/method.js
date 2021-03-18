/*!
 * js算法脚本
 */
 
//数组去重2
Array.prototype.unique2 = function()
{
	var n = {},r=[]; //n为hash表，r为临时数组
	for(var i = 0; i < this.length; i++) //遍历当前数组
	{
		if (!n[this[i]]) //如果hash表中没有当前项
		{
			n[this[i]] = true; //存入hash表
			r.push(this[i]); //把当前数组的当前项push到临时数组里面
		}
	}
	return r;
}
//数组去重4（with排序）
Array.prototype.unique4 = function()
{
	this.sort();
	var re=[this[0]];
	for(var i = 1; i < this.length; i++)
	{
		if( this[i] !== re[re.length-1])
		{
			re.push(this[i]);
		}
	}
	return re;
}

/////////////////////////////////////////////////////////


      // 冒泡排序  
Array.prototype.bubbleSort = function(){  
	var i = 0, len = this.length,  
	  j, d;  
	for(; i<len; i++){  
	  for(j=0; j<len; j++){  
		  if(this[i] < this[j]){  
			  d = this[j];  
			  this[j] = this[i];  
			  this[i] = d;  
		  }  
	  }  
	}  
}
	  
	  // 为数组提供的冒泡排序(lq.2016-4-13)
	  // 数组格式：[编号, 值]
	  //功能：按数组中的值排序，编号用于定位其它对象
Array.prototype.bubbleSort_Array = function(){ 
	var i = 0, len = this.length, j, d, a1,a2,v1,v2;  
	for(; i<len; i++){  
		for(j=0; j<len; j++){
			a1 = this[i];
			a2 = this[j];
			v1 = a1[1];
			v2 = a2[1];
			if(v1 < v2){  
				d = this[j];  
				this[j] = this[i];  
				this[i] = d;  
			}
		}  
	} 
}
      
 

/*交换两个节点位置（jquery封装）*/
var exchange = function(a,b){
	var n = a.next(), p = b.prev();
	b.insertBefore(n);
	a.insertAfter(p);
}; 