---
title: "ABENNEWS-762-ASSIGNMENTS"
description: |
  ABENNEWS-762-ASSIGNMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-762-ASSIGNMENTS.htm"
abapFile: "ABENNEWS-762-ASSIGNMENTS.html"
keywords: ["while", "if", "case", "method", "class", "internal-table", "ABENNEWS", "762", "ASSIGNMENTS"]
---

The new methods [`CREATE_USING`](ABENCL_ABAP_CORRESPONDING_2.html) and [`EXECUTE_USING`](ABENCL_ABAP_CORRESPONDING_2.html) for making assignments between internal tables by component while using lookup tables have been added to the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html).

If the method [`EXECUTE`](ABENCL_ABAP_CORRESPONDING_1.html) for simple assignment is used, the restriction that source and target cannot be identical has been lifted. It should be noted, however, that no temporary copy of the source is created as a target object (like in [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html)), which means that the result in the case of overlapping source and target components is different than when the operator [`CORRESPONDING`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) is used reflexively.

abenabap.html abennews.html abennews-76.html abennews-762.html abennews-762-746.html