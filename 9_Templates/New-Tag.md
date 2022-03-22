---
title: {{title}}
--- 
---
#topic-tag

🔔 Description::

[[_Topics MOC|_Topics]]

## Notes for {{title}}

```dataviewjs

dv.table(["Title","Topics","Status","type"],dv.current().file.inlinks
.map(b=>{
    var page = dv.page(b)
    return [page.file.link,page.tags,page.Status,"#"+page.tag]
})
)

```




