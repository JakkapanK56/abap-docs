---
title: "ABENBDL_EVENT_SIDE_EFFECT"
description: |
  ABENBDL_EVENT_SIDE_EFFECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EVENT_SIDE_EFFECT.htm"
abapFile: "ABENBDL_EVENT_SIDE_EFFECT.html"
keywords: ["update", "delete", "do", "if", "class", "ABENBDL", "EVENT", "SIDE", "EFFECT"]
---

`event EventName for side effects;`

Defines a [RAP business event for side effects](ABENRAP_SIDE_EFFCT_EVENT_GLOSRY.html) used exclusively for an [event-driven side effect](ABENRAP_EVENT_SIDEEF_GLOSRY.html) in a [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html).

A RAP business event must be raised in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) of the RAP BO in question with the [ABAP EML](ABENABAP_EML_GLOSRY.html) statement [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) in the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html). In managed RAP BOs, it is recommended that a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html) is specified using the syntax addition [`with additional save`](ABENBDL_SAVING.html) and raise the RAP business event in this additional save implementation.

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_SIDE_EFFECT_EVENT`. The business event for side effects is defined with the syntax `event MyEvent for side effects`.

-   RAP business events for side effects can be defined in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) and in [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html).
-   RAP business events for side effects can be reused in [RAP interface behavior definitions](ABENCDS_INTERFACE_BDEF_GLOSRY.html) and in [RAP projection behavior definitions](ABENCDS_PROJ_BDEF_GLOSRY.html) using the keyword [`use event`](ABENBDL_USE_PROJECTION.html).

-   Development guide for the ABAP RESTful Application Programming Model, section about [Event-Driven Side Effects](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/35e99dd3b0694d1ebbac3c865dd72d3a?version=sap_cross_product_abap).
-   [RAP - `side effects`](ABENBDL_SIDE_EFFECTS.html).

managed with additional save\\nimplementation in class bp\_demo\_rap\_side\_effect\_event unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_SIDE\_EFFECT\_EVENT alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n\\n event myEvent for side effects;\\n\\n side effects\\n \\{\\n event MyEvent affects field char\_field;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_event\_overview.html