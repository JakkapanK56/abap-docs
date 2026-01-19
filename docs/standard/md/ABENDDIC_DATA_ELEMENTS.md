---
title: "ABENDDIC_DATA_ELEMENTS"
description: |
  ABENDDIC_DATA_ELEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATA_ELEMENTS.htm"
abapFile: "ABENDDIC_DATA_ELEMENTS.html"
keywords: ["do", "data", "types", "ABENDDIC", "DATA", "ELEMENTS"]
---

A [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) or a [reference type](ABENREFERENCE_TYPE_GLOSRY.html). DDIC data elements describe the technical type properties and the semantic meaning of an object that is defined with reference to the data element. Data elements are the elementary components of complex types such as [DDIC structures](ABENDDIC_STRUCTURES.html), [DDIC table types](ABENDDIC_TABLE_TYPES.html), or [DDIC database tables](ABENDDIC_DATABASE_TABLES.html). An object which is declared program-internally with reference to a data element always has one of the elementary built-in ABAP types. The type in question is defined by the mapping of the [built-in types](ABENDDIC_BUILTIN_TYPES.html) in the ABAP Dictionary to ABAP types.

-   [Technical properties of data elements](ABENDDIC_DATA_ELEMENTS_TECH.html)
-   [Semantic properties of data elements](ABENDDIC_DATA_ELEMENTS_SEMA.html)

-   [ABAP Core Data Services](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html) offer [CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html) for defining [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) natively in ABAP CDS. CDS simple types can be enriched with semantic information using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). This semantic information is evaluated by frameworks such as the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) when a simple type is used for typing. Moreover, simple types can be nested within each other and therefore offer advanced reuse capabilities compared to DDIC data elements.
-   The technical properties of a data element can be defined either directly or by using a reusable [domain](ABENDDIC_DOMAINS.html). This is why the concept is known as a two-level domain concept.
-   The name of a data element must follow the [naming rules for DDIC data types](ABENDDIC_TYPES_NAMES.html).
-   Data elements can be maintained in form-based tools both in the ABAP Dictionary [tool](ABENDDIC_TOOLS.html) and in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html