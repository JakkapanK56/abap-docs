---
title: "ABENCDS_DATA_SOURCE_MATRIX"
description: |
  ABENCDS_DATA_SOURCE_MATRIX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DATA_SOURCE_MATRIX.htm"
abapFile: "ABENCDS_DATA_SOURCE_MATRIX.html"
keywords: ["do", "if", "data", "ABENCDS", "DATA", "SOURCE", "MATRIX"]
---

The following tables show all possible data sources of all available [CDS entities](ABENCDS_ENTITY_GLOSRY.html):

Content:

The following table lists all available CDS entities and which data sources they accept after `FROM`, both directly and joined via a join.

**Note**\\ [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) can define a [join](ABENJOIN_GLOSRY.html) between two data sources. The data sources that can be specified directly after *FROM* and by means of a join are the same. There is no difference.

The following table lists all CDS entities that can define CDS associations and shows which other entities they accept as association target.

**Note** The table is only about *defining* associations and not about exposing associations.

The following table lists all CDS entities that can define CDS compositions and shows with which entity they can be connected via a parent-child relationship by means of CDS compositions.

-   Direct data sources defined after `FROM`.
-   [Association targets](ABENASSOCIATION_TARGET_GLOSRY.html) of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html).
-   Association targets of [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html).

-   [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) do not specify any data source. They do not have a `FROM` clause.
-   CDS custom entities and CDS abstract entities cannot be used as data source of another CDS entity.
-   [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) can generally not be used as data source of another CDS entity. There is only one exception: A projection view of type [transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) can have a projection view of type [transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) as data source.
-   CDS projection views can have CDS view entities or CDS DDIC-based views (obsolete) as data source. This applies to all [provider contracts](ABENCDS_PV_PROVIDER_CONTRACT.html). There are some special rules for certain provider contracts:

-   For CDS transactional interfaces and CDS transactional queries, the data source must be part of a [RAP business object](ABENRAP_BO_GLOSRY.html). This means it must either be a [CDS root entity](ABENROOT_ENTITY_GLOSRY.html) itself, or be part of a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) which includes a root node.
-   For projection views of provider contract [`ANALYTICAL_QUERY`](ABENCDS_ANALYTICAL_QUERY_APV.html), the data source must be an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html) or an [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html).

-   In CDS table functions and CDS hierarchies, associations cannot be specified. Therefore, they are not listed here.
-   A CDS entity can define itself as association target. [Self-associations](ABENSELF_ASSOCIATION_GLOSRY.html) are generally supported. They are mainly relevant for CDS hierarchies.
-   CDS projection views with provider contract `ANALYTICAL_QUERY` and `TRANSACTIONAL_INTERFACE` cannot define associations. This table applies only to CDS projection views of type [`TRANSACTIONAL_QUERY`](ABENCDS_PV_TRANSACTIONAL_QUERY.html) and to projection views [without provider contract](ABENCDS_PV_NO_CONTRACT.html) (not recommended).

-   CDS hierarchies and CDS table functions cannot define CDS composition relations.
-   CDS projection views can [expose](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html) and [redirect](ABENCDS_PV_ASSOC_REDIRECTED.html) compositions. The association target of a redirected composition must be another CDS projection view. However, a CDS projection view cannot define any new composition.

**\\
CDS entity/`FROM`** **CDS view entity** \\ **CDS transactional interface** **CDS table function** **CDS hierarchy** **CDS DDIC-based view** **DDIC database table** \\ **\\ [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html)** **[DDIC external view](ABENEXTERNAL_VIEW_GLOSRY.html)**\\ **\\
[CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)** x - x x x x - - **\\
[CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html)** x x - - x - - - **\\
[CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html)** x - - - x - - - **\\
[CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html)** x - - - x - - - **\\
[CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)** x - - - x - - - **\\
[CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html)** x - x x x x x x **\\
CDS entity/association target** **CDS table entity** \\ **CDS view entity** \\ **CDS projection view** **CDS table function** **CDS hierarchy** **CDS custom entity** \\ **CDS abstract entity** **CDS DDIC-based view** **DDIC database table** \\ **\\ [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html)** **[DDIC external view](ABENEXTERNAL_VIEW_GLOSRY.html)**\\ **\\
CDS table entity** x - - - - - - - - - - **\\
CDS view entity** - x x x x x x x x - - **\\
CDS transactional query** - x x x x x x x x - - **\\
CDS custom entity** - x - x x x x x x x - **\\
CDS abstract entity** - x - x x x x x x x - **\\
CDS DDIC-based view** - x - x x x x x x x x **\\
CDS entity/composition of or to-parent association** **CDS table entity** **CDS view entity** ,**CDS custom entity** \\ **CDS abstract entity** **CDS DDIC-based view**\\ **\\
CDS table entity** x - - - - **\\
CDS view entity** - x x x x **\\
CDS custom entity** - x x x x **\\
CDS abstract entity** - x x x x **\\
CDS DDIC-based view** - x x x x abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html