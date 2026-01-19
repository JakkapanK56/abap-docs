---
title: "ABENCDS_SELECT_LIST_V1"
description: |
  ABENCDS_SELECT_LIST_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SELECT_LIST_V1.htm"
abapFile: "ABENCDS_SELECT_LIST_V1.html"
keywords: ["select", "if", "try", "data", "ABENCDS", "SELECT", "LIST"]
---

``... [`element1`](ABENCDS_SELECT_LIST_ENTRY_V1.html), [`element2`](ABENCDS_SELECT_LIST_ENTRY_V1.html), ...    | * ...``

Defines an element of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The elements can be specified as follows:

The names of the elements of a CDS view must be unique. These are either

These names are also the names of the view fields of the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) and the corresponding rules that must be kept.

The maximum number of elements and the limit on the total of field lengths is determined by the corresponding [limits](ABENCDS_V1_VIEWS.html) for the associated [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html).

The following CDS view `demo_sales_order_old2` is a view of the DDIC database table `snwd_so`. Three elements (`so_id`, `currency_code`, and `gross_amount`) are defined for this view.

The following CDS view `demo_sales_order_old3` is a view of all the fields of the DDIC database table `snwd_so`. Accessing the CDS view has the same effect as when the database itself is accessed.

-   In a comma-separated list, elements can be defined by specifying [`element1`](ABENCDS_SELECT_LIST_ENTRY_V1.html), [`element2`](ABENCDS_SELECT_LIST_ENTRY_V1.html) ...
-   `*` can be used to define all fields of the data source of the CDS view as elements and expose all CDS associations, to-child and to-parent associations of the current view. If another CDS view is used as a data source, the CDS associations, to-child and to-parent associations exposed in its `SELECT` list are not exposed by the current CDS view. The asterisk `*` cannot be specified if the current CDS view contains [joins](ABENCDS_JOINED_DATA_SOURCE_V1.html) or [union sets](ABENCDS_UNION_V1.html) when the [data source](ABENCDS_DATA_SOURCE_V1.html) is specified.

-   The names of the elements taken from the data sources
-   Alternative element names specified using [`AS`](ABENCDS_SELECT_LIST_ENTRY_V1.html)
-   The names specified in a [name list](ABENCDS_NAME_LIST_V1.html)

@AbapCatalog.sqlViewName: 'DEMO\_SO\_VW2'\\ndefine view DEMO\_SALES\_ORDER\_OLD2\\n as select from snwd\_so\\n\\{\\n key so\_id,\\n @Semantics.currencyCode\\n currency\_code,\\n @Semantics.amount.currencyCode: 'currency\_code'\\n gross\_amount\\n\\}\\n @AbapCatalog.sqlViewName: 'DEMO\_SO\_VW3'\\ndefine view DEMO\_SALES\_ORDER\_OLD3 as\\n select from snwd\_so\\n \\{ \* \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html