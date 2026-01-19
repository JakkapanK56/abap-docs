---
title: "ABAPDERIVED_TYPES_FAIL"
description: |
  ABAPDERIVED_TYPES_FAIL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_FAIL.htm"
abapFile: "ABAPDERIVED_TYPES_FAIL.html"
keywords: ["update", "loop", "do", "if", "case", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "FAIL"]
---

`%fail` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is used as a component of the `FAILED`\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html).

`%fail` is a structure that stores the symptom of a failed [RAP BO](ABENRAP_BO_GLOSRY.html) instance in the component `cause`). The values of the failure cause (for example, `NOT_FOUND` for untraceable entries) are defined in the interface `IF_ABAP_BEHV`: `IF_ABAP_BEHV=>T_FAIL_CAUSE`.

**Type**

`%fail-cause` has the following type: Type `T_FAILINFO` of interface `IF_ABAP_BEHV`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section [Messages](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ac74189b5cae49c1b091f04393bac069?version=sap_cross_product_abap).

The following source code section taken from the `BP_DEMO_MANAGED_ROOT_FAILED===CCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_MANAGED_ROOT_FAILED` demonstrates the component `%fail` in the context of an implementation for the `get_instance_features` method. See the executable program for this example further down.

The example [Using `%fail`](ABENDERIVED_TYPES_FAIL_ABEXA.html) demonstrates the use of `%fail` with a managed RAP BO.

-   `FAILED [EARLY|LATE]`

METHOD get\_instance\_features. \\n\\ \\nREAD ENTITIES OF demo\_managed\_root\_failed IN LOCAL MODE \\n ENTITY demo\_managed\_root\_failed FIELDS ( field2 ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_inst\_features) \\n FAILED failed. \\n\\ \\n IF lt\_inst\_features IS INITIAL. \\n APPEND VALUE #( \\n %msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-information \\n text = 'get\_instance\_features: Not relevant!' ) \\n ) TO reported-demo\_managed\_root\_failed. \\n ELSE. \\n LOOP AT lt\_inst\_features ASSIGNING FIELD-SYMBOL(<fs>). \\n CASE <fs>-field2. \\n WHEN 'ZZZ'. \\n APPEND VALUE #( %tky = <fs>-%tky \\n %update = if\_abap\_behv=>fc-o-disabled \\n ) TO result. \\n WHEN OTHERS. \\n APPEND VALUE #( \\n %msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-information \\n text = 'get\_instance\_features: field3 is unrestricted!' ) \\n key\_field = <fs>-key\_field \\n ) TO reported-demo\_managed\_root\_failed. \\n ENDCASE. \\n ENDLOOP. \\nENDIF. \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_info.html