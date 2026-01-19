---
title: "ABENBDL_EXTERNAL"
description: |
  ABENBDL_EXTERNAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXTERNAL.htm"
abapFile: "ABENBDL_EXTERNAL.html"
keywords: ["update", "delete", "do", "if", "case", "data", "ABENBDL", "EXTERNAL"]
---

`... external 'ExternalName' ...`

The [RAP BO operation addition](ABENBDL_OPERATIONS_ADDITIONS.html) `external` can be used to provide an alias name for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the actual action name.

The external name `ExternalName` is specified in single quotes (`'`).

An external name can be specified in all positions where this is documented, for example, for [entity behavior definitions](ABENCDS_ENTITY_BDEF_GLOSRY.html), [actions](ABENRAP_ACTION_GLOSRY.html), and [functions](ABENRAP_FUNCTION_GLOSRY.html).

In the case of a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html), the optional external name must start with `GetDefaultsFor`. Otherwise, a syntax check error occurs. For further details, see the topic [RAP - `default function`](ABENBDL_DEFAULT_FUNCTION.html).

The following RAP BO interface defines an external name for the entity behavior definition.

interface;\\nextensible;\\n\\ndefine behavior for DEMO\_INTF\_M alias root\_interface\\n external 'ThisIsAnExternalName'\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html