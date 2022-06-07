// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var Alert = function (LocalizedText) {
        alert(LocalizedText);
    };
    
    TcHmi.Functions.registerFunction('Alert', Alert);
})(TcHmi);