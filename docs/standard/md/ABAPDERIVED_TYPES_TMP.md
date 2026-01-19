---
title: "ABAPDERIVED_TYPES_TMP"
description: |
  ABAPDERIVED_TYPES_TMP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_TMP.htm"
abapFile: "ABAPDERIVED_TYPES_TMP.html"
keywords: ["do", "if", "case", "method", "class", "types", "ABAPDERIVED", "TYPES", "TMP"]
---

`%tmp` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html), holding preliminary key values. It is used in the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) within the [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) method, making it available only in [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios. This component is crucial for the [`mapped`](ABAPTYPE_RESPONSE_FOR.html) parameter to map preliminary to final key values in [`%key`](ABAPDERIVED_TYPES_KEY.html), especially in case [`%key`](ABAPDERIVED_TYPES_KEY.html) is used to contain preliminary keys instead of [`%pid`](ABAPDERIVED_TYPES_PID.html) during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html).

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The following code snippet from the `BP_DEMO_UMANAGED_ROOT_LATE_NU3CCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_UMANAGED_ROOT_LATE_NU3` demonstrates the component `%tmp` in the context of an [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) method that assigns the final keys. See the executable program for this example further down.

The example [Using `%pre` / `%tmp` / `%pky`](ABENDERIVED_TYPES_PRE_TMP_ABEXA.html) demonstrates the use of `%tmp` with an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) in a [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenario.

-   `MAPPED LATE`

... \\nAPPEND VALUE #( %pre = VALUE #( %pid = \-pid \\n %tmp-key\_field = \-tmp\_key ) \\n %key-key\_field = final\_key \\n ) TO mapped-demo\_umanaged\_root\_late\_num3. \\n... abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html