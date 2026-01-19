---
title: "ABENDDIC_DOMAINS"
description: |
  ABENDDIC_DOMAINS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DOMAINS.htm"
abapFile: "ABENDDIC_DOMAINS.html"
keywords: ["do", "if", "data", "types", "ABENDDIC", "DOMAINS"]
---

A [DDIC domain](ABENDOMAIN_GLOSRY.html) is a standalone dictionary object that defines technical and semantic properties of elementary data types. [Data elements](ABENDDIC_DATA_ELEMENTS.html) can be defined with reference to a domain and inherit the properties defined there. Domains can only be used in DDIC data elements. A domain can be used by any number of data elements.

The name of a domain must follow the [naming rules for DDIC data types](ABENDDIC_TYPES_NAMES.html) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

-   [Technical properties of domains](ABENDDIC_DOMAINS_TECH.html)
-   [Semantic properties of domains](ABENDDIC_DOMAINS_SEMA.html)

-   Redundant domains should not occur within an application component or a package. Domains that only have technical properties should be created as reusable domains in central basis packages. One example is the domain `CHAR255`.
-   The [fixed values](ABENFIXED_VALUE_GLOSRY.html) of a domain can be used as special kinds of literals in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).
-   As of ABAP release 7.93, [ABAP Core Data Services](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html) offer [CDS enumerated types](ABENCDS_ENUM_TYPE_GLOSRY.html) for defining [enumerated data types](ABENENUM_TYPE_GLOSRY.html) natively in ABAP CDS. CDS enumerated types provide functionality similar to domains with [fixed values](ABENFIXED_VALUE_GLOSRY.html) and are recommended when working with data models in ABAP CDS.
-   A domain determines properties of an elementary data type but is not a data type itself. A domain cannot be specified after a `TYPE` addition in ABAP.
-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](ABENDDIC_TOOLS.html) and in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_data\_elements.html