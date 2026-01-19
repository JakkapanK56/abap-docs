---
title: "ABAPIMPORT_SHORTREF"
description: |
  ABAPIMPORT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_SHORTREF.htm"
abapFile: "ABAPIMPORT_SHORTREF.html"
keywords: ["select", "do", "if", "catch", "data", "internal-table", "ABAPIMPORT", "SHORTREF"]
---

[Reference](ABAPIMPORT_DATA_CLUSTER.html)

`IMPORT \{\ \{p1 = dobj1 p2 = dobj2 ...\}\         |\ \{p1 TO dobj1  p2 TO dobj2 ...\}\         | (ptab) \}\    FROM \{\ \{ DATA BUFFER xstr \}\         |\ \{ INTERNAL TABLE itab \}\         |\ \{ MEMORY ID id \}\         |\ \{ DATABASE      dbtab(ar) [TO wa]\ [CLIENT cl]\                                     \{ID id\}|\{MAJOR-ID id1 [MINOR-ID id2]\}\ \}\         |\ \{ SHARED MEMORY dbtab(ar) [TO wa]\ [CLIENT cl] ID id \}\         |\ \{ SHARED BUFFER dbtab(ar) [TO wa]\ [CLIENT cl] ID id \}\ \}\         [\ \{\ \{\ \{\ \{[ACCEPTING PADDING]\ [ACCEPTING TRUNCATION]\}\               |  [IGNORING STRUCTURE BOUNDARIES]\ \}\               [ IGNORING CONVERSION ERRORS                 [REPLACEMENT CHARACTER rc]\ ]\ \}\           |\ [IN CHAR-TO-HEX MODE]\ \}\ ]\         [CODE PAGE INTO cp]\         [ENDIAN INTO endian].`

Imports a [data cluster](ABENDATA_CLUSTER_GLOSRY.html) into the data objects `dobj1`, `dobj2`, ...

-   [`\{p1 = dobj1 p2 = dobj2 ...\}|\{p1 TO dobj1 p2 TO dobj2 ...\}|(ptab)`](ABAPIMPORT_PARAMETERLIST.html)\\
    Selects the data to be read by statically specifying individual parameters using `p1 = dobj1 p2 = dobj2 ...` or `p1 TO dobj1 p2 TO dobj2 ...` or by specifying them dynamically in an internal table `ptab`.
-   [`DATA BUFFER xstr`](ABAPIMPORT_MEDIUM.html)\\
    Specifies a data cluster stored as a byte sequence in `xstr`.
-   [`INTERNAL TABLE itab`](ABAPIMPORT_MEDIUM.html)\\
    Specifies a data cluster stored in an internal table `itab`.
-   [`MEMORY`](ABAPIMPORT_MEDIUM.html)\\
    Specifies a data cluster stored in the [ABAP Memory](ABENABAP_MEMORY_GLOSRY.html).
-   [`DATABASE dbtab(ar) [CLIENT cl]`](ABAPIMPORT_MEDIUM.html)\\
    Specifies a data cluster stored in a database table `dbtab` in the area `ar` with the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html)\\ `cl`.
-   [`\{SHARED MEMORY\}|\{SHARED BUFFER\} dbtab(ar) [CLIENT cl]`](ABAPIMPORT_MEDIUM.html)\\
    Specifies a data cluster stored in an application buffer in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) addressed using the name of a database table `dbtab`, an area `ar`, and a client ID `cl`. These two alternatives have different displacement mechanisms.
-   [`ID id`](ABAPIMPORT_MEDIUM.html)\\
    Specifies the identifier `id` of the [data cluster](ABENDATA_CLUSTER_GLOSRY.html).
-   [`MAJOR-ID id1 [MINOR-ID id2]`](ABAPIMPORT_OBSOLETE_ID.html)\\
    **Obsolete:** Specifies the identification `id` of a data cluster in database tables using a pattern.
-   [`TO wa`](ABAPIMPORT_MEDIUM.html)\\
    Specifies a work area `wa` for including details about the data cluster.
-   [`ACCEPTING PADDING`](ABAPIMPORT_CONVERSION.html)\\
    Enables data to be exported to longer target fields.
-   [`ACCEPTING TRUNCATION`](ABAPIMPORT_CONVERSION.html)\\
    Enables data to be exported to shorter target fields.
-   [`IGNORING STRUCTURE BOUNDARIES`](ABAPIMPORT_CONVERSION.html)\\
    Enables data to be exported to structures with different boundaries.
-   [`IGNORING CONVERSION ERRORS [REPLACEMENT CHARACTER rc]`](ABAPIMPORT_CONVERSION.html)\\
    Suppresses uncatchable exceptions when converting to the target [code page](ABENCODEPAGE_GLOSRY.html), where `rc` specifies a replacement character for characters that cannot be converted.
-   [`IN CHAR-TO-HEX MODE`](ABAPIMPORT_CONVERSION.html)\\
    Enables character-like data to be exported to byte sequences.
-   [`CODE PAGE INTO cp`](ABAPIMPORT_CONVERSION.html)\\
    Returns the code page for the data cluster in `cp`.
-   [`ENDIAN INTO endian`](ABAPIMPORT_CONVERSION.html)\\
    Returns the byte order of the data cluster in `endian`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html