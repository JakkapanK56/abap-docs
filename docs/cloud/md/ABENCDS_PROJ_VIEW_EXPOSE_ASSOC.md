---
title: "ABENCDS_PROJ_VIEW_EXPOSE_ASSOC"
description: |
  ABENCDS_PROJ_VIEW_EXPOSE_ASSOC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.htm"
abapFile: "ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html"
keywords: ["select", "if", "ABENCDS", "PROJ", "VIEW", "EXPOSE", "ASSOC"]
---

``... association[[[`filter`](ABENCDS_PV_ASSOC_MODIFIED.html)]]\ [AS alias]\ [: [`redirection`](ABENCDS_PV_ASSOC_REDIRECTED.html)``\\ \]

CDS associations from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) can be exposed in the projection list of a CDS projection view. Note that only an association from the projected entity can be exposed, path expressions are not valid to expose an association.

All elements included in the `ON` clause of an exposed [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) must also be included in the projection list of the CDS projection view.

The following additions are possible:

A CDS association can be exposed multiple times with various alternative element names. This makes it possible to use different filter conditions.

An exposed CDS association is part of the projection list. It is not, however, part of the result set, nor a component of the type defined in ABAP with respect to the CDS projection view.

-   [`filter`](ABENCDS_PV_ASSOC_MODIFIED.html)
-   An exposed association in a CDS projection view can be modified. That means that you can add a filter condition and in this way implicitly change the [cardinality](ABENCARDINALITY_GLOSRY.html).
-   `AS alias`
-   The names of the elements of a `SELECT` list must be unique. There must be no other element with this name. If necessary, `AS` must be used to define an alternative element name `alias` for the CDS association. If no alternative element name `alias` is defined, the element name is defined by the name of the CDS association used in the path expression. When a CDS association with a [filter condition](ABENCDS_PV_ASSOC_MODIFIED.html)\\ `cds_cond` is exposed, an alternative element name `alias` using `AS` is mandatory.
-   [`redirection`](ABENCDS_PV_ASSOC_REDIRECTED.html)
-   If the original [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is also projected, you can redirect the association to the new target using the keyword `REDIRECTED TO`. Find details in the topic [CDS DDL - `projection_view`, `REDIRECTED TO`](ABENCDS_PV_ASSOC_REDIRECTED.html) below.

-   As alternative to exposing an association with a filter and redirection described in this topic, it is also possible to redefine an association on header level using the keyword [`REDEFINE ASSOCIATION`](ABENCDS_PROJ_VIEW_REDEFINED_ASSOC.html). The filter and redirection is then automatically applied to all fields exposed via path expression.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html