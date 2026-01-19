---
title: "ABENBDL_EXTENSION_HEADER"
description: |
  ABENBDL_EXTENSION_HEADER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSION_HEADER.htm"
abapFile: "ABENBDL_EXTENSION_HEADER.html"
keywords: ["if", "class", "ABENBDL", "EXTENSION", "HEADER"]
---

```...  [[`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html);]\  [[`with privileged mode disabling ContextName`](ABENBDL_PRIVILEGED_MODE_EXTENSION.html);]\  [[`` `extensible` ``](ABENBDL_EXT_ENABL_EXT_BASE.html);]\  ...```

The following elements are supported in a [BDEF extension header](ABENRAP_BDEF_EXT_HEADER_GLOSRY.html):

-   [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html): Specifies an [extension](ABENRAP_PREFIX_EXTENSION_GLOSRY.html)\\ [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) for the extension behavior implementation of a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html). Optional and only required if the [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) defines implementation-relevant components.
-   [`with privileged mode disabling AuthContext`](ABENBDL_PRIVILEGED_MODE_EXTENSION.html): Enables [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html). The effect is that the [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html)`ContextName` is automatically disabled when a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) accesses the business object in question with a [privileged EML call](ABAPEML_PRIVILEGED.html).
-   [`extensible`](ABENBDL_EXT_ENABL_EXT_BASE.html): If specified, [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html) is allowed. For details, see [RAP - Extensibility Enabling for Base BDEF Extensions](ABENBDL_EXT_ENABL_EXT_BASE.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html