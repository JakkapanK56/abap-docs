---
title: "ABAPTYPES_CLIENT_SPECIFIED"
description: |
  ABAPTYPES_CLIENT_SPECIFIED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_CLIENT_SPECIFIED.htm"
abapFile: "ABAPTYPES_CLIENT_SPECIFIED.html"
keywords: ["if", "data", "types", "ABAPTYPES", "CLIENT", "SPECIFIED"]
---

`TYPES dtype TYPE cds_entity CLIENT SPECIFIED clnt.`

With the addition `CLIENT SPECIFIED` the statement `TYPES` defines a structured type constructed from all components of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html)\\ `cds_entity` and an additional first component `clnt` with the type of a [client column](ABENCLIENT_COLUMN_GLOSRY.html).

`cds_entity` expects the name of a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html)\\ [CDS entity](ABENCDS_ENTITY_GLOSRY.html), namely:

as defined in the corresponding [`DEFINE`](ABENCDS_F1_DDL_SYNTAX.html) statement of the [CDS DDL](ABENCDS_DDL_GLOSRY.html).

Any name for the client column that follows the [naming conventions](ABENNAMING_CONVENTIONS.html) can be specified for `clnt`.

Defining a structure with the components of type `DEMO_CDS_SCARR_ENTITY` and an additional column `MANDT`.

-   [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)
-   The name of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   The name of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)

-   The name specified for `clnt` is completely independent of the actual name of a client column in a data source of a CDS view.
-   Abstract [CDS](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) entities cannot be specified.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES \\n demo\_cds\_scarr\_entity\_mandt TYPE demo\_cds\_scarr\_entity \\n CLIENT SPECIFIED mandt. \\n\\ \\nout->write( \\n CAST cl\_abap\_structdescr( cl\_abap\_typedescr=>describe\_by\_name( \\n 'DEMO\_CDS\_SCARR\_ENTITY\_MANDT' ) )->get\_components( ) ). \\n\\ \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html