---
title: "ABENCDS_BDEF"
description: |
  ABENCDS_BDEF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_BDEF.htm"
abapFile: "ABENCDS_BDEF.html"
keywords: ["do", "data", "ABENCDS", "BDEF"]
---

A [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) (BDEF for short) is an ABAP repository object that defines the transactional behavior of a [RAP business object](ABENRAP_BO_GLOSRY.html) in the context of [ABAP RAP](ABENABAP_RAP_GLOSRY.html). The transactional behavior defines and restricts how a RAP BO can be accessed by a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html). A BDEF is always based on a CDS data model that consists of at least one [root entity](ABENROOT_ENTITY_GLOSRY.html) and it refers to the root entity. A root entity can have no more than one BDEF.

A RAP behavior definition consists of a [header part](ABENCDS_BDEF_HEADER_GLOSRY.html) and at least one [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html). The entity behavior definition, in turn, is made up of [entity characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) and a [body](ABENCDS_ENTITY_BODY_GLOSRY.html). One or more [authorization contexts](ABENCDS_AUTH_CON_GLOSRY.html) can optionally be defined.

The following image shows the structure of a RAP behavior definition:

Further details on the parts of a RAP behavior definition can be found in the following sections:

An exhaustive description of RAP business objects, behavior characteristics, and transactional behavior can be found in the development guide for the RESTful Application Programming Model, in the section [Business Object](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a3ff9dcdb25a4f1a9408422b8ba5fa00?version=sap_cross_product_abap).

-   [BDEF header](ABENBDL_BDEF_HEADER.html)
-   [entity behavior definition](ABENBDL_DEFINE_BEH.html)
-   [entity behavior characteristics](ABENBDL_CHARACTER.html)
-   [entity behavior body](ABENBDL_BODY.html)
-   [authorization context](ABENBDL_AUTHORIZATION_CONTEXT.html)

abenabap.html abenabap\_rap.html