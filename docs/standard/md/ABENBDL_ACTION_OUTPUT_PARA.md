---
title: "ABENBDL_ACTION_OUTPUT_PARA"
description: |
  ABENBDL_ACTION_OUTPUT_PARA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ACTION_OUTPUT_PARA.htm"
abapFile: "ABENBDL_ACTION_OUTPUT_PARA.html"
keywords: ["select", "update", "delete", "loop", "do", "if", "method", "class", "data", "internal-table", "ABENBDL", "ACTION", "OUTPUT", "PARA"]
---

``... [deep] result [selective] [cardinality]             \{ $self             | entity OutputParameterEntity             | ResultParameterStructure [[`external`](ABENBDL_EXTERNAL.html) 'ExternalName']\ \}``

[1. `... deep`](#ABAP_ADDITION_1@3@)

[2. `... selective`](#ABAP_ADDITION_2@3@)

[3. `... [cardinality]`](#ABAP_ADDITION_3@3@)

The output parameter for an [action](ABENBDL_ACTION.html) or [function](ABENBDL_FUNCTION.html) is defined with the keyword `result`. It can be used to store the result of an action or function in an internal table. For details on the components of the result structure, see the topic [ABAP EML - `RESULT result_tab`](ABAPEML_RESULT.html).

If a result parameter is declared in the action or function definition, it must be filled in the implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

The return type of the result parameter can be an entity or a structure:

If the result is a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), the result must be defined without the keyword `entity` as abstract entities are generally considered to be structures in ABAP.

Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).

The following example shows a managed BDEF with two actions, `Approve_Order` and `Reject_Order`. The result is `$self` with cardinality 1, so the output parameter has the same type as the entity for which the action is executed.

In the behavior pool `BP_DEMO_CDS_PURCH_DOC_M`, the result parameter is declared as follows:

The class `CL_DEMO_CDS_PURCHASE` accesses the business object and executes the action `Approve_Order` for one entity instance.
Code snippet:

Result: the changed entity instance is stored in the `result` structure.

The example from above is explained in detail in topic [RAP BDL - action](ABENBDL_ACTION1_ABEXA.html).

When using the optional addition `deep`, the syntax for the output parameter is as follows:

... deep result \[selective\] \[cardinality\] AbstractBDEF;

The output parameter `AbstractBDEF` must be a [RAP abstract BDEF](ABENCDS_ABSTRACT_BDEF_GLOSRY.html)\\ [`with hierarchy`](ABENBDL_BDEF_ABSTRACT_HEADER.html). The BDEF derived type for an abstract BDEF is a hierarchy that contains all entity fields plus a component for every [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html).

The optional addition `selective` can be specified to return only parts of the result structure.

The following example shows a managed BDEF. The action `a2_deep_result` uses the abstract BDEF `DEMO_CDS_ABSTRACT_ROOT` as deep output parameter.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) are not implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) here.

With the optional addition `selective`, it is possible to return only parts of the result structure, for example the keys only. This can help to improve performance.

An implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required. If `selective` is specified in the BDEF, the action or function signature has the additional input parameter `REQUEST requested fields`, which marks all requested fields with `01`.

The following example shows a managed BDEF based on the CDS view entity `DEMO_RAP_MANAGED_SELECTIVE_1`. It defines the function `myfunction` with a selective result.

In the ABAP behavior pool, the instance function `myfunction` is implemented so that it reads the values of all fields and returns them in the result structure. The result structure interprets the importing parameter `requested_fields` and fills only those fields that are requested by the EML consumer.

Code snippet:

For the complete implementation in the ABAP behavior pool, see `BP_DEMO_RAP_MANAGED_SELECTIV_1CCIMP`.

The class `CL_DEMO_RAP_MANAGED_SELECTIVE` accesses the business object and executes the action `myfunction`. It requests only the fields `KeyFieldRoot` and `Timestamp` and therefore, the result structure displays only the values of these two fields.

Code Snippet:

The following image shows that the importing parameter `requested_fields` marks the field requested by the EML consumer with `01`.

Result: the result structure contains only the values of the requested fields.

Defines the [cardinality](ABENCARDINALITY_GLOSRY.html) of the output parameter. This is a mandatory addition. The square brackets are part of the syntax. The following values can be specified for cardinality:

-   `$self` specifies that the result type is the same type as the entity for which the action or function is defined.
-   `entity OutputParameterEntity` specifies that the result is a different CDS view entity of the same or another [BO](ABENRAP_BO_GLOSRY.html).
-   `ResultParameterStructure`: A [RAP abstract BDEF](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) can be specified as a return type. A resulting structure for actions or functions is defined without the keyword `entity`.
-   For result structures, it is possible to define an alias to clearly identify the result in the OData metadata. The keyword [`external`](ABENBDL_EXTERNAL.html) after the result type defines this OData representation of the action or function result.

-   `[0..1]`
-   `[1]`
-   `[0..*]`
-   `[1..*]`

managed implementation in class bp\_demo\_cds\_purch\_doc\_m unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_PURCH\_DOC\_M alias PurchaseDocument\\npersistent table demo\_purch\_doc\\nlock master\\netag master crea\_date\_time\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n association \_PurchaseDocumentItem \\{ create; \\}\\n\\n action Approve\_Order result \[1\] $self;\\n action Reject\_Order result \[1\] $self;\\n\\n field(readonly:update) PurchaseDocument;\\n\\n field ( readonly ) crea\_uname , crea\_date\_time;\\n\\n mapping for demo\_purch\_doc corresponding;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_PURCH\_DOC\_I\_M alias PurchaseDocumentItem\\npersistent table DEMO\_PURCH\_DOC\_I\\nlock dependent by \_PurchaseDocument\\nauthorization dependent by \_PurchaseDocument\\n\\{\\n update;\\n delete;\\n field ( readonly ) PurchaseDocumentItem , PurchaseDocument;\\n field ( mandatory ) Price , Quantity , QuantityUnit;\\n\\n association \_PurchaseDocument;\\n\\n mapping for DEMO\_PURCH\_DOC\_I corresponding;\\n\\} result = VALUE #( FOR purchase IN lt\_purchase \\n ( %tky = purchase-%tky \\n %param = purchase ) ). MODIFY ENTITIES OF demo\_cds\_purch\_doc\_m \\n ENTITY PurchaseDocument \\n EXECUTE approve\_order \\n FROM VALUE #( ( PurchaseDocument = 'a' ) ) \\n RESULT FINAL(result). managed implementation in class bp\_demo\_cds\_deep\_parameter unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_DEEP\_PARAMETER\\npersistent table DEMO\_BO\_DEEP\\nlock master\\nauthorization master ( instance )\\n\\{\\n create;\\n update;\\n delete;\\n\\n mapping for demo\_bo\_deep\\n \\{\\n RootBO = root;\\n \\}\\n\\n field (readonly:update) RootBO;\\n\\n// mapping: none\\n action a2\_from\_flat parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n// mapping: structure\\n action a2\_from\_deep deep parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n // mapping: table\\n action a2\_from\_deep\_table deep table\\n parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n//deep selective output parameter\\n action a2\_deep\_result deep result selective \[1\]\\n DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\} managed implementation in class bp\_demo\_rap\_managed\_selectiv\_1 unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_SELECTIVE\_1\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n field(readonly:update) KeyFieldRoot;\\n\\n function (authorization:none) myfunction\\n result selective \[1\] $self;\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n LastChangedAt = lchg\_date\_time;\\n Timestamp = crea\_date\_time;\\n \\}\\n\\} METHOD myfunction. \\n DATA(lt\_keys) = keys. \\n CHECK lt\_keys IS NOT INITIAL. \\n\\ \\n READ ENTITIES OF demo\_rap\_managed\_selective\_1 IN LOCAL MODE \\n ENTITY demo\_rap\_managed\_selective\_1 \\n FIELDS ( KeyFieldRoot \\n CharFieldRoot \\n DataFieldRoot \\n Timestamp \\n LastChangedAt ) \\n WITH CORRESPONDING #( lt\_keys ) \\n RESULT DATA(lt\_item) \\n FAILED DATA(read\_failed). \\n\\ \\n LOOP AT lt\_item ASSIGNING FIELD-SYMBOL(<fs\_item>). \\n APPEND VALUE #( %tky = <fs\_item>-%tky \\n %param-keyfieldroot = COND #( \\n WHEN requested\_fields-KeyFieldRoot \\n EQ if\_abap\_behv=>mk-on \\n THEN <fs\_item>-KeyFieldRoot ) \\n %param-charfieldroot = COND #( \\n WHEN requested\_fields-charfieldRoot \\n EQ if\_abap\_behv=>mk-on \\n THEN <fs\_item>-charFieldRoot ) \\n %param-datafieldroot = COND #( \\n WHEN requested\_fields-datafieldRoot \\n EQ if\_abap\_behv=>mk-on \\n THEN <fs\_item>-dataFieldRoot ) \\n %param-timestamp = COND #( \\n WHEN requested\_fields-timestamp \\n EQ if\_abap\_behv=>mk-on \\n THEN <fs\_item>-timestamp ) \\n %param-lastchangedat = COND #( \\n WHEN requested\_fields-lastchangedat \\n EQ if\_abap\_behv=>mk-on \\n THEN <fs\_item>-lastchangedat ) \\n ) TO result. \\n ENDLOOP. \\nENDMETHOD. READ ENTITIES OF demo\_rap\_managed\_selective\_1 \\n ENTITY demo\_rap\_managed\_selective\_1 \\n EXECUTE myfunction \\n FROM VALUE #( ( %tky-KeyFieldRoot = 1 ) ) \\n REQUEST VALUE #( \\n KeyFieldRoot = if\_abap\_behv=>mk-on \\n Timestamp = if\_abap\_behv=>mk-on ) \\n RESULT FINAL(result) \\n FAILED FINAL(entity\_failed) \\n REPORTED FINAL(entity\_reported). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html