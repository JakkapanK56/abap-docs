---
title: "ABENABAP_RAP"
description: |
  ABENABAP_RAP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_RAP.htm"
abapFile: "ABENABAP_RAP.html"
keywords: ["do", "case", "method", "class", "data", "types", "internal-table", "ABENABAP", "RAP"]
---

This section of the ABAP keyword documentation describes the syntax and semantics of all language elements of [ABAP RAP](ABENABAP_RAP_GLOSRY.html).

A RAP business object (RAP BO) is a [business object (BO)](ABENBUSINESS_OBJECT_GLOSRY.html) that plays a central role in [ABAP RAP](ABENABAP_RAP_GLOSRY.html) by enabling transactional access to data that are described by [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A business object is not a repository object, but it is made up from the following components and their relations. The RAP behavior definition plays a central role here in bringing the individual components together.

The main purpose of RAP BOs is to fulfill transactional OData requests from Web clients to the AS ABAP in accordance to the [RESTful](ABENRESTFUL_GLOSRY.html) paradigm. Besides that, accesses from ABAP programs to RAP BOs of the same AS ABAP are possible by using [ABAP EML](ABENABAP_EML_GLOSRY.html).

The following sections describe [RAP business services](ABENBUSINESS_SERVICE_GLOSRY.html), the RAP behavior definition language (RAP BDL), and the ABAP statements for RAP.

More information about ABAP RAP can be found under [ABAP RESTful Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap).

-   Data model
-   The data modeling of a business object takes place using CDS entities that construct a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html), which is itself defined using [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) and [to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html). The components of a [tree hierarchy](ABENTREE_HIERARCHY_GLOSRY.html) of this type are as follows:

-   [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html):
-   Each business object has exactly one root entity. A root entity is a [CDS view](ABENCDS_VIEW_GLOSRY.html), a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), or an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) defined using the addition `ROOT`. The root entity represents the business object. A root entity can have one or more child entities but cannot have a parent entity.
-   [Child entity](ABENCHILD_ENTITY_GLOSRY.html)
-   [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) can be used to define one or more child entities for each CDS entity of a business object. Before a CDS entity can be defined as a child entity, it must contain a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) with the parent entity and expose it.
-   [Parent entity](ABENPARENT_ENTITY_GLOSRY.html)
-   A CDS entity of a business object that uses [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) to define child entities is their parent entity. Each child entity can have exactly one parent entity and the syntax guarantees this by defining and exposing exactly one [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in each child entity.
-   [Leaf entity](ABENLEAF_ENTITY_GLOSRY.html)
-   A CDS entity of a business object that is not a parent entity or in which no child entities are defined using [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) is a leaf entity.

-   Behavior
-   The [RAP business object behavior](ABENRAP_BO_BEHAVIOR_GLOSRY.html) is defined in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) (BDEF). The BDEF defines the main characteristics of a RAP BO and which [CRUD](ABENCRUD_GLOSRY.html) operations or other actions it provides. There are two kinds of RAP BOs, managed and unmanaged:

-   For a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), its behavior is fully or partly provided by the managed RAP BO provider.
-   For an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), its behavior must be fully provided by an [ABAP behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html).

-   The BDEF also defines the communication between the consumer and the provider of a RAP BO. This communication takes place by using internal tables of so-called [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) that depend on the behavior definition:

-   The [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) implements methods with parameters that are typed with BDEF derived types.
-   The [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) sends or receives internal tables of BDEF derived types to or from the RAP BO provider.

-   RAP business service
-   A RAP business service provides access to CDS entities by Web clients from outside an AS ABAP. Such an access can be a pure read access (query) or a transactional request.

-   For read accesses (queries), all accesses from the AS ABAP to the underlying database are encapsulated by the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html). Normally, no own ABAP programming is necessary. Only in exceptional cases, special [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) can be used, that are implemented in ABAP classes.
-   For transactional requests, RAP business objects (RAP BOs) are required. In a RAP BO, a behavior is defined by a RAP behavior definition for a CDS entity, that can be exposed by a RAP business service. The behavior is implemented by the managed RAP BO provider or in ABAP behavior implementations.

-   [RAP - Business Services (BS)](ABENCDS_BUSINESS_SERVICES.html)
-   [RAP - Behavior Definitions](ABENCDS_BDEF.html)
-   [ABAP for RAP Business Objects](ABENABAP_FOR_RAP_BOS.html)
-   [RAP Glossary](ABENRAP_GLOSSARY.html)

abenabap.html