Array.prototype.remove = function(val) { 
var index = this.indexOf(val); 
if (index > -1) { 
this.splice(index, 1); 
} 
};

Array.prototype.distinct = function(){
 var arr = this,
  result = [],
  i,
  j,
  len = arr.length;
 for(i = 0; i < len; i++){
  for(j = i + 1; j < len; j++){
   if(arr[i] === arr[j]){
    j = ++i;
   }
  }
  result.push(arr[i]);
 }
 return result;
}

exports.install = function (Vue, options) {
    Vue.prototype.findElem = function (arrayToSearch,attr,val){
	    for (var i=0;i<arrayToSearch.length;i++){
	        if(arrayToSearch[i][attr]==val){
	            return true;
	        }
	    }
	    return false;
	},

	Vue.prototype.arrayUnique2 = function (arr, name) {
	  var hash = {};
	  return arr.reduce(function (item, next) {
	    hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
	    return item;
	  }, []);
	}
};