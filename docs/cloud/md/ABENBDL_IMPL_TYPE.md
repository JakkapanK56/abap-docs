---
title: "ABENBDL_IMPL_TYPE"
description: |
  ABENBDL_IMPL_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_IMPL_TYPE.htm"
abapFile: "ABENBDL_IMPL_TYPE.html"
keywords: ["update", "delete", "do", "if", "class", "types", "ABENBDL", "IMPL", "TYPE"]
---

`\{ managed  | unmanaged  | abstract  | projection \}\  | interface ...`

RAP BDL offers the following statements for different [implementation types](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html):

The syntax `implementation \{managed|unmanaged|projection|abstract\}` is obsolete and should not be used. The keyword `implementation` should be left out. If [BDEF strict mode](ABENBDL_STRICT.html) is enabled, the keyword `implementation` must not be used.

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_FOREIGN_ENTITY`. The implementation type `managed` is specified in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html).

-   `managed`
-   The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) and the [standard BO operations](ABENBDL_STANDARD_OPERATIONS.html) are handled by the managed RAP BO provider.
-   Recommended for development scenarios in which all essential parts are developed from scratch, without a large amount of existing code (also known as *greenfield* development) with standard implementation.
-   See also: [managed RAP business object](ABENMANAGED_RAP_BO_GLOSRY.html)
-   `unmanaged`
-   The [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) and the [standard BO operations](ABENBDL_STANDARD_OPERATIONS.html) must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).
-   Recommended for development scenarios in which business logic already exists and is intended to be reused (also known as *brownfield* development).
-   See also: [unmanaged RAP business object](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   `projection`
-   A [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) is based on a managed or unmanaged RAP BO and represents a direct projection of its base behavior definition. It exposes a subset of the base behavior definition's operations and characteristics. In a business application, a projection BDEF provides the means to define service-specific behavior for a BO projection.
-   See also: [RAP BDL - projection behavior definitions](ABENBDL_PROJECTION_BO.html).
-   `abstract`
-   A [RAP abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) mainly serves as typing mechanism for deep action or function parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.
-   See also: [RAP abstract behavior definition](ABENBDL_ABSTRACT.html)
-   `interface`
-   Defines the behavior of a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), which serves as interface for stable consumption and is typically released as [released API](ABENRELEASED_API_GLOSRY.html).
-   See also: [RAP Interface Behavior Definition](ABENBDL_RAP_BO_INTERFACE.html).

managed implementation in class bp\_demo\_rap\_foreign\_entity unique;\\nstrict(2);\\n//enables MAP\_MESSAGES:\\nforeign entity DEMO\_SALES\_CDS\_SO\_1;\\n\\ndefine behavior for DEMO\_RAP\_FOREIGN\_ENTITY alias RootEntity\\npersistent table DEMO\_DBTAB\_ROOT\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly:update) key\_field;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html