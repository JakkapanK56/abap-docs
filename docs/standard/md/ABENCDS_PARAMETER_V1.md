---
title: "ABENCDS_PARAMETER_V1"
description: |
  ABENCDS_PARAMETER_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PARAMETER_V1.htm"
abapFile: "ABENCDS_PARAMETER_V1.html"
keywords: ["select", "if", "ABENCDS", "PARAMETER"]
---

`... :pname|$parameters.pname ...`

Specifies an input parameter `pname` from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html) in an operand position of a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

The name of the parameter `pname` must be prefixed by a colon (`:`) or `$parameters.`.

Specifies the parameters `p1` and `p2` using both syntax options in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html).

@AbapCatalog.sqlViewName: 'DEMO\_SPFLI\_PROJ'\\ndefine view DEMO\_SPFLI\_PROJECTION\_V1\\n with parameters p1 : abap.int4,\\n p2 : abap.int4 as\\n select from scarr\\n \\{ key carrid,\\n :p1 as para1,\\n $parameters.p2 as para2\\n \\};\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_operands\_v1.html