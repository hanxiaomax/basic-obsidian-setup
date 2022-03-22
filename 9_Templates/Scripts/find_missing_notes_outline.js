
async function find_missing_notes_outline(tp) { 
	
	files = await tp.user.get_files_in_same_dir()
	let files_in_folder = files.split("\n");
	// console.log(files_in_folder)
	let content = tp.file.content
	const re = /\[\[(?<ref>.*?)(\|(?<alias>.*?))?\]\]/g;
	const results = [...content.matchAll(re)];

	let listed = new Array()
	results.forEach(element => {
		if(element.groups['alias']){
			title = "[["+element.groups['alias'] + "]]"
		}else{
			title = "[["+element.groups['ref'] + "]]"
		}
		listed.push(title)
	});
	let difference = files_in_folder.filter(x => !listed.includes(x));
	let not_in_folder = listed.filter(x=>!files_in_folder.includes(x))

	return difference.join("\n") + "\n**下面文件是被列出但不在目录下的文件**:\n" + not_in_folder.join("\n")
}

module.exports = find_missing_notes_outline
