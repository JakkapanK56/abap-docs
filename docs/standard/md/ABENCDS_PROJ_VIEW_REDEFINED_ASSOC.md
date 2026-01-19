---
title: "Limitations"
description: |
  The following two CDS projection views define a CDS composition relationship to each other. Both of them redefine their associations and redirect the association target to the projection layer, while maintaining the specialization. The CDS view entity extension `DEMO_CDS_PV_EXTEND` redefines an asso
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PROJ_VIEW_REDEFINED_ASSOC.htm"
abapFile: "ABENCDS_PROJ_VIEW_REDEFINED_ASSOC.html"
keywords: ["do", "while", "if", "case", "data", "ABENCDS", "PROJ", "VIEW", "REDEFINED", "ASSOC"]
---

``... REDEFINE ASSOCIATION [source.]_ProjAssoc [[`filter`](ABENCDS_PV_ASSOC_MODIFIED.html)]\ [AS _RedefinedName]\ [`redirection`](ABENCDS_PV_ASSOC_REDIRECTED.html)  ...``

A CDS association from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) can be redefined in the header part, that means in front of the projection list, of a CDS projection view. In this way, it is possible to modify an association from the underlying view. The modified association can be used locally and it can be exposed in the projection list for usage in, for example, [CDS view entity extensions](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html).

The syntax consists of the following elements:

Exposure in the projection list:

All elements included in the `ON` clause of an exposed redefined association must also be included in the projection list.

Limitations

The following two CDS projection views define a CDS composition relationship to each other. Both of them redefine their associations and redirect the association target to the projection layer, while maintaining the specialization. The CDS view entity extension `DEMO_CDS_PV_EXTEND` redefines an association to a [foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) which is not part of the same [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html).

**Parent CDS projection view**

**Child CDS projection view**

**CDS view entity extension extending the parent view**

-   `_ProjAssoc`: the association from the projected entity which should be redefined must be identified by its original name. The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html)\\ `source` can optionally be specified as prefix.
-   [`filter`](ABENCDS_PV_ASSOC_MODIFIED.html): A filter, consisting of a [filter condition](ABENFILTER_CONDITION_GLOSRY.html) and, optionally, a [cardinality](ABENCARDINALITY_GLOSRY.html), can be specified. See topic [CDS Projection View, filter](ABENCDS_PV_ASSOC_MODIFIED.html) for details.
-   The following rules apply in addition to the rules described in topic [CDS Projection View, filter](ABENCDS_PV_ASSOC_MODIFIED.html):
    If the numeric syntax variant is used, the `min` cardinality can be 0 or 1. The `max` cardinality can be 1 or \*. The `min` and `max` cardinality of redefined to-parent redirects must not be changed.
-   `AS alias`: A new alias name `AS alias` can be assigned.
-   [`redirection`](ABENCDS_PV_ASSOC_REDIRECTED.html): This addition is mandatory for redefined associations. As a prerequisite, the original [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must also have a CDS projection view. Redirection using the keyword `REDIRECTED TO [...]` means to direct an association to a new association target, which is also a CDS projection view, in this way moving the complete data model to the projection layer.
-   See topic [`CDS Projection View, redirection`](ABENCDS_PV_ASSOC_REDIRECTED.html) for further details.

-   The redefined association can be exposed, but exposure is not mandatory, as it can also be done in [CDS view entity extensions](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html) later on.
-   Even if an association has been redefined, it is still possible to expose the original association by using the source as prefix.
-   Example:
    Expose redefined association: `_assoc`.
    Expose original association: `source._assoc`
-   The redefined association can be used in [path expressions](ABENCDS_PROJ_VIEW_PATH_EXPR.html) to expose fields from the association target in the projection list. If a filter condition was added to the redefined association in the header, this is automatically applied to all fields exposed via a path expression.
-   A new alias name can be assigned when exposing a redefined association, even if an alias has already been defined in the context of the redefinition.
-   A new filter condition with a new cardinality can be specified when exposing a redefined association, even if a filter condition with a cardinality has already been defined in the context of the redefinition. In this case, a new alias name is mandatory.

-   It is not possible to redefine [locally defined associations](ABENCDS_PROJ_VIEW_ASSOCIATION.html).
-   `_ProjAssoc` cannot be specified as path expression.

-   As alternative to the redefinition described in this topic, a filter condition and redirection can also be specified in the projection list when exposing the association. See topic [CDS Projection View, `expose_assoc`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html) for details.
-   The syntax described in this topic can also be used in a CDS view entity extension using [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html).

@EndUserText.label: 'CDS projection view, REDEFINED ASSOC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_CDS\_PV\_PARENT\\n provider contract transactional\_query\\n as projection on DEMO\_CDS\_VIEW\_PARENT\\n\\n redefine association \_child\\n redirected to composition child DEMO\_CDS\_PV\_CHILD\\n\\n\\{\\n key Id,\\n Int1,\\n /\* Associations \*/\\n \_child.Int1 as field\_exposure\\n \\}\\n @EndUserText.label: 'CDS projection view, REDEFINED ASSOC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_PV\_CHILD\\n as projection on DEMO\_CDS\_VIEW\_CHILD\\n\\n redefine association \_to\_parent \\n redirected to parent DEMO\_CDS\_PV\_PARENT\\n\\n\\{\\n key Id,\\n Int1,\\n /\* Associations \*/\\n \_to\_parent\\n\\}\\n extend view entity DEMO\_CDS\_PV\_PARENT with \\nredefine association DEMO\_CDS\_VIEW\_PARENT.\_assoc \[to one:CharFieldExt = 'A'\]\\n as \_alias\\n redirected to DEMO\_CDS\_PV\_EXT\_ASSOC\\n\\{\\n \_child.Id as newField\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html