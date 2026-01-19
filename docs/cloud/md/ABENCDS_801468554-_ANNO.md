---
title: "ABENCDS_801468554-_ANNO"
description: |
  ABENCDS_801468554-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_801468554-_ANNO.htm"
abapFile: "ABENCDS_801468554-_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "801468554", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Technical settings of a CDS entity.

Specifies how a CDS object can be extended using CDS object extensions. A comma-separated list of values can be specified in the square brackets of the annotation array.

If the annotation is not sepecified, the value `#PROJECTION_LIST` is used.

No extensions allowed. Cannot be specified together with other values.

Extensions of the `SELECT` list and additional CDS associations are allowed. Extensions of CDS views whose `SELECT` lists contain aggregate expressions or which contain a set operator clause (`UNION`, `INTERSECT`, `EXCEPT`) are not allowed.

Extensions of the `SELECT` list and additional CDS associations are allowed; extensions of CDS views whose SELECT lists contain aggregate expressions or have a `UNION` clause must be allowed using further values

Can only be specified together with #PROJECTION\_LIST. Allows views to be extended that have aggregate expressions in the SELECT list. Aggregated or non-aggregated elements can be added to the SELECT list by the extension. The GROUP-BY clause must be extended accordingly using the addition GROUP BY.

Can only be specified together with #PROJECTION\_LIST. Allows views to be extended that use a clause with a set operator (`UNION`, `INTERSECT`, `EXCEPT`).

-   The annotation`AbapCatalog.viewEnhancementCategory` specifies how a CDS view can be extended. `AbapCatalog.viewEnhancementCategory` and `AbapCatalog.extensibility.extensible` can optionally be specified together in the same CDS view. In this case, the annotation values must fit to each other. They must both either allow or forbid extensions.
-   In the [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html)\\ `AbapCatalog.viewEnhancementCategory[ ]`, `#GROUP_BY` and `#UNION` can only be specified together with the default value `#PROJECTION_LIST`. The value `#NONE` excludes any other values.
-   `AbapCatalog.viewEnhancementCategory[#NONE]` is mandatory for views that contain an element of data type `LRAW` or `LCHR`. The reason is that elements of data type `LRAW` or `LCHR` must always be in the last position in the `SELECT` list and therefore, no extensions are allowed.
-   Extensions of a view with aggregate expressions or with a set operator clause ([`EXCEPT`](ABENCDS_EXCEPT_V2.html), [`INTERSECT`](ABENCDS_INTERSECT_V2.html), or [`UNION`](ABENCDS_UNION_V2.html)) modify the [cardinality](ABENCARDINALITY_GLOSRY.html) of the result set. This means that these extensions must have special permission in the view to enable consumers of the view to handle any changes to cardinalities.
-   `AbapCatalog.viewEnhancementCategory[#UNION]` allows extensions not only for union views, but for views including any set operator (also [`EXCEPT`](ABENCDS_EXCEPT_V2.html) and [`INTERSECT`](ABENCDS_INTERSECT_V2.html)). The annotation array value `#UNION` is a known misnomer.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.viewEnhancementCategory[ ]`\\ **Scope** `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#GROUP_BY, #NONE, #PROJECTION_LIST, #UNION`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`