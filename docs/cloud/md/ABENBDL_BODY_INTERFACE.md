---
title: "ABENBDL_BODY_INTERFACE"
description: |
  ABENBDL_BODY_INTERFACE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_BODY_INTERFACE.htm"
abapFile: "ABENBDL_BODY_INTERFACE.html"
keywords: ["update", "delete", "do", "if", "data", "types", "ABENBDL", "BODY", "INTERFACE"]
---

```\  ... [[`` `use` ``](ABENBDL_USE_PROJECTION.html)];      [[`FieldCharacteristics]`](ABENBDL_FIELD_INTERFACE.html);  ...```

In the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of an [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html), elements of the projected BDEF can be reused and field characteristics can be specified:

The following example shows an interface BDEF. The projected BO is `DEMO_RAP_UNMANAGED_DRAFT_ROOT`. The interface BDEF reuses draft handling and standard operations from the underlying BO. It also defines a foreign entity and excludes a field from the BDEF derived types.

-   [`use`](ABENBDL_USE_PROJECTION.html):
-   [Reuse](ABENBDL_USE_PROJECTION.html) of [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) and [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html). All operations (standard operations, operations for associations, actions, [functions](ABENRAP_FUNCTION_GLOSRY.html), and draft actions) and events that are to be reused from the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) must be explicitly specified using the keyword `use`. Reuse works as described in topic [RAP BDL - use](ABENBDL_USE_PROJECTION.html) with one exception: the additions `precheck` and `augment` are not available for interface BDEFs.
-   [`FieldCharacteristics`](ABENBDL_FIELD_INTERFACE.html):
-   An interface BDEF automatically and implicitly inherits all field characteristics of the underlying base BO and it can add further field attributes, as long as they do not contradict the field attributes from the base layer. A list of available field characteristics in interface BDEFs is provided in topic [Field Characteristics, Interface BDEF](ABENBDL_FIELD_INTERFACE.html).

interface;\\nuse draft;\\nforeign entity demo\_cds\_validation;\\ndefine behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root\\nuse etag\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action Activate;\\n use action Discard;\\n use action Edit;\\n use action Resume;\\n use action Prepare;\\n\\n field(suppress) DataFieldRoot;\\n\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo\_interface.html abenbdl\_define\_beh\_interface.html