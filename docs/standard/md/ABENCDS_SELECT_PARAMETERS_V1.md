---
title: "ABENCDS_SELECT_PARAMETERS_V1"
description: |
  ABENCDS_SELECT_PARAMETERS_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SELECT_PARAMETERS_V1.htm"
abapFile: "ABENCDS_SELECT_PARAMETERS_V1.html"
keywords: ["select", "if", "class", "data", "types", "ABENCDS", "SELECT", "PARAMETERS"]
---

`... ( pname1 : act1, pname2 : act2, ... ) ...`

Passes actual parameters `act1`, `act2`, ... to the [input parameters](ABENCDS_F1_PARAM.html)\\ `pname1`, `pname2`, ... of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html).

The following can be specified for actual parameters:

The data types of the actual parameters should match the [typing](ABENCDS_TYPING.html) of the input parameters exactly. However the following options are also possible:

Currently, actual parameters can be passed to the input parameters of [CDS views](ABENCDS_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) used as data sources of the `SELECT` statement.

The following CDS view uses the CDS view `demo_cds_parameters` in a join. The input parameters of this view are supplied with the input parameters of the current view as actual parameters. The class `CL_DEMO_CDS_PARAMETERS_JOIN` uses `SELECT` to access the view. Here the input parameters are supplied with actual parameters.

-   [Literals](ABENCDS_LITERAL_V1.html)
-   [Parameters](ABENCDS_PARAMETER_V1.html)
-   [Session variables](ABENCDS_SESSION_VARIABLE_V1.html)

-   bind character-like actual parameters to character-like input parameters with a different length.
-   bind numeric actual parameters to numeric input parameters with a greater value range.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PARJOIN'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_parameters\_join\\n with parameters\\n in\_distance\_l :s\_distance,\\n in\_distance\_u :s\_distance,\\n in\_unit :s\_distid\\n as select from\\n demo\_cds\_parameters\\n ( p\_distance\_l : $parameters.in\_distance\_l,\\n p\_distance\_u : $parameters.in\_distance\_u,\\n p\_unit : $parameters.in\_unit ) as flights\\n join scarr on\\n scarr.carrid = flights.carrid\\n \\{\\n key scarr.carrname,\\n key flights.connid,\\n flights.cityfrom,\\n flights.cityto,\\n flights.distance,\\n flights.distid\\n \\}; \\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html