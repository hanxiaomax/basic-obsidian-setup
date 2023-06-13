async function create_note_type(tp) { 
	var title;
	title = tp.file.title
	types = ["MOC","topic","concept","note"]
	const type = await tp.system.suggester(types,types) 

	return `---
title: ${title}
alias: ${title}
tag:
- ${type} 
---
`
} 
module.exports = create_note_type
