function cari_ruteman(s,d) {
	var start =node[s];
	var dest = node[d];
	node[start.id].g=0;
	node[start.id].h=h=Math.abs(start.x-dest.x)+Math.abs(start.y-dest.y);
	node[start.id].f=node[start.id].g+node[start.id].h;
	openlist = [start];
	closelist=[];
	while(openlist.length!=0 && !closelist.includes(dest)) {
		while(openlist.length!=0 && !closelist.includes(dest)) {
			closelist[closelist.length]=openlist[0];
			openlist.splice(0,1);
		}
		let unique = [...new Set(closelist)];
		closelist= unique;
		if(!closelist.includes(dest)) {
			extendman(dest);
		}
		if(!closelist.includes(dest) && openlist.length<1) {
			extendedman(dest);
		}
		let test = [...new Set(openlist)];
		 openlist= test;
	}
	if(dest.parentid!=null) {
		rute = [dest.id];
			while(!rute.includes(start.id)) {
				rute[rute.length]=node[rute[rute.length-1]].parentid;
			}
		rute.reverse();
	} else {
		rute= [];
	}
	console.log(rute);
}
function extendedman(dd) {
	for(cl=closelist.length-1;cl>=0;cl--) {
		if(node[closelist[cl].id+1] != null && !closelist.includes(node[closelist[cl].id+1])) {
			if(node[closelist[cl].id+1].block==0 && node[closelist[cl].id+1].x==closelist[cl].x && node[closelist[cl].id+1].y==closelist[cl].y+1) {
				node[closelist[cl].id+1].parentid=closelist[cl].id;
				openlist[openlist.length]=node[closelist[cl].id+1];
				node[closelist[cl].id+1].g=closelist[cl].g+1;
				node[closelist[cl].id+1].h=Math.abs(node[closelist[cl].id+1].x-dd.x)+Math.abs(node[closelist[cl].id+1].y-dd.y);
				node[closelist[cl].id+1].f=node[closelist[cl].id+1].g+node[closelist[cl].id+1].h;
				}
			}
		if(node[closelist[cl].id-1] != null && !closelist.includes(node[closelist[cl].id-1])) {
			if(node[closelist[cl].id-1].block==0 && node[closelist[cl].id-1].x==closelist[cl].x && node[closelist[cl].id-1].y==closelist[cl].y-1) {
				node[closelist[cl].id-1].parentid=closelist[cl].id;
				openlist[openlist.length]=node[closelist[cl].id-1];
				node[closelist[cl].id-1].g=closelist[cl].g+1;
				node[closelist[cl].id-1].h=Math.abs(node[closelist[cl].id-1].x-dd.x)+Math.abs(node[closelist[cl].id-1].y-dd.y);
				node[closelist[cl].id-1].f=node[closelist[cl].id-1].g+node[closelist[cl].id-1].h;
			}
		}
		if(node[closelist[cl].id+20] != null && !closelist.includes(node[closelist[cl].id+20]))  {
			if(node[closelist[cl].id+20].block==0 && node[closelist[cl].id+20].x==closelist[cl].x+1 && node[closelist[cl].id+20].y==closelist[cl].y) {
				node[closelist[cl].id+20].parentid=closelist[cl].id;
				openlist[openlist.length]=node[closelist[cl].id+20];
				node[closelist[cl].id+20].g=closelist[cl].g+1;
				node[closelist[cl].id+20].h=Math.abs(node[closelist[cl].id+20].x-dd.x)+Math.abs(node[closelist[cl].id+20].y-dd.y);
				node[closelist[cl].id+20].f=node[closelist[cl].id+20].g+node[closelist[cl].id+20].h;
			}
		}
		if(node[closelist[cl].id-20] != null && !closelist.includes(node[closelist[cl].id-20])) {
			if(node[closelist[cl].id-20].block==0 && node[closelist[cl].id-20].x==closelist[cl].x-1 && node[closelist[cl].id-20].y==closelist[cl].y) {
				node[closelist[cl].id-20].parentid=closelist[cl].id;
				openlist[openlist.length]=node[closelist[cl].id-20];
				node[closelist[cl].id-20].g=closelist[cl].g+1;
				node[closelist[cl].id-20].h=Math.abs(node[closelist[cl].id-20].x-dd.x)+Math.abs(node[closelist[cl].id-20].y-dd.y);
				node[closelist[cl].id-20].f=node[closelist[cl].id-20].g+node[closelist[cl].id-20].h;
				}
			}
		}
	}


function extendman(dd) {
			for(cl=closelist.length-1;cl>=0;cl--) {
				if(openlist.length<1 && node[closelist[cl].id+1] != null  && !closelist.includes(node[closelist[cl].id+1])) {
					if(node[closelist[cl].id+1].block==0 && node[closelist[cl].id+1].x==closelist[cl].x && node[closelist[cl].id+1].y==closelist[cl].y+1) {
						node[closelist[cl].id+1].parentid=closelist[cl].id;
						node[closelist[cl].id+1].g=closelist[cl].g+1;
						node[closelist[cl].id+1].h=Math.abs(node[closelist[cl].id+1].x-dd.x)+Math.abs(node[closelist[cl].id+1].y-dd.y);
						node[closelist[cl].id+1].f=node[closelist[cl].id+1].g+node[closelist[cl].id+1].h;
						if (node[closelist[cl].id+1].h<closelist[cl].h && node[closelist[cl].id+1].f<=closelist[cl].f) {
							openlist[openlist.length]=node[closelist[cl].id+1];
						}
					}
				}
				if(openlist.length<1 && node[closelist[cl].id-1] != null && !closelist.includes(node[closelist[cl].id-1])) {
					if(node[closelist[cl].id-1].block==0 && node[closelist[cl].id-1].x==closelist[cl].x && 
						node[closelist[cl].id-1].y==closelist[cl].y-1) {
						node[closelist[cl].id-1].parentid=closelist[cl].id;
						node[closelist[cl].id-1].g=closelist[cl].g+1;
						node[closelist[cl].id-1].h=Math.abs(node[closelist[cl].id-1].x-dd.x)+Math.abs(node[closelist[cl].id-1].y-dd.y);
						node[closelist[cl].id-1].f=node[closelist[cl].id-1].g+node[closelist[cl].id-1].h;
						if (node[closelist[cl].id-1].h<closelist[cl].h && node[closelist[cl].id-1].f<=closelist[cl].f) {
							openlist[openlist.length]=node[closelist[cl].id-1];
						}
					}
				}
				if(openlist.length<1 && node[closelist[cl].id+20] != null && !closelist.includes(node[closelist[cl].id+20]) ) {
					if(node[closelist[cl].id+20].block==0 && node[closelist[cl].id+20].x==closelist[cl].x+1 && 
						node[closelist[cl].id+20].y==closelist[cl].y) {
						node[closelist[cl].id+20].parentid=closelist[cl].id;
						node[closelist[cl].id+20].g=closelist[cl].g+1;
						node[closelist[cl].id+20].h=Math.abs(node[closelist[cl].id+20].x-dd.x)+Math.abs(node[closelist[cl].id+20].y-dd.y);
						node[closelist[cl].id+20].f=node[closelist[cl].id+20].g+node[closelist[cl].id+20].h;
						if (node[closelist[cl].id+20].h<closelist[cl].h && node[closelist[cl].id+20].f<=closelist[cl].f) {
							openlist[openlist.length]=node[closelist[cl].id+20];
						}
					}
				}
				if(openlist.length<1 && node[closelist[cl].id-20] != null && !closelist.includes(node[closelist[cl].id-20])) {
					if(node[closelist[cl].id-20].block==0 && node[closelist[cl].id-20].x==closelist[cl].x-1 && 
						node[closelist[cl].id-20].y==closelist[cl].y) {
						node[closelist[cl].id-20].parentid=closelist[cl].id;
						node[closelist[cl].id-20].g=closelist[cl].g+1;
						node[closelist[cl].id-20].h=Math.abs(node[closelist[cl].id-20].x-dd.x)+Math.abs(node[closelist[cl].id-20].y-dd.y);
						node[closelist[cl].id-20].f=node[closelist[cl].id-20].g+node[closelist[cl].id-20].h;
						if (node[closelist[cl].id-20].h<closelist[cl].h && node[closelist[cl].id-20].f<=closelist[cl].f) {
							openlist[openlist.length]=node[closelist[cl].id-20];
						}
					}
				}
			}
		 }