---
title: "ABAPDERIVED_TYPES_GLOBAL"
description: |
  ABAPDERIVED_TYPES_GLOBAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_GLOBAL.htm"
abapFile: "ABAPDERIVED_TYPES_GLOBAL.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "GLOBAL"]
---

`%global` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is used as a component of the `REPORTED`\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) and indicates whether a message is to be retrieved for [global feature control](ABENBDL_ACTIONS_FC.html) and [global authorization](ABENBDL_AUTHORIZATION.html). These messages do not belong to a specific instance.

**Type**

The component has the following type: `ABP_BEHV_FLAG`

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section [Messages](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ac74189b5cae49c1b091f04393bac069?version=sap_cross_product_abap).

The following source code section taken from the `BP_DEMO_MANAGED_ROOT_REPORTED=CCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_MANAGED_ROOT_REPORTED` demonstrates the component `%global` in the context of an implementation for the `get_global_authorizations` method. See the executable program for this example further down.

The example [Example for Message-Related BDEF Derived Type Components](ABENDERIVED_TYPES_REPORTED_ABEXA.html) demonstrates the use of various BDEF derived type components including `%global` with a managed RAP BO.

-   `REPORTED [EARLY|LATE]`

METHOD get\_global\_authorizations. \\n\\ \\n "The variable auth\_flag represents the authorization that is \\n "granted or not. \\n "The demo avoids an authorization object. In this case, the \\n "permission is always granted. \\n DATA(auth\_flag) = abap\_true. \\n\\ \\n IF auth\_flag = abap\_true. \\n IF requested\_authorizations-%create EQ if\_abap\_behv=>mk-on. \\n result-%create = if\_abap\_behv=>auth-allowed. \\n APPEND VALUE #( \\n %msg = new\_message\_with\_text( \\n text = 'Authorization granted.' \\n severity = if\_abap\_behv\_message=>severity-success ) \\n %create = if\_abap\_behv=>mk-on \\n %global = if\_abap\_behv=>mk-on ) \\n TO reported-demo\_managed\_root\_reported. \\n\\ \\n ENDIF. \\n IF requested\_authorizations-%delete EQ if\_abap\_behv=>mk-on. \\n result-%delete = if\_abap\_behv=>auth-allowed. \\n APPEND VALUE #( \\n %msg = new\_message\_with\_text( \\n text = 'Authorization granted.' \\n severity = if\_abap\_behv\_message=>severity-success ) \\n %delete = if\_abap\_behv=>mk-on \\n %global = if\_abap\_behv=>mk-on ) \\n TO reported-demo\_managed\_root\_reported. \\n\\ \\n ENDIF. \\n\\ \\n IF requested\_authorizations-%update EQ if\_abap\_behv=>mk-on. \\n result-%update = if\_abap\_behv=>auth-allowed. \\n APPEND VALUE #( \\n %msg = new\_message\_with\_text( \\n text = 'Authorization granted.' \\n severity = if\_abap\_behv\_message=>severity-success ) \\n %update = if\_abap\_behv=>mk-on \\n %global = if\_abap\_behv=>mk-on ) \\n TO reported-demo\_managed\_root\_reported. \\n\\ \\n ENDIF. \\n\\ \\n ELSE. \\n result-%create = if\_abap\_behv=>auth-unauthorized. \\n result-%delete = if\_abap\_behv=>auth-unauthorized. \\n result-%update = if\_abap\_behv=>auth-unauthorized. \\n APPEND VALUE #( \\n %msg = new\_message\_with\_text( \\n text = 'Authorization denied.' \\n severity = if\_abap\_behv\_message=>severity-error ) \\n %create = if\_abap\_behv=>mk-off \\n %update = if\_abap\_behv=>mk-off \\n %delete = if\_abap\_behv=>mk-off \\n %global = if\_abap\_behv=>mk-on ) \\n TO reported-demo\_managed\_root\_reported. \\n ENDIF. \\n\\ \\n "Get time stamp \\n DATA: ts2 TYPE timestampl. \\n GET TIME STAMP FIELD ts2. \\n\\ \\n "Fill %OTHER \\n reported-%other = VALUE #( ( \\n new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-information \\n text = |a) Unbound message set at \\{ ts2 TIMESTAMP = ISO \\}.| \\n ) ) ). \\n\\ \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_info.html