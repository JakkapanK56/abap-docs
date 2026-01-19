---
title: "ABAPIMPORT_PARAMETERLIST"
description: |
  ABAPIMPORT_PARAMETERLIST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPIMPORT_PARAMETERLIST.htm"
abapFile: "ABAPIMPORT_PARAMETERLIST.html"
keywords: ["do", "if", "case", "catch", "data", "types", "internal-table", "ABAPIMPORT", "PARAMETERLIST"]
---

`... \{p1 = dobj1 p2 = dobj2 ...\}`\\ 
  `|\ \{p1 TO dobj1  p2 TO dobj2 ...\}`\\ 
  `| (ptab) ...`

[1. `... p1 = dobj1 p2 = dobj2 ...`](#ABAP_ADDITION_1@3@)

[2. `... p1 TO dobj1 p2 TO dobj2 ...`](#ABAP_ADDITION_2@3@)

[3. `... (ptab)`](#ABAP_ADDITION_3@3@)

A [data cluster](ABENDATA_CLUSTER_GLOSRY.html) can be read statically using a parameter list in the form `p1 = dobj1 p2 = dobj2 ...` or `p1 TO dobj1 p2 TO dobj2 ...` and dynamically by specifying a parenthesized internal table `ptab`. Here the system searches the data cluster for data stored under the names `p1`, `p2`, .... If specified statically as `b1`, `b2`, ..., the system searches for the names in uppercase letters. If specified dynamically in `rtab`, the system searches for the names in the case used there.

If a parameter `p1`, `p2`, ... is specified that is not stored in the data cluster, the specification is ignored and the data object `dobj` retains its current value. By default, the data objects `dobj` must have the same data type as the parameter `p1`, `p2`, ... of the cluster. In internal tables, only the row type and not the table category is relevant. The following exceptions apply:

When structures are exported, the information indicating whether the structure contains components inherited using the statement [`INCLUDE`](ABAPINCLUDE_TYPE.html) or inherited from other substructures in the ABAP Dictionary is stored. A structure into which data is imported must also match the structure in the data cluster with respect to the components applied using `INCLUDE`. Only for structures that were stored prior to ABAP release 6.10 and structures where all the components of the uppermost hierarchy level were transferred using `INCLUDE` does the target structure not necessarily need to be set up with the same `INCLUDE` statements.

When importing from internal tables with non-unique [table keys](ABENITAB_KEY.html), the order of duplicate rows in relation to these keys is not retained.

The additions specified under [`conversion_options`](ABAPIMPORT_CONVERSION.html) allow additional conversions and define other conversion rules.

The rule that a target structure at the highest level may have more components than the source structure can cause problems in relation to structures defined in the ABAP Dictionary if the structure there is marked as enhanceable. Therefore, this situation raises a warning from the extended program check.

In the static case, the content is read from the data objects stored in the data cluster under the names `p1`, `p2`, ..., and these content is passed to the `dobj` data objects. The system searches for the names `p1`, `p2`, ... in uppercase letters in the data cluster. The specifications `p1 = dobj1 p2 = dobj2 ...` and `p1 TO dobj1 p2 TO dobj2 ...` have the same meaning.

Static import of data stored using the dynamic variant of the [parameter list](ABAPEXPORT_DATA_CLUSTER_PARAM.html) of the statement `EXPORT`. The data can be read with the static variant of the parameter list for the statement `IMPORT`, because the data names only contain uppercase characters.

In the dynamic case, the parameter list is inherited from the two-column internal table `ptab`, whose columns must be character-like. The first column in `ptab` must list the names of the parameters, and the second must list the data objects in any case. The system searches in the data cluster for the exact names and cases specified in the first column of `ptab`. If the second column is initial, the name of the parameter in the first column must match the name of a data object. Then the content found under this name is assigned to the corresponding data object. If the first column of `ptab` is initial or an object name occurs twice, an uncatchable exception is raised.

Dynamic import of data stored using the static variant of the [parameter list](ABAPEXPORT_DATA_CLUSTER_PARAM.html) of the statement `EXPORT`. To read data with the dynamic variant of the parameter list of the statement `IMPORT`, the names must be specified in uppercase letters in the first column of `ptab`.

-   With data objects of the type `c`, different lengths are allowed. In this case, the appropriate conversion rule from the [conversion table for source field type `c`](ABENCONVERSION_TYPE_C.html) applies.
-   Data of type `n` can be imported into data objects of type `c` if they have the same length.
-   If the data types of all components of a structure, except for the last one, match and this component is of the type `c`, it can be lengthened or shortened in accordance with the conversion rule from the conversion table for source field type `c`. [Alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) in front of this component are considered part of the component.
-   In the case of structures, it is enough that the initial part of a target structure has the same type as the source structure in the data cluster. After this, the target structure can contain further components at the highest level. In imports, the surplus components are filled with their [initial values](ABENINITIAL_VALUE_GLOSRY.html). A substructure of the target structure must not, however, have more components than the corresponding substructure in the source structure.
-   Data objects of the [base type](ABENBASE_TYPE_GLOSRY.html) of an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) stored in the cluster can be imported into an enumerated variable if the imported value is a valid [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) of the [enumerated type](ABENENUM_TYPE_GLOSRY.html). This includes any stored enumerated objects and regular elementary data objects of the basic type. But stored enumerated objects cannot be imported into data objects of their base type.

-   The use of `=` is recommended rather than `TO`, since `=` is also used by other ABAP statements to inherit data.
-   In the static case, it is not possible to read any data objects with names containing lowercase letters. These names can be defined using the dynamic variant of the [parameter list](ABAPEXPORT_DATA_CLUSTER_PARAM.html) for statement `EXPORT`.

-   To read data objects with the dynamic variant that were stored using the static variant of the [parameter list](ABAPEXPORT_DATA_CLUSTER_PARAM.html) of the statement `EXPORT`, the names of these data objects must be specified in uppercase letters. Any names containing lowercase letters can only be read and written with the dynamic variants.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA buffer TYPE xstring. \\n\\ \\nTYPES: \\n BEGIN OF pline, \\n name TYPE string, \\n dobj TYPE string, \\n END OF pline, \\n ptab TYPE TABLE OF pline WITH EMPTY KEY. \\n\\ \\nDATA: \\n num1 TYPE i VALUE 1, \\n num2 TYPE i VALUE 2, \\n num3 TYPE i VALUE 3. \\n\\ \\nFINAL(ptab) = VALUE ptab( \\n ( name = \`NUM1\` dobj = \`num1\` ) \\n ( name = \`NUM2\` dobj = \`num2\` ) \\n ( name = \`NUM3\` dobj = \`num3\` ) ). \\n\\ \\nEXPORT (ptab) \\n TO DATA BUFFER buffer. \\n\\ \\n... \\n\\ \\nIMPORT num1 = num1 num2 = num2 num3 = num3 \\n FROM DATA BUFFER buffer. \\n\\ \\nout->write( |\\{ num1 \\}, \\{ num2 \\}, \\{ num3 \\}| ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA buffer TYPE xstring. \\n\\ \\nDATA: \\n num1 TYPE i VALUE 1, \\n num2 TYPE i VALUE 2, \\n num3 TYPE i VALUE 3. \\n\\ \\nEXPORT num1 = num1 num2 = num2 num3 = num3 \\n TO DATA BUFFER buffer. \\n\\ \\n... \\n\\ \\nTYPES: \\n BEGIN OF pline, \\n name TYPE string, \\n dobj TYPE string, \\n END OF pline, \\n ptab TYPE TABLE OF pline WITH EMPTY KEY. \\n\\ \\nFINAL(ptab) = VALUE ptab( \\n ( name = \`NUM1\` dobj = \`num1\` ) \\n ( name = \`NUM2\` dobj = \`num2\` ) \\n ( name = \`NUM3\` dobj = \`num3\` ) ). \\n\\ \\nIMPORT (ptab) \\n FROM DATA BUFFER buffer. \\n\\ \\nout->write( |\\{ num1 \\}, \\{ num2 \\}, \\{ num3 \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendata\_cluster.html abapimport\_data\_cluster.html