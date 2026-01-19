---
title: "ABENBDL_EXTENSIBILITY_MANAGED_UNM"
description: |
  ABENBDL_EXTENSIBILITY_MANAGED_UNM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSIBILITY_MANAGED_UNM.htm"
abapFile: "ABENBDL_EXTENSIBILITY_MANAGED_UNM.html"
keywords: ["ABENBDL", "EXTENSIBILITY", "MANAGED", "UNM"]
---

A [base BDEF extension](ABENRAP_BASE_BDEF_EXT_GLOSRY.html) is a repository object that extends a RAP behavior definition of type managed or unmanaged using the statement `extension`.

As a prerequisite, the respective BDEF must explicitly allow extensions as described in the topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).

The following image shows the possible components of a BDEF extension:

For BDEF extensions for unmanaged RAP BOs, the following restrictions apply:

-   The [BDEF extension header](ABENRAP_BDEF_EXT_HEADER_GLOSRY.html) is a mandatory component that starts with `extension`.
-   An [entity behavior extension](ABENRAP_BEHAVIOR_EXTENSION_GLOSRY.html) is an optional component. It extends the behavior of an existing RAP BO entity. It starts with `extend behavior for`.
-   An [extension entity behavior](ABENRAP_EXT_ENTITY_BEHAVIOR_GLOSRY.html) is an optional component that defines the behavior for an extension node. It starts with `define behavior for`.
-   An [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) can be added or a [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) may be extended.

-   No additional save can be defined.
-   No determinations and validations can be defined.
-   Node extensibility is not supported.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html