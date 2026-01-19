---
title: "ABENBDL_SAVE_AFTER"
description: |
  ABENBDL_SAVE_AFTER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_SAVE_AFTER.htm"
abapFile: "ABENBDL_SAVE_AFTER.html"
keywords: ["if", "method", "types", "ABENBDL", "SAVE", "AFTER"]
---

`...  save after BdefName1[, BdefName2, ...];   ...`

`save_after` explicitly sets the order in which RAP BOs are saved when instances of multiple RAP BOs are involved after triggering the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). It is used in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) of [RAP BO root entities](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) defining other RAP BOs (`BdefName1`, `BdefName2`, etc.) in the `save after` list that are processed first.

`BdefName1`, `BdefName2`, etc., can be other root entities and [RAP BO interface entities](ABENRAP_BO_INTERFACE_ENTITY_GLOSRY.html).

Contradictory specifications must be avoided. For example, if RAP BO *A* specifies `save after B;`, then RAP BO *B* cannot specify `save after A;`.

`save after` can be defined in the following types of behavior definitions:

Using `save_after` is typically relevant for scenarios involving [late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html). When RAP BO *A* specifies `save after` and declares RAP BO *B* as a predecessor, *B* is processed first. The final keys of *B* can be retrieved using [`CONVERT KEY`](ABAPCONVERT_KEY.html) in the [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html)\\ [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) of *A*.

[RAP - RAP Explicit Save Order](ABENBDL_SAVE_AFTER_ABEXA.html)

-   [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html