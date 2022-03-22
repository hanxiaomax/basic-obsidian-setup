# basic-obsidian-setup

Basic obsidian setup for my workplace. 

## Theme
Customized [Deep Work](https://github.com/nikbrunner/obsidian-deep-work-theme). 
- Add colors to the customized tag(@tag style)
- Add emoji to the MOC notes

Those customization can also be done with [Supercharged Links](https://github.com/mdelobelle/obsidian_supercharged_links) and [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)

![](https://s3.bmp.ovh/imgs/2022/03/78566f607786a5d1.jpg)
![](https://s3.bmp.ovh/imgs/2022/03/c273ac287f5db0ed.jpg)
![](https://s3.bmp.ovh/imgs/2022/03/b7be34206f0ad62d.jpg)
![](https://s3.bmp.ovh/imgs/2022/03/d109291498495ace.jpg)

There is also an customized theme call Minimal-nite, it is from the [minimal](https://github.com/kepano/obsidian-minimal) and [Obsidianite](https://github.com/bennyxguo/Obsidian-Obsidianite) with some personal adjustments. which I used for a long time, but the daly light verison is not good and I really need some sunshine so I switched to [Deep Work](https://github.com/nikbrunner/obsidian-deep-work-theme)



## Plugins
common plugins included.(tick means I enabled it by default )
- [ ] breadcrumbs
- [ ] calendar
- [x] cm-editor-syntax-highlight-obsidian
- [x] customizable-sidebar
- [x] darlal-switcher-plus
- [x] dataview
- [ ] file-tree-alternative
- [ ] find-unlinked-files
- [ ] folder-note-plugin
- [x] obsidian-dynamic-toc
- [x] obsidian-emoji-toolbar
- [x] obsidian-excalidraw-plugin
- [x] obsidian-git
- [x] obsidian-image-toolkit
- [ ] obsidian-kanban
- [ ] obsidian-pandoc
- [x] obsidian-plantuml
- [x] obsidian-style-settings
- [ ] obsidian-to-anki-plugin
- [ ] oz-image-plugin
- [x] recent-files-obsidian
- [ ] sliding-panes-obsidian
- [x] supercharged-links-obsidian
- [x] table-editor-obsidian
- [x] tag-wrangler
- [x] templater-obsidian
- [x] url-into-selection

## Folders

- `0_TODOs`: Todos(optional)
- `1_Seeds`: Default folder for newly created notes
- `2_MOCs`: Home of MOC notes
- `3_Notes`: Home of all other Notes
- `4_Gist`: Home of code snippets 
- `5_Topics`: Home of tags 
- `6_Ref`
- `7_Templates`: Home of Template note
- `8_Kanban`
- Excalidraw: Home of Excalidraw files and svg
- _HOME: landing page
- font: font file for Excalidraw's 4th font

## Tags
I use `[[@tag]]` style tags instead of the `#tag` style, all tags are actually a note with some dataviewjs scripts to query the related notes.

```dataviewjs
dv.table(["Title","Topics","Status","type"],dv.current().file.inlinks
.map(b=>{
    var page = dv.page(b)
    return [page.file.link,page.tags,page.Status,"#"+page.tag]
})
)
```
