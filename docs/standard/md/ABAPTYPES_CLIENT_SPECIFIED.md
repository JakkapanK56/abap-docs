---
title: "ABAPTYPES_CLIENT_SPECIFIED"
description: |
  ABAPTYPES_CLIENT_SPECIFIED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_CLIENT_SPECIFIED.htm"
abapFile: "ABAPTYPES_CLIENT_SPECIFIED.html"
keywords: ["select", "if", "method", "data", "types", "internal-table", "ABAPTYPES", "CLIENT", "SPECIFIED"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)

`TYPES dtype TYPE cds_entity CLIENT SPECIFIED clnt.`

With the addition `CLIENT SPECIFIED` the statement `TYPES` defines a structured type constructed from all components of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html)\\ `cds_entity` and an additional first component `clnt` with the type of a [client column](ABENCLIENT_COLUMN_GLOSRY.html).

`cds_entity` expects the name of a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html)\\ [CDS entity](ABENCDS_ENTITY_GLOSRY.html), namely:

as defined in the corresponding [`DEFINE`](ABENCDS_F1_DDL_SYNTAX.html) statement of the [CDS DDL](ABENCDS_DDL_GLOSRY.html).

Any name for the client column that follows the [naming conventions](ABENNAMING_CONVENTIONS.html) can be specified for `clnt`.

Defines a line type `scarr_spfli_clnt` for an internal table that is used as a target area when a client-dependent CDS view is accessed using the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) of the `SELECT` statement. If the addition `CLIENT SPECIFIED` of the statement `TYPES` is not used, the column `clnt` would not exist in the table `scarr_spfli_clnt` and could not be used as a target range.

The following example shows how the recommended addition [`USING ALL CLIENTS`](ABAPSELECT_CLIENT.html) is used, for which no special target area is required.

-   [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)
-   The name of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   The name of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)

-   The name specified for `clnt` is completely independent of the actual name of a client column in a data source of a CDS view.
-   Abstract [CDS](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) entities cannot be specified.
-   A structure of a type defined using this statement can be used as a work area of a [`SELECT`](ABAPSELECT.html) statement for CDS entities in which [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is disabled using the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html).
-   If the statement is used for a [client-dependent CDS table function](ABENCDS_FUNC_CLIENT_HANDLING.html), a structured type is produced that matches the line structure of the return value of the associated [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html).

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt. \\n\\ \\nDATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY. \\n\\ \\nSELECT \* \\n FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED \\n INTO TABLE @scarr\_spfli\_clnt. DATA scarr\_spfli TYPE TABLE OF demo\_cds\_scarr\_spfli WITH EMPTY KEY. \\n\\ \\nSELECT \* \\n FROM demo\_cds\_scarr\_spfli USING ALL CLIENTS \\n INTO TABLE @scarr\_spfli. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html