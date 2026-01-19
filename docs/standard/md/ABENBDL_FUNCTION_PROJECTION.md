---
title: "ABENBDL_FUNCTION_PROJECTION"
description: |
  ABENBDL_FUNCTION_PROJECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_FUNCTION_PROJECTION.htm"
abapFile: "ABENBDL_FUNCTION_PROJECTION.html"
keywords: ["update", "delete", "loop", "do", "case", "method", "class", "data", "ABENBDL", "FUNCTION", "PROJECTION"]
---

``[internal]\ [static] function FunctionName                     [[`external`](ABENBDL_EXTERNAL.html) 'ExternalName']\                     [[`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)]\                      [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html)\                     [[`\{default function GetDefaultsForFuncName [external 'GetDefaultsForExtName'];\}`](ABENBDL_DEFAULT_FUNCTION.html)]\                     [[`key (AlternativeKey) function FunctionName ...;`](ABENBDL_KEYFUNCTION.html)]``

It is possible to define a [RAP function](ABENRAP_FUNCTION_GLOSRY.html), a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html), or a [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html) for a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html) in the projection layer. This works in the same way as defining functions in a [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html); see the topic [RAP - `function`](ABENBDL_FUNCTION.html) for details.

In the case of a RAP key function, the [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html) from the underlying [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) must be reused using the syntax [`use key AltKeyName`](ABENBDL_USE_PROJECTION.html). This reused key can be used as the basis of a key function. Defining new alternative keys in a projection behavior definition is not possible.

The following example shows a projection BDEF that defines a new function in the projection layer. It is based on the underlying base BO `DEMO_RAP_STRICT`. It defines the new function `getDetails` in the projection layer.

The ABAP behavior pool implements the new function `getDetails`. This function reads the values of the fields `key_field` and `data_field` and returns them in its result structure.

The ABAP class `CL_DEMO_RAP_PROJ_NEW_FUNCTION` uses [EML](ABENEML_GLOSRY.html) to access to RAP business object. It first creates two new entity instances and then executes the function `getDetails` for both of them.

Result: The content of the fields `key_field` and `data_field` is returned in the result structure.

-   Development guide for the ABAP RESTful Application Programming Model, topic [Function Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/30708173550d4a358f87f38bcc77f6d2?version=sap_cross_product_abap).

projection implementation in class bp\_demo\_rap\_proj\_new\_function unique;\\nstrict;\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_NEW\_FUNCTION alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n function getDetails result \[0..\*\] $self;\\n\\} METHOD getDetails. \\n DATA(lt\_keys) = keys. \\n CHECK lt\_keys IS NOT INITIAL. \\n\\ \\n READ ENTITIES OF demo\_rap\_proj\_new\_function IN LOCAL MODE \\n ENTITY Root \\n FIELDS ( key\_field data\_field ) \\n WITH CORRESPONDING #( lt\_keys ) \\n RESULT DATA(lt\_item) \\n FAILED DATA(read\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP read\_failed ). \\n\\ \\n LOOP AT lt\_item ASSIGNING FIELD-SYMBOL(<fs\_item>). \\n APPEND VALUE #( %tky = <fs\_item>-%tky \\n %param = CORRESPONDING #( <fs\_item> ) ) TO result. \\n ENDLOOP. \\nENDMETHOD. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_body\_projection.html