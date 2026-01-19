---
title: "ABENDDIC_ACTIVATION"
description: |
  ABENDDIC_ACTIVATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_ACTIVATION.htm"
abapFile: "ABENDDIC_ACTIVATION.html"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "types", "ABENDDIC", "ACTIVATION"]
---

When a data type in ABAP Dictionary is activated, a [DDIC runtime object](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) is created that consumers such as dictionary objects, ABAP programs, or dynpros can use to effectively access all relevant type properties. When a data type is activated, all objects that are dependent on it must be activated again as well.

A data type can only be activated if the dependent dictionary objects can be activated as well. However, if an incompatible change to a dictionary type leads to an error in an ABAP program or dynpro, this does not prevent activation. This type of error is detected in the system the next time the program is executed or during an explicit syntax check. When changed dictionary types are transported to target systems, dependent ABAP programs and dynpros are activated by the transport as well. If an error occurs, the transport is reported as unsuccessful.

Each time a dictionary object is activated, a detailed activation log is created that can be evaluated if errors occur.

When a data type in ABAP Dictionary is activated, a [DDIC runtime object](ABENDDIC_RUNTIME_OBJECT_GLOSRY.html) is usually created in the name table (nametab), which the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) accesses when the data type is used in an ABAP program or dynpro. The DDIC runtime object summarizes all important properties of the data type. A DDIC runtime object has a time stamp for the time it was activated. If an existing type is activated, the corresponding DDIC runtime object is adapted and the time stamp is updated.

If existing dictionary objects that are already used by other dictionary objects or ABAP programs and dynpros are activated, the dependent objects must be activated as well.

ABAP programs and dynpros that depend on a changed data type of the ABAP Dictionary are activated in the same system the first time they are used, and in the target system after the changed dictionary type has been transported and activated. When a dictionary type is activated, the time stamp of its DDIC runtime object is adapted, as are the time stamps of the sources of all ABAP programs and dynpros that use this type, if a change relevant for a program or dynpro has been made. When a program or dynpro is used, or after it has been transported, this time stamp is compared with the current time stamp of its load and is generated again if necessary.

Dictionary objects that are dependent on a changed data type of the ABAP Dictionary are activated with it immediately:

The status *partially active* means that a dictionary object could not be fully activated:

If an activation results in *partially active* objects, these must be located in the activation log. The causes of the errors must be eliminated and

must be activated again, until all involved objects have the status *active*. If this procedure is not completed, dictionary objects keep the status *partially active*. This often affects the data type that was originally changed, which is in fact fully usable.

The system program `RUTMSJOB` can be used to deal with *partially active* objects. It identifies *partially active* objects and proposes a cleanup if possible.

In a mass activation, a system program (`RADMASG0`) is used as a mass activator to activate a number of dictionary objects. The mass activator is provided with a list of the dictionary objects to be activated. A mass activation can be started as follows:

For mass activations that will take a long time, the mass activator can be run in background processing. In this case, the dictionary objects to be activated can be specified in an external table with type `TACOB` or in the `TACOB` table itself.

If Dictionary objects have interdependencies or belong together, mass activation is preferable to activating them individually. The mass activator activates them in the correct order and avoids unnecessary repetitions.

Activations that would produce a cycle of technical dependencies between the DDIC runtime objects are not possible. In mass activations, cyclical dependencies that arise from semantic relationships between dictionary objects are resolved by step-by-step activation. Here, the semantic relationships are first bypassed and then reintroduced.

See also [ABAP CDS - Cyclical Dependencies](ABENCDS_CYCLE_PROBLEMS.html)

-   For dependent dictionary objects, this usually happens immediately.
-   For dependent ABAP programs or dynpros, this happens the next time they are used.

-   Activations of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) also create DDIC runtime objects in the name table.

-   First, the changed data type is activated. If the activation is successful and the data type has dependent objects, its status changes to *partially active* and it is flagged accordingly.
-   The dependent objects are then activated. If a dependent object cannot be activated, its status also changes to *partially active* and it is flagged accordingly.
-   If all dependent objects are activated successfully, the changed data type is set to status *active*. Otherwise, it remains *partially active*.

-   For the changed data type, *partially active* means that it can be used without restrictions, but that there are restrictions on the dependent objects.
-   For dependent objects, *partially active* means that there are generally restrictions on their use because the previous DDIC runtime object is used, which has not yet implemented the changes of the changed data type.

-   first the dependent objects and
-   then the changed data type

-   Explicit call of the mass activator. The list of dictionary objects can be passed as follows:

-   *Direct Objects*
-   The dictionary objects to be activated can be entered in an input mask.
-   *External Table*
-   A table from the structure `TACOB` can be specified. All dictionary objects contained in this table are activated. The entries for objects that have been successfully activated are deleted from the table. If an object is not activated successfully, the corresponding entry remains in the table and an error text is saved in the relevant column.
-   *Transport Request*
-   A transport request can be specified. All dictionary objects contained in the request are activated.

-   Implicit call of the mass activator after a transport request has been imported into a target system. All dictionary objects contained in the request are activated.

abenabap.html abenabap\_dictionary.html