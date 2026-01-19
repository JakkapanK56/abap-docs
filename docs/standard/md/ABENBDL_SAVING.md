---
title: "ABENBDL_SAVING"
description: |
  ABENBDL_SAVING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_SAVING.htm"
abapFile: "ABENBDL_SAVING.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "types", "ABENBDL", "SAVING"]
---

`... \{with additional save [and cleanup][with full data]\}\    |\ \{with unmanaged save [and cleanup][with full data]\} ...`

[1. `... with additional save [and cleanup][with full data]`](#ABAP_VARIANT_1@1@)

[2. `... with unmanaged save [and cleanup][with full data]`](#ABAP_VARIANT_2@1@)

[1. `... and cleanup`](#ABAP_ADDITION_1@3@)

[2. `... with full data`](#ABAP_ADDITION_2@3@)

Defines a [RAP unmanaged save](ABENRAP_UNMAN_SAVE_GLOSRY.html) or a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html):

By default, the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) performs a managed save. With an [additional save](ABENRAP_ADD_SAVE_GLOSRY.html), steps can be added to the managed save. An [unmanaged save](ABENRAP_UNMAN_SAVE_GLOSRY.html) prevents the default and allows the implementation of a dedicated saving strategy. Both additions require a reimplementation of the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) method of the [RAP saver class](ABENABP_SAVER_CLASS.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

There are two options for notation:

The following example shows a managed BDEF that defines an additional save in the BDEF header.

In the ABAP behavior pool, the method `save_modified` tracks data changes in a log table. The complete implementation can be seen in the `BP_DEMO_MANAGED_ADDITIONAL_SAVCCIMP`.

The ABAP class `CL_DEMO_RAP_MANAGED_ADD_SAVE` uses [EML](ABENEML_GLOSRY.html) to access the RAP business object. It performs a create, update, and delete operations. The changes are saved and tracked in internal log tables.

Allows additional functionality to be called during the standard save sequence, for example, change documents and an application log.

An implementation in the local saver class is required.

Development guide for the ABAP RESTful Application Programming Model, section about [Additional Save](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ca7097c8ea404b11b1f1334fd54cdd15?version=sap_cross_product_abap).

Prevents the BO's managed runtime from saving changes and allows the implementation of a dedicated saving strategy instead. In case of an unmanaged save, a [persistent table](ABENBDL_PERSISTENT_TABLE.html) must not be specified.

An implementation in the local saver class is required.

An example for a managed RAP BO with unmanaged save is shown in the topic [ABAP EML - `TYPE REQUEST FOR` in a Managed RAP BO with Unmanaged Save](ABENRAP_MANAGED_UNM_SAVE_ABEXA.html).

Development guide for the ABAP RESTful Application Programming Model, section about [Unmanaged Save](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2c2bec28fff6475f922f9f876491826d?version=sap_cross_product_abap).

If specified, the RAP saver method [`cleanup`](ABENSAVER_METHOD_CLEANUP.html) must be redefined.

When one of the additions `with additional save` or `with unmanaged save` is specified, by default, only the values of the key fields and changed fields are handed over to the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) method of the [RAP saver class](ABENABP_SAVER_CLASS.html). The addition `with full data` can be used to hand over the full instance data to the `save_modified` method. In other words, the values of all fields that are part of the [component group](ABENCOMPONENT_GROUP_GLOSRY.html)\\ [`%data`](ABAPDERIVED_TYPES_DATA.html) are filled with values when the `save_modified` method is called.

The following example shows a managed BDEF that defines an additional save `with full data` in the BDEF header.

In the ABAP behavior pool, the method `save_modified` tracks data changes in a log table. The complete implementation can be seen in the `BP_DEMO_MANAGED_ADDITIONAL_SAVCCIMP`.

The ABAP class `CL_DEMO_RAP_MANAGED_FULL_DATA` uses [EML](ABENEML_GLOSRY.html) to access the RAP business object. First, it creates two entity instances, filling values into all entity fields. Then, it updates both entity instances, changing the values of two fields, namely `field1` and `field2`. Without the addition `with full data`, only the values of the changed fields are respected in the `save_modified` method. The fields that are not changed have their initial value. But since this example uses `with full data`, even the values of fields `field3` and `field4` are respected.

Code Snippet: Note that `field3` and `field4` are not updated.

Variable `lt_update` in the ABAP behavior pool when the addition `with full data` is specified: all fields are listed with their values, even the fields which are not included in the update operation.

Variable `lt_update` in the ABAP behavior pool when the addition `with full data` is **not** specified: fields that are not updated are filled with initial values.

**Note** In this example, fields that are not updated are filled with initial values. Note that this is not always the case. Fields which are not updated do not contain consistent values and the values must therefore not be evaluated.

-   A RAP unmanaged save is defined using the addition `with unmanaged save`. It allows developers to implement a save logic that replaces the default save sequence in a managed RAP BO.
-   A RAP additional save is defined using the addition `with additional save`. It allows developers to implement additional steps for the save logic of a managed RAP BO, thereby enhancing the standard save sequence.

-   In the [BDEF header](ABENCDS_BDEF_HEADER_GLOSRY.html), directly after the keyword `managed`. In this case, the additional save or unmanaged save is enabled for all entities of the business object.
-   Example: `managed with additional save implementation in class ...;`
-   As an [entity behavior property](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html). In this case, it can be specified for each entity individually.
-   Example: `define behavior for EntityName with unmanaged save`

-   Available in [managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html) only. In unmanaged business objects, the saving strategy is user-defined by default.

-   The example shown above is displayed and explained in detail in the topic [ABAP EML - `TYPE REQUEST FOR` in a Managed RAP BO with Additional Save](ABENRAP_ADDITIONAL_SAVE_ABEXA.html).
-   An example for a managed RAP BO with unmanaged save is shown in the topic [ABAP EML - `TYPE REQUEST FOR` in a Managed RAP BO with Unmanaged Save](ABENRAP_MANAGED_UNM_SAVE_ABEXA.html).

-   The fields of the [component group](ABENCOMPONENT_GROUP_GLOSRY.html)\\ [`%control`](ABAPDERIVED_TYPES_CONTROL.html) are not affected by this. Still, only the changed fields of `%control` are flagged.
-   In scenarios where all fields, not only changed fields, are required for further processing, the addition `with full data` can be used. This spares the RAP BO consumer an additional `READ` operation.

managed with additional save with full data\\nimplementation in class bp\_demo\_managed\_additional\_sav unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_MANAGED\_ADDITIONAL\_SAVE\\npersistent table DEMO\_TAB\_ROOT\_3\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field(readonly:update) key\_field;\\n\\} managed with additional save with full data\\nimplementation in class bp\_demo\_managed\_additional\_sav unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_MANAGED\_ADDITIONAL\_SAVE\\npersistent table DEMO\_TAB\_ROOT\_3\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field(readonly:update) key\_field;\\n\\} MODIFY ENTITY demo\_managed\_additional\_save \\n UPDATE FROM VALUE #( \\n ( key\_field = 1 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n field1 = 'update\_1' \\n %control-field1 = if\_abap\_behv=>mk-on \\n field2 = 'update\_2' \\n %control-field2 = if\_abap\_behv=>mk-on \\n ) \\n ( key\_field = 2 \\n %control-key\_field = if\_abap\_behv=>mk-on \\n field1 = 'update\_3' \\n %control-field1 = if\_abap\_behv=>mk-on \\n field2 = 'update\_4' \\n %control-field2 = if\_abap\_behv=>mk-on \\n ) \\n ). \\n\\ \\n COMMIT ENTITIES. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html