Array.prototype.remove = function(val) { 
var index = this.indexOf(val); 
if (index > -1) { 
this.splice(index, 1); 
} 
};

exports.install = function (Vue, options) {
    Vue.prototype.findElem = function (arrayToSearch,attr,val){
	    for (var i=0;i<arrayToSearch.length;i++){
	        if(arrayToSearch[i][attr]==val){
	            return true;
	        }
	    }
	    return false;
	}
};