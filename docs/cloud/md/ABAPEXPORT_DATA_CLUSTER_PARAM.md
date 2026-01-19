---
title: "ABAPEXPORT_DATA_CLUSTER_PARAM"
description: |
  ABAPEXPORT_DATA_CLUSTER_PARAM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEXPORT_DATA_CLUSTER_PARAM.htm"
abapFile: "ABAPEXPORT_DATA_CLUSTER_PARAM.html"
keywords: ["do", "if", "case", "catch", "class", "data", "types", "internal-table", "ABAPEXPORT", "DATA", "CLUSTER", "PARAM"]
---

`... \{p1 = dobj1 p2 = dobj2 ...\}`\\ 
  `|\ \{p1 FROM dobj1 p2 FROM dobj2 ...\}`\\ 
  `| (ptab) ...`

[1. `... p1 = dobj1 p2 = dobj2 ...`](#ABAP_ADDITION_1@3@)

[2. `... p1 FROM dobj1 p2 FROM dobj2 ...`](#ABAP_ADDITION_2@3@)

[3. `... (ptab)`](#ABAP_ADDITION_3@3@)

A [data cluster](ABENDATA_CLUSTER_GLOSRY.html) can be defined statically by a parameter list in the form `p1 = dobj1 p2 = dobj2 ...` or `p1 FROM dobj1 p2 FROM dobj2 ...` and dynamically by specifying a parenthesized internal table `ptab`. Here the system searches for the data stored in the data cluster under the names `p1`, `p2`, .... The case of the names in the data clusters depends on how they are specified in the ABAP runtime framework. If specified statically (`b1`, `b2`, ...), uppercase is used. If specified dynamically in `rtab`, the case used there is used.

If the data cluster is too big for the memory, an exception is raised.

In static cases, the content of the data objects `dobj` is stored under the names `p1`, `p2`, ... in the cluster. The name of a parameter `p1`, `p2`, ... is converted to uppercase letters and can have a maximum of 255 characters. The specifications `p1 = dobj1 p2 = dobj2 ...` and `p1 FROM dobj1 p2 FROM dobj2 ...` have the same meaning. All data types can be used for the data object `dobj`, except reference types or data types that contain reference types as components. When an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) is used, the enumerated value is flagged as an enumerated type and saved in the basic type.

Export of three numbers to a byte string `buffer` and import of the same three numbers to the components of a structure.

In the dynamic case, the parameter list is specified in an index table `ptab` with two columns. These columns can have any name and must be of the type *character*. The first column in `ptab` must contain the names of the parameters, and the second must list the data objects in any case. The names of the data objects are used exactly as specified in the first column of `ptab`. If the second column is initial, the name of the parameter in the first column must match the name of a data object. The data object is then stored under its name in the cluster. If the first column of `ptab` is initial, an uncatchable exception is raised.

Dynamic export of data to a byte string `buffer`. The names in the first column of `ptab` contain lowercase letters, which means that the data can only be imported by being specified dynamically. The second column, on the other hand, is not case-sensitive.

-   The use of `=` is recommended rather than `FROM`, since `=` is also used by other ABAP statements to pass data.
-   To export objects referenced by reference variables, these can first be serialized using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) and then exported. In instances of classes, the class must implement the interface `IF_SERIALIZABLE_OBJECT`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA buffer TYPE xstring. \\nEXPORT num1 = 1 num2 = 2 num3 = 3 \\n TO DATA BUFFER buffer. \\n\\ \\n... \\n\\ \\nDATA: \\n BEGIN OF wa, \\n num1 TYPE i, \\n num2 TYPE i, \\n num3 TYPE i, \\n END OF wa. \\nIMPORT num1 = wa-num1 num2 = wa-num2 num3 = wa-num3 \\n FROM DATA BUFFER buffer. \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA buffer TYPE xstring. \\nTYPES: \\n BEGIN OF pline, \\n name TYPE string, \\n dobj TYPE string, \\n END OF pline, \\n ptab TYPE TABLE OF pline WITH EMPTY KEY. \\n\\ \\nDATA: \\n num1 TYPE i VALUE 1, \\n num2 TYPE i VALUE 2, \\n num3 TYPE i VALUE 3. \\n\\ \\nDATA(ptab) = VALUE ptab( \\n ( name = \`Num1\` dobj = \`NUM1\` ) \\n ( name = \`Num2\` dobj = \`NUM2\` ) \\n ( name = \`Num3\` dobj = \`NUM3\` ) ). \\n\\ \\nEXPORT (ptab) \\n TO DATA BUFFER buffer. \\n\\ \\n... \\n\\ \\nDATA: \\n BEGIN OF wa, \\n num1 TYPE i, \\n num2 TYPE i, \\n num3 TYPE i, \\n END OF wa. \\n\\ \\nptab = VALUE ptab( \\n ( name = \`Num1\` dobj = \`wa-num1\` ) \\n ( name = \`Num2\` dobj = \`wa-num2\` ) \\n ( name = \`Num3\` dobj = \`wa-num3\` ) ). \\n\\ \\nIMPORT (ptab) \\n FROM DATA BUFFER buffer. \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html