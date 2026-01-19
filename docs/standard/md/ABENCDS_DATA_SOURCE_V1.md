---
title: "ABENCDS_DATA_SOURCE_V1"
description: |
  ABENCDS_DATA_SOURCE_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DATA_SOURCE_V1.htm"
abapFile: "ABENCDS_DATA_SOURCE_V1.html"
keywords: ["select", "if", "data", "ABENCDS", "DATA", "SOURCE"]
---

``... entity[[`parameters`](ABENCDS_SELECT_PARAMETERS_V1.html)]|[`path_expr`](ABENCDS_PATH_EXPRESSION_V1.html)\ [[AS] alias]\ [[`join`](ABENCDS_JOINED_DATA_SOURCE_V1.html)] ...``

Defines a data source of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). A data source can be a DDIC database table defined in ABAP Dictionary, a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html), an [DDIC external view](ABENEXTERNAL_VIEW_GLOSRY.html), a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

Defines the CDS view `demo_business_partner_1` for the DDIC database table `snwd_bpa`, for which an alternative name `partner` is specified. This name is used in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html).

`as` can also be omitted in front of the alternative name `partner`. The following example demonstrates another valid spelling that is potentially confusing:

-   The data source is specified either directly using its name `entity` or using a path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V1.html) in which [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) are evaluated. [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) are not possible as association target of the path expression.
-   If the data source is a CDS entity with a [list of input parameters](ABENCDS_PARAMETER_LIST_V1.html), actual parameters must be passed to these using [`parameters`](ABENCDS_SELECT_PARAMETERS_V1.html).
-   An alternative name `alias` for a directly specified data source can be defined after `AS`. It is also possible to define an alias name without the keyword `AS` (see example below). If a path expression is used, an alternative name **must** be defined. The name must comply with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html).
-   The syntax [`JOIN`](ABENCDS_JOINED_DATA_SOURCE_V1.html) can be used to combine multiple data sources as [joins](ABENJOIN_GLOSRY.html).

@AbapCatalog.sqlViewName: 'DEMO\_BPA\_1'\\ndefine view DEMO\_BUSINESS\_PARTNER\_1 as\\n select from snwd\_bpa as partner\\n \\{ key partner.bp\_id,\\n partner.company\_name,\\n partner.bp\_role \\}\\n @AbapCatalog.sqlViewName: 'DEMO\_BPA\_2'\\ndefine view DEMO\_BUSINESS\_PARTNER\_2 as\\n select from snwd\_bpa\\n partner\\{ key partner.bp\_id,\\n partner.company\_name,\\n partner.bp\_role \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html