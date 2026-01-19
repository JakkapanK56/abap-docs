---
title: "ABAPDERIVED_TYPES_OTHER"
description: |
  ABAPDERIVED_TYPES_OTHER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_OTHER.htm"
abapFile: "ABAPDERIVED_TYPES_OTHER.html"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "OTHER"]
---

`%other` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is used as a component of the `reported`\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html).

A derived type with `reported` contains a table for each entity defined in a [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) and, in addition, the component `%other`. This component is filled with an instance of the message wrapper class in case of a [RAP static transition message](ABENSTATIC_RAP_TRANS_MES_GLOSRY.html), i. e. the message is not related to a specific entity of the [RAP BO](ABENRAP_BO_GLOSRY.html).

**Type**

The component has the following type: `TYPE STANDARD TABLE OF REF TO`\\ `IF_ABAP_BEHV_MESSAGE`

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section [Messages](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ac74189b5cae49c1b091f04393bac069?version=sap_cross_product_abap).

A [state message](ABENRAP_STATE_MES_GLOSRY.html) must always be bound to a RAP BO. Hence, it cannot be allocated to the `%other` component.

The following source code section taken from the `BP_DEMO_MANAGED_ROOT_REPORTED=CCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_MANAGED_ROOT_REPORTED` demonstrates the component `%other` in the context of a method implementation for a [validation](ABENBDL_VALIDATIONS.html) that checks field values of RAP BO instances before saving. See the executable program for this example further down. Note that filling the `%other` component in this context is only for demonstration purposes.

The example [Example for Message-Related BDEF Derived Type Components](ABENDERIVED_TYPES_REPORTED_ABEXA.html) demonstrates the use of various BDEF derived type components including `%other` with a managed RAP BO.

-   `REPORTED [EARLY|LATE]`

METHOD ValidateNum. \\n\\ \\n READ ENTITIES OF demo\_managed\_root\_reported IN LOCAL MODE \\n ENTITY demo\_managed\_child\_reported \\n FIELDS ( key\_field key\_field\_child ch\_field3 ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_child\_result) \\n FAILED DATA(lt\_child\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP lt\_child\_failed ). \\n\\ \\n READ ENTITIES OF demo\_managed\_root\_reported IN LOCAL MODE \\n ENTITY demo\_managed\_child\_reported BY \\\\\_parent \\n FIELDS ( key\_field field3 field4 ) \\n WITH CORRESPONDING #( lt\_child\_result ) \\n RESULT DATA(lt\_root\_result) \\n FAILED DATA(lt\_root\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP BASE ( failed ) lt\_root\_failed ). \\n\\ \\n LOOP AT lt\_child\_result ASSIGNING FIELD-SYMBOL(<fs\_child>). \\n ASSIGN lt\_root\_result\[ KEY entity COMPONENTS \\n key\_field = <fs\_child>-key\_field \] TO FIELD-SYMBOL(<fs\_root>). \\n\\ \\n "Invalidate state area. \\n APPEND VALUE #( %tky = <fs\_child>-%tky \\n %state\_area = 'VALIDATE\_NUMBERS' ) \\n TO reported-%own-demo\_managed\_child\_reported. \\n\\ \\n IF <fs\_child>-ch\_field3 NOT BETWEEN <fs\_root>-field3 \\n AND <fs\_root>-field4. \\n\\ \\n "Fill FAILED \\n APPEND VALUE #( %tky = <fs\_child>-%tky ) \\n TO failed-demo\_managed\_child\_reported. \\n "Fill REPORTED \\n APPEND VALUE #( \\n %tky = <fs\_child>-%tky \\n %state\_area = 'VALIDATE\_NUMBERS' \\n %path = VALUE #( demo\_managed\_root\_reported-key\_field = \\n <fs\_child>-key\_field ) \\n %msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-error \\n text = 'Validation failed' ) \\n %element-ch\_field3 = if\_abap\_behv=>mk-on ) \\n TO reported-%own-demo\_managed\_child\_reported. \\n\\ \\n ENDIF. \\n\\ \\n ENDLOOP. \\n\\ \\n "Get time stamp \\n DATA: ts1 TYPE timestampl. \\n GET TIME STAMP FIELD ts1. \\n\\ \\n "Fill %OTHER \\n reported-%other = VALUE #( \\n ( new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-information \\n text = |b) Unbound message set at \\{ ts1 TIMESTAMP = ISO \\}.| \\n ) ) ). \\n\\ \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_info.html