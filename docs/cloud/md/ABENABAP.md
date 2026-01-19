---
title: "ABENABAP"
description: |
  ABENABAP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP.htm"
abapFile: "ABENABAP.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENABAP"]
---

The keyword documentation describes the syntax and semantics of the keywords of programming languages provided by SAP on an [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) (AS ABAP) of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) for [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html). It also provides an introduction to the environment of these languages plus language-related frameworks and their associated system classes.

The language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) and the frameworks for [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) do not cover all elements of the [ABAP technology](ABENABAP_TECHNO_GLOSRY.html) and are restricted to the needs of ABAP Cloud.

The programs and program extracts presented in the ABAP Keyword Documentation are only syntax examples and are not intended for direct use in a production system environment. The source texts of the examples are primarily intended to provide a better explanation and visualization of the syntax and semantics of ABAP statements and not to solve concrete programming tasks. For production application programs, a dedicated solution should therefore always be worked out for each individual case. The database tables of the flight data model used in the example programs can be filled using the class `CL_DEMO_FILL_FLIGHT_MODEL_TABS`.

-   **Modeling**

-   [ABAP - Dictionary](ABENABAP_DICTIONARY.html)
-   ABAP Dictionary is a persistent repository of metadata used to describe data types, database tables, views, and similar objects that can be used in development objects such as [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) or [CDS entities](ABENCDS_ENTITY_GLOSRY.html). This section of the ABAP keyword documentation provides a full description of the most important ABAP Dictionary objects that are relevant for the programming languages. It also includes documentation for the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) used to define certain dictionary objects in the ABAP development tools for Eclipse (ADT).
-   [ABAP - Core Data Services](ABENCDS.html)
-   The ABAP Core Data Services (ABAP CDS) are the ABAP-specific implementation of SAP's [CDS](ABENCDS_GLOSRY.html) concept. They are used to develop data models that go far beyond the capabilities of ABAP Dictionary. CDS entities can access ABAP Dictionary objects and can be used in ABAP programs. This section of the ABAP keyword documentation introduces the concepts of ABAP CDS and provides full descriptions of the programming languages used to define [CDS objects](ABENCDS_OBJECT_GLOSRY.html) in the ABAP development tools for Eclipse (ADT), such as [CDS DDL](ABENCDS_DDL_GLOSRY.html), [CDS DCL](ABENCDS_DDL_GLOSRY.html), [CDS SDL](ABENCDS_SDL_GLOSRY.html), or [RAP BDL](ABENCDS_BDL_GLOSRY.html).

-   **Application Programming**

-   [ABAP - Programming Language](ABENABAP_REFERENCE.html)
-   The [ABAP language](ABENABALA_GLOSRY.html) (ABAP for short) is the main programming language of the [ABAP development environment (ABAP DE)](ABENABAP_DEV_ENVIR_GLOSRY.html) provided by an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html). It is the namesake for the [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) (or AS ABAP) and many of its components. ABAP is the programming interface of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) and is used for the development of system programs and application programs that are usually based on objects in ABAP Dictionary or in ABAP CDS. This section of the ABAP keyword documentation provides a full description of the ABAP programming language and its object-oriented part, [ABAP Objects](ABENABAP_OBJECTS_GLOSRY.html). It also provides descriptions of the XML-based language elements for [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html).
-   [ABAP - RAP Business Objects](ABENABAP_RAP.html)
-   The [ABAP RESTful Application Programming Model (RAP)](ABENARAP_GLOSRY.html) is a programming model that is [RESTful](ABENRESTFUL_GLOSRY.html) or that meets the requirements of a [REST](ABENREST_GLOSRY.html) architecture. In ABAP RAP, [AS ABAP](ABENAS_ABAP_GLOSRY.html) plays the role of a stateless Web server. [OData](ABENODATA_GLOSRY.html) serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](ABENSTANDARD_DB_GLOSRY.html). The modeling is based on [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). This section of the ABAP keyword documentation describes the modeling, implementation, publication, and consumption of [RAP business objects](ABENRAP_BO_GLOSRY.html), including [RAP business services](ABENBUSINESS_SERVICE_GLOSRY.html), [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), and [ABAP EML](ABENEML_GLOSRY.html) for providing and consuming RAP BOs.

-   **Additional Information**

-   [ABAP APIs](ABENABAP_VERSIONS_AND_APIS.html)
-   Rules on how to develop robust ABAP programs using [released APIs](ABENRELEASED_API_GLOSRY.html).
-   [ABAP - Release News](ABENNEWS.html)
-   List of release-specific changes and enhancements to ABAP and the other \\nprogramming languages.

-   **Alphabetic Directories**

-   [ABAP - Glossary](ABENABAP_GLOSSARY.html)
-   Terms in ABAP and their explanations.
-   [ABAP - Index](ABENABAP_INDEX.html)
-   Alphabetic index of the language elements of all programming languages described in the ABAP keyword documentation. If not noted otherwise, language elements are part of the ABAP programming language. Language elements in the other programming languages are noted accordingly.
-   [ABAP - Subject Directory](ABENABAP_SUBJECTS.html)
-   Alphabetic index for searching by subject area.
-   [ABAP - Examples](ABENABAP_EXAMPLES.html)
-   Alphabetic list of executable ABAP example programs.

-   **Domain-Specific Glossaries**
-   Terms and their definitions for specific subject areas.

-   [ABAP Technology Glossary](ABENTECHNO_GLOSSARY.html)
-   [DDIC Glossary](ABENDDIC_GLOSSARY.html)
-   [ABAP CDS Glossary](ABENCDS_GLOSSARY.html)
-   [ABAP Language Glossary](ABENABALA_GLOSSARY.html)
-   [RAP Glossary](ABENRAP_GLOSSARY.html)
-   [ABAP SQL - Glossary](ABENSQL_GLOSSARY.html)
-   [AMDP - Glossary](ABENAMDP_GLOSSARY.html)