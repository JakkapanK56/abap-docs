---
title: "ABENBDL_PRECHECK"
description: |
  ABENBDL_PRECHECK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_PRECHECK.htm"
abapFile: "ABENBDL_PRECHECK.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "try", "method", "class", "data", "ABENBDL", "PRECHECK"]
---

`... precheck ...`

A method that is called before a modify request is executed on the transactional buffer to prevent unwanted changes from reaching the application buffer.

A precheck can be defined for the following [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html):

An implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR PRECHECK`](ABAPHANDLER_METH_PRECHECK.html) in the local [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

Development guide for the ABAP RESTful Application Programming Model, section [Operation Precheck](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f6e3880b641649b1b8247486579a1c9b?version=sap_cross_product_abap).

The following example shows an unmanaged BDEF based on the CDS view entity `DEMO_RAP_UNMANAGED_PRECHECK`. It defines the RAP BO operation addition `precheck` for the standard operation `create`.

In the ABAP behavior pool `BP_DEMO_RAP_UNMANAGED_PRECHECK`, the precheck method implements a uniqueness check. It checks that the primary keys for new entity instances are unique. If the primary key values already exist, an entry is written into the `failed` and `reported` structures and the respective entity instance does not reach the application buffer.

Code snippet:

For the complete implementation in the ABAP behavior pool, see `BP_DEMO_RAP_UNMANAGED_PRECHECKCCIMP`.

The class `CL_DEMO_RAP_UNMANAGED_PRECHECK` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the following steps:

-   [standard operations](ABENBDL_STANDARD_OPERATIONS.html)
-   [operations for associations](ABENBDL_ASSOCIATION.html)
-   [actions](ABENBDL_NONSTANDARD.html)
-   [RAP hierarchy actions](ABENRAP_HIERARCHY_ACTION_GLOSRY.html)

-   Cannot be used for internal operations using the keyword [`internal`](ABENBDL_INTERNAL.html).
-   When accessing an operation with the ABAP EML statement [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html), the precheck method is not called.

-   It inserts data into the database using ABAP SQL [`INSERT`](ABAPINSERT_DBTAB.html).
-   It creates two valid new entity instances with unique keys. They pass the precheck and are written to the database.
-   It creates two more new entity instances - one is valid, one has a duplicate key value (value '1' already exists).
-   The entity instance with duplicate key is written into the `failed` and `reported` structures. The valid entity instance is committed to the database.

unmanaged\\nimplementation in class bp\_demo\_rap\_unmanaged\_precheck unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_PRECHECK\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create(precheck);\\n update;\\n delete;\\n field ( readonly:update ) KeyFieldRoot;\\n\\} METHOD precheck\_create. \\n"prep buffer \\nLOOP AT entities ASSIGNING FIELD-SYMBOL(<buffer>). \\n IF line\_exists( lcl\_buffer=>root\_buffer\[ key\_field \\n = <buffer>-KeyFieldRoot \] ). \\n ELSE. \\n SELECT SINGLE @abap\_true \\n FROM demo\_dbtab\_root \\n WHERE key\_field = @<buffer>-KeyFieldRoot \\n INTO @DATA(exists). \\n IF sy-subrc = 0. \\n SELECT \* \\n FROM demo\_dbtab\_root \\n WHERE key\_field = @<buffer>-KeyFieldRoot \\n APPENDING CORRESPONDING FIELDS \\n OF TABLE @lcl\_buffer=>root\_buffer. \\n ENDIF. \\n ENDIF. \\n ENDLOOP. \\n\\ \\n "Uniqueness Check \\n LOOP AT entities ASSIGNING FIELD-SYMBOL(<entity>). \\n "Conditions for adding instances to the transactional buffer: \\n " - %control of key field must not be flagged with 00 \\n " - key field must not be initial \\n " - line with the key must not exist (but if the line exists \\n " and it is marked as deleted, it can be added) \\n "It is assumed that %cid is always unique. \\n IF <entity>-KeyFieldRoot IS INITIAL \\n OR <entity>-%control-KeyFieldRoot = if\_abap\_behv=>mk-off \\n OR line\_exists( lcl\_buffer=>root\_buffer\[ key\_field \\n = <entity>-KeyFieldRoot \] ) \\n AND lcl\_buffer=>root\_buffer\[ key\_field \\n = <entity>-KeyFieldRoot \]-deleted IS INITIAL. \\n "Fill FAILED/REPORTED response structures. \\n APPEND VALUE #( keyfieldroot = <entity>-KeyFieldRoot \\n %cid = <entity>-%cid \\n %delete = if\_abap\_behv=>mk-off \\n %update = if\_abap\_behv=>mk-off \\n %create = if\_abap\_behv=>mk-on \\n %fail-cause = if\_abap\_behv=>cause-unspecific \\n ) \\n TO failed-demo\_rap\_unmanaged\_precheck. \\n APPEND VALUE #( %msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-error \\n text = 'Create operation failed.' ) \\n keyfieldroot = <entity>-KeyFieldRoot \\n %cid = <entity>-%cid ) \\n TO reported-demo\_rap\_unmanaged\_precheck. \\n ENDIF. \\n ENDLOOP. \\nENDMETHOD. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html