async function update_logo(tp,type) { 
	const tags = tp.file.tags
	console.log(tp.file.title)
	const title = tp.frontmatter["title"]
	console.log(title)
	if(tags.includes("#api-note" )){
		return tp.file.rename("🍀 "+title)
	}
	else if(tags.includes("#concept-note" )){
		return tp.file.rename("🔰 "+title)
	}
	else if(tags.includes("#outline-note" )){
		return tp.file.rename("🌳 "+title)
	}
} 
module.exports = update_logo


