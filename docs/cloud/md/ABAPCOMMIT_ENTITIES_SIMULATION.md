---
title: "ABAPCOMMIT_ENTITIES_SIMULATION"
description: |
  ABAPCOMMIT_ENTITIES_SIMULATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCOMMIT_ENTITIES_SIMULATION.htm"
abapFile: "ABAPCOMMIT_ENTITIES_SIMULATION.html"
keywords: ["while", "if", "case", "data", "ABAPCOMMIT", "ENTITIES", "SIMULATION"]
---

`COMMIT ENTITIES ... IN SIMULATION MODE ...`

Optional addition of [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statements that allows a RAP transaction to be checked. It processes the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) only and without actually saving data. A final [`COMMIT WORK`](ABAPCOMMIT.html) is not implicitly included with this variant. The consistency of the transaction can be checked by evaluating the value of `sy-subrc` as a result of executing the commit in simulation mode.

A use case of `COMMIT ENTITIES` statements with the addition `IN SIMULATION MODE` might be as follows:

For general hints on using the statement see the topic [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html).

-   A non-RAP application modifies data. It needs to persist the data and has its own save logic. Furthermore, it is responsible for the final saving of data from within an [SAP LUW](ABENLUW_GLOSRY.html), i. e. once the SAP LUW is finalized with [`COMMIT WORK`](ABAPCOMMIT.html).
-   If other RAP implementations are involved and part of the SAP LUW before this `COMMIT WORK`, for example, due to new features added or due to a redesign or refactoring, it must be ensured that the overall SAP LUW is consistent with regards to saving.
-   RAP implementations whose save sequence is usually triggered with a `COMMIT ENTITIES` statement, i. e. without the addition `IN SIMULATION MODE`, process the complete save sequence automatically including the actual saving. This might lead to inconsistencies because of a potentially incomplete execution of `COMMIT WORK` while the RAP BOs are already saved with a `COMMIT ENTITIES` statement.
-   Similarly, inconsistencies can occur if data gets saved from a non-RAP application first and then RAP BOs cannot be saved due to issues. A complete checking of all involved data is not possible.
-   To overcome these potential inconsistencies, the addition `IN SIMULATION MODE` of the `COMMIT ENTITIES` statement simulates the saving of the RAP BOs to check the consistency and whether issues occur.
-   If there are no issues with saving the RAP BOs (indicated by the value 0 of `sy-subrc` following the statement), the saving of all involved (RAP and non-RAP) components from within the SAP LUW can be executed using `COMMIT WORK` that is triggered by the non-RAP application.
-   If problems show up following the consistency check (indicated by a value other than 0 of `sy-subrc` following the statement), the overall implementation can react and avoid the final saving of data at the end of the SAP LUW with `COMMIT WORK`.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommit\_entities.html