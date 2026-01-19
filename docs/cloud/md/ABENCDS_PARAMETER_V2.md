---
title: "ABENCDS_PARAMETER_V2"
description: |
  ABENCDS_PARAMETER_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PARAMETER_V2.htm"
abapFile: "ABENCDS_PARAMETER_V2.html"
keywords: ["select", "if", "ABENCDS", "PARAMETER"]
---

`... $parameters.pname ...`

Specifies an input parameter `pname` from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V2.html) in an operand position of a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

The name of the parameter `pname` must be prefixed by `$parameters.`.

The view shown below defines two parameters, `p1` and `p2`, and uses them in the `SELECT` list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.entityBuffer.propagationAllowed:true\\ndefine view entity DEMO\_CDS\_PARAM\_VE\\n with parameters\\n p\_p1 : abap.int4,\\n p\_p2 : abap.int4\\n as select from scarr\\n\\{\\n key carrid,\\n $parameters.p\_p1 as param1,\\n $parameters.p\_p2 as param2\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html