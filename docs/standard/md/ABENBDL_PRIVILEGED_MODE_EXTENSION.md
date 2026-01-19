---
title: "For further details, see"
description: |
  The following source code shows BDEF extension `DEMO_RAP_EXTENSION_2`. It extends BDEF `DEMO_RAP_EXTENSIBLE_ROOT`. The extension defines an authorization context for disable `Context02`, which is disabled in privileged mode. -   If the base BDEF specifies BDEF privileged mode, but the extension does
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_PRIVILEGED_MODE_EXTENSION.htm"
abapFile: "ABENBDL_PRIVILEGED_MODE_EXTENSION.html"
keywords: ["delete", "do", "if", "ABENBDL", "PRIVILEGED", "MODE", "EXTENSION"]
---

`...  with privileged mode disabling ContextName;  ...`

Enables [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html) for an extended RAP BO. BDEF privileged mode is a prerequisite for using the addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) in [ABAP EML](ABENABAP_EML_GLOSRY.html) when consuming the extended RAP BO.

`ContextName` must be an [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) that is specified in the same BDEF extension. Only one authorization context for disable can be specified after `with privileged mode disabling`.

The effect is that the [authorization context](ABENCDS_AUTH_CONTEXT_GLOSRY.html)\\ `ContextName` is automatically disabled when a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) uses [privileged access](ABAPEML_PRIVILEGED.html) to the extended RAP BO in question.

Privileged access with [ABAP EML](ABENABAP_EML_GLOSRY.html) is possible as soon as either the original BDEF or one of its extensions specifies privileged mode. The following rules apply:

For further details, see

The following source code shows BDEF extension `DEMO_RAP_EXTENSION_2`. It extends BDEF `DEMO_RAP_EXTENSIBLE_ROOT`. The extension defines an authorization context for disable `Context02`, which is disabled in privileged mode.

-   If the base BDEF specifies BDEF privileged mode, but the extension does not specify privileged mode, privileged EML access is allowed.
-   If the base BDEF does not specify BDEF privileged mode, but an extension specifies BDEF privileged mode, privileged EML access is allowed, but a syntax check warning occurs. This is because the base BDEF itself does not enable BDEF privileged mode, and privileged access depends on the extension. If the extension were deleted, the privileged call would get syntax check errors.

-   [RAP BDL - `with privileged mode`](ABENBDL_PRIVILEGED_MODE.html).
-   [ABAP EML - `PRIVILEGED`](ABAPEML_PRIVILEGED.html).

extension using interface demo\_rap\_ext\_using\_interface;\\nwith privileged mode disabling Context02;\\n\\nextend behavior for RootInterface\\n\\{\\n\\}\\n\\ndefine authorization context Context02\\n\\{\\n 'AUTHOBJ8';\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extension\_header.html