---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEML_READ_OP_FUNC_ABEXA.htm"
abapFile: "ABENEML_READ_OP_FUNC_ABEXA.html"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "ABENEML", "READ", "FUNC", "ABEXA"]
---

This example demonstrates how a `READ` statement can be used to access a managed RAP BO and execute a function. In this case, a selected set of fields is read from a RAP BO entity by executing a function.

**Data model**

The CDS data model consists of the root entity `DEMO_SPFLI_FLIGHTS` and its child entity `DEMO_SFLIGHT`. The root entity represents flight schedule data and the child entity represents flight details.

Root entity:

Child entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_SPFLI_FLIGHTS` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Behavior implementation**

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_SPFLI_FLIGHTS`. This global class implements the local handler class `LHC_DEMO_SPFLI_FLIGHTS`. The actual implementation takes place in the `BP_DEMO_SPFLI_FLIGHTS=========CCIMP`. In the example, the `FunctionResultEntity` method comprises an ABAP EML read operation reading the values of a selected set of fields from the entity `DEMO_SPFLI_FLIGHTS` according to specific keys that are specified in the internal table following the `... EXECUTE FunctionResultEntity FROM ...` statement in the report.

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class:

-   The `READ` statement executes the function `FunctionResultEntity` for those entity instances whose keys are specified in the internal table following the `... EXECUTE FunctionResultEntity FROM ...` statement.
-   The outcome of the function execution is stored in the table `result`. In this case, the function `FunctionResultEntity` first reads a selected set of fields from [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html). Then, a calculation is carried out if a selected field has a certain value (the distance of a flight connection is converted to kilometers if the distance is stored as miles). The read result is then passed to the `result` table.
-   To display the result of the read operation, an internal table is set up and filled with the values returned by the read operation.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@Metadata.allowExtensions: true\\n@EndUserText.label: 'spfli view'\\ndefine root view entity DEMO\_SPFLI\_FLIGHTS\\n as select from spfli\\n composition \[0..\*\] of DEMO\_SFLIGHT as \_Flights\\n \\{\\n key spfli.carrid as Carrid,\\n key spfli.connid as Connid,\\n spfli.countryfr as Countryfr,\\n spfli.cityfrom as Cityfrom,\\n spfli.airpfrom as Airpfrom,\\n spfli.countryto as Countryto,\\n spfli.cityto as Cityto,\\n spfli.airpto as Airpto,\\n spfli.fltime as Fltime,\\n spfli.deptime as Deptime,\\n spfli.arrtime as Arrtime,\\n spfli.distance as Distance,\\n spfli.distid as Distid,\\n spfli.fltype as Fltype,\\n spfli.period as Period,\\n \_Flights\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SFLIGHT\\n as select from sflight\\n association to parent DEMO\_SPFLI\_FLIGHTS as \_Spfli \\n on $projection.Carrid = \_Spfli.Carrid\\n and $projection.Connid = \_Spfli.Connid\\n \\{\\n key sflight.carrid as Carrid,\\n key sflight.connid as Connid,\\n key sflight.fldate as Fldate,\\n sflight.price as Price,\\n sflight.currency as Currency,\\n sflight.planetype as Planetype,\\n sflight.seatsmax as Seatsmax,\\n sflight.seatsocc as Seatsocc,\\n sflight.paymentsum as Paymentsum,\\n sflight.seatsmax\_b as SeatsmaxB,\\n sflight.seatsocc\_b as SeatsoccB,\\n sflight.seatsmax\_f as SeatsmaxF,\\n sflight.seatsocc\_f as SeatsoccF,\\n \_Spfli\\n \\}\\n managed implementation in class bp\_demo\_spfli\_flights unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_SPFLI\_FLIGHTS\\npersistent table SPFLI\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n association \_Flights \\{ create; \\}\\n function (authorization:none) FunctionResultEntity result \[1\] $self;\\n field ( readonly ) carrid, connid;\\n\\}\\n\\ndefine behavior for DEMO\_SFLIGHT alias SFLIGHT\\npersistent table SFLIGHT\\nlock dependent by \_spfli\\nauthorization dependent by \_spfli\\n\\{\\n update;\\n delete;\\n field ( readonly ) carrid, connid, fldate;\\n mapping for SFLIGHT corresponding\\n \\{\\n SeatsmaxB = seatsmax\_b;\\n SeatsmaxF = seatsmax\_f;\\n SeatsoccF = seatsocc\_f;\\n SeatsoccB = seatsocc\_b;\\n \\}\\n association \_spfli;\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_eml\_read\_op\_func DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_eml\_read\_op\_func IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Read operation executing a function \\n READ ENTITIES OF demo\_spfli\_flights \\n ENTITY demo\_spfli\_flights \\n EXECUTE FunctionResultEntity \\n FROM VALUE #( ( %tky-Carrid = 'AA' \\n %tky-Connid = 17 ) \\n ( %tky-Carrid = 'AZ' \\n %tky-Connid = 555 ) \\n ) \\n RESULT FINAL(result) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n\\ \\n out->next\_section( \\n 'Result of READ operation executing a function:' \\n )->write( result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_eml\_read\_op\_func DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_eml\_read\_op\_func IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Read operation executing a function \\n READ ENTITIES OF demo\_spfli\_flights \\n ENTITY demo\_spfli\_flights \\n EXECUTE FunctionResultEntity \\n FROM VALUE #( ( %tky-Carrid = 'AA' \\n %tky-Connid = 17 ) \\n ( %tky-Carrid = 'AZ' \\n %tky-Connid = 555 ) \\n ) \\n RESULT FINAL(result) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n\\ \\n out->next\_section( \\n 'Result of READ operation executing a function:' \\n )->write( result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapread\_entity\_entities.html abapeml\_read\_examples\_abexas.html