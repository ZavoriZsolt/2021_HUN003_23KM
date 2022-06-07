// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var ColorSelect = function (ButtonState, ColorFalse, ColorTrue) {
        var value = ColorFalse;
        if (ButtonState == false) {
            value = ColorFalse;
        }
        else if (ButtonState == true) {
            value = ColorTrue;
        }
        return value;
    };

    TcHmi.Functions.registerFunction('ColorSelect', ColorSelect);
})(TcHmi);