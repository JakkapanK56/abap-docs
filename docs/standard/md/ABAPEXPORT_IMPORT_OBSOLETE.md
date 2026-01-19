---
title: "ABAPEXPORT_IMPORT_OBSOLETE"
description: |
  ABAPEXPORT_IMPORT_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_IMPORT_OBSOLETE.htm"
abapFile: "ABAPEXPORT_IMPORT_OBSOLETE.html"
keywords: ["select", "do", "if", "class", "data", "internal-table", "ABAPEXPORT", "IMPORT", "OBSOLETE"]
---

`[EXPORT](ABAPEXPORT_DATA_CLUSTER.html) dobj1 dobj2 ... TO [medium](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\ [COMPRESSION\{ON|OFF\}].  \  [IMPORT](ABAPIMPORT_DATA_CLUSTER.html) dobj1 dobj2 ...  FROM [medium](ABAPIMPORT_MEDIUM.html)\ [[conversion_options](ABAPIMPORT_CONVERSION.html)].`

If the parameter lists of the statements [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) or [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) use the short form
\\
`dobj1 dobj2 ...`\\
\\
instead of
\\
`p1 = dobj1 p2 = dobj2 ...`\\
\\
or
\\
`p1 FROM|TO dobj1 p2 FROM|TO dobj2`\\
\\
the parameters are stored or searched for implicitly in the cluster under the name of the specified data object.

This short form is only allowed outside of classes and only if the name does not contain an address specified using an [instance component selector](ABENINSTANCE_COMP_SELECTOR_GLOSRY.html) or an [offset/length specification](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html). If the short form is possible, it can be mixed with the correct form:

`dobj1 p2 = dobj2 ...`

This short form is prone to errors since the current name is used as an ID for the stored data. When imported into another context, the names of the exporting context must be known and specified identically.

If the parameter list is specified dynamically in an internal table `ptab`, the short form is also supported outside of classes by specifying a single-column table. Just like the static short form, this is now also obsolete.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendata\_cluster\_obsolete.html