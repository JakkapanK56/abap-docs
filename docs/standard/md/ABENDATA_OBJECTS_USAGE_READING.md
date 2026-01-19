---
title: "ABENDATA_OBJECTS_USAGE_READING"
description: |
  ABENDATA_OBJECTS_USAGE_READING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATA_OBJECTS_USAGE_READING.htm"
abapFile: "ABENDATA_OBJECTS_USAGE_READING.html"
keywords: ["do", "if", "catch", "data", "types", "internal-table", "field-symbol", "ABENDATA", "OBJECTS", "USAGE", "READING"]
---

Data objects can be specified as follows at [read positions](ABENREAD_POSITION_GLOSRY.html).

-   Specification of a [literal](ABENABAP_LITERAL_GLOSRY.html).
-   Specification of a [data object visible](ABENLIFETIME_AND_VISIBILITY.html) at this position using the identifier `dobj`, a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html)\\ `<fs>`, or a data reference `dref->*` dereferenced using the [dereferencing operator](ABENDEREFERENCING_OPERAT_GLOSRY.html)\\ `->*` if `dref` is typed completely.
-   Here, the identifiers of data objects also include the specification of [text symbols](ABENTEXT_SYMBOL_GLOSRY.html) using the following:
    \\
    `... text-idf ...`,
    \\
    Here, `idf` is the three-character ID of the text symbol or chaining of reference variables. If a field symbol is used, it must be assigned to a memory area and a data reference must point to a data object, otherwise an uncatchable exception is raised. As an alternative to specifying a text symbol using `text-idf`, the three-character ID of a text symbol can also be appended to the [text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html) in parentheses:
    \\
    `... '...'(idf) ...`\\
    \\
    If the text symbol exists in the currently loaded [text pool](ABENTEXT_POOL_GLOSRY.html), then the content of the corresponding text symbol is used instead of the text field literal, otherwise the literal is used.

-   If the data object is an internal table, the expressions `dobj[]`, `<fs>[]`, or `dref->*[]` can also be used. An exception to this is specification of the internal table of a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html), where `[]` cannot be appended to the name. When specifying `dobj[]`, this guarantees that the [table body](ABENTABLE_BODY_GLOSRY.html) is addressed and no possible [header lines](ABENHEADER_LINE_GLOSRY.html). If an internal table does not have a header line, its name `dobj` alone (without `[]`) is interpreted as the table body in all operand positions. However, if an internal table does have a header line, its name `dobj` alone (without `[]`) is interpreted as the header line and not as the table body in almost all operand positions. The operand positions in which the name of an internal table with a header line is interpreted as the internal table are listed in [internal tables with headers](ABENITAB_HEADER_LINE.html).
-   Specification of a [subarea](ABENOFFSET_LENGTH.html) of a character-like or byte-like data object -or a character-like initial part of a structure- by specifying an [offset/length](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html).
-   At some positions, numeric values must be specified directly as digits. In contrast to [numeric literals](ABENNUMERIC_LITERAL_GLOSRY.html), it is often not possible to specify a plus/minus sign. Examples are numbers specified in declarative statements for the length of elementary data objects or for the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) of internal tables.

-   Text symbols cannot be listed at all read positions. For example, they are not allowed for specifying the target of dynamic [executions](ABENABAP_EXECUTION.html).
-   A [system field](ABENSYSTEM_FIELD_GLOSRY.html) should only be specified as an operand in a read position if its content is not set by the same statement. Otherwise, this can lead to undefined system behavior.
-   The predicate expressions [`IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) and [`IS BOUND`](ABENLOGEXP_ASSIGNED.html) can be used to check the usability of field symbols and data references.
-   A data reference variable with a generic static type can only be deserialized using the statement [`ASSIGN dref->* TO <fs>`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html).
-   At many read positions, [functions or expressions](ABENOPERANDS_EXPRESSIONS.html) can be specified instead of data objects.
-   [Enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) with an [enumerated type](ABENENUM_TYPE_GLOSRY.html) can be used in all read positions in which the operand type is their enumerated type or in which the operand is converted to one of the character-like types `c` or `string`.

abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html