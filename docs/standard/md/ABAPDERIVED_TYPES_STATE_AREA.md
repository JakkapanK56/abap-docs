---
title: "ABAPDERIVED_TYPES_STATE_AREA"
description: |
  ABAPDERIVED_TYPES_STATE_AREA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_STATE_AREA.htm"
abapFile: "ABAPDERIVED_TYPES_STATE_AREA.html"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "STATE", "AREA"]
---

`%state_area` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is a [character string](ABENCHARACTER_STRING_GLOSRY.html) of type [`string`](ABENBUILTIN_TYPES_CHARACTER.html) and used as a component of the `REPORTED`\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html), which is filled by the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html).

If this component is filled, the framework interprets a message as [state message](ABENRAP_STATE_MES_GLOSRY.html). Otherwise, a message is interpreted as a [transition message](ABENRAP_TRANS_MES_GLOSRY.html).

In ABAP EML, state messages can only be accessed via an ABAP EML [`READ`](ABAPREAD_ENTITY_SHORT.html) statement. In this case, the `%state_area` component is filled with the value `%STATE`. In all other ABAP EML statements, the [`reported`](ABAPTYPE_RESPONSE_FOR.html) response parameter only contains transition messages.

The `%state_area` component is mainly relevant in the following contexts:

**Note** You must manually invalidate state messages, i. e. remove the assignment of persisted messages, in the RAP BO provider implementation. To identify the messages, use the respective key ([*%tky*](ABAPDERIVED_TYPES_TKY.html)) and *%state\_area* string.

The following example shows the manual invalidation of a state message.

You can also use a constant to invalidate all state messages for an instance:

**Type**

The component has the following type: `STRING`

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section [Messages](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ac74189b5cae49c1b091f04393bac069?version=sap_cross_product_abap).

The following source code section taken from the `BP_DEMO_MANAGED_ROOT_REPORTED=CCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_MANAGED_ROOT_REPORTED` demonstrates the component `%state_area` in the context of a method implementation for a [validation](ABENBDL_VALIDATIONS.html) that checks field values of RAP BO instances before saving. See the executable program for this example further down.

-   [draft](ABENBDL_WITH_DRAFT.html) scenarios because state messages are persisted (in table `RAP_MESSAGES`) until the state of the RAP BO is changed. The string provided is not relevant for the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html). The RAP BO consumer is only interested in transition messages.
-   [`finalize`](ABENSAVER_FINALIZE.html) and [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html) RAP saver methods in [unmanaged RAP business objects](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [RAP determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [validations](ABENRAP_VALIDATION_GLOSRY.html) in [managed RAP business objects](ABENMANAGED_RAP_BO_GLOSRY.html)

-   `REPORTED [EARLY|LATE]`

-   The example [Example for message-related BDEF derived type components](ABENDERIVED_TYPES_REPORTED_ABEXA.html) demonstrates the use of various BDEF derived type components including `%state_area` with a managed RAP BO.
-   [RAP Messages: Transition and State Messages](ABENRAP_MESSAGES_ABEXA.html)

APPEND VALUE #( %tky = instance-%tky \\n %state\_area = \`STATE\_AREA\_NAME\` ) \\nTO reported-rap\_bo\_entity. APPEND VALUE #( %tky = instance-%tky \\n %state\_area = if\_abap\_behv=>state\_area\_all ) \\nTO reported-rap\_bo\_entity. METHOD ValidateNum. \\n\\ \\n READ ENTITIES OF demo\_managed\_root\_reported IN LOCAL MODE \\n ENTITY demo\_managed\_child\_reported \\n FIELDS ( key\_field key\_field\_child ch\_field3 ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_child\_result) \\n FAILED DATA(lt\_child\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP lt\_child\_failed ). \\n\\ \\n READ ENTITIES OF demo\_managed\_root\_reported IN LOCAL MODE \\n ENTITY demo\_managed\_child\_reported BY \\\\\_parent \\n FIELDS ( key\_field field3 field4 ) \\n WITH CORRESPONDING #( lt\_child\_result ) \\n RESULT DATA(lt\_root\_result) \\n FAILED DATA(lt\_root\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP BASE ( failed ) lt\_root\_failed ). \\n\\ \\n LOOP AT lt\_child\_result ASSIGNING FIELD-SYMBOL(<fs\_child>). \\n ASSIGN lt\_root\_result\[ KEY entity COMPONENTS \\n key\_field = <fs\_child>-key\_field \] TO FIELD-SYMBOL(<fs\_root>). \\n\\ \\n "Invalidate state area. \\n APPEND VALUE #( %tky = <fs\_child>-%tky \\n %state\_area = 'VALIDATE\_NUMBERS' ) \\n TO reported-%own-demo\_managed\_child\_reported. \\n\\ \\n IF <fs\_child>-ch\_field3 NOT BETWEEN <fs\_root>-field3 \\n AND <fs\_root>-field4. \\n\\ \\n "Fill FAILED \\n APPEND VALUE #( %tky = <fs\_child>-%tky ) \\n TO failed-demo\_managed\_child\_reported. \\n "Fill REPORTED \\n APPEND VALUE #( \\n %tky = <fs\_child>-%tky \\n %state\_area = 'VALIDATE\_NUMBERS' \\n %path = VALUE #( demo\_managed\_root\_reported-key\_field = \\n <fs\_child>-key\_field ) \\n %msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-error \\n text = 'Validation failed' ) \\n %element-ch\_field3 = if\_abap\_behv=>mk-on ) \\n TO reported-%own-demo\_managed\_child\_reported. \\n\\ \\n ENDIF. \\n\\ \\n ENDLOOP. \\n\\ \\n "Get time stamp \\n DATA: ts1 TYPE timestampl. \\n GET TIME STAMP FIELD ts1. \\n\\ \\n "Fill %OTHER \\n reported-%other = VALUE #( \\n ( new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-information \\n text = |b) Unbound message set at \\{ ts1 TIMESTAMP = ISO \\}.| \\n ) ) ). \\n\\ \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_info.html