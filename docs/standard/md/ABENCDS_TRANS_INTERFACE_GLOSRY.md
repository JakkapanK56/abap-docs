---
title: "ABENCDS_TRANS_INTERFACE_GLOSRY"
description: |
  ABENCDS_TRANS_INTERFACE_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TRANS_INTERFACE_GLOSRY.htm"
abapFile: "ABENCDS_TRANS_INTERFACE_GLOSRY.html"
keywords: ["if", "class", "ABENCDS", "TRANS", "INTERFACE", "GLOSRY"]
---

A CDS transactional interface is a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) that is intended to serve as stable public interface for consumption. A CDS transactional interface should be classified by a [release contract](ABENRELEASE_CONTRACT_GLOSRY.html) and thus serve as [released API](ABENRELEASED_API_GLOSRY.html). They are typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to provide the basis for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). A CDS transactional interface is defined using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) statement [`DEFINE VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_INTERFACE.html) and it must have its [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) set to `TRANSACTIONAL_INTERFACE`. A CDS transactional interface is a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html).

ABENCDS\_GLOSSARY.html