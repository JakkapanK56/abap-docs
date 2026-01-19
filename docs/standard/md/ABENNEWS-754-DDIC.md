---
title: "ABENNEWS-754-DDIC"
description: |
  ABENNEWS-754-DDIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-754-DDIC.htm"
abapFile: "ABENNEWS-754-DDIC.html"
keywords: ["do", "if", "data", "types", "ABENNEWS", "754", "DDIC"]
---

[1\. New Built-In Data Types](#ABAP_MODIFICATION_1@4@)

[2\. Flagging of Obsolete Data in Check Tables](#ABAP_MODIFICATION_2@4@)

[3\. Dynamic Cached Views](#ABAP_MODIFICATION_3@4@)

The following new [built-in data types](ABENDDIC_BUILTIN_TYPES_INTRO.html) were introduced in ABAP Dictionary:

These data types are currently only supported by SAP HANA databases. These types can be mapped to HANA-specific data types but not to other vendor-specific data types. [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) where these types are used can only be created on SAP HANA databases.

A special column can be used to [flag obsolete data](ABENDDIC_DEPRECATION.html) in check tables. This flag modifies [input checks](ABENABAP_DYNPROS_CHECKS.html) and [input help](ABENABAP_DYNPROS_VALUE_HELP.html) in dynpros and Web Dynpros.

This flag was ported back to all releases including ABAP release 7.40.

[Dynamic cached views](ABENDYNAMIC_CACHE_GLOSRY.html) are a kind of [HANA tuning object](ABENHANA_TUNING_OBJECT_GLOSRY.html) defined using the statement [`DEFINE DYNAMIC CACHE`](ABENDDICDDL_DEFINE_DYNAMIC_CACHE.html). A dynamic cache is a DDIC integration of an SAP HANA [*Dynamic Result Cache*](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1).

-   [Decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html)

-   [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html)
-   [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html)

-   [Date fields, time fields, and time stamp fields](ABENDDIC_DATE_TIME_TYPES.html)

-   [`DATN`](ABENDDIC_BUILTIN_TYPES.html)
-   [`TIMN`](ABENDDIC_BUILTIN_TYPES.html)
-   [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html)

-   [Geodata types](ABENDDIC_GEO_DATA.html)

-   [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html)

abenabap.html abennews.html abennews-75.html abennews-754.html