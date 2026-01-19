---
title: "ABENCDS_PROJ_VIEW_PATH_EXPR"
description: |
  ABENCDS_PROJ_VIEW_PATH_EXPR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PROJ_VIEW_PATH_EXPR.htm"
abapFile: "ABENCDS_PROJ_VIEW_PATH_EXPR.html"
keywords: ["select", "if", "ABENCDS", "PROJ", "VIEW", "PATH", "EXPR"]
---

``... [source.]_assoc1[[`parameters`](ABENCDS_SELECT_PARAMETERS_V2.html)][[`filter`](ABENCDS_PV_ASSOC_MODIFIED.html)] ...``

A path expression in the CDS DDL is a sequence of CDS associations separated by periods (.) whose names are specified using `assoc1, assoc2,` and so on. The rules for path expressions in CDS projection views are similar to path expressions in CDS view entities, see topic [CDS DDL - CDS View Entity,  `path_expr`](ABENCDS_PATH_EXPRESSION_V2.html) with the following differences:

-   The filter of a path expression of a CDS projection view cannot define a join type. It can only define a cardinality and a filter condition as described in topic [CDS DDL - CDS Projection View, filter](ABENCDS_PV_ASSOC_MODIFIED.html).
-   The result set of the CDS projection view must be the same as the result set of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Therefore, the [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html) of each traversed association must be *one*. This can be achieved by using a [filter condition](ABENFILTER_CONDITION_GLOSRY.html).
-   The keyword [`LOCALIZED`](ABENCDS_PROJ_VIEW_ELEMENT.html) can be used to display text elements in the user's logon language. All previous association paths must be filtered to *one*.
-   It is possible to pass parameters in association paths. This works in the same way as parameter passing in CDS view entities, see topic [CDS DDL - CDS View Entity,  `path_expr`](ABENCDS_PATH_EXPRESSION_V2.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html