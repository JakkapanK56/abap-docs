---
title: "ABENBDL"
description: |
  ABENBDL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL.htm"
abapFile: "ABENBDL.html"
keywords: ["if", "types", "ABENBDL"]
---

[RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) are created using the behavior definition language [RAP BDL](ABENCDS_BDL_GLOSRY.html) in [BDL source code](ABENBDL_SOURCE_CODE_GLOSRY.html).

The general syntax rules for the RAP BDL are described in the topic [RAP BDL - General Syntax Rules](ABENBDL_GENERAL_SYNTAX_RULES.html).

A list of all available BDL language elements can be found in topic [RAP BDL - Feature Tables](ABENRAP_FEATURE_TABLE.html).

RAP BDL offers the following statements for different [implementation types](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html):

Managed and unmanaged RAP BOs share a common set of keywords. These keywords are listed in section [RAP BDL - managed and unmanaged behavior definitions](ABENBDL_RAP_BO.html).

RAP projection behavior definitions reuse elements of the underlying base BDEF. Section [RAP BDL - RAP projection behavior definitions](ABENBDL_PROJECTION_BO.html) explains which elements, such as characteristics and operations, can be reused under which conditions and which characteristics and operations can be newly added to RAP projection behavior definitions.

RAP abstract behavior definitions offer only a limited range of behavior definition elements, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition. Section [RAP BDL - RAP abstract behavior definitions](ABENBDL_ABSTRACT.html) explains which elements are available in abstract BDEFs.

RAP BOs can be extended using [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html). The rules for BDEF extensions are described in the topic [RAP - BDEF Extension](ABENBDL_EXTENSION.html).

-   `managed`
-   The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) and the [standard BO operations](ABENBDL_STANDARD_OPERATIONS.html) are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). In a managed RAP BO, a ready-to-run business object can work without [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).
-   As soon as [non-standard operations](ABENBDL_NONSTANDARD.html), [validations](ABENBDL_VALIDATIONS.html), [determinations](ABENBDL_DETERMINATIONS.html), or other implementation-relevant syntax elements are added, an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is necessary.
-   Recommended for development scenarios in which all essential parts are developed from scratch, without a large amount of existing code (so-called *greenfield* development) with standard implementation.
-   See also: [managed RAP business object](ABENMANAGED_RAP_BO_GLOSRY.html)
-   `unmanaged`
-   The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) and the [standard BO operations](ABENBDL_STANDARD_OPERATIONS.html) must be implemented in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). \\nRecommended for development scenarios in which business logic already exists and is intended to be reused (so-called *brownfield* development).
-   See also: [unmanaged RAP business object](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   `interface`
-   Defines the behavior of a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), which serves as interface for stable consumption and is typically released as [released API](ABENRELEASED_API_GLOSRY.html).
-   See also: [RAP interface behavior definition](ABENCDS_INTERFACE_BDEF_GLOSRY.html).
-   `projection`
-   A RAP projection behavior definition is based on a [managed](ABENMANAGED_RAP_BO_GLOSRY.html) or [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) and represents a direct projection of its base behavior definition. It exposes a subset of the [base behavior definition's](ABENRAP_BASE_BDEF_GLOSRY.html) operations and characteristics. In a business application, a projection BDEF provides means to define service-specific behavior for a BO projection.
-   See also: [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html)
-   `abstract`
-   A RAP abstract behavior definition mainly serves as typing mechanism for deep action or function parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.
-   See also: [RAP abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html)

abenabap.html abenabap\_rap.html abencds\_bdef.html