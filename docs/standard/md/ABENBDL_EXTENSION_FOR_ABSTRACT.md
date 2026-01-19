---
title: "ABENBDL_EXTENSION_FOR_ABSTRACT"
description: |
  ABENBDL_EXTENSION_FOR_ABSTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSION_FOR_ABSTRACT.htm"
abapFile: "ABENBDL_EXTENSION_FOR_ABSTRACT.html"
keywords: ["if", "data", "ABENBDL", "EXTENSION", "FOR", "ABSTRACT"]
---

``extension for abstract;    [[`extensible`](ABENBDL_EXT_ENABL_EXT_ABS.html);]\    [define behavior for ...]\    [extend behavior for ...]\    [scalar entity ...]\  ...``

[1. `... define behavior for`](#ABAP_ALTERNATIVE_1@2@)

[2. `... extend behavior for`](#ABAP_ALTERNATIVE_2@2@)

[3. `... scalar entity`](#ABAP_ALTERNATIVE_3@2@)

Extends an existing [abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) using an [abstract BDEF extension](ABENRAP_ABS_BDEF_EXT_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). An abstract behavior definition can have one or more abstract BDEF extensions. The number of extensions is not limited.

An abstract BDEF extension can have the following components:

The abstract BDEF extension `DEMO_RAP_ABSTRACT_X` extends the abstract behavior definition `DEMO_RAP_ABSTRACT_ROOT`.

An extension node adds a new node to the hierarchical type of the abstract BDEF using the statement `define behavior for`. [Field characteristics](ABENBDL_FIELD_ABSTRACT.html), [associations](ABENBDL_ASSOCIATION_ABSTRACT.html), and [type mappings](ABENBDL_TYPE_MAPPING_ABSTRACT.html) can be specified for the extension node in the same way as for abstract BDEFs. There is only one difference: the attribute `mandatory:execute` is not available in abstract BDEF extensions, neither for fields, nor for associations.

For details, see the topic [RAP - Entity Behavior Body, Abstract BDEF](ABENBDL_BODY_ABSTRACT.html).

Extends an existing node of an abstract BDEF. As a prerequisite, extensions must be explicitly enabling as described in the topic [RAP - Extensibility Enabling for Abstract BDEFs](ABENBDL_EXT_ENABLING_ABSTRACT.html).

Options:

A new scalar entity can be integrated into the hierarchical type as scalar type. This scalar entity must be an extension node, which means it must be added to the data model via [RAP data model extensions](ABENRAP_DATA_MODEL_EXT_GLOSRY.html). The syntax is exactly the same as for abstract BDEFs, see the topic [RAP - Entity Behavior Definition, Abstract BDEF](ABENBDL_DEFINE_BEH_ABSTRACT.html).

-   [`extensible`](ABENBDL_EXT_ENABL_EXT_ABS.html): if specified, [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html) is allowed. For details, see [RAP - Extensibility Enabling for Abstract BDEF Extensions](ABENBDL_EXT_ENABL_EXT_ABS.html).
-   `define behavior for`: Adds a new node to the hierarchical type of the abstract BDEF using the statement `define behavior for`.
-   `extend behavior for`: Extends an existing node using the statement `extend behavior for`.
-   `scalar entity`: Adds a new scalar entity to the hierarchical type.

-   It extends the behavior of the root node.
-   It adds the scalar entity `DEMO_RAP_ABSTRACT_5`.
-   It adds the extension node `DEMO_RAP_ABSTRACT_4` using the syntax `define behavior for`.

-   As a prerequisite, the original abstract behavior definition must explicitly allow BDEF extensions as described in topic [RAP - Extensibility Enabling for Abstract BDEFs](ABENBDL_EXT_ENABLING_ABSTRACT.html).
-   The extension node must be added to the RAP data model via [RAP data model extensions](ABENRAP_DATA_MODEL_EXT_GLOSRY.html).

-   The field characteristic `suppress` can be specified for extension fields.
-   Associations that have an extension node as association target can be added.
-   An existing type mapping can be extended. As a prerequisite, the original type mapping must explicitly allow extensions as described in the topic [RAP - Extensibility Enabling for Abstract BDEFs](ABENBDL_EXT_ENABLING_ABSTRACT.html).
-   A new RAP type mapping to a partner type can be added. This type mapping can only contain extension fields. It must not contain any fields from the original data model. The syntax is exactly the same as for abstract BDEFs, see topic [RAP - Mapping, Abstract BDEF](ABENBDL_TYPE_MAPPING_ABSTRACT.html).

extension for abstract;\\nextensible;\\n\\nextend behavior for DEMO\_RAP\_ABSTRACT\_ROOT\\n\\{\\n association \_item3;\\n extend deep mapping for demo\_rap\_struc\_x\\n \\{\\n sub \_Item3 = sub\_3;\\n \\}\\n\\}\\n\\nscalar entity DEMO\_RAP\_ABSTRACT\_5 field comp3;\\n\\nextend behavior for DEMO\_RAP\_ABSTRACT\_1\\n\\{\\n association \_x1;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_ABSTRACT\_4\\nwith control\\nextensible\\n\\{\\n field ( suppress ) comp1, comp2;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_abstract.html