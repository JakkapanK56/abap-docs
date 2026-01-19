---
title: "ABENNEWS-46-ASSIGN-CASTING"
description: |
  ABENNEWS-46-ASSIGN-CASTING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-ASSIGN-CASTING.htm"
abapFile: "ABENNEWS-46-ASSIGN-CASTING.html"
keywords: ["if", "case", "method", "data", "field-symbol", "ABENNEWS", "ASSIGN", "CASTING"]
---

The addition `CASTING` in Release 4.6A allows any memory area to be considered under the aspect of a particular type. This method of typing allows fields to be accessed symbolically instead of specifying offset and length, especially when implementing unions and containers. The following variants are possible:

[1. `ASSIGN f TO <fs> CASTING`](#ABAP_MODIFICATION_1@4@)

[2. `ASSIGN f TO <fs> CASTING TYPE type`](#ABAP_MODIFICATION_2@4@)

[3. `ASSIGN f TO <fs> CASTING LIKE field`](#ABAP_MODIFICATION_3@4@)

In this static variant, the field symbol must be completely typed. The content of field f is interpreted in accordance with the type of the field symbol.

Here, the field f is not handled in accordance with the type of the field symbol, but in accordance with the specified `type` (static variant). If the specified type `CASTING TYPE (typename)` is placed in parentheses, the content of the data object in the parentheses determines the data type at runtime (dynamic variant).

In this case, field f is handled in accordance with the type of the field `field` (static variant). This variant is used dynamically by specifying a typed field symbol instead of the field `field`. Another option is, for example, to pass an untyped parameter in a `FORM` call. Here, the type of the passed actual parameter would be used at runtime.

Typed field symbols should be used for **performance** reasons. The runtime of a typed `ASSIGN` statement is around 40 percent less than that required for an equivalent untyped `ASSIGN` statement.

-   Static cast with implicit type specification
-   Dynamic cast with explicit type specification

abenabap.html abennews.html abennews-4.html abennews-46a.html