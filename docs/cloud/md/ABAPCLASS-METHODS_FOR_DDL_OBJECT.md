---
title: "ABAPCLASS-METHODS_FOR_DDL_OBJECT"
description: |
  ABAPCLASS-METHODS_FOR_DDL_OBJECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS-METHODS_FOR_DDL_OBJECT.htm"
abapFile: "ABAPCLASS-METHODS_FOR_DDL_OBJECT.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPCLASS", "METHODS", "FOR", "DDL", "OBJECT"]
---

`CLASS-METHODS meth FOR DDL OBJECT                     [OPTIONS \{CDS SESSION CLIENT DEPENDENT|REQUIRED\}\                            |\ \{CLIENT INDEPENDENT\}].`

[`... OPTIONS \{CDS SESSION CLIENT DEPENDENT|REQUIRED\}|\{CLIENT INDEPENDENT\}`](#ABAP_ONE_ADD@1@)

Methods defined with `FOR DDL OBJECT` are used to support [DDL objects](ABENDDL_OBJECT_GLOSRY.html) with [AMDP](ABENAMDP_GLOSRY.html). The following DDL objects can be used with AMDP:

**Note**\\ [Database tables](ABENDATABASE_TABLE_GLOSRY.html) are not considered as DDL objects.

The methods have the following characteristics:

The method implementation must be included for the respective DDL object following the syntax outlined in the topic [`METHOD, BY DATABASE ...`](ABAPMETHOD_BY_DB_PROC.html).

Defines the client handling of the DDL object and affects the client handling of an AMDP method that calls the method. A DDL object can be based on client-dependent or client-independent [DDIC](ABENDDIC_GLOSRY.html) or [ABAP CDS](ABENABAP_CDS_GLOSRY.html) artifacts and can therefore be client-dependent or client-independent.

The example [AMDP - Graph Processing](ABENAMDP_GRAPH_CS_ABEXA.html) demonstrates graph processing using a graph workspace and a graph procedure. In this context, a graph workspace is declared using the `CLASS-METHODS` statement with the addition `FOR DDL OBJECT`.

-   [Graph workspaces](ABENGRAPH_WORKSPACE_GLOSRY.html)

-   Must be defined and implemented in an [AMDP class](ABENAMDP_CLASS_GLOSRY.html).
-   Must be [static](ABENSTATIC_METHOD_GLOSRY.html), i. e. only using `CLASS-METHODS` statements.
-   Can be public, protected or private.
-   Must not have any parameters and exceptions.
-   Must not be defined in interfaces.
-   Can be based on [DDIC](ABENDDIC_GLOSRY.html) artifacts and are therefore be client-dependent. In this case, the addition using `OPTIONS ...` is required.
-   Cannot be called as methods in ABAP.
-   Cannot be [redefined](ABENREDEFINITION_GLOSRY.html).

-   If `OPTIONS CDS SESSION CLIENT` is used, the DDL object is client-dependent. The client handling is assumed to be done by implicit evaluation of the HANA session variable `CDS_CLIENT`. A calling AMDP method must set this session variable by using the AMDP option [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) as follows:

-   If `OPTIONS CDS SESSION CLIENT DEPENDENT` is used here, a calling AMDP method must also use [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html). The [`USING`](ABAPMETHOD_BY_DB_PROC.html) list must contain [client-safe](ABENCLIENT_SAFE_GLOSRY.html) objects only.
-   If `OPTIONS CDS SESSION CLIENT REQUIRED` is used here, a calling AMDP method must use [`CDS SESSION CLIENT CURRENT|clnt`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html).

-   If `OPTIONS CLIENT INDEPENDENT` is used, the DDL object is client-independent. A calling method can be client-dependent or client-independent.

-   Currently, the addition is required, when a [graph workspace](ABENGRAPH_WORKSPACE_GLOSRY.html) is defined using client-dependent CDS entities that are filtered by the HANA session variable `CDS_CLIENT`.
-   The addition `DEPENDENT` makes a DDL object [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html