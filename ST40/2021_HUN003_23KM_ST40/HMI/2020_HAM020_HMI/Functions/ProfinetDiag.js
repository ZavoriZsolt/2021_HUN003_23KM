// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var ProfinetDiag = function (nState) {
        var value = '';
        var hexaarray = [0, 0, 0, 0];
        var i, decnum = nState;
        
        for (i = 0; i < 4; i++) {
            hexaarray[i] = hexaarray[i] + decnum % 16;
            //console.log(hexaarray[i]);
            decnum -= decnum % 16;
            decnum /= 16;
            //console.log(decnum);
        }
        
        switch (hexaarray[0]) {
            case 0:
                value = 'No diagnosis';
                break;
            case 1:
                value = 'IOC - AR is not established';
                break;
            case 2:
                value = 'IOC - AR is established';
                break;
            case 4:
                value = 'IOC - AR is established but no application ready';
                break;
            case 8:
                value = 'IOC - AR is established but module difference';
                break;
        }

        switch (hexaarray[1]) {
            case 1:
                value = value + ' - At least one AlarmCR got a diagnosis alarm';
                break;
        }


        switch (hexaarray[2]) {
            case 1:
                value = value + '- At least one InputCR is invalid';
                break;
            case 2:
                value = value + ' - At least one InputCR Provider is in stop';
                break;
            case 4:
                value = value + ' - At least one InputCR Problemindicator is set';
                break;
        }

        switch (hexaarray[3]) {
            case 1:
                value = value + ' - At least one OutputCR is invalid';
                break;
            case 2:
                value = value + ' - At least one OutputCR Provider is in stop';
                break;
            case 4:
                value = value + ' - At least one OutputCR Problemindicator is set';
                break;
        }
        
        
        return value;
    };
    
    TcHmi.Functions.registerFunction('ProfinetDiag', ProfinetDiag);
})(TcHmi);