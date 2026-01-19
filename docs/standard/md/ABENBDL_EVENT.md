---
title: "ABENBDL_EVENT"
description: |
  ABENBDL_EVENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EVENT.htm"
abapFile: "ABENBDL_EVENT.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "ABENBDL", "EVENT"]
---

`event EventName [[deep] parameter ParamName];`

Defines a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) in a [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html). A RAP business event is a data record that expresses a significant change in the state of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). An interested party that has subscribed to this event can consume and process it.

An [input parameter](ABENINPUT_PARAMETER_GLOSRY.html)\\ `ParamName` can optionally be defined to specify the information that is passed to the event consumers. This information is called the [payload](ABENPAYLOAD_GLOSRY.html) of the event.

A RAP business event must be raised in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) of the RAP BO in question with the [ABAP EML](ABENABAP_EML_GLOSRY.html) statement [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) in the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html). In managed RAP BOs, it is recommended that a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html) is specified using the syntax addition [`with additional save`](ABENBDL_SAVING.html) and raise the RAP business event in this additional save implementation.

Once a RAP business event has been created and raised, an event binding must be defined to map the event to an event type.

Development guide for the ABAP RESTful Application Programming Model, section about [RAP Business Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b925bc556d4491aad395b21ec2566ff?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_EVENT`. It defines two events:

The following CDS abstract entity is used as flat parameter:

The following abstract BDEF is used as deep parameter:

The RAP business event is raised in the RAP saver method `save_modified` as follows:

The BDEF derived type of the flat parameter looks as follows:

The BDEF derived type of the deep parameter looks as follows:

-   If `parameter ParamName` is specified, `ParamName` must be a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). The parameter is flat in this case. This means that the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) for the parameter contains a component for each field of the CDS abstract entity.
-   If `deep parameter ParamName` is specified, `ParamName` must be an [abstract BDEF](ABENCDS_ABSTRACT_BDEF_GLOSRY.html)\\ [`with hierarchy`](ABENBDL_BDEF_ABSTRACT_HEADER.html). The parameter is deep in this case. This means that the BDEF derived type for the parameter is a hierarchy that contains all entity fields plus the components for every [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html).

-   RAP business events can be defined in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) and in [unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html).
-   RAP business events can be reused in [RAP interface behavior definitions](ABENCDS_INTERFACE_BDEF_GLOSRY.html) using the keyword `use event`. This is described in the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   **Caution** Reusing RAP business events in [RAP projection behavior definitions](ABENCDS_PROJ_BDEF_GLOSRY.html) is not possible.

-   `myEvent` defines a flat input parameter
-   `myEvent1` defines a deep input parameter

managed with additional save\\nimplementation in class bp\_demo\_rap\_event unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_EVENT alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n\\n field ( readonly : update ) key\_field;\\n\\n event myEvent parameter demo\_abstract\_root\_1;\\n event myEvent1 deep parameter demo\_abstract\_root;\\n\\} @EndUserText.label: 'CDS root abstract entity, RAP event demo'\\ndefine abstract entity DEMO\_ABSTRACT\_ROOT\_1\\n\\{\\n col1: abap.int4;\\n col2: abap.char(25); \\n\\}\\n abstract;\\nstrict(2);\\nwith hierarchy;\\n\\ndefine behavior for DEMO\_ABSTRACT\_ROOT\\nwith control\\n\\{\\n association \_item1;\\n association \_item2;\\n association \_scalar;\\n\\n field ( mandatory:execute ) num1;\\n\\n\\}\\n\\ndefine behavior for DEMO\_HIER\_ABS\_ITEM1\\nwith control\\n\\{\\n field ( suppress ) root2\_id;\\n association \_root2 with hierarchy;\\n\\}\\n\\ndefine behavior for DEMO\_HIER\_ABS\_ITEM2\\nwith control\\n\\{\\n\\}\\n\\nscalar entity DEMO\_HIER\_ABS\_SCALAR field char1; METHOD save\_modified. \\n IF create-root IS NOT INITIAL. \\n\\ \\n RAISE ENTITY EVENT demo\_rap\_event~MyEvent \\n FROM VALUE #( \\n FOR var IN create-root ( \\n %param = VALUE #( col1 = var-data\_field \\n col2 = var-char\_field ) ) ). \\n ENDIF. \\n\\ \\n IF update-root IS NOT INITIAL. \\n\\ \\n RAISE ENTITY EVENT demo\_rap\_event~MyEvent1 \\n FROM VALUE #( \\n FOR var2 IN create-root ( \\n %param = VALUE #( char1 = var2-char\_field \\n num1 = var2-data\_field ) ) ). \\n ENDIF. \\nENDMETHOD. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_event\_overview.html