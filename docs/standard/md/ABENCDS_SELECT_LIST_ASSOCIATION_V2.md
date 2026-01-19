---
title: "ABENCDS_SELECT_LIST_ASSOCIATION_V2"
description: |
  ABENCDS_SELECT_LIST_ASSOCIATION_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SELECT_LIST_ASSOCIATION_V2.htm"
abapFile: "ABENCDS_SELECT_LIST_ASSOCIATION_V2.html"
keywords: ["select", "do", "if", "case", "try", "data", "ABENCDS", "SELECT", "LIST", "ASSOCIATION"]
---

``... [`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html)\ [AS alias]``

Uses a path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html) to expose a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) as an [element](ABENCDS_SELECT_LIST_ENTRY_V2.html) of the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). A path expression can consist of one or more associations, and the final CDS association is exposed for use in other [CDS views](ABENCDS_VIEW_GLOSRY.html) or in ABAP SQL:

The current view is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed CDS association and any join expression created for a path expression from the CDS association uses the current CDS view entity as its left side.

All fields of the association source that are used in the `ON` condition must also be specified as elements of the current `SELECT` list. Such an element must be specified by exactly the same path expression as used for exposing the association. It must contain the same associations in the same sequence and with the same [attributes](ABENCDS_PATH_EXPR_ATTR_V2.html).

A CDS association can be exposed multiple times with various alternative element names `alias` defined using the keyword `AS` (see example below). This makes it possible to use different [filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V2.html)\\ `cds_cond`. However, this is only possible for simple CDS associations and not for to-child and to-parent associations.

An exposed CDS association is part of the `SELECT` list. It is not, however, part of the result set, nor a component of the type defined in ABAP with respect to the CDS view entity.

The names of the elements of a `SELECT` list must be unique. This applies in particular also for the publication of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) using a path expression. There must be no other element with this name. If necessary, `AS` must be used to define an alternative element name `alias` for the CDS association. If no alternative element name `alias` is defined, the element name is defined by the name of the CDS association used in the path expression. When a CDS association with a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html)\\ `cds_cond` is exposed, an alternative element name `alias` using `AS` is mandatory.

The following CDS view entity exposes its own CDS association `_spfli` and the CDS association `_sflight` exposed by its [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `demo_cds_assoc_spfli`. The fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), which are used in the `ON` conditions of the CDS associations, are specified in the `SELECT` list. In the case of the CDS association exposed using `_spfli._sflight`, path expressions `_spfli.carrid` and `_spfli.connid` are specified accordingly. The element `carrid` occurs twice, therefore, an alternative element name must be defined using `AS`.

The following CDS view entity exposes its own CDS association `_spfli` with a filter condition. The fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), which are used in the `ON` condition of the CDS association, are specified in the `SELECT` list using the same filter condition. Once this has been done, the same association can be exposed again with different filter conditions. New alias names are required.

[Exposing CDS Associations](ABENCDS_EXPOSE_ASSOC_V2_ABEXA.html)

-   A different CDS view can evaluate the CDS association in its [path expressions](ABENCDS_PATH_EXPRESSION_V2.html).
-   The CDS association can be used in [ABAP SQL path expressions](ABENABAP_SQL_PATH.html).

-   When a CDS association is exposed, the exposing view itself is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed CDS association - not the data source of the exposing view. Especially when CDS associations are exposed that were already exposed by the data source of the current view, the current view replaces the original view as the association source. When a join expression is created for the current view, the left side of the join expression is the result set of the current view.
-   When exposing a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) using a path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html) in the `SELECT` list, it is not possible to pass actual parameters to any [input parameters](ABENCDS_PARAMETER_LIST_V2.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) to assign start values to the input parameters.
-   Special rules apply to the publication of CDS associations in `SELECT` statements joined with a [set operator](ABENCDS_SET_OPERATORS.html).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_EXPOSE\_ASSOC\_VE\\n as select from scarr\\n association of one to many demo\_cds\_assoc\_spfli as \_spfli \\n on scarr.carrid = \_spfli.carrid\\n\\{\\n \_spfli,\\n key scarr.carrid as scarr\_carrid,\\n \_spfli.\_sflight,\\n \_spfli.carrid,\\n \_spfli.connid \\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_EXPOSE\_ASSOC\_FILTER\\n as select from scarr \\n association of one to many demo\_cds\_assoc\_spfli as \_spfli \\n on scarr.carrid = \_spfli.carrid \\n\\{ \\n//Association with filter condition\\n \_spfli\[ carrid = '' \] as airline, \\n key scarr.carrid as scarr\_carrid, \\n \_spfli\[ carrid = '' \].\_sflight, \\n \_spfli\[ carrid = '' \].carrid, \\n \_spfli\[ carrid = '' \].connid,\\n \\n//same association with different filter condition and new alias name\\n \_spfli\[ carrid = 'A' \] as airline\_A,\\n \_spfli.airpfrom as airport \\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_list\_v2.html abencds\_select\_list\_entry\_v2.html