---
title: "ABENBDL_FUNCTION"
description: |
  ABENBDL_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_FUNCTION.htm"
abapFile: "ABENBDL_FUNCTION.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "FUNCTION"]
---

``[[`internal`](ABENBDL_INTERNAL.html)]\ [[`static`](ABENBDL_STATIC.html)]\ [[`repeatable`](ABENBDL_ACTION_REPEATABLE.html)] function FunctionName                      [[`external`](ABENBDL_EXTERNAL.html) 'ExternalName']\                      [[`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)]\                       [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html);                      [[`\{default function GetDefaultsForFuncName [external 'GetDefaultsForExtName'];\}`](ABENBDL_DEFAULT_FUNCTION.html)]\                      [[`key (AlternativeKey) function FunctionName ...;`](ABENBDL_KEYFUNCTION.html)]``

A [RAP function](ABENRAP_FUNCTION_GLOSRY.html) is a user-implemented operation that returns information without any side effects. A function performs calculations or [read operations](ABENRAP_READ_OPERATION_GLOSRY.html) on business objects without issuing [locks](ABENBDL_LOCKING.html) or modifying data. An implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR READ ... FUNCTION`](ABAPHANDLER_METH_READ.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

**Note** A function must not modify any data. [*MODIFY ENTITIES*](ABAPMODIFY_ENTITY_ENTITIES.html) operations are not valid in the implementation in the ABAP behavior pool. A *MODIFY ENTITIES* statement in a function implementation leads to a a runtime errors when a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) tries to access the function in question.

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

Development guide for the ABAP RESTful Application Programming Model, section about [Functions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d401150cfdb1454d9f55d80aead9579a?version=sap_cross_product_abap).

The following example shows a managed [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) based on the CDS root view entity `DEMO_CDS_FUNCTION_1`. The business object represents a purchase order. Three functions are defined:

The class `CL_DEMO_CDS_FUNCTION` accesses the business object using [EML](ABENEML_GLOSRY.html), executes all three functions, and displays the content of their result structures. No modify operations are carried out, the functions merely deliver information in their result structure without changing database entries.

The example above is explained in detail in the executable example [RAP BDL - function](ABENBDL_FUNCTION_ABEXA.html).

-   [`static`](ABENBDL_STATIC.html): A function per default relates to a RAP BO entity instance and changes the state of the instance. [Static functions](ABENRAP_STATIC_OPERATION_GLOSRY.html) are not bound to any instance of a RAP BO entity but relate to the complete entity.
-   [`repeatable`](ABENBDL_ACTION_REPEATABLE.html): Per default, a function must not be executed multiple times on the same [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) within the same [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) request. Any attempt to do so leads to a contract check violation if the respective contract checks are switched on. The optional addition `repeatable` enables multiple executions of the same function on the same RAP BO entity instance within the same ABAP EML or OData request. For further details, see topic [RAP - `repeatable`](ABENBDL_ACTION_REPEATABLE.html).
-   [`external`](ABENBDL_EXTERNAL.html): Can be used to provide an alias name for the function for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the actual action name.
-   [`internal`](ABENBDL_INTERNAL.html): An internal function is accessible only from within the business object implementation.
-   An input parameter [`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html) can optionally be added to the function signature.
-   An output parameter [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html) is mandatory.
-   [`default function`](ABENBDL_DEFAULT_FUNCTION.html) defines a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) for the function in question. It is an optional addition that can be used to default values for the input parameter of the function. As a prerequisite, the function must specify an input parameter.
-   [`key (AlternativeKey) function ...`](ABENBDL_KEYFUNCTION.html) defines a [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html) for an [alternative BDEF key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html). For details, see the topic [RAP - `key function`](ABENBDL_KEYFUNCTION.html).

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html), functions from the base BDEF can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html). It is also possible to specify new functions as described in topic [RAP BDL - actions and functions, projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html).
-   In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), functions from the base BDEF can be reused. For details on the reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   `getDetails` is an instance function that reads the values of the fields `PurchaseDocument`, `Price`, and `Status` for the specified entity instances and returns them in the result structure.
-   `calculateTotal` is a static function that sums up the prices of all entity instances with status 'O' and returns the total in its result structure.
-   **Note** This function uses a DDIC data element as output parameter. Note that the recommended procedure is to use only CDS abstract entities as BDEF parameters.
-   `calculateDiscount` has an input parameter for the discount percentage. It subtracts the discount from the initial price and returns a reduced price in its result structure.

managed implementation in class bp\_demo\_cds\_function\_1 unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_CDS\_FUNCTION\_1 alias PurchaseDocument\\npersistent table demo\_purch\_doc\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n\\n // instance function\\n function (authorization:none) getDetails result \[0..\*\] $self;\\n\\n // static function\\n static function (authorization:none) calculateTotal\\n result \[1\] demo\_sales\_total\_price;\\n\\n //function with input parameter\\n function (authorization:none) calculateDiscount\\n parameter DEMO\_CDS\_DEDUCT\_DISCOUNT\\n result \[1\] $self;\\n\\n field ( readonly : update ) Purchasedocument;\\n\\n mapping for demo\_purch\_doc corresponding\\n \\{\\n CreaDateTime = crea\_date\_time;\\n CreaUname = crea\_uname;\\n LchgDateTime = lchg\_date\_time;\\n LchgUname = lchg\_uname;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html