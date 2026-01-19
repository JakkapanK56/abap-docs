---
title: "Flat Parameter"
description: |
  Deep Parameter -   It asks the user to specify the discount in percent. -   It creates two instances of a purchase order item, identified by the key `PurchaseDocumentItem`, and assigns a price `Price` to each. -   It executes the action `deductDiscount`. -   Using the ABAP SQL `SELECT` statement, th
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTION_INPUT_PARAM.htm"
abapFile: "ABENBDL_ACTION_INPUT_PARAM.html"
keywords: ["select", "update", "delete", "do", "if", "case", "class", "data", "ABENBDL", "ACTION", "INPUT", "PARAM"]
---

`... parameter \{ ParameterEntity | $self \};`

`... [deep [table]] parameter AbstractBDEF;`

[1. `... parameter \{ ParameterEntity | $self \};`](#ABAP_ALTERNATIVE_1@2@)

[2. `... [deep [table]] parameter AbstractBDEF;`](#ABAP_ALTERNATIVE_2@2@)

Defines an [input parameter](ABENINPUT_PARAMETER_GLOSRY.html) for an [action](ABENBDL_ACTION.html) or [function](ABENBDL_FUNCTION.html). The input parameter can be flat or deep.

Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_CDS_ACTION_INPUT_PARAM`. The business object describes a purchase order item. The BDEF defines one action, `deductDiscount`. This action has an input parameter for the discount percentage and it calculates the price of an item minus the discount. It is implemented in the behavior pool `BP_DEMO_CDS_ACTION_INPUT_PARAM`.

The class `CL_DEMO_CDS_ACTION_REDUCE` accesses the business object using [EML](ABENEML_GLOSRY.html) and carries out the following operations:

Result: the price is reduced by the specified discount - here, the discount was specified as 10 percent.

The example above is explained in detail in the executable example [RAP BDL - action with input parameter](ABENBDL_ACTION2_ABEXA.html).

The input parameter `AbstractBDEF` must be a [RAP abstract BDEF](ABENBDL_ABSTRACT.html)\\ [`with hierarchy`](ABENBDL_BDEF_ABSTRACT_HEADER.html). The [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) for an abstract BDEF is a hierarchy that contains all entity fields plus a component for every [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html).

The following syntax options are available:

An abstract BDEF can also be used as input parameter only with the keyword `parameter`. In this case, it is interpreted as flat parameter. It represents the same derived type as a single CDS abstract entity and does not offer any additional value.

The following example shows an abstract BDEF with three nodes that is constructed as hierarchy.

The managed BDEF `DEMO_CDS_DEEP_PARAMETER` uses the abstract BDEF as action parameter in three actions.

The abstract BDEF is used as flat parameter, as structure, or as table, depending on the keywords used.

Flat Parameter

Deep Parameter

-   It asks the user to specify the discount in percent.
-   It creates two instances of a purchase order item, identified by the key `PurchaseDocumentItem`, and assigns a price `Price` to each.
-   It executes the action `deductDiscount`.
-   Using the ABAP SQL `SELECT` statement, the content of the underlying database table is displayed.

-   The input parameter entity `ParameterEntity` can be a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) or a classic [DDIC type](ABENDDIC_TYPE_GLOSRY.html)
-   `$self` can be specified if the input parameter entity is the same abstract entity the action or function is assigned to.
-   Input parameters with `$self` are only allowed on static actions or functions. When specified for instance actions or functions, there is no syntax check warning, and a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) occurs instead when a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) accesses the action or function in question.

-   If [BDEF strict mode](ABENBDL_STRICT.html) is enabled, `$self` is not allowed as input parameter.
-   If a CDS abstract entity is specified as input parameter, the annotation [`EndUserText.label`](ABENCDS_F1_ELEMENT_ANNOTATION.html) can be used to define a label that is displayed on the user interface in an OData scenario.

-   `deep parameter AbstractBDEF`: The input parameter is interpreted as a structure.
-   `deep table parameter AbstractBDEF`: The input parameter is interpreted a table.

-   Usage as flat parameter in action `a2_from_flat`

-   Usage as structure in action `a2_from_deep`

-   Usage as table in action `a2_from_deep_table`

managed implementation in class bp\_demo\_cds\_action\_input\_param unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_ACTION\_INPUT\_PARAM alias PurchaseItem\\npersistent table demo\_purch\_doc\_i\\nlock master\\nauthorization master (none)\\n\\{\\n create;\\n update;\\n delete;\\n\\n action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;\\n\\n field(readonly:update) PurchaseDocument, PurchaseDocumentItem;\\n\\n mapping for DEMO\_PURCH\_DOC\_I corresponding;\\n\\} abstract;\\nstrict(2);\\nwith hierarchy;\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ROOT alias Root\\n\\{\\n field ( suppress ) Dummy;\\n\\n deep mapping for DEMO\_CDS\_ABSTRACT\_STRUC\\n \\{\\n char10 = char\_10;\\n Integer4 = integer\_4;\\n sub \_itemStructure = struktur;\\n sub \_itemTable = tabelle;\\n \\}\\n\\n association \_itemTable;\\n association \_itemStructure;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ITEMSTRUCT alias ItemStructure\\n\\{\\n field ( suppress ) Dummy, ToRoot;\\n\\n deep mapping for DEMO\_ABSTRACT\_ITEMSTRUCT\\n \\{\\n Char10 = char\_10;\\n Integer4 = integer\_4;\\n \\}\\n\\n association \_parent;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ITEMTABLE alias ItemTable\\n\\{\\n field ( suppress ) Dummy, ToRoot;\\n\\n deep mapping for DEMO\_ABSTRACT\_ITEMTABLE corresponding\\n \\{\\n Char10 = char\_10;\\n Integer4 = integer\_4;\\n \\}\\n\\n association \_parent;\\n\\} managed implementation in class bp\_demo\_cds\_deep\_parameter unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_DEEP\_PARAMETER\\npersistent table DEMO\_BO\_DEEP\\nlock master\\nauthorization master ( none )\\n\\{\\n create;\\n update;\\n delete;\\n\\n mapping for demo\_bo\_deep\\n \\{\\n RootBO = root;\\n \\}\\n\\n field (readonly:update) RootBO;\\n\\n// mapping: none\\n action a2\_from\_flat parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n// mapping: structure\\n action a2\_from\_deep deep parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n // mapping: table\\n action a2\_from\_deep\_table deep table\\n parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n//deep selective output parameter\\n action a2\_deep\_result deep result selective \[1\]\\n DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html