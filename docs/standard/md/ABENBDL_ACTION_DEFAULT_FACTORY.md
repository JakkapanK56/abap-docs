---
title: "ABENBDL_ACTION_DEFAULT_FACTORY"
description: |
  ABENBDL_ACTION_DEFAULT_FACTORY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ACTION_DEFAULT_FACTORY.htm"
abapFile: "ABENBDL_ACTION_DEFAULT_FACTORY.html"
keywords: ["update", "delete", "do", "if", "class", "data", "ABENBDL", "ACTION", "DEFAULT", "FACTORY"]
---

``[[`internal`](ABENBDL_INTERNAL.html)]\ [`static`](ABENBDL_STATIC.html) default factory action                    [(                    [[`features: global`](ABENBDL_ACTIONS_FC.html)]\                    [[`precheck`](ABENBDL_PRECHECK.html)]\                    [[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\                    [[`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\                     )]\                     ActionName [[`external`](ABENBDL_EXTERNAL.html) 'ExternalName']\                    [[`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)]\                     [cardinality]                    [[`\{default function GetDefaultsForActName [external 'GetDefaultsForExtName'];\}`](ABENBDL_DEFAULT_FUNCTION.html)]``

Exactly one static factory action per [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) can be defined as default static factory action using the syntax addition `default`. The same rules apply as for factory actions, see topic [RAP - `action`, `factory`](ABENBDL_ACTION_FACTORY.html).

The addition `default` is evaluated by consuming frameworks, such as OData. These frameworks use the default factory action as standard action in certain scenarios.

Possible [RAP BO operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) to default factory actions:

The specification of default factory actions in a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) is not allowed.

The following example shows a managed BDEF which defines a static default factory action:

The projection BDEF reuses the static default factory action from the base BDEF and specifies a new static default factory action. Consuming frameworks consider the static default factory action from the projection BDEF as default.

-   [`internal`](ABENBDL_INTERNAL.html)
-   [`static`](ABENBDL_STATIC.html)
-   [`features:global`](ABENBDL_ACTIONS_FC.html)
-   [`precheck`](ABENBDL_PRECHECK.html)
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html)
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)
-   [`external`](ABENBDL_EXTERNAL.html)
-   [`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)
-   [`default function`](ABENBDL_DEFAULT_FUNCTION.html)

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   For [projection BOs](ABENRAP_PROJECTION_BO_GLOSRY.html), the following rules apply:

-   The default factory action from the [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html) can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   It is also possible to specify a new default factory action in the projection layer. If the default factory action from the base BO is reused, and at the same time, a new default factory action is defined in the projection BDEF, the default factory from the projection is considered to be the default. It overwrites the default factory action from the base BDEF. Further details on actions and functions in projection BDEFs are described in topic [RAP BDL - Actions and Functions](ABENBDL_NONSTANDARD_PROJECTION.html).

-   In [RAP BO interfaces](ABENRAP_BO_INTERFACE_GLOSRY.html), default factory action from the base BDEF can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

managed\\n implementation in class bp\_demo\_rap\_default\_factory\_a unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_DEFAULT\_FACTORY\_A alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly:update) key\_field;\\n\\n static default factory action sdfa \[1..\*\];\\n\\n static factory action sfa \[0..1\];\\n\\} projection\\nimplementation in class bp\_demo\_rap\_dfa\_pv unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_DFA\_PV alias RootProjection\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action sdfa;\\n use action sfa;\\n\\n static default factory action sdfa\_proj \[1\];\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_action.html abenbdl\_action\_factory.html