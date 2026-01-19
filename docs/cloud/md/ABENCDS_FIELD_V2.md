---
title: "ABENCDS_FIELD_V2"
description: |
  ABENCDS_FIELD_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_FIELD_V2.htm"
abapFile: "ABENCDS_FIELD_V2.html"
keywords: ["select", "if", "case", "try", "data", "ABENCDS", "FIELD"]
---

`... [entity.]field|[alias.]field ...`

Defines a [CDS source field](ABENCDS_FIELD_GLOSRY.html) in an operand position of a CDS entity. A CDS source field is a field of a [data source](ABENCDS_DATA_SOURCE_V2.html)\\ `entity` of the current [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). `field` expects the actual name of the element. Any alternative element names defined using [`AS`](ABENCDS_SELECT_LIST_ENTRY_V2.html) cannot be used, with the exception of the `ON` condition of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html).

If the view entity makes use of multiple [data sources](ABENCDS_DATA_SOURCE_V2.html) by using join expressions, then all fields must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

For fields that are included via associations, special rules apply. See topic [CDS DDL - CDS View Entity, `path_expr`](ABENCDS_PATH_EXPRESSION_V2.html).

The CDS view entity `DEMO_CDS_SCARR_SPFLI_2` defines a join and therefore, all fields from the `SELECT` list must be prefixed by the name of their data source.

The second CDS view entity shown below, `DEMO_CDS_FIELDS_ASSOC_VE`, defines an association and all fields of the association target that are used in the `SELECT` list must by prefixed by the name of the data source.

@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine view entity DEMO\_CDS\_SCARR\_SPFLI\_2\\n as select from spfli\\n join scarr\\n on scarr.carrid = spfli.carrid\\n \\{\\n key spfli.carrid as id,\\n key scarr.carrname as carrier,\\n key spfli.connid as flight,\\n spfli.cityfrom as departure,\\n spfli.cityto as destination\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_FIELDS\_ASSOC\_VE\\n as select from spfli\\n association to scarr as \_scarr\\n on spfli.carrid = \_scarr.carrid\\n \\{\\n key carrid,\\n key connid,\\n airpfrom,\\n airpto,\\n \_scarr.carrname,\\n \_scarr.url\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html