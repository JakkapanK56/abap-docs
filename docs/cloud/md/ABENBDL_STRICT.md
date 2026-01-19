---
title: "ABENBDL_STRICT"
description: |
  ABENBDL_STRICT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_STRICT.htm"
abapFile: "ABENBDL_STRICT.html"
keywords: ["do", "if", "types", "ABENBDL", "STRICT"]
---

`... strict;    | strict(2);`

[BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) applies additional syntax checks to [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). It ensures, for example, that no outdated syntax is used, implicitly available operations are declared explicitly, and the RAP BO in question complies to best practices. BDEF strict mode is provided by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html), no implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

Currently, the following versions of strict mode are available:

Strict mode version 2 covers all rules from strict mode version 1, plus some additional checks.

It is recommended that the most recent version of strict mode is used. In some scenarios, strict mode is even mandatory, for example when declaring a RAP BO as [`extensible`](ABENBDL_EXTENSIBLE.html) or when releasing a BDEF as [released API](ABENRELEASED_API_GLOSRY.html).

This documentation handles all statements according to the requirements of BDEF strict mode.

BDEF strict mode is available for RAP behavior definitions of the following [BDEF implementation types](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html):

Development guide for the ABAP RESTful Application Programming Model, section [Strict Mode](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/cbb86e63a8464e63bbdd43b7bfa5fc4f?version=sap_cross_product_abap).

-   Strict mode version 1, specified using [`strict`](ABENBDL_STRICT_1.html)
-   Strict mode version 2, specified using [`strict(2)`](ABENBDL_STRICT_2.html)

-   [`managed`](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [`unmanaged`](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [`projection`](ABENCDS_PROJ_BDEF_GLOSRY.html): To use BDEF strict mode in a RAP projection behavior definition, the base BDEF must use strict mode as a prerequisite. Base and projection must use the same version of strict mode.
-   [`abstract`](ABENCDS_ABSTRACT_BDEF_GLOSRY.html)

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html