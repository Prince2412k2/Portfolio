name:	Prince2412k2/Book_Visualizer
description:	A Book reading companion that helps visualize,summarize and turn into audiobooks
--
# TO-do

## Logic

![Flow](static/Abstract-Logic.png)

- main route /process

  - recives a book returns a book state obj

- Receiver route /fetch
  - front end, via polling with some interval keeps calling this route
  - it will return a state obj
  - route will accept /`chapter_id`/`chunk_id`
  - its request and get the state of object
  - in the object there is a field called `is_done`,
    if this is **True** stop polling this particular chunk

