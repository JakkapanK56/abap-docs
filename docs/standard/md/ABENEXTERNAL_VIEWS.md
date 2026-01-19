---
title: "ABENEXTERNAL_VIEWS"
description: |
  ABENEXTERNAL_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXTERNAL_VIEWS.htm"
abapFile: "ABENEXTERNAL_VIEWS.html"
keywords: ["select", "do", "if", "case", "method", "data", "types", "ABENEXTERNAL", "VIEWS"]
---

**Note**\\ [SAP HANA XSA](ABENXSA_GLOSRY.html) replaces [SAP HANA XSC](ABENXSC_GLOSRY.html). The [access methods](ABENSAP_HANA_ACCESS_XSC.html) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC became mostly obsolete. [DDIC external views](ABENEXTERNAL_VIEW_GLOSRY.html) represent one such access method and have become obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) can be used to access all database tables and views whose structures are defined as repository objects in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). A [SAP HANA view](ABENHANA_VIEW_GLOSRY.html) (attribute view, analytic view, or calculation view), on the other hand, is an entity of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). This uses HANA-specific data types and different naming conventions than in the ABAP Dictionary also apply. This means that direct access to an SAP HANA view using ABAP SQL is not possible.

In the ABAP Dictionary, views known as [DDIC external views](ABENDDIC_EXTERNAL_VIEWS.html) are used for direct access to an SAP HANA view in the [SAP HANA Repository](ABENSAP_HANA_REPOSITORY_GLOSRY.html). A DDIC external view is a special [view](ABENVIEW_GLOSRY.html) in the ABAP Dictionary that functions as a proxy for an SAP HANA view and which can be accessed using SAP HANA and ABAP SQL.

DDIC external views are obsolete, see SAP Note [3116165](https://launchpad.support.sap.com/#/notes/3116165).

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:

-   The structure of analytic views does not allow them to be read using [`SELECT *`](ABAPSELECT_LIST.html). The same basic rules apply to the statement `SELECT` in ABAP SQL as when using the HANA SQL statement `SELECT`. Here, individual columns and the addition `GROUP BY` must be specified. If `SELECT *` is used, a runtime error occurs.
-   Parameterized calculation views can be accessed only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.

-   DDIC external views should only be used in cases that are not covered by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) or [AMDP](ABENAMDP_GLOSRY.html).
-   Access to SAP HANA views in [SAP HANA XS](ABENXS_GLOSRY.html):

-   SAP HANA views in [SAP HANA XSC](ABENXSC_GLOSRY.html) are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.
-   SAP HANA views in [SAP HANA XSA](ABENXSA_GLOSRY.html), the successor to [SAP HANA XSC](ABENXSC_GLOSRY.html), are usually [HDI objects](ABENHDI_OBJECT_GLOSRY.html) for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](ABENAMDP_GLOSRY.html) or [ADBC](ABENADBC_GLOSRY.html).

-   [SAP HANA XSC](ABENXSC_GLOSRY.html) is not supported by a [SAP HANA Cloud database](ABENSAP_HANA_CLOUD_DB_GLOSRY.html) and DDIC external views cannot be used there.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenhana\_xsc\_obsolete.html abensap\_hana\_access\_xsc.html