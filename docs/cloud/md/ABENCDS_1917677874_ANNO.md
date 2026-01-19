---
title: "ABENCDS_1917677874_ANNO"
description: |
  ABENCDS_1917677874_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1917677874_ANNO.htm"
abapFile: "ABENCDS_1917677874_ANNO.html"
keywords: ["insert", "do", "if", "case", "data", "ABENCDS", "1917677874", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`UI Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap).

The focus of OData UI vocabulary developed by SAP is on usage patterns of data in UIs, not on UI patterns. The vocabulary is completely independent of the UI technologies or devices that consume the data.

The usage patterns of data used by the OData UI vocabulary represent certain semantic views on business data. Some of them are very generic, others are based on the concept of an entity, something tangible to end-users. Examples for entities are semantic object instances or business object instances.

Looking at different UI patterns, these data usage patterns reoccur again and again. To generate OData annotations from CDS views, CDS annotations are reused from different domains, for example Consumption, Communication, Semantics, EndUserText. The CDS annotations that are additionally required in a UI domain are listed in the following table.

Connected fields have a read-only representation that resembles a single field value, only on edit they are visually disassembled into several input controls.

Connected fields can appear in forms and tables. A set of connected fields is identified by its qualifier and can be referenced in data fields for annotation similar to data points and charts.

Its language-dependent template specifies how to render the connected fields. The template consists of placeholders for values (must be valid OData simple identifiers - think: variable names) enclosed in curly braces, plus printable characters and white-space outside of the curly braces. The example template \\{rate\\}% (\\{amount\\}) consists of two placeholders rate and amount. The value to be inserted for rate will be followed by a percent sign, the value to be inserted for amount will be enclosed in parentheses. Note that the ""values"" to be inserted are themselves data fields and thus can have advanced formatting, here a currency amount with currency for amount. Other possibilities include micro-charts and data points, making this rather powerful.

The first occurrence of groupLabel for a given qualifier wins, same for template. Other occurrences for the same qualifier are redundant and should be avoided.

<a href="https://github.com/SAP-samples/abap-platform-fiori-feature-showcase/wiki/Feature-Showcase-App-Guide#connected-fields">https://github.com/SAP-samples/abap-platform-fiori-feature-showcase/wiki/Feature-Showcase-App-Guide#connected-fields</a>

This annotation groups and uniquely identifies annotations.

You want to use more than one table, you need a qualifier to distinguish them on the UI.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.connectedFields[ ].qualifier`\\ **Scope** `#ELEMENT`\\ **Type** `String(120)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`