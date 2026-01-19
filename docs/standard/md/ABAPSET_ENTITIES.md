---
title: "ABAPSET_ENTITIES"
description: |
  ABAPSET_ENTITIES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_ENTITIES.htm"
abapFile: "ABAPSET_ENTITIES.html"
keywords: ["if", "case", "ABAPSET", "ENTITIES"]
---

`SET ENTITIES OF root_ent BLOCKED|UNBLOCKED.`

[1. `... BLOCKED`](#ABAP_ADDITION_1@3@)

[2. `... UNBLOCKED`](#ABAP_ADDITION_2@3@)

Blocks or unblocks the ABAP EML access to [RAP business objects](ABENRAP_BO_GLOSRY.html). The statement can only be used in [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html).

`root_ent` stands for the full name of a [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) which must be specified. The statement is only allowed in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) of the specified RAP BO root entity. The following restrictions apply to the specification of `root_ent`. These are not allowed:

ABAP EML requests are blocked or unblocked for the following statements when using the `SET ENTITIES` statements for the specified root entities:

The blocking is valid until the end of a [RAP transaction](ABENRAP_LUW_GLOSRY.html). For each RAP BO root entity blocked in one or more statements, an internal counter is incremented in case of a `SET ENTITIES OF ... BLOCKED` statement and decremented in case of a `SET ENTITIES OF ... UNBLOCKED` statement. The counter cannot be negative. The value *0* in the counter means unblocked and a value greater than *0* means blocked. The value in the counter is only visible in the short dump message mentioned below.

`sy-subrc` is set by the statement with both additions `BLOCKED` and `UNBLOCKED` in the same way:

Blocks the ABAP EML access to [RAP business objects](ABENRAP_BO_GLOSRY.html).

Unblocks the ABAP EML access to [RAP business objects](ABENRAP_BO_GLOSRY.html).

The example [`SET ENTITIES`](ABENEML_SET_ENTITIES_ABEXA.html) demonstrates the `SET ENTITIES` statements with a managed RAP BO. Note that this example produces a short dump.

-   [Child entities](ABENCHILD_ENTITY_GLOSRY.html)
-   [Abstract](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) root entities
-   [Interface](ABENRAP_BO_INTERFACE_GLOSRY.html) root entities
-   [Projection](ABENRAP_PROJECTION_BO_GLOSRY.html) root entities
-   [Extensions](ABENRAP_BO_EXTENSION_GLOSRY.html)

-   [`MODIFY ENTITY, ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES.html)
-   [`READ ENTITY, ENTITIES`](ABAPREAD_ENTITY_ENTITIES.html)
-   [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html)
-   [`SET LOCKS`](ABAPSET_LOCKS.html)

-   *0*: The blocking status has changed successfully.
-   *4*: Set whenever the status *blocked* or *unblocked* has not changed for the specified root entity.

-   A [short dump](ABENSHORT_DUMP_GLOSRY.html) is raised for blocked statements with the exception `CX_ABAP_BEHV_RUNTIME_ERROR`. The short dump contains the following information:

-   The affected RAP BO root entity
-   The current blocking counter for the affected root entity
-   The source position of the last `SET ENTITIES OF ... BLOCKED` statement for the affected root entity

-   ABAP EML statements with the addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) are affected in the same way as ABAP EML statements without the addition.
-   In [RAP create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) and [read-by-association operations](ABENRAP_RBA_OPERATION_GLOSRY.html) in the context of [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html), the affected source root entity and affected target root entity are checked for blockings.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abeneml\_in\_abp.html