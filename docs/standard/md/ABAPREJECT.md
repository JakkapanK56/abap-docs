---
title: "ABAPREJECT"
description: |
  ABAPREJECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREJECT.htm"
abapFile: "ABAPREJECT.html"
keywords: ["select", "if", "method", "data", "ABAPREJECT"]
---

[Short Reference](ABAPREJECT_SHORTREF.html)

`REJECT [node].`

[`... node`](#ABAP_ONE_ADD@1@)

The statement `END-OF-SELECTION` is only intended for use in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that are linked with a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). It exits the current [`GET`](ABAPGET-.html) event block of an executable program. If `node` is not specified, any nodes that are at a lower level in the hierarchical structure of the linked logical database are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

The `REJECT` statement always refers to the current `GET` event, not to the location where it is specified. If a [procedure](ABENPROCEDURE_GLOSRY.html) is called in a `GET` event block, and the `REJECT` statement is executed there, the calling event block is affected.

`node` can be a [flat](ABENFLAT_GLOSRY.html)\\ [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) that, when the statement is executed, must contain the name of a node that lies above the current node in the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) hierarchy. If `node` is specified, the logical database reads the next data record of the corresponding node.

Exits the event block `GET`\\ `sbook` and branches to the event `GET sflight` after the interface work area `sbook` was produced as output for the first time. To execute the example, the program must be linked with the logical database `F1S`.

-   `REJECT` is forbidden in methods. Also, it is not recommended that `REJECT` is used in processing blocks other than in `GET` event blocks. Runtime errors can occur if the processing blocks are not executed in the appropriate context.
-   If logical databases are no longer used, it is no longer necessary to use the statement `REJECT`.

-   *Cause:* The table whose name is in the field `dbtab` is not active, that is, the table is not above the current table in the database hierarchy. Therefore, the processing cannot continue with the next data record of this table.
    *Runtime error:*\\ `REJECT_TABLE_NOT_FOUND`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nNODES: sflight, \\n sbook. \\n\\ \\nGET sflight. \\n out->next\_section( \\n |Carrid: \\{ sflight-carrid \\} | && \\n |Connid: \\{ sflight-connid \\} | && \\n |Fldate: \\{ sflight-fldate \\}| ). \\n\\ \\nGET sbook. \\n out->write\_text( \\n |Bookid: \\{ sbook-bookid \\}| ). \\n REJECT 'SFLIGHT'. \\n\\ \\nEND-OF-SELECTION. \\n out->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_reporting\_statements.html