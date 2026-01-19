---
title: "ABENBDL_NONSTANDARD_PROJECTION"
description: |
  ABENBDL_NONSTANDARD_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_NONSTANDARD_PROJECTION.htm"
abapFile: "ABENBDL_NONSTANDARD_PROJECTION.html"
keywords: ["update", "delete", "loop", "do", "if", "method", "class", "data", "ABENBDL", "NONSTANDARD", "PROJECTION"]
---

``[[`internal`](ABENBDL_INTERNAL.html)][static][factory][\{static [default] factory\}] action                    [(                    [[`features: \{instance | global\}`](ABENBDL_ACTIONS_FC.html)]\                    [[`precheck`](ABENBDL_PRECHECK.html)]\                    [[`authorization:none`](ABENBDL_AUTHORIZATION_PROJECTION.html)]\                    [[`authorization:update`](ABENBDL_AUTHORIZATION_PROJECTION.html)]\                    [[`lock:none`](ABENBDL_LOCK_NONE.html)]\                     )]\                     ActionName [[`external 'ExternalName'`](ABENBDL_EXTERNAL.html)]\                    [[`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)]\                    [[`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html)]\                    [[`\{default function GetDefaultsForActName [external 'GetDefaultsForExtName'];\}`](ABENBDL_DEFAULT_FUNCTION.html)]``

Defines a [RAP action](ABENRAP_ACTION_GLOSRY.html) in the projection layer of a RAP BO. This works similar to defining actions in a base BDEF; see the topic [RAP - `action`](ABENBDL_ACTION.html).

There is a difference however regarding the [authorization concept](ABENBDL_AUTHORIZATION.html) of an action defined in a projection BDEF: In a projection BDEF, no authorization master from the base BDEF is available. If an authorization concept is required, this must be specified for each node of a BO node as described in topic [RAP BDL - authorization, projection BDEF](ABENBDL_AUTHORIZATION_PROJECTION.html).

The following example shows a projection BDEF that defines a new action in the projection layer. It is based on the underlying base BO `DEMO_RAP_UNMANAGED_AUTH`. It defines the new action `deductDiscount` in the projection layer. For this action, global [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) is specified.

The ABAP behavior pool implements the global authorization control and the new action.

Global authorization control: In this simple example, the condition for global authorization control is always true.

Action `deductDiscount`: The user can specify a discount percentage. This discount percentage is subtracted from the initial value of field `dec_field`.

The ABAP class `CL_DEMO_RAP_PROJ_NEW_ACTION` uses [EML](ABENEML_GLOSRY.html) to access to [RAP business object](ABENRAP_BO_GLOSRY.html). It first creates two new entity instances and then executes the action `deductDiscount` for both of them.

Result: The specified discount percentage is subtracted from the initial value.

-   Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).

projection implementation in class bp\_demo\_rap\_proj\_new\_action unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_NEW\_ACTION alias Root\\nauthorization ( global )\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;\\n\\} METHOD get\_global\_auth. \\n IF requested\_authorizations-%action-deductDiscount EQ if\_abap\_behv=>mk-on. \\n "full access granted \\n IF sy-uname = sy-uname. \\n result-%action-deductDiscount = if\_abap\_behv=>auth-allowed. \\n ELSE. \\n result-%action-deductDiscount = if\_abap\_behv=>auth-unauthorized. \\n APPEND VALUE #( %msg = new\_message\_with\_text( \\n text = 'Operation not authorized.' \\n severity = if\_abap\_behv\_message=>severity-error ) \\n %global = if\_abap\_behv=>mk-on ) TO reported-root. \\n ENDIF. \\n ENDIF. \\nENDMETHOD. METHOD deductDiscount. \\n DATA lt\_update\_item \\n TYPE TABLE FOR UPDATE demo\_rap\_proj\_new\_action. \\n DATA(lt\_keys) = keys. \\n\\ \\n LOOP AT lt\_keys ASSIGNING FIELD-SYMBOL(<fs\_key>) \\n WHERE %param-discount\_percent IS INITIAL \\n OR %param-discount\_percent > 100 \\n OR %param-discount\_percent <= 0. \\n\\ \\n APPEND VALUE #( %tky = <fs\_key>-%tky ) TO failed-root. \\n\\ \\n DELETE lt\_keys. \\n ENDLOOP. \\n\\ \\n CHECK lt\_keys IS NOT INITIAL. \\n\\ \\n "get total price \\n READ ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE \\n ENTITY Root \\n FIELDS ( DecFieldRoot ) \\n WITH CORRESPONDING #( lt\_keys ) \\n RESULT DATA(lt\_item) \\n FAILED DATA(read\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP read\_failed ). \\n\\ \\n LOOP AT lt\_item ASSIGNING FIELD-SYMBOL(<fs\_item>). \\n DATA lv\_percentage TYPE decfloat16. \\n DATA(lv\_discount\_percent) = \\n lt\_keys\[ KEY entity %tky = <fs\_item>-%tky \]-%param-discount\_percent. \\n lv\_percentage = lv\_discount\_percent / 100 . \\n DATA(lv\_reduced\_fee) = <fs\_item>-DecFieldRoot \* ( 1 - lv\_percentage ). \\n\\ \\n APPEND VALUE #( %tky = <fs\_item>-%tky \\n DecFieldRoot = lv\_reduced\_fee ) TO lt\_update\_item. \\n ENDLOOP. \\n\\ \\n "update total price with reduced price \\n MODIFY ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE \\n ENTITY Root \\n UPDATE FIELDS ( DecFieldRoot ) \\n WITH lt\_update\_item \\n FAILED DATA(update\_failed) \\n REPORTED DATA(update\_reported). \\n\\ \\n "Read changed data for action result \\n READ ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE \\n ENTITY Root \\n ALL FIELDS WITH \\n CORRESPONDING #( lt\_item ) \\n RESULT DATA(lt\_item\_with\_discount). \\n\\ \\n result = VALUE #( FOR item IN lt\_item\_with\_discount ( %tky = item-%tky \\n %param = item ) ). \\nENDMETHOD. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_body\_projection.html