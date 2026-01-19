---
title: "ABENNEWS-781-DDIC"
description: |
  ABENNEWS-781-DDIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-781-DDIC.htm"
abapFile: "ABENNEWS-781-DDIC.html"
keywords: ["delete", "do", "data", "types", "ABENNEWS", "781", "DDIC"]
---

The internal handling of the [name table (nametab)](ABENNAME_TABLE_GLOSRY.html) that stores the DDIC runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [`EXPORT NAMETAB`](ABAPEXPORT_NAMETAB.html) cannot be used any more and leads to a DDIC runtime error.
-   The internal ABAP statement [`IMPORT NAMETAB`](ABAPIMPORT_NAMETAB.html) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](ABENDDIC_TABLE_TYPE_GLOSRY.html) leads to a runtime error. Any other access leads to errors from [ATC](ABENATC_GLOSRY.html).
-   The former native database table `DDNTF` for separate nametab field descriptions is not supported any more and will be deleted.

abenabap.html abennews.html abennews-78.html abennews-781.html