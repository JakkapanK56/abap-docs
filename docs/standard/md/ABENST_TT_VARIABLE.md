---
title: "ABENST_TT_VARIABLE"
description: |
  ABENST_TT_VARIABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_VARIABLE.htm"
abapFile: "ABENST_TT_VARIABLE.html"
keywords: ["if", "case", "method", "class", "data", "types", "ABENST", "VARIABLE"]
---

`<tt:variable name="..." [ref-type="..."]\                          [[s-val="..."][d-val="..."]]|[val="..."] />`

The statement `tt:variable` can be used to declare one or more variables in an ST program outside of a template. The attribute `name` is used to declare a symbolic name, which can be used to access the variable. This name can have a maximum of 30 characters.

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared with [`tt:root`](ABENST_TT_ROOT.html) and the parameters declared with [`tt:parameter`](ABENST_TT_PARAMETER.html).

The variables in the context of the [main template](ABENST_TT_TEMPLATE_MAIN.html) can be addressed directly. The variables of the main template are not known in [subtemplates](ABENST_TT_TEMPLATE_SUB.html).

Variables are data of the ST program that, unlike the data roots, are not bound to ABAP data objects.

`ref-type` can be used to define the variable as a reference variable. The value of `ref-type` determines the static type of the reference variable. All global ABAP classes and interfaces for an object reference variable are possible, as are data types for a data reference variable. The names of classes and interfaces are specified directly and without namespaces. The names of data types must be specified using an XML namespace that determines the context of the data type, as with [`tt:type`](ABENST_TT_TYPE.html). Class reference variables and interface reference variables are intended primarily for creating objects and calling instance methods. Data reference variables, however, are used for binding appropriately typed interface parameters when ABAP methods are called.

The additions `s-val` and `d-val` or `val` can be used to assign a start value to each variable. The values are specified as [ABAP values](ABENST_ABAP_REPRESENTATION.html). `s-val` only works for serialization, `d-val` only works for deserialization, and `val` works for serialization and deserialization.

Within a template, the statement [`tt:assign`](ABENST_TT_ASSIGN.html) can be used to assign a value to a variable. The variables area accessed using the attribute `var` of the various [ST statements](ABENST_STATEMENTS.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_programs\_structure.html abenst\_data\_declarations.html