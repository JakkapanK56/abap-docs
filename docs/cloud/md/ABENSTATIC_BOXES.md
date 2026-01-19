---
title: "ABENSTATIC_BOXES"
description: |
  ABENSTATIC_BOXES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTATIC_BOXES.htm"
abapFile: "ABENSTATIC_BOXES.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "field-symbol", "ABENSTATIC", "BOXES"]
---

Static boxes are [boxed components](ABENBOXED_COMPONENTS.html) whose components are known statically, and which are subject to [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html). Declarations of static boxes generally require less memory for structures that occur multiple times but are rarely used.

The following can currently be declared as static boxes:

A static box can have one of two states:

In initial value sharing, the memory required for the internal session of a static box is not defined at the start of program execution. However, unlike in real [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html), the length of a static box is always known statically. Static boxes can be used in the same way as a regular component of the same type. When a structure that contains a static box is accessed, however, it should be ensured that it is a deep component.

Declaration of a substructure `scarr` as a static box.

-   Substructures of structured data with the addition [`BOXED`](ABAPTYPES_BOXED.html) of the statement [`TYPES`](ABAPTYPES.html).
-   Structured attributes of classes or interfaces with the addition [`BOXED`](ABAPDATA_BOXED.html) of the statement [`[CLASS-]DATA`](ABAPDATA.html).

-   **Initial value sharing**
-   As long as none of the actions named in the following point have been executed, initial value sharing applies to a static box. The internal reference refers to a type-dependent initial value of the structure, which is stored exactly once for each [AS instance](ABENAS_INSTANCE_GLOSRY.html) in its [PXA](ABENPXA_GLOSRY.html). The memory requirement in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is determined only by the internal reference and its [administration](ABENMEMORY_CONSUMPTION.html).
-   **Cancelled initial value sharing**
-   The following actions cancel initial value sharing for a static box:

-   Writes to the static box or one of its components.
-   Assigning the static box or one of its components to a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html) using [`ASSIGN`](ABAPASSIGN.html).
-   Addressing the static box or one of its components using a [data reference](ABENDATA_REFERENCE_GLOSRY.html).
-   Using a static box or one of its components as an [actual parameter](ABENACTUAL_PARAMETER_GLOSRY.html) for procedure calls.

-   The internal reference then refers to an instance of the structure in the current internal session. The memory requirement is the same as for a regular structure plus the administration costs for the internal reference.

-   Static boxes can be used to optimize the memory requirement of structures that are used more than once. If, for example, the line structure of an internal table contains substructures, the memory requirement of the substructure accumulates without the use of static boxes for each line, even if the substructure is initial. If static boxes are used, initial substructures do not require multiple memories as long as only reads are performed.
-   In addition to the optimized memory requirements, static boxes generally have a positive impact on runtime performance, since assignments between components for which initial value sharing is active only require the internal reference (and no additional data) to be copied.
-   The statements `CLEAR` and `FREE` do not affect a static box that has the initial value sharing state like a write statement and the state is retained. On the other hand, once the initial value sharing state is cancelled, these statements do not currently free up any memory and provide the local instance of the static box with type-specific initial values instead.
-   Boxes are allocated memory in the following cases:

-   When there is a write access to (one of) their components
-   When a field symbol is assigned or a data reference points to (one of) their components

TYPES: \\n BEGIN OF struct, \\n comp TYPE c LENGTH 10, \\n scarr TYPE scarr BOXED, \\n END OF struct. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendata\_objects\_structure.html abenboxed\_components.html