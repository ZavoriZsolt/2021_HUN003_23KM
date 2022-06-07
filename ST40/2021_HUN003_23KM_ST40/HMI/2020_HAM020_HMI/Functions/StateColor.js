// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var StateColor = function (nState,Blue,Yellow,Green,Red) {
        var value = Green;
        var hexaarray = [0, 0, 0, 0];
        var i, decnum=nState;

        for (i = 0; i <4; i++) {
                hexaarray[i] = hexaarray[i]+ decnum % 16;
                //console.log(hexaarray[i]);
                decnum -= decnum % 16;
                decnum /= 16;
                //console.log(decnum);
        }

        switch (hexaarray[0]) {
            case 1: //0x___1 = Slave in 'INIT' state
                value = Blue;
                break;
            case 2: //0x___2 = Slave in 'PREOP' state
                value = Yellow;
                break;
            case 3: //0x___3 = Slave in 'BOOT' state
                value = Yellow;
                break;
            case 4: //0x___4 = Slave in 'SAFEOP' state
                value = Yellow;
                break;
            case 8: //0x___8 = Slave in 'OP' state
                value = Green;
                break;
        }

        /*
        0x001_ = Slave signals error
        0x002_ = Invalid vendorId, productCode... read
        0x004_ = Initialization error occurred
        0x008_ = Slave disabled
        0x010_ = Slave not present
        0x020_ = Slave signals link error
        0x040_ = Slave signals missing link
        0x080_ = Slave signals unexpected link
        */

        if (hexaarray[1] != 0 || hexaarray[2] != 0)
            value = Red;

        return value;

    };

   
    TcHmi.Functions.registerFunction('StateColor', StateColor);
})(TcHmi);