// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var State = function (nState) {
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
            case 1: //0x___1 = Slave in 'INIT' state
                value = ' - "Init" state';
                break;
            case 2: //0x___2 = Slave in 'PREOP' state
                value = ' - "Preop" state';
                break;
            case 3: //0x___3 = Slave in 'BOOT' state
                value = ' - "Boot" state';
                break;
            case 4: //0x___4 = Slave in 'SAFEOP' state
                value = ' - "Safeop" state';
                break;
            case 8: //0x___8 = Slave in 'OP' state
                value = ' - "Op" state';
                break;
        }

        switch (hexaarray[1]) {
            case 1: //0x001_ = Slave signals error
                value = value + ' - signals error';
                break;
            case 2: //0x002_ = Invalid vendorId, productCode... read
                value = value + ' - invalid vendorId, productCode... read';
                break;
            case 4: //0x004_ = Initialization error occurred
                value = value + ' - initialization error occurred';
                break;
            case 8: //0x008_ = Slave disabled
                value = value + ' - disabled';
                break;
        }
            

        switch (hexaarray[2]) {
            case 1: //0x010_ = Slave not present
                value = value + ' - not present';
                break;
            case 2: //0x020_ = Slave signals link error
                value = value + ' - signals link error';
                break;
            case 4: //0x040_ = Slave signals missing link
                value = value + ' - signals missing link';
                break;
            case 8: //0x080_ = Slave signals unexpected link
                value = value + ' - signals unexpected link';
                break;
        }
          
        switch (hexaarray[3]) {
            case 1: //0x100_ = Communication port A
                value = value + ' - communication port A';
                break;
            case 2: //0x200_ = Communication port B
                value = value + ' - communication port B';
                break;
            case 4: //0x400_ = Communication port C
                value = value + ' - communication port C';
                break;
            case 8: //0x800_ = Communication port D
                value = value + ' - communication port D';
                break;
        }
        return value;
    };
    
    TcHmi.Functions.registerFunction('State', State);
})(TcHmi);