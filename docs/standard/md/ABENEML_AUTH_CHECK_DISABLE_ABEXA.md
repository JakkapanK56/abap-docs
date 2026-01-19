---
title: "ABENEML_AUTH_CHECK_DISABLE_ABEXA"
description: |
  ABENEML_AUTH_CHECK_DISABLE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEML_AUTH_CHECK_DISABLE_ABEXA.htm"
abapFile: "ABENEML_AUTH_CHECK_DISABLE_ABEXA.html"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "ABENEML", "AUTH", "CHECK", "DISABLE", "ABEXA"]
---

This example demonstrates the ABAP EML statement `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END.` with an unmanaged RAP business object.

**Data model**

The CDS data model consists of the root entity `DEMO_UNMANAGED_AUTH`:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_UNMANAGED_AUTH` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Behavior implementation**

For the above BDEF, one [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_UNMANAGED_AUTH`. The actual behavior implementation takes place in local classes that are defined and implemented in the `BP_DEMO_UNMANAGED_AUTH========CCIMP` of the behavior pool. The [handler methods](ABAPMETHODS_FOR_RAP_BEHV.html) do not contain any implementations. To demonstrate the statement `AUTHORITY-CHECK DISABLE`, multiple [`AUTHORITY-CHECK OBJECT`](ABAPAUTHORITY-CHECK.html) statements are included in the `read` method that check the authorization. One of these statements is inside an `AUTHORITY-CHECK DISABLE` statement. An internal table that is declared in the global class is filled to log `sy-subrc` values that are returned by the individual `AUTHORITY-CHECK OBJECT` statements.

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class:

A [RAP read operation](ABENRAP_READ_OPERATION_GLOSRY.html) is performed.

As shown above, the BDEF defines two [RAP authorization contexts](ABENCDS_AUTH_CONTEXT_GLOSRY.html) using the demo authorization objects `AUTHOBJ1` and `AUTHOBJ2`. For `AUTHOBJ2`, an authority check is disabled for `read`.

The output shows the entries of an internal which demonstrates the effect of the `AUTHORITY-CHECK DISABLE` statements that are implemented in the local class of the behavior pool. When an `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END` statement is used, the field `EML_STMNT_USED` is flagged. When an authorization context is activated, authority checks for the associated authorization objects are always successful and the returned value for `sy-subrc` is *0*. See more information on the `sy-subrc` values returned by `AUTHORITY-CHECK OBJECT` statements in the [ABAP Keyword Documentation](ABAPAUTHORITY-CHECK.html).

Table entries:

-   The first two entries show the `sy-subrc` values returned by `AUTHORITY-CHECK OBJECT` statements that are used with the respective authorization objects. `sy-subrc` is only *0* for `AUTHOBJ2` because the authorization context is defined with the addition `... for disable ( read )` in the BDEF which shows that the `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END` is implicitly wrapped around this authorization context. This is not true for the authorization context `ac1`.
-   The third entry shows the effect of `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END` statement which is used for the authorization context `ac1`. An `AUTHORITY-CHECK OBJECT` statement that is used within an `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END` statement has the effect that the `sy-subrc` value shows *0* indicating that the authorization context is disabled.
-   Note that putting the authorization context `ac2` inside an `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END` statement is irrelevant because it is implicitly there due to the BDEF specification.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_UNMANAGED\_AUTH\\nas select from demo\_tab\_root\_7 \\{\\n key key\_field,\\n char1,\\n char2,\\n num1,\\n num2\\n\\}\\n unmanaged implementation in class bp\_demo\_unmanaged\_auth unique;\\nstrict(2);\\n\\ndefine authorization context ac1\\n\\{\\n 'AUTHOBJ1';\\n\\}\\n\\ndefine authorization context ac2\\nfor disable ( read )\\n\\{\\n 'AUTHOBJ2';\\n\\}\\n\\ndefine behavior for DEMO\_UNMANAGED\_AUTH\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n\\} \* Public class definition \\nCLASS cl\_demo\_rap\_auth\_check\_disable DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_auth\_check\_disable IMPLEMENTATION. \\n METHOD main. \\n READ ENTITY demo\_unmanaged\_auth \\n FROM VALUE #( ( key\_field = 1 ) ) \\n RESULT FINAL(res). \\n\\ \\n out->begin\_section( \`Demo for AUTHORITY-CHECK DISABLE\` \\n )->write( bp\_demo\_unmanaged\_auth=>itab ). \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_7. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_rap\_auth\_check\_disable DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_auth\_check\_disable IMPLEMENTATION. \\n METHOD main. \\n READ ENTITY demo\_unmanaged\_auth \\n FROM VALUE #( ( key\_field = 1 ) ) \\n RESULT FINAL(res). \\n\\ \\n out->begin\_section( \`Demo for AUTHORITY-CHECK DISABLE\` \\n )->write( bp\_demo\_unmanaged\_auth=>itab ). \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_7. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abeneml\_in\_abp.html abapauthority-check\_disable.html