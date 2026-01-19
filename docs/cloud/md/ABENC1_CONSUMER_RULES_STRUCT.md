---
title: "Includes"
description: |
  Including a released structure into another structure.  Possible Problems Error, when a component is added that already exists.  Mitigation Include a released structure only by renaming its components with suffixes(ABENDDIC_INCLUDE_STRUCTURE.html). Assignments and comparisons between d
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENC1_CONSUMER_RULES_STRUCT.htm"
abapFile: "ABENC1_CONSUMER_RULES_STRUCT.html"
keywords: ["if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENC1", "CONSUMER", "RULES", "STRUCT"]
---

API providers can add or change non-key elements in global types as structured DDIC types or CDS entities. These types can be released APIs themselves or can be used for typing attributes or method parameters of released classes or interfaces. Also the position of non-key elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

Includes

Including a released structure into another structure.

\\ **Possible Problems**

Error, when a component is added that already exists.

\\ **Mitigation**

Include a released structure only by renaming its components with [suffixes](ABENDDIC_INCLUDE_STRUCTURE.html).

Assignments and comparisons between data objects that are typed with the released structured type and data objects that are typed otherwise can occur for:

**Possible Problems**

Depending on the change all kinds of errors might occur. The following allowed changes in particular can affect the rules for processing structures fundamentally:

**Mitigation**

No assignments or comparisons between released structures and data objects that are typed otherwise. No usage of otherwise defined structures in ABAP SQL. The various `CORRESPONDING` mechanisms can be used to mitigate the problem, but they are not failsafe in all situations.

Processing the content of a released structure without addressing single components as for example:

**Possible Problems**

Depending on the change (see above) all kinds of errors might occur.

**Mitigation**

No processing of released structures without accessing single

components.

Addressing released structures with [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) by using:

**Possible Problems**

When the addition [`CASTING`](ABAPASSIGN_CASTING.html) is used, deep components must appear with exactly the same type and position in the assigned structure.

**Mitigation**

No casting assignment of released structures to field symbols.

Passing released structures to remote RFMs.

**Possible Problems**

Deep components are not supported in RFC.

**Mitigation**

No passing of released structures to remote RFMs.

-   [Logical Expressions](ABENLOGEXP.html)
-   [Assignments](ABENVALUE_ASSIGNMENTS.html)
-   [Working with internal tables](ABENITAB.html)
-   [ABAP SQL](ABENABAP_SQL.html)
-   [Working with data clusters](ABENDATA_CLUSTER.html)

-   Adding numeric components to a formerly character-like structure.
-   Adding [deep](ABENDEEP_GLOSRY.html) components to a formerly [flat](ABENFLAT_GLOSRY.html) structure.
-   Shifting the positions of numeric or deep components to formerly character-like sections.

-   [Offset/Length Specifications](ABENOFFSET_LENGTH.html)
-   [String processing](ABENABAP_DATA_STRING.html) (on complete structure)

-   [`ASSIGN`](ABAPASSIGN.html)
-   `ASSIGNING` addition when [working with internal tables](ABENITAB.html)

abenabap.html abenabap\_versions\_and\_apis.html abenabap\_release\_contracts.html abenconsumer\_rules.html