---
title: "ABAPDERIVED_TYPES_OBSOLETE"
description: |
  ABAPDERIVED_TYPES_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_OBSOLETE.htm"
abapFile: "ABAPDERIVED_TYPES_OBSOLETE.html"
keywords: ["do", "if", "types", "internal-table", "ABAPDERIVED", "TYPES", "OBSOLETE"]
---

`... [TYPE]\ \{ TABLE | STRUCTURE \} FOR LOCK bdef.`

Special ABAP type that is used for internal tables and structures in the context of [RAP](ABENRAP_GLOSRY.html) to enable the communication between a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html).

The following table covers the variants including information on the BDEF prerequisites and its components.

For more information on the components, see [Components of BDEF Derived Types](ABAPDERIVED_TYPES_COMP.html). For more information on the BDEF specifications, see the subtopics in [ABAP CDS - BDL for Behavior Definitions](ABENBDL.html).

-   [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html)
-   [`TYPE STRUCTURE FOR`](ABAPTYPE_STRUCTURE_FOR.html)

**`TYPE TABLE FOR ...`** **Purpose** **BDEF Prerequisites**\\ **Components**\\ `LOCK`\\ Used to specify [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) that are to be locked in the context of the ABAP EML statement [`SET LOCKS`](ABAPSET_LOCKS.html). It is basically the same as `TYPE TABLE KEY OF` (or `TYPE STRUCTURE FOR KEY OF` respectively). In ADT, a variable typed with `TYPE TABLE FOR LOCK` shows `TYPE TABLE FOR KEY OF` (or `TYPE STRUCTURE FOR LOCK` shows `TYPE STRUCTURE FOR KEY OF` respectively) in the element information (F2). See the details in the RAP BDL documentation for [locking](ABENBDL_LOCKING.html). The keys (not `%key`). \\
\\
**Note:**\\ *%is\_draft* and *%pid* are not possible. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenrap\_obsolete.html abenrap\_le\_obsolete.html