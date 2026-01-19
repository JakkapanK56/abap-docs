---
title: "ABAPDERIVED_TYPES_SKEY"
description: |
  ABAPDERIVED_TYPES_SKEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_SKEY.htm"
abapFile: "ABAPDERIVED_TYPES_SKEY.html"
keywords: ["insert", "delete", "if", "data", "types", "ABAPDERIVED", "TYPES", "SKEY"]
---

`%skey` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is contained as component of [`%param`](ABAPDERIVED_TYPES_PARAM.html) and occurs in the context of [RAP key functions](ABENRAP_KEY_FUNCTION_GLOSRY.html). `%skey` contains either the [BDEF pure key](ABENRAP_PURE_KEY_GLOSRY.html) or [BDEF secondary key](ABENRAP_SECONDARY_KEY_GLOSRY.html) that are specified in the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) (BDEF).

[RAP - `key function`](ABENBDL_KEYFUNCTION.html)

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The following source code demonstrates the use of `%skey`. The explicit specification of `%skey` is optional.

-   `FUNCTION IMPORT` (RAP key function)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_dbtab\_root. \\nINSERT demo\_dbtab\_root FROM TABLE @( VALUE #( \\n( key\_field = 1 data\_field = \`A\` char\_field = 'X' char\_field\_2 = 'A' ) \\n( key\_field = 2 data\_field = \`A\` char\_field = 'Y' char\_field\_2 = 'B' ) \\n( key\_field = 3 data\_field = \`D\` char\_field = 'Z' char\_field\_2 = 'C' ) \\n( key\_field = 4 data\_field = \`A\` char\_field = 'X' char\_field\_2 = 'D' ) \\n( key\_field = 5 data\_field = \`E\` char\_field = 'Y' char\_field\_2 = 'E' ) \\n( key\_field = 6 data\_field = \`A\` char\_field = 'Z' char\_field\_2 = 'F' ) \\n( key\_field = 7 data\_field = \`A\` char\_field = 'W' char\_field\_2 = 'G' ) \\n) ). \\n\\ \\nDATA func\_imp TYPE \\n TABLE FOR FUNCTION IMPORT demo\_rap\_pure\_key~GetByAltKey. \\nfunc\_imp = VALUE #( ( %cid = \`cid1\` %param-%skey-char\_field = 'W' ) \\n ( %cid = \`cid2\` %param-%skey = 'X' ) \\n ( %cid = \`cid3\` %param-char\_field = 'Y' ) \\n ( %cid = 'cid4' %param = 'Z' ) ). \\n\\ \\nREAD ENTITY demo\_rap\_pure\_key \\n EXECUTE GetByAltKey FROM func\_imp \\n RESULT DATA(res) \\n FAILED DATA(f) \\n REPORTED DATA(r). \\n\\ \\nout->write( res ). \\n\\ \\nout->display( ). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html