---
title: "The names of the methods are predefined"
description: |
  The type of the importing parameter `imp_param` is `TYPE TABLE FOR FUNCTION IMPORT`(ABAPTYPE_TABLE_FOR.html) and automatically derived. The type for ... Note that, depending on the context, more components can be included. For example, in case of a draft-enabled RAP BO, the draft indicator `%is_d
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.htm"
abapFile: "ABAPRAP_HANDLER_DEFAULT_VAL_FUNC.html"
keywords: ["if", "case", "method", "class", "types", "ABAPRAP", "HANDLER", "DEFAULT", "VAL", "FUNC"]
---

**Handler method definition:**

```[`METHODS`](ABAPMETHODS.html)\ [getdefaultsforcreate | getdefaultsforname]\     FOR READ [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)] imp_param     FUNCTION [bdef~getdefaultsforcreate | bdef~getdefaultsforname]\     RESULT res_func.```

**Note** The syntax above only covers the definition as it is created by the quick fix in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). For all options, see [here](ABAPHANDLER_METH_READ.html).

If RAP BO operations are defined with [RAP default values functions](ABENRAP_BO_DEFAULTING_GLOSRY.html), [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) must be implemented in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

The names of the methods are predefined

The type of the importing parameter `imp_param` is [`TYPE TABLE FOR FUNCTION IMPORT`](ABAPTYPE_TABLE_FOR.html) and automatically derived. The type for ...

Note that, depending on the context, more components can be included. For example, in case of a draft-enabled RAP BO, the draft indicator [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html) is available as type component.

The type of the output parameter `res_func` is [`TYPE TABLE FOR FUNCTION RESULT`](ABAPTYPE_TABLE_FOR.html) and automatically derived. The type for ...

Topic [RAP - `default function`](ABENBDL_DEFAULT_FUNCTION.html)

-   `getdefaultsforcreate`: For [create operations](ABENRAP_CREATE_OPERATION_GLOSRY.html); cannot be a custom name
-   `getdefaultsforname`: A custom name `name` following the mandatory `getdefaultsfor` for a [create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html), [function](ABENRAP_FUNCTION_GLOSRY.html) or [action](ABENRAP_ACTION_GLOSRY.html) as specified in the [behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)

-   create operations contains [`%cid`](ABAPDERIVED_TYPES_CID.html).
-   create-by-association operations contains [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) key values.
-   static functions and actions contains `%cid`.
-   instance functions and actions contains RAP BO instance key values.

-   create and create-by-association operations contains a table for mapping the instance identifiers (key field values or `%cid`) to the fields of the related (target) entity (contained in the [`%param`](ABAPDERIVED_TYPES_PARAM.html) component).
-   functions and actions contains a table for mapping the instance identifiers (key field values or `%cid`) to the input parameter field values of the related operation (contained in the [`%param`](ABAPDERIVED_TYPES_PARAM.html) component).

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html abapmethods\_for\_rap\_behv.html abaphandler\_meth\_read.html