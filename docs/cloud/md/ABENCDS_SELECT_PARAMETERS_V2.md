---
title: "ABENCDS_SELECT_PARAMETERS_V2"
description: |
  ABENCDS_SELECT_PARAMETERS_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SELECT_PARAMETERS_V2.htm"
abapFile: "ABENCDS_SELECT_PARAMETERS_V2.html"
keywords: ["select", "if", "class", "data", "types", "ABENCDS", "SELECT", "PARAMETERS"]
---

`... ( pname1 : act1, pname2 : act2, ... ) ...`

Passes actual parameters `act1`, `act2`, ... to the [input parameters](ABENCDS_F1_PARAM.html)\\ `pname1`, `pname2`, ... of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

The following can be specified for actual parameters:

The data types of the actual parameters should match the [typing](ABENCDS_TYPING.html) of the input parameters exactly. However the following options are also possible:

The following CDS view entity uses the CDS view entity `demo_cds_parameters_ve` in a join. The input parameters of this view are supplied with the input parameters of the current view as actual parameters. The class `CL_DEMO_CDS_PARAMETERS_JOIN_VE` uses `SELECT` to access the view. Here the input parameters are supplied with actual parameters.

The following CDS view entity demonstrates parameter passing in a [path expression](ABENCDS_PATH_EXPRESSION_V2.html).

-   [Literals](ABENCDS_LITERAL_V2.html)
-   [Parameters](ABENCDS_PARAMETER_V2.html)
-   [Session variables](ABENCDS_SESSION_VARIABLE_V2.html)
-   [CDS enumerated constants](ABENCDS_ENUM_FIELD_V2.html)

-   bind character-like actual parameters to character-like input parameters with a different length.
-   bind numeric actual parameters to numeric input parameters with a greater value range.

-   Currently, actual parameters can be passed to the input parameters of [CDS views](ABENCDS_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) used as data sources of the `SELECT` statement.
-   If a CDS table function is used as [data source](ABENCDS_DATA_SOURCE_V2.html) after `FROM`, the input parameters and the corresponding actual parameters can also have data type `abap.string`. This has been enabled to avoid length restrictions in spatial scenarios, such as the SAP Geo Framework.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_PARAMETERS\_JOIN\_VE\\n with parameters\\n in\_distance\_l :s\_distance,\\n in\_distance\_u :s\_distance,\\n in\_unit :s\_distid\\n as select from demo\_cds\_parameters\\n ( p\_distance\_l : $parameters.in\_distance\_l,\\n p\_distance\_u : $parameters.in\_distance\_u,\\n p\_unit : $parameters.in\_unit ) as flights\\n join scarr on scarr.carrid = flights.carrid\\n\\{\\n key scarr.carrname,\\n key flights.connid,\\n flights.cityfrom,\\n flights.cityto,\\n flights.distance,\\n flights.distid\\n\\}\\n @AbapCatalog.viewEnhancementCategory: \[#NONE\]\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity'\\n\\ndefine view entity DEMO\_CDS\_PARAMETER\_PASSING\\n as select from demo\_ddic\_types\\n\\n association of many to many Demo\_Cds\_Param\_View\_Entity as \_assoc \\n on 1 = 1\\n\\{\\n key id as Id,\\n int1 as Int1,\\n int2 as Int2,\\n int4 as Int4,\\n int8 as Int8,\\n \_assoc(p\_distance\_l: 15, p\_distance\_u:16, p\_unit:'KM').carrid \\n as MyField\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html