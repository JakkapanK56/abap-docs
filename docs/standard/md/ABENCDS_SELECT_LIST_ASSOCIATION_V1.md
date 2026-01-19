---
title: "ABENCDS_SELECT_LIST_ASSOCIATION_V1"
description: |
  ABENCDS_SELECT_LIST_ASSOCIATION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SELECT_LIST_ASSOCIATION_V1.htm"
abapFile: "ABENCDS_SELECT_LIST_ASSOCIATION_V1.html"
keywords: ["select", "if", "case", "try", "data", "ABENCDS", "SELECT", "LIST", "ASSOCIATION"]
---

``... [`path_expr`](ABENCDS_PATH_EXPRESSION_V1.html)\ [AS alias]``

Uses a path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V1.html) to expose a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) as an [element](ABENCDS_SELECT_LIST_ENTRY_V1.html) of the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). A path expression can consist of one or more associations, and the final CDS association is exposed for use in other [CDS views](ABENCDS_VIEW_GLOSRY.html) or in ABAP SQL:

The current view is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed CDS association and any join expressions created for a path expression from the CDS association use the current CDS view as their left side.

All fields of the association source of the CDS association that occur in the `ON` condition must also be specified as elements of the current `SELECT` list. Such an element must be specified by exactly the same path expression as used for exposing the association. It must contain the same associations in the same sequence and with the same [attributes](ABENCDS_PATH_EXPR_ATTR_V1.html).

A CDS association can be exposed multiple times with various alternative element names `alias` defined using the keyword `AS`. This makes it possible to use different [filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V1.html)\\ `cds_cond`. However, this is only possible for simple CDS associations and not for to-child and to-parent associations.

Like every element, a CDS association exposed in this way is part of the `SELECT` list and must also be specified in a [name list](ABENCDS_NAME_LIST_V1.html). It is not, however, part of the result set, a field of the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), or a component of a type defined in ABAP with respect to the CDS view. If no alternative element name `alias` is defined, and there is no [name list](ABENCDS_NAME_LIST_V1.html), the element name is defined by the name of the CDS association named by the path expression.

The following CDS view exposes its own CDS association `_spfli` and the CDS association `_sflight` exposed by its [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `demo_cds_assoc_spfli`. The fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), which are used in the `ON` conditions of the CDS associations, are specified in the `SELECT` list. In the case of the CDS association exposed using `_spfli._sflight`, path expressions `_spfli.carrid` and `_spfli.connid` are specified accordingly. The element `carrid` occurs twice, which means that an alternative element name must be defined using `AS`.

[Exposing CDS Associations](ABENCDS_EXPOSE_ASSOC_V1_ABEXA.html)

-   A different CDS view can evaluate the CDS association in its [path expressions](ABENCDS_PATH_EXPRESSION_V1.html).
-   The CDS association can be used in ABAP SQL [path expressions](ABENABAP_SQL_PATH.html).

-   When a CDS association is exposed, the exposing view itself is the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the exposed CDS association and not the data source of the exposing view. Especially when CDS associations are exposed that were already exposed by the data source of the current view, the current view replaces the original view as the association source. When a join expression is created for the current view, the left side of the join expression is the result set of the current view.
-   When a CDS association with a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V1.html)\\ `cds_cond` is exposed, an alternative element name `alias` using `AS` must be defined in the `SELECT` list.
-   When exposing a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) using a path expression [`path_expr`](ABENCDS_PATH_EXPRESSION_V1.html) in the `SELECT` list, it is not possible to pass actual parameters to any [input parameters](ABENCDS_PARAMETER_LIST_V1.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) to assign start values to the input parameters.
-   The name of the elements of a `SELECT` list must be unique. This applies in particular also for the publication of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) using a path expression. There must be no other element with this name. If necessary, `AS` must be used to define an alternative element name `alias` for the CDS association.
-   Special rules apply to the publication of CDS associations in `SELECT` statements joined with [`UNION`](ABENCDS_UNION_V1.html).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_EXPOSE\_ASSOC\\n as select from scarr\\n association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli \\n on scarr.carrid = \_spfli.carrid\\n\\{\\n \_spfli,\\n key scarr.carrid as scarr\_carrid,\\n \_spfli.\_sflight,\\n \_spfli.carrid,\\n \_spfli.connid \\n\\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_list\_v1.html abencds\_select\_list\_entry\_v1.html