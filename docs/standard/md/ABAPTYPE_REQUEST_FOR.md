---
title: "ABAPTYPE_REQUEST_FOR"
description: |
  ABAPTYPE_REQUEST_FOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPE_REQUEST_FOR.htm"
abapFile: "ABAPTYPE_REQUEST_FOR.html"
keywords: ["update", "delete", "if", "case", "method", "class", "data", "types", "ABAPTYPE", "REQUEST", "FOR"]
---

`... REQUEST FOR \{\ \{ CHANGE                    | DELETE \}\                      bdef \} ...`

[1. `... CHANGE bdef`](#ABAP_ALTERNATIVE_1@2@)

[2. `... DELETE bdef`](#ABAP_ALTERNATIVE_2@2@)

A structured data type that is only used in the context of managed implementations [`with additional save`](ABENBDL_SAVING.html) and [`with unmanaged save`](ABENBDL_SAVING.html). In these cases, the [ABP](ABENBEHAVIOR_POOL_GLOSRY.html) contains the `save_modified` method that is part of a local saver class that inherits from the base saver class `CL_ABAP_BEHAVIOR_SAVER`. Within the `save_modified` method, the following predefined parameters can be addressed:

Used for the predefined `create` and `update` parameters that are only available in local saver classes of the [ABP](ABENBEHAVIOR_POOL_GLOSRY.html) that inherit from the base saver class `CL_ABAP_BEHAVIOR_SAVER`. `create` and `update` that are typed with `TYPE REQUEST FOR CHANGE` contain nested tables that are named according to those entities for which the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) has specifications `with additional save` or `with unmanaged save` respectively and for which `CREATE` and/or `UPDATE` operations are allowed. The nested tables are of type [`TYPE TABLE FOR CHANGE`](ABAPTYPE_TABLE_FOR.html). The tables include those [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) that are to be created (or updated) and saved.

Used for the predefined `delete` parameter that is only available in local saver classes of the [ABP](ABENBEHAVIOR_POOL_GLOSRY.html) that inherit from the base saver class `CL_ABAP_BEHAVIOR_SAVER`. `delete` is typed with `TYPE REQUEST FOR DELETE`. It contains nested tables that are named according to those entities for which the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) has specifications `with additional save`, or `with unmanaged save` respectively; and for which `DELETE` operations are allowed. The nested tables are of type [`TYPE TABLE FOR KEY OF`](ABAPTYPE_TABLE_FOR.html). The table includes those [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) that are to be deleted.

-   `create`: structure typed with `TYPE REQUEST FOR CHANGE`
-   `update`: structure typed with `TYPE REQUEST FOR CHANGE`
-   `delete`: structure typed `TYPE REQUEST FOR DELETE`

-   The example [ABAP EML - `TYPE REQUEST FOR` in a Managed RAP BO with Additional Save](ABENRAP_ADDITIONAL_SAVE_ABEXA.html) shows the types `TYPE REQUEST FOR CHANGE` and `TYPE REQUEST FOR DELETE` in the context of a simple managed RAP BO whose BDEF is specified with `with additional save`.
-   The example [ABAP EML - `TYPE REQUEST FOR` in a managed RAP BO with unmanaged save](ABENRAP_MANAGED_UNM_SAVE_ABEXA.html) shows the types `TYPE REQUEST FOR CHANGE` and `TYPE REQUEST FOR DELETE` in the context of a simple managed RAP BO whose BDEF is specified with `with unmanaged save`.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html