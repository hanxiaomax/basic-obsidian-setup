## ↗️ Notes for {{title}}


```dataviewjs
let valid_inlinks = dv.current().file.inlinks.filter(b=>{
	if(b.path.match("/.*\.md")){
		return b
	}})

if(valid_inlinks.length){
	dv.header(3, "Parents:");
	dv.list(valid_inlinks)
}


let valid_outlinks = dv.current().file.outlinks.filter(b=>{
	if(b.path.match("/.*\.md")){
		return b
	}})
	
if(valid_outlinks.length){
	dv.header(3, "Children:");
	dv.list(valid_outlinks
	.map(b=>{
		var page = dv.page(b)
		return page.file.link
	})
	)
}
```

