---
title: "ABENCDS_ANCESTOR_ASSOC_GLOSRY"
description: |
  ABENCDS_ANCESTOR_ASSOC_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANCESTOR_ASSOC_GLOSRY.htm"
abapFile: "ABENCDS_ANCESTOR_ASSOC_GLOSRY.html"
keywords: ["ABENCDS", "ANCESTOR", "ASSOC", "GLOSRY"]
---

An [intra-BO association](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) between the current node and the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html). The association target must be higher in the hierarchical structure of the RAP composition tree, so it cannot be a sibling node or the [CDS parent entity](ABENPARENT_ENTITY_GLOSRY.html) of the current node. An ancestor association is defined using the keyword [`ancestor`](ABENBDL_ANCESTOR_EXT.html). The purpose of ancestor associations is to make it possible to implicitly derive the path to a RAP BO's [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html), [lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html), and [ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html), so the respective entities need not be defined explicitly.

[**\-> More about**](ABENBDL_ANCESTOR_EXT.html)

ABENRAP\_GLOSSARY.html