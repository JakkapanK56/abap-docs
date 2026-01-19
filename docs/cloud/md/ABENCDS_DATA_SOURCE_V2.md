---
title: "ABENCDS_DATA_SOURCE_V2"
description: |
  ABENCDS_DATA_SOURCE_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DATA_SOURCE_V2.htm"
abapFile: "ABENCDS_DATA_SOURCE_V2.html"
keywords: ["select", "if", "data", "ABENCDS", "DATA", "SOURCE"]
---

``... entity[[`parameters`](ABENCDS_SELECT_PARAMETERS_V2.html)]|[`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html)\ [AS alias]\ [[`join`](ABENCDS_JOINED_DATA_SOURCE_V2.html)] ...``

Defines a data source of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). A data source can be a [DDIC database table](ABENDDIC_DATABASE_TABLES.html), a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

Defines the CDS view entity `DEMO_CDS_DATA_SOURCE` with two data sources:

-   The data source is specified either directly using its name `entity` or using a path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html) in which [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) are evaluated. [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) are not possible as association target of the path expression.
-   If the data source is a CDS entity with a [list of input parameters](ABENCDS_PARAMETER_LIST_V2.html), actual parameters must be passed to these using [`parameters`](ABENCDS_SELECT_PARAMETERS_V2.html).
-   An [alias name](ABENALIAS_GLOSRY.html)\\ `alias` for a directly specified data source can be defined after `AS`. The name must comply with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html).
-   The syntax [`JOIN`](ABENCDS_JOINED_DATA_SOURCE_V2.html) can be used to combine multiple data sources as [joins](ABENJOIN_GLOSRY.html).

-   If the data source after `FROM` is specified as a path expression and if, additionally, the view defines an association, then there is a conflict because in the `ON` condition of an association, it is not possible to specify a path expression. To prevent this conflict, the following options are available:

-   Use the `$projection` syntax in the `ON` condition
-   Assign an alias name to the data source
-   Resolve the path expression and use the association target as prefix in the `ON` condition.

-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

-   The first data source `demo_cds_param_view_entity` requires values for three input parameters. It is assigned the alias name `source1`. To use this data source in the `SELECT` list, the alias name `source1` must be used as prefix.
-   The second data source `scarr` is defined using an inner join. It is assigned the alias name `_source2`. To use this data source in the `SELECT` list, the alias name `_source2` must be used as prefix.

@EndUserText.label: 'CDS view entity data source example'\\ndefine view entity DEMO\_CDS\_DATA\_SOURCE\\n as select from Demo\_Cds\_Param\_View\_Entity\\n ( p\_distance\_l:12, p\_distance\_u:23, p\_unit:'kms' ) \\n as source1\\n inner join scarr as \_source2\\n on source1.carrid = \_source2.carrid\\n \\{ \\n key source1.carrid,\\n key source1.connid,\\n source1.cityfrom,\\n source1.cityto,\\n source1.distance,\\n source1.distid,\\n //scarr\\n \_source2.carrname,\\n \_source2.currcode,\\n \_source2.url\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html