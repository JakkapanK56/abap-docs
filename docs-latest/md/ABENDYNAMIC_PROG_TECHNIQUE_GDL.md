---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNAMIC_PROG_TECHNIQUE_GDL.html"
abapFile: "ABENDYNAMIC_PROG_TECHNIQUE_GDL.html"
type: "abap-reference"
---

Dynamic programming techniques are all techniques whose functions or effects are detectable only at runtime of a program in the runtime framework.

-   [Using Dynamic Programming Techniques](ABENUSE_DYNAMIC_PROGR_TECH_GUIDL.md)
-   [Runtime Errors in Dynamic Processing](ABENRUNTIME_ERROR_DYN_PROC_GUIDL.md)
-   [Using Dynamic Data Objects](ABENUSE_DYN_DATA_OBJECT_GUIDL.md)
-   [Memory Consumption of Dynamic Memory Objects](ABENMEM_CONS_DYN_MEM_OBJ_GUIDL.md)
-   [Administration Costs of Dynamic Memory Objects](ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.md)
-   [Accessing Data Objects Dynamically](ABENDYN_ACCESS_DATA_OBJ_GUIDL.md)
-   [Dynamic Programming](ABENGENERIC_PROGR_GUIDL.md)

## Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.md).
