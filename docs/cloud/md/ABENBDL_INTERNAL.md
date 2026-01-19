---
title: "ABENBDL_INTERNAL"
description: |
  ABENBDL_INTERNAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_INTERNAL.htm"
abapFile: "ABENBDL_INTERNAL.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "INTERNAL"]
---

`... internal ...`

Defines a [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) as [internal](ABENRAP_INTERNAL_OPERATION_GLOSRY.html). That means that the operation in question can only be accessed from within the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html), for example from an [action](ABENBDL_ACTION.html), a [validation](ABENBDL_VALIDATIONS.html), or a [determination](ABENBDL_DETERMINATIONS.html). When an external [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) tries to execute an internal RAP BO operation, a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) occurs.

`internal` can be applied to the following operations:

This feature is provided by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html). No implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

The following example shows a managed BDEF that defines the internal action `calculateTotalAmount` and the `on modify` determination `calcTotal`.

The internal action multiplies the value of field `Quantity` with the value of field `Amount` and inserts the result into field `Total` per entity instance. It is executed from the ABAP behavior pool by the `on modify` determination `calcTotal`.

Code snippet: determination that triggers the internal action:

For the full ABAP behavior pool implementation, see `BP_DEMO_RAP_INTERNAL==========CCIMP`.

The ABAP class `CL_DEMO_RAP_INTERNAL` uses [EML](ABENEML_GLOSRY.html) to access the RAP business object:

Result: for each entity instance, the value of the field `Total` is calculated.

-   \\ [standard operations](ABENBDL_STANDARD_OPERATIONS.html)
-   [operations for associations](ABENBDL_ASSOCIATION.html)
-   [actions](ABENBDL_ACTION.html)
-   [functions](ABENBDL_FUNCTION.html)
-   [determine actions](ABENBDL_DETERMINE_ACTION.html)
-   [draft actions](ABENBDL_DRAFT_ACTION.html)

-   If an operation is marked as `internal`, [feature control](ABENBDL_ACTIONS_FC.html) is not supported. Feature control is for external access control and is not required for internal operations.
-   [`precheck`](ABENBDL_PRECHECK.html) is not available for internal operations.
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html), [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html), and [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) are not available for internal operations.
-   Internal operations cannot be reused with the keyword [`use`](ABENBDL_USE_PROJECTION.html) in a projection BDEF or in an interface BDEF, because they are not visible there.

-   It creates five new entity instances by specifying values for the fields `Amount` and `Quantity`.
-   Code snippet:

-   Using the ABAP SQL `SELECT` statement, the content of the underlying database table is displayed.

managed implementation in class bp\_demo\_rap\_internal unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_INTERNAL alias RootEntity\\npersistent table demo\_dbtab\_field\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(numbering:managed, readonly) KeyField;\\n\\n internal action calculateTotalAmount;\\n\\n determination calcTotal on modify \\{ create; \\}\\n\\n mapping for demo\_dbtab\_field\\n \\{\\n KeyField = key\_field;\\n CharField = char\_field1;\\n Amount = int\_field1;\\n Quantity = int\_field2;\\n Total = int\_field3;\\n \\}\\n\\} METHOD calcTotal. \\n\\ \\n MODIFY ENTITIES OF demo\_rap\_internal IN LOCAL MODE \\n ENTITY RootEntity \\n EXECUTE calculateTotalAmount \\n FROM CORRESPONDING #( keys ) \\n REPORTED DATA(lt\_reported). \\n\\ \\nENDMETHOD. DELETE FROM demo\_dbtab\_field. \\n MODIFY ENTITIES OF demo\_rap\_internal \\n ENTITY RootEntity \\n CREATE FIELDS ( Amount Quantity Total ) WITH VALUE #( \\n ( %cid = '1' Amount = 16 Quantity = 1 ) \\n ( %cid = '2' Amount = 211 Quantity = 2 ) \\n ( %cid = '3' Amount = 3 Quantity = 3 ) \\n ( %cid = '4' Amount = 18 Quantity = 4 ) \\n ( %cid = '5' Amount = 10 Quantity = 5 ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n COMMIT ENTITIES. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html