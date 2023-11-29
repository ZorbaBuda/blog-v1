import { format } from "date-fns";

export const defaultTemplate = 
`--- 
title: Title
date: ${format(Date.now(), 'LLLL d, yyyy')}
tags:
  - tag1
  - tag2
category: Category
summary: Summary
bookAuthor: Book author
bookYear: Book year
coverImage:  image.jpg/png
draft: false
---
`;