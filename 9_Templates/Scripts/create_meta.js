async function create_meta(tp) { 
	const url = await tp.system.prompt("url") 
	var tags   = [		
	]
	var fs = require('fs');
	while(1){
		var data = fs.readFileSync('/Users/lingfeng/Nutstore Files/我的坚果云/笔记仓库/Scripts/tags', 'utf8')
		var tag_array = data.split("\n");
		tag_array.push("Quit")
		tag_array.push("Custom")

		const tag = await tp.system.suggester(tag_array,tag_array) 
		if(tag==="Quit"){
			break;
		}
		else if(tag==="Custom"){
			custom_tag = await tp.system.prompt("tag") 

		fs.appendFileSync("/Users/lingfeng/Nutstore Files/我的坚果云/笔记仓库/Scripts/tags",custom_tag+"\n")
		
		}
		else{
			tags.push(tag)
		}
		
		
	}
	const title = tp.file.title
	const id = url.substring(url.lastIndexOf('/') + 1)
	tags_str = tags.join(", ")
	return `---
title: ${title}
tag: 
- leetcode
- leetcode-exercise
type: leetcode-note
url: ${url}
--- 

# ${title}[](${url})
tags: ${tags_str}
---

`
} 


module.exports = create_meta
