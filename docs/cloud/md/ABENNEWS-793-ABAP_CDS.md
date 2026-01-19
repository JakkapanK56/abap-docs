---
title: "ABENNEWS-793-ABAP_CDS"
description: |
  ABENNEWS-793-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-793-ABAP_CDS.htm"
abapFile: "ABENNEWS-793-ABAP_CDS.html"
keywords: ["select", "if", "data", "types", "ABENNEWS", "793", "ABAP", "CDS"]
---

[1\. CDS Scalar Functions](#ABAP_MODIFICATION_1@4@)

[2. Extension of the `CAST` Matrix](#ABAP_MODIFICATION_2@4@) 

[3\. Release of CDS Enumerated Types](#ABAP_MODIFICATION_3@4@)

[4. CDS Transactional Interface, `WHERE` Clause](#ABAP_MODIFICATION_4@4@) 

[5. `$projection` References on Path Expressions](#ABAP_MODIFICATION_5@4@)

The new [CDS object](ABENCDS_OBJECT_GLOSRY.html) is available: the [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html). It is defined using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html).

As of this release, scalar functions are available for two different runtimes:

The matrix of types that can be converted to each other using `CAST` has been enhanced for [CDS DDIC-based views (obsolete)](ABENCDS_DDIC_BASED_ENTITY_GLOSRY.html) and for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). Data types `DECFLOAT16` and `DECFLOAT34` can now be cast into data type `CURR`.

[CDS enumerated types](ABENCDS_ENUM_TYPE_GLOSRY.html) define [enumerated types](ABENENUM_TYPE_GLOSRY.html) natively in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). The syntax statement for defining a CDS enumerated type is [`DEFINE TYPE ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html).

CDS enumerated types can be used as follows:

A [`WHERE`](ABENCDS_INTERFACE_COND_EXPR.html) condition is now available also for [CDS transactional interfaces](ABENCDS_TRANS_INTERFACE_GLOSRY.html) to restrict the result set that is returned when the transactional interface is accessed.

A reuse expression [`$projection.Field`](ABENCDS_REUSABLE_EXPRESSION_V2.html) can now also be used to reuse fields selected via a [path expression](ABENCDS_PATH_EXPRESSION_V2.html).

-   The HANA SQL runtime. [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) can be created internally at SAP as [CDS system functions](ABENCDS_SYSTEM_FUNC_GLOSRY.html), or externally by customers and partners as [CDS user-defined functions](ABENCDS_USER_FUNC_GLOSRY.html).
-   The [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html). Analytical scalar functions can be created internally at SAP only. They are delivered to customers as [CDS system functions](ABENCDS_SYSTEM_FUNC_GLOSRY.html).

-   See topic [CDS DDL - DDIC-Based View, `cast_expr`](ABENCDS_CAST_EXPRESSION_V1.html) and
-   topic [CDS DDL - CDS View Entity, `cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html)

-   In ABAP CDS for typing and casting, as operands in expressions, and in comparisons.
-   In ABAP for typing after the `TYPES` statement.
-   In ABAP SQL as elementary operands and in cast expressions.

abenabap.html abennews.html abennews-79.html abennews-793.html