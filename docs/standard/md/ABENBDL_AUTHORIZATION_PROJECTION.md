---
title: "ABENBDL_AUTHORIZATION_PROJECTION"
description: |
  ABENBDL_AUTHORIZATION_PROJECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_AUTHORIZATION_PROJECTION.htm"
abapFile: "ABENBDL_AUTHORIZATION_PROJECTION.html"
keywords: ["update", "delete", "loop", "do", "if", "method", "class", "data", "ABENBDL", "AUTHORIZATION", "PROJECTION"]
---

\\ `... authorization \{( global )                    |( instance )                    |( global,instance )\}  ...`

In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html), the [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) from the underlying [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html) is inherited. This controls [CRUD operations](ABENCRUD_GLOSRY.html) and [actions](ABENBDL_ACTION.html) that are reused in the projection using the [`use action`](ABENBDL_USE_PROJECTION.html) syntax.

Projection BDEFs can also define their own actions as described in the topic [RAP - `action`, Projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html). For these actions, it is possible to configure authorization control in the projection layer. For global authorization, this is done in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR GLOBAL AUTHORIZATION`](ABAPHANDLER_METH_GLOBAL_AUTH.html) in the local [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). For instance authorization, this is done in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR INSTANCE AUTHORIZATION`](ABAPHANDLER_METH_AUTH.html) in the local [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

Authorization control in projection BDEFs is similar to authorizations in base BDEFs (see topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html)). Here are the main differences:

The authorization control that is defined for a RAP BO entity applies to all RAP BO operations of that entity. The following RAP BO operation additions can be used to control the authorization checks for individual RAP BO operations:

In UI scenarios, authorization control is displayed as [RAP consumer hint](ABENRAP_CONSUMER_HINT_GLOSRY.html).

The following example shows a projection BDEF that defines a new action with authorization control in the projection layer. It is based on the underlying base BO `DEMO_RAP_UNMANAGED_AUTH`. It defines the new action `deductDiscount` in the projection layer. For this action, global authorization control is specified.

The ABAP behavior pool implements the global authorization control and the new action.

Global authorization control: In this simple example, the condition for global authorization control is always true.

Action `deductDiscount`: The user can specify a discount percentage. This discount percentage is subtracted from the initial value of field `dec_field`.

The ABAP class `CL_DEMO_RAP_PROJ_NEW_ACTION` uses [EML](ABENEML_GLOSRY.html) to access to RAP business object. It first creates two new entity instances and then executes the action `deductDiscount` for both of them.

Before executing the action, the RAP frameworks calls the method for global authorization control and checks whether the RAP BO consumer is allowed to execute the action.

The following example shows a projection BDEF that defines a new action with the syntax addition `authorization:update`. It is based on the underlying base BO `DEMO_RAP_EARLY_NUMBERING`.

The ABAP behavior pool implements the action `UpdateDataField`. This action sets the value of the field `DataField` to *A*.

The ABAP class `CL_DEMO_RAP_PROJ_AUTH` uses [EML](ABENEML_GLOSRY.html) to access to RAP business object. It first creates two new entity instances and then executes the action `UpdateDataField` for one of them. As a result, the field `DataField` of the respective entity instance is set to *A*.

Before executing the action, the RAP frameworks calls the base BDEF's method for global authorization control and checks whether the RAP BO consumer is allowed to execute the action. In his example, update authorization is granted.

The following example shows a projection BDEF that defines new actions with authorization control at action level. No authorization control is specified at entity level. The global and instance authorization control must be implemented in the ABAP behavior pool of the projection BDEF.

-   To define authorization control in a projection BDEF, the projection BDEF must enable [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) using the syntax [`strict[(version)]`](ABENBDL_STRICT.html).
-   There is no master/dependent relation. Each projection definition must declare for itself whether it has instance authorization, global authorization, or both.

-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html) excludes the operation in question from authorization checks. See the topic [RAP - `authorization:none`](ABENBDL_ACTIONS_AUTH.html) for further details.
-   If [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) is used, the operation in question has the same authorization control that is defined in the base BDEF for the update operation. As a prerequisite, it is required that the projection BDEF defines authorization control in its entity behavior characteristics. This configuration in the projection BDEF, however, (`instance` or `global`) has no impact, the settings from the base BO (`instance`, `global`, or both) are fully reused. See the second example listed in this topic. See the topic [RAP - `authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) for further details.
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) specifies global authorization control for the action in question. If authorization control is also defined at entity level, the specification at action level replaces the specification at entity level. Authorization control at entity level is not a prerequisite though. See the topic [RAP - `authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) for further details.
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) specifies instance authorization control for the action in question. If authorization control is also defined at entity level, the specification at action level replaces the specification at entity level. Authorization control at entity level is not a prerequisite though. See topic [RAP - `authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) for further details.
-   `authorization:global, authorization:instance` performs both instance authorization control and global authorization control for the action in question.

-   Development guide for the ABAP RESTful Application Programming Model, topic [Authorization Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2a26db5640364b46b843dca786c495d1?version=sap_cross_product_abap).

projection implementation in class bp\_demo\_rap\_proj\_new\_action unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_NEW\_ACTION alias Root\\nauthorization ( global )\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;\\n\\} METHOD get\_global\_auth. \\n IF requested\_authorizations-%action-deductDiscount EQ if\_abap\_behv=>mk-on. \\n "full access granted \\n IF sy-uname = sy-uname. \\n result-%action-deductDiscount = if\_abap\_behv=>auth-allowed. \\n ELSE. \\n result-%action-deductDiscount = if\_abap\_behv=>auth-unauthorized. \\n APPEND VALUE #( %msg = new\_message\_with\_text( \\n text = 'Operation not authorized.' \\n severity = if\_abap\_behv\_message=>severity-error ) \\n %global = if\_abap\_behv=>mk-on ) TO reported-root. \\n ENDIF. \\n ENDIF. \\nENDMETHOD. METHOD deductDiscount. \\n DATA lt\_update\_item \\n TYPE TABLE FOR UPDATE demo\_rap\_proj\_new\_action. \\n DATA(lt\_keys) = keys. \\n\\ \\n LOOP AT lt\_keys ASSIGNING FIELD-SYMBOL(<fs\_key>) \\n WHERE %param-discount\_percent IS INITIAL \\n OR %param-discount\_percent > 100 \\n OR %param-discount\_percent <= 0. \\n\\ \\n APPEND VALUE #( %tky = <fs\_key>-%tky ) TO failed-root. \\n\\ \\n DELETE lt\_keys. \\n ENDLOOP. \\n\\ \\n CHECK lt\_keys IS NOT INITIAL. \\n\\ \\n "get total price \\n READ ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE \\n ENTITY Root \\n FIELDS ( DecFieldRoot ) \\n WITH CORRESPONDING #( lt\_keys ) \\n RESULT DATA(lt\_item) \\n FAILED DATA(read\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP read\_failed ). \\n\\ \\n LOOP AT lt\_item ASSIGNING FIELD-SYMBOL(<fs\_item>). \\n DATA lv\_percentage TYPE decfloat16. \\n DATA(lv\_discount\_percent) = \\n lt\_keys\[ KEY entity %tky = <fs\_item>-%tky \]-%param-discount\_percent. \\n lv\_percentage = lv\_discount\_percent / 100 . \\n DATA(lv\_reduced\_fee) = <fs\_item>-DecFieldRoot \* ( 1 - lv\_percentage ). \\n\\ \\n APPEND VALUE #( %tky = <fs\_item>-%tky \\n DecFieldRoot = lv\_reduced\_fee ) TO lt\_update\_item. \\n ENDLOOP. \\n\\ \\n "update total price with reduced price \\n MODIFY ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE \\n ENTITY Root \\n UPDATE FIELDS ( DecFieldRoot ) \\n WITH lt\_update\_item \\n FAILED DATA(update\_failed) \\n REPORTED DATA(update\_reported). \\n\\ \\n "Read changed data for action result \\n READ ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE \\n ENTITY Root \\n ALL FIELDS WITH \\n CORRESPONDING #( lt\_item ) \\n RESULT DATA(lt\_item\_with\_discount). \\n\\ \\n result = VALUE #( FOR item IN lt\_item\_with\_discount ( %tky = item-%tky \\n %param = item ) ). \\nENDMETHOD. projection implementation in class bp\_demo\_rap\_proj\_auth unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_AUTH alias Root\\nauthorization ( global )\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n action (authorization:update) UpdateDataField result \[1\] $self;\\n\\} METHOD UpdateDataField. \\nMODIFY ENTITIES OF demo\_rap\_proj\_auth IN LOCAL MODE \\n ENTITY Root \\n UPDATE FROM VALUE #( FOR key IN keys \\n ( KeyField = key-KeyField \\n DataField = 'A' \\n %control-DataField = if\_abap\_behv=>mk-on ) ) \\nFAILED failed \\nREPORTED reported. \\n\\ \\n "Read changed data for action result \\n READ ENTITIES OF demo\_rap\_proj\_auth IN LOCAL MODE \\n ENTITY Root \\n ALL FIELDS WITH \\n CORRESPONDING #( keys ) \\n RESULT DATA(lt\_data). \\n\\ \\n result = VALUE #( FOR data IN lt\_data \\n ( %tky = data-%tky \\n %param = data ) ). \\nENDMETHOD. projection implementation in class bp\_demo\_rap\_global\_auth\_pv unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_GLOBAL\_AUTH\_PV alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n action ( authorization : instance ) ext1AuthInstance;\\n action ( authorization : global ) ext1AuthGlobal;\\n action ( authorization : global, authorization : instance )\\n ext1AuthGlobalInstance;\\n action ( authorization : none ) ext1AuthNone;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_character\_projection.html