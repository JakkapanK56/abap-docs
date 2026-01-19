---
title: "ABAPDERIVED_TYPES_PERM"
description: |
  ABAPDERIVED_TYPES_PERM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_PERM.htm"
abapFile: "ABAPDERIVED_TYPES_PERM.html"
keywords: ["types", "ABAPDERIVED", "TYPES", "PERM"]
---

`%perm` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It is used to summarize the permissions in nested structures under a single name.

**Type**

The components of `%perm` are nested structures that comprise those elements for which permissions can be retrieved.

**Where used**

The component group can occur in the following type declarations of [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The example [BDEF Derived Type Components in the Context of Requesting Permissions](ABENDERIVED_TYPES_MISC_ABEXA.html) demonstrates the use of various BDEF derived type components and touches upon `%perm` with a managed RAP BO.

-   `PERMISSIONS RESULT`

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html