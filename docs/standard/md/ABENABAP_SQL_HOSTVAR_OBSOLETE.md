---
title: "ABENABAP_SQL_HOSTVAR_OBSOLETE"
description: |
  ABENABAP_SQL_HOSTVAR_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_HOSTVAR_OBSOLETE.htm"
abapFile: "ABENABAP_SQL_HOSTVAR_OBSOLETE.html"
keywords: ["select", "if", "data", "ABENABAP", "SQL", "HOSTVAR", "OBSOLETE"]
---

The [host variables](ABENABAP_SQL_HOST_VARIABLES.html) of an ABAP SQL statement can still be specified without the escape character `@`, unless one of the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05 is in effect. This specification is obsolete. The escape character `@` must always be specified to distinguish ABAP data objects clearly from names in the database.

`SELECT` statement without an escape character in front of named ABAP data objects.

Recommended spelling with an escape character in front of named ABAP data objects.

SELECT \* \\n FROM spfli \\n INTO TABLE itab \\n WHERE carrid = carrid AND \\n connid = connid. SELECT \* \\n FROM spfli \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @itab. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenabap\_sql\_obsolete.html abenabap\_sql\_syntax\_obsolete.html