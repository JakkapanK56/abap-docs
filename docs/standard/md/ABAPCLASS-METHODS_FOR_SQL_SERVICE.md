---
title: "ABAPCLASS-METHODS_FOR_SQL_SERVICE"
description: |
  ABAPCLASS-METHODS_FOR_SQL_SERVICE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-METHODS_FOR_SQL_SERVICE.htm"
abapFile: "ABAPCLASS-METHODS_FOR_SQL_SERVICE.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABAPCLASS", "METHODS", "FOR", "SQL", "SERVICE"]
---

[Short Reference](ABAPCLASS-METHODS_SHORTREF.html)

``CLASS-METHODS meth FOR SQL SERVICE          [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) READ-ONLY \{[`CDS SESSION CLIENT DEPENDENT\}\ |\ \{CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html)\}\          [IMPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)]\           EXPORTING parameter1 [parameter2 ...]``.

This statement declares the [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth` as an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHODS.html) that is intended to be exposed for external SQL access using an [SQL service](ABENABAP_SQL_SERVICES_GLOSRY.html) (see also [`DEFINE SERVICE`](ABENSRVD_DEFINE_SERVICE.html)). Only AMDP `READ-ONLY` methods are allowed. Only [client-safe](ABENCLIENT_SAFE_GLOSRY.html) methods can be exposed.

This statement can only be specified in the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASSES.html). The signature and implementation must be declared in the same class, that is, the method must neither be inherited nor be an interface implementation.

Since the static method defines an AMDP procedure, the method must be implemented using the addition [`BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT`](ABAPMETHOD_BY_DB_PROC.html).

The addition `FOR SQL SERVICE` in the method declaration serves to indicate that the AMDP procedure is intended for an exposure to external clients using a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) with a [CDS provider contract](ABENCDS_PROVIDER_CONTRACT_GLOSRY.html) of type *SQL* and a [service binding](ABENSERVICE_BINDING_GLOSRY.html) of type *SQL - Web API*. Data exposure using an SQL service is the key element for data integration scenarios for cross-system analytics, for example.

The restrictions for [AMDP procedure methods](ABENAMDP_PROCEDURE_METHODS.html) apply. In addition, the following restrictions apply:

There is no access control available for the output parameters of a procedure call. As a result, during a procedure call using the SQL service, all data is returned by a procedure output parameter.

-   Only `IMPORTING` and `EXPORTING` parameters are allowed. There must be at least one `EXPORTING` parameter.
-   Scalar or tabular input and output parameters can be used as follows:

-   Parameters can only be typed with DDIC data types ([DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html) or [DDIC table types](ABENDDIC_TABLE_TYPE_GLOSRY.html)).
-   The [built-in DDIC types](ABENBUILTIN_DDIC_TYPE_GLOSRY.html)\\ `CURR`, `LANG`, `LCHR`, `LRAW`, and `VARC` are not allowed as scalar parameters.
-   Only standard tables [with empty keys](ABENITAB_EMPTY_KEY.html) are allowed as tabular parameters. The table line type must not have includes.
-   The data types `CURR` and `LANG` are not allowed as components of tabular parameters.

-   It is not allowed to define a [start value](ABENSTART_VALUE_GLOSRY.html) for a parameter using the addition [`DEFAULT`](ABAPMETHODS_PARAMETERS.html).
-   Standard AMDP procedure implementations can be called using database hints, but such a parameter `call_hints` is not allowed here.
-   The parameter name `connection` (used for database connections) is not allowed.

-   *ABAP Integration and Connectivity* guide, section [Data Integration](https://help.sap.com/docs/ABAP_Cloud/eede1416d18c436e8810eaaeb20c38ae/84537caeb611420b9f3435efce209ef7).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html