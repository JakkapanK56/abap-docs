---
title: "ABAPDERIVED_TYPES_CHG"
description: |
  ABAPDERIVED_TYPES_CHG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_CHG.htm"
abapFile: "ABAPDERIVED_TYPES_CHG.html"
keywords: ["update", "delete", "loop", "if", "method", "class", "data", "types", "ABAPDERIVED", "TYPES", "CHG"]
---

`%chg` is a [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component.

It is used in the context of [RAP BO draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) that are specified with `additionalsave` in the [BDEF](ABENCDS_ENTITY_BDEF_GLOSRY.html). It contains values for cumulated changes, i.e. the values indicate whether the operations performed on instances are create, update or delete operations. You can check whether the value of `%chg` is *C* for create, *U* for update, or *D* for delete operations. The structured constant `cop` of the interface `IF_ABAP_BEHV` can be used to specify the value: `if_abap_behv=>cop-create`, `if_abap_behv=>cop-update`, and `if_abap_behv=>cop-delete`.

**Type**

The components are typed with `ABP_BEHV_MNGD_OP`.

**Where Used**

This component can be used in the method implementation [`... FOR MODIFY ... ACTION bdef~additionalsave ...`](ABAPHANDLER_METH_MODIFY.html).

The following source code snippet shows how cumulated changes may be processed in the implementation of method [`... FOR MODIFY ... ACTION bdef~additionalsave ...`](ABAPHANDLER_METH_MODIFY.html).

CLASS lhc\_bdef DEFINITION INHERITING FROM cl\_abap\_behavior\_handler. \\n PRIVATE SECTION. \\n ... \\n METHODS additionalsave FOR MODIFY \\n IMPORTING keys FOR ACTION bdef~additionalsave. \\n ... \\nENDCLASS. \\n\\ \\nCLASS lhc\_bdef IMPLEMENTATION. \\n ... \\n METHOD additionalsave. \\n ... \\n LOOP AT keys INTO DATA(key). \\n ... \\n LOOP AT key-%param-some\_entity INTO DATA(k). \\n IF k-%chg = if\_abap\_behv=>cop-create. \\n ... \\n ENDIF. \\n IF k-%chg = if\_abap\_behv=>cop-update. \\n ... \\n ENDIF. \\n IF k-%chg = if\_abap\_behv=>cop-delete. \\n ... \\n ENDIF. \\n ENDLOOP. \\n ... \\n ENDLOOP. \\n ... \\n ENDMETHOD. \\n ... \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_misc.html