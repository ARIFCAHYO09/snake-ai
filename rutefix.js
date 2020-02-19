function cari_rute(s,d) {
	var start =node[s];
	var dest = node[d];
	openlist = [start];
	closelist = [];
	while(openlist.length!=0 && !closelist.includes(dest)) {
		while(openlist.length!=0 && !closelist.includes(dest)) {
			closelist[closelist.length]=openlist[0];
			openlist.splice(0,1);
		}
		let unique = [...new Set(closelist)];
		closelist= unique;
				for(cl=closelist.length-1;cl>=0;cl--) {
					if(node[closelist[cl].id+1] != null && !closelist.includes(node[closelist[cl].id+1])) {
						if(node[closelist[cl].id+1].block==0 && node[closelist[cl].id+1].x==closelist[cl].x && node[closelist[cl].id+1].y==closelist[cl].y+1) {
							node[closelist[cl].id+1].parentid=closelist[cl].id;
							openlist[openlist.length]=node[closelist[cl].id+1];
						}
					}
					if(node[closelist[cl].id-1] != null && !closelist.includes(node[closelist[cl].id-1])) {
						if(node[closelist[cl].id-1].block==0 && node[closelist[cl].id-1].x==closelist[cl].x && node[closelist[cl].id-1].y==closelist[cl].y-1) {
							node[closelist[cl].id-1].parentid=closelist[cl].id;
							openlist[openlist.length]=node[closelist[cl].id-1];
						}
					}
					if(node[closelist[cl].id+20] != null && !closelist.includes(node[closelist[cl].id+20])) {
						if(node[closelist[cl].id+20].block==0 && node[closelist[cl].id+20].x==closelist[cl].x+1 && node[closelist[cl].id+20].y==closelist[cl].y) {
							node[closelist[cl].id+20].parentid=closelist[cl].id;
							openlist[openlist.length]=node[closelist[cl].id+20];
						}
					}
					if(node[closelist[cl].id-20] != null && !closelist.includes(node[closelist[cl].id-20])) {
						if(node[closelist[cl].id-20].block==0 && node[closelist[cl].id-20].x==closelist[cl].x-1 && node[closelist[cl].id-20].y==closelist[cl].y) {
							node[closelist[cl].id-20].parentid=closelist[cl].id;
							openlist[openlist.length]=node[closelist[cl].id-20];
						}
					}
				}
		let test = [...new Set(openlist)];
		 openlist= test;
	}
	if(dest.parentid!=null) {
	rute = [dest.id];
		while(!rute.includes(start.id)) {
			rute[rute.length]=node[rute[rute.length-1]].parentid;
		}
	}
	else {
		rute = [];
	}
	rute.reverse();
}