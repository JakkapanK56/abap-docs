---
title: "ABENCDS_SELECT_LIST_V2"
description: |
  ABENCDS_SELECT_LIST_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SELECT_LIST_V2.htm"
abapFile: "ABENCDS_SELECT_LIST_V2.html"
keywords: ["select", "if", "try", "data", "ABENCDS", "SELECT", "LIST"]
---

``... [`element1`](ABENCDS_SELECT_LIST_ENTRY_V2.html), [`element2`](ABENCDS_SELECT_LIST_ENTRY_V2.html), ...``

Defines an element of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The elements can be specified in a comma-separated list: [`element1`](ABENCDS_SELECT_LIST_ENTRY_V2.html), [`element2`](ABENCDS_SELECT_LIST_ENTRY_V2.html) ...

The names of the elements of a CDS view entity must be unique. These are either

Defining a client field in the `SELECT` list is not allowed, since [client handling](ABENCDS_V2_VIEW_CLIENT_HANDLING.html) takes place implicitly in CDS view entities.

It is not possible to use an asterisk `*` to include all fields of the data source in the CDS view entity as elements and expose all CDS associations, to-child and to-parent associations of the current view. This syntax can be used in ABAP SQL and in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), but not in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html).

The following CDS view entity `DEMO_SALES_CDS_SO_VE_SIMPLE` is a view of the DDIC database table `demo_sales_order`. Three elements (`so_key`, `BuyerID`, and `currencySum`) are defined for this view.

-   the names of the elements taken from the data sources, or
-   alternative element names specified using [`AS`](ABENCDS_SELECT_LIST_ENTRY_V2.html).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_CDS\_SO\_VE\_SIMPLE\\n as select from demo\_sales\_order as SalesOrder\\n \\{\\n key so\_key,\\n buyer\_id as BuyerID,\\n currency\_sum as currencySum\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html