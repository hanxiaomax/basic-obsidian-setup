async function insert_reference(tp) { 
	
	selection = tp.file.selection()
	if(selection !=""){
		let re = /^(.*)\[(?<title>.+)\]\((?<url>[A-Za-z0-9\:\/\. -~]+)(\"(.+)\")?\)(.*)$/g
		parse = re.exec(selection)
		console.log(parse.groups)
		url = parse.groups['url']
		title = parse.groups["title"] 
	}
	else{
		url = await tp.system.prompt("url") 
		title = await tp.system.prompt("title") 
	}
	
	const meta = `---
title: ${title}
tag: 
- reference
url: ${url}
alias: ${title}
--- 
---

🏷️ Status:: #seed   
📌 tags:: [[REFERENCE.tag]]
🔗 Parent::  

# <% tp.file.title %>
-----

-----

\`\`\`dataviewjs
dv.header(3, "Cited by:");
dv.list(dv.current().file.inlinks)
\`\`\`

`
	new_file = tp.file.create_new(meta,title,false)
	return  new_file
}

module.exports = insert_reference
