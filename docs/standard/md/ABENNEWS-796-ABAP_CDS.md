---
title: "ABENNEWS-796-ABAP_CDS"
description: |
  ABENNEWS-796-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-796-ABAP_CDS.htm"
abapFile: "ABENNEWS-796-ABAP_CDS.html"
keywords: ["if", "data", "types", "ABENNEWS", "796", "ABAP", "CDS"]
---

[1\. Extended Cast Matrix](#ABAP_MODIFICATION_1@4@)

[2\. New Analytical Scalar Functions](#ABAP_MODIFICATION_2@4@)

[3\. CDS Enumerated Elements in CDS Conditions](#ABAP_MODIFICATION_3@4@)

[4. Support of Data Types in Logical Expressions with `IS INITIAL`](#ABAP_MODIFICATION_4@4@)

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), [casting](ABENCDS_CAST_EXPRESSION_V2.html) from the data type `CURR` into the data types `DECFLOAT16` and `DECFLOAT34` is now possible.

The following [analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html) are available as of ABAP release 7.96:

For a complete list, see the topic [ABAP CDS - Analytical Scalar Functions](ABENCDS_ANA_SCALAR_FUNCTION.html).

[CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html) are now also supported as left-hand operands in [logical expressions](ABENLOGICAL_EXPRESSION_GLOSRY.html). For more details, see the topic [CDS TDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

In logical expressions with the operator [`INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html), the left-hand operand can now also have one of the following data types: `RAW`, `DECFLOAT16`, `DECFLOAT34`, `DATN`, `TIMN`, `UTCL`. This applies to all CDS entities except for [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html).

-   [`LN`](ABENCDS_ANA_SCALAR_FUNCTION.html)
-   [`LOG`](ABENCDS_ANA_SCALAR_FUNCTION.html)
-   [`EXPONENTIAL`](ABENCDS_ANA_SCALAR_FUNCTION.html)
-   [`POWER`](ABENCDS_ANA_SCALAR_FUNCTION.html)

abenabap.html abennews.html abennews-79.html abennews-796.html