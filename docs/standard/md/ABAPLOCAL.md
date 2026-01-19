---
title: "ABAPLOCAL"
description: |
  ABAPLOCAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOCAL.htm"
abapFile: "ABAPLOCAL.html"
keywords: ["loop", "do", "if", "class", "data", "internal-table", "field-symbol", "ABAPLOCAL"]
---

[Short Reference](ABAPLOCAL_SHORTREF.html)

`LOCAL dobj.`

The statement `LOCAL`, which is forbidden in classes, saves the current content of a data object `dobj` in an internal buffer. It can be used only in [subroutines](ABENSUBROUTINE_GLOSRY.html) or [function modules](ABENFUNCTION_MODULE_GLOSRY.html). At the end of the procedure, the data object `dobj` is reassigned the value in the buffer. If `LOCAL` is executed in a procedure for a data object more than once, all executions are ignored except the first one.

All data objects possible in [write positions](ABENOPERANDS_DATA_OBJECTS.html) can be specified for `dobj`. If `dobj` is an internal table, the procedure must not be called within a [`LOOP`](ABAPLOOP_AT_ITAB.html) loop across the table.

Modifiable formal parameters of the procedure, field symbols, or dereferenced data references are also possible after `LOCAL`. If formal parameters are specified, the assigned actual parameter is set to the value in the buffer at the end of the procedure. For field symbols, the field reference and the content of the referenced fields are saved.

The statement `LOCAL` is used, in particular, to protect global variables of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) declared with [`DATA`](ABAPDATA.html) from unwanted changes during a procedure. Instead of using `LOCAL`, the global data of the compilation unit should not be accessed in procedures.

When the following program section is executed, the value of the global variable `text` is buffered twice, once by specifying the name in `subr1` and a second time in `subr2` by specifying the formal parameter `para`, to which `text` is passed by reference. After returning from `subr2`, `text` has the value that is set in `subr1` again, and after returning from `subr1`, `text` has the value set in the compilation unit.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE string VALUE 'Global text'. \\n\\ \\nout->write\_text( text ). \\n\\ \\nPERFORM subr1. \\n\\ \\nout->write\_text( text ). \\n\\ \\nout->display( ). \\n\\ \\n\\ \\nFORM subr1. \\n LOCAL text. \\n text = 'Text in subr1'. \\n out->write\_text( text ). \\n PERFORM subr2 USING text. \\n out->write\_text( text ). \\nENDFORM. \\n\\ \\nFORM subr2 USING para TYPE string. \\n LOCAL para. \\n para = 'Text in subr2'. \\n out->write\_text( text ). \\nENDFORM. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenlocal\_obsolete.html