---
title: "ABENOS_PERSISTENCE_COMPS"
description: |
  ABENOS_PERSISTENCE_COMPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOS_PERSISTENCE_COMPS.htm"
abapFile: "ABENOS_PERSISTENCE_COMPS.html"
keywords: ["select", "delete", "do", "if", "try", "method", "class", "data", "types", "internal-table", "ABENOS", "PERSISTENCE", "COMPS"]
---

The persistence service is a software layer that manages persistent objects. This software layer consists of a general part and a class-specific part. It is made up of global classes and interfaces from the Class Library. The class-specific part is specially generated for each existing persistent class.

The class `CL_persistent` is a class created as a persistent class using the Class Builder. The objects of this class are managed by the persistence service. These objects are known as managed objects (note that a managed object does not necessarily have to be a persistent object). The Class Builder generates the `SET` and `GET` methods for the attributes of this class.

For each persistent class `CL_persistent`, the Class Builder generated two further classes: `CA_persistent` and `CB_persistent`. These classes form the class-specific part of the persistence service. `CB_persistent` is a subclass of a general abstract superclass of all class agents `CL_OS_CA_COMMON`.

`CA_persistent` is known as the class agent, which is used to manage the managed object of the class `CL_persistent`, and where database accesses actually take place. The class agent inherits its methods from the abstract superclass `CB_persistent`. The developer can expand the class agent and redefine its methods (in particular, those for accessing the database). The superclass `CB_persistent` must not be modified. Each class agent is a friend of the managed class. The class agent is a singleton: only one instance of a class agent is created when it is accessed for the first time.

The class agent implements the interfaces `IF_OS_FACTORY`, `IF_OS_CA_PERSISTENCY` and `IF_OS_CA_INSTANCE`. The interface methods can be used alongside the class methods. Interfaces also offer generic access by means of interface reference variables. In the ABAP program, interface reference variables of the same type can be used to access different class agents for different persistent classes. The interfaces represent the general part of the persistence service.

The persistent class implements the management interface `IF_OS_STATE`, which enables the managed objects of different persistent classes to be accessed in the same way.

The persistent class and the class agent are related to other interfaces and classes in the persistence service, but these are mainly used internally. To find the names of these object types, refer to the definition of the persistent class and class agent in the Class Builder.

The static attribute `AGENT` is a reference variable with the type of the class `CA_persistent`. The first time this attribute is accessed in an ABAP program, the static constructor of the class `CA_persistent` creates exactly one instance of this class, to which the attribute `AGENT` then points. This object is part of the persistence service and its methods are then used to manage the object of the persistent class. There is only one object of the class `CA_persistent` for each program. The class agent manages one or more objects of the appropriate class. Each object must have a unique key.

The Class Builder generates the following methods when the persistent class is created. They can then be redefined in the class `CA_persistent`. There are other methods available for internal use within the persistence service.

The interface `IF_OS_STATE` defines the interface of a class that can be managed with Object Services. It enables the objects of this class to be monitored and managed.

-   `CREATE_PERSISTENT`
-   Creates a new persistent object. The interface is generated in accordance with the [mapping](ABENOS_PERSISTENCE_MAPPING.html) between the persistent class and the ABAP Dictionary. If the persistent object is managed using business keys, the interface contains the relevant input parameters. If the persistent object is managed using GUIDs, a new instance GUID is generated when the object is created. There are optional importing parameters for all persistent attributes, regardless of which keys manage the object. The return value `RESULT` has the type of the persistent class and contains a reference to the new persistent object. Each program can contain only one object for each key. The object is stored in the database using the statement `COMMIT WORK`. When the persistence service creates the object, it does not check whether the object already exists in the database. An error occurs only when an attempt is made to save an existing object. It is therefore best to check whether the object already exists using the method `GET_PERSISTENT`.
-   `GET_PERSISTENT`
-   Loads a persistent object from the database and generates a suitable instance in the ABAP program. The interface is generated in accordance with the mapping between the persistent class and the ABAP Dictionary. The method exists only if the persistent object is managed using business keys and has the relevant input parameters. The return value `RESULT` has the type of the persistent class and contains a reference to the loaded persistent object. If an object with the same key already exists in the program, it is not loaded again. Instead, the system returns the reference to the object already loaded. Changes to the attributes of the instance are committed to the database using the statement `COMMIT WORK`.
-   `DELETE_PERSISTENT`
-   Deletes a persistent object. To delete the persistent object in the database as well, the statement `COMMIT WORK` must be executed. The interface is generated in accordance with the mapping between the persistent class and the ABAP Dictionary. The method exists only if the persistent object is managed using business keys and has the relevant input parameters.
-   `CREATE_TRANSIENT`
-   Creates a transient object of the persistent class. The method interface is the same as the interface for the method `CREATE_PERSISTENT`. Objects created using `CREATE_TRANSIENT` are managed by the persistence service but have no connection to the database. `CREATE_TRANSIENT` cannot be used to create more than one object with the same key in the program.
-   `GET_TRANSIENT`
-   Gets the reference to a transient object of the persistent class. The method interface is the same as the interface for the method `CREATE_PERSISTENT`. The object must have already been created with the method `CREATE_TRANSIENT`. The system does not look for a corresponding persistent object in the database.

-   `IF_OS_FACTORY~CREATE_PERSISTENT`
-   If the persistent class is not managed using business keys, this interface method can be used instead of the class method `CREATE_PERSISTENT` to create a persistent object of the class `CL_persistent`. The return value `RESULT` has the type of the persistent class and contains a reference to the new persistent object. When the object is created, a new instance GUID is generated.
-   `IF_OS_FACTORY~CREATE_PERSISTENT_BY_KEY`
-   If the persistent class is managed using business keys, this interface method can be used instead of the class method `CREATE_PERSISTENT` to create a persistent object of the class `CL_persistent`. The key is passed as a structure that has key fields as components to the generic parameter `I_KEY` of type `ANY`. The return value `RESULT` has the general type `REF TO OBJECT` and contains a reference to the new persistent object. If the persistent object is managed using GUIDs, a new instance GUID is generated when the object is created.
-   `IF_OS_FACTORY~REFRESH_PERSISTENT`
-   This method makes the system load the current attributes of a persistent object from the database into the ABAP program. It does this by passing the object reference to the input parameter `I_OBJECT` of type `IF_OS_STATE`. The current attributes are then retrieved from the database when it is next accessed (on-request loading). The management state of the object must be either `OSCON_OSTATUS_LOADED` or `OSCON_OSTATUS_NOT_LOADED`. Immediately after the method has been executed and before the attribute has been accessed, the management state is `OSCON_OSTATUS_NOT_LOADED`.
-   `IF_OS_FACTORY~DELETE_PERSISTENT`
-   Deletes a persistent object. It does this by passing the object reference to the input parameter `I_OBJECT` of type `IF_OS_STATE`. To delete the persistent object in the database as well, the statement `COMMIT WORK` must be executed.
-   `IF_OS_FACTORY~CREATE_TRANSIENT`
-   If the persistent class is not managed using business keys, this interface method can be used instead of the class method `CREATE_TRANSIENT` to create a transient object of the class `CL_persistent`. The return value `RESULT` has the type of the persistent class and contains a reference to the generated persistent object.
-   `IF_OS_FACTORY~CREATE_TRANSIENT_BY_KEY`
-   If the persistent class is managed using business keys, this interface method can be used instead of the class method `CREATE_TRANSIENT` to generate a persistent object of the class `CL_persistent`. The key is passed to the generic parameter `I_KEY` of type `ANY` as a structure whose components are the key fields. The return value `RESULT` has the general type `REF TO OBJECT` and contains a reference to the generated transient object.
-   `IF_OS_FACTORY~RELEASE`
-   Completely removes an object managed by the class agent from the management of the persistence service. It does this by passing the object reference to the input parameter `I_OBJECT` of type `IF_OS_STATE`. The management state of the object must be either `OSCON_OSTATUS_LOADED` or `OSCON_OSTATUS_NOT_LOADED`.

-   `IF_OS_CA_PERSISTENCY~GET_PERSISTENT_BY_OID`
-   If the persistent class is not managed using business keys, this interface method can be used instead of the class method `GET_PERSISTENT` to get a persistent object from the database and generate a suitable instance in the ABAP program. The object ID is passed to the parameter `I_OID` of type `OS_GUID`. The return value `RESULT` has the general type `REF TO OBJECT` and contains a reference to the persistent object.
-   `IF_OS_CA_PERSISTENCY~GET_PERSISTENT_BY_KEY`
-   If the persistent class is managed using business keys, this interface method can be used instead of the class method `GET_PERSISTENT` to get a persistent object from the database and generate a suitable instance in the ABAP program. The key is passed as a structure (with key fields as components) to the generic parameter `I_KEY` of type `ANY`. The return value `RESULT` has the general type `REF TO OBJECT` and contains a reference to the persistent object.
-   `IF_OS_CA_PERSISTENCY~GET_PERSISTENT_BY_OID_TAB`
-   If the persistent class is not managed using business keys, this interface method can be used to get more than one persistent object simultaneously from the database and to generate suitable instances in the ABAP program. The object IDs are passed to the `I_OID_TAB` parameter of type `INDEX TABLE` in an internal table. The return value `RESULT` is of general type `OSREFTAB` and contains a table of references to the persistent objects loaded. For each entry in the table, the result table has a corresponding entry at the same position that either contains an object reference to the loaded object or is initial if no object was found for the relevant ID. There is no corresponding method in the class agent.
-   `IF_OS_CA_PERSISTENCY~GET_PERSISTENT_BY_KEY_TAB`
-   If the persistent class is managed using business keys, this interface method can be used to get more than one persistent object simultaneously from the database and to generate suitable instances in the ABAP program. The object keys are passed in an internal table, whose row type has the key fields as components, to generic parameter `I_KEY_TAB` of type `INDEX TABLE`. The return value `RESULT` is of general type `OSREFTAB` and contains a table of references to the persistent objects loaded. For each entry in the key table, the result table has a corresponding entry at the same position that either contains an object reference to the loaded object or is initial if no object was found for the relevant key. There is no corresponding method in the class agent. This method can only be used if the persistent class was generated for multiple access.
-   `IF_OS_CA_PERSISTENCY~GET_PERSISTENT_BY_QUERY`
-   This interface method can be used to get more than one persistent object simultaneously from the database and to generate suitable instances in the ABAP program. A logical expression, which compares the attributes of the persistent class with freely selectable parameters or values, determines which persistent objects are loaded. The logical expression is implemented by an instance of a class that implements the interface `IF_OS_QUERY`. An instance of this type is a query object, often abbreviated to query, and can be generated using the method `CREATE_QUERY` of the interface `IF_OS_QUERY_MANAGER`. A reference to the query is passed to the parameter `I_QUERY`. The comparison values for the query are passed in an internal table to the `I_PARAMETER_TAB` parameter. If the query requires a maximum of three comparison values with an elementary type, these can also be passed individually to parameters `I_PAR1`, `I_PAR2`, and `I_PAR3`. The `I_SUBCLASSES` parameter can be used to determine whether instances of subclasses of the persistent class are also loaded. The `I_UPTO` parameter can be used to determine the maximum number of instances that can be loaded. The return value `RESULT` is of the general type `OSREFTAB` and contains a table of references to the persistent objects loaded. The query can also be used to determine how the object references are sorted. There is no corresponding method in the class agent. This method can only be used if the persistent class must have been generated for multiple access.

-   `IF_OS_CA_INSTANCE~GET_STATUS`
-   Gets the management state of a managed object. The input parameter with the general type `REF TO OBJECT` passes a reference to the managed object. The return value `RESULT` has the type `OS_STATUS` and can have the value 0, 1, 2, 3, 4, or 10. This corresponds to the constants `OSTATUS_...` of the type pool `OSCON`.
-   `IF_OS_CA_INSTANCE~GET_NOT_LOADED`
-   Gets all the objects managed by the class agent in the management state `OSCON_OSTATUS_NOT_LOADED` (0). The return value is an internal table with the general row type `REF TO object`.
-   `IF_OS_CA_INSTANCE~GET_CREATED`
-   Gets all the objects managed by the class agent in the management state `OSCON_OSTATUS_NEW` (1). The return value is an internal table with the general row type `REF TO object`.
-   `IF_OS_CA_INSTANCE~GET_LOADED`
-   Gets all the objects managed by the class agent in the management state `OSCON_OSTATUS_LOADED` (2). The return value is an internal table with the general row type `REF TO object`.
-   `IF_OS_CA_INSTANCE~GET_CHANGED`
-   Gets all the objects managed by the class agent in the management state `OSCON_OSTATUS_CHANGED` (3). The return value is an internal table with the general row type `REF TO object`.
-   `IF_OS_CA_INSTANCE~GET_DELETED`
-   Gets all the objects managed by the class agent in the management state `OSCON_OSTATUS_DELETED` (4). The return value is an internal table with the general row type `REF TO object`.
-   `IF_OS_CA_INSTANCE~GET_TRANSIENT`
-   Gets all the objects managed by the class agent in the management state `OSCON_OSTATUS_TRANSIENT` (10). The return value is an internal table with the general row type `REF TO object`.

-   `IF_OS_STATE~INIT`
-   Is called when a persistent or transient object is created and when a persistent object is loaded after persistent attributes have been set. Here, for example, transient attributes can be initialized and checking agents or event handlers registered.
-   `IF_OS_STATE~INVALIDATE`
-   Is called when a persistent object is deleted, when the reload of a persistent object is forced, and when a subsequent transaction is started after resetting the persistent attributes for persistent objects. Here, for example, transient attributes can be reset, and event handlers deregistered. It is also called when the `UNDO` service is used for resetting.
-   `IF_OS_STATE~HANDLE_EXCEPTION`
-   Is called when an exception is raised in the `GET` and `SET` methods. It raises the exception, which is passed as a parameter. The exceptions raised can be handled here. In general, however, the exceptions should be handled by the user of these methods.
-   `IF_OS_STATE~GET` and `IF_OS_STATE~SET`
-   These methods are for internal use and must not be changed.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_object\_services.html abenabap\_object\_services\_persist.html