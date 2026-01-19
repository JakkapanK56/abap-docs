---
title: "ABAPCALL_TRANSFORMATION_SHORTREF"
description: |
  ABAPCALL_TRANSFORMATION_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_TRANSFORMATION_SHORTREF.htm"
abapFile: "ABAPCALL_TRANSFORMATION_SHORTREF.html"
keywords: ["if", "class", "data", "internal-table", "ABAPCALL", "TRANSFORMATION", "SHORTREF"]
---

[Reference](ABAPCALL_TRANSFORMATION.html)

`CALL TRANSFORMATION \{trans|(name)\}`\\ 
                    `[PARAMETERS \{p1 = e1 p2 = e2 ...\}|(ptab)]`\\ 
                    `[OBJECTS    \{o1 = e1 o2 = e2 ...\}|(otab)]`\\ 
                    `[OPTIONS    \{a1 = e1 a2 = e2 ...\}]`\\ 
                    `SOURCE \{XML src_xml\}\                           |\ \{\{bn1 = e1 bn2 = e2 ...\}|(stab)\}`\\ 
                    `RESULT \{XML rslt_xml\}\                           |\ \{\ \{bn1 = f1 bn2 = f2 ...\}|(rtab)                               [AREA HANDLE handle]\ \}.`

Calls an [XSL transformation](ABENXSL_TRANSFORMATION_GLOSRY.html) or [Simple Transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) specified statically in `trans` or specified dynamically in `name`. The call of the predefined transformation [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` serializes ABAP data into the [asXML](ABENASXML_GLOSRY.html) format.

-   `PARAMETERS \{p1 = e1 p2 = e2 ...\}|ptab`\\
    Passes parameters specified individually as `p1 = e1 p2 = e2 ...` or specified in an internal table `ptab` to the transformation.
-   [`OBJECTS \{o1 = e1 o2 = e2 ...\}|otab`](ABAPCALL_TRANSFORMATION_OBJECTS.html)\\
    **Obsolete**: Passes object references specified individually as `o1 = e1 o2 = e2 ...` or specified in an internal table `otab` to the transformation.
-   `OPTIONS \{a1 = e1 a2 = e2 ...\}`\\
    Passes control parameters to the transformation.
-   `SOURCE \{XML src_xml\}|\{\{bn1 = e1 bn2 = e2 ...\}|(stab)\}`\\
    Specifies the source to be transformed. This can be [XML](ABENXML_GLOSRY.html) data in `src_xml` or data objects specified individually as `bn1 = e1 bn2 = e2 ...` or specified in an internal table `stab`.
-   `RESULT \{XML rslt_xml\}|\{\{bn1 = f1 bn2 = f2 ...\}|(rtab)\}`\\
    Specifies the repository of the transformation result. This can be XML data in `rslt_xml` or data objects specified individually as `bn1 = f1 bn2 = f2 ...` in an internal table `rtab`.
-   `AREA HANDLE handle`\\
    Instantiates anonymous data objects and instances of classes that are deserialized from XML data with an XSL transformation directly as [shared objects](ABENSHARED_OBJECTS_GLOSRY.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the AS instance.

abenabap.html abenabap\_reference.html abenabap\_shortref.html