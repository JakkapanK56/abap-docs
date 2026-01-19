---
title: "ABENABAP_VERSIONS_OBSOLETE"
description: |
  ABENABAP_VERSIONS_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_VERSIONS_OBSOLETE.htm"
abapFile: "ABENABAP_VERSIONS_OBSOLETE.html"
keywords: ["do", "if", "ABENABAP", "VERSIONS", "OBSOLETE"]
---

The following [ABAP language versions](ABENABAP_VERSION_GLOSRY.html) are obsolete.

Only the versions specified under [ABAP language versions](ABENABAP_VERSIONS.html) should be used. The ABAP language versions above are obsolete for the following reasons:

All of the above language versions are no longer supported in the current release.

-   There are no application scenarios for the following versions:

-   Static ABAP with restricted object use,
-   Standard ABAP with restricted object use.

-   The associated lists of allowed repository objects have been frozen, and no more objects can be added.
-   Non-Unicode ABAP is fully [obsolete](ABENNON_UNICODE_OBSOLETE.html) and is replaced by [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html).

**Language Version** **Meaning** **Version ID**\\ [Static ABAP with restricted object use](ABENABAP_STATIC_RESTR_GLOSRY.html) In this version of ABAP, the rules for [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) apply, with restrictions on access to external [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). Dynamic specifications and statements for dynamic creation of programs are forbidden here to make sure that static checks can be carried out. The corresponding language elements are hidden in the documentation for Static ABAP with restricted object use. `3`\\ [Standard ABAP with restricted object use](ABENSTANDARD_ABAP_RESTR_OBJ_GLOSRY.html) In this version of ABAP, the rules for [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) apply, with restrictions on access to external [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html). Dynamic language elements are not forbidden in this version. `4`\\ [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.html) The version ID of a program of this type is initial. No [Unicode checks](ABENUNICODE_CHECK_GLOSRY.html) are performed in programs of this type. `-` abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_properties\_obsolete.html