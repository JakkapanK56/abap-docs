---
title: "ABENST_TT_LOOP"
description: |
  ABENST_TT_LOOP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_LOOP.htm"
abapFile: "ABENST_TT_LOOP.html"
keywords: ["loop", "if", "case", "try", "data", "types", "internal-table", "ABENST", "LOOP"]
---

`<tt:loop [ref="node"]\ [name="alias"]>\    ...  </tt:loop>`

Internal tables are serialized and deserialized within a loop defined by `tt:loop` that sets the [current node](ABENST_TT_REF.html) to the current table line.

The optional attribute `ref` can be used to define the current node for the statement. If `ref` is not specified, the current node of the surrounding element is used implicitly. The ABAP data object that is bound to the current node must be an internal table.

The `name` attribute can be used to define an `alias` for the current node within the loop. In the `tt:loop` loop, the current node can then be addressed with `$alias`. When nested loops are used, the alias allows access to the current nodes of outer loops. If only one loop is used and in the outermost loop, `$alias` is equivalent to `$ref` when entering the loop.

**Serialization**

In serializations, a loop is run for the entire internal table. If the internal table is blank, processing continues after the element. In each loop pass, the current node of a data node is set further and the current ABAP table line is bound to the data node. The content of element `tt:loop`, which can contain any template elements, is processed for each data node.

**Deserialization**

In deserializations, the ABAP table is initialized and the content of element `tt:loop` is also executed in a loop. The XML data continues to be processed until a position is reached that cannot be processed with the content of the element. A new line is created in the bound ABAP table for each loop pass and is in turn bound to the current node. The XML values that are deserialized in the current loop pass are passed on to the current table line.

In the following symmetrical Simple Transformation `DEMO_ST_LOOP`, the internal table that is bound to the `ROOT` data roots and its table-like component `values` are serialized and deserialized in two nested `tt:loop` loops. For demonstration purposes, an alias called `line` is defined in the outermost loop and is addressed in the loop using `$line`. Since `$line` is not addressed in the inner loop, the definition of the alias name would not be necessary here.

The following ABAP program can call the transformation:

The result of the serialization is the following:

The transformation is [symmetrical](ABENST_SYMMETRY.html). After deserialization, `result` has the same content as `itab`.

-   If it must be possible to deserialize a transformation, it must be possible to properly terminate loop executions, especially in the case of nested `tt:loop` loops. This is the case if the content of a `tt:loop` element can be compared with the sections to be deserialized. If the XML elements in a loop are not sufficient, the entire loop body can be enclosed with a literal XML element, for example, which defines a hierarchy level that can be evaluated during deserialization.
-   In a Simple Transformation, a data node can either be handled exclusively as an internal table or not at all. This is especially true when splitting a template into different transformation directions.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n TYPES: BEGIN OF line, \\n key TYPE i, \\n values TYPE TABLE OF i WITH EMPTY KEY, \\n END OF line. \\n\\ \\nDATA itab TYPE TABLE OF line WITH EMPTY KEY. \\nDATA result LIKE itab. \\n\\ \\nitab = \\n VALUE #( FOR j = 2 UNTIL j > 4 \\n ( key = j \\n values = VALUE #( ( j \*\* 2 ) \\n ( j \*\* 3 ) \\n ( j \*\* 4 ) ) ) ). \\n\\ \\nCALL TRANSFORMATION demo\_st\_loop \\n SOURCE root = itab \\n RESULT XML DATA(xml\_xstring). \\n\\ \\ncl\_abap\_browser=>show\_xml( EXPORTING xml\_xstring = xml\_xstring ). \\n\\ \\nCALL TRANSFORMATION demo\_st\_loop \\n SOURCE XML xml\_xstring \\n RESULT root = result. \\ \\n 2\\ \\n \\ \\n 4\\ \\n 8\\ \\n 16\\ \\n \\ \\n 3\\ \\n \\ \\n 9\\ \\n 27\\ \\n 81\\ \\n \\ \\n 4\\ \\n \\ \\n 16\\ \\n 64\\ \\n 256\\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html