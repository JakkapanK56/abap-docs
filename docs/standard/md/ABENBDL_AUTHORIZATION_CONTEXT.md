---
title: "ABENBDL_AUTHORIZATION_CONTEXT"
description: |
  ABENBDL_AUTHORIZATION_CONTEXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_AUTHORIZATION_CONTEXT.htm"
abapFile: "ABENBDL_AUTHORIZATION_CONTEXT.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "types", "ABENBDL", "AUTHORIZATION", "CONTEXT"]
---

1\. `define own authorization context by privileged mode;`\\
`\ | define own authorization context by privileged mode and \{[[AuthObject1](ABENBC_AUTHORITY_CHECK.html);]\ [[AuthObject2](ABENBC_AUTHORITY_CHECK.html);]\ [...]\}`\\
`\ | define own authorization context \{[[AuthObject1](ABENBC_AUTHORITY_CHECK.html);]\ [[AuthObject2](ABENBC_AUTHORITY_CHECK.html);]\ [...]\}`

2\. `define authorization context ContextName [for disable( Options )]\ \ \{ [[AuthObject1](ABENBC_AUTHORITY_CHECK.html);]\ [[AuthObject2](ABENBC_AUTHORITY_CHECK.html);]\ [...]\ \}`

A [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) can define [authorization contexts](ABENCDS_AUTH_CON_GLOSRY.html) that list multiple [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) that are used for the ABAP statement [`AUTHORITY-CHECK OBJECT`](ABAPAUTHORITY-CHECK.html). There are different types of authorization contexts:

SAP has configured authorization objects to be allowed or forbidden for use in full authorization contexts or authorization contexts for disable. This configuration must be respected. Otherwise, a syntax check warning occurs. When using [strict mode version 2](ABENBDL_STRICT_2.html), a syntax check error occurs.

If the authorization context for disable is used by the syntax [`with privileged mode disabling ContextName`](ABENBDL_PRIVILEGED_MODE.html), then it must be ensured that this authorization context for disable does not contradict the full authorization context. This means:

The following managed BDEF defines three authorization contexts:

In this example, the authorization context `NoCheckWhenPrivileged` contains a subset of authorization objects of the own authorization context. The own authorization context documents all authorization objects that are used by a RAP BO implementation and `NoCheckWhenPrivileged` defines which ones of them are skipped in privileged mode.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [*FOR INSTANCE AUTHORIZATION*](ABAPHANDLER_METH_AUTH.html) is not implemented here. In a real-life scenario, the authorization objects from the own authorization context would be implemented in this RAP handler method.

[Full Authorization Context](ABENBDL_DEF_OWN_AUTH_CONTEXT.html)

[Authorization Context for Disable](ABENBDL_DEF_AUTH_CONTEXT.html)

-   [Full authorization context](ABENCDS_OWN_AC_GLOSRY.html)

-   Defined using the statement [`define own authorization context [...]`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html).
-   List of [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) which are checked by the implementation methods of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) itself, or by existing code that is called by the ABAP behavior pool implementation. The full authorization context documents the authorization objects used in the implementation of the RAP BO in question. It must be complete and exhaustive. Otherwise, a syntax check warning occurs.

-   [Authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html)

-   Defined using the statement [`define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html).
-   List of [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html). When an authorization context for disable is activated, the [authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html) for all associated authorization objects always return the value *authorized*. That means, the respective authorization checks are skipped.

-   A full authorization context must be specified that contains all authorization objects of this particular authorization context for disable. Otherwise, a syntax check warning occurs.
-   All authorization objects of the full authorization context must be specified in the authorization context for disable in question except for the authorization objects which are forbidden in authorization context for disable as per their classification. Otherwise, a syntax check warning occurs.

-   Own authorization context: Lists all authorization objects used by the RAP BO implementation. It is modelled by privileged mode and adds two further authorization objects `AUTHOBJ5` and `AUTHOBJ6`. These two further authorization objects are not included in the own authorization context. This is OK in this case, since they are classified as `not allowed in BDEF privileged mode` by SAP.
-   `NoCheckWhenPrivileged`: Lists authorization objects that are skipped by a RAP BO consumer with [privileged access](ABAPEML_PRIVILEGED.html).
-   `NoCheckWhenReadingorModifying`: Lists authorization objects that are skipped by the [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR READ`](ABAPHANDLER_METH_READ.html) and [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).

managed implementation in class bp\_demo\_rap\_own\_auth\_context unique;\\nstrict(2);\\nextensible;\\n\\nwith privileged mode disabling NoCheckWhenPrivileged;\\n\\ndefine authorization context NoCheckWhenPrivileged\\n\\{\\n'AUTHOBJ1' ;\\n\\}\\n\\ndefine own authorization context by privileged mode and\\n\\{\\n'AUTHOBJ5' ;\\n'AUTHOBJ6' ;\\n\\}\\n\\ndefine authorization context NoCheckWhenReadingorModifying\\nfor disable (modify, read) ##warn\_OK\\n\\{\\n'AUTHOBJ4' ;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_OWN\_AUTH\_CONTEXT alias Root\\npersistent table DEMO\_DBTAB\_ROOT\\nlock master\\nauthorization master ( instance, global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n field ( readonly ) KeyField;\\n\\n mapping for demo\_dbtab\_root corresponding extensible\\n \\{\\n KeyField = key\_field;\\n DataField = data\_field;\\n CharField = char\_field;\\n CharField2 = char\_field\_2;\\n DecField = dec\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_OWN\_AUTH\_CON\_CHILD alias Child\\npersistent table DEMO\_DBTAB\_CHILD\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField, KeyFieldChild;\\n association \_parent;\\n\\n mapping for demo\_dbtab\_child\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html