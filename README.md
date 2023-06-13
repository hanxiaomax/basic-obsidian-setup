# basic-obsidian-setup

Basic obsidian setup for my workplace. 

## Theme

[minimal](https://github.com/kepano/obsidian-minimal)


## Plugins

common plugins included.(tick means I enabled it by default )
- [ ] calendar
- [x] cm-editor-syntax-highlight-obsidian
- [x] customizable-sidebar
- [x] darlal-switcher-plus
- [x] dataview
- [x] obsidian-dynamic-toc
- [x] obsidian-emoji-toolbar
- [x] obsidian-excalidraw-plugin
- [x] obsidian-git
- [x] obsidian-image-toolkit
- [ ] obsidian-pandoc
- [x] obsidian-plantuml
- [x] obsidian-style-settings
- [ ] obsidian-to-anki-plugin
- [ ] oz-image-plugin
- [x] recent-files-obsidian
- [x] supercharged-links-obsidian
- [x] table-editor-obsidian
- [x] templater-obsidian
- [x] url-into-selection

## Folders

- `Concept`: Concept notes
- `Inbox`: where new notes created
- `MOCs`: Home of MOC notes
- `Notes`: Normal notes while reading or learning. with same structure of the readings
- `Topics`: Topic notes
- `Tags`: Home of tags 
- `Excalidraw`: Home of Excalidraw files 
- `Utilities`: attachment, Templates, font, icon

```bash
├── Concepts
│   └── Example-concept
├── Excalidraw
│   ├── Palettes
│   ├── Pens
│   └── Scripts
│       └── Downloaded
├── Inbox
├── MOC
├── Notes
│   └── OSTEP.examplelearningnotes
├── Tags
├── Topics
└── Utilities
    ├── Attachment
    │   ├── PDF
    │   ├── images
    │   └── plantuml
    ├── Templates
    │   └── Scripts
    ├── font
    └── icon
```

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
