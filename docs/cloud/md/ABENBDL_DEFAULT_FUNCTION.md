---
title: "ABENBDL_DEFAULT_FUNCTION"
description: |
  ABENBDL_DEFAULT_FUNCTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DEFAULT_FUNCTION.htm"
abapFile: "ABENBDL_DEFAULT_FUNCTION.html"
keywords: ["insert", "update", "delete", "loop", "do", "if", "method", "class", "data", "ABENBDL", "DEFAULT", "FUNCTION"]
---

``... \{default function [DefaultValuesFunctionName]\ [\ [`external 'GetDefaultsForExtName'`](ABENBDL_EXTERNAL.html)];\}``

RAP BO operation addition that defines a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) for a RAP BO operation. A default values function defaults field values or input parameters for a RAP BO operation on the user interface. An implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR READ ... FOR FUNCTION ...`](ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html) is required. `default function` can be used for the [standard operation](ABENBDL_STANDARD_OPERATIONS.html)\\ `create`, the [create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html), [actions](ABENBDL_ACTION.html), and [functions](ABENBDL_FUNCTION.html).

The name `DefaultValuesFunctionName` and the optional external name `GetDefaultsForExtName` of the default values function must start with `GetDefaultsFor`. The name of the default values function must be unique within the current BDEF. The external name does not have to be unique. If specified, it is exposed in the OData metadata.

Default values functions are defined by adding the keywords `\{default function GetDefaultsForOperation;\}` behind the respective operation and parameter definition.

Special rules apply to this addition for each operation:

[**create**](ABENBDL_STANDARD_OPERATIONS.html)

[**create by association**](ABENBDL_ASSOCIATION.html)

[**RAP action**](ABENBDL_ACTION.html)

[**RAP function**](ABENBDL_FUNCTION.html)

The following managed BDEF defines a default values function for the operations create, create-by-association, the RAP action `InstanceAction`, and the RAP function `StaticFunction`.

The default values function for the operation create is implemented in the ABAP behavior pool `BP_DEMO_RAP_DEFAULT_VALUES_FUN`. The RAP handler method `GetDefaultsForCreate` provides default values for the fields `char_field` and `lchg_date_time`.

The effect is that in an OData service, when creating a new entity instance, the fields `char_field` and `lchg_date_time` are filled with default values.

-   A dedicated name after `default function` is optional. If specified, the name must be `GetDefaultsForCreate`.
-   An external name `GetDefaultsForExtName` is not possible.
-   A syntax diagram is available in the topic [RAP - Standard Operations](ABENBDL_STANDARD_OPERATIONS.html).

-   `default function` must be specified in combination with `create` within curly brackets.
-   An external name `GetDefaultsForExtName` is possible.
-   A syntax diagram is available in the topic [RAP - Operations for Associations](ABENBDL_ASSOCIATION.html).

-   The default values function can default values for the input parameter for the action. As a prerequisite, the action must specify an input parameter [`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html). Flat, deep, and deep table parameters are supported.
-   An external name `GetDefaultsForExtName` is possible.
-   A syntax diagram is available in the topic [RAP - `action`](ABENBDL_ACTION.html).

-   The default values function can default values for the input parameter for the function. As a prerequisite, the function must specify an input parameter [`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html). Flat, deep, and deep table parameters are supported.
-   An external name `GetDefaultsForExtName` is possible.
-   A syntax diagram is available in the topic [RAP - `function`](ABENBDL_FUNCTION.html).

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html), default values functions can be defined for [actions and functions](ABENBDL_NONSTANDARD_PROJECTION.html) defined in the projection layer. See the topic [RAP - `action`, Projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html) for details.
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html), default values functions can be reused with the addition [`use`](ABENBDL_USE_DEFAULT_FUNCTION.html). The operation in question and the default values function must be reused separately. For details, see the topic [RAP - `use DefaultValuesFunction`](ABENBDL_USE_DEFAULT_FUNCTION.html).
-   In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), default values functions can be reused with the addition [`use`](ABENBDL_USE_DEFAULT_FUNCTION.html). The operation in question and the default values function must be reused separately. For details, see the topic [RAP - `use DefaultValuesFunction`](ABENBDL_USE_DEFAULT_FUNCTION.html).

-   The defaulting of values takes place in an OData service only. When accessing an operation that has a default values function attached using ABAP EML, the default values function is not accessed and no default values are provided.
-   The RAP default values function can be triggered in ABAP EML like other [RAP functions](ABENRAP_FUNCTION_GLOSRY.html), using the [`READ ENTITIES ... EXECUTE`](ABAPREAD_ENTITY_ENTITIES_OP.html) statement.

-   Development guide for the ABAP RESTful Application Programming Model, section [Operation Defaulting](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/59a29c74b40c4e7d8f2651e77a193af9?version=sap_cross_product_abap).
-   Topic [Handler Methods for RAP Default Values Functions](ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html).

managed implementation in class bp\_demo\_rap\_default\_values\_fun unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_DEFAULT\_VALUES\_FUNC alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( none )\\n\\{\\n //Default values function for create\\n create \\{ default function GetDefaultsForCreate; \\}\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n\\n //Default values function for create-by-association\\n association \_to\_child\\n \\{ create \\{ default function GetDefaultsForChild; \\} \\}\\n\\n //Default values function for action\\n action InstanceAction parameter demo\_cds\_abstract\_entity\\n \\{ default function GetDefaultsForAction; \\}\\n\\n //Default values function for static function\\n static function (authorization:none) StaticFunction\\n parameter demo\_cds\_abstract\_entity\\n result \[0..\*\] $self\\n \\{ default function GetDefaultsForStaticFunction; \\}\\n \\}\\n\\n define behavior for DEMO\_RAP\_DEFAULT\_VALUES\_CHLD alias Child\\n persistent table demo\_dbtab\_child\\n lock dependent by \_to\_parent\\n authorization dependent by \_to\_parent\\n \\{\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n field ( readonly : update ) key\_field\_child;\\n association \_to\_parent;\\n \\} METHOD GetDefaultsForCreate. \\n LOOP AT df\_create ASSIGNING FIELD-SYMBOL(<df\_create>). \\n INSERT INITIAL LINE INTO TABLE df\_create\_result \\n ASSIGNING FIELD-SYMBOL(<df\_create\_result>). \\n\\ \\n GET TIME STAMP FIELD DATA(lv\_timestamp). \\n\\ \\n <df\_create\_result> = VALUE #( \\n %cid = <df\_create>-%cid \\n %param = VALUE \\n #( char\_field = 'Default Value' \\n lchg\_date\_time = lv\_timestamp ) ). \\n ENDLOOP. \\nENDMETHOD. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html