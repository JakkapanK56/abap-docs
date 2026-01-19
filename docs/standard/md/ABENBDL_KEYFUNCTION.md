---
title: "ABENBDL_KEYFUNCTION"
description: |
  ABENBDL_KEYFUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_KEYFUNCTION.htm"
abapFile: "ABENBDL_KEYFUNCTION.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "KEYFUNCTION"]
---

``[[`internal`](ABENBDL_INTERNAL.html)] key (AlternativeKey) function FunctionName    [[`external`](ABENBDL_EXTERNAL.html) 'ExternalName']\    [result selective [cardinality] $self];``

A [RAP key function](ABENRAP_KEY_FUNCTION_GLOSRY.html) is a predefined [RAP function](ABENRAP_FUNCTION_GLOSRY.html) that is defined for a [BDEF alternative key](ABENRAP_ALTERNATIVE_KEY_GLOSRY.html). It receives the values of an alternative key `AlternativeKey` as input and returns the matching [entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html).

In a managed RAP BO, key functions are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html), so that no implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required. In an unmanaged RAP BO, key functions must be implemented manually in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR READ ... FUNCTION`](ABAPHANDLER_METH_READ.html) in the behavior pool.

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

Key functions are used, for example, to enable [read-by-association](ABENRAP_RBA_OPERATION_GLOSRY.html) operations in RAP BOs with [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html) involving RAP reuse objects.

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_PURE_KEY`. It defines a pure key `MyAltKey` which defines the field `char_field` as an alternative key. The key function `GetByAltKey` is defined with reference to `MyAltKey`.

The following code snippet first inserts data into the persistent database table and then it executes the key function.

As a result, all entity instances with the value *aaa* for `char_field` are returned:

-   [`internal`](ABENBDL_INTERNAL.html): An internal key function is accessible only from within the business object implementation.
-   [`external`](ABENBDL_EXTERNAL.html): Can be used to provide an alias name for the key function for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the actual action name.
-   An explicit output parameter is optional. If specified, the syntax for the output parameter is `result selective [cardinality] $self`. The cardinality specification can be `[0..1]`, `[0..*]`, or `[1]`. If no output parameter is specified, the implicit default is `result selective [1] $self`. For further details on output parameters, see [RAP - `OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html).

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html):

-   Key functions from the base BDEF can be reused using the syntax `use function`. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   It is also possible to specify new key functions.

-   [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html): Functions from the base BDEF can be reused. For details on the reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

managed implementation in class bp\_demo\_rap\_pure\_key unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_PURE\_KEY alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n\\n define pure key MyAltKey \\{ char\_field; \\}\\n\\n key ( MyAltKey ) function GetByAltKey;\\n\\} \*insert data \\nDELETE FROM demo\_dbtab\_root. \\nINSERT demo\_dbtab\_root FROM TABLE @( VALUE #( \\n ( key\_field = 1 char\_field = 'aaa' ) \\n ( key\_field = 2 char\_field = 'aaa' ) \\n ( key\_field = 3 char\_field = 'ccc' ) \\n ( key\_field = 4 char\_field = 'ddd' ) \\n ( key\_field = 5 char\_field = 'aaa' ) ) ). \\n\\ \\n\*execute key function \\nREAD ENTITIES OF demo\_rap\_pure\_key \\nENTITY root \\nEXECUTE getbyaltkey FROM VALUE #( \\n ( %cid = '1' %param-char\_field = 'aaa' ) ) \\nRESULT DATA(result) \\nFAILED DATA(failed) \\nREPORTED DATA(reported). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_function.html