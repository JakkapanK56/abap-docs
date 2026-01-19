---
title: "ABENBDL_EXTENSION_LAYERING"
description: |
  ABENBDL_EXTENSION_LAYERING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSION_LAYERING.htm"
abapFile: "ABENBDL_EXTENSION_LAYERING.html"
keywords: ["do", "if", "case", "ABENBDL", "EXTENSION", "LAYERING"]
---

It is possible to extend a [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html) with further BDEF extensions. This is referred to as [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html). As a prerequisite, a BDEF extension must be explicitly enabled for extensibility as described in the topic [RAP - Extensibility Enabling for BDEF Extensions](ABENBDL_EXTENSIBILITY_ENABLING_EXT.html).

The following general rules apply to BDEF extensions that extend another BDEF extension:

-   A BDEF extension always extends the original RAP BO. When a new extension is created, the original RAP BO and all existing extensions are merged into one and define the extensible scope.
-   Regarding the [RAP extensibility enablement](ABENRAP_EXT_ENABLEMENT_GLOSRY.html), the rule is that the [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that defines an extensible component defines the extensible scope. For example, if an extension node is defined in a BDEF extension, the extensibility enablement of the BDEF extension is respected. If the BDEF extension allows `validations on save` in an extension, then this RAP BO entity can be extended with `validations on save`. The RAP extensibility enablement of the original RAP BO is not relevant in this case. This rule applies to RAP BO entities and other extensible components, such as RAP type mappings and determine actions. The extensibility enablement is determined by the repository object that defines the component to be extended.
-   Technically, a BDEF extension that extends another extension is a regular extension and there are no special rules. Like regular extensions, it refers to the original RAP BO, it can extend all components that are enabled for extensibility, and the feature scope is the same as for regular BDEF extensions. The general rules for BDEF extensions are described under:

-   Topic [RAP - Base BDEF Extension](ABENBDL_EXTENSIBILITY_MANAGED_UNM.html)
-   Topic [RAP - BDEF Projection Extension](ABENBDL_EXTENSIBILITY_PROJECTION.html)
-   Topic [RAP - Abstract BDEF Extension](ABENBDL_EXTENSIBILITY_ABSTRACT.html)

-   Each BDEF extension automatically inherits the [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) of the original RAP BO. Therefore, BDEF extensions must also meet the specifications of the release contract and need to be kept stable.

-   Development guide for the ABAP RESTful Application Programming Model, section [About RAP Extensibility](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0e485d31120f484db63381e74755a94c?version=sap_cross_product_abap).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html