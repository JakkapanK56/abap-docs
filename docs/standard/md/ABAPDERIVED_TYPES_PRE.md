---
title: "ABAPDERIVED_TYPES_PRE"
description: |
  ABAPDERIVED_TYPES_PRE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_PRE.htm"
abapFile: "ABAPDERIVED_TYPES_PRE.html"
keywords: ["do", "if", "method", "class", "types", "ABAPDERIVED", "TYPES", "PRE"]
---

`%pre` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It contains [`%tmp`](ABAPDERIVED_TYPES_TMP.html) and [`%pid`](ABAPDERIVED_TYPES_PID.html) as components and is used in the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) within the [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) method. The component group is only available in [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios and relevant for the [`mapped`](ABAPTYPE_RESPONSE_FOR.html) parameter to map preliminary to final key values or assign final key values to [`%key`](ABAPDERIVED_TYPES_KEY.html) respectively.

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The following source code section taken from the `BP_DEMO_UMANAGED_ROOT_LATE_NU3CCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_UMANAGED_ROOT_LATE_NU3` demonstrates the component `%pre` in the context of an [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) method that is responsible for assigning the final keys. See the executable program for this example further down.

The example [Using `%pre` / `%tmp` / `%pky`](ABENDERIVED_TYPES_PRE_TMP_ABEXA.html) demonstrates the use of `%pre` with an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) in a [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenario.

-   `MAPPED LATE`

... \\nAPPEND VALUE #( %pre = VALUE #( %pid = \-pid \\n %tmp-key\_field = \-tmp\_key ) \\n %key-key\_field = final\_key \\n ) TO mapped-demo\_umanaged\_root\_late\_num3. \\n... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html