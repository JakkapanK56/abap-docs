---
title: "ABENBDL_USE_DEFAULT_FUNCTION"
description: |
  ABENBDL_USE_DEFAULT_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_USE_DEFAULT_FUNCTION.htm"
abapFile: "ABENBDL_USE_DEFAULT_FUNCTION.html"
keywords: ["update", "delete", "ABENBDL", "USE", "DEFAULT", "FUNCTION"]
---

`... use function DefaultValuesFunction;`

Reuses a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) in a projection BDEF or in an interface BDEF. Both the operation in question and the default values function must be reused separately:

The following projection BDEF is based on the managed BDEF `DEMO_RAP_DEFAULT_VALUES_FUNC`. It reuses multiple default values functions from the base BDEF.

-   The operation for which a default values function is defined is reused as described in the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   The default values function is reused using the syntax `use function DefaultValuesFunction`. No further additions are possible.

projection;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_DEFAULT\_VALUES\_C alias Root\\n\\{\\n\\n//reuse of create + default values function for create\\n use create;\\n use function GetDefaultsForCreate;\\n\\n //reuse of action + default values function for the action\\n use action InstanceAction;\\n use function GetDefaultsForAction;\\n\\n\\n //reuse of function + default values function for the function\\n use function StaticFunction;\\n use function GetDefaultsForStaticFunction;\\n\\n //reuse of association + default values function\\n //for create-by-association\\n use association \_to\_child \\{ create; \\}\\n use function GetDefaultsForChild;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_DEFAULT\_VALUES\_CHLD\_C alias Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_to\_parent;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_body\_projection.html abenbdl\_use\_projection.html