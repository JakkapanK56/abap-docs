---
title: "ABENBDL_DEF_AUTH_CONTEXT"
description: |
  ABENBDL_DEF_AUTH_CONTEXT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DEF_AUTH_CONTEXT.htm"
abapFile: "ABENBDL_DEF_AUTH_CONTEXT.html"
keywords: ["update", "delete", "do", "while", "if", "case", "method", "class", "data", "types", "ABENBDL", "DEF", "AUTH", "CONTEXT"]
---

``define authorization context ContextName        [\{for disable( modify                      | read                      | save:early                      | save:late)\}]\  \  \{     [`AuthObject1`](ABENBC_AUTHORITY_CHECK.html);    [[`AuthObject2`](ABENBC_AUTHORITY_CHECK.html);]\    [...]\  \}``

[1. `... for disable( Options ) ...`](#ABAP_ADDITION_1@3@)

A [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) can define [authorization contexts for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) using the statement `define authorization context`. Authorization contexts for disable list multiple [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) that are used for the ABAP statement [`AUTHORITY-CHECK OBJECT`](ABAPAUTHORITY-CHECK.html). When an authorization context for disable is activated, authority checks for all associated authorization objects are always successful; in other words, the respective authorization checks are skipped. This can be useful, for example, when a BDEF implements its own [authorization check](ABENBDL_AUTHORIZATION.html) and then calls existing code, which again has its own authorization checks.

One RAP behavior definition can define one or more authorization contexts for disable. The contexts may be defined before, between, or after the entity behavior definitions. Each context can contain one or more [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `AuthObject1`, `AuthObject2`, .... It is also possible to define an empty authorization context for disable. This can be useful when using [BDEF privileged mode](ABENBDL_PRIVILEGED_MODE.html): to enable BDEF privileged mode, it is mandatory to specify at least one authorization context for disable. However, some RAP BOs use authority checks that do not rely on authorization objects. In this case, an empty authorization context for disable can be specified.

The optional addition `for disable( Options )` activates the authorization context for disable in question for certain [saver](ABENABP_SAVER_METHOD_GLOSRY.html) or [handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html). For details, see *Addition 1* below.

An authorization context for disable can be activated and the corresponding authorization objects skipped in the following ways:

The following list shows the availability of the statement `define authorization context ContextName \{ ... \}`. If the optional addition `for disable( Options )` is used, special rules apply. These rules are described under *Addition 1* below.

An authorization context for disable, without the addition `for disable( Options )`, can be specified in the following [BDEF implementation types](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html):

If you define and activate an authorization context for disable which lists authorization objects (that means, it is not empty), you also need to specify a [RAP full authorization context](ABENCDS_OWN_AC_GLOSRY.html) that lists all mentioned authorization objects, unless they are forbidden for use in full authorization contexts as per their classification. Otherwise, syntax check warnings occur. Further details are described in topic [RAP - `define own authorization context`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html).

The optional registration of an authorization context for a dedicated purpose using the syntax `for disable( ... )` does **not** generate an `AUTHORITY-CHECK DISABLE BEGIN CONTEXT` ... `AUTHORITY-CHECK DISABLE END` bracket within saver or handler methods that are introduced by [BDEF extensions](ABENBDL_EXTENSION.html). The optional addition `for disable` has an effect only in the base BDEF implementation, but not in BDEF extensions.

The following managed BDEF defines two authorization contexts for disable: `ac1` and `ac2` with the addition `for disable`. A full authorization context which lists all objects from `ac_1` is also required.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [*FOR GLOBAL AUTHORIZATION*](ABAPHANDLER_METH_GLOBAL_AUTH.html) is not implemented here. In a real-life scenario, the authorization objects from the full authorization context would be implemented in this RAP handler method.

The example [Using the addition `PRIVILEGED` with an ABAP EML Statement](ABENEML_PRIVILEGED_ABEXA.html) defines an authorization context and registers it for use in privileged mode. It then demonstrates access to the RAP BO, first without the addition `PRIVILEGED`, afterwards with using `PRIVILEGED`.

The optional addition `for disable( Options )` activates the authorization context for disable in question for certain saver or handler methods. When a context is activated, then the corresponding methods automatically and implicitly skip the authorization objects listed in the associated authorization context.

Example:

define authorization context ReadContext \\n  for disable (read) \\n...

in the BDEF has the effect that

METHOD read FOR READ \[....\]\\ \\n... \\nENDMETHOD.

in the ABAP behavior pool behaves as if the code was

METHOD read FOR READ \[....\]. \\nAUTHORITY-CHECK DISABLE BEGIN CONTEXT demo\_context~ReadContext. \\n... \\nAUTHORITY-CHECK DISABLE END. \\nENDMETHOD.

The following options `Options` can be specified after `for disable` in brackets `( ... )`:

It is possible to specify one or more options `Options` within the brackets, divided a commas. Each option can only be assigned once within a RAP behavior definition.

While an authorization context for disable can be specified in BDEF extensions, the optional addition `for disable( Options )` is not available in BDEF extensions. For details, see the topic [RAP - `extension`](ABENBDL_EXTENSION_SYNTAX.html).

-   By using `AUTHORITY-CHECK DISABLE BEGIN CONTEXT` ... `AUTHORITY-CHECK DISABLE END` in the ABAP behavior pool for a handler or saver method.
-   By registering a context for use in privileged mode using the syntax statement [`with privileged mode disabling ContextName`](ABENBDL_PRIVILEGED_MODE.html).
-   By registering a context for a category of saver or handler method using the optional addition `for disable( Options )`, as described under *Addition 1* below.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Projection BDEF](ABENRAP_PROJECTION_BO_GLOSRY.html): A projection BDEF can define an authorization context for disable independently of the projected BDEF. This means that an authorization context for disable can be defined in the projection layer even if the projected entity does not have an authorization context for disable.

-   `modify`

-   Available for managed and unmanaged RAP BOs.
-   The RAP handler methods [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html) automatically skip the authorization objects listed in the associated authorization context `ContextName`.

-   `read`

-   Available for managed and unmanaged RAP BOs.
-   The RAP handler methods [`FOR READ`](ABAPHANDLER_METH_READ.html) automatically skip the authorization objects listed in the associated authorization context `ContextName`.

-   `save:early`

-   Available only for the [BDEF implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ `unmanaged`.
-   The RAP saver methods [`finalize`](ABENSAVER_FINALIZE.html) and [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html) of the [early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) automatically skip the authorization objects listed in the associated authorization context `ContextName`.

-   `save:late`

-   Available for managed and unmanaged RAP BOs.
-   The RAP saver methods [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html), [`save`](ABENSAVER_METHOD_SAVE.html), and [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) of the [late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html) automatically skip the authorization objects listed in the associated authorization context `ContextName`.

managed implementation in class bp\_demo\_rap\_auth\_context unique;\\nstrict(2);\\n\\nwith privileged mode disabling ac\_1;\\n\\ndefine authorization context ac\_1\\n\\{\\n'AUTHOBJ1' ;\\n'AUTHOBJ2' ;\\n'AUTHOBJ3' ;\\n\\}\\n\\ndefine authorization context ac\_2\\nfor disable(modify, read) ##warn\_OK\\n\\{\\n'AUTHOBJ4' ;\\n\\}\\n\\ndefine own authorization context by privileged mode;\\n\\ndefine behavior for DEMO\_RAP\_AUTH\_CONTEXT alias Root\\npersistent table DEMO\_DBTAB\_ROOT\\nlock master\\nauthorization master ( global )\\n\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n field(readonly:update) KeyField;\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyField = key\_field;\\n DataField = data\_field;\\n CharField = char\_field;\\n CharField2 = char\_field\_2;\\n DecField = dec\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_AUTH\_CONTEXT\_CHILD alias Child\\npersistent table DEMO\_DBTAB\_CHILD\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField;\\n field(readonly:update) KeyFieldChild;\\n association \_parent;\\n\\n mapping for demo\_dbtab\_child\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_authorization\_context.html