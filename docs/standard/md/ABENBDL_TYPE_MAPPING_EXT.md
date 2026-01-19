---
title: "ABENBDL_TYPE_MAPPING_EXT"
description: |
  ABENBDL_TYPE_MAPPING_EXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_TYPE_MAPPING_EXT.htm"
abapFile: "ABENBDL_TYPE_MAPPING_EXT.html"
keywords: ["if", "ABENBDL", "TYPE", "MAPPING", "EXT"]
---

`... extend mapping for PartnerType    [control ControlType]\                                        \{[corresponding [except Comp1,Comp2, ...]]\}\      \{        EntityComp1      = PartnerComp1 [control ControlComp];       [EntityComp2      = PartnerComp2 [control ControlComp];]\       [parameter Param1 = PartnerComp;]\       [... ;]\      \}    | mapping for PartnerType           [control ControlComp]\                                         corresponding [except Comp1,Comp2, ...];  ...`

Extends an existing [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) with extension fields. The syntax is similar to the syntax for RAP type mapping in original RAP BOs, see the topic [RAP - `TypeMapping`](ABENBDL_TYPE_MAPPING.html). As a prerequisite, the respective type mapping must be explicitly defined as extensible as described in the topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).

In a BDEF extension, you can either add a new RAP type mapping using the syntax [`mapping for ...`](ABENBDL_NEW_ELEM_EXT.html), or you can extend an existing type mapping from the original behavior definition using the syntax `extend type mapping`. If the partner type is identical, both variants are equivalent. There is no difference between `mapping for PartnerType ...` and `extend mapping for PartnerType ...`

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html abenbdl\_entity\_beh\_extension.html abenbdl\_ext\_elem\_ext.html