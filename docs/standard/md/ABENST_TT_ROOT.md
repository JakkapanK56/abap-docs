---
title: "ABENST_TT_ROOT"
description: |
  ABENST_TT_ROOT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_ROOT.htm"
abapFile: "ABENST_TT_ROOT.html"
keywords: ["loop", "do", "if", "case", "class", "data", "types", "internal-table", "ABENST", "ROOT"]
---

`<tt:root name="..." [[line-]type="..."                      [length="..."]\                      [decimals="..."]]\                      [...] />`

To be able to access ABAP data, an ST program must contain at least one declaration of a data root outside a template. The data roots are the interfaces of the ST program to the ABAP data objects, specified in the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) as source or target fields. Data roots are defined using the statement `tt:root`. A name must be assigned to the data root with the `name` attribute. It can be typed with the attribute `[line-]type`.

The data roots declared on the [`tt:transform`](ABENST_TT_TRANSFORM.html) level form the context of the [main template](ABENST_TT_TEMPLATE_MAIN.html) and can be addressed directly within it. The data roots are not recognized in [subtemplates](ABENST_TT_TEMPLATE_SUB.html). However, they can be bound to the local data roots of subtemplates when these templates are [called](ABENST_TT_APPLY.html).

An ST program that does not contain a data root describes a constant XML fragment that does not access ABAP data. In the statement `CALL TRANSFORMATION`, the syntax requires source fields or target fields to be specified. Data objects specified when ST programs are called without data roots are ignored in serializations and not changed in deserializations. The example for [literal texts](ABENST_TT_TEXT.html) uses ST programs without data roots.

The attribute `name` is used to declare a symbolic name that can be bound to an ABAP data object. This binding is achieved by assigning these names as `bni` to the data object `ei` in serializations or to `fi` in deserializations in the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared using [`tt:parameter`](ABENST_TT_PARAMETER.html) and the parameters declared using [`tt:variable`](ABENST_TT_VARIABLE.html). No data roots other than the ones specified here can be used in the statement `CALL TRANSFORMATION`.

The data root can be typed with a data type using the attribute `type` or `line-type` of `tt:root`. Whereas `type` directly specifies the type, `line-type` means that it is an internal table of the named type.

For data roots without explicit typing, no checks are made until the transformation is executed. Explicit typing is used to check the ST program statically. Examples of invalid operations that can be recognized by the compiler are:

Elementary ABAP types, types from the repository, and types of the same ST program that are defined using [`tt:type`](ABENST_TT_TYPE.html) can be specified as the value of `[line-]type`. The same restrictions apply to the type specifications as to the type statement [`tt:value`](ABENST_TT_TYPE.html).

Access to a data root is described under [Addressing the Data Roots](ABENST_ADDRESSING_ROOT_NODE.html). [Serializations and deserializations](ABENST_SERIAL_DESERIAL.html) are subject to the general restriction that the content of a data root cannot be modified by serialization and only writes can be performed on a data root in deserializations.

Six data roots including typing are declared in the following transformation. The data root `R1` has the elementary ABAP type `d`, `R2` has the type *internal table with elementary line type `i`*, `R3` has the type `SCARR` from the ABAP Dictionary, `R4` has the type `ABAP_BOOL` from the type pool `ABAP`, and `R5` is a table of line type `TYP` defined in the global class `CL_DEMO_ABAP_DOC`. The type of `R6` is defined as the name `STRUCT` in the transformation itself.

-   Access to a nonexistent structure component
-   Loop across a non-table-like node
-   Handling a structured node as elementary

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_programs\_structure.html abenst\_data\_declarations.html