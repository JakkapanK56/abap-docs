---
title: "ABAPCOMMUNICATION"
description: |
  ABAPCOMMUNICATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMUNICATION.htm"
abapFile: "ABAPCOMMUNICATION.html"
keywords: ["while", "if", "case", "class", "data", "types", "ABAPCOMMUNICATION"]
---

[Short Reference](ABAPCOMMUNICATION_SHORTREF.html)

`COMMUNICATION [comstep](ABAPCOMMUNICATION_COMSTEP.html) ID id [[cpic_options](ABAPCOMMUNICATION_OPTIONS.html)].`

This statement enables cross-system communication between two ABAP programs, or between an ABAP program and a program written in another programming language. The entire communication process takes place in individual communication steps, for which the `COMMUNICATION` statement must be executed repeatedly with the corresponding additions [`comstep`](ABAPCOMMUNICATION_COMSTEP.html). For both partner programs, communication is based on the [CPI-C](ABENCPI-C_GLOSRY.html) interface, which has been defined as a communication standard by IBM as a part of the SAA standard. This interface provides the following functions in the form of the CPI-C starter set:

Coordination of the individual communication steps, recording any errors that occur in the DDIC database table `TCPIC` and, if necessary, data conversion, take place in the individual programs themselves. The parameters that determined the physical partner system for a connection are administrated in the DDIC database table `TXCOM`.

Once the connection is initialized, the system writes an eight-digit connection number in the data object `id`. This number can be used to identify individual connections. As standard, 2\*\*16 connections are possible for each calling program. `id` expects only [flat](ABENFLAT_GLOSRY.html) character-like data types, with a minimum length of eight digits.

After initialization, the connection must be established. Then, in the first connection step, all the necessary administration data is sent to the partner system. The data sent in this connection step must have a specific structure and must be available in an [EBCDIC](ABENEBCDIC_GLOSRY.html) format. The example below shows how a specifically structured structure can be converted into the EBCDIC format. The subsequent response also exists in EBCDIC format. After this initial connection has been established, data can be transferred without the need for further conversion.

During communication, the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) in the called program must not be changed. Screen output is ignored or, in the case of list output to the SAP spool system, is redirected if the statement `NEW-PAGE` was entered beforehand. [Messages](ABENMESSAGE_GLOSRY.html) of types I, S, and W are ignored, while types A and E cause the program to terminate.

In the simplest case, an ABAP program calls a subroutine in an ABAP program of another [AS ABAP](ABENAS_ABAP_GLOSRY.html). To enable this, the calling program must log on to the other system by specifying the type of CPI-C service, the logon data, the programs and subroutines, and the type of error handling. The registration takes place by sending a specific structure to the other system in EBCDIC format.

The following example shows a schematic representation of the communication between two ABAP programs P1 and P2 without querying return values. The calling program P1 first creates the connection and sends a field `connect_xstr` that contains the content of the `connect` structure converted to EBCDIC format with the necessary data. After the connection is confirmed by P2, P1 sends the actual, unconverted application data in the buffer `b`. When this data has been received, P2 sends a confirmation to P1. The connection from P1 is then closed again and the content of the buffer (*Answer*) is produced as output.

PROGRAM p1.\\ 
DATA: d    TYPE c LENGTH 8,\\ 
      id   TYPE c LENGTH 8,\\ 
      b TYPE c LENGTH 10,\\ 
      len  TYPE x LENGTH 4,\\ 
      dat  TYPE xstring,\\ 
      stat TYPE xstring,\\ 
      BEGIN OF connect,\\ 
        header   TYPE c LENGTH 12 VALUE 'CONNCPIC1',\\ 
        client   TYPE c LENGTH  3 VALUE '001',\\ 
        user     TYPE c LENGTH 12 VALUE 'BONDJ',\\ 
        password TYPE c LENGTH  8 VALUE '007',\\ 
        language TYPE c LENGTH  1 VALUE 'E',\\ 
        corr     TYPE c LENGTH  1 VALUE ' ',\\ 
        program  TYPE c LENGTH  8 VALUE 'P2',\\ 
        routine  TYPE c LENGTH 30 VALUE 'CPIC\_START',\\ 
      END OF connect,\\ 
      connect\_str  TYPE c LENGTH 75,\\ 
      connect\_xstr TYPE x LENGTH 75,\\ 
      connect\_ret  TYPE x LENGTH 75,\\ 
      converter TYPE REF TO cl\_abap\_conv\_out\_ce.\\ 
\\ 
connect\_str = connect.\\ 
converter = cl\_abap\_conv\_out\_ce=>create( encoding = '0101' ).\\ 
converter->write( data = connect\_str ).\\ 
connect\_xstr = converter->get\_buffer( ).\\ 
\\ 
d = ...\\ 
\\ 
COMMUNICATION INIT\\ 
  DESTINATION d\\ 
  ID id.\\ 
COMMUNICATION ALLOCATE\\ 
  ID id.\\ 
COMMUNICATION SEND\\ 
  BUFFER connect\_xstr\\ 
  ID id.\\ 
\\ 
                        PROGRAM p2.\\ 
                        DATA:\\ 
                          id   TYPE c LENGTH 8,\\ 
                          b TYPE c LENGTH 10,\\ 
                          len  TYPE x LENGTH 4,\\ 
                          dat  TYPE xstring,\\ 
                          stat TYPE xstring.\\ 
\\ 
                        FORM cpic\_start.\\ 
                          COMMUNICATION ACCEPT\\ 
                            ID id.\\ 
\\ 
COMMUNICATION RECEIVE\\ 
  BUFFER     connect\_ret\\ 
  DATAINFO   dat\\ 
  STATUSINFO stat\\ 
  RECEIVED   len\\ 
  ID id.\\ 
\\ 
b = 'Request'.\\ 
COMMUNICATION SEND\\ 
  BUFFER b\\ 
  ID id.\\ 
\\ 
                          COMMUNICATION RECEIVE\\ 
                            BUFFER     b\\ 
                            RECEIVED   len\\ 
                            DATAINFO   dat\\ 
                            STATUSINFO stat\\ 
                            ID         id.\\ 
                          IF b = 'Request'.\\ 
                            b = 'Answer'.\\ 
                          ENDIF.\\ 
                          COMMUNICATION SEND\\ 
                            BUFFER     b\\ 
                            ID         id.\\ 
                        ENDFORM.\\ 
\\ 
CLEAR b.\\ 
COMMUNICATION RECEIVE\\ 
  BUFFER     b\\ 
  DATAINFO   dat\\ 
  STATUSINFO stat\\ 
  RECEIVED   len\\ 
  ID         id.\\ 
\\ 
WRITE / b.\\ 
\\ 
COMMUNICATION DEALLOCATE ID id.

-   Establishing, accepting, and closing a connection
-   Sending and receiving data

-   The statement `COMMUNICATION` is not supported in classes and should no longer occur in programs, since support for the direct programming of the CPI-C interface has largely been discontinued. Instead, only the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html) is to be used for communication between programs. However, the function of the statement is maintained for supporting existing programs and for internal purposes.
-   The EBCDIC format is used in the first connection step because the CPI-C interface was mainly used for connections to R/2 systems.

-   *Cause:* No authorization to accept a `CPIC` connection.
    *Runtime error:*\\ `COMMUNICATION_ACCEPT_NO_AUTH`
-   *Cause:* No authorization to open a `CPIC` connection.
    *Runtime error:*\\ `COMMUNICATION_INIT_NO_AUTH`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenextern\_obsolete.html abenabap\_cpic.html