---
title: "ABENBDL_FIELD_CHAR"
description: |
  ABENBDL_FIELD_CHAR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_FIELD_CHAR.htm"
abapFile: "ABENBDL_FIELD_CHAR.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "ABENBDL", "FIELD", "CHAR"]
---

`... field(readonly) Field1, Field2, ...;         | (mandatory) Field1, Field2, ...;         | (suppress) Field1, Field2, ...;         | (features:instance) Field1, Field2, ...;         | (mandatory:create) Field1, Field2, ...;         | (readonly:update) Field1, Field2, ...;`        

[1. `... field(readonly) Field1, Field2, ...`](#ABAP_VARIANT_1@1@)

[2. `... field(mandatory) Field1, Field2, ...`](#ABAP_VARIANT_2@1@)

[3. `... field(suppress) Field1, Field2, ...`](#ABAP_VARIANT_3@1@)

[4. `... field(features:instance) Field1, Field2, ...`](#ABAP_VARIANT_4@1@)

[5. `... field(mandatory:create) Field1, Field2, ...`](#ABAP_VARIANT_5@1@)

[6. `... field(readonly:update) Field1, Field2, ...`](#ABAP_VARIANT_6@1@)

This topic lists [RAP field characteristics](ABENRAP_FIELD_CHAR_GLOSRY.html) for the [fields](ABENRAP_BO_FIELD_GLOSRY.html) of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html).

Commas can be used to classify multiple fields in the same way. Example: `field(readonly) Field1, Field2, Field3;`

A field can have multiple characteristics, divided by commas within the brackets. Example: `field(mandatory:create, readonly:update) Field1, Field2, Field3;`. Certain restrictions apply on the combination of field characteristics. They are indicated by a syntax check warning.

The following example shows a managed BDEF that defines the field `char_field1` as mandatory.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. It does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

The ABAP class `CL_DEMO_RAP_MANAGED_MANDATORY` uses [EML](ABENEML_GLOSRY.html) to access to RAP business object. It creates three entity instances by specifying a value for the primary key field `key_field`. No value is entered for the mandatory field `char_field1`. It commits the three new entity instances to the database. Using the ABAP SQL `SELECT` statement, it displays the content of the underlying database table.

Code Snippet:

Result: The mandatory field `char_field1` contains the [initial value](ABENINITIAL_VALUE_GLOSRY.html), no syntax check warning or syntax check error occurs.

The following example shows an interface BDEF that suppresses the field `DataFieldRoot`.

The ABAP class `CL_DEMO_RAP_INTERFACE_DRAFT` creates a variable typed with the BDEF derived type of the RAP BO `DEMO_RAP_INTERFACE_DRAFT` and displays the structure of this variable.

Code Snippet:

Result: The suppressed field `DataFieldRoot` is not part of `structure`.

The following example shows a managed BDEF that defines dynamic feature control for field `int_field2`.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. It does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

In the ABAP behavior pool, it specifies the following condition: if field `int_field1` contains the value '1', then `int_field2` is read-only.

Code snippet:

The ABAP class `CL_DEMO_RAP_INSTANCE_FEATURES` uses [EML](ABENEML_GLOSRY.html) to access to RAP business object.

Result: The update operation is prevented by the dynamic feature control. Field `int_field2` contains the initial value. No syntax check warning or syntax check error occurs.

[ABAP EML - RAP Calculator](ABENEML_CALCULATOR_ABEXA.html)

A typical use case is to combine `mandatory:create` with `readonly:update` for key fields in an [external numbering](ABENRAP_EXT_NUMBERING_GLOSRY.html) scenario.

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BOs](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In case of [projection BOs](ABENRAP_PROJECTION_BO_GLOSRY.html), automatic inheritance takes place. To newly define field characteristics in a projection BO, special rules apply. See topic [RAP - `FieldCharacteristics`, Projection BDEF](ABENBDL_FIELD_PROJECTION.html).
-   For [abstract BDEFs](ABENCDS_ABSTRACT_BDEF_GLOSRY.html), special rules apply. See topic [RAP - Field Characteristics, Abstract BDEF](ABENBDL_FIELD_ABSTRACT.html).
-   For [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html), automatic inheritance takes place. The interface can add further field characteristics, as long as they do not contradict the field characteristics from the base layer. This is described in topic [Field Characteristics, Interface BDEF](ABENBDL_FIELD_INTERFACE.html).

-   In UI scenarios, field characteristics are displayed as a [RAP consumer hint](ABENRAP_CONSUMER_HINT_GLOSRY.html).
-   All primary key fields must be defined as `readonly` or as `readonly:update`. Otherwise, a syntax check warning occurs.

-   Development guide for the ABAP RESTful Application Programming Model, section [Feature Control Definition: Fields](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/eb060664a98c4275a3a4346d9c5b6707?version=sap_cross_product_abap)

-   Defines that the values of the specified fields must not be created or updated by the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html).
-   [Static field attribute](ABENRAP_STATIC_FIELD_CHAR_GLOSRY.html).
-   No implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) required.
-   If a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) tries to modify a field specified as `readonly` in the BDEF using [ABAP EML](ABENABAP_EML_GLOSRY.html)\\ [`CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) or [`UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html), a syntax check error occurs.

-   Defines that it is mandatory to enter values into the specified fields before persisting them on the database. These fields are marked as mandatory on the user interface in an OData scenario. However, there is no runtime check for mandatory fields and no runtime error occurs if a mandatory field is not filled. If a runtime check is required, the application developer should implement it using a [validation on save](ABENBDL_VALIDATIONS.html).
-   [Static field attribute](ABENRAP_STATIC_FIELD_CHAR_GLOSRY.html).
-   No implementation in the ABAP behavior pool required.

-   `Field(suppress)` can be used to remove a field from the [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) and all RAP APIs. This is possible for all fields except for [key fields](ABENKEY_FIELD_GLOSRY.html), [foreign key fields](ABENFOREIGN_KEY_FIELD_GLOSRY.html), and fields used by the current BDEF, such as [ETag](ABENRAP_ETAG_GLOSRY.html) fields. To remove a suppressed field from the OData exposure, the CDS annotation [`@Consumption.hidden:true`](ABENCDS_207868793_ANNO.html) must be set.
-   [Currency key fields](ABENCURRENCY_KEY_GLOSRY.html) of data type `CUKY` can be suppressed only if all [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html) that make a reference to this particular `CUKY` field are also suppressed.
-   [Static field attribute](ABENRAP_STATIC_FIELD_CHAR_GLOSRY.html).
-   No implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) required.
-   If a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) tries to modify a suppressed field, an error message occurs that tells the consumer that no field of this name exists.

-   [Dynamic field attribute](ABENRAP_DYN_FIELD_CHAR_GLOSRY.html) that defines access restrictions for fields depending on the state of the BO entity instance.
-   Must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR INSTANCE FEATURES`](ABAPHANDLER_METH_FEATURES.html). In the ABAP behavior pool, it can be specified that a field is dynamically mandatory, read-only, has no restrictions, or that it is mandatory and read-only.
-   If a RAP BO consumer tries to breach the dynamic access restrictions, it is ignored. There is no error or warning message. In a managed RAP BO, there is also no entry in the response structures. In an unmanaged RAP BO, the `reported` structure can be filled, depending on the BO implementation.

-   First, it inserts an entity instance directly onto the database using ABAP SQL `INSERT`. This entity instance has the value '1' for field `int_field1`. Therefore, it fulfills the condition that triggers feature control: if this instance is updated, field `int_field2` should be read-only.
-   An EML [`UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operation is executed on the same instance. This update operation tries to enter a value into field `int_field2`.
-   The updated entity instance is committed to the database. Using the ABAP SQL `SELECT` statement, the content of the underlying database table is displayed.

-   [Static field attribute](ABENRAP_STATIC_FIELD_CHAR_GLOSRY.html) that defines that it is mandatory to enter a value when an instance is created.
-   No implementation in the ABAP behavior pool required.
-   If a RAP BO consumer tries to create a new entity instance without entering a value into the field defined as `mandatory:create`, a runtime error occurs.

-   [Static field attribute](ABENRAP_STATIC_FIELD_CHAR_GLOSRY.html) that defines a field as read-only during update operations, that means, the field in question cannot be changed anymore after the `create` operation.
-   No implementation in the ABAP behavior pool required.
-   If a RAP BO consumer tries to update a field defined as `readonly:update`, a syntax check error occurs.
-   **Caution** In the case of a [draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html), errors might occur if there is a saved draft instance that has not yet been activated. If a new instance is created with the same primary key values as an already existing draft instance, this is considered an update operation. If the field in question is specified as `readonly:update`, an error message occurs. For further details, see [External Early Numbering (RAP Development Guide)](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/eb060664a98c4275a3a4346d9c5b6707?version=sap_cross_product_abap).

managed\\nimplementation in class BP\_DEMO\_RAP\_FIELD\_MANDATORY unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_FIELD\_MANDATORY\\npersistent table demo\_dbtab\_field\\nlock master\\nauthorization master(global)\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n field ( mandatory ) char\_field1;\\n\\} DELETE FROM demo\_dbtab\_field. \\n MODIFY ENTITIES OF demo\_rap\_field\_mandatory \\n ENTITY DEMO\_RAP\_FIELD\_MANDATORY \\n CREATE FIELDS ( key\_field char\_field1 ) WITH VALUE #( \\n ( %cid = '1' \\n key\_field = '0894EF1643A01EDB989329BF29E8FD27' ) \\n ( %cid = '2' \\n key\_field = '0894EF1643A01EDB989329BF29E81D27' ) \\n ( %cid = '3' \\n key\_field = '0894EF1643A01EDB989329BF29E83D27' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n COMMIT ENTITIES. interface;\\nuse draft;\\nforeign entity demo\_cds\_validation;\\ndefine behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root\\nuse etag\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action Activate;\\n use action Discard;\\n use action Edit;\\n use action Resume;\\n use action Prepare;\\n\\n field(suppress) DataFieldRoot;\\n\\n\\} DATA structure TYPE TABLE FOR CREATE demo\_rap\_interface\_draft. \\nAPPEND INITIAL LINE TO structure. managed implementation in class bp\_demo\_rap\_instance\_features unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_INSTANCE\_FEATURES\\npersistent table demo\_dbtab\_field\\nlock master\\nauthorization master(global)\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n field ( features : instance ) int\_field2;\\n\\} ... %field-int\_field2 = COND #( \\n WHEN ls\_variable-int\_field1 = '1' \\n THEN if\_abap\_behv=>fc-f-read\_only \\n ELSE if\_abap\_behv=>fc-f-unrestricted \\n ) ) ). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html