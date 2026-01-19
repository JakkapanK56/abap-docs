---
title: "Redefined Input Parameter for RAP Actions and RAP Functions"
description: |
  Redefined Output Parameter for RAP Actions and RAP Functions Redefined Output Parameter for RAP Business Events -   It must be an abstract behavior definition `with hierarchy`. -   It must be a subset of the data type of the base operation or event. This means that it can have fewer components than
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_REDEFINE_PARAM.htm"
abapFile: "ABENBDL_REDEFINE_PARAM.html"
keywords: ["update", "delete", "do", "if", "data", "ABENBDL", "REDEFINE", "PARAM"]
---

`... deep parameter RedefinedAbstractBDEF ...`

`... deep result RedefinedAbstractBDEF ...`

`... deep parameter RedefinedAbstractBDEF ...`

[1. `... deep parameter RedefinedAbstractBDEF`](#ABAP_ALTERNATIVE_1@2@)

[2. `... deep result RedefinedAbstractBDEF`](#ABAP_ALTERNATIVE_2@2@)

[3. `... deep parameter RedefinedAbstractBDEF`](#ABAP_ALTERNATIVE_3@2@)

Redefines the input parameter or output parameter of a [RAP action](ABENRAP_ACTION_GLOSRY.html), [RAP function](ABENRAP_FUNCTION_GLOSRY.html), or a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) that is reused in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) or an [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html).

The redefinition is optional and if not specified, the input and output parameters of the base BDEF are reused.

As a prerequisite for redefining a parameter, the parameter in question must be defined as a deep parameter using the addition `deep` with an [abstract BDEF](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) in the underlying base BDEF.

The following rules apply to the redefined parameter `RedefinedAbstractBDEF`:

If a field is defined as [`mandatory:execute`](ABENBDL_FIELD_ABSTRACT.html) in the abstract BDEF used as a parameter of the base operation, then it must be included in the data type of the redefined parameter and it must be included in the type mapping of the redefined parameter. This rule applies only to action and function parameters. In RAP business events, the field attribute `mandatory:execute` is ignored.

The base parameter and the redefined parameter `RedefinedAbstractBDEF` must either both specify [`with control`](ABENBDL_DEFINE_BEH_ABSTRACT.html), or they both must not specify `with control`.

If a projection BDEF is based on an interface BDEF, redefining parameters is not possible. Only a parameter from the base BDEF can be changed in an interface BDEF or in a projection BDEF. A projection over an interface cannot change the parameter exposed by the interface.

Development guide for the ABAP RESTful Application Programming Model, topic [Modeling Parameters for Non-Standard Operations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d891bf474d5444cb939a85d222b75fdf?version=sap_cross_product_abap).

The following example shows an interface BDEF based on the managed BDEF `DEMO_RAP_REDEFINE_PARAM`. It reuses an action, two functions, and a RAP business event from the base BDEF and redefines the input and output parameters:

The executable example topic [RAP - Reuse with Redefined Parameter](ABENBDL_REDEF_PARAM_ABEXA.html) explains the example above in detail.

Redefining an input parameter is possible under the condition that the base BDEF specifies an abstract BDEF as a deep input parameter for the action or function in question.

Redefining an output parameter is possible under the condition that the base BDEF specifies an abstract BDEF as a deep output parameter for the action or function in question.

Redefining an input parameter is possible under the condition that the base BDEF specifies an abstract BDEF as a deep input parameter for the action or function in question.

Redefined Input Parameter for RAP Actions and RAP Functions

Redefined Output Parameter for RAP Actions and RAP Functions

Redefined Output Parameter for RAP Business Events

-   It must be an abstract behavior definition `with hierarchy`.
-   It must be a subset of the data type of the base operation or event. This means that it can have fewer components than the parameter of the base operation and that each component must be compatible or convertible to a component of the base parameter. The [assignment and conversion rules](ABENCONVERSION_RULES.html) for elementary data objects apply.
-   It must define a [type mapping](ABENBDL_TYPE_MAPPING_ABSTRACT.html) to the abstract BDEF that is used as a parameter of the base operation or event. The names of the components of the derived type of `RedefinedAbstractBDEF` can differ from the names of the underlying data type.

-   The base BDEF uses the abstract BDEF `DEMO_RAP_ABSTRACT_ALL_FIELDS` as a parameter.
-   The interface BDEF uses the abstract BDEF `DEMO_RAP_ABSTRACT_SUB_FIELDS` as a parameter. This abstract BDEF is a subset of the underlying data type, which means its derived type has one component less than the derived type of the underlying base BDEF.

-   Redefines the input parameter for a RAP action or a RAP function that is reused in a projection BDEF or interface BDEF.
-   The deep input parameter `AbstractBDEF` must be an abstract behavior definition and it must be a subset of the underlying data type of the base operation.
-   The deep input parameter `AbstractBDEF` must define a type mapping to the abstract BDEF that is used as a parameter of the base operation.

-   Redefines the output parameter for a RAP action or a RAP function that is reused in a projection BDEF or interface BDEF.
-   The deep output parameter `AbstractBDEF` must be an abstract behavior definition and it must be a subset of the underlying data type of the base operation.
-   The deep output parameter `AbstractBDEF` must define a type mapping to the abstract BDEF that is used as a parameter of the base operation.

-   Redefines the output parameter for a RAP business event that is reused in an interface BDEF.
-   The deep output parameter `AbstractBDEF` must be an abstract behavior definition and it must be a subset of the underlying data type of the base operation.
-   The deep output parameter `AbstractBDEF` must define a type mapping to the abstract BDEF that is used as a parameter of the base operation.

interface;\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_REDEFINE\_PARAM\_I alias Interface\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action Action1 deep parameter DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;\\n use function Function1 deep result DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;\\n use function Function2 deep parameter DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;\\n\\n use event Event1 deep parameter DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_body\_projection.html abenbdl\_use\_projection.html