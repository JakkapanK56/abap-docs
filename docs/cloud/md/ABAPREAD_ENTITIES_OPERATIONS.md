---
title: "ABAPREAD_ENTITIES_OPERATIONS"
description: |
  ABAPREAD_ENTITIES_OPERATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREAD_ENTITIES_OPERATIONS.htm"
abapFile: "ABAPREAD_ENTITIES_OPERATIONS.html"
keywords: ["do", "if", "case", "try", "data", "internal-table", "ABAPREAD", "ENTITIES", "OPERATIONS"]
---

```READ ENTITIES [[`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html)|[[`` `FORWARDING` ``](ABAPEML_PRIVILEGED.html)]\ [`` `PRIVILEGED` ``](ABAPEML_PRIVILEGED.html)] OPERATIONS op_tab [[`` `response_param` ``](ABAPEML_RESPONSE.html)].```

[1. `... IN LOCAL MODE ...`](#ABAP_ADDITION_1@3@)

[2. `... [FORWARDING] PRIVILEGED ...`](#ABAP_ADDITION_2@3@)

[3. `... response_param.`](#ABAP_ADDITION_3@3@)

The dynamic form of the `READ` statement enables the collecting of read operations for multiple RAP BOs in one `READ ENTITIES OPERATIONS ...` statement. There is no short form available for the dynamic version.

`op_tab` must be a table of type `ABP_BEHV_RETRIEVALS_TAB`. This table has specific components:

The addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) is used to exclude [feature controls](ABENBDL_ACTIONS_FC.html) and [authorization checks](ABENBDL_AUTHORIZATION.html). It can only be used within the RAP BO runtime implementation.

The addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, `privileged` must be specified in the BDEF.

The addition [`response_param`](ABAPEML_RESPONSE.html) represents the response parameters that can be specified. The specification is optional. When used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with `ABP_BEHV_RESPONSE_TAB`.

The following source code section taken from `CL_DEMO_RAP_EML_READ` demonstrates an EML `READ ENTITIES OPERATIONS` statement.

-   The example [ABAP EML - `READ`, Variants](ABENEML_READ_ALTERNATIVES_ABEXA.html) demonstrates this `READ` variant with a simple managed RAP BO.
-   For more examples on `READ` operations in general, see [Examples for ABAP EML `READ`](ABAPEML_READ_EXAMPLES_ABEXAS.html).

DATA: \\n op\_tab TYPE ABP\_BEHV\_RETRIEVALS\_TAB, \\n read\_dyn TYPE TABLE FOR READ IMPORT DEMO\_SPFLI\_FLIGHTS, \\n read\_dyn\_result TYPE TABLE FOR READ RESULT DEMO\_SPFLI\_FLIGHTS, \\n rba\_dyn TYPE TABLE FOR READ IMPORT DEMO\_SPFLI\_FLIGHTS\\\\\_Flights, \\n rba\_dyn\_result TYPE TABLE FOR READ RESULT DEMO\_SPFLI\_FLIGHTS\\\\\_Flights, \\n rba\_dyn\_link TYPE TABLE FOR READ LINK DEMO\_SPFLI\_FLIGHTS\\\\\_Flights. \\n\\ \\n read\_dyn = value #( \\n ( %key-Carrid = 'DL' \\n %key-connid = 106 \\n %control = value #( \\n Airpfrom = if\_abap\_behv=>mk-on \\n Airpto = if\_abap\_behv=>mk-on \\n Arrtime = if\_abap\_behv=>mk-on \\n Cityfrom = if\_abap\_behv=>mk-on \\n Cityto = if\_abap\_behv=>mk-on \\n Countryfr = if\_abap\_behv=>mk-on \\n Countryto = if\_abap\_behv=>mk-on \\n Deptime = if\_abap\_behv=>mk-on \\n Fltime = if\_abap\_behv=>mk-on \\n Distance = if\_abap\_behv=>mk-on \\n Distid = if\_abap\_behv=>mk-on \\n Fltype = if\_abap\_behv=>mk-on \\n Period = if\_abap\_behv=>mk-on \\n ) \\n ) ). \\n\\ \\n rba\_dyn = value #( \\n ( %key-Carrid = 'UA' \\n %key-connid = 3516 \\n %control = value #( Fldate = if\_abap\_behv=>mk-on \\n Price = if\_abap\_behv=>mk-on \\n Currency = if\_abap\_behv=>mk-on \\n Planetype = if\_abap\_behv=>mk-on \\n Seatsmax = if\_abap\_behv=>mk-on \\n Seatsocc = if\_abap\_behv=>mk-on \\n ) ) ). \\n\\ \\n op\_tab = value #( \\n ( op = if\_abap\_behv=>op-r-read \\n entity\_name = 'DEMO\_SPFLI\_FLIGHTS' \\n instances = ref #( read\_dyn ) \\n results = ref #( read\_dyn\_result ) ) \\n ( op = if\_abap\_behv=>op-r-read\_ba \\n entity\_name = 'DEMO\_SPFLI\_FLIGHTS' \\n sub\_name = '\_FLIGHTS' \\n full = 'X' \\n instances = ref #( rba\_dyn ) \\n results = ref #( rba\_dyn\_result ) \\n links = ref #( rba\_dyn\_link ) ) \\n ). \\n\\ \\n READ ENTITIES OPERATIONS op\_tab FAILED FINAL(failed\_dyn). **Component** **Details**\\ `OP` It is a mandatory component and specifies the operation to be executed. It can be set with the defined constants, for example, `OP-R-READ` etc., of interface `IF_ABAP_BEHV` or just the predefined value for the operation in the interface, for example `'R'` for a read operation (`OP = 'R'`) or `'N'` for a read-by-association operation (`OP = 'N'`). `ENTITY_NAME` It is a mandatory component and specifies the name of the RAP BO entity for which the operation is executed. The name must be provided using capital letters. `SUB_NAME` Only relevant for specifying association names in case of read-by-association operations or for functions. In these contexts, the specification is mandatory. `INSTANCES` Mandatory component. It specifies a reference to an internal table holding the input keys. The table must be typed with the required BDEF derived type for the operation. `FULL` An optional flag specifying whether all target instances (and not just links) are retrieved in the context of read-by-association operations. It is of type `c` with length 1, i. e. `full` specified with `abap_true` or `'X'` respects all target instances. \\
**Note:** Currently, the behavior is as follows: If *full* is specified with *abap\_true* or *'X'*, all target instances are retrieved in any case. When specified otherwise, the instances might be retrieved or not. `RESULTS` It specifies a reference to an internal table with the required BDEF derived type for the read results. `LINKS` It specifies a reference to an internal table with the required BDEF derived type holding the key pairs of the source and target. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapread\_entity\_entities.html