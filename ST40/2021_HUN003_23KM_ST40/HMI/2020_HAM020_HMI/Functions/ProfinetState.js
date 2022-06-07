// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var ProfinetState = function (nState) {
        var value = '';

        switch (nState) {
            case 0:
                value = 'No error';
                break;
            case 1:
                value = 'Profinet device state machine is in boot mode';
                break;
            case 2:
                value = 'Device not found';
                break;
            case 3:
                value = 'The stationname is not unique';
                break;
            case 4:
                value = 'IP could not be set';
                break;
            case 5:
                value = 'IP conflict';
                break;
            case 6:
                value = 'DCP set was not successful';
                break;
            case 7:
                value = 'Watchdog error';
                break;
            case 8:
                value = 'Datahold error';
                break;
            case 9:
                value = 'RTC3: Sync mode could not be initiated';
                break;
            case 10:
                value = 'Profinet controller has a link error';
                break;
            case 11:
                value = 'The aliasname is not unique';
                break;
            case 12:
                value = 'The automatic name assignement is not possible - wrong device type';
                break;
            case 13:
                value = 'IOC - AR is established but no application ready';
                break;
            case 14:
                value = 'IOC - AR is established but module difference';
                break;
            case 15:
                value = 'At least one InputCR is invalid, provider in stop or problemindicator is set';
                break;
            case 16:
                value = 'At least one OutputCR is invalid, provider in stop or problemindicator is set';
                break;
            case 31:
                value = 'Only for EtherCAT gateways: WC - State of cyclic EtherCAT frame is 1';
                break;
        }
        
        return value;
    };
    
    TcHmi.Functions.registerFunction('ProfinetState', ProfinetState);
})(TcHmi);